import React, { useState } from 'react';
import { 
  TrendingUp, 
  Shield, 
  Clock, 
  ArrowRight, 
  CheckCircle,
  Calendar,
  Percent,
  IndianRupee,
  Award,
  RefreshCw,
  Lock,
  Sparkles,
  Calculator,
  Target
} from 'lucide-react';

const FixedDeposit = () => {
  const [fdAmount, setFdAmount] = useState(50000);
  const [tenure, setTenure] = useState(12);
  const [seniorCitizen, setSeniorCitizen] = useState(false);
  const [fdType, setFdType] = useState('cumulative');

  const calculateMaturity = () => {
    let rate = 7.2; // Base rate
    if (seniorCitizen) rate += 0.5;
    if (fdType === 'cumulative') {
      // Compound interest calculation
      const monthlyRate = rate / 12 / 100;
      const months = tenure;
      const maturity = fdAmount * Math.pow(1 + monthlyRate, months);
      return maturity.toFixed(2);
    } else {
      // Simple interest for non-cumulative
      const interest = fdAmount * (rate / 100) * (tenure / 12);
      return (fdAmount + interest).toFixed(2);
    }
  };

  const interestEarned = (calculateMaturity() - fdAmount).toFixed(2);
  const applicableRate = seniorCitizen ? 7.7 : 7.2;

  const fdPlans = [
    { tenure: '7-45 days', rate: '5.5%', seniorRate: '6.0%' },
    { tenure: '46-180 days', rate: '6.0%', seniorRate: '6.5%' },
    { tenure: '6-12 months', rate: '6.5%', seniorRate: '7.0%' },
    { tenure: '1-2 years', rate: '7.2%', seniorRate: '7.7%' },
    { tenure: '2-5 years', rate: '7.5%', seniorRate: '8.0%' },
    { tenure: '5-10 years', rate: '7.0%', seniorRate: '7.5%' }
  ];

  const features = [
    { icon: <Shield size={24} />, title: 'Deposit Insurance', desc: 'Covered up to ₹5 Lakhs under DICGC' },
    { icon: <Award size={24} />, title: 'Highest Returns', desc: 'Industry-leading interest rates' },
    { icon: <RefreshCw size={24} />, title: 'Auto-renewal', desc: 'Flexible renewal options' },
    { icon: <Lock size={24} />, title: 'Loan Against FD', desc: 'Get up to 90% loan against your FD' },
    { icon: <Sparkles size={24} />, title: 'Tax Benefits', desc: 'Save tax under Section 80C' },
    { icon: <Clock size={24} />, title: 'Flexible Tenure', desc: 'Choose from 7 days to 10 years' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#228296] via-[#2c9cb3] to-[#6f3c85]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative px-4 py-10 mx-auto md:pt-8 md:pb-24">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-3 py-2 mb-2 text-sm font-semibold rounded-full bg-gradient-to-r from-[#1a5b6b] to-[#6f3c85] backdrop-blur-sm">
              <TrendingUp size={16} className="mr-2" />
              Highest Returns on Fixed Deposits
            </div>
            <h1 className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">
              Fixed Deposit
            </h1>
            <p className="mb-3 text-lg text-white/90 md:text-xl">
              Grow your savings with guaranteed returns up to 7.7% p.a.* 
              Senior citizens get additional 0.50% interest rate
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="inline-flex items-center justify-center px-6 py-3 font-semibold text-[#228296] transition-all bg-white rounded-lg hover:shadow-xl hover:scale-105">
                Invest Now
                <ArrowRight size={18} className="ml-2" />
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white transition-all border-2 border-white rounded-lg hover:bg-white/10 hover:scale-105">
                Calculate Returns
                <Calculator size={18} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#f9fafb" className="dark:fill-gray-800">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      <div className="container px-4 py-12 mx-auto">
        {/* FD Calculator */}
        <div className="p-8 mb-16 rounded-lg shadow-xl bg-gray-50 dark:bg-gray-900">
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-800 dark:text-gray-300">FD Interest {''}
                <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                Calculator
              </span>
              </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">Investment Amount</label>
                <input
                  type="range"
                  min="1000"
                  max="10000000"
                  step="1000"
                  value={fdAmount}
                  onChange={(e) => setFdAmount(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">₹1,000</span>
                  <span className="font-semibold text-[#228296]">₹{fdAmount.toLocaleString()}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">₹1 Crore</span>
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">Tenure (Months)</label>
                <input
                  type="range"
                  min="3"
                  max="120"
                  step="3"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">3 months</span>
                  <span className="font-semibold text-[#228296]">{tenure} months ({Math.floor(tenure/12)} years {tenure%12} months)</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">10 years</span>
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">FD Type</label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setFdType('cumulative')}
                    className={`flex-1 py-2 rounded-lg transition-all ${fdType === 'cumulative' ? 'bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white' : 'bg-gray-100 text-gray-700'}`}
                  >
                    Cumulative
                  </button>
                  <button
                    onClick={() => setFdType('non-cumulative')}
                    className={`flex-1 py-2 rounded-lg transition-all ${fdType === 'non-cumulative' ? 'bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white' : 'bg-gray-100 text-gray-700'}`}
                  >
                    Non-Cumulative
                  </button>
                </div>
              </div>
              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={seniorCitizen}
                    onChange={(e) => setSeniorCitizen(e.target.checked)}
                    className="w-4 h-4 text-[#228296]"
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-400">Senior Citizen (60+ years)</span>
                </label>
              </div>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800">
              <h3 className="mb-4 text-xl font-bold text-gray-800 dark:text-gray-300">Investment Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Principal Amount:</span>
                  <span className="font-semibold text-gray-800 dark:text-gray-400">₹{fdAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Interest Rate:</span>
                  <span className="font-semibold text-[#228296]">{applicableRate}% p.a.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Interest Earned:</span>
                  <span className="font-semibold text-green-600">₹{parseFloat(interestEarned).toLocaleString()}</span>
                </div>
                <div className="pt-3 mt-3 border-t-2 border-gray-300">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-gray-800 dark:text-gray-300">Maturity Amount:</span>
                    <span className="text-xl font-bold text-[#a654cb]">₹{parseFloat(calculateMaturity()).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interest Rate Table */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-gray-300">Interest Rate {''}
                <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                Structure
              </span></h2>
            <p className="text-gray-600 dark:text-gray-400">Competitive rates for all tenures</p>
          </div>
          <div className="overflow-x-auto rounded-lg shadow-lg bg-gray-50 dark:bg-gray-900">
            <table className="min-w-full">
              <thead className="bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Tenure</th>
                  <th className="px-6 py-3 text-left">General Public (% p.a.)</th>
                  <th className="px-6 py-3 text-left">Senior Citizen (% p.a.)</th>
                </tr>
              </thead>
              <tbody>
                {fdPlans.map((plan, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-3 font-medium text-gray-800 dark:text-gray-300">{plan.tenure}</td>
                    <td className="px-6 py-3 text-gray-800 dark:text-gray-300">{plan.rate}</td>
                    <td className="px-6 py-3 text-[#228296] font-semibold">{plan.seniorRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400">*Rates are subject to change. Senior citizen rates include additional 0.50%</p>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="p-6 transition-all duration-300 rounded-lg shadow-lg bg-gray-50 dark:bg-gray-900 hover:shadow-xl">
                <div className="mb-4 text-[#228296]">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-300">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="p-8 mb-16 text-white rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85]">
          <div className="text-center">
            <Target size={48} className="mx-auto mb-4" />
            <h2 className="mb-4 text-3xl font-bold">Why Invest with Us?</h2>
            <p className="mb-8 text-lg">Experience unmatched security, higher returns, and complete transparency</p>
            <div className="grid gap-6 md:grid-cols-4">
              <div>
                <div className="text-3xl font-bold">1 Cr+</div>
                <div className="mt-2">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold">99.9%</div>
                <div className="mt-2">On-time Payouts</div>
              </div>
              <div>
                <div className="text-3xl font-bold">50,000+</div>
                <div className="mt-2">FDs Booked Monthly</div>
              </div>
              <div>
                <div className="text-3xl font-bold">24/7</div>
                <div className="mt-2">Customer Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="p-8 text-center rounded-lg shadow-xl bg-gray-50 dark:bg-gray-900">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-300">Start Your Fixed Deposit Today</h2>
          <p className="mb-6 text-gray-600 dark:text-gray-400">Zero paperwork | Instant online booking | 5-minute process</p>
          <button className="px-8 py-3 text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg hover:scale-105 font-semibold inline-flex items-center gap-2">
            Book FD Now <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FixedDeposit;