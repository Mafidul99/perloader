import React, { useState, useEffect } from 'react';
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
  Target,
  AlertCircle,
  Download,
  Share2,
  CalendarDays,
  PiggyBank
} from 'lucide-react';

const RDInterestRate = () => {
  const [monthlyAmount, setMonthlyAmount] = useState(5000);
  const [tenure, setTenure] = useState(12);
  const [seniorCitizen, setSeniorCitizen] = useState(false);
  const [calculationResult, setCalculationResult] = useState({
    maturityAmount: 0,
    totalInvestment: 0,
    interestEarned: 0,
    effectiveRate: 0
  });

  // Get RD interest rate based on tenure
  const getRDInterestRate = (tenureMonths, isSenior) => {
    let baseRate = 0;
    
    if (tenureMonths >= 6 && tenureMonths < 12) baseRate = 6.0;
    else if (tenureMonths >= 12 && tenureMonths < 24) baseRate = 6.5;
    else if (tenureMonths >= 24 && tenureMonths < 36) baseRate = 7.0;
    else if (tenureMonths >= 36 && tenureMonths < 60) baseRate = 7.2;
    else if (tenureMonths >= 60 && tenureMonths <= 120) baseRate = 7.5;
    else baseRate = 5.5;
    
    // Add senior citizen benefit
    if (isSenior) baseRate += 0.5;
    
    return baseRate;
  };

  // Calculate RD maturity amount using formula: M = R * [(1+i)^n - 1] / (1 - (1+i)^(-1/3))
  const calculateRD = () => {
    const rate = getRDInterestRate(tenure, seniorCitizen);
    // eslint-disable-next-line no-unused-vars
    const monthlyRate = rate / 12 / 100;
    const numberOfMonths = tenure;
    const monthlyDeposit = monthlyAmount;
    
    // RD Maturity Formula: M = P * ((1 + r)^n - 1) / (1 - (1 + r)^(-1/3))
    // For quarterly compounding as per banks
    const quarterlyRate = rate / 4 / 100;
    // eslint-disable-next-line no-unused-vars
    const numberOfQuarters = numberOfMonths / 3;
    
    // Calculate using quarterly compounding
    let maturity = 0;
    for (let i = 1; i <= numberOfMonths; i++) {
      const remainingQuarters = (numberOfMonths - i + 1) / 3;
      const compoundFactor = Math.pow(1 + quarterlyRate, Math.floor(remainingQuarters));
      maturity += monthlyDeposit * compoundFactor;
    }
    
    const totalInvestment = monthlyAmount * tenure;
    const interestEarned = maturity - totalInvestment;
    
    setCalculationResult({
      maturityAmount: maturity,
      totalInvestment: totalInvestment,
      interestEarned: interestEarned,
      effectiveRate: rate
    });
  };

  // Calculate on input changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    calculateRD();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monthlyAmount, tenure, seniorCitizen]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const rdPlans = [
    { tenure: '6 months', months: 6, rate: '6.00%', seniorRate: '6.50%' },
    { tenure: '9 months', months: 9, rate: '6.25%', seniorRate: '6.75%' },
    { tenure: '12 months', months: 12, rate: '6.50%', seniorRate: '7.00%' },
    { tenure: '15 months', months: 15, rate: '6.75%', seniorRate: '7.25%' },
    { tenure: '18 months', months: 18, rate: '7.00%', seniorRate: '7.50%' },
    { tenure: '24 months', months: 24, rate: '7.00%', seniorRate: '7.50%' },
    { tenure: '30 months', months: 30, rate: '7.15%', seniorRate: '7.65%' },
    { tenure: '36 months', months: 36, rate: '7.20%', seniorRate: '7.70%' },
    { tenure: '48 months', months: 48, rate: '7.25%', seniorRate: '7.75%' },
    { tenure: '60 months', months: 60, rate: '7.50%', seniorRate: '8.00%' },
    { tenure: '72 months', months: 72, rate: '7.40%', seniorRate: '7.90%' },
    { tenure: '84 months', months: 84, rate: '7.35%', seniorRate: '7.85%' },
    { tenure: '96 months', months: 96, rate: '7.30%', seniorRate: '7.80%' },
    { tenure: '108 months', months: 108, rate: '7.25%', seniorRate: '7.75%' },
    { tenure: '120 months', months: 120, rate: '7.20%', seniorRate: '7.70%' }
  ];

  const benefits = [
    { icon: <PiggyBank size={24} />, title: 'Disciplined Saving', desc: 'Build a regular saving habit with monthly deposits' },
    { icon: <TrendingUp size={24} />, title: 'Higher Returns', desc: 'Better interest rates compared to savings accounts' },
    { icon: <CalendarDays size={24} />, title: 'Flexible Tenure', desc: 'Choose from 6 months to 10 years' },
    { icon: <Shield size={24} />, title: 'Safe Investment', desc: 'Government backed secure investment' },
    { icon: <Award size={24} />, title: 'Loan Facility', desc: 'Avail loan against your RD' },
    { icon: <RefreshCw size={24} />, title: 'Auto-renewal', desc: 'Automatic renewal on maturity' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#228296] via-[#2c9cb3] to-[#6f3c85]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative px-4 py-10 mx-auto md:pt-8 md:pb-24">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-3 py-2 mb-2 text-sm font-semibold rounded-full bg-gradient-to-r from-[#1a5b6b] to-[#6f3c85] backdrop-blur-sm">
              <CalendarDays size={16} className="mr-2" />
              Build Wealth with Regular Savings
            </div>
            <h1 className="mb-2 text-3xl font-bold md:text-4xl lg:text-5xl">
              Recurring Deposit Interest Rates
            </h1>
            <p className="mb-3 text-base text-white/90 md:text-lg">
              Save monthly and earn up to <span className="text-2xl font-bold">8.00% p.a.*</span>
              <br />Senior citizens get additional 0.50% interest rate
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            fill="#f9fafb"
            className="dark:fill-gray-800"
          >
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      <div className="container px-4 py-8 mx-auto">
        {/* RD Calculator */}
        <div className="mb-12 overflow-hidden rounded-lg shadow-xl dark:bg-gray-900 bg-slate-50">
          <div className="p-6 border-b bg-gradient-to-r from-purple-50 to-blue-50 dark:from-slate-900 dark:to-slate-900">
            <div className="flex items-center gap-3">
              <Calculator className="text-[#6f3c85]" size={28} />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">RD Interest Calculator</h2>
            </div>
            <p className="mt-1 text-gray-600 dark:text-gray-400">Calculate your RD maturity amount instantly</p>
          </div>
          
          <div className="p-6">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Input Section */}
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Monthly Deposit Amount (₹)
                  </label>
                  <div className="relative">
                    <IndianRupee className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" size={18} />
                    <input
                      type="number"
                      value={monthlyAmount}
                      onChange={(e) => setMonthlyAmount(Number(e.target.value) || 0)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 rounded-lg focus:ring-2 focus:ring-[#6f3c85] focus:border-transparent"
                      placeholder="Enter monthly amount"
                    />
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="100000"
                    step="500"
                    value={monthlyAmount}
                    onChange={(e) => setMonthlyAmount(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between mt-1 text-xs text-gray-500 dark:text-gray-400">
                    <span>₹500</span>
                    <span>₹25,000</span>
                    <span>₹50,000</span>
                    <span>₹1,00,000</span>
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Tenure (Months)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={tenure}
                      onChange={(e) => setTenure(Math.min(120, Math.max(6, Number(e.target.value) || 0)))}
                      className="w-32 px-4 py-2 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 rounded-lg focus:ring-2 focus:ring-[#6f3c85]"
                      placeholder="Months"
                    />
                    <span className="py-2 text-gray-500">months</span>
                  </div>
                  <input
                    type="range"
                    min="6"
                    max="120"
                    step="3"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between mt-1 text-xs text-gray-500 dark:text-gray-400">
                    <span>6 months</span>
                    <span>3 years</span>
                    <span>5 years</span>
                    <span>10 years</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                    {Math.floor(tenure/12)} years {tenure%12} months
                  </p>
                </div>

                <div>
                  <label className="flex items-center gap-3 p-3 rounded-lg cursor-pointer bg-orange-50">
                    <input
                      type="checkbox"
                      checked={seniorCitizen}
                      onChange={(e) => setSeniorCitizen(e.target.checked)}
                      className="w-4 h-4 text-[#6f3c85] rounded focus:ring-[#6f3c85]"
                    />
                    <div>
                      <span className="font-medium text-gray-800">Senior Citizen (60+ years)</span>
                      <p className="text-xs text-gray-500">Eligible for additional 0.50% interest rate</p>
                    </div>
                  </label>
                </div>

                <div className="p-4 rounded-lg bg-blue-50 dark:bg-gray-800">
                  <div className="flex items-start gap-2">
                    <AlertCircle size={18} className="text-blue-600 mt-0.5" />
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      RD interest is compounded quarterly. You can also take a loan against your RD up to 90% of the deposited amount.
                    </p>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className="p-6 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-800 shadow-xl">
                <h3 className="mb-4 text-lg font-bold text-gray-800 dark:text-gray-100">Investment Summary</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between pb-2 border-b border-gray-200">
                    <span className="text-gray-600 dark:text-gray-300">Monthly Deposit:</span>
                    <span className="font-semibold text-gray-800 dark:text-gray-100">
                      {formatCurrency(monthlyAmount)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between pb-2 border-b border-gray-200">
                    <span className="text-gray-600 dark:text-gray-300">Total Investment:</span>
                    <span className="font-semibold text-gray-800 dark:text-gray-100">
                      {formatCurrency(calculationResult.totalInvestment)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between pb-2 border-b border-gray-200">
                    <span className="text-gray-600 dark:text-gray-300">Applicable Interest Rate:</span>
                    <span className="font-semibold text-[#6f3c85] text-lg dark:text-purple-600">
                      {calculationResult.effectiveRate}% p.a.
                    </span>
                  </div>
                  
                  <div className="flex justify-between pb-2 border-b border-gray-200">
                    <span className="text-gray-600 dark:text-gray-300">Tenure:</span>
                    <span className="font-semibold text-gray-800 dark:text-gray-100">
                      {tenure} months ({Math.floor(tenure/12)} years {tenure%12} months)
                    </span>
                  </div>
                  
                  <div className="flex justify-between pb-2 border-b border-gray-200">
                    <span className="text-gray-600 dark:text-gray-300">Interest Earned:</span>
                    <span className="text-lg font-semibold text-green-600 dark:text-green-400">
                      {formatCurrency(calculationResult.interestEarned)}
                    </span>
                  </div>
                  
                  <div className="pt-3 mt-3">
                    <div className="flex justify-between">
                      <span className="text-lg font-bold text-gray-800 dark:text-gray-100">Maturity Amount:</span>
                      <span className="text-2xl font-bold text-[#6f3c85] dark:text-purple-600">
                        {formatCurrency(calculationResult.maturityAmount)}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      *TDS applicable as per income tax rules
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  <button className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 transition-all rounded-lg bg-slate-50 hover:shadow-md dark:bg-gray-900 dark:text-gray-300">
                    <Download size={16} />
                    Download
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 transition-all rounded-lg bg-slate-50 hover:shadow-md dark:bg-gray-900 dark:text-gray-300">
                    <Share2 size={16} />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interest Rate Table */}
        <div className="mb-12">
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-gray-300 md:text-3xl">RD Interest Rate {' '}
              <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                Structure
              </span>
              </h2>
            <p className="text-gray-600 dark:text-gray-400">Competitive rates for all tenures</p>
          </div>
          
          <div className="overflow-x-auto rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
            <table className="min-w-full">
              <thead className="bg-gradient-to-r from-[#6f3c85] to-[#228296] text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Tenure</th>
                  <th className="px-4 py-3 text-left">General Public (% p.a.)</th>
                  <th className="px-4 py-3 text-left">Senior Citizen (% p.a.)</th>
                </tr>
              </thead>
              <tbody>
                {rdPlans.map((plan, index) => (
                  <tr key={index} className="transition-colors border-b border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                    <td className="px-4 py-3 font-medium text-gray-800 dark:text-gray-300">{plan.tenure}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{plan.rate}</td>
                    <td className="px-4 py-3">
                      <span className="font-semibold text-[#6f3c85] dark:text-purple-600">{plan.seniorRate}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="flex items-start gap-2 p-3 mt-4 rounded-lg bg-yellow-50">
            <AlertCircle size={18} className="text-yellow-600 mt-0.5" />
            <p className="text-sm text-gray-600">
              *Rates are subject to change. Additional 0.50% p.a. for senior citizens. 
              Premature withdrawal penalty applies. TDS is deducted as per Income Tax rules.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-12">
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-gray-300 md:text-3xl">Benefits of {' '}
              <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                RD Account
              </span></h2>
            <p className="text-gray-600 dark:text-gray-400">Start your savings journey today</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 transition-all duration-300 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50 hover:shadow-xl hover:-translate-y-1">
                <div className="mb-4 text-[#6f3c85]">{benefit.icon}</div>
                <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-300">{benefit.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Calculator */}
        <div className="p-6 mb-12 rounded-lg shadow-lg bg-slate-50 dark:bg-gray-900">
          <h3 className="mb-4 text-xl font-bold text-center text-gray-800 dark:text-gray-50">RD vs Other {' '}
              <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                Savings Options
              </span></h3>
          <div className="grid gap-4 md:grid-cols-3 dark:text-gray-50">
            <div className="p-4 text-center border-2 border-[#6f3c85] rounded-lg">
              <div className="mb-2 text-3xl">🏦</div>
              <h4 className="font-semibold">Savings Account</h4>
              <p className="text-2xl font-bold text-[#6f3c85]">3-4%</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Interest Rate</p>
            </div>
            <div className="p-4 text-center border-2 border-[#6f3c85] rounded-lg">
              <div className="mb-2 text-3xl">💰</div>
              <h4 className="font-semibold">Recurring Deposit</h4>
              <p className="text-2xl font-bold text-[#6f3c85]">6.5-7.5%</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Interest Rate</p>
            </div>
            <div className="p-4 text-center border-2 border-[#6f3c85] rounded-lg">
              <div className="mb-2 text-3xl">📈</div>
              <h4 className="font-semibold">Fixed Deposit</h4>
              <p className="text-2xl font-bold text-[#6f3c85]">7.2-8.5%</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Interest Rate</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="p-6 text-center bg-gradient-to-r from-[#6f3c85] to-[#228296] rounded-lg shadow-lg text-white">
          <h2 className="mb-2 text-xl font-bold md:text-2xl">Start Your Recurring Deposit Today</h2>
          <p className="mb-4 text-white/90">Start saving from just ₹500 per month | Online booking available</p>
          <button className="px-6 py-2 bg-white text-[#6f3c85] rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105">
            Open RD Account <ArrowRight className="inline ml-2" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RDInterestRate;