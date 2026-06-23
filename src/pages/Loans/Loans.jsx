import React, { useState } from 'react';
import { 
  Home, 
  Briefcase, 
  Diamond, 
  Car, 
  GraduationCap,
  ArrowRight, 
  CheckCircle,
  Percent,
  Clock,
  FileText,
  Calculator,
  Shield,
  TrendingUp
} from 'lucide-react';

const Loans = () => {
  const [selectedLoan, setSelectedLoan] = useState('personal');
  const [loanAmount, setLoanAmount] = useState(500000);
  const [tenure, setTenure] = useState(5);

  const loans = {
    personal: {
      title: 'Personal Loan',
      icon: <Briefcase size={32} />,
      rate: '10.99%',
      maxAmount: '₹25 Lakhs',
      tenure: '1-5 years',
      features: ['No collateral required', 'Minimal documentation', 'Quick approval', 'Flexible repayment'],
      eligibility: ['Salaried/ Self-employed', 'Age 21-60 years', 'CIBIL score 750+', 'Minimum income ₹25,000/month']
    },
    home: {
      title: 'Home Loan',
      icon: <Home size={32} />,
      rate: '8.75%',
      maxAmount: '₹5 Crores',
      tenure: 'Up to 30 years',
      features: ['Tax benefits under 80C', 'Low processing fees', 'Balance transfer facility', 'Top-up loan available'],
      eligibility: ['Indian citizen', 'Age 21-65 years', 'Stable income source', 'Property documents required']
    },
    gold: {
      title: 'Gold Loan',
      icon: <Diamond size={32} />,
      rate: '9.50%',
      maxAmount: '₹2 Crores',
      tenure: 'Up to 24 months',
      features: ['Instant approval', 'High LTV up to 75%', 'No income proof', 'Transparent valuation'],
      eligibility: ['Any Indian citizen', 'Minimum 18 years', 'Gold ornaments required', 'PAN card mandatory']
    },
    car: {
      title: 'Car Loan',
      icon: <Car size={32} />,
      rate: '9.25%',
      maxAmount: '₹1 Crore',
      tenure: 'Up to 7 years',
      features: ['100% on-road funding', 'Low EMI options', 'Quick disbursal', 'Insurance included'],
      eligibility: ['Age 21-65 years', 'Stable employment', 'CIBIL score 700+', 'Down payment as per policy']
    }
  };

  const currentLoan = loans[selectedLoan];

  const calculateEMI = () => {
    const rate = parseFloat(currentLoan.rate) / 12 / 100;
    const months = tenure * 12;
    const emi = loanAmount * rate * Math.pow(1 + rate, months) / (Math.pow(1 + rate, months) - 1);
    return Math.round(emi);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#228296] via-[#2c9cb3] to-[#6f3c85]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative px-4 py-10 mx-auto md:py-24">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">Loans</h1>
            <p className="text-lg md:text-xl text-white/90">
              Quick approval, competitive rates, and flexible repayment options
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#f9fafb">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      <div className="container px-4 py-12 mx-auto">
        {/* Loan Type Selector */}
        <div className="grid gap-4 mb-12 md:grid-cols-4">
          {Object.keys(loans).map((type) => (
            <button
              key={type}
              onClick={() => setSelectedLoan(type)}
              className={`p-4 text-center transition-all rounded-lg ${
                selectedLoan === type
                  ? 'bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:shadow-md'
              }`}
            >
              <div className="flex justify-center mb-2">{loans[type].icon}</div>
              <div className="font-semibold">{loans[type].title}</div>
              <div className="text-sm">{loans[type].rate} onwards</div>
            </button>
          ))}
        </div>

        {/* EMI Calculator & Loan Details */}
        <div className="grid gap-8 mb-16 md:grid-cols-2">
          <div className="p-6 rounded-lg shadow-lg dark:bg-gray-800 bg-[#fff]">
            <div className="flex items-center gap-2 mb-4">
              <Calculator size={24} className="text-[#228296]" />
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-300">EMI Calculator</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium dark:text-gray-400">Loan Amount (₹)</label>
                <input
                  type="range"
                  min="100000"
                  max="5000000"
                  step="100000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-lg font-semibold text-center text-[#228296]">
                  ₹{loanAmount.toLocaleString()}
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium dark:text-gray-400">Tenure (Years)</label>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-center font-semibold text-[#228296]">{tenure} years</div>
              </div>
              <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex justify-between mb-2">
                  <span>Monthly EMI:</span>
                  <span className="text-2xl font-bold text-[#6f3c85]">₹{calculateEMI().toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Interest Payable:</span>
                  <span className="font-semibold">₹{(calculateEMI() * tenure * 12 - loanAmount).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Amount Payable:</span>
                  <span className="font-semibold">₹{(calculateEMI() * tenure * 12).toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="mb-4 text-[#228296]">{currentLoan.icon}</div>
            <h2 className="mb-4 text-2xl font-bold text-gray-800">{currentLoan.title}</h2>
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="p-2 text-center rounded bg-green-50">
                <div className="text-xs text-gray-600">Interest Rate</div>
                <div className="font-bold text-[#228296]">{currentLoan.rate}</div>
              </div>
              <div className="p-2 text-center rounded bg-blue-50">
                <div className="text-xs text-gray-600">Max Amount</div>
                <div className="font-bold text-[#228296]">{currentLoan.maxAmount}</div>
              </div>
              <div className="p-2 text-center rounded bg-purple-50">
                <div className="text-xs text-gray-600">Tenure</div>
                <div className="font-bold text-[#228296]">{currentLoan.tenure}</div>
              </div>
            </div>
            <button className="w-full py-2 text-white rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg transition-all font-semibold">
              Apply for {currentLoan.title}
            </button>
          </div>
        </div>

        {/* Features & Eligibility */}
        <div className="grid gap-8 mb-16 md:grid-cols-2">
          <div className="p-6 rounded-lg shadow-lg dark:bg-gray-800 bg-[#fff]">
            <h3 className="mb-4 text-xl font-bold text-gray-800 dark:text-gray-300">Key Features</h3>
            <ul className="space-y-2">
              {currentLoan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle size={16} className="mt-0.5 text-green-500" />
                  <span className='text-gray-800 dark:text-gray-400'>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-lg shadow-lg dark:bg-gray-800 bg-[#fff]">
            <h3 className="mb-4 text-xl font-bold text-gray-800 dark:text-gray-300">Eligibility Criteria</h3>
            <ul className="space-y-2">
              {currentLoan.eligibility.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Shield size={16} className="mt-0.5 text-[#228296]" />
                  <span className='text-gray-800 dark:text-gray-400'>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="p-8 text-center text-white rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
          <h2 className="mb-2 text-2xl font-bold">Why Choose Our Loans?</h2>
          <div className="grid gap-4 mt-6 md:grid-cols-4">
            <div><Percent size={24} className="mx-auto mb-2" />Lowest Interest Rates</div>
            <div><Clock size={24} className="mx-auto mb-2" />Quick Disbursal in 24 Hours</div>
            <div><FileText size={24} className="mx-auto mb-2" />Minimal Documentation</div>
            <div><TrendingUp size={24} className="mx-auto mb-2" />Flexible Repayment Options</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loans;