/* eslint-disable react-hooks/static-components */
import React, { useState } from 'react';
import { 
  Plane, 
  Landmark, 
  Shield, 
  Globe, 
  ArrowRight, 
  CheckCircle,
  DollarSign,
  Home,
  Briefcase,
  LineChart,
  Smartphone,
  Users,
  FileText,
  Clock,
  MessageCircle,
  Gift,
  TrendingUp,
  Wallet,
  X,
  Loader,
  Send
} from 'lucide-react';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const NRIServices = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAccountType, setSelectedAccountType] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    nriType: '',
    accountType: 'NRE Account',
    message: ''
  });

  const nriAccounts = [
    {
      type: 'NRE Account',
      icon: <Globe size={32} />,
      features: ['Repatriable funds', 'Interest earned tax-free', 'Joint account with NRI/PIO', 'Free remittances'],
      interest: '6.5% - 7.5%',
      minBalance: '₹10,000'
    },
    {
      type: 'NRO Account',
      icon: <Landmark size={32} />,
      features: ['Non-repatriable funds', 'Manage Indian income', 'Pay local bills', 'Tax deducted at source'],
      interest: '6.0% - 7.0%',
      minBalance: '₹5,000'
    },
    {
      type: 'FCNR Account',
      icon: <DollarSign size={32} />,
      features: ['Foreign currency deposits', 'Hedge against rupee fluctuation', 'Full repatriability', 'No exchange risk'],
      interest: '4.5% - 5.5%',
      minBalance: '$1000 or equivalent'
    }
  ];

  const services = [
    { icon: <Home size={24} />, title: 'NRI Home Loans', desc: 'Special home loan schemes for NRIs with attractive interest rates' },
    { icon: <Briefcase size={24} />, title: 'Investment Advisory', desc: 'Expert guidance on Indian market investments' },
    { icon: <LineChart size={24} />, title: 'Portfolio Management', desc: 'Professional management of your Indian investments' },
    { icon: <Smartphone size={24} />, title: 'Digital NRI Banking', desc: '24/7 online access to your accounts from anywhere' },
    { icon: <FileText size={24} />, title: 'Tax Advisory', desc: 'Complete tax planning and filing assistance' },
    { icon: <Shield size={24} />, title: 'Insurance Solutions', desc: 'Comprehensive insurance coverage for NRIs' }
  ];

  const benefits = [
    'Free money transfers from over 40 countries',
    'Dedicated relationship manager for premium services',
    'Priority customer support via WhatsApp & Email',
    'Competitive exchange rates with zero hidden charges',
    'Doorstep document collection for KYC',
    'Monthly e-statements and transaction alerts'
  ];

  const countries = ['USA', 'UK', 'Canada', 'Australia', 'UAE', 'Singapore', 'Germany', 'France', 'Japan', 'Other'];
  const nriTypes = ['NRI (Non-Resident Indian)', 'PIO (Person of Indian Origin)', 'OCI (Overseas Citizen of India)'];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openModal = (accountType = '') => {
    setSelectedAccountType(accountType);
    setFormData(prev => ({
      ...prev,
      accountType: accountType || 'NRE Account'
    }));
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAccountType('');
    setIsSubmitting(false);
    // setSubmitSuccess(false);
    document.body.style.overflow = 'unset';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('NRI Application Submitted:', formData);
      setIsSubmitting(false);
      // setSubmitSuccess(true);
      
      // Show success modal and then reset/close
      const submittedEmail = formData.email;
      MySwal.fire({
        icon: 'success',
        title: 'Application Submitted!',
        html: `Thank you! Our NRI relationship manager will contact you within 24 hours at <strong>${submittedEmail}</strong>.`,
        // confirmButtonText: 'OK',
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
        timerProgressBar: true,
        timer: 5000
      }).then(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          country: '',
          nriType: '',
          accountType: 'NRE Account',
          message: ''
        });
        closeModal();
      });
    }, 1500);
  };

  // Modal Component
  const ApplicationModal = () => {
    if (!isModalOpen) return null;
    
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 transition-opacity bg-black/60 backdrop-blur-sm"
          onClick={closeModal}
        />
        
        {/* Modal Container */}
        <div className="flex items-center justify-center min-h-full p-4">
          <div className="relative w-full max-w-2xl transition-all transform shadow-2xl bg-slate-50 dark:bg-gray-900 rounded-xl">
            {/* Modal Header */}
            <div className="sticky top-0 flex justify-between items-center p-4 bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white rounded-t-xl">
              <div>
                <h2 className="text-xl font-bold">Open NRI Account</h2>
                <p className="mt-1 text-sm text-white/80">
                  {selectedAccountType ? `Applying for ${selectedAccountType}` : 'Start your NRI banking journey'}
                </p>
              </div>
              <button 
                onClick={closeModal} 
                className="p-1 text-white transition-colors rounded-lg hover:bg-white/20"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Modal Body - Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {/* Success Message */}
              {/* {submitSuccess && (
                <div className="flex items-center gap-3 p-4 border border-green-200 rounded-lg bg-green-50">
                  <CheckCircle size={20} className="text-green-500" />
                  <div>
                    <p className="font-semibold text-green-700">Application Submitted!</p>
                    <p className="text-sm text-green-600">Our NRI specialist will contact you shortly.</p>
                  </div>
                </div>
              )} */}
              
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-200">Full Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:ring-[#228296] dark:focus:border-[#228296] outline-none transition"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-200">Email Address *</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:ring-[#228296] dark:focus:border-[#228296] outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-200">Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    required 
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:ring-[#228296] dark:focus:border-[#228296] outline-none transition"
                    placeholder="+91 or your country code"
                  />
                </div>
                <div>
                  <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-200">Country of Residence *</label>
                  <select 
                    name="country" 
                    required 
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:ring-[#228296] dark:focus:border-[#228296] outline-none"
                  >
                    <option value="">Select Country</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-200">NRI Type *</label>
                  <select 
                    name="nriType" 
                    required 
                    value={formData.nriType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:ring-[#228296] dark:focus:border-[#228296] outline-none"
                  >
                    <option value="">Select Type</option>
                    {nriTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-200">Account Type *</label>
                  <select 
                    name="accountType" 
                    required 
                    value={formData.accountType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:ring-[#228296] dark:focus:border-[#228296] outline-none"
                  >
                    <option value="NRE Account">NRE Account (Repatriable)</option>
                    <option value="NRO Account">NRO Account (Non-Repatriable)</option>
                    <option value="FCNR Account">FCNR Account (Foreign Currency)</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-200">Additional Message (Optional)</label>
                <textarea 
                  name="message" 
                  rows="3" 
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:ring-[#228296] dark:focus:border-[#228296] outline-none resize-none"
                  placeholder="Tell us about your banking needs or any specific requirements..."
                />
              </div>
              
              <div className="p-4 rounded-lg bg-blue-50 dark:bg-red-200">
                <p className="flex items-start gap-2 text-xs text-blue-700">
                  <Shield size={14} className="mt-0.5 flex-shrink-0" />
                  By submitting this application, you agree to our terms and conditions. Our NRI relationship manager will contact you within 24 hours with account opening assistance.
                </p>
              </div>
              
              <div className="flex gap-3 pt-2">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex-1 py-2.5 text-white rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] font-semibold hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <><Loader size={18} className="animate-spin" /> Processing...</>
                  ) : (
                    <><Send size={18} /> Submit Application</>
                  )}
                </button>
                <button 
                  type="button" 
                  onClick={closeModal} 
                  className="px-6 py-2.5 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1a6b7c] via-[#228296] to-[#6f3c85]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative px-4 py-10 mx-auto md:pt-8 md:pb-24">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-3 py-1 mb-2 text-sm font-semibold rounded-full bg-gradient-to-r from-[#1a5b6b] to-[#6f3c85] backdrop-blur-sm">
              <Plane size={16} className="mr-2" />
              Global Indian Banking
            </div>
            <h1 className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">
              NRI Banking Services
            </h1>
            <p className="mb-3 text-lg text-white/90 md:text-xl">
              Seamless banking solutions for Indians across the globe. 
              Manage your finances in India with ease and confidence.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button 
                onClick={() => openModal()}
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-[#228296] transition-all bg-white rounded-lg hover:shadow-xl hover:scale-105"
              >
                Open NRI Account
                <ArrowRight size={18} className="ml-2" />
              </button>
              <button 
                onClick={() => openModal()}
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white transition-all border-2 border-white rounded-lg hover:bg-white/10 hover:scale-105"
              >
                Talk to NRI Expert
                <MessageCircle size={18} className="ml-2" />
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
        {/* NRI Account Types */}
        <div className="mb-16">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold text-gray-800 dark:text-gray-200">NRI Account Options</h2>
            <p className="text-gray-600 dark:text-gray-300">Choose the right account based on your needs</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {nriAccounts.map((account, index) => (
              <div key={index} className="p-6 transition-all duration-300 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50 hover:shadow-xl hover:-translate-y-2">
                <div className="mb-4 text-[#228296]">{account.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-200">{account.type}</h3>
                <p className="mb-3 text-sm text-gray-500 dark:text-gray-300">Interest Rate: {account.interest}</p>
                <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">Min Balance: {account.minBalance}</p>
                <ul className="mb-4 space-y-2">
                  {account.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={14} className="mt-0.5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => openModal(account.type)}
                  className="w-full py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg transition-all"
                >
                  Open {account.type}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold text-gray-800 dark:text-gray-200">Exclusive NRI Services</h2>
            <p className="text-gray-600 dark:text-gray-300">Comprehensive banking solutions for global Indians</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="p-6 transition-all duration-300 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50 hover:shadow-xl">
                <div className="mb-3 text-[#228296]">{service.icon}</div>
                <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-200">{service.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits & Features */}
        <div className="grid gap-8 mb-16 md:grid-cols-2">
          <div className="p-8 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-800">
            <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-200">Why Choose Our NRI Services?</h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle size={18} className="mt-0.5 text-[#228296]" />
                  <span className="text-gray-700 dark:text-gray-200">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 rounded-lg shadow-md bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
            <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-200">Quick Facts</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 text-center rounded-lg bg-slate-50 dark:bg-gray-800">
                <div className="text-3xl font-bold text-[#228296]">40+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Countries Served</div>
              </div>
              <div className="p-4 text-center rounded-lg bg-slate-50 dark:bg-gray-800">
                <div className="text-3xl font-bold text-[#6f3c85]">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Customer Support</div>
              </div>
              <div className="p-4 text-center rounded-lg bg-slate-50 dark:bg-gray-800">
                <div className="text-3xl font-bold text-[#228296]">₹0</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Transfer Fees</div>
              </div>
              <div className="p-4 text-center rounded-lg bg-slate-50 dark:bg-gray-800">
                <div className="text-3xl font-bold text-[#6f3c85]">5 Min</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Account Opening</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="p-8 text-center rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85]">
          <h3 className="mb-2 text-2xl font-bold text-white">Ready to get started?</h3>
          <p className="mb-4 text-white/90">Open your NRI account online in just 5 minutes</p>
          <button 
            onClick={() => openModal()}
            className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-[#228296] transition-all bg-white rounded-lg hover:shadow-xl hover:scale-105"
          >
            Apply Now
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Application Modal */}
      <ApplicationModal />
    </div>
  );
};

export default NRIServices;