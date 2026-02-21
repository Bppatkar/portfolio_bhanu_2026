import { useState } from 'react';
import {
  ExternalLink,
  Code2,
  Flame,
  Trophy,
  Award,
  Github,
  Activity,
  TrendingUp,
  Star,
} from 'lucide-react';

const GITHUB_USER = 'Bppatkar';
const LEETCODE_USER = 'Bppatkar';

const STATS = {
  github: {
    contributions: { 2026: 1552, 2025: 1380, 2024: 222, 2023: 37 },
    currentStreak: 16,
    longestStreak: 30,
  },
  leetcode: {
    solved: 86,
    easy: { solved: 55, total: 927 },
    medium: { solved: 30, total: 2010 },
    hard: { solved: 1, total: 909 },
    total: 3846,
    ranking: 1636373,
    monthlyActivity: {
      2026: [6, 8, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      2025: [4, 3, 6, 5, 4, 3, 5, 6, 4, 5, 7, 8],
    },
    recentSubmissions: [
      { name: 'Peak Index in a Mountain...', status: 'Accepted', lang: 'JavaScript' },
      { name: 'Find First and Last Pos...', status: 'Accepted', lang: 'JavaScript' },
      { name: 'Find First and Last Pos...', status: 'Accepted', lang: 'JavaScript' },
    ],
  },
};

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

// ✅ Defined BEFORE CodingStats — fixes ReferenceError
const LCBarChart = ({ year }) => {
  const data = STATS.leetcode.monthlyActivity[year] || Array(12).fill(0);
  const maxVal = Math.max(...data, 1);
  return (
    <div className="w-full">
      <div className="flex items-end gap-1.5 h-20">
        {data.map((val, i) => {
          const pct = (val / maxVal) * 100;
          const isActive = val > 0;
          return (
            <div key={i} className="flex-1 flex flex-col items-end group relative">
              {isActive && (
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                  {val} solved
                </div>
              )}
              <div
                className="w-full rounded-t-sm transition-all duration-500"
                style={{
                  height: `${Math.max(pct, isActive ? 8 : 2)}%`,
                  background: isActive ? 'linear-gradient(to top, #f97316, #fbbf24)' : '#1f2937',
                  opacity: isActive ? 1 : 0.3,
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="flex gap-1.5 mt-1">
        {MONTHS.map((m) => (
          <div key={m} className="flex-1 text-center text-gray-500 dark:text-gray-600" style={{ fontSize: '9px' }}>
            {m}
          </div>
        ))}
      </div>
    </div>
  );
};

const CodingStats = ({ setActiveSection }) => {
  const [ghYear, setGhYear] = useState('2026');
  const [lcYear, setLcYear] = useState('2026');
  const lcPercent = ((STATS.leetcode.solved / STATS.leetcode.total) * 100).toFixed(1);

  const ghYears = ['2026', '2025', '2024', '2023'];
  const lcYears = ['2026', '2025'];

  return (
    <section
      id="coding-stats"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      onMouseEnter={() => setActiveSection && setActiveSection('coding-stats')}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Coding Activity
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 dark:text-gray-300">
            GitHub contributions + LeetCode progress — all in one place
          </p>
        </div>

        {/* ROW 1 — Stats Side by Side */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">

          {/* GitHub Stats */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="h-1 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600" />
            <div className="p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-900 dark:bg-white rounded-xl flex items-center justify-center">
                    <Github className="w-5 h-5 text-white dark:text-gray-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white leading-none">GitHub Stats</h3>
                    <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noopener noreferrer"
                      className="text-xs text-blue-500 hover:underline flex items-center gap-1 mt-0.5">
                      @{GITHUB_USER} <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 bg-green-100 dark:bg-green-900/30 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-semibold text-green-700 dark:text-green-400">LIVE</span>
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-3 border border-gray-200 dark:border-gray-700 flex items-center gap-3">
                  <span className="text-2xl">🔥</span>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{STATS.github.currentStreak}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Current streak</p>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-3 border border-gray-200 dark:border-gray-700 flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{STATS.github.longestStreak}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Longest streak</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 mb-5">
                {Object.entries(STATS.github.contributions).reverse().map(([year, count]) => (
                  <div key={year} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-2 text-center border border-gray-200 dark:border-gray-700">
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{year}</p>
                    <p className="text-sm font-bold text-gray-900 dark:text-white mt-0.5">
                      {count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl overflow-hidden bg-[#0D1117] p-2 mb-4">
                <img
                  src={`https://streak-stats.demolab.com?user=${GITHUB_USER}&theme=github-dark&hide_border=true&background=0D1117&stroke=58A6FF&ring=58A6FF&fire=FF6B35&currStreakLabel=58A6FF&sideLabels=C9D1D9&dates=C9D1D9`}
                  alt="GitHub Streak Stats"
                  className="w-full rounded-lg"
                  loading="lazy"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>

              <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-700 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg">
                View GitHub Profile <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* LeetCode Stats */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="h-1 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500" />
            <div className="p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white leading-none">LeetCode Stats</h3>
                    <a href={`https://leetcode.com/u/${LEETCODE_USER}/`} target="_blank" rel="noopener noreferrer"
                      className="text-xs text-orange-500 hover:underline flex items-center gap-1 mt-0.5">
                      @{LEETCODE_USER} <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 bg-orange-100 dark:bg-orange-900/30 px-3 py-1.5 rounded-full">
                  <Flame className="w-3 h-3 text-orange-500" />
                  <span className="text-xs font-semibold text-orange-700 dark:text-orange-400">ACTIVE</span>
                </span>
              </div>

              <div className="flex items-center gap-5 mb-4 bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 border border-gray-200 dark:border-gray-700">
                <div className="relative w-24 h-24 shrink-0">
                  <svg viewBox="0 0 36 36" className="w-24 h-24 -rotate-90">
                    <circle cx="18" cy="18" r="15.9" fill="none" strokeWidth="3" stroke="#e5e7eb" className="dark:stroke-gray-700" />
                    <circle cx="18" cy="18" r="15.9" fill="none" strokeWidth="3" stroke="#22c55e"
                      strokeDasharray={`${(STATS.leetcode.easy.solved / STATS.leetcode.total) * 100} 100`} />
                    <circle cx="18" cy="18" r="15.9" fill="none" strokeWidth="3" stroke="#eab308"
                      strokeDasharray={`${(STATS.leetcode.medium.solved / STATS.leetcode.total) * 100} 100`}
                      strokeDashoffset={`${-(STATS.leetcode.easy.solved / STATS.leetcode.total) * 100}`} />
                    <circle cx="18" cy="18" r="15.9" fill="none" strokeWidth="3" stroke="#ef4444"
                      strokeDasharray={`${(STATS.leetcode.hard.solved / STATS.leetcode.total) * 100} 100`}
                      strokeDashoffset={`${-((STATS.leetcode.easy.solved + STATS.leetcode.medium.solved) / STATS.leetcode.total) * 100}`} />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xl font-bold text-gray-900 dark:text-white leading-none">{STATS.leetcode.solved}</span>
                    <span className="text-xs text-gray-400">solved</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Difficulty Breakdown</p>
                  {[
                    { label: 'Easy',   ...STATS.leetcode.easy,   dot: 'bg-green-500',  text: 'text-green-600 dark:text-green-400',  bar: 'bg-green-500' },
                    { label: 'Medium', ...STATS.leetcode.medium, dot: 'bg-yellow-500', text: 'text-yellow-600 dark:text-yellow-400', bar: 'bg-yellow-500' },
                    { label: 'Hard',   ...STATS.leetcode.hard,   dot: 'bg-red-500',    text: 'text-red-600 dark:text-red-400',       bar: 'bg-red-500' },
                  ].map(({ label, solved, total, dot, text, bar }) => (
                    <div key={label} className="flex items-center gap-2 mb-1.5">
                      <div className={`w-2 h-2 ${dot} rounded-full shrink-0`} />
                      <span className={`text-xs font-semibold w-12 ${text}`}>{label}</span>
                      <div className="flex-1 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className={`h-full ${bar} rounded-full`} style={{ width: `${(solved / total) * 100}%` }} />
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-300 font-medium w-14 text-right">{solved}/{total}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 mb-3">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Global Ranking</span>
                </div>
                <span className="text-sm font-bold text-gray-900 dark:text-white">#{STATS.leetcode.ranking.toLocaleString()}</span>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-gray-500 dark:text-gray-400 font-medium">Overall Progress</span>
                  <span className="font-bold text-orange-500">{STATS.leetcode.solved} / {STATS.leetcode.total}</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full" style={{ width: `${lcPercent}%` }} />
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                  <Activity className="w-3 h-3" /> Recent Submissions
                </p>
                <div className="space-y-2">
                  {STATS.leetcode.recentSubmissions.map((sub, i) => (
                    <div key={i} className="flex items-center justify-between text-xs bg-gray-50 dark:bg-gray-800 rounded-lg px-3 py-2 border border-gray-200 dark:border-gray-700">
                      <span className="text-gray-700 dark:text-gray-300 truncate max-w-[50%]">{sub.name}</span>
                      <span className="text-green-500 font-semibold">{sub.status}</span>
                      <span className="text-gray-400">{sub.lang}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a href={`https://leetcode.com/u/${LEETCODE_USER}/`} target="_blank" rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg">
                View Full LeetCode Profile <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* ROW 2 — GitHub Contribution Graph */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
          <div className="h-1 bg-gradient-to-r from-gray-700 via-blue-500 to-gray-700" />
          <div className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white leading-none">GitHub Contributions</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                    {STATS.github.contributions[ghYear].toLocaleString()} contributions in {ghYear}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                {ghYears.map((y) => (
                  <button key={y} onClick={() => setGhYear(y)}
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      ghYear === y
                        ? 'bg-gradient-to-r from-blue-600 to-gray-700 text-white shadow-md'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}>{y}</button>
                ))}
              </div>
            </div>

            <div className="rounded-xl overflow-hidden bg-[#0D1117] p-4">
              <img
                key={`gh-activity-${ghYear}`}
                src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USER}&theme=github-compact&bg_color=0D1117&color=58A6FF&line=58A6FF&point=FFFFFF&area=true&hide_border=true&custom_title=${ghYear}+Contribution+Graph&from=${ghYear}-01-01&to=${ghYear}-12-31`}
                alt={`GitHub ${ghYear} Activity Graph`}
                className="w-full rounded-lg"
                loading="lazy"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>

            <div className="grid grid-cols-4 gap-3 mt-4">
              {ghYears.map((y) => (
                <button key={y} onClick={() => setGhYear(y)}
                  className={`rounded-xl p-3 text-center border transition-all duration-300 ${
                    ghYear === y
                      ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-700'
                      : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-300'
                  }`}>
                  <p className={`text-xs font-bold uppercase mb-1 ${ghYear === y ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}>{y}</p>
                  <p className={`text-lg font-bold ${ghYear === y ? 'text-blue-700 dark:text-blue-300' : 'text-gray-900 dark:text-white'}`}>
                    {STATS.github.contributions[y] >= 1000 ? `${(STATS.github.contributions[y] / 1000).toFixed(1)}k` : STATS.github.contributions[y]}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">contributions</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ROW 3 — LeetCode Activity */}
        {/* <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500" />
          <div className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/40 rounded-lg">
                  <Code2 className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white leading-none">LeetCode Activity</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Monthly problems solved — {lcYear}</p>
                </div>
              </div>
              <div className="flex gap-2">
                {lcYears.map((y) => (
                  <button key={y} onClick={() => setLcYear(y)}
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      lcYear === y
                        ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}>{y}</button>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700 mb-5">
              <LCBarChart year={lcYear} />
            </div>

            <div className="rounded-xl overflow-hidden bg-[#1a1a1a] p-3 mb-5">
              <img
                key={lcYear}
                src={`https://leetcard.jacoblin.cool/${LEETCODE_USER}?theme=dark&font=Nunito&ext=heatmap&border=0&radius=4&width=800`}
                alt="LeetCode Heatmap"
                className="w-full rounded-lg"
                loading="lazy"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: <Code2 className="w-4 h-4 text-orange-500" />, label: 'Total Solved', val: STATS.leetcode.solved, sub: 'problems' },
                { icon: <TrendingUp className="w-4 h-4 text-green-500" />, label: 'Acceptance', val: '67.3%', sub: 'avg rate' },
                { icon: <Star className="w-4 h-4 text-yellow-500" />, label: 'Ranking', val: `#${(STATS.leetcode.ranking / 1000000).toFixed(2)}M`, sub: 'global' },
              ].map(({ icon, label, val, sub }) => (
                <div key={label} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 text-center">
                  <div className="flex justify-center mb-2">{icon}</div>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{val}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default CodingStats;