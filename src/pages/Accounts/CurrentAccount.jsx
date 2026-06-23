/* eslint-disable react-hooks/static-components */
import React, { useState } from "react";
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
  ChevronRight,
} from "lucide-react";
import Swal from "sweetalert2";

const CurrentAccount = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  // const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    ownerName: "",
    email: "",
    phone: "",
    gstNumber: "",
    annualTurnover: "",
    panCard: "",
    address: "",
    city: "",
    pincode: "",
  });

  const features = [
    {
      icon: <CreditCard size={24} />,
      title: "Overdraft Facility",
      desc: "Up to ₹50 Lakhs overdraft based on business profile",
    },
    {
      icon: <Globe size={24} />,
      title: "International Transactions",
      desc: "Seamless foreign currency transactions",
    },
    {
      icon: <Users size={24} />,
      title: "Multi-user Access",
      desc: "Up to 10 authorized users for business operations",
    },
    {
      icon: <BarChart3 size={24} />,
      title: "High Transaction Limits",
      desc: "Unlimited daily transaction limits",
    },
    {
      icon: <Zap size={24} />,
      title: "Real-time Payments",
      desc: "NEFT/RTGS/IMPS with zero charges",
    },
    {
      icon: <MessageCircle size={24} />,
      title: "Dedicated RM",
      desc: "Personal relationship manager assigned",
    },
  ];

  const plans = [
    {
      name: "Classic Business",
      minBalance: "₹10,000",
      monthlyFee: "₹299",
      transactions: "100 Free/month",
      features: [
        "2 Free DD/PO",
        "Free Cheque Book",
        "Mobile Banking",
        "Email Support",
      ],
    },
    {
      name: "Premium Business",
      minBalance: "₹25,000",
      monthlyFee: "₹599",
      transactions: "250 Free/month",
      features: [
        "5 Free DD/PO",
        "Free Cheque Book",
        "Priority Support",
        "Tax Payment Gateway",
        "Free POS Machine",
      ],
    },
    {
      name: "Corporate Elite",
      minBalance: "₹50,000",
      monthlyFee: "₹999",
      transactions: "Unlimited",
      features: [
        "10 Free DD/PO",
        "Free Cheque Book",
        "24/7 Dedicated RM",
        "API Integration",
        "Free POS Machine",
        "Cash Management",
      ],
    },
  ];

  const testimonials = [
    { name: 'Rajesh Mehta', business: 'Mehta Traders', rating: 5, comment: 'Excellent banking experience with high transaction limits!' },
    { name: 'Priya Sharma', business: 'Sharma Enterprises', rating: 5, comment: 'Dedicated RM support has been a game changer for our business.' },
    { name: 'Amit Patel', business: 'Patel Group', rating: 4, comment: 'Great features and competitive pricing for current accounts.' }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const openModal = (planName = null) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
    setIsSubmitting(false);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
    setIsSubmitting(false);
    document.body.style.overflow = "auto";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData, "Selected Plan:", selectedPlan);
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      Swal.fire({
        title:
          '<span style="font-size: 1.5rem;">🎉 Application Submitted!</span>',
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
        icon: "success",
        confirmButtonText: "Great!",
        confirmButtonColor: "#228296",
        background: "#fff",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      }).then(() => {
        closeModal();
        // Reset form
        setFormData({
          businessName: "",
          businessType: "",
          ownerName: "",
          email: "",
          phone: "",
          gstNumber: "",
          annualTurnover: "",
          panCard: "",
          address: "",
          city: "",
          pincode: "",
        });
      });
    }, 1500);
  };

  // Modal Component
  const ApplicationModal = () => (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 mx-auto text-center sm:block sm:p-0">
        {/* Background overlay with animation */}
        <div
          className="fixed inset-0 transition-opacity duration-300 bg-gray-700 bg-opacity-75 backdrop-blur-sm"
          onClick={closeModal}
        ></div>

        {/* Modal panel with slide-up animation */}
        <div className="inline-block overflow-hidden text-left align-bottom transition-all duration-300 transform translate-y-0 shadow-xl opacity-100 rounded-2xl sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full animate-slideUp">
          {/* Modal Header */}
          <div className="relative px-6 py-5 bg-gradient-to-r from-[#228296] to-[#6f3c85]">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Open Savings Account
                </h3>
                <p className="mt-1 text-sm text-white/80">
                  Complete the form below to get started
                </p>
              </div>
              <button
                onClick={closeModal}
                className="p-1 text-white transition-all duration-200 rounded-full hover:rotate-90 hover:bg-white/10"
              >
                <X size={24} />
              </button>
            </div>
            {/* Progress indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
              <div
                className="h-full transition-all duration-500 rounded-full bg-slate-50"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>

          {/* Modal Body with scroll */}
          <div className="px-6 py-6 bg-slate-50 dark:bg-gray-900 max-h-[70vh] overflow-y-auto custom-scrollbar">
            <form onSubmit={handleSubmit} className="space-y-5">
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
                    className="w-full px-4 py-2 border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#228296] focus:border-transparent"
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
                    className="w-full px-4 py-2 border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#228296]"
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
                    Owner/Director Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="ownerName"
                    required
                    value={formData.ownerName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#228296]"
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
                    className="w-full px-4 py-2 border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#228296]"
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
                    className="w-full px-4 py-2 border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#228296]"
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
                    className="w-full px-4 py-2 border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#228296]"
                    placeholder="10-digit mobile number"
                  />
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
                    className="w-full px-4 py-2 border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#228296]"
                    placeholder="22AAAAA0000A1Z"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Annual Business Turnover{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="annualTurnover"
                    required
                    value={formData.annualTurnover}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#228296]"
                  >
                    <option value="">Select Turnover Range</option>
                    <option>Less than ₹25 Lakhs</option>
                    <option>₹25 Lakhs - ₹1 Crore</option>
                    <option>₹1 Crore - ₹5 Crores</option>
                    <option>₹5 Crores - ₹10 Crores</option>
                    <option>Above ₹10 Crores</option>
                  </select>
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
                    className="w-full px-4 py-2 border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#228296]"
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
                    className="w-full px-4 py-2 border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#228296]"
                    placeholder="City"
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
                    className="w-full px-4 py-2 border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#228296]"
                    placeholder="6-digit PIN code"
                  />
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/30">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={acceptTerms}
                    onChange={(e) => {
                      setAcceptTerms(e.target.checked);
                      // if (errors.terms) setErrors({ ...errors, terms: "" });
                    }}
                    className="mt-1 w-4 h-4 text-[#228296] rounded focus:ring-[#228296]"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-gray-700 dark:text-gray-300"
                  >
                    I confirm that the information provided is accurate and I
                    agree to the
                    <a href="#" className="text-[#228296] hover:underline ml-1">
                      Terms & Conditions {""}
                    </a>
                    and{" "}
                    <a href="#" className="text-[#228296] hover:underline ml-1">
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </div>
              {/* Documents Required Note */}
              <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                <div className="flex items-start gap-3">
                  <FileText size={20} className="text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-blue-800 dark:text-blue-300">
                      Documents Required:
                    </p>
                    <p className="mt-1 text-xs text-blue-600 dark:text-blue-400">
                      • Business Registration Proof • PAN Card of
                      Business/Entity • Address Proof • GST Certificate (if
                      applicable) • Cancelled Cheque
                    </p>
                  </div>
                </div>
              </div>

              {/* Security Notice */}
              <div className="flex items-start gap-2 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
                <AlertCircle size={18} className="text-yellow-600 mt-0.5" />
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Your information is secure and protected. We follow strict
                  data protection guidelines as per RBI regulations. OTP
                  verification will be done for authentication.
                </p>
              </div>

              {/* Modal Footer Buttons */}
              <div className="flex gap-8 pt-4 mx-auto w-[70%]">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 text-white rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg hover:scale-105 transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="w-5 h-5 text-white animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-3 font-semibold text-gray-700 transition-all bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1a6b7c] via-[#228296] to-[#6f3c85]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative px-4 py-10 mx-auto md:pt-8 md:pb-24">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-3 py-2 mb-2 text-sm font-semibold rounded-full bg-gradient-to-r from-[#1a5b6b] to-[#6f3c85] backdrop-blur-sm">
              <Building2 size={16} className="mr-2" />
              Power Your Business Growth
            </div>
            <h1 className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">
              Current Account
            </h1>
            <p className="mb-3 text-lg text-white/90 md:text-xl">
              Accelerate your business with premium banking solutions. High
              limits, smart features, and dedicated support.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button
                onClick={() => openModal()}
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-[#228296] transition-all bg-white rounded-lg hover:shadow-xl hover:scale-105"
              >
                Open Account Now
                <ArrowRight size={18} className="ml-2" />
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white transition-all border-2 border-white rounded-lg hover:bg-white/10 hover:scale-105">
                Talk to Expert
                <MessageCircle size={18} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
        {/* Wave Divider */}
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

      <div className="container px-4 py-16 mx-auto">
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <div className="flex items-center gap-2">
            <Shield size={20} className="text-green-500" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              100% Secure Banking
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={20} className="text-blue-500" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              24/7 Customer Support
            </span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp size={20} className="text-purple-500" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Zero Hidden Charges
            </span>
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
              Choose Your{" "}
              <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                Business Plan
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Tailored solutions for businesses of all sizes with competitive
              pricing
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 transition-all duration-500 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 ${
                  plan.recommended
                    ? "bg-slate-50 dark:bg-gray-900 ring-2 ring-[#228296] shadow-2xl scale-105"
                    : "bg-slate-50 dark:bg-gray-900"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute px-4 py-1 text-xs font-bold text-white -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-full shadow-lg">
                    ⭐ MOST POPULAR
                  </div>
                )}

                <div
                  className={`inline-flex p-3 mb-4 rounded-xl bg-gradient-to-r ${plan.color}`}
                >
                  {plan.icon}
                </div>

                <h3 className="mb-2 text-2xl font-bold text-gray-800 dark:text-gray-100">
                  {plan.name}
                </h3>
                <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
                  Min Balance: {plan.minBalance}
                </p>

                <div className="mb-4">
                  <span className="text-3xl font-bold text-[#228296]">
                    {plan.monthlyFee}
                  </span>
                  <span className="text-gray-500">/month</span>
                  <p className="mt-1 text-xs text-gray-400">
                    +{plan.annualFee} annually
                  </p>
                </div>

                <p className="mb-4 text-sm font-medium text-[#228296]">
                  {plan.transactions}
                </p>

                <ul className="mb-6 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle
                        size={14}
                        className="flex-shrink-0 text-green-500"
                      />
                      <span className="text-gray-600 dark:text-gray-400">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openModal(plan.name)}
                  className={`w-full py-2 font-semibold text-white transition-all rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg hover:scale-105" ${
                    plan.recommended
                      ? "bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg hover:scale-105"
                      : "bg-gray-900 hover:bg-gray-900 hover:scale-105"
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
              Business{" "}
              <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                Banking Features
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Everything you need to manage your business finances efficiently
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 transition-all duration-500 shadow-lg bg-slate-50 group dark:bg-gray-900 rounded-2xl hover:shadow-2xl hover:-translate-y-1"
              >
                <div
                  className={`inline-flex p-3 mb-4 rounded-xl bg-gradient-to-r ${feature.color} text-white group-hover:scale-110 transition-transform`}
                >
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Benefits */}
        <div className="grid gap-8 mb-20 md:grid-cols-3">
          <div className="p-8 text-center transition-all duration-500 shadow-lg bg-slate-50 group dark:bg-gray-900 rounded-2xl hover:shadow-2xl hover:-translate-y-2">
            <div className="inline-flex p-3 mb-4 text-white transition-transform bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl group-hover:scale-110">
              <DollarSign size={32} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-100">
              High Value Limits
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Daily transaction limits up to ₹10 Crores
            </p>
          </div>

          <div className="p-8 text-center transition-all duration-500 shadow-lg bg-slate-50 group dark:bg-gray-900 rounded-2xl hover:shadow-2xl hover:-translate-y-2">
            <div className="inline-flex p-3 mb-4 text-white transition-transform bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl group-hover:scale-110">
              <FileText size={32} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-100">
              Tax Compliance
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Auto-generated TDS certificates & statements
            </p>
          </div>

          <div className="p-8 text-center transition-all duration-500 shadow-lg bg-slate-50 group dark:bg-gray-900 rounded-2xl hover:shadow-2xl hover:-translate-y-2">
            <div className="inline-flex p-3 mb-4 text-white transition-transform bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl group-hover:scale-110">
              <Building2 size={32} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-100">
              Cash Management
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Free cash deposits up to ₹3 Lakhs/month
            </p>
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
              What Our{" "}
              <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                Business Clients Say
              </span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 shadow-lg bg-slate-50 dark:bg-gray-900 rounded-2xl"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-4 italic text-gray-600 dark:text-gray-400">
                  "{testimonial.comment}"
                </p>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-100">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.business}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="p-8 mb-20 shadow-xl bg-slate-50 dark:bg-gray-900 rounded-2xl">
          <h3 className="mb-6 text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
            Frequently Asked Questions
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50">
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-100">
                What is the minimum balance requirement?
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                For Classic Business - ₹10,000, Premium Business - ₹25,000,
                Corporate Elite - ₹50,000
              </p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50">
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-100">
                Can I convert my savings account to current account?
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Yes, you can upgrade your existing savings account to a current
                account.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50">
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-100">
                What is the processing time for account opening?
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Account opening typically takes 2-3 business days after document
                verification.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50">
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-100">
                Is there any hidden charge for digital transactions?
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                No, all digital transactions (NEFT/RTGS/IMPS) are absolutely
                free.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#228296] to-[#6f3c85] p-10 text-center text-white">
          <div className="absolute top-0 right-0 opacity-10">
            <Building2 size={200} />
          </div>
          <div className="relative z-10">
            <h2 className="mb-3 text-3xl font-bold">
              Ready to Grow Your Business?
            </h2>
            <p className="mb-6 text-lg text-white/90">
              Open your Current Account today and experience premium banking
            </p>
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

      {/* Modal */}
      {isModalOpen && <ApplicationModal />}
    </div>
  );
};

export default CurrentAccount;
