import { useState, useEffect } from 'react';
import {
  ExternalLink,
  Code2,
  Flame,
  Trophy,
  Award,
  Github,
  Activity,
  RefreshCw,
} from 'lucide-react';

const GITHUB_USER = 'Bppatkar';
const LEETCODE_USER = 'Bppatkar';

const YEARLY_CONTRIBUTIONS = { 2026: 1552, 2025: 1380, 2024: 222, 2023: 37 };

// LC totals — platform totals, not your solved count (these grow slowly)
const LC_TOTALS = { easy: 927, medium: 2013, hard: 910 };

const CodingStats = ({ setActiveSection }) => {
  const [ghYear, setGhYear] = useState('2026');
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    fetch('/stats.json')
      .then((r) => r.json())
      .then((data) => {
        setStats(data);
        setLastUpdated(data.lastUpdated);
        setLoading(false);
      })
      .catch(() => {
        setStats({
          github: { currentStreak: 17, longestStreak: 30, publicRepos: 52, followers: 12 },
          leetcode: { solved: 87, easy: 55, medium: 31, hard: 1, ranking: 1636373 },
        });
        setLoading(false);
      });
  }, []);

  const gh = stats?.github;
  const lc = stats?.leetcode;
  const lcTotal = (lc?.easy || 0) + (lc?.medium || 0) + (lc?.hard || 0);
  const lcPercent = lc ? ((lcTotal / (LC_TOTALS.easy + LC_TOTALS.medium + LC_TOTALS.hard)) * 100).toFixed(1) : '0';

  const ghYears = ['2026', '2025', '2024', '2023'];

  const Skeleton = ({ className }) => (
    <div className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg ${className}`} />
  );

  const formatDate = (iso) => {
    if (!iso) return null;
    return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  };

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
          {lastUpdated && (
            <p className="mt-3 text-sm text-gray-400 dark:text-gray-500 flex items-center justify-center gap-1.5">
              <RefreshCw className="w-3 h-3" />
              Stats updated: {formatDate(lastUpdated)} · auto-refreshes every 2 weeks
            </p>
          )}
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

              {/* Streak tiles */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-3 border border-gray-200 dark:border-gray-700 flex items-center gap-3">
                  <span className="text-2xl">🔥</span>
                  <div>
                    {loading ? <Skeleton className="h-7 w-10 mb-1" /> : (
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">{gh?.currentStreak}</p>
                    )}
                    <p className="text-xs text-gray-500 dark:text-gray-400">Current streak</p>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-3 border border-gray-200 dark:border-gray-700 flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                  <div>
                    {loading ? <Skeleton className="h-7 w-10 mb-1" /> : (
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">{gh?.longestStreak}</p>
                    )}
                    <p className="text-xs text-gray-500 dark:text-gray-400">Longest streak</p>
                  </div>
                </div>
              </div>

              {/* Yearly counts */}
              <div className="grid grid-cols-4 gap-2 mb-5">
                {Object.entries(YEARLY_CONTRIBUTIONS).reverse().map(([year, count]) => (
                  <div key={year} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-2 text-center border border-gray-200 dark:border-gray-700">
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{year}</p>
                    <p className="text-sm font-bold text-gray-900 dark:text-white mt-0.5">
                      {count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count}
                    </p>
                  </div>
                ))}
              </div>

              {/* Streak image */}
              <div className="rounded-xl overflow-hidden bg-[#0D1117] p-2">
                <img
                  src={`https://streak-stats.demolab.com?user=${GITHUB_USER}&theme=github-dark&hide_border=true&background=0D1117&stroke=58A6FF&ring=58A6FF&fire=FF6B35&currStreakLabel=58A6FF&sideLabels=C9D1D9&dates=C9D1D9`}
                  alt="GitHub Streak Stats"
                  className="w-full rounded-lg"
                  loading="lazy"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
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

              {/* Donut + breakdown */}
              <div className="flex items-center gap-5 mb-4 bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 border border-gray-200 dark:border-gray-700">
                <div className="relative w-24 h-24 shrink-0">
                  {loading ? (
                    <Skeleton className="w-24 h-24 rounded-full" />
                  ) : (
                    <>
                      <svg viewBox="0 0 36 36" className="w-24 h-24 -rotate-90">
                        <circle cx="18" cy="18" r="15.9" fill="none" strokeWidth="3" stroke="#e5e7eb" className="dark:stroke-gray-700" />
                        <circle cx="18" cy="18" r="15.9" fill="none" strokeWidth="3" stroke="#22c55e"
                          strokeDasharray={`${(lc.easy / (LC_TOTALS.easy + LC_TOTALS.medium + LC_TOTALS.hard)) * 100} 100`} />
                        <circle cx="18" cy="18" r="15.9" fill="none" strokeWidth="3" stroke="#eab308"
                          strokeDasharray={`${(lc.medium / (LC_TOTALS.easy + LC_TOTALS.medium + LC_TOTALS.hard)) * 100} 100`}
                          strokeDashoffset={`${-(lc.easy / (LC_TOTALS.easy + LC_TOTALS.medium + LC_TOTALS.hard)) * 100}`} />
                        <circle cx="18" cy="18" r="15.9" fill="none" strokeWidth="3" stroke="#ef4444"
                          strokeDasharray={`${(lc.hard / (LC_TOTALS.easy + LC_TOTALS.medium + LC_TOTALS.hard)) * 100} 100`}
                          strokeDashoffset={`${-((lc.easy + lc.medium) / (LC_TOTALS.easy + LC_TOTALS.medium + LC_TOTALS.hard)) * 100}`} />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-xl font-bold text-gray-900 dark:text-white leading-none">{lc.solved}</span>
                        <span className="text-xs text-gray-400">solved</span>
                      </div>
                    </>
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Difficulty Breakdown</p>
                  {loading ? (
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  ) : (
                    [
                      { label: 'Easy',   val: lc.easy,   total: LC_TOTALS.easy,   dot: 'bg-green-500',  text: 'text-green-600 dark:text-green-400',  bar: 'bg-green-500' },
                      { label: 'Medium', val: lc.medium, total: LC_TOTALS.medium, dot: 'bg-yellow-500', text: 'text-yellow-600 dark:text-yellow-400', bar: 'bg-yellow-500' },
                      { label: 'Hard',   val: lc.hard,   total: LC_TOTALS.hard,   dot: 'bg-red-500',    text: 'text-red-600 dark:text-red-400',       bar: 'bg-red-500' },
                    ].map(({ label, val, total, dot, text, bar }) => (
                      <div key={label} className="flex items-center gap-2 mb-1.5">
                        <div className={`w-2 h-2 ${dot} rounded-full shrink-0`} />
                        <span className={`text-xs font-semibold w-12 ${text}`}>{label}</span>
                        <div className="flex-1 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className={`h-full ${bar} rounded-full`} style={{ width: `${(val / total) * 100}%` }} />
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-300 font-medium w-14 text-right">{val}/{total}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Ranking */}
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 mb-3">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Global Ranking</span>
                </div>
                {loading ? <Skeleton className="h-4 w-24" /> : (
                  <span className="text-sm font-bold text-gray-900 dark:text-white">
                    #{lc?.ranking?.toLocaleString()}
                  </span>
                )}
              </div>

              {/* Overall progress */}
              <div className="mb-4">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-gray-500 dark:text-gray-400 font-medium">Overall Progress</span>
                  {loading ? <Skeleton className="h-3 w-20" /> : (
                    <span className="font-bold text-orange-500">{lc?.solved} / {LC_TOTALS.easy + LC_TOTALS.medium + LC_TOTALS.hard}</span>
                  )}
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full transition-all duration-700"
                    style={{ width: loading ? '0%' : `${lcPercent}%` }} />
                </div>
              </div>

              {/* Recent Submissions */}
              <div>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                  <Activity className="w-3 h-3" /> Recent Submissions
                </p>
                <div className="space-y-2">
                  {[
                    { name: 'Peak Index in a Mountain...', status: 'Accepted', lang: 'JavaScript' },
                    { name: 'Find First and Last Pos...', status: 'Accepted', lang: 'JavaScript' },
                    { name: 'Find First and Last Pos...', status: 'Accepted', lang: 'JavaScript' },
                  ].map((sub, i) => (
                    <div key={i} className="flex items-center justify-between text-xs bg-gray-50 dark:bg-gray-800 rounded-lg px-3 py-2 border border-gray-200 dark:border-gray-700">
                      <span className="text-gray-700 dark:text-gray-300 truncate max-w-[50%]">{sub.name}</span>
                      <span className="text-green-500 font-semibold">{sub.status}</span>
                      <span className="text-gray-400">{sub.lang}</span>
                    </div>
                  ))}
                </div>
              </div>
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
                    {YEARLY_CONTRIBUTIONS[ghYear].toLocaleString()} contributions in {ghYear}
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
                    }`}>{y}
                  </button>
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
                    {YEARLY_CONTRIBUTIONS[y] >= 1000 ? `${(YEARLY_CONTRIBUTIONS[y] / 1000).toFixed(1)}k` : YEARLY_CONTRIBUTIONS[y]}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">contributions</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ROW 3 — LeetCode Quick Stats (simple, no chart) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {loading ? (
            Array(4).fill(0).map((_, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-200 dark:border-gray-700 animate-pulse">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-3 w-16 mx-auto" />
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-12 mx-auto" />
              </div>
            ))
          ) : (
            [
              { emoji: '⚡', label: 'Total Solved', val: lc?.solved, color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-900/10', border: 'border-orange-200 dark:border-orange-800' },
              { emoji: '🟢', label: 'Easy', val: lc?.easy, color: 'text-green-600 dark:text-green-400', bg: 'bg-green-50 dark:bg-green-900/10', border: 'border-green-200 dark:border-green-800' },
              { emoji: '🟡', label: 'Medium', val: lc?.medium, color: 'text-yellow-600 dark:text-yellow-400', bg: 'bg-yellow-50 dark:bg-yellow-900/10', border: 'border-yellow-200 dark:border-yellow-800' },
              { emoji: '🔴', label: 'Hard', val: lc?.hard, color: 'text-red-600 dark:text-red-400', bg: 'bg-red-50 dark:bg-red-900/10', border: 'border-red-200 dark:border-red-800' },
            ].map(({ emoji, label, val, color, bg, border }) => (
              <div key={label} className={`${bg} rounded-2xl p-5 shadow-xl border ${border} text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}>
                <span className="text-3xl">{emoji}</span>
                <p className={`text-3xl font-bold mt-2 ${color}`}>{val}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">{label}</p>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
};

export default CodingStats;