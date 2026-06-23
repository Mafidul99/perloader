/* eslint-disable react-hooks/static-components */
import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  TrendingUp, 
  Shield, 
  Clock, 
  ArrowRight, 
  CheckCircle,
  CreditCard,
  Globe,
  Users,
  BarChart3,
  Zap,
  FileText,
  MessageCircle,
  DollarSign,
  X,
  Check,
  AlertCircle,
  Award,
  Rocket,
  Star,
  PhoneCall,
  Calendar,
  MapPin,
  Briefcase,
  Wallet,
  LineChart,
  Gift,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import Swal from 'sweetalert2';

const CurrentAccount = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    ownerName: '',
    email: '',
    phone: '',
    gstNumber: '',
    annualTurnover: '',
    panCard: '',
    address: '',
    city: '',
    pincode: '',
    state: '',
    yearsInBusiness: '',
    employeeCount: ''
  });

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    // Add CSS animations dynamically
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes slideUp {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      @keyframes slideDown {
        from { transform: translateY(-20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      @keyframes scaleUp {
        from { transform: scale(0.95); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
      .animate-fadeIn {
        animation: fadeIn 0.5s ease-out;
      }
      .animate-slideUp {
        animation: slideUp 0.5s ease-out;
      }
      .animate-slideDown {
        animation: slideDown 0.5s ease-out;
      }
      .animate-scaleUp {
        animation: scaleUp 0.3s ease-out;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const features = [
    { icon: <CreditCard size={24} />, title: 'Overdraft Facility', desc: 'Up to ₹50 Lakhs overdraft based on business profile', color: 'from-blue-500 to-cyan-500' },
    { icon: <Globe size={24} />, title: 'International Transactions', desc: 'Seamless foreign currency transactions', color: 'from-green-500 to-emerald-500' },
    { icon: <Users size={24} />, title: 'Multi-user Access', desc: 'Up to 10 authorized users for business operations', color: 'from-purple-500 to-pink-500' },
    { icon: <BarChart3 size={24} />, title: 'High Transaction Limits', desc: 'Unlimited daily transaction limits', color: 'from-orange-500 to-red-500' },
    { icon: <Zap size={24} />, title: 'Real-time Payments', desc: 'NEFT/RTGS/IMPS with zero charges', color: 'from-yellow-500 to-orange-500' },
    { icon: <MessageCircle size={24} />, title: 'Dedicated RM', desc: 'Personal relationship manager assigned', color: 'from-indigo-500 to-purple-500' }
  ];

  const plans = [
    {
      name: 'Classic Business',
      minBalance: '₹10,000',
      monthlyFee: '₹299',
      annualFee: '₹3,588',
      transactions: '100 Free/month',
      features: ['2 Free DD/PO', 'Free Cheque Book', 'Mobile Banking', 'Email Support'],
      icon: <Briefcase size={32} />,
      color: 'from-blue-500 to-cyan-500',
      recommended: false
    },
    {
      name: 'Premium Business',
      minBalance: '₹25,000',
      monthlyFee: '₹599',
      annualFee: '₹7,188',
      transactions: '250 Free/month',
      features: ['5 Free DD/PO', 'Free Cheque Book', 'Priority Support', 'Tax Payment Gateway', 'Free POS Machine'],
      icon: <Rocket size={32} />,
      color: 'from-[#228296] to-[#6f3c85]',
      recommended: true
    },
    {
      name: 'Corporate Elite',
      minBalance: '₹50,000',
      monthlyFee: '₹999',
      annualFee: '₹11,988',
      transactions: 'Unlimited',
      features: ['10 Free DD/PO', 'Free Cheque Book', '24/7 Dedicated RM', 'API Integration', 'Free POS Machine', 'Cash Management'],
      icon: <Award size={32} />,
      color: 'from-purple-600 to-pink-600',
      recommended: false
    }
  ];

  const testimonials = [
    { name: 'Rajesh Mehta', business: 'Mehta Traders', rating: 5, comment: 'Excellent banking experience with high transaction limits!' },
    { name: 'Priya Sharma', business: 'Sharma Enterprises', rating: 5, comment: 'Dedicated RM support has been a game changer for our business.' },
    { name: 'Amit Patel', business: 'Patel Group', rating: 4, comment: 'Great features and competitive pricing for current accounts.' }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openModal = (planName = null) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
    setFormSubmitted(false);
    setFormStep(1);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
    setFormSubmitted(false);
    setFormStep(1);
  };

  const nextStep = () => {
    setFormStep(formStep + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setFormStep(formStep - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    // Simulate API call
    setTimeout(() => {
      Swal.fire({
        title: '<span style="font-size: 1.5rem;">🎉 Application Submitted!</span>',
        html: `
          <div class="text-left">
            <p class="mb-2">Dear <strong>${formData.ownerName}</strong>,</p>
            <p>Your Current Account application for <strong>${formData.businessName}</strong> has been received successfully!</p>
            <div class="mt-4 p-3 bg-blue-50 rounded-lg">
              <p class="text-sm">📞 Our business banking team will contact you within <strong>24 hours</strong></p>
              <p class="text-sm mt-1">📧 A confirmation email has been sent to <strong>${formData.email}</strong></p>
            </div>
          </div>
        `,
        icon: 'success',
        confirmButtonText: 'Great!',
        confirmButtonColor: '#228296',
        background: '#fff',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      }).then(() => {
        closeModal();
        // Reset form
        setFormData({
          businessName: '',
          businessType: '',
          ownerName: '',
          email: '',
          phone: '',
          gstNumber: '',
          annualTurnover: '',
          panCard: '',
          address: '',
          city: '',
          pincode: '',
          state: '',
          yearsInBusiness: '',
          employeeCount: ''
        });
      });
    }, 1500);
  };

  // Modal Component
  const ApplicationModal = () => {
    // Prevent click propagation to close modal when clicking inside
    const handleModalContentClick = (e) => {
      e.stopPropagation();
    };

    return (
      <div 
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={closeModal}
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999
        }}
      >
        <div 
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl animate-scaleUp"
          onClick={handleModalContentClick}
        >
          {/* Modal Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between p-5 bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white rounded-t-2xl">
            <div>
              <h2 className="text-2xl font-bold">Open Current Account</h2>
              {selectedPlan && (
                <p className="mt-1 text-sm text-white/90">
                  Selected Plan: <span className="font-semibold">{selectedPlan}</span>
                </p>
              )}
            </div>
            <button 
              onClick={closeModal}
              className="p-2 text-white transition-all rounded-full bg-white/20 hover:bg-white/30 hover:scale-110"
            >
              <X size={20} />
            </button>
          </div>

          {/* Progress Steps */}
          {!formSubmitted && (
            <div className="px-6 pt-6">
              <div className="flex items-center justify-between">
                {[1, 2, 3].map((step) => (
                  <React.Fragment key={step}>
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                        formStep >= step 
                          ? 'bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white shadow-lg' 
                          : 'bg-gray-200 text-gray-500'
                      }`}>
                        {formStep > step ? <Check size={20} /> : step}
                      </div>
                      <span className="mt-2 text-xs font-medium text-gray-500">
                        {step === 1 ? 'Business Info' : step === 2 ? 'Owner Details' : 'Documents'}
                      </span>
                    </div>
                    {step < 3 && (
                      <div className={`flex-1 h-1 mx-2 rounded-full transition-all ${
                        formStep > step ? 'bg-gradient-to-r from-[#228296] to-[#6f3c85]' : 'bg-gray-200'
                      }`} />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {/* Form Submission Success Message */}
          {formSubmitted ? (
            <div className="p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-green-100 rounded-full animate-bounce">
                <Check size={40} className="text-green-600" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-800 dark:text-white">Application Submitted!</h3>
              <p className="mb-2 text-gray-600 dark:text-gray-300">
                Thank you for choosing our banking services.
              </p>
              <p className="mb-6 text-sm text-gray-500">
                Our representative will contact you within 24 hours.
              </p>
              <button
                onClick={closeModal}
                className="px-8 py-3 text-white rounded-xl bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-xl transition-all hover:scale-105 font-semibold"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6">
              {/* Step 1: Business Information */}
              {formStep === 1 && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Business Information</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Business Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        required
                        value={formData.businessName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#228296] focus:border-transparent transition-all"
                        placeholder="Enter registered business name"
                      />
                    </div>
                    
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Business Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="businessType"
                        required
                        value={formData.businessType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#228296]"
                      >
                        <option value="">Select Business Type</option>
                        <option>Proprietorship</option>
                        <option>Partnership</option>
                        <option>Private Limited</option>
                        <option>LLP</option>
                        <option>Public Limited</option>
                        <option>Trust/Society</option>
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Years in Business
                      </label>
                      <select
                        name="yearsInBusiness"
                        value={formData.yearsInBusiness}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#228296]"
                      >
                        <option value="">Select</option>
                        <option>Less than 1 year</option>
                        <option>1-3 years</option>
                        <option>3-5 years</option>
                        <option>5-10 years</option>
                        <option>10+ years</option>
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Number of Employees
                      </label>
                      <select
                        name="employeeCount"
                        value={formData.employeeCount}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#228296]"
                      >
                        <option value="">Select</option>
                        <option>1-10</option>
                        <option>11-50</option>
                        <option>51-200</option>
                        <option>201-500</option>
                        <option>500+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Annual Business Turnover <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="annualTurnover"
                        required
                        value={formData.annualTurnover}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#228296]"
                      >
                        <option value="">Select Turnover Range</option>
                        <option>Less than ₹25 Lakhs</option>
                        <option>₹25 Lakhs - ₹1 Crore</option>
                        <option>₹1 Crore - ₹5 Crores</option>
                        <option>₹5 Crores - ₹10 Crores</option>
                        <option>Above ₹10 Crores</option>
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        GST Number
                      </label>
                      <input
                        type="text"
                        name="gstNumber"
                        value={formData.gstNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#228296]"
                        placeholder="22AAAAA0000A1Z"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Owner Details */}
              {formStep === 2 && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Owner/Director Details</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Owner/Director Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="ownerName"
                        required
                        value={formData.ownerName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#228296]"
                        placeholder="Full name of owner/director"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        PAN Card Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="panCard"
                        required
                        value={formData.panCard}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#228296] uppercase"
                        placeholder="ABCDE1234F"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#228296]"
                        placeholder="business@email.com"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#228296]"
                        placeholder="10-digit mobile number"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Business Address <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="address"
                        required
                        rows="2"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#228296]"
                        placeholder="Complete business address"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#228296]"
                        placeholder="City"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        State <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#228296]"
                        placeholder="State"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        PIN Code <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        required
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#228296]"
                        placeholder="6-digit PIN code"
                        maxLength="6"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Documents & Review */}
              {formStep === 3 && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Documents & Review</h3>
                  
                  {/* Documents Required */}
                  <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-900/20">
                    <div className="flex items-start gap-3">
                      <FileText size={24} className="text-blue-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-blue-800 dark:text-blue-300">Documents Required:</p>
                        <div className="grid gap-2 mt-3 md:grid-cols-2">
                          <div className="flex items-center gap-2 text-xs text-blue-700 dark:text-blue-400">
                            <CheckCircle size={12} /> Business Registration Proof
                          </div>
                          <div className="flex items-center gap-2 text-xs text-blue-700 dark:text-blue-400">
                            <CheckCircle size={12} /> PAN Card of Business/Entity
                          </div>
                          <div className="flex items-center gap-2 text-xs text-blue-700 dark:text-blue-400">
                            <CheckCircle size={12} /> Address Proof
                          </div>
                          <div className="flex items-center gap-2 text-xs text-blue-700 dark:text-blue-400">
                            <CheckCircle size={12} /> GST Certificate (if applicable)
                          </div>
                          <div className="flex items-center gap-2 text-xs text-blue-700 dark:text-blue-400">
                            <CheckCircle size={12} /> Cancelled Cheque
                          </div>
                          <div className="flex items-center gap-2 text-xs text-blue-700 dark:text-blue-400">
                            <CheckCircle size={12} /> Director/Partner ID Proof
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Review Information */}
                  <div className="p-5 rounded-xl bg-gray-50 dark:bg-gray-700/50">
                    <h4 className="mb-3 font-semibold text-gray-700 dark:text-gray-300">Review Your Information</h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">Business Name:</span> {formData.businessName || 'Not provided'}</p>
                      <p><span className="font-medium">Business Type:</span> {formData.businessType || 'Not provided'}</p>
                      <p><span className="font-medium">Owner Name:</span> {formData.ownerName || 'Not provided'}</p>
                      <p><span className="font-medium">Email:</span> {formData.email || 'Not provided'}</p>
                      <p><span className="font-medium">Phone:</span> {formData.phone || 'Not provided'}</p>
                    </div>
                  </div>

                  {/* Terms & Conditions */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      id="terms"
                      className="w-4 h-4 mt-1 text-[#228296] rounded focus:ring-[#228296]"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-400">
                      I confirm that all the information provided is true and accurate. I agree to the 
                      <a href="#" className="text-[#228296] hover:underline"> Terms & Conditions</a> and 
                      <a href="#" className="text-[#228296] hover:underline"> Privacy Policy</a>.
                    </label>
                  </div>
                </div>
              )}

              {/* Form Actions */}
              <div className="flex gap-3 pt-6 mt-6 border-t">
                {formStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2.5 text-gray-700 transition-all bg-gray-100 rounded-xl dark:text-gray-300 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 font-medium"
                  >
                    Back
                  </button>
                )}
                {formStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 py-2.5 text-white rounded-xl bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg hover:scale-105 transition-all font-semibold"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex-1 py-2.5 text-white rounded-xl bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg hover:scale-105 transition-all font-semibold"
                  >
                    Submit Application
                  </button>
                )}
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-2.5 text-gray-700 transition-all bg-gray-100 rounded-xl dark:text-gray-300 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1a6b7c] via-[#228296] to-[#6f3c85]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 bg-white rounded-full -left-40 w-80 h-80 blur-3xl"></div>
          <div className="absolute bottom-0 bg-purple-400 rounded-full -right-40 w-80 h-80 blur-3xl"></div>
        </div>
        <div className="container relative px-4 py-16 mx-auto md:py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-4 py-2 mb-4 text-sm font-semibold rounded-full bg-white/20 backdrop-blur-sm animate-pulse">
              <Sparkles size={16} className="mr-2" />
              Trusted by 50,000+ Businesses
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl animate-fadeIn">
              Current Account
            </h1>
            <p className="mb-6 text-lg text-white/90 md:text-xl animate-slideUp">
              Accelerate your business with premium banking solutions. 
              High limits, smart features, and dedicated support.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button 
                onClick={() => openModal()}
                className="group inline-flex items-center justify-center px-8 py-3 font-semibold text-[#228296] transition-all bg-white rounded-xl hover:shadow-2xl hover:scale-105"
              >
                Open Account Now
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all border-2 border-white rounded-xl hover:bg-white/10 hover:scale-105">
                <PhoneCall size={18} className="mr-2" />
                Talk to Expert
              </button>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#f9fafb" className="dark:fill-gray-800">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      <div className="container px-4 py-16 mx-auto">
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <div className="flex items-center gap-2">
            <Shield size={20} className="text-green-500" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">100% Secure Banking</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={20} className="text-blue-500" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">24/7 Customer Support</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp size={20} className="text-purple-500" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Zero Hidden Charges</span>
          </div>
        </div>

        {/* Plans Section */}
        <div className="mb-20">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <div className="inline-flex items-center px-3 py-1 mb-4 text-sm font-semibold text-[#228296] bg-blue-100 rounded-full">
              <Award size={14} className="mr-1" />
              Flexible Plans
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl dark:text-gray-100">
              Choose Your{' '}
              <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                Business Plan
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Tailored solutions for businesses of all sizes with competitive pricing</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative p-8 transition-all duration-500 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 ${
                  plan.recommended 
                    ? 'bg-white dark:bg-gray-800 ring-2 ring-[#228296] shadow-2xl scale-105' 
                    : 'bg-white dark:bg-gray-800'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute px-4 py-1 text-xs font-bold text-white -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-full shadow-lg">
                    ⭐ MOST POPULAR
                  </div>
                )}
                
                <div className={`inline-flex p-3 mb-4 rounded-xl bg-gradient-to-r ${plan.color}`}>
                  {plan.icon}
                </div>
                
                <h3 className="mb-2 text-2xl font-bold text-gray-800 dark:text-gray-100">{plan.name}</h3>
                <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">Min Balance: {plan.minBalance}</p>
                
                <div className="mb-4">
                  <span className="text-3xl font-bold text-[#228296]">{plan.monthlyFee}</span>
                  <span className="text-gray-500">/month</span>
                  <p className="mt-1 text-xs text-gray-400">+{plan.annualFee} annually</p>
                </div>
                
                <p className="mb-4 text-sm font-medium text-[#228296]">{plan.transactions}</p>
                
                <ul className="mb-6 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={14} className="flex-shrink-0 text-green-500" />
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => openModal(plan.name)}
                  className={`w-full py-2.5 font-semibold text-white transition-all rounded-xl ${
                    plan.recommended
                      ? 'bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg hover:scale-105'
                      : 'bg-gray-800 hover:bg-gray-900 hover:scale-105'
                  }`}
                >
                  Select {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <div className="inline-flex items-center px-3 py-1 mb-4 text-sm font-semibold text-[#228296] bg-blue-100 rounded-full">
              <Star size={14} className="mr-1" />
              Premium Features
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl dark:text-gray-100">
              Business{' '}
              <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                Banking Features
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Everything you need to manage your business finances efficiently</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="p-6 transition-all duration-500 bg-white shadow-lg group dark:bg-gray-800 rounded-2xl hover:shadow-2xl hover:-translate-y-1"
              >
                <div className={`inline-flex p-3 mb-4 rounded-xl bg-gradient-to-r ${feature.color} text-white group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-100">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Benefits */}
        <div className="grid gap-8 mb-20 md:grid-cols-3">
          <div className="p-8 text-center transition-all duration-500 bg-white shadow-lg group dark:bg-gray-800 rounded-2xl hover:shadow-2xl hover:-translate-y-2">
            <div className="inline-flex p-3 mb-4 text-white transition-transform bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl group-hover:scale-110">
              <DollarSign size={32} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-100">High Value Limits</h3>
            <p className="text-gray-600 dark:text-gray-400">Daily transaction limits up to ₹10 Crores</p>
          </div>
          
          <div className="p-8 text-center transition-all duration-500 bg-white shadow-lg group dark:bg-gray-800 rounded-2xl hover:shadow-2xl hover:-translate-y-2">
            <div className="inline-flex p-3 mb-4 text-white transition-transform bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl group-hover:scale-110">
              <FileText size={32} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-100">Tax Compliance</h3>
            <p className="text-gray-600 dark:text-gray-400">Auto-generated TDS certificates & statements</p>
          </div>
          
          <div className="p-8 text-center transition-all duration-500 bg-white shadow-lg group dark:bg-gray-800 rounded-2xl hover:shadow-2xl hover:-translate-y-2">
            <div className="inline-flex p-3 mb-4 text-white transition-transform bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl group-hover:scale-110">
              <Building2 size={32} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-100">Cash Management</h3>
            <p className="text-gray-600 dark:text-gray-400">Free cash deposits up to ₹3 Lakhs/month</p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <div className="inline-flex items-center px-3 py-1 mb-4 text-sm font-semibold text-[#228296] bg-blue-100 rounded-full">
              <MessageCircle size={14} className="mr-1" />
              Client Testimonials
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-gray-100">
              What Our{' '}
              <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                Business Clients Say
              </span>
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-white shadow-lg dark:bg-gray-800 rounded-2xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="mb-4 italic text-gray-600 dark:text-gray-400">"{testimonial.comment}"</p>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-100">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="p-8 mb-20 bg-white shadow-xl dark:bg-gray-800 rounded-2xl">
          <h3 className="mb-6 text-2xl font-bold text-center text-gray-800 dark:text-gray-100">Frequently Asked Questions</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50">
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-100">What is the minimum balance requirement?</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">For Classic Business - ₹10,000, Premium Business - ₹25,000, Corporate Elite - ₹50,000</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50">
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-100">Can I convert my savings account to current account?</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Yes, you can upgrade your existing savings account to a current account.</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50">
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-100">What is the processing time for account opening?</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Account opening typically takes 2-3 business days after document verification.</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50">
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-100">Is there any hidden charge for digital transactions?</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">No, all digital transactions (NEFT/RTGS/IMPS) are absolutely free.</p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#228296] to-[#6f3c85] p-10 text-center text-white">
          <div className="absolute top-0 right-0 opacity-10">
            <Building2 size={200} />
          </div>
          <div className="relative z-10">
            <h2 className="mb-3 text-3xl font-bold">Ready to Grow Your Business?</h2>
            <p className="mb-6 text-lg text-white/90">Open your Current Account today and experience premium banking</p>
            <button 
              onClick={() => openModal()}
              className="inline-flex items-center gap-2 px-8 py-3 font-semibold text-[#228296] bg-white rounded-xl hover:shadow-xl transition-all hover:scale-105"
            >
              Open Account Now
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal - Render outside main content with high z-index */}
      {isModalOpen && <ApplicationModal />}
    </div>
  );
};

export default CurrentAccount;