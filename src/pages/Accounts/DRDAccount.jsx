/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { 
  Clock, CheckCircle, Percent, Calendar, TrendingUp, Shield, 
  ArrowRight, Wallet, PiggyBank, Target, Zap, 
  Sparkles, Star, Award, Gem, Users, MessageCircle,
  X, Menu, Plus, Minus, ChevronDown, ChevronUp,
  User, Mail, Phone, MapPin, Briefcase, DollarSign
} from 'lucide-react';
import { toast } from 'react-toastify';

const DRDAccount = () => {
  const [showCalculator, setShowCalculator] = useState(false);
  const [dailyAmount, setDailyAmount] = useState(100);
  const [selectedPeriod, setSelectedPeriod] = useState('1Y');
  const [calculatedMaturity, setCalculatedMaturity] = useState(null);
  const [showFAQ, setShowFAQ] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalStep, setModalStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    occupation: '',
    monthlyIncome: '',
    dailyDeposit: 100,
    investmentPeriod: '1Y',
    nomineeName: '',
    nomineeRelation: '',
    termsAccepted: false
  });
  const [formErrors, setFormErrors] = useState({});

  // Interest rates for different periods
  const interestRates = {
    '1Y': 6.0,
    '2Y': 6.5,
    '3Y': 7.0,
    '5Y': 7.5
  };

  // Features data
  const features = [
    {
      icon: <Percent className="w-6 h-6" />,
      title: "Competitive Interest",
      description: "Earn up to 7.5% p.a. with daily compounding",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      textColor: "text-emerald-600 dark:text-emerald-400"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Daily Deposits",
      description: "Small daily savings that grow into a large corpus",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      textColor: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Flexible Plans",
      description: "Choose your daily amount and investment period",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      textColor: "text-purple-600 dark:text-purple-400"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Investment",
      description: "Safe and regulated investment option",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
      textColor: "text-amber-600 dark:text-amber-400"
    }
  ];

  // Benefits data
  const benefits = [
    {
      icon: <Wallet className="w-5 h-5" />,
      title: "Small Contributions",
      description: "Start with as little as ₹50 per day",
      stat: "₹50"
    },
    {
      icon: <PiggyBank className="w-5 h-5" />,
      title: "Goal-Based Savings",
      description: "Perfect for achieving short & long-term goals",
      stat: "Flexible"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Auto-Debit",
      description: "Automatic daily transfers for consistency",
      stat: "Set & Forget"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Power of Compounding",
      description: "Watch your money grow exponentially",
      stat: "Daily"
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "What is the minimum daily deposit?",
      answer: "The minimum daily deposit is ₹50, making it accessible for everyone to start saving. You can increase your deposit amount at any time."
    },
    {
      question: "Can I increase my daily deposit later?",
      answer: "Yes, you can increase your daily deposit at any time to accelerate your savings growth. Simply update your deposit amount through your account settings."
    },
    {
      question: "Is there a penalty for early withdrawal?",
      answer: "Early withdrawal may be subject to a small penalty. Please refer to the account terms and conditions for detailed information about withdrawal policies."
    },
    {
      question: "How is interest calculated on DRD?",
      answer: "Interest is calculated daily and compounded daily, helping your savings grow faster. The interest rate varies based on the investment period you choose."
    },
    {
      question: "Can I have multiple DRD accounts?",
      answer: "Yes, you can open multiple DRD accounts for different savings goals. Each account can have its own daily deposit amount and tenure."
    }
  ];

  // Calculate maturity amount
  const calculateMaturity = () => {
    setIsAnimating(true);
    const rate = interestRates[selectedPeriod] / 100;
    const years = parseInt(selectedPeriod.replace('Y', ''));
    const days = years * 365;
    const totalDeposit = dailyAmount * days;
    
    const maturity = totalDeposit * Math.pow(1 + rate / 365, days);
    
    setTimeout(() => {
      setCalculatedMaturity({
        totalDeposit: totalDeposit,
        interestEarned: maturity - totalDeposit,
        maturityAmount: maturity,
        rate: interestRates[selectedPeriod],
        days: days,
        years: years
      });
      setShowCalculator(true);
      setIsAnimating(false);
    }, 500);
  };

  // Handle calculation
  const handleCalculate = () => {
    if (dailyAmount < 50) {
      toast.error('Minimum daily deposit is ₹50');
      return;
    }
    if (dailyAmount > 10000) {
      toast.error('Maximum daily deposit is ₹10,000');
      return;
    }
    calculateMaturity();
  };

  // Get period label
  const getPeriodLabel = (period) => {
    const year = period.replace('Y', '');
    return `${year} Year${year > 1 ? 's' : ''}`;
  };

  // Toggle FAQ
  const toggleFAQ = (index) => {
    setShowFAQ(showFAQ === index ? null : index);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Validate form
  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    else if (!/^[0-9]{10}$/.test(formData.phone)) errors.phone = 'Phone number must be 10 digits';
    if (!formData.address.trim()) errors.address = 'Address is required';
    if (!formData.occupation.trim()) errors.occupation = 'Occupation is required';
    if (!formData.monthlyIncome) errors.monthlyIncome = 'Monthly income is required';
    if (!formData.nomineeName.trim()) errors.nomineeName = 'Nominee name is required';
    if (!formData.nomineeRelation.trim()) errors.nomineeRelation = 'Nominee relation is required';
    if (!formData.termsAccepted) errors.termsAccepted = 'You must accept the terms and conditions';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error('Please fix the highlighted errors and try again.');
      return;
    }

    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    toast.success('Account opened successfully! Welcome to DRD savings.');
    setShowModal(false);
    resetForm();
    
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      occupation: '',
      monthlyIncome: '',
      dailyDeposit: 100,
      investmentPeriod: '1Y',
      nomineeName: '',
      nomineeRelation: '',
      termsAccepted: false
    });
    setFormErrors({});
    setModalStep(1);
  };

  // Open modal
  const openModal = () => {
    setShowModal(true);
    setModalStep(1);
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    resetForm();
  };

  // Next step
  const nextStep = () => {
    if (modalStep === 1) {
      // Validate basic info
      const errors = {};
      if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
      if (!formData.email.trim()) errors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
      if (!formData.phone.trim()) errors.phone = 'Phone number is required';
      else if (!/^[0-9]{10}$/.test(formData.phone)) errors.phone = 'Phone number must be 10 digits';
      if (!formData.address.trim()) errors.address = 'Address is required';
      
      setFormErrors(errors);
      if (Object.keys(errors).length === 0) {
        setModalStep(2);
      }
    } else if (modalStep === 2) {
      const errors = {};
      if (!formData.occupation.trim()) errors.occupation = 'Occupation is required';
      if (!formData.monthlyIncome) errors.monthlyIncome = 'Monthly income is required';
      
      setFormErrors(errors);
      if (Object.keys(errors).length === 0) {
        setModalStep(3);
      }
    }
  };

  // Previous step
  const prevStep = () => {
    setModalStep(modalStep - 1);
  };

  // Testimonial data
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Salaried Professional",
      quote: "DRD helped me save ₹50,000 in just one year without even noticing!",
      rating: 5
    },
    {
      name: "Rahul Verma",
      role: "Small Business Owner",
      quote: "The daily compounding feature is amazing. My savings grew 30% more than I expected.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-800 dark:via-slate-800 dark:to-slate-800 text-slate-900 dark:text-slate-100">
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="relative mb-10 overflow-hidden border shadow-2xl bg-slate-50 dark:bg-slate-900 rounded-3xl border-slate-200/50 dark:border-slate-700/50">
          <div className="absolute inset-0 bg-gradient-to-r from-[#228296]/5 via-transparent to-[#6f3c85]/5"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#228296]/10 to-[#6f3c85]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#228296]/10 to-[#6f3c85]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-pulse"></div>
          
          <div className="relative flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block w-1.5 h-8 rounded-full bg-gradient-to-b from-[#228296] via-[#4a2c7a] to-[#6f3c85]"></span>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#228296] dark:text-[#6f3c85]">
                  Savings Plan
                </p>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white">
                  New
                </span>
              </div>
              <h1 className="text-4xl font-bold sm:text-5xl bg-gradient-to-r from-[#228296] via-[#4a2c7a] to-[#6f3c85] bg-clip-text text-transparent">
                Daily Recurring Deposit
              </h1>
              <p className="max-w-2xl mt-3 text-sm text-slate-600 dark:text-slate-400">
                A flexible plan to save small amounts daily and build a substantial corpus over time with the power of compounding.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={openModal}
                className="px-6 py-2.5 text-sm font-medium text-white rounded-full bg-gradient-to-r from-[#228296] to-[#6f3c85] shadow-lg shadow-[#228296]/25 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Open Account
                </span>
              </button>
              <div className="px-4 py-2 text-sm font-medium text-white rounded-full bg-gradient-to-r from-[#228296] to-[#6f3c85] shadow-lg shadow-[#228296]/25">
                <span className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-slate-50 animate-pulse"></span>
                  Active Plan
                </span>
              </div>
              <div className="px-3 py-1 text-xs font-medium border rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-700">
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Popular
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards with Animation */}
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-4">
          {[
            { label: "Min Daily Deposit", value: "₹50", icon: Wallet, color: "emerald" },
            { label: "Max Interest Rate", value: "7.5% p.a.", icon: Percent, color: "blue" },
            { label: "Tenure", value: "1-5 Years", icon: Calendar, color: "purple" },
            { label: "Compounding", value: "Daily", icon: TrendingUp, color: "amber" }
          ].map((stat, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`p-6 transition-all duration-500 bg-slate-50 border shadow-lg dark:bg-slate-900 rounded-2xl border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl ${
                hoveredCard === index ? 'scale-105 -translate-y-1' : 'scale-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400">{stat.label}</p>
                  <p className={`mt-2 text-2xl font-bold text-${stat.color}-600 dark:text-${stat.color}-400`}>
                    {stat.value}
                  </p>
                </div>
                <div className={`p-3 rounded-full bg-${stat.color}-50 dark:bg-${stat.color}-900/20`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600 dark:text-${stat.color}-400`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid with Enhanced UI */}
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 transition-all duration-300 border shadow-lg cursor-pointer bg-slate-50 dark:bg-slate-900 rounded-2xl border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:scale-105 group"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">{feature.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
              <div className="mt-3 text-xs font-medium text-[#228296] dark:text-[#6f3c85] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                Learn More <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section with Stats */}
        <div className="p-8 mb-8 border shadow-lg bg-slate-50 dark:bg-slate-900 rounded-3xl border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="inline-block w-1.5 h-6 rounded-full bg-gradient-to-b from-[#228296] to-[#6f3c85]"></span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Key Benefits</h2>
            </div>
            <div className="px-4 py-1 text-xs font-semibold rounded-full bg-[#228296]/10 text-[#228296] dark:bg-[#6f3c85]/20 dark:text-[#6f3c85]">
              <span className="flex items-center gap-1">
                <Award className="w-3 h-3" />
                4 Benefits
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 p-4 transition-all duration-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 group"
              >
                <div className="p-2 rounded-lg bg-[#228296]/10 text-[#228296] dark:bg-[#6f3c85]/20 dark:text-[#6f3c85] group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100">{benefit.title}</h4>
                    <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                      {benefit.stat}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Calculator Section with Enhanced UI */}
        <div className="p-8 mb-8 border shadow-lg bg-slate-50 dark:bg-slate-900 rounded-3xl border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="inline-block w-1.5 h-6 rounded-full bg-gradient-to-b from-[#228296] to-[#6f3c85]"></span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Maturity Calculator</h2>
            </div>
            <div className="px-4 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-[#228296]/10 to-[#6f3c85]/10 text-[#228296] dark:text-[#6f3c85]">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Estimate Your Returns
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                Daily Deposit Amount (₹)
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={dailyAmount}
                  onChange={(e) => setDailyAmount(Number(e.target.value))}
                  min="50"
                  max="10000"
                  className="w-full px-4 py-2.5 border rounded-lg bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#228296] transition-all duration-200"
                />
                <div className="absolute right-3 top-2.5 text-xs text-slate-400 dark:text-slate-500">
                  ₹50 - ₹10,000
                </div>
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                Investment Period
              </label>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="w-full px-4 py-2.5 border rounded-lg bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#228296] transition-all duration-200"
              >
                {Object.keys(interestRates).map((period) => (
                  <option key={period} value={period}>
                    {getPeriodLabel(period)} @ {interestRates[period]}% p.a.
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={handleCalculate}
                disabled={isAnimating}
                className="w-full px-6 py-2.5 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAnimating ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="inline-block w-4 h-4 border-2 border-white rounded-full animate-spin border-t-transparent"></span>
                    Calculating...
                  </span>
                ) : (
                  'Calculate Maturity'
                )}
              </button>
            </div>
          </div>

          {/* Results with Animation */}
          {showCalculator && calculatedMaturity && (
            <div className={`mt-6 p-6 border rounded-2xl bg-gradient-to-r from-[#228296]/5 to-[#6f3c85]/5 border-slate-200 dark:border-slate-700 transition-all duration-500 ${
              isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
            }`}>
              <div className="flex items-center gap-2 mb-4">
                <Gem className="w-5 h-5 text-[#228296] dark:text-[#6f3c85]" />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Maturity Summary</h3>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="p-4 text-center shadow-sm bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <p className="text-sm text-slate-500 dark:text-slate-400">Total Deposit</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">₹{calculatedMaturity.totalDeposit.toLocaleString()}</p>
                </div>
                <div className="p-4 text-center shadow-sm bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <p className="text-sm text-slate-500 dark:text-slate-400">Interest Earned</p>
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">₹{calculatedMaturity.interestEarned.toFixed(2)}</p>
                </div>
                <div className="p-4 text-center shadow-sm bg-slate-50 dark:bg-slate-800 rounded-xl ring-1 ring-[#228296]/20">
                  <p className="text-sm text-slate-500 dark:text-slate-400">Maturity Amount</p>
                  <p className="text-2xl font-bold text-[#228296] dark:text-[#6f3c85]">₹{calculatedMaturity.maturityAmount.toFixed(2)}</p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Based on ₹{dailyAmount}/day for {calculatedMaturity.years} year{calculatedMaturity.years > 1 ? 's' : ''} @ {calculatedMaturity.rate}% p.a.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Testimonials Section */}
        <div className="p-8 mb-8 border shadow-lg bg-slate-50 dark:bg-slate-900 rounded-3xl border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-1.5 h-6 rounded-full bg-gradient-to-b from-[#228296] to-[#6f3c85]"></span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 transition-all duration-300 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-800/50 hover:shadow-md">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm italic text-slate-700 dark:text-slate-300">"{testimonial.quote}"</p>
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#228296] to-[#6f3c85] flex items-center justify-center text-white text-xs font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{testimonial.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section with Accordion */}
        <div className="p-8 mb-8 border shadow-lg bg-slate-50 dark:bg-slate-900 rounded-3xl border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="inline-block w-1.5 h-6 rounded-full bg-gradient-to-b from-[#228296] to-[#6f3c85]"></span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Frequently Asked Questions</h2>
            </div>
            <div className="px-4 py-1 text-xs font-semibold rounded-full bg-[#228296]/10 text-[#228296] dark:bg-[#6f3c85]/20 dark:text-[#6f3c85]">
              <span className="flex items-center gap-1">
                <MessageCircle className="w-3 h-3" />
                {faqs.length} Questions
              </span>
            </div>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="overflow-hidden transition-all duration-300 border rounded-xl border-slate-200 dark:border-slate-700"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center justify-between w-full p-4 text-left transition-colors duration-200 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                >
                  <span className="font-medium text-slate-900 dark:text-slate-100">{faq.question}</span>
                  {showFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                  )}
                </button>
                {showFAQ === index && (
                  <div className="p-4 pt-0 text-sm text-slate-600 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-800/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section with Enhanced Design */}
        <div className="relative p-8 overflow-hidden border shadow-xl bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-3xl border-slate-200/50">
          <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full w-96 h-96 bg-white/10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 rounded-full w-96 h-96 bg-white/10 blur-3xl animate-pulse"></div>
          
          <div className="relative flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-white/80" />
                <span className="text-xs font-semibold tracking-wider uppercase text-white/80">Start Your Journey</span>
              </div>
              <h2 className="text-3xl font-bold text-white">Ready to Start Saving?</h2>
              <p className="text-white/80">Open your DRD account today and start building your wealth.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={openModal}
                className="px-6 py-3 text-sm font-medium text-[#228296] bg-white rounded-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
              >
                Open Account
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <a href="/accounts" className="px-6 py-3 text-sm font-medium text-white transition-all duration-300 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                Back to Accounts
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Open Account Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl bg-slate-50 dark:bg-slate-900 rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 z-10 px-6 py-4 border-b bg-slate-100 border-slate-200 dark:border-slate-700 dark:bg-slate-900 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    Open DRD Account
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Step {modalStep} of 3 • {modalStep === 1 ? 'Personal Details' : modalStep === 2 ? 'Financial Details' : 'Nominee & Terms'}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 transition-colors duration-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <X className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                </button>
              </div>
              {/* Progress Bar */}
              <div className="flex gap-1 mt-4">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`flex-1 h-1.5 rounded-full transition-all duration-300 ${
                      step <= modalStep
                        ? 'bg-gradient-to-r from-[#228296] to-[#6f3c85]'
                        : 'bg-slate-200 dark:bg-slate-700'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Modal Body */}
            <div className="px-6 py-6">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Personal Details */}
                {modalStep === 1 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-2.5 w-5 h-5 text-slate-400" />
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-2.5 border rounded-lg bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#228296] transition-all duration-200 ${
                              formErrors.fullName ? 'border-red-500' : ''
                            }`}
                            placeholder="Enter your full name"
                          />
                        </div>
                        {formErrors.fullName && (
                          <p className="mt-1 text-xs text-red-500">{formErrors.fullName}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-2.5 w-5 h-5 text-slate-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-2.5 border rounded-lg bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#228296] transition-all duration-200 ${
                              formErrors.email ? 'border-red-500' : ''
                            }`}
                            placeholder="Enter your email"
                          />
                        </div>
                        {formErrors.email && (
                          <p className="mt-1 text-xs text-red-500">{formErrors.email}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-2.5 w-5 h-5 text-slate-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-2.5 border rounded-lg bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#228296] transition-all duration-200 ${
                              formErrors.phone ? 'border-red-500' : ''
                            }`}
                            placeholder="10-digit mobile number"
                          />
                        </div>
                        {formErrors.phone && (
                          <p className="mt-1 text-xs text-red-500">{formErrors.phone}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                          Address *
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-2.5 w-5 h-5 text-slate-400" />
                          <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-2.5 border rounded-lg bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#228296] transition-all duration-200 ${
                              formErrors.address ? 'border-red-500' : ''
                            }`}
                            placeholder="Enter your address"
                          />
                        </div>
                        {formErrors.address && (
                          <p className="mt-1 text-xs text-red-500">{formErrors.address}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Financial Details */}
                {modalStep === 2 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                          Occupation *
                        </label>
                        <div className="relative">
                          <Briefcase className="absolute left-3 top-2.5 w-5 h-5 text-slate-400" />
                          <input
                            type="text"
                            name="occupation"
                            value={formData.occupation}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-2.5 border rounded-lg bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#228296] transition-all duration-200 ${
                              formErrors.occupation ? 'border-red-500' : ''
                            }`}
                            placeholder="Your occupation"
                          />
                        </div>
                        {formErrors.occupation && (
                          <p className="mt-1 text-xs text-red-500">{formErrors.occupation}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                          Monthly Income (₹) *
                        </label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-2.5 w-5 h-5 text-slate-400" />
                          <input
                            type="number"
                            name="monthlyIncome"
                            value={formData.monthlyIncome}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-2.5 border rounded-lg bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#228296] transition-all duration-200 ${
                              formErrors.monthlyIncome ? 'border-red-500' : ''
                            }`}
                            placeholder="Monthly income"
                          />
                        </div>
                        {formErrors.monthlyIncome && (
                          <p className="mt-1 text-xs text-red-500">{formErrors.monthlyIncome}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                          Daily Deposit Amount (₹)
                        </label>
                        <div className="relative">
                          <Wallet className="absolute left-3 top-2.5 w-5 h-5 text-slate-400" />
                          <input
                            type="number"
                            name="dailyDeposit"
                            value={formData.dailyDeposit}
                            onChange={handleInputChange}
                            min="50"
                            max="10000"
                            className="w-full pl-10 pr-4 py-2.5 border rounded-lg bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#228296] transition-all duration-200"
                            placeholder="Daily deposit amount"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                          Investment Period
                        </label>
                        <select
                          name="investmentPeriod"
                          value={formData.investmentPeriod}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 border rounded-lg bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#228296] transition-all duration-200"
                        >
                          {Object.keys(interestRates).map((period) => (
                            <option key={period} value={period}>
                              {getPeriodLabel(period)} @ {interestRates[period]}% p.a.
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Nominee & Terms */}
                {modalStep === 3 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                          Nominee Name *
                        </label>
                        <input
                          type="text"
                          name="nomineeName"
                          value={formData.nomineeName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2.5 border rounded-lg bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#228296] transition-all duration-200 ${
                            formErrors.nomineeName ? 'border-red-500' : ''
                          }`}
                          placeholder="Nominee full name"
                        />
                        {formErrors.nomineeName && (
                          <p className="mt-1 text-xs text-red-500">{formErrors.nomineeName}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                          Nominee Relation *
                        </label>
                        <input
                          type="text"
                          name="nomineeRelation"
                          value={formData.nomineeRelation}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2.5 border rounded-lg bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#228296] transition-all duration-200 ${
                            formErrors.nomineeRelation ? 'border-red-500' : ''
                          }`}
                          placeholder="Relationship with nominee"
                        />
                        {formErrors.nomineeRelation && (
                          <p className="mt-1 text-xs text-red-500">{formErrors.nomineeRelation}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-lg bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700">
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-amber-800 dark:text-amber-300">
                            Terms & Conditions
                          </p>
                          <p className="text-xs text-amber-700 dark:text-amber-400">
                            By opening this account, you agree to the terms and conditions of the DRD scheme.
                            Your deposits are secure and regulated by financial authorities.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleInputChange}
                        className="mt-1 w-4 h-4 text-[#228296] border-slate-300 rounded focus:ring-[#228296]"
                      />
                      <div>
                        <label className="text-sm text-slate-700 dark:text-slate-300">
                          I accept the terms and conditions *
                        </label>
                        {formErrors.termsAccepted && (
                          <p className="mt-1 text-xs text-red-500">{formErrors.termsAccepted}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Modal Footer */}
                <div className="flex gap-3 pt-6 mt-6 border-t border-slate-200 dark:border-slate-700">
                  {modalStep > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
                    >
                      Previous
                    </button>
                  )}
                  {modalStep < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex-1 px-6 py-2.5 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg transition-all duration-300"
                    >
                      Next Step
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="flex-1 px-6 py-2.5 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg transition-all duration-300"
                    >
                      Open Account
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-6 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DRDAccount;