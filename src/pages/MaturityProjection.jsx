import React, { useState, useMemo } from 'react';

const MaturityProjection = () => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = [
    { DailyCollection: 100, rate: '6.0%', days1: 365, days2: 730, days3: 1095, amount1: 37614.05, amount2: 77553.82, amount3: 119947.32 },
    { DailyCollection: 200, rate: '6.5%', days1: 365, days2: 730, days3: 1095, amount1: 75417.81, amount2: 155900.15, amount3: 241573.42 },
    { DailyCollection: 300, rate: '7.0%', days1: 365, days2: 730, days3: 1095, amount1: 113412.25, amount2: 235047.0, amount3: 364574.28 },
    { DailyCollection: 500, rate: '7.5%', days1: 365, days2: 730, days3: 1095, amount1: 189497.89, amount2: 393753.09, amount3: 612789.45 },
    { DailyCollection: 1000, rate: '8.0%', days1: 365, days2: 730, days3: 1095, amount1: 379953.92, amount2: 791549.48, amount3: 1234567.89 },
  ];

  // Sorting logic
  const sortedData = useMemo(() => {
    if (!sortField) return data;
    return [...data].sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];
      if (typeof aVal === 'string') {
        return sortDirection === 'asc' 
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }
      return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
    });
  }, [data, sortField, sortDirection]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const totalAmount1 = data.reduce((sum, row) => sum + row.amount1, 0);
  const totalAmount2 = data.reduce((sum, row) => sum + row.amount2, 0);
  const totalAmount3 = data.reduce((sum, row) => sum + row.amount3, 0);
  const totalDailyCollection = data.reduce((sum, row) => sum + row.DailyCollection, 0);

  // eslint-disable-next-line no-unused-vars
  const getGrowthPercentage = (amount1, amount2) => {
    return ((amount2 - amount1) / amount1 * 100).toFixed(1);
  };

  const getGrowthPercentage3Y = (amount1, amount3) => {
    return ((amount3 - amount1) / amount1 * 100).toFixed(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-800 dark:via-slate-800 dark:to-slate-800 text-slate-900 dark:text-slate-100">
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Enhanced Header with animated gradient */}
        <div className="relative mb-10 overflow-hidden border shadow-2xl bg-slate-50 dark:bg-slate-900 rounded-3xl border-slate-200/50 dark:border-slate-700/50">
          <div className="absolute inset-0 bg-gradient-to-r from-[#228296]/5 via-transparent to-[#6f3c85]/5"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#228296]/10 to-[#6f3c85]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#228296]/10 to-[#6f3c85]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block w-1.5 h-8 rounded-full bg-gradient-to-b from-[#228296] via-[#4a2c7a] to-[#6f3c85]"></span>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#228296] dark:text-[#6f3c85]">
                  Investment Insights
                </p>
              </div>
              <h1 className="text-4xl font-bold sm:text-5xl bg-gradient-to-r from-[#228296] via-[#4a2c7a] to-[#6f3c85] bg-clip-text text-transparent">
                Compound Interest Projection
              </h1>
              <p className="max-w-2xl mt-3 text-sm text-slate-600 dark:text-slate-400">
                Visualizing the power of compound interest across 1-year, 2-year, and 3-year investment horizons with fixed interest rates.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 text-sm font-medium text-white rounded-full bg-gradient-to-r from-[#228296] to-[#6f3c85] shadow-lg shadow-[#228296]/25">
                <span className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-slate-50 animate-pulse"></span>
                  Live Projection
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Cards with icons - Updated for 3 years */}
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-5">
          <div className="p-6 transition-all duration-300 border shadow-lg bg-slate-50 dark:bg-slate-900 rounded-2xl border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400">Total Daily</p>
                <p className="mt-2 text-[20px] font-bold text-slate-900 dark:text-slate-100">₹{totalDailyCollection.toLocaleString()}</p>
              </div>
              <div className="p-3 rounded-full bg-[#228296]/10">
                <svg className="w-6 h-6 text-[#228296]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v1m0 1v1m0 1v1m0 1v1" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="p-6 transition-all duration-300 border shadow-lg bg-slate-50 dark:bg-slate-900 rounded-2xl border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400">1 Year Value</p>
                <p className="mt-2 text-[20px] font-bold text-emerald-600 dark:text-emerald-400">₹{totalAmount1.toFixed(2)}</p>
              </div>
              <div className="p-3 rounded-full bg-emerald-50 dark:bg-emerald-900/20">
                <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="p-6 transition-all duration-300 border shadow-lg bg-slate-50 dark:bg-slate-900 rounded-2xl border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400">2 Year Value</p>
                <p className="mt-2 text-[20px] font-bold text-purple-600 dark:text-purple-400">₹{totalAmount2.toFixed(2)}</p>
              </div>
              <div className="p-3 rounded-full bg-purple-50 dark:bg-purple-900/20">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </div>

          <div className="p-6 transition-all duration-300 border shadow-lg bg-slate-50 dark:bg-slate-900 rounded-2xl border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400">3 Year Value</p>
                <p className="mt-2 text-[20px] font-bold text-amber-600 dark:text-amber-400">₹{totalAmount3.toFixed(2)}</p>
              </div>
              <div className="p-3 rounded-full bg-amber-50 dark:bg-amber-900/20">
                <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="p-6 transition-all duration-300 border shadow-lg bg-slate-50 dark:bg-slate-900 rounded-2xl border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400">3Y Growth</p>
                <p className="mt-2 text-[20px] font-bold text-blue-600 dark:text-blue-400">
                  {getGrowthPercentage3Y(totalAmount1, totalAmount3)}%
                </p>
              </div>
              <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/20">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Table with sorting - Updated for 3 years */}
        <div className="overflow-hidden border shadow-2xl bg-slate-50 dark:bg-slate-900 rounded-3xl border-slate-200/50 dark:border-slate-700/50">
          <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-700 bg-gradient-to-r from-[#228296]/5 to-[#6f3c85]/5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  Investment Scenarios
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  Click on column headers to sort • {data.length} scenarios displayed
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-full bg-[#228296]/10 text-[#228296] dark:bg-[#228296]/20 dark:text-[#6f3c85]">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#228296] dark:bg-[#6f3c85] animate-pulse"></span>
                  Live Data
                </div>
                <div className="px-3 py-1.5 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  {data.length} rows
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 pt-4 pb-8 overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-xl shadow-lg">
                  {['DailyCollection', 'rate', 'days1', 'days2', 'days3', 'amount1', 'amount2', 'amount3'].map((field, idx) => (
                    <th 
                      key={idx}
                      onClick={() => handleSort(field)}
                      className={`px-6 py-4 text-xs font-semibold tracking-wider text-left text-white uppercase cursor-pointer hover:bg-white/10 transition-colors duration-200 ${
                        idx === 0 ? 'rounded-tl-xl' : ''
                      } ${idx === 7 ? 'rounded-tr-xl' : ''}`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{field === 'DailyCollection' ? 'Daily Collection' : 
                               field === 'rate' ? 'IOR' :
                               field === 'days1' ? '1Y Days' :
                               field === 'days2' ? '2Y Days' :
                               field === 'days3' ? '3Y Days' :
                               field === 'amount1' ? '1Y Maturity' : 
                               field === 'amount2' ? '2Y Maturity' : '3Y Maturity'}</span>
                        {sortField === field && (
                          <span className="text-white/70">
                            {sortDirection === 'asc' ? '↑' : '↓'}
                          </span>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {sortedData.map((row, index) => {
                  // Calculate year-over-year growth
                  const growth1to2 = ((row.amount2 - row.amount1) / row.amount1 * 100).toFixed(1);
                  const growth2to3 = ((row.amount3 - row.amount2) / row.amount2 * 100).toFixed(1);
                  
                  return (
                    <tr 
                      key={index} 
                      onMouseEnter={() => setHoveredRow(index)}
                      onMouseLeave={() => setHoveredRow(null)}
                      className={`transition-all duration-300 ${
                        hoveredRow === index 
                          ? 'bg-gradient-to-r from-[#228296]/10 to-[#6f3c85]/10 shadow-lg scale-[1.01]' 
                          : 'hover:bg-gradient-to-r hover:from-[#228296]/5 hover:to-[#6f3c85]/5'
                      }`}
                    >
                      <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-slate-900 dark:text-slate-100">
                        <div className="flex items-center gap-3">
                          <span className={`inline-flex items-center justify-center w-8 h-8 text-xs font-bold rounded-full transition-all duration-300 ${
                            hoveredRow === index 
                              ? 'bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white shadow-lg scale-110' 
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                          }`}>
                            {index + 1}
                          </span>
                          <span className="font-semibold">₹{row.DailyCollection.toLocaleString()}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-bold text-[#228296] dark:text-[#6f3c85] bg-[#228296]/10 dark:bg-[#6f3c85]/10 rounded-full">
                          {row.rate}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-400">{row.days1}</td>
                      <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-400">{row.days2}</td>
                      <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-400">{row.days3}</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 shadow-sm">
                            ₹{row.amount1.toFixed(2)}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-400 shadow-sm">
                            ₹{row.amount2.toFixed(2)}
                          </span>
                          {hoveredRow === index && (
                            <span className="mt-1 text-xs text-purple-600 dark:text-purple-400">
                              ↑ {growth1to2}%
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 shadow-sm">
                            ₹{row.amount3.toFixed(2)}
                          </span>
                          {hoveredRow === index && (
                            <span className="mt-1 text-xs text-amber-600 dark:text-amber-400">
                              ↑ {growth2to3}%
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaturityProjection;