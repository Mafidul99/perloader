import React, { useState } from 'react';
import { 
  PiggyBank, 
  Building2, 
  Globe, 
  ArrowRight, 
  CheckCircle,
  TrendingUp,
  Shield,
  Smartphone,
  Users,
  Gift,
  Clock,
  Percent
} from 'lucide-react';

const Accounts = () => {
  const [selectedAccount, setSelectedAccount] = useState('savings');

  const accountTypes = {
    savings: {
      title: 'Savings Account',
      icon: <PiggyBank size={32} />,
      interest: '4.00% - 6.00% p.a.',
      minBalance: '₹0 (Zero Balance)',
      features: [
        'Free Debit Card',
        'Mobile & Internet Banking',
        'Free Cheque Book',
        'ATM withdrawals across India',
        'UPI & Bill Payments',
        'Monthly e-statements'
      ],
      benefits: [
        'Higher interest on daily balance',
        'No minimum balance required',
        'Free insurance coverage',
        'Welcome gift on account opening'
      ]
    },
    current: {
      title: 'Current Account',
      icon: <Building2 size={32} />,
      interest: 'No interest',
      minBalance: '₹10,000 - ₹50,000',
      features: [
        'Overdraft facility available',
        'Multi-user access',
        'High transaction limits',
        'Free NEFT/RTGS/IMPS',
        'Dedicated relationship manager',
        'Business debit card'
      ],
      benefits: [
        'Unlimited transactions',
        'Cash deposit up to ₹5 Lakhs free',
        'Tax payment gateway',
        'Export/Import services'
      ]
    },
    nri: {
      title: 'NRI Account',
      icon: <Globe size={32} />,
      interest: '6.00% - 7.50% p.a.',
      minBalance: '₹10,000 or $1000',
      features: [
        'Repatriable funds (NRE)',
        'Tax-free interest (NRE)',
        'Multi-currency support',
        'Free inward remittances',
        'Dedicated NRI relationship manager',
        'Online account opening'
      ],
      benefits: [
        'Doorstep document collection',
        'Priority customer support',
        'Investment advisory services',
        'Home loan for NRIs'
      ]
    }
  };

  const currentAccount = accountTypes[selectedAccount];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#228296] via-[#2c9cb3] to-[#6f3c85]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative px-4 py-10 mx-auto md:py-24">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">Bank Accounts</h1>
            <p className="text-lg md:text-xl text-white/90">
              Choose the right account for your needs - Savings, Current, or NRI Account
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
        {/* Account Type Selector */}
        <div className="flex justify-center gap-4 mb-12">
          {Object.keys(accountTypes).map((type) => (
            <button
              key={type}
              onClick={() => setSelectedAccount(type)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedAccount === type
                  ? 'bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:shadow-md'
              }`}
            >
              {type === 'savings' && <PiggyBank size={18} />}
              {type === 'current' && <Building2 size={18} />}
              {type === 'nri' && <Globe size={18} />}
              {type.charAt(0).toUpperCase() + type.slice(1)} Account
            </button>
          ))}
        </div>

        {/* Account Details */}
        <div className="grid gap-8 mb-16 md:grid-cols-2">
          <div className="p-8 rounded-lg shadow-lg dark:bg-gray-800 bg-[#fff]">
            <div className="mb-4 text-[#228296]">{currentAccount.icon}</div>
            <h2 className="mb-2 text-3xl font-bold text-gray-800 dark:text-gray-300">{currentAccount.title}</h2>
            <div className="flex gap-4 mb-4">
              <div className="px-3 py-1 text-sm text-green-700 bg-green-100 rounded-full">
                {currentAccount.interest}
              </div>
              <div className="px-3 py-1 text-sm text-blue-700 bg-blue-100 rounded-full">
                {currentAccount.minBalance}
              </div>
            </div>
            <h3 className="mb-3 text-lg font-semibold text-gray-800 dark:text-gray-300">Key Features</h3>
            <ul className="mb-6 space-y-2">
              {currentAccount.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle size={16} className="mt-0.5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-400">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-2 text-white rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg transition-all font-semibold">
              Open {currentAccount.title}
            </button>
          </div>

          <div className="p-8 rounded-lg shadow-md bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
            <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-300">Why Choose This Account?</h3>
            <ul className="mb-6 space-y-3">
              {currentAccount.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <TrendingUp size={16} className="mt-0.5 text-[#228296]" />
                  <span className="text-gray-700 dark:text-gray-400">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="p-4 bg-white rounded-lg">
              <h4 className="mb-2 font-semibold text-gray-800">Quick Tips</h4>
              <p className="text-sm text-gray-600">
                {selectedAccount === 'savings' && 'Start saving today with zero balance account and earn up to 6% interest.'}
                {selectedAccount === 'current' && 'Perfect for businesses - get overdraft facility and high transaction limits.'}
                {selectedAccount === 'nri' && 'Manage your Indian finances seamlessly from anywhere in the world.'}
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-800 dark:text-gray-300">Account {' '}
              <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                 Comparison
              </span></h2>
          <div className="overflow-x-auto rounded-lg shadow-lg dark:bg-gray-800 bg-[#fff]">
            <table className="min-w-full">
              <thead className="bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white ">
                <tr>
                  <th className="px-4 py-3 text-left ">Features</th>
                  <th className="px-4 py-3 text-left ">Savings Account</th>
                  <th className="px-4 py-3 text-left ">Current Account</th>
                  <th className="px-4 py-3 text-left ">NRI Account</th>
                </tr>
              </thead>
              <tbody className='text-gray-800 dark:text-gray-400'>
                <tr className="border-b"><td className="px-4 py-2 font-medium">Interest Rate</td>
                  <td className="px-4 py-2">4-6% p.a.</td><td className="px-4 py-2">No interest</td><td className="px-4 py-2">6-7.5% p.a.</td></tr>
                <tr className="border-b"><td className="px-4 py-2 font-medium">Min Balance</td>
                  <td className="px-4 py-2">Zero Balance</td><td className="px-4 py-2">₹10,000+</td><td className="px-4 py-2">₹10,000/$1000</td></tr>
                <tr className="border-b"><td className="px-4 py-2 font-medium">Debit Card</td>
                  <td className="px-4 py-2">Free</td><td className="px-4 py-2">Business Card</td><td className="px-4 py-2">International Card</td></tr>
                <tr><td className="px-4 py-2 font-medium">Best For</td>
                  <td className="px-4 py-2">Individuals</td><td className="px-4 py-2">Businesses</td><td className="px-4 py-2">NRIs/PIOs</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Collections Links */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h3 className="mb-4 text-lg font-semibold text-slate-800 dark:text-slate-100">Open Collections</h3>
            <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">Quick access to collection reports.</p>
            <div className="flex flex-wrap gap-3">
              <a href="/accounts/daily" className="inline-block px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white">Daily</a>
              <a href="/accounts/weekly" className="inline-block px-4 py-2 text-sm font-semibold rounded-lg bg-slate-100 text-slate-800">Weekly</a>
              <a href="/accounts/monthly" className="inline-block px-4 py-2 text-sm font-semibold rounded-lg bg-slate-100 text-slate-800">Monthly</a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 text-center bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-lg text-white">
          <h2 className="mb-2 text-2xl font-bold">Need Help Choosing?</h2>
          <p className="mb-4">Our experts will help you find the perfect account</p>
          <button className="px-6 py-2 bg-white text-[#228296] rounded-lg font-semibold hover:shadow-lg">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Accounts;