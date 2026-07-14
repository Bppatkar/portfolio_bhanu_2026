import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GITHUB_USERNAME = "Bppatkar";
const LEETCODE_USERNAME = "Bppatkar";

const STATS_PATH = path.join(
  process.cwd(),
  "public",
  "stats.json"
);


async function fetchGithubStats() {
  const token = process.env.GH_TOKEN;

  const headers = {
    Accept: "application/vnd.github+json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }


  const userResponse = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}`,
    {
      headers,
    }
  );

  const user = await userResponse.json();


  const eventsResponse = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/events/public`,
    {
      headers,
    }
  );

  const events = await eventsResponse.json();


  return {
    publicRepos: user.public_repos,
    followers: user.followers,
    totalContributions: "0",
    currentStreak: 0,
    longestStreak: 0,
  };
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


  const response = await fetch(
    "https://leetcode.com/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          username: LEETCODE_USERNAME,
        },
      }),
    }
  );


  const data = await response.json();

  const stats =
    data.data.matchedUser.submitStatsGlobal.acSubmissionNum;


  const solved = stats.find(
    (item) => item.difficulty === "All"
  );

  const easy = stats.find(
    (item) => item.difficulty === "Easy"
  );

  const medium = stats.find(
    (item) => item.difficulty === "Medium"
  );

  const hard = stats.find(
    (item) => item.difficulty === "Hard"
  );


  return {
    solved: solved.count,
    easy: easy.count,
    medium: medium.count,
    hard: hard.count,
    ranking:
      data.data.matchedUser.profile.ranking,
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


  fs.writeFileSync(
    STATS_PATH,
    JSON.stringify(stats, null, 2)
  );


  console.log("Stats updated successfully ✅");
}



updateStats()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });