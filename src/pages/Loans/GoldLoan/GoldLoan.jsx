/* eslint-disable react-hooks/purity */
import React, { useState } from 'react';
import {
  Diamond,
  TrendingUp,
  Shield,
  Clock,
  ArrowRight,
  CheckCircle,
  Wallet,
  Zap,
  FileText,
  Calculator,
  IndianRupee,
  Calendar,
  Percent,
  Gem,
  Award,
  Lock,
  X,
  User,
  Phone,
  Mail,
  MapPin,
  Building,
  CreditCard,
  Upload,
  AlertCircle
} from 'lucide-react';

const GoldLoan = () => {
  const [goldWeight, setGoldWeight] = useState(20);
  const [goldPurity, setGoldPurity] = useState('24k');
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    pincode: '',
    occupation: '',
    goldWeight: goldWeight,
    goldPurity: goldPurity,
    loanAmount: '',
    idProof: null,
    addressProof: null
  });
  
  const [formErrors, setFormErrors] = useState({});

  const calculateLoanAmount = () => {
    const ratePerGram = goldPurity === '24k' ? 5200 : (goldPurity === '22k' ? 4800 : 4500);
    return (goldWeight * ratePerGram).toLocaleString();
  };

  const calculateActualLoan = () => {
    const ratePerGram = goldPurity === '24k' ? 5200 : (goldPurity === '22k' ? 4800 : 4500);
    return (goldWeight * ratePerGram * 0.85).toLocaleString();
  };

  const features = [
    { icon: <Zap size={24} />, title: 'Instant Disbursal', desc: 'Loan in 15 minutes' },
    { icon: <Wallet size={24} />, title: 'High LTV Ratio', desc: 'Up to 85% of gold value' },
    { icon: <Percent size={24} />, title: 'Low Interest', desc: 'Starting from 8.5% p.a.' },
    { icon: <Lock size={24} />, title: 'Secure Storage', desc: 'Insured lockers' },
    { icon: <Gem size={24} />, title: 'Flexible Repayment', desc: 'Pay only interest monthly' },
    { icon: <Award size={24} />, title: 'No Income Proof', desc: 'Just bring your gold' }
  ];

  const openModal = () => {
    setFormData(prev => ({
      ...prev,
      goldWeight: goldWeight,
      goldPurity: goldPurity,
      loanAmount: calculateActualLoan()
    }));
    setIsModalOpen(true);
    setSubmitSuccess(false);
    setFormErrors({});
  };

  const closeModal = () => {
    if (!isSubmitting) {
      setIsModalOpen(false);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        pincode: '',
        occupation: '',
        goldWeight: goldWeight,
        goldPurity: goldPurity,
        loanAmount: '',
        idProof: null,
        addressProof: null
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
      if (validTypes.includes(file.type)) {
        setFormData(prev => ({ ...prev, [type]: file }));
        if (formErrors[type]) {
          setFormErrors(prev => ({ ...prev, [type]: '' }));
        }
      } else {
        setFormErrors(prev => ({ ...prev, [type]: 'Please upload JPG, PNG or PDF file' }));
      }
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone)) errors.phone = 'Enter valid 10-digit mobile number';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Enter valid email address';
    if (!formData.address.trim()) errors.address = 'Address is required';
    if (!formData.city.trim()) errors.city = 'City is required';
    if (!formData.pincode.trim()) errors.pincode = 'Pincode is required';
    else if (!/^\d{6}$/.test(formData.pincode)) errors.pincode = 'Enter valid 6-digit pincode';
    if (!formData.occupation) errors.occupation = 'Please select occupation';
    if (!formData.idProof) errors.idProof = 'Please upload ID proof (Aadhar/PAN/Passport)';
    if (!formData.addressProof) errors.addressProof = 'Please upload address proof';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      closeModal();
      setSubmitSuccess(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#228296] via-[#2c9cb3] to-[#1a5566]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative px-4 py-10 mx-auto md:pt-8 md:pb-24">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-3 py-2 mb-2 text-sm font-semibold rounded-full bg-gradient-to-r from-[#1a5b6b] to-[#6f3c85] backdrop-blur-sm">
              <Diamond size={16} className="mr-2" />
              Unlock Your Gold's Value
            </div>
            <h1 className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl text-[#d29702]">Gold Loan</h1>
            <p className="mb-3 text-lg text-white/90 md:text-xl">
              Get instant cash against your gold jewelry. Lowest interest rates, highest loan amount, and complete security.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button 
                onClick={openModal}
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-[#b8860b] transition-all bg-white rounded-lg hover:shadow-xl hover:scale-105"
              >
                Apply Now <ArrowRight size={18} className="ml-2" />
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white transition-all border-2 border-white rounded-lg hover:bg-white/10 hover:scale-105">
                Calculate Loan
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
        {/* Gold Value Calculator */}
        <div className="p-8 mb-16 rounded-lg shadow-xl dark:bg-gray-900 bg-slate-50">
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-800 dark:text-gray-300">Gold Loan Value Calculator</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">Gold Weight (Grams)</label>
                <input
                  type="range"
                  min="5"
                  max="500"
                  step="5"
                  value={goldWeight}
                  onChange={(e) => setGoldWeight(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">5g</span>
                  <span className="font-semibold text-[#b8860b]">{goldWeight}g</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">500g</span>
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Gold Purity</label>
                <div className="flex gap-4">
                  {['24k', '22k', '18k'].map((purity) => (
                    <button
                      key={purity}
                      onClick={() => setGoldPurity(purity)}
                      className={`flex-1 py-2 rounded-lg transition-all ${goldPurity === purity ? 'bg-gradient-to-r from-[#d4a843] to-[#b8860b] text-white' : 'bg-gray-100 text-gray-700'}`}
                    >
                      {purity}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-yellow-50 to-amber-50">
              <h3 className="mb-4 text-xl font-bold text-gray-800">Loan Amount Estimate</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Gold Value:</span>
                  <span className="font-semibold">₹{calculateLoanAmount()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">LTV Ratio:</span>
                  <span className="font-semibold">85%</span>
                </div>
                <div className="pt-3 mt-3 border-t-2 border-gray-300">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-gray-800">Loan Amount:</span>
                    <span className="text-2xl font-bold text-[#b8860b]">₹{calculateActualLoan()}</span>
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
                <div className="mb-4 text-[#d4a843]">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-300">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Advantages */}
        <div className="grid gap-6 mb-16 md:grid-cols-3">
          <div className="p-6 text-center rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
            <div className="mb-3 text-4xl">💎</div>
            <h3 className="font-bold text-gray-800 dark:text-gray-300">Keep Your Gold</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">We store securely, you get the loan</p>
          </div>
          <div className="p-6 text-center rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
            <div className="mb-3 text-4xl">⚡</div>
            <h3 className="font-bold text-gray-800 dark:text-gray-300">Instant Processing</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Disbursal within 15 minutes</p>
          </div>
          <div className="p-6 text-center rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
            <div className="mb-3 text-4xl">🔄</div>
            <h3 className="font-bold text-gray-800 dark:text-gray-300">Easy Repayment</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Flexible EMI options available</p>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 text-center bg-gradient-to-r from-[#d4a843] to-[#b8860b] rounded-lg text-white">
          <h2 className="mb-4 text-2xl font-bold">Get Instant Cash Against Your Gold</h2>
          <p className="mb-6">Visit any branch with your gold jewelry and get loan on the spot</p>
          <button 
            onClick={openModal}
            className="px-8 py-3 font-semibold text-[#b8860b] transition-all bg-white rounded-lg hover:shadow-xl hover:scale-105"
          >
            Apply for Gold Loan
          </button>
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div 
              className="fixed inset-0 transition-opacity bg-black bg-opacity-75 backdrop-blur-sm"
              onClick={closeModal}
            ></div>

            {/* Modal panel */}
            <div className="inline-block overflow-hidden text-left align-bottom transition-all transform shadow-2xl bg-slate-50 dark:bg-gray-900 rounded-2xl sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              {!submitSuccess ? (
                <>
                  {/* Modal Header */}
                  <div className="relative px-6 py-4 bg-gradient-to-r from-[#b8860b] to-[#966d03]">
                    <button
                      onClick={closeModal}
                      className="absolute text-white transition-colors right-4 top-4 hover:text-gray-200"
                      disabled={isSubmitting}
                    >
                      <X size={24} />
                    </button>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-lg bg-opacity-20">
                        <Diamond className="text-[#d4a843]" size={28} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">Gold Loan Application</h2>
                        <p className="text-sm text-white/80">Fill the details to get instant approval</p>
                      </div>
                    </div>
                  </div>

                  {/* Modal Body */}
                  <form onSubmit={handleSubmit} className="px-6 py-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      {/* Personal Information */}
                      <div className="space-y-4">
                        <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-white">
                          <User size={20} className="text-[#b8860b]" />
                          Personal Details
                        </h3>
                        
                        <div>
                          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <User size={18} className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                            <input
                              type="text"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none dark:text-gray-300 focus:ring-2 focus:ring-[#b8860b] dark:bg-gray-800 dark:border-gray-700 ${formErrors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                              placeholder="Enter your full name"
                              disabled={isSubmitting}
                            />
                          </div>
                          {formErrors.fullName && <p className="mt-1 text-xs text-red-500">{formErrors.fullName}</p>}
                        </div>

                        <div>
                          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                            Mobile Number <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Phone size={18} className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              maxLength="10"
                              className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none dark:text-gray-300 focus:ring-2 focus:ring-[#b8860b] dark:bg-gray-800 dark:border-gray-700 ${formErrors.phone ? 'border-red-500' : 'border-gray-300'}`}
                              placeholder="10-digit mobile number"
                              disabled={isSubmitting}
                            />
                          </div>
                          {formErrors.phone && <p className="mt-1 text-xs text-red-500">{formErrors.phone}</p>}
                        </div>

                        <div>
                          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Mail size={18} className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none dark:text-gray-300 focus:ring-2 focus:ring-[#b8860b] dark:bg-gray-800 dark:border-gray-700 ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                              placeholder="your@email.com"
                              disabled={isSubmitting}
                            />
                          </div>
                          {formErrors.email && <p className="mt-1 text-xs text-red-500">{formErrors.email}</p>}
                        </div>

                        <div>
                          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                            Occupation <span className="text-red-500">*</span>
                          </label>
                          <select
                            name="occupation"
                            value={formData.occupation}
                            onChange={handleInputChange}
                            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b8860b] dark:text-gray-300 dark:bg-gray-800 dark:border-gray-700 ${formErrors.occupation ? 'border-red-500' : 'border-gray-300'}`}
                            disabled={isSubmitting}
                          >
                            <option value="">Select occupation</option>
                            <option value="salaried">Salaried</option>
                            <option value="self-employed">Self Employed</option>
                            <option value="business">Business</option>
                            <option value="professional">Professional</option>
                            <option value="other">Other</option>
                          </select>
                          {formErrors.occupation && <p className="mt-1 text-xs text-red-500">{formErrors.occupation}</p>}
                        </div>
                      </div>

                      {/* Address & Loan Details */}
                      <div className="space-y-4">
                        <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-300">
                          <MapPin size={20} className="text-[#b8860b]" />
                          Address & Loan Details
                        </h3>

                        <div>
                          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                            Address <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            rows="2"
                            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b8860b] dark:text-gray-300 dark:bg-gray-800 dark:border-gray-700 ${formErrors.address ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="Enter your complete address"
                            disabled={isSubmitting}
                          ></textarea>
                          {formErrors.address && <p className="mt-1 text-xs text-red-500">{formErrors.address}</p>}
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                              City <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b8860b] dark:text-gray-300 dark:bg-gray-800 dark:border-gray-700 ${formErrors.city ? 'border-red-500' : 'border-gray-300'}`}
                              placeholder="City"
                              disabled={isSubmitting}
                            />
                            {formErrors.city && <p className="mt-1 text-xs text-red-500">{formErrors.city}</p>}
                          </div>
                          <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                              Pincode <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="pincode"
                              value={formData.pincode}
                              onChange={handleInputChange}
                              maxLength="6"
                              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b8860b] dark:text-gray-300 dark:bg-gray-800 dark:border-gray-700 ${formErrors.pincode ? 'border-red-500' : 'border-gray-300'}`}
                              placeholder="6-digit pincode"
                              disabled={isSubmitting}
                            />
                            {formErrors.pincode && <p className="mt-1 text-xs text-red-500">{formErrors.pincode}</p>}
                          </div>
                        </div>

                        {/* Gold Details Display */}
                        <div className="p-3 rounded-lg bg-gradient-to-r from-yellow-50 to-amber-50">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Gold Weight:</span>
                            <span className="font-semibold">{formData.goldWeight}g</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Gold Purity:</span>
                            <span className="font-semibold">{formData.goldPurity}</span>
                          </div>
                          <div className="flex justify-between pt-2 mt-2 text-lg font-bold border-t border-gray-300">
                            <span>Estimated Loan:</span>
                            <span className="text-[#b8860b]">₹{formData.loanAmount}</span>
                          </div>
                        </div>
                      </div>

                      {/* Document Uploads */}
                      <div className="space-y-4 md:col-span-2">
                        <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-300">
                          <Upload size={20} className="text-[#b8860b]" />
                          Upload Documents
                        </h3>
                        
                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                              ID Proof (Aadhar/PAN/Passport) <span className="text-red-500">*</span>
                            </label>
                            <div className={`border-2 border-dashed rounded-lg p-3 text-center ${formErrors.idProof ? 'border-red-500' : 'border-gray-300'}`}>
                              <input
                                type="file"
                                accept=".jpg,.jpeg,.png,.pdf"
                                onChange={(e) => handleFileChange(e, 'idProof')}
                                className="hidden"
                                id="idProof"
                                disabled={isSubmitting}
                              />
                              <label htmlFor="idProof" className="cursor-pointer">
                                <Upload size={32} className="mx-auto text-gray-400" />
                                <p className="text-sm text-gray-500">Click to upload</p>
                                <p className="text-xs text-gray-400">JPG, PNG or PDF (Max 5MB)</p>
                              </label>
                            </div>
                            {formData.idProof && <p className="mt-1 text-xs text-green-600">✓ File selected: {formData.idProof.name}</p>}
                            {formErrors.idProof && <p className="mt-1 text-xs text-red-500">{formErrors.idProof}</p>}
                          </div>

                          <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                              Address Proof (Utility Bill/Bank Statement) <span className="text-red-500">*</span>
                            </label>
                            <div className={`border-2 border-dashed rounded-lg p-3 text-center ${formErrors.addressProof ? 'border-red-500' : 'border-gray-300'}`}>
                              <input
                                type="file"
                                accept=".jpg,.jpeg,.png,.pdf"
                                onChange={(e) => handleFileChange(e, 'addressProof')}
                                className="hidden"
                                id="addressProof"
                                disabled={isSubmitting}
                              />
                              <label htmlFor="addressProof" className="cursor-pointer">
                                <Upload size={32} className="mx-auto text-gray-400" />
                                <p className="text-sm text-gray-500">Click to upload</p>
                                <p className="text-xs text-gray-400">JPG, PNG or PDF (Max 5MB)</p>
                              </label>
                            </div>
                            {formData.addressProof && <p className="mt-1 text-xs text-green-600">✓ File selected: {formData.addressProof.name}</p>}
                            {formErrors.addressProof && <p className="mt-1 text-xs text-red-500">{formErrors.addressProof}</p>}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Terms & Conditions */}
                    <div className="mt-6">
                      <label className="flex items-start gap-2">
                        <input type="checkbox" required className="mt-1" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          I confirm that the gold ornaments are owned by me and free from any legal disputes. I agree to the <a href="#" className="text-[#b8860b] hover:underline">Terms & Conditions</a> and <a href="#" className="text-[#b8860b] hover:underline">Privacy Policy</a>.
                        </span>
                      </label>
                    </div>

                    {/* Modal Footer */}
                    <div className="flex gap-3 mt-6">
                      <button
                        type="button"
                        onClick={closeModal}
                        className="flex-1 px-4 py-2 text-gray-700 transition-all bg-gray-100 rounded-lg hover:bg-gray-200"
                        disabled={isSubmitting}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 px-4 py-2 text-white transition-all bg-gradient-to-r from-[#d4a843] to-[#b8860b] rounded-lg hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <div className="w-4 h-4 border-2 border-white rounded-full animate-spin border-t-transparent"></div>
                            Processing...
                          </span>
                        ) : (
                          'Submit Application'
                        )}
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                // Success State
                <div className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-green-100 rounded-full">
                      <CheckCircle size={48} className="text-green-500" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-gray-800 dark:text-gray-300">Application Submitted Successfully!</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">Our representative will contact you within 15 minutes.</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Reference ID: GLD{Math.floor(Math.random() * 1000000)}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoldLoan;