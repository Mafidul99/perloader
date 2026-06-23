// components/FinancialSection.jsx
import React from 'react';
import { TrendingUp, Building, Briefcase } from 'lucide-react';

const financialData = {
  shareCapital: '1,00,00,000',
  reserveFunds: '3,50,40,500',
  totalOwnFunds: '4,50,40,500',
  deposits: '23,77,21,127',
  loans: '10,97,21,157',
  investments: '16,30,40,470',
  netProfit: '5,27,197',
};

const FinancialSection = () => {
  return (
    <section className="px-4 py-20">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
            Financial Year Position{' '}
            <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
              2024-2025
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Capital & Funds Card */}
          <div className="p-6 shadow-lg rounded-xl dark:bg-gray-900 bg-slate-50">
            <h3 className="flex items-center gap-2 mb-4 text-xl font-semibold text-gray-800 dark:text-white">
              <Building size={24} className="text-[#228296]" />
              Capital & Funds
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Share Capital</span>
                <span className="font-semibold text-gray-800 dark:text-white">₹ {financialData.shareCapital}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Reserve & Other Funds</span>
                <span className="font-semibold text-gray-800 dark:text-white">₹ {financialData.reserveFunds}</span>
              </div>
              <div className="flex justify-between py-2 pt-3 border-t-2 border-[#228296]">
                <span className="font-bold text-gray-800 dark:text-white">Total Own Funds</span>
                <span className="font-bold text-[#228296]">₹ {financialData.totalOwnFunds}</span>
              </div>
            </div>
          </div>

          {/* Operations Card */}
          <div className="p-6 shadow-lg rounded-xl dark:bg-gray-900 bg-slate-50">
            <h3 className="flex items-center gap-2 mb-4 text-xl font-semibold text-gray-800 dark:text-white">
              <Briefcase size={24} className="text-[#228296]" />
              Operations
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Deposits</span>
                <span className="font-semibold text-gray-800 dark:text-white">₹ {financialData.deposits}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Loans</span>
                <span className="font-semibold text-gray-800 dark:text-white">₹ {financialData.loans}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Investments</span>
                <span className="font-semibold text-gray-800 dark:text-white">₹ {financialData.investments}</span>
              </div>
            </div>
          </div>

          {/* Net Profit Card - Full Width */}
          <div className="md:col-span-2 p-8 rounded-xl bg-gradient-to-r from-[#228296] to-[#6f3c85] shadow-lg text-center">
            <h3 className="flex items-center justify-center gap-2 mb-2 text-xl font-semibold text-white">
              <TrendingUp size={24} />
              NET PROFIT
            </h3>
            <p className="text-2xl font-bold text-white md:text-3xl">₹ {financialData.netProfit}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialSection;