import React, { useState } from 'react';
import { 
  Home, 
  TrendingUp, 
  Shield, 
  Clock, 
  ArrowRight, 
  CheckCircle,
  Building,
  Landmark,
  Zap,
  FileText,
  Calculator,
  IndianRupee,
  Calendar,
  Percent,
  Key,
  Heart,
  Award,
  X,
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  DollarSign,
  CreditCard,
  Upload,
  AlertCircle
} from 'lucide-react';

const HomeLoan = () => {
  const [propertyValue, setPropertyValue] = useState(5000000);
  const [downPayment, setDownPayment] = useState(1000000);
  const [tenure, setTenure] = useState(20);
  const [interestType, setInterestType] = useState('fixed');
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    panCard: '',
    employmentType: 'salaried',
    annualIncome: '',
    propertyCity: '',
    propertyType: 'readyToMove',
    existingLoan: 'no',
    loanAmount: '',
    agreeTerms: false
  });
  const [errors, setErrors] = useState({});

  const loanAmount = propertyValue - downPayment;
  const interestRate = interestType === 'fixed' ? 9.5 : 8.9;

  const calculateEMI = () => {
    const principal = loanAmount;
    const ratePerMonth = interestRate / 12 / 100;
    const months = tenure * 12;
    const emi = principal * ratePerMonth * Math.pow(1 + ratePerMonth, months) / (Math.pow(1 + ratePerMonth, months) - 1);
    return emi.toFixed(0);
  };

  const totalPayment = (calculateEMI() * tenure * 12).toFixed(0);
  const totalInterest = (totalPayment - loanAmount).toFixed(0);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be 10 digits';
    if (!formData.panCard.trim()) newErrors.panCard = 'PAN card is required';
    else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panCard.toUpperCase())) newErrors.panCard = 'Invalid PAN format';
    if (!formData.annualIncome) newErrors.annualIncome = 'Annual income is required';
    if (!formData.propertyCity) newErrors.propertyCity = 'Property city is required';
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms and conditions';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setFormSubmitted(true);
    
    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setFormSubmitted(false);
      setShowModal(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        panCard: '',
        employmentType: 'salaried',
        annualIncome: '',
        propertyCity: '',
        propertyType: 'readyToMove',
        existingLoan: 'no',
        loanAmount: '',
        agreeTerms: false
      });
    }, 3000);
  };

  const features = [
    { icon: <Zap size={24} />, title: 'Quick Approval', desc: 'In-principle approval in 24 hours' },
    { icon: <Percent size={24} />, title: 'Low Interest', desc: 'Starting from 8.9% p.a.' },
    { icon: <Calendar size={24} />, title: 'Long Tenure', desc: 'Up to 30 years repayment' },
    { icon: <Building size={24} />, title: 'High Loan Amount', desc: 'Up to ₹5 Crores' },
    { icon: <Landmark size={24} />, title: 'Tax Benefits', desc: 'Save up to ₹1.5 Lakhs under 80C' },
    { icon: <Shield size={24} />, title: 'Free Insurance', desc: 'Comprehensive home insurance' }
  ];

  const eligibility = [
    'Age: 21-65 years',
    'Indian resident or NRI',
    'CIBIL score of 750+ required',
    'Stable income source',
    'Property should be clear title'
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1a6677] via-[#228296] to-[#0d4a57]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative px-4 py-10 mx-auto md:pt-8 md:pb-24">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-3 py-2 mb-2 text-sm font-semibold rounded-full bg-gradient-to-r from-[#1a5b6b] to-[#6f3c85] backdrop-blur-sm">
              <Home size={16} className="mr-2" />
              Make Your Dream Home a Reality
            </div>
            <h1 className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">Home Loan</h1>
            <p className="mb-3 text-lg text-white/90 md:text-xl">
              Own your dream home with our affordable home loans. Low interest rates, flexible tenures, and quick approvals.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button 
                onClick={() => setShowModal(true)}
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-[#228296] transition-all bg-white rounded-lg hover:shadow-xl hover:scale-105"
              >
                Apply Now <ArrowRight size={18} className="ml-2" />
              </button>
              <button 
                onClick={() => document.getElementById('emi-calculator')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white transition-all border-2 border-white rounded-lg hover:bg-white/10 hover:scale-105"
              >
                Calculate EMI
              </button>
            </div>
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

      <div className="container px-4 py-12 mx-auto">
        {/* EMI Calculator */}
        <div id="emi-calculator" className="p-8 mb-16 rounded-lg shadow-xl dark:bg-gray-900 bg-slate-50">
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-800 dark:text-gray-300">Home Loan EMI Calculator</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Property Value (₹)</label>
                <input
                  type="range"
                  min="500000"
                  max="50000000"
                  step="100000"
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">₹5 Lakhs</span>
                  <span className="font-semibold text-[#228296]">₹{(propertyValue/1000000).toFixed(0)} Lakhs</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">₹5 Crores</span>
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Down Payment (₹)</label>
                <input
                  type="range"
                  min="0"
                  max={propertyValue * 0.3}
                  step="10000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">₹0</span>
                  <span className="font-semibold text-[#228296]">₹{(downPayment/100000).toFixed(0)} Lakhs</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">₹{(propertyValue * 0.3/100000).toFixed(0)} Lakhs</span>
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Loan Tenure (Years)</label>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="5"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">5 years</span>
                  <span className="font-semibold text-[#228296]">{tenure} years</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">30 years</span>
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Interest Type</label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setInterestType('fixed')}
                    className={`flex-1 py-2 rounded-lg transition-all ${interestType === 'fixed' ? 'bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white' : 'bg-gray-100 text-gray-700'}`}
                  >
                    Fixed Rate
                  </button>
                  <button
                    onClick={() => setInterestType('floating')}
                    className={`flex-1 py-2 rounded-lg transition-all ${interestType === 'floating' ? 'bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white' : 'bg-gray-100 text-gray-700'}`}
                  >
                    Floating Rate
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50">
              <h3 className="mb-4 text-xl font-bold text-gray-800">Loan Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Property Value:</span>
                  <span className="font-semibold">₹{(propertyValue/1000000).toFixed(1)} Lakhs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Down Payment:</span>
                  <span className="font-semibold">₹{(downPayment/100000).toFixed(0)} Lakhs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Loan Amount:</span>
                  <span className="font-semibold">₹{(loanAmount/100000).toFixed(0)} Lakhs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Interest Rate:</span>
                  <span className="font-semibold text-[#228296]">{interestRate}% p.a.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Interest:</span>
                  <span className="font-semibold text-green-600">₹{(totalInterest/100000).toFixed(0)} Lakhs</span>
                </div>
                <div className="pt-3 mt-3 border-t-2 border-gray-300">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-gray-800">Monthly EMI:</span>
                    <span className="text-2xl font-bold text-[#6f3c85]">₹{parseFloat(calculateEMI()).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="p-6 transition-all duration-300 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50 hover:shadow-xl">
                <div className="mb-4 text-[#228296]">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-300">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility & Documents */}
        <div className="grid gap-8 mb-16 md:grid-cols-2">
          <div className="p-8 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
            <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-300">Eligibility Criteria</h3>
            <ul className="space-y-3">
              {eligibility.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle size={18} className="mt-1 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
            <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-300">Documents Required</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>✓ Application form with photograph</li>
              <li>✓ Identity proof (PAN/Aadhar/Passport)</li>
              <li>✓ Address proof (Voter ID/Utility bill)</li>
              <li>✓ Income proof (Salary slips/ITR for 3 years)</li>
              <li>✓ Property documents</li>
              <li>✓ Bank statements (last 6 months)</li>
            </ul>
          </div>
        </div>

        {/* Tax Benefits */}
        <div className="p-8 mb-16 rounded-lg bg-gradient-to-r from-green-50 to-blue-50">
          <div className="text-center">
            <h3 className="mb-4 text-2xl font-bold text-gray-800">Tax Benefits on Home Loan</h3>
            <div className="grid gap-6 mt-6 md:grid-cols-3">
              <div>
                <div className="text-3xl font-bold text-[#228296]">₹1.5 Lakhs</div>
                <p className="mt-2 text-gray-600">Under Section 80C for principal repayment</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#228296]">₹2 Lakhs</div>
                <p className="mt-2 text-gray-600">Under Section 24B for interest payment</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#228296]">₹3.5 Lakhs</div>
                <p className="mt-2 text-gray-600">Total tax saving per year</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 text-center bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-lg text-white">
          <div className="flex items-center justify-center mb-4">
            <Heart size={32} className="mr-2" />
            <Key size={32} />
          </div>
          <h2 className="mb-4 text-2xl font-bold">Start Your Home Ownership Journey</h2>
          <p className="mb-6">Get approval in principle within 24 hours with minimal documentation</p>
          <button 
            onClick={() => setShowModal(true)}
            className="px-8 py-3 font-semibold text-[#228296] transition-all bg-white rounded-lg hover:shadow-xl hover:scale-105"
          >
            Apply for Home Loan
          </button>
        </div>
      </div>

      {/* Application Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div 
              className="fixed inset-0 transition-opacity bg-black bg-opacity-75"
              onClick={() => !isSubmitting && setShowModal(false)}
            ></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

            <div className="inline-block w-full max-w-4xl overflow-hidden text-left align-middle transition-all transform rounded-lg shadow-xl bg-slate-50 dark:bg-gray-900">
              {formSubmitted ? (
                <div className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <CheckCircle size={64} className="text-green-500" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Application Submitted!</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Thank you for applying for a home loan with us. Our representative will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-6 py-2 mt-6 text-white transition-all bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-lg hover:shadow-lg"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between p-6 border-b dark:border-gray-700">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Home Loan Application</h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Fill in the details to get started</p>
                    </div>
                    <button
                      onClick={() => !isSubmitting && setShowModal(false)}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="p-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      {/* Personal Information */}
                      <div className="space-y-4">
                        <h3 className="flex items-center gap-2 text-lg font-semibold text-[#228296]">
                          <User size={20} /> Personal Information
                        </h3>
                        
                        <div>
                          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 dark:text-gray-200 focus:ring-[#228296] focus:border-transparent dark:bg-gray-800 dark:border-gray-700 ${errors.fullName ? 'border-red-500' : 'border-gray-300 '}`}
                            placeholder="Enter your full name"
                          />
                          {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
                        </div>

                        <div>
                          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 dark:text-gray-200 focus:ring-[#228296] focus:border-transparent dark:bg-gray-800 dark:border-gray-700 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="you@example.com"
                          />
                          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                        </div>

                        <div>
                          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 dark:text-gray-200 focus:ring-[#228296] focus:border-transparent dark:bg-gray-800 dark:border-gray-700 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="10-digit mobile number"
                          />
                          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                        </div>

                        <div>
                          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                            PAN Card <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="panCard"
                            value={formData.panCard}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 dark:text-gray-200 focus:ring-[#228296] focus:border-transparent dark:bg-gray-800 dark:border-gray-700 ${errors.panCard ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="ABCDE1234F"
                          />
                          {errors.panCard && <p className="mt-1 text-sm text-red-500">{errors.panCard}</p>}
                        </div>
                      </div>

                      {/* Employment & Financial Info */}
                      <div className="space-y-4">
                        <h3 className="flex items-center gap-2 text-lg font-semibold text-[#228296]">
                          <Briefcase size={20} /> Employment & Financial
                        </h3>

                        <div>
                          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                            Employment Type
                          </label>
                          <select
                            name="employmentType"
                            value={formData.employmentType}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 dark:text-gray-200 rounded-lg focus:ring-2 focus:ring-[#228296] focus:border-transparent dark:bg-gray-800 dark:border-gray-700"
                          >
                            <option value="salaried">Salaried</option>
                            <option value="self-employed">Self Employed</option>
                            <option value="business">Business Owner</option>
                            <option value="professional">Professional</option>
                          </select>
                        </div>

                        <div>
                          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                            Annual Income (₹) <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="number"
                            name="annualIncome"
                            value={formData.annualIncome}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 dark:text-gray-200 focus:ring-[#228296] focus:border-transparent dark:bg-gray-800 dark:border-gray-700 ${errors.annualIncome ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="e.g., 800000"
                          />
                          {errors.annualIncome && <p className="mt-1 text-sm text-red-500">{errors.annualIncome}</p>}
                        </div>

                        <div>
                          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                            Existing Home Loan?
                          </label>
                          <div className="flex gap-4 mt-1">
                            <label className="flex items-center gap-2 dark:text-gray-300">
                              <input
                                type="radio"
                                name="existingLoan"
                                value="no"
                                checked={formData.existingLoan === 'no'}
                                onChange={handleInputChange}
                              />
                              No
                            </label>
                            <label className="flex items-center gap-2 dark:text-gray-300">
                              <input
                                type="radio"
                                name="existingLoan"
                                value="yes"
                                checked={formData.existingLoan === 'yes'}
                                onChange={handleInputChange}
                              />
                              Yes
                            </label>
                          </div>
                        </div>

                        <div>
                          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                            Required Loan Amount (₹)
                          </label>
                          <input
                            type="number"
                            name="loanAmount"
                            value={formData.loanAmount}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 dark:text-gray-200 focus:ring-[#228296] focus:border-transparent dark:bg-gray-800 dark:border-gray-700"
                            placeholder={`Max: ₹${Math.floor(loanAmount/100000)} Lakhs`}
                          />
                          <p className="mt-1 text-xs text-gray-500">Based on your eligibility, you may qualify for up to ₹{Math.floor(loanAmount/100000)} Lakhs</p>
                        </div>
                      </div>

                      {/* Property Details */}
                      <div className="space-y-4">
                        <h3 className="flex items-center gap-2 text-lg font-semibold text-[#228296]">
                          <Building size={20} /> Property Details
                        </h3>

                        <div>
                          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                            Property City <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="propertyCity"
                            value={formData.propertyCity}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 dark:text-gray-200 focus:ring-[#228296] focus:border-transparent dark:bg-gray-800 dark:border-gray-700 ${errors.propertyCity ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="Enter city name"
                          />
                          {errors.propertyCity && <p className="mt-1 text-sm text-red-500">{errors.propertyCity}</p>}
                        </div>

                        <div>
                          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                            Property Type
                          </label>
                          <select
                            name="propertyType"
                            value={formData.propertyType}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 dark:text-gray-200 focus:ring-[#228296] focus:border-transparent dark:bg-gray-800 dark:border-gray-700"
                          >
                            <option value="readyToMove">Ready to Move</option>
                            <option value="underConstruction">Under Construction</option>
                            <option value="resale">Resale Property</option>
                          </select>
                        </div>

                        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                          <div className="flex items-start gap-2">
                            <AlertCircle size={20} className="text-[#228296] mt-0.5" />
                            <div>
                              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Loan Summary</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Property Value: ₹{(propertyValue/1000000).toFixed(1)} Lakhs<br />
                                Down Payment: ₹{(downPayment/100000).toFixed(0)} Lakhs<br />
                                Eligible Loan: ₹{(loanAmount/100000).toFixed(0)} Lakhs<br />
                                EMI: ₹{parseFloat(calculateEMI()).toLocaleString()}/month
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Documents Upload */}
                      <div className="space-y-4">
                        <h3 className="flex items-center gap-2 text-lg font-semibold text-[#228296]">
                          <Upload size={20} /> Document Upload (Optional)
                        </h3>
                        
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-[#228296] transition-colors">
                          <Upload size={32} className="mx-auto mb-2 text-gray-400" />
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Drag & drop or click to upload<br />
                            <span className="text-xs">PAN, Aadhar, Salary Slips (Max 5MB)</span>
                          </p>
                          <input type="file" className="hidden" multiple />
                          <button type="button" className="mt-2 text-sm text-[#228296] hover:underline">
                            Browse Files
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#228296]"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          I agree to the <a href="#" className="text-[#228296] hover:underline">Terms & Conditions</a> and authorize the bank to check my credit score
                        </span>
                      </label>
                      {errors.agreeTerms && <p className="mt-1 text-sm text-red-500">{errors.agreeTerms}</p>}
                    </div>

                    <div className="flex gap-4 mt-8">
                      <button
                        type="button"
                        onClick={() => setShowModal(false)}
                        className="flex-1 px-6 py-3 text-gray-700 transition-all border border-gray-300 rounded-lg hover:bg-gray-50 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-800"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 px-6 py-3 text-white transition-all bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                            Submitting...
                          </span>
                        ) : (
                          'Submit Application'
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeLoan;