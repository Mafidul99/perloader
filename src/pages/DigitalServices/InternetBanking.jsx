import React, { useState } from 'react';
import { 
  Laptop, 
  Shield, 
  CreditCard, 
  FileText, 
  ArrowRight, 
  CheckCircle,
  Users,
  BarChart3,
  Calendar,
  Download,
  Printer,
  Settings,
  HelpCircle,
  MessageCircle,
  AlertCircle,
  X,
  User,
  Mail,
  Phone,
  Tag,
  Send,
  Clock,
  Check,
  Star
} from 'lucide-react';

const InternetBanking = () => {
  const [loginType, setLoginType] = useState('individual');
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isregister, setIsRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    accountNumber: '',
    issueType: 'general',
    subject: '',
    message: '',
    priority: 'normal',
    preferredContact: 'email'
  });
  const [errors, setErrors] = useState({});

  const features = [
    { icon: <BarChart3 size={24} />, title: 'Account Dashboard', desc: 'View all accounts at a glance' },
    { icon: <FileText size={24} />, title: 'e-Statements', desc: 'Download statements up to 7 years' },
    { icon: <CreditCard size={24} />, title: 'Card Management', desc: 'Manage cards, set limits instantly' },
    { icon: <Users size={24} />, title: 'Third-party Transfer', desc: 'Add & manage beneficiaries' },
    { icon: <Calendar size={24} />, title: 'Scheduled Payments', desc: 'Schedule future payments' },
    { icon: <Download size={24} />, title: 'Tax Downloads', desc: 'Form 26AS, Interest certificates' }
  ];

  const benefits = [
    'Multiple account management under single login',
    'High-value transaction limits up to ₹50 Crores',
    'Corporate banking features for businesses',
    'Detailed transaction reports in Excel/PDF',
    'Tax saving investment tracking',
    'Nomination and mandate management'
  ];

  const issueTypes = [
    { value: 'general', label: 'General Query', icon: <HelpCircle size={16} /> },
    { value: 'technical', label: 'Technical Issue', icon: <Settings size={16} /> },
    { value: 'transaction', label: 'Transaction Issue', icon: <CreditCard size={16} /> },
    { value: 'security', label: 'Security Concern', icon: <Shield size={16} /> },
    { value: 'account', label: 'Account Related', icon: <Users size={16} /> },
    { value: 'complaint', label: 'Complaint', icon: <AlertCircle size={16} /> }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    else if (formData.fullName.length < 3) newErrors.fullName = 'Name must be at least 3 characters';
    
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be 10 digits';
    
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    else if (formData.subject.length < 5) newErrors.subject = 'Subject must be at least 5 characters';
    
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Support ticket submitted:', {
        ...formData,
        loginType,
        timestamp: new Date().toISOString(),
        ticketId: 'TKT' + Math.floor(Math.random() * 1000000)
      });
      
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after 3 seconds and close modal
      setTimeout(() => {
        setSubmitSuccess(false);
        setIsSupportModalOpen(false);
        resetForm();
      }, 3000);
    }, 2000);
  };
  
  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      accountNumber: '',
      issueType: 'general',
      subject: '',
      message: '',
      priority: 'normal',
      preferredContact: 'email'
    });
    setErrors({});
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'urgent': return 'text-orange-600 bg-orange-50';
      default: return 'text-blue-600 bg-blue-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1a4d5e] via-[#228296] to-[#6f3c85]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative px-4 py-10 mx-auto md:pt-8 md:pb-24">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-3 py-1 mb-2 text-sm font-semibold rounded-full bg-gradient-to-r from-[#1a5b6b] to-[#6f3c85] backdrop-blur-sm">
              <Laptop size={16} className="mr-2" />
              Complete Control Over Your Finances
            </div>
            <h1 className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">
              Internet Banking
            </h1>
            <p className="mb-3 text-lg text-white/90">
              Secure, comprehensive, and feature-rich online banking platform 
              for individuals and businesses.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button 
                onClick={() => setIsRegister(true)}
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-[#228296] transition-all bg-white rounded-lg hover:shadow-xl hover:scale-105"
              >
                Register Now
                <ArrowRight size={18} className="ml-2" />
              </button>
              <button 
                onClick={() => setIsLogin(true)}
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white transition-all border-2 border-white rounded-lg hover:bg-white/10"
              >
                Login to NetBanking
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
        {/* Login Type Selection */}
        <div className="mb-16">
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setLoginType('individual')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${loginType === 'individual' ? 'bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Individual Banking
            </button>
            <button
              onClick={() => setLoginType('corporate')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${loginType === 'corporate' ? 'bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Corporate Banking
            </button>
          </div>
          <div className="p-8 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-300">
                  {loginType === 'individual' ? 'Personal Banking Features' : 'Corporate Banking Features'}
                </h3>
                <ul className="space-y-3 dark:text-gray-300">
                  {loginType === 'individual' ? (
                    <>
                      <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" />View all accounts in one dashboard</li>
                      <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" />Fund transfer up to ₹10 Crores/day</li>
                      <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" />Credit card bill payment & management</li>
                      <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" />Fixed deposit booking online</li>
                      <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" />Loan application & tracking</li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" />Multi-user access with role-based rights</li>
                      <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" />Bulk payment upload facility</li>
                      <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" />Tax payment (Direct & Indirect)</li>
                      <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" />Letter of Credit & Bank Guarantee</li>
                      <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" />API integration for ERP systems</li>
                    </>
                  )}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <Shield size={60} className="mx-auto mb-4 text-[#228296]" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">Highest security standards with<br />two-factor authentication</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-gray-300">Internet Banking {' '}
              <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                Features
              </span></h2>
            <p className="text-gray-600 dark:text-gray-400">Comprehensive banking solutions at your fingertips</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="p-6 transition-all duration-300 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50 hover:shadow-xl hover:-translate-y-2">
                <div className="mb-4 text-[#228296]">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-300">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Section */}
        <div className="p-8 mb-16 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-800 dark:text-gray-200">Security Features</h2>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="text-center">
              <Shield size={32} className="mx-auto mb-2 text-[#228296]" />
              <p className="font-semibold text-gray-800 dark:text-gray-200">256-bit SSL</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Encryption</p>
            </div>
            <div className="text-center">
              <AlertCircle size={32} className="mx-auto mb-2 text-[#228296]" />
              <p className="font-semibold text-gray-800 dark:text-gray-200">Two-Factor</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Authentication</p>
            </div>
            <div className="text-center">
              <Printer size={32} className="mx-auto mb-2 text-[#228296]" />
              <p className="font-semibold text-gray-800 dark:text-gray-200">Auto Logout</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Inactivity timer</p>
            </div>
            <div className="text-center">
              <MessageCircle size={32} className="mx-auto mb-2 text-[#228296]" />
              <p className="font-semibold text-gray-800 dark:text-gray-200">Transaction</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">SMS Alerts</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="p-8 bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-lg text-white">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold">Key Benefits</h3>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle size={16} />
                    <span className="dark:text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <HelpCircle size={48} className="mx-auto mb-4" />
                <p className="mb-2 dark:text-gray-300">Need assistance?</p>
                <button 
                  onClick={() => setIsSupportModalOpen(true)}
                  className="px-4 py-2 text-[#228296] bg-white rounded-lg hover:shadow-lg transition-all hover:scale-105"
                >
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Support Modal */}
      {isSupportModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={() => setIsSupportModalOpen(false)}></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
            
            <div className="inline-block overflow-hidden text-left align-bottom transition-all transform rounded-lg shadow-xl bg-slate-50 dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
              {/* Modal Header */}
              <div className="relative px-6 py-4 bg-gradient-to-r from-[#228296] to-[#6f3c85]">
                <button
                  onClick={() => setIsSupportModalOpen(false)}
                  className="absolute text-white transition-colors right-4 top-4 hover:text-gray-200"
                >
                  <X size={24} />
                </button>
                <div className="flex items-center gap-3">
                  <HelpCircle size={28} className="text-white" />
                  <div>
                    <h2 className="text-2xl font-bold text-white">Customer Support</h2>
                    <p className="text-sm text-white/90">We're here to help you 24/7</p>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              {submitSuccess ? (
                <div className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-green-100 rounded-full">
                    <Check size={40} className="text-green-600" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-200">Ticket Created Successfully!</h3>
                  <p className="text-gray-600 dark:text-gray-300">Our support team will get back to you within 24 hours.</p>
                  <div className="p-4 mt-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <p className="text-sm text-gray-800 dark:text-gray-400">Support ticket has been sent to your registered email</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="px-6 py-4">
                  <div className="space-y-4">
                    {/* Quick Contact Options */}
                    <div className="grid grid-cols-2 gap-3 p-3 rounded-lg bg-gray-50">
                      <div className="text-center">
                        <Phone size={20} className="mx-auto mb-1 text-[#228296]" />
                        <p className="text-xs text-gray-600">Toll Free</p>
                        <p className="text-sm font-semibold">1800 123 4567</p>
                      </div>
                      <div className="text-center">
                        <MessageCircle size={20} className="mx-auto mb-1 text-[#228296]" />
                        <p className="text-xs text-gray-600">WhatsApp</p>
                        <p className="text-sm font-semibold">+91 98765 43210</p>
                      </div>
                    </div>

                    {/* Personal Information */}
                    <div className="grid gap-4 md:grid-cols-2">
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
                            className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="Enter your full name"
                          />
                        </div>
                        {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
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
                            className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300. ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="you@example.com"
                          />
                        </div>
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone size={18} className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            maxLength="10"
                            className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296]   dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="9876543210"
                          />
                        </div>
                        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                      </div>

                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Account Number (Optional)</label>
                        <div className="relative">
                          <CreditCard size={18} className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                          <input
                            type="text"
                            name="accountNumber"
                            value={formData.accountNumber}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
                            placeholder="Enter your account number"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Issue Type and Priority */}
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Issue Type</label>
                        <select
                          name="issueType"
                          value={formData.issueType}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
                        >
                          {issueTypes.map(type => (
                            <option key={type.value} value={type.value}>{type.label}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Priority</label>
                        <select
                          name="priority"
                          value={formData.priority}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] ${getPriorityColor(formData.priority)} dark:bg-gray-800 dark:border-gray-600`}
                        >
                          <option value="low">Low - General query</option>
                          <option value="normal">Normal - Need assistance</option>
                          <option value="high">High - Urgent issue</option>
                          <option value="urgent">Urgent - Critical problem</option>
                        </select>
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Tag size={18} className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] ${errors.subject ? 'border-red-500' : 'border-gray-300'} dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300`}
                          placeholder="Brief description of your issue"
                        />
                      </div>
                      {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] ${errors.message ? 'border-red-500' : 'border-gray-300'} dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300`}
                        placeholder="Please provide detailed information about your issue..."
                      ></textarea>
                      {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                    </div>

                    {/* Preferred Contact Method */}
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Preferred Contact Method</label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 dark:text-gray-300">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            checked={formData.preferredContact === 'email'}
                            onChange={handleInputChange}
                            className="text-[#228296]"
                          />
                          <span className="text-sm">Email</span>
                        </label>
                        <label className="flex items-center gap-2 dark:text-gray-300">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="phone"
                            checked={formData.preferredContact === 'phone'}
                            onChange={handleInputChange}
                            className="text-[#228296]"
                          />
                          <span className="text-sm">Phone</span>
                        </label>
                        <label className="flex items-center gap-2 dark:text-gray-300">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="whatsapp"
                            checked={formData.preferredContact === 'whatsapp'}
                            onChange={handleInputChange}
                            className="text-[#228296]"
                          />
                          <span className="text-sm">WhatsApp</span>
                        </label>
                      </div>
                    </div>

                    {/* Support Info */}
                    <div className="p-3 rounded-lg bg-blue-50">
                      <div className="flex items-start gap-2">
                        <Clock size={16} className="mt-0.5 text-blue-600" />
                        <div className="text-xs text-blue-800">
                          <p className="font-semibold">Response Time:</p>
                          <p>Priority requests: 2-4 hours | Normal requests: 24 hours</p>
                          <p className="mt-1">Our support team is available 24/7 to assist you</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Modal Footer */}
                  <div className="flex justify-end gap-3 pt-4 mt-6 border-t">
                    <button
                      type="button"
                      onClick={() => setIsSupportModalOpen(false)}
                      className="px-4 py-2 text-gray-700 transition-all bg-gray-100 rounded-lg hover:bg-gray-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-2 text-white transition-all bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Submit Ticket
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {isregister && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="p-6 rounded-lg shadow-lg bg-slate-50 dark:bg-gray-900">
            <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-200">Registration Coming Soon!</h2>
            <p className="text-gray-600 dark:text-gray-400">Our registration portal is currently under development. Please check back later.</p>
            <div className="p-4 mt-4 mb-6 rounded-lg bg-blue-50">
              <p className="text-sm text-blue-800">In the meantime, you can visit our nearest branch or contact our support team for assistance with account opening.</p>
            </div>
            <button 
              onClick={() => setIsRegister(false)}
              className="px-4 py-2 text-white transition-all bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-lg hover:shadow-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {isLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="p-6 rounded-lg shadow-lg bg-slate-50 dark:bg-gray-900">
            <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-200">Login Coming Soon!</h2>
            <p className="text-gray-600 dark:text-gray-400">Our login portal is currently under development. Please check back later.</p>
              <div className="p-4 mt-4 mb-6 rounded-lg bg-blue-50">
                <p className="text-sm text-blue-800">If you are an existing user, please visit our nearest branch or contact our support team for assistance with online banking access.</p>
              </div>
              <button 
              onClick={() => setIsLogin(false)}
              className="px-4 py-2 text-white transition-all bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-lg hover:shadow-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InternetBanking;