import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GITHUB_USERNAME = "Bppatkar";
const LEETCODE_USERNAME = "Bppatkar";

const STATS_PATH = path.join(process.cwd(), "public", "stats.json");

async function githubGraphQL(query, variables, token) {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`GitHub GraphQL HTTP ${response.status}: ${text}`);
  }

  const json = await response.json();

  if (json.errors) {
    throw new Error(JSON.stringify(json.errors));
  }

  if (!json.data) {
    throw new Error(`GitHub GraphQL returned no data: ${JSON.stringify(json)}`);
  }

  return json.data;
}

function computeStreaks(days) {
  let longestStreak = 0;
  let tempStreak = 0;

  for (const day of days) {
    if (day.contributionCount > 0) {
      tempStreak++;
      longestStreak = Math.max(longestStreak, tempStreak);
    } else {
      tempStreak = 0;
    }
  }

  let currentStreak = 0;
  for (let i = days.length - 1; i >= 0; i--) {
    const day = days[i];
    if (day.contributionCount > 0) {
      currentStreak++;
    } else if (i === days.length - 1) {
      continue; // aaj ka din abhi khatam nahi hua, isliye streak mat todo
    } else {
      break;
    }
  }

  return { currentStreak, longestStreak };
}

async function fetchGithubStats() {
  const token = process.env.GH_TOKEN;
  if (!token) {
    throw new Error("GH_TOKEN is required to fetch GitHub stats");
  }

  const userResponse = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
      },
    }
  );
  const user = await userResponse.json();

  const calendarQuery = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const calendarData = await githubGraphQL(
    calendarQuery,
    { username: GITHUB_USERNAME },
    token
  );

  const days = calendarData.user.contributionsCollection.contributionCalendar.weeks
    .flatMap((w) => w.contributionDays)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const { currentStreak, longestStreak } = computeStreaks(days);

  const currentYear = new Date().getFullYear();
  const yearlyContributions = {};

  const yearQuery = `
    query($username: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $username) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
          }
        }
      }
    }
  `;

  for (let y = currentYear; y > currentYear - 4; y--) {
    const from = `${y}-01-01T00:00:00Z`;
    const to = `${y}-12-31T23:59:59Z`;
    const data = await githubGraphQL(
      yearQuery,
      { username: GITHUB_USERNAME, from, to },
      token
    );
    yearlyContributions[y] =
      data.user.contributionsCollection.contributionCalendar.totalContributions;
  }

  return {
    publicRepos: user.public_repos,
    followers: user.followers,
    currentStreak,
    longestStreak,
    yearlyContributions,
  };
}

async function fetchLeetcodeTotals() {
  const query = `
    query {
      allQuestionsCount {
        difficulty
        count
      }
    }
  `;

  const response = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();
  const counts = data.data.allQuestionsCount;

  return {
    easy: counts.find((c) => c.difficulty === "Easy")?.count || 0,
    medium: counts.find((c) => c.difficulty === "Medium")?.count || 0,
    hard: counts.find((c) => c.difficulty === "Hard")?.count || 0,
  };
}

async function fetchRecentSubmissions() {
  const query = `
    query recentSubmissions($username: String!) {
      recentSubmissionList(username: $username) {
        title
        statusDisplay
        lang
        timestamp
      }
    }
  `;

  const response = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query,
      variables: { username: LEETCODE_USERNAME },
    }),
  });

  const data = await response.json();
  return (data.data.recentSubmissionList || []).slice(0, 3);
}

async function fetchLeetcodeStats() {
  const query = `
    query userProfile($username: String!) {
      matchedUser(username: $username) {
        submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
          }
        }
        profile {
          ranking
        }
      }
    }
  `;

  const response = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query,
      variables: { username: LEETCODE_USERNAME },
    }),
  });

  const data = await response.json();
  const stats = data.data.matchedUser.submitStatsGlobal.acSubmissionNum;

  const solved = stats.find((item) => item.difficulty === "All");
  const easy = stats.find((item) => item.difficulty === "Easy");
  const medium = stats.find((item) => item.difficulty === "Medium");
  const hard = stats.find((item) => item.difficulty === "Hard");

  const [recentSubmissions, totals] = await Promise.all([
    fetchRecentSubmissions(),
    fetchLeetcodeTotals(),
  ]);

  return {
    solved: solved.count,
    easy: easy.count,
    medium: medium.count,
    hard: hard.count,
    ranking: data.data.matchedUser.profile.ranking,
    recentSubmissions,
    totals,
  };
}

async function updateStats() {
  console.log("Fetching GitHub stats...");
  const github = await fetchGithubStats();

  console.log("Fetching LeetCode stats...");
  const leetcode = await fetchLeetcodeStats();

  const stats = {
    github,
    leetcode,
    lastUpdated: new Date().toISOString(),
  };

  fs.writeFileSync(STATS_PATH, JSON.stringify(stats, null, 2));
  console.log("Stats updated successfully ✅");
}

updateStats().catch((error) => {
  console.error(error);
  process.exit(1);
});