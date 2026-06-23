/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Building2,
  TrendingUp,
  Shield,
  Clock,
  ArrowRight,
  CheckCircle,
  Briefcase,
  ChartBar,
  Users,
  FileText,
  Calculator,
  IndianRupee,
  Calendar,
  Percent,
  Store,
  Factory,
  Truck,
  X,
  Send,
  Phone,
  Mail,
  User,
  MapPin,
  AlertCircle
} from 'lucide-react';

// Business Loan Application Modal Component
const BusinessLoanApplicationModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: 'retail',
    loanAmount: '',
    tenure: '',
    annualTurnover: '',
    city: '',
    existingLoans: 'no',
    consent: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const businessTypes = [
    { value: 'retail', label: 'Retail Shop', icon: <Store size={18} />, maxLoan: 5000000 },
    { value: 'manufacturing', label: 'Manufacturing', icon: <Factory size={18} />, maxLoan: 20000000 },
    { value: 'transportation', label: 'Transportation', icon: <Truck size={18} />, maxLoan: 7500000 },
    { value: 'services', label: 'Services', icon: <Building2 size={18} />, maxLoan: 10000000 }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    else if (formData.fullName.length < 3) newErrors.fullName = 'Name must be at least 3 characters';

    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';

    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be 10 digits';

    if (!formData.businessName.trim()) newErrors.businessName = 'Business name is required';

    if (!formData.loanAmount) newErrors.loanAmount = 'Loan amount is required';
    else {
      const amount = parseFloat(formData.loanAmount);
      const selectedBusiness = businessTypes.find(b => b.value === formData.businessType);
      if (amount < 50000) newErrors.loanAmount = 'Minimum loan amount is ₹50,000';
      else if (selectedBusiness && amount > selectedBusiness.maxLoan) {
        newErrors.loanAmount = `Maximum loan amount for ${selectedBusiness.label} is ₹${(selectedBusiness.maxLoan / 100000).toFixed(1)} Lakhs`;
      }
    }

    if (!formData.tenure) newErrors.tenure = 'Tenure is required';
    else if (formData.tenure < 1) newErrors.tenure = 'Minimum tenure is 1 year';
    else if (formData.tenure > 7) newErrors.tenure = 'Maximum tenure is 7 years';

    if (!formData.annualTurnover) newErrors.annualTurnover = 'Annual turnover is required';
    else if (parseFloat(formData.annualTurnover) < 100000) newErrors.annualTurnover = 'Minimum annual turnover is ₹1 Lakh';

    if (!formData.city.trim()) newErrors.city = 'City is required';

    if (!formData.consent) newErrors.consent = 'You must agree to the terms and conditions';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Calculate EMI for confirmation
    const calculateEMI = (amount, years) => {
      const rate = 11.5;
      const principal = amount;
      const ratePerMonth = rate / 12 / 100;
      const months = years * 12;
      const emi = principal * ratePerMonth * Math.pow(1 + ratePerMonth, months) / (Math.pow(1 + ratePerMonth, months) - 1);
      return emi.toFixed(0);
    };
    
    const applicationData = {
      ...formData,
      loanAmountNum: parseFloat(formData.loanAmount),
      tenureNum: parseInt(formData.tenure),
      estimatedEMI: calculateEMI(parseFloat(formData.loanAmount), parseInt(formData.tenure)),
      applicationId: 'BL' + Date.now().toString().slice(-8),
      appliedAt: new Date().toISOString()
    };
    
    if (onSubmit) {
      onSubmit(applicationData);
    }
    
    setSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        businessName: '',
        businessType: 'retail',
        loanAmount: '',
        tenure: '',
        annualTurnover: '',
        city: '',
        existingLoans: 'no',
        consent: false
      });
      onClose();
    }, 2000);
  };

  const getMaxLoanForBusinessType = () => {
    const selected = businessTypes.find(b => b.value === formData.businessType);
    return selected ? selected.maxLoan : 20000000;
  };

  const formatIndianNumber = (num) => {
    if (!num) return '';
    return new Intl.NumberFormat('en-IN').format(num);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl overflow-hidden shadow-2xl bg-slate-50 dark:bg-gray-900 rounded-2xl animate-modal-pop">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-[#1a5b6b] to-[#6f3c85] px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Building2 size={28} className="text-white" />
              <div>
                <h2 className="text-xl font-bold text-white">Business Loan Application</h2>
                <p className="text-sm text-white/80">Get funding up to ₹2 Crores</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1 transition-colors rounded-full text-white/80 hover:text-white hover:bg-white/20"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
            <div className="p-8 text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full">
                <CheckCircle size={40} className="text-green-500" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">Application Submitted!</h3>
              <p className="text-gray-600 dark:text-gray-400">Our representative will contact you within 24 hours.</p>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto max-h-[calc(100vh-200px)]">
          <div className="grid gap-5 md:grid-cols-2">
            {/* Full Name */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User size={18} className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] dark:bg-gray-800 dark:border-gray-700 ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Enter your full name"
                />
              </div>
              {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail size={18} className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] dark:bg-gray-800 dark:border-gray-700 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone size={18} className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={10}
                  className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] dark:bg-gray-800 dark:border-gray-700 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="9876543210"
                />
              </div>
              {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
            </div>

            {/* Business Name */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Business Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Building2 size={18} className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] dark:bg-gray-800 dark:border-gray-700 ${errors.businessName ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Your Business Name"
                />
              </div>
              {errors.businessName && <p className="mt-1 text-xs text-red-500">{errors.businessName}</p>}
            </div>

            {/* Business Type */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Business Type <span className="text-red-500">*</span>
              </label>
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] dark:bg-gray-800 dark:border-gray-700"
              >
                {businessTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>

            {/* City */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                City <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <MapPin size={18} className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] dark:bg-gray-800 dark:border-gray-700 ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Your City"
                />
              </div>
              {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city}</p>}
            </div>

            {/* Loan Amount */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Loan Amount (₹) <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <IndianRupee size={18} className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="number"
                  name="loanAmount"
                  value={formData.loanAmount}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] dark:bg-gray-800 dark:border-gray-700 ${errors.loanAmount ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="e.g., 500000"
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">Min: ₹50,000 | Max: ₹{(getMaxLoanForBusinessType() / 100000).toFixed(1)} Lakhs</p>
              {errors.loanAmount && <p className="mt-1 text-xs text-red-500">{errors.loanAmount}</p>}
            </div>

            {/* Tenure */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Loan Tenure (Years) <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Calendar size={18} className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="number"
                  name="tenure"
                  value={formData.tenure}
                  onChange={handleChange}
                  step="1"
                  min="1"
                  max="7"
                  className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] dark:bg-gray-800 dark:border-gray-700 ${errors.tenure ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="e.g., 3"
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">1 to 7 years</p>
              {errors.tenure && <p className="mt-1 text-xs text-red-500">{errors.tenure}</p>}
            </div>

            {/* Annual Turnover */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Annual Turnover (₹) <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <TrendingUp size={18} className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="number"
                  name="annualTurnover"
                  value={formData.annualTurnover}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] dark:bg-gray-800 dark:border-gray-700 ${errors.annualTurnover ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="e.g., 1000000"
                />
              </div>
              {errors.annualTurnover && <p className="mt-1 text-xs text-red-500">{errors.annualTurnover}</p>}
            </div>

            {/* Existing Loans */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Existing Business Loans?
              </label>
              <select
                name="existingLoans"
                value={formData.existingLoans}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] dark:bg-gray-800 dark:border-gray-700"
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
          </div>

          {/* EMI Preview */}
          {formData.loanAmount && formData.tenure && !errors.loanAmount && !errors.tenure && (
            <div className="mt-5 p-4 bg-gradient-to-r from-[#1a5b6b]/10 to-[#6f3c85]/10 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Estimated Monthly EMI</p>
                  <p className="text-2xl font-bold text-[#228296]">
                    ₹{(() => {
                      const rate = 11.5;
                      const principal = parseFloat(formData.loanAmount);
                      const ratePerMonth = rate / 12 / 100;
                      const months = parseInt(formData.tenure) * 12;
                      if (!principal || !months) return '0';
                      const emi = principal * ratePerMonth * Math.pow(1 + ratePerMonth, months) / (Math.pow(1 + ratePerMonth, months) - 1);
                      return Math.round(emi).toLocaleString('en-IN');
                    })()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Interest Rate</p>
                  <p className="text-lg font-semibold text-[#6f3c85]">11.5% p.a.</p>
                </div>
              </div>
            </div>
          )}

          {/* Consent Checkbox */}
          <div className="mt-5">
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-0.5"
              />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                I confirm that the information provided is accurate. I authorize the bank to contact me regarding this loan application. 
                <span className="text-red-500">*</span>
              </span>
            </label>
            {errors.consent && <p className="mt-1 text-xs text-red-500">{errors.consent}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-6 py-3 bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin" />
                Submitting Application...
              </>
            ) : (
              <>
                <Send size={18} />
                Submit Application
              </>
            )}
          </button>

          <p className="mt-4 text-xs text-center text-gray-500 dark:text-gray-400">
            By submitting, you agree to our terms and conditions. Our representative will contact you shortly.
          </p>
        </form>
      </div>

      <style jsx>{`
        @keyframes modal-pop {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-modal-pop {
          animation: modal-pop 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

// Updated BusinessLoan Component with Modal Integration
const BusinessLoan = () => {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [tenure, setTenure] = useState(3);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [applications, setApplications] = useState([]);

  const calculateEMI = () => {
    const rate = 11.5;
    const principal = loanAmount;
    const ratePerMonth = rate / 12 / 100;
    const months = tenure * 12;
    const emi = principal * ratePerMonth * Math.pow(1 + ratePerMonth, months) / (Math.pow(1 + ratePerMonth, months) - 1);
    return emi.toFixed(0);
  };

  const handleApplicationSubmit = (applicationData) => {
    setApplications(prev => [applicationData, ...prev]);
    console.log('Application submitted:', applicationData);
    // You can also send this to your backend API here
  };

  const features = [
    { icon: <Truck size={24} />, title: 'Working Capital', desc: 'Funds for daily operations' },
    { icon: <Factory size={24} />, title: 'Business Expansion', desc: 'Grow your enterprise' },
    { icon: <Store size={24} />, title: 'Inventory Purchase', desc: 'Stock up for seasons' },
    { icon: <Users size={24} />, title: 'Team Expansion', desc: 'Hire and train staff' },
    { icon: <ChartBar size={24} />, title: 'Marketing Budget', desc: 'Scale your reach' },
    { icon: <Briefcase size={24} />, title: 'Equipment Purchase', desc: 'Upgrade machinery' }
  ];

  const benefits = [
    'Loan up to ₹2 Crores without collateral',
    'Interest rates starting from 11.5% p.a.',
    'Repayment tenure up to 7 years',
    'No prepayment charges after 1 year',
    'Quick approval in 48 hours',
    'Overdraft facility available'
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      {/* EMI Calculator Modal */}
      {showCalculator && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-md p-6 bg-slate-50 dark:bg-gray-900 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">EMI Calculator</h3>
              <button onClick={() => setShowCalculator(false)} className="p-1 text-gray-300 bg-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600">
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Loan Amount (₹)</label>
                <input
                  type="range"
                  min="50000"
                  max="20000000"
                  step="50000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between mt-1 text-sm text-gray-600 dark:text-gray-400">
                  <span>₹50K</span>
                  <span>₹{(loanAmount / 100000).toFixed(1)} Lakhs</span>
                  <span>₹2 Cr</span>
                </div>
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Tenure (Years)</label>
                <input
                  type="range"
                  min="1"
                  max="7"
                  step="1"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between mt-1 text-sm text-gray-600 dark:text-gray-400">
                  <span>1 Year</span>
                  <span>{tenure} Years</span>
                  <span>7 Years</span>
                </div>
              </div>
              <div className="p-4 bg-gradient-to-r from-[#1a5b6b]/10 to-[#6f3c85]/10 rounded-lg text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">Monthly EMI</p>
                <p className="text-3xl font-bold text-[#228296]">₹{parseInt(calculateEMI()).toLocaleString('en-IN')}</p>
                <p className="mt-2 text-xs text-gray-500">Interest Rate: 11.5% p.a. | Total Interest: ₹{(parseInt(calculateEMI()) * tenure * 12 - loanAmount).toLocaleString('en-IN')}</p>
              </div>
              <button
                onClick={() => setShowCalculator(false)}
                className="w-full py-2 bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white rounded-lg"
              >
                Apply for Loan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Business Loan Application Modal */}
      <BusinessLoanApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleApplicationSubmit}
      />

      <div className="relative overflow-hidden bg-gradient-to-br from-[#1a5b6b] via-[#228296] to-[#6f3c85]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative px-4 py-10 mx-auto md:pt-8 md:pb-24">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-3 py-2 mb-2 text-sm font-semibold rounded-full bg-gradient-to-r from-[#1a5b6b] to-[#6f3c85] backdrop-blur-sm">
              <Building2 size={16} className="mr-2" />
              Fuel Your Business Growth
            </div>
            <h1 className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">Business Loan</h1>
            <p className="mb-3 text-lg text-white/90 md:text-xl">
              Empower your business with customized loan solutions. From startups to established enterprises, we support your journey.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-[#228296] transition-all bg-white rounded-lg hover:shadow-xl hover:scale-105"
              >
                Apply Now <ArrowRight size={18} className="ml-2" />
              </button>
              <button 
                onClick={() => setShowCalculator(true)}
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
        {/* Features */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-gray-300">Why Choose Our {' '}
              <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                Business Loan?
              </span></h2>
            <p className="text-gray-600 dark:text-gray-400">Tailored solutions for every business need</p>
          </div>
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

        {/* Benefits */}
        <div className="p-8 mb-16 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
          <h3 className="mb-6 text-2xl font-bold text-center text-gray-800 dark:text-gray-300">Key Benefits</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle size={18} className="text-green-500" />
                <span className='text-gray-600 dark:text-gray-400'>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Business Types */}
        <div className="grid gap-6 mb-16 md:grid-cols-4">
          <div className="p-6 text-center transition-all rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50 hover:shadow-xl">
            <Store size={40} className="mx-auto mb-3 text-[#228296]" />
            <h4 className="font-semibold text-gray-700 dark:text-gray-300">Retail Shop</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Up to ₹50 Lakhs</p>
          </div>
          <div className="p-6 text-center transition-all rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50 hover:shadow-xl">
            <Factory size={40} className="mx-auto mb-3 text-[#228296]" />
            <h4 className="font-semibold text-gray-700 dark:text-gray-300">Manufacturing</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Up to ₹2 Crores</p>
          </div>
          <div className="p-6 text-center transition-all rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50 hover:shadow-xl">
            <Truck size={40} className="mx-auto mb-3 text-[#228296]" />
            <h4 className="font-semibold text-gray-700 dark:text-gray-300">Transportation</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Up to ₹75 Lakhs</p>
          </div>
          <div className="p-6 text-center transition-all rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50 hover:shadow-xl">
            <Building2 size={40} className="mx-auto mb-3 text-[#228296]" />
            <h4 className="font-semibold text-gray-700 dark:text-gray-300">Services</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Up to ₹1 Crore</p>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 text-center bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-lg text-white">
          <h2 className="mb-4 text-2xl font-bold">Take Your Business to New Heights</h2>
          <p className="mb-6">Get funding up to ₹2 Crores with flexible repayment options</p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3 font-semibold text-[#228296] transition-all bg-white rounded-lg hover:shadow-xl hover:scale-105"
          >
            Apply for Business Loan
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessLoan;