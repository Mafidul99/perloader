import React from 'react';

const growthData = [
  { label: 'Jan', value: 42 },
  { label: 'Feb', value: 58 },
  { label: 'Mar', value: 64 },
  { label: 'Apr', value: 73 },
  { label: 'May', value: 85 },
  { label: 'Jun', value: 94 },
];

const highlights = [
  { label: 'Savings Growth', value: '+18.4%', tone: 'text-emerald-500' },
  { label: 'Customer Trust', value: '+12.1%', tone: 'text-sky-500' },
  { label: 'Digital Usage', value: '+24.7%', tone: 'text-violet-500' },
];

const LiveChart = () => {
  const maxValue = Math.max(...growthData.map((item) => item.value));

  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="overflow-hidden rounded-[28px] border border-gray-200/70 bg-white/90 p-6 shadow-[0_20px_80px_-30px_rgba(34,130,150,0.35)] backdrop-blur dark:border-gray-700 dark:bg-gray-900/80 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#228296] dark:text-[#57d5ec]">
                Live Growth Overview
              </p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                Performance that keeps moving forward
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
              Live now
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-[#228296]/10 via-white to-[#6f3c85]/10 p-4 dark:border-gray-700 dark:from-[#228296]/20 dark:via-gray-900 dark:to-[#6f3c85]/20">
              <svg viewBox="0 0 360 180" className="h-56 w-full" role="img" aria-label="Live chart showing steady growth">
                <path d="M20 150 C60 120, 90 95, 120 100 S180 125, 220 90 S280 55, 340 40" fill="none" stroke="#228296" strokeWidth="4" strokeLinecap="round" />
                <path d="M20 150 C60 120, 90 95, 120 100 S180 125, 220 90 S280 55, 340 40 L340 160 L20 160 Z" fill="url(#chartFill)" opacity="0.35" />
                <defs>
                  <linearGradient id="chartFill" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#228296" />
                    <stop offset="100%" stopColor="#6f3c85" />
                  </linearGradient>
                </defs>
                {growthData.map((item, index) => {
                  const x = 30 + index * 55;
                  const y = 160 - (item.value / maxValue) * 95;
                  return (
                    <g key={item.label}>
                      <circle cx={x} cy={y} r="6" fill="#ffffff" stroke="#228296" strokeWidth="3" />
                      <circle cx={x} cy={y} r="12" fill="#228296" opacity="0.14" />
                    </g>
                  );
                })}
              </svg>
              <div className="mt-2 flex justify-between text-sm text-gray-600 dark:text-gray-300">
                {growthData.map((item) => (
                  <span key={item.label}>{item.label}</span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-gray-200 bg-gray-50/80 p-4 dark:border-gray-700 dark:bg-gray-800/70">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{item.label}</span>
                    <span className={`text-sm font-semibold ${item.tone}`}>{item.value}</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                    <div className={`h-full rounded-full ${item.tone.includes('emerald') ? 'bg-emerald-500' : item.tone.includes('sky') ? 'bg-sky-500' : 'bg-violet-500'}`} style={{ width: `${Math.min(100, 70 + item.value.replace('%', '').replace('+', '') / 2)}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveChart;
