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
  Share2
} from 'lucide-react';

const FDInterestRate = () => {
  const [fdAmount, setFdAmount] = useState(50000);
  const [tenure, setTenure] = useState(12);
  const [seniorCitizen, setSeniorCitizen] = useState(false);
  const [fdType, setFdType] = useState('cumulative');
  const [calculationResult, setCalculationResult] = useState({
    maturityAmount: 0,
    interestEarned: 0,
    effectiveRate: 0
  });

  // Interest rate slabs based on tenure
  const getInterestRate = (tenureMonths, isSenior) => {
    let baseRate = 0;
    
    if (tenureMonths >= 3 && tenureMonths < 6) baseRate = 5.5;
    else if (tenureMonths >= 6 && tenureMonths < 9) baseRate = 6.0;
    else if (tenureMonths >= 9 && tenureMonths < 12) baseRate = 6.5;
    else if (tenureMonths >= 12 && tenureMonths < 24) baseRate = 7.2;
    else if (tenureMonths >= 24 && tenureMonths < 36) baseRate = 7.5;
    else if (tenureMonths >= 36 && tenureMonths < 60) baseRate = 7.8;
    else if (tenureMonths >= 60 && tenureMonths <= 120) baseRate = 7.5;
    else baseRate = 5.0;
    
    // Add senior citizen benefit
    if (isSenior) baseRate += 0.5;
    
    return baseRate;
  };

  // Calculate FD maturity amount
  const calculateFD = () => {
    const rate = getInterestRate(tenure, seniorCitizen);
    const principal = fdAmount;
    const timeInYears = tenure / 12;
    
    let maturity = 0;
    let interest = 0;
    
    if (fdType === 'cumulative') {
      // Compound Interest Calculation (quarterly compounding as per banks)
      const quarterlyRate = rate / 4 / 100;
      const numberOfQuarters = timeInYears * 4;
      maturity = principal * Math.pow(1 + quarterlyRate, numberOfQuarters);
      interest = maturity - principal;
    } else {
      // Simple Interest for Non-Cumulative (payout option)
      const simpleInterest = principal * (rate / 100) * timeInYears;
      maturity = principal + simpleInterest;
      interest = simpleInterest;
    }
    
    setCalculationResult({
      maturityAmount: maturity,
      interestEarned: interest,
      effectiveRate: rate
    });
  };

  // Calculate on input changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    calculateFD();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fdAmount, tenure, seniorCitizen, fdType]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  // eslint-disable-next-line no-unused-vars
  const formatNumber = (num) => {
    return num.toLocaleString('en-IN');
  };

  const fdPlans = [
    { tenure: '7-45 days', minDays: 7, maxDays: 45, rate: '5.5%', seniorRate: '6.0%' },
    { tenure: '46-90 days', minDays: 46, maxDays: 90, rate: '6.0%', seniorRate: '6.5%' },
    { tenure: '3-6 months', minDays: 91, maxDays: 180, rate: '6.5%', seniorRate: '7.0%' },
    { tenure: '6-9 months', minDays: 181, maxDays: 270, rate: '7.0%', seniorRate: '7.5%' },
    { tenure: '9-12 months', minDays: 271, maxDays: 365, rate: '7.2%', seniorRate: '7.7%' },
    { tenure: '1-2 years', minDays: 366, maxDays: 730, rate: '7.5%', seniorRate: '8.0%' },
    { tenure: '2-3 years', minDays: 731, maxDays: 1095, rate: '7.8%', seniorRate: '8.3%' },
    { tenure: '3-5 years', minDays: 1096, maxDays: 1825, rate: '8.0%', seniorRate: '8.5%' },
    { tenure: '5-10 years', minDays: 1826, maxDays: 3650, rate: '7.5%', seniorRate: '8.0%' }
  ];

  const features = [
    { icon: <Shield size={24} />, title: 'Deposit Insurance', desc: 'Covered up to ₹5 Lakhs under DICGC' },
    { icon: <Award size={24} />, title: 'Highest Returns', desc: 'Industry-leading interest rates up to 8.5%' },
    { icon: <RefreshCw size={24} />, title: 'Auto-renewal', desc: 'Flexible renewal options for convenience' },
    { icon: <Lock size={24} />, title: 'Loan Against FD', desc: 'Get up to 90% loan against your FD' },
    { icon: <Sparkles size={24} />, title: 'Tax Benefits', desc: 'Save tax under Section 80C up to ₹1.5 Lakhs' },
    { icon: <Clock size={24} />, title: 'Flexible Tenure', desc: 'Choose from 7 days to 10 years' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#228296] via-[#2c9cb3] to-[#6f3c85]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative px-4 py-10 mx-auto md:pt-8 md:pb-24">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-3 py-2 mb-2 text-sm font-semibold rounded-full bg-gradient-to-br from-[#1a5b6b] to-[#6f3c85] backdrop-blur-sm">
              <TrendingUp size={16} className="mr-2" />
              Highest Returns on Fixed Deposits
            </div>
            <h1 className="mb-2 text-3xl font-bold md:text-4xl lg:text-5xl">
              Fixed Deposit Interest Rates
            </h1>
            <p className="mb-3 text-base text-white/90 md:text-lg">
              Earn up to <span className="text-2xl font-bold">8.50% p.a.*</span> with our premium FD schemes
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
        {/* FD Calculator - Main Component */}
        <div className="mb-12 overflow-hidden rounded-lg shadow-xl dark:bg-gray-900 bg-slate-50">
          <div className="p-6 border-b bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="flex items-center gap-3">
              <Calculator className="text-[#228296]" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">FD Interest Calculator</h2>
            </div>
            <p className="mt-1 text-gray-600">Calculate your maturity amount instantly</p>
          </div>
          
          <div className="p-6">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Input Section */}
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">
                    Investment Amount (₹)
                  </label>
                  <div className="relative">
                    <IndianRupee className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" size={18} />
                    <input
                      type="number"
                      value={fdAmount}
                      onChange={(e) => setFdAmount(Number(e.target.value) || 0)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:bg-gray-700 dark:text-gray-300 rounded-lg focus:ring-2 focus:ring-[#228296] focus:border-transparent"
                      placeholder="Enter amount"
                    />
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="10000000"
                    step="1000"
                    value={fdAmount}
                    onChange={(e) => setFdAmount(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between mt-1 text-xs text-gray-500 dark:text-gray-400">
                    <span>₹1,000</span>
                    <span>₹10 Lakhs</span>
                    <span>₹1 Crore</span>
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">
                    Tenure (Months)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={tenure}
                      onChange={(e) => setTenure(Math.min(120, Math.max(3, Number(e.target.value) || 0)))}
                      className="w-32 px-4 py-2 border border-gray-300 dark:bg-gray-700 dark:text-gray-300 rounded-lg focus:ring-2 focus:ring-[#228296]"
                      placeholder="Months"
                    />
                    <span className="py-2 text-gray-500 dark:text-gray-400">months</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="120"
                    step="1"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between mt-1 text-xs text-gray-500 dark:text-gray-400">
                    <span>3 months</span>
                    <span>3 years</span>
                    <span>5 years</span>
                    <span>10 years</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                    {Math.floor(tenure/12)} years {tenure%12} months
                  </p>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">FD Type</label>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setFdType('cumulative')}
                      className={`flex-1 py-2 rounded-lg transition-all font-medium ${
                        fdType === 'cumulative' 
                          ? 'bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white shadow-md' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Cumulative (Compound)
                    </button>
                    <button
                      onClick={() => setFdType('non-cumulative')}
                      className={`flex-1 py-2 rounded-lg transition-all font-medium ${
                        fdType === 'non-cumulative' 
                          ? 'bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white shadow-md' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Non-Cumulative (Payout)
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-gray-500 dark:text-gray-300">
                    {fdType === 'cumulative' 
                      ? 'Interest compounds quarterly and paid at maturity' 
                      : 'Interest paid out monthly/quarterly as per your choice'}
                  </p>
                </div>

                <div>
                  <label className="flex items-center gap-3 p-3 rounded-lg cursor-pointer bg-orange-50 ">
                    <input
                      type="checkbox"
                      checked={seniorCitizen}
                      onChange={(e) => setSeniorCitizen(e.target.checked)}
                      className="w-4 h-4 text-[#228296] rounded focus:ring-[#228296]"
                    />
                    <div>
                      <span className="font-medium text-gray-800 ">Senior Citizen (60+ years)</span>
                      <p className="text-xs text-gray-500">Eligible for additional 0.50% interest rate</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Results Section */}
              <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50">
                <h3 className="mb-4 text-lg font-bold text-gray-800">Investment Summary</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between pb-2 border-b border-gray-200">
                    <span className="text-gray-600">Principal Amount:</span>
                    <span className="font-semibold text-gray-800">
                      {formatCurrency(fdAmount)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between pb-2 border-b border-gray-200">
                    <span className="text-gray-600">Applicable Interest Rate:</span>
                    <span className="font-semibold text-[#228296] text-lg">
                      {calculationResult.effectiveRate}% p.a.
                    </span>
                  </div>
                  
                  <div className="flex justify-between pb-2 border-b border-gray-200">
                    <span className="text-gray-600">Tenure:</span>
                    <span className="font-semibold text-gray-800">
                      {tenure} months ({Math.floor(tenure/12)} years {tenure%12} months)
                    </span>
                  </div>
                  
                  <div className="flex justify-between pb-2 border-b border-gray-200">
                    <span className="text-gray-600">Interest Earned:</span>
                    <span className="text-lg font-semibold text-green-600">
                      {formatCurrency(calculationResult.interestEarned)}
                    </span>
                  </div>
                  
                  <div className="pt-3 mt-3">
                    <div className="flex justify-between">
                      <span className="text-lg font-bold text-gray-800">Maturity Amount:</span>
                      <span className="text-2xl font-bold text-[#6f3c85]">
                        {formatCurrency(calculationResult.maturityAmount)}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      *TDS applicable as per income tax rules
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 transition-all bg-white rounded-lg hover:shadow-md">
                    <Download size={16} />
                    Download
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 transition-all bg-white rounded-lg hover:shadow-md">
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
            <h2 className="mb-2 text-2xl font-bold text-gray-800 md:text-3xl dark:text-gray-300">Interest Rate {' '}
              <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                Structure
              </span>
              </h2>
            <p className="text-gray-600 dark:text-gray-400">Competitive rates for all tenures</p>
          </div>
          
          <div className="overflow-x-auto rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
            <table className="min-w-full">
              <thead className="bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white dark:text-gray-300">
                <tr>
                  <th className="px-4 py-3 text-left">Tenure</th>
                  <th className="px-4 py-3 text-left">General Public (% p.a.)</th>
                  <th className="px-4 py-3 text-left">Senior Citizen (% p.a.)</th>
                </tr>
              </thead>
              <tbody>
                {fdPlans.map((plan, index) => (
                  <tr key={index} className="transition-colors border-b border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                    <td className="px-4 py-3 font-medium text-gray-800 dark:text-gray-300">{plan.tenure}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{plan.rate}</td>
                    <td className="px-4 py-3">
                      <span className="font-semibold text-[#228296]">{plan.seniorRate}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="flex items-start gap-2 p-3 mt-4 rounded-lg bg-yellow-50">
            <AlertCircle size={18} className="text-yellow-600 mt-0.5" />
            <p className="text-sm text-gray-600">
              *Rates are subject to change as per RBI guidelines. Additional 0.50% p.a. for senior citizens.
              TDS is deducted as per Income Tax Act, 1961.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-gray-300 md:text-3xl">Why Choose {' '}
              <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                Our FD?
              </span></h2>
            <p className="text-gray-600 dark:text-gray-400">Experience secure and rewarding investments</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="p-6 transition-all duration-300 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50 hover:shadow-xl hover:-translate-y-1">
                <div className="mb-4 text-[#228296]">{feature.icon}</div>
                <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-300">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="p-6 text-center bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-lg shadow-lg text-white">
          <h2 className="mb-2 text-xl font-bold md:text-2xl">Start Your Fixed Deposit Today</h2>
          <p className="mb-4 text-white/90">Zero paperwork | Instant online booking | 5-minute process</p>
          <button className="px-6 py-2 bg-white text-[#228296] rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105">
            Book FD Now <ArrowRight className="inline ml-2" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FDInterestRate;