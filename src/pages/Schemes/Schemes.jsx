/* eslint-disable react-hooks/immutability */
/* eslint-disable react-hooks/static-components */
import React, { useState } from 'react';
import { 
  Gift, 
  Award, 
  TrendingUp, 
  Shield, 
  Users,
  ArrowRight,
  CheckCircle,
  Calendar,
  Percent,
  Clock,
  Star,
  X,
  Loader,
  Send,
  User,
  Mail,
  Phone,
  FileText,
  AlertCircle
} from 'lucide-react';
import { FaFire } from 'react-icons/fa';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Schemes = () => {
  const [activeScheme, setActiveScheme] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    panNumber: '',
    address: '',
    investmentAmount: '',
    additionalInfo: ''
  });

  const schemes = [
    {
      id: 'fd-special',
      title: 'Super Saver FD',
      category: 'deposits',
      interest: '8.0%',
      tenure: '500 Days',
      minAmount: '₹10,000',
      maxAmount: 'No Limit',
      features: ['Higher interest rate', 'Free insurance cover', 'Loan against FD', 'Auto-renewal option'],
      badge: 'Limited Period',
      badgeColor: 'bg-red-500',
      description: 'Get higher returns on your fixed deposits with additional benefits including free insurance coverage and loan facility.'
    },
    {
      id: 'senior-fd',
      title: 'Senior Citizen FD',
      category: 'deposits',
      interest: '8.5%',
      tenure: '1-5 Years',
      minAmount: '₹5,000',
      maxAmount: 'No Limit',
      features: ['Extra 0.50% interest', 'Monthly interest payout', 'No TDS on interest up to ₹50,000', 'Free health checkup'],
      badge: 'Best for Seniors',
      badgeColor: 'bg-green-500',
      description: 'Exclusive fixed deposit scheme for senior citizens with higher interest rates and special benefits.'
    },
    {
      id: 'rd-plan',
      title: 'Mahalakshmi RD',
      category: 'deposits',
      interest: '7.2%',
      tenure: '12-60 Months',
      minAmount: '₹500/month',
      maxAmount: 'No Limit',
      features: ['Flexible monthly deposits', 'Step-up facility', 'Loan against RD', 'Early withdrawal option'],
      badge: 'Popular Choice',
      badgeColor: 'bg-blue-500',
      description: 'Build your savings with monthly recurring deposits. Flexible terms and step-up facility available.'
    },
    {
      id: 'nre-fd',
      title: 'NRI Swarnim FD',
      category: 'nri',
      interest: '7.5%',
      tenure: '1-3 Years',
      minAmount: '₹25,000',
      maxAmount: 'No Limit',
      features: ['Fully repatriable', 'Tax-free interest', 'Flexible payout options', 'No TDS for NRE FD'],
      badge: 'NRI Special',
      badgeColor: 'bg-purple-500',
      description: 'Special fixed deposit scheme for NRIs with fully repatriable funds and tax-free interest.'
    },
    {
      id: 'gold-loan',
      title: 'Gold Loan Scheme',
      category: 'loans',
      interest: '9.5%',
      tenure: '12 Months',
      minAmount: '₹25,000',
      maxAmount: '₹50 Lakhs',
      features: ['High LTV up to 80%', 'Instant approval', 'No processing fee', 'Flexible repayment'],
      badge: 'Instant Loan',
      badgeColor: 'bg-yellow-500',
      description: 'Get instant loan against your gold jewellery with high LTV and flexible repayment options.'
    },
    {
      id: 'business-saver',
      title: 'Business Saver Current',
      category: 'accounts',
      interest: '6.0%',
      tenure: 'Ongoing',
      minAmount: '₹25,000',
      maxAmount: 'No Limit',
      features: ['Free 100 transactions/month', 'Free POS machine', 'Cashback on business payments', 'Free GST invoicing'],
      badge: 'Business Offer',
      badgeColor: 'bg-indigo-500',
      description: 'Premium current account for businesses with free transactions, POS machine, and GST invoicing.'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Schemes' },
    { id: 'deposits', name: 'Deposit Schemes' },
    { id: 'accounts', name: 'Account Offers' },
    { id: 'loans', name: 'Loan Schemes' },
    { id: 'nri', name: 'NRI Schemes' }
  ];

  const filteredSchemes = activeScheme === 'all' 
    ? schemes 
    : schemes.filter(scheme => scheme.category === activeScheme);

  const featuredOffers = [
    { title: 'Refer & Earn', desc: 'Get ₹500 for every successful referral', icon: <Users size={24} /> },
    { title: 'Welcome Bonus', desc: 'Get ₹250 cashback on first transaction', icon: <Gift size={24} /> },
    { title: 'Zero Charges', desc: 'No maintenance fee for first year', icon: <Award size={24} /> }
  ];

  const openModal = (scheme) => {
    setSelectedScheme(scheme);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedScheme(null);
    setIsSubmitting(false);
    // setSubmitSuccess(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      panNumber: '',
      address: '',
      investmentAmount: '',
      additionalInfo: ''
    });
    document.body.style.overflow = 'unset';
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Scheme Application Submitted:', {
        scheme: selectedScheme,
        applicant: formData
      });
      setIsSubmitting(false);
      // setSubmitSuccess(true);
      
      // Show confirmation modal and reset afterwards
      const referenceId = `${selectedScheme.id.toUpperCase()}-${Math.floor(Math.random() * 10000)}`;
      MySwal.fire({
        icon: 'success',
        title: 'Application Submitted!',
        html: `Application submitted successfully for <strong>${selectedScheme.title}</strong>.<br/><br/>Reference ID: <strong>${referenceId}</strong><br/><br/>Our representative will contact you within 24 hours.`,
        confirmButtonText: false,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
        timerProgressBar: true,
        timer: 5000
      }).then(() => {
        closeModal();
      });
    }, 1500);
  };

  // Modal Component
  const ApplicationModal = () => {
    if (!isModalOpen || !selectedScheme) return null;
    
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 transition-opacity bg-black/60 backdrop-blur-sm"
          onClick={closeModal}
        />
        
        {/* Modal Container */}
        <div className="flex items-center justify-center min-h-full p-4">
          <div className="relative w-full max-w-2xl transform rounded-xl bg-slate-50 dark:bg-gray-900 shadow-2xl transition-all max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 flex justify-between items-center p-5 bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white rounded-t-xl z-10">
              <div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 text-xs font-bold rounded ${selectedScheme.badgeColor}`}>
                    {selectedScheme.badge}
                  </span>
                </div>
                <h2 className="mt-1 text-xl font-bold">Apply for {selectedScheme.title}</h2>
                <p className="mt-1 text-sm text-white/80">
                  Interest: {selectedScheme.interest} | Tenure: {selectedScheme.tenure}
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
              {/* Scheme Summary */}
              <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
                <p className="text-sm text-blue-800">
                  <strong>Scheme Details:</strong> {selectedScheme.description}
                </p>
                <div className="flex gap-4 mt-2 text-xs text-blue-700">
                  <span>Min: {selectedScheme.minAmount}</span>
                  <span>Interest: {selectedScheme.interest}</span>
                  <span>Tenure: {selectedScheme.tenure}</span>
                </div>
              </div>
              
              {/* Success Message */}
              {/* {submitSuccess && (
                <div className="flex items-center gap-3 p-4 border border-green-200 rounded-lg bg-green-50">
                  <CheckCircle size={20} className="text-green-500" />
                  <div>
                    <p className="font-semibold text-green-700">Application Submitted!</p>
                    <p className="text-sm text-green-600">Our representative will contact you shortly.</p>
                  </div>
                </div>
              )} */}
              
              <div className="grid gap-5 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-200">Full Name *</label>
                  <div className="relative">
                    <User size={18} className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                    <input 
                      type="text" 
                      name="fullName" 
                      required 
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#228296] focus:border-[#228296] outline-none transition"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-200">Email Address *</label>
                  <div className="relative">
                    <Mail size={18} className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#228296] focus:border-[#228296] outline-none transition"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-200">Phone Number *</label>
                  <div className="relative">
                    <Phone size={18} className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#228296] focus:border-[#228296] outline-none transition"
                      placeholder="10-digit mobile number"
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-200">PAN Number *</label>
                  <div className="relative">
                    <FileText size={18} className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                    <input 
                      type="text" 
                      name="panNumber" 
                      required 
                      value={formData.panNumber}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#228296] focus:border-[#228296] outline-none transition uppercase"
                      placeholder="ABCDE1234F"
                      maxLength="10"
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-200">
                    Investment Amount * {selectedScheme.category === 'loans' ? '(Loan Required)' : '(Deposit Amount)'}
                  </label>
                  <div className="relative">
                    <TrendingUp size={18} className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                    <input 
                      type="text" 
                      name="investmentAmount" 
                      required 
                      value={formData.investmentAmount}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#228296] focus:border-[#228296] outline-none transition"
                      placeholder={selectedScheme.minAmount}
                    />
                  </div>
                  <p className="mt-1 text-xs text-gray-400">Minimum: {selectedScheme.minAmount}</p>
                </div>
              </div>
              
              <div>
                <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-200">Address *</label>
                <textarea 
                  name="address" 
                  rows="2" 
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#228296] focus:border-[#228296] outline-none resize-none"
                  placeholder="Enter your complete address"
                />
              </div>
              
              <div>
                <label className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-200">Additional Information (Optional)</label>
                <textarea 
                  name="additionalInfo" 
                  rows="2" 
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#228296] focus:border-[#228296] outline-none resize-none"
                  placeholder="Any specific requirements or questions..."
                />
              </div>
              
              <div className="p-4 border border-yellow-200 rounded-lg bg-yellow-50">
                <p className="flex items-start gap-2 text-xs text-yellow-800">
                  <AlertCircle size={14} className="mt-0.5 flex-shrink-0" />
                  By submitting this application, you agree to our terms and conditions. Our representative will contact you within 24 hours for further process.
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
                  className="px-6 py-2.5 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
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

  {isSubscribed && (
    MySwal.fire({
      icon: 'success',
      title: 'Subscribed!',
      text: 'You have successfully subscribed to our newsletter. You will receive updates on new schemes and offers. Thank you!',
      timerProgressBar: true,
      timer: 3000,
      showConfirmButton: false,
    })
  ).then(() => {
    setIsSubscribed(false);
  })}

  // const handleInputChangeSubs = (e) => {
  //   setIsSubscribed({
  //     ...isSubscribed,
  //     [e.target.name]: e.target.value
  //   });
  // };


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#228296] via-[#2c9cb3] to-[#6f3c85]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative px-4 py-10 mx-auto md:pt-8 md:pb-24">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-3 py-2 mb-2 text-sm font-semibold rounded-full bg-gradient-to-r from-[#228296] to-[#6f3c85]">
              <FaFire size={16} className="mr-2" />
              Limited Time Offers
            </div>
            <h1 className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">Special Schemes</h1>
            <p className="text-lg md:text-xl text-white/90">
              Exclusive offers, higher returns, and special benefits for our valued customers
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#f9fafb" className="dark:fill-gray-800">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      <div className="container px-4 py-12 mx-auto">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveScheme(category.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeScheme === category.id
                  ? 'bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Schemes Grid */}
        <div className="grid gap-6 mb-16 md:grid-cols-2 lg:grid-cols-3">
          {filteredSchemes.map((scheme, index) => (
            <div key={index} className="relative overflow-hidden transition-all duration-300 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50 hover:shadow-xl hover:-translate-y-2">
              <div className={`absolute top-0 right-0 px-3 py-1 text-xs font-bold text-white ${scheme.badgeColor}`}>
                {scheme.badge}
              </div>
              <div className="p-6">
                <div className="mb-4 text-[#228296]">
                  {scheme.category === 'deposits' && <TrendingUp size={32} />}
                  {scheme.category === 'accounts' && <Users size={32} />}
                  {scheme.category === 'loans' && <Shield size={32} />}
                  {scheme.category === 'nri' && <TrendingUp size={32} />}
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-200">{scheme.title}</h3>
                <div className="flex gap-2 mb-4">
                  <div className="px-2 py-1 text-sm font-bold text-green-700 bg-green-100 rounded">
                    {scheme.interest}
                  </div>
                  <div className="px-2 py-1 text-sm text-blue-700 bg-blue-100 rounded">
                    {scheme.tenure}
                  </div>
                </div>
                <p className="mb-3 text-sm text-gray-500 dark:text-gray-300">Min. {scheme.minAmount}</p>
                <ul className="mb-4 space-y-1">
                  {scheme.features.slice(0, 2).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={12} className="mt-0.5 text-green-500" />
                      <span className='text-gray-600 dark:text-gray-400'> {feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => openModal(scheme)}
                  className="w-full py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg transition-all"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Offers */}
        <div className="mb-16">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold text-gray-800 dark:text-gray-300">Featured {' '}
              <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                Offers
              </span></h2>
            <p className="text-gray-600 dark:text-gray-400">Extra benefits for our customers</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredOffers.map((offer, index) => (
              <div key={index} className="p-6 text-center transition-all rounded-lg bg-gradient-to-br from-yellow-50 to-orange-50 hover:shadow-lg">
                <div className="flex justify-center mb-3 text-[#228296]">{offer.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-gray-800">{offer.title}</h3>
                <p className="text-gray-600">{offer.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="p-8 bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-lg text-white text-center">
          <h2 className="mb-2 text-2xl font-bold">Get Special Offers First!</h2>
          <p className="mb-4">Subscribe to get notified about new schemes and offers</p>
          <div className="flex max-w-md gap-2 mx-auto">
            <input type="email" 
              // name="subscribeEmail" 
              // required 
              // value={isSubscribed.subscribeEmail}
              // onChange={handleInputChangeSubs}
            placeholder="Enter your email" className="flex-1 px-4 py-2 text-gray-800 rounded-lg" />
            <button 
              onClick={() => setIsSubscribed(true)}
              className="px-6 py-2 bg-white text-[#228296] rounded-lg font-semibold hover:shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      <ApplicationModal />
    </div>
  );
};

export default Schemes;