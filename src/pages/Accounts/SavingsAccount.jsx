/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  PiggyBank,
  TrendingUp,
  Shield,
  Clock,
  ArrowRight,
  CheckCircle,
  Gift,
  Users,
  Calculator,
  ChevronRight,
  Wallet,
  Lock,
  Zap,
  X,
  User,
  Mail,
  Phone,
  IdCard,
  Home,
  Calendar,
  Eye,
  EyeOff,
  AlertCircle,
} from "lucide-react";
import { FaMobile } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const SavingsAccount = () => {
  const [activeTab, setActiveTab] = useState("features");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    panCard: "",
    aadharCard: "",
    dob: "",
    address: "",
    occupation: "",
    annualIncome: "",
    nominee: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const features = [
    {
      icon: <TrendingUp size={24} />,
      title: "4% - 6% Interest Rate",
      desc: "Competitive interest rates on daily balance",
    },
    {
      icon: <Wallet size={24} />,
      title: "Zero Balance Account",
      desc: "No minimum balance requirement",
    },
    {
      icon: <FaMobile size={24} />,
      title: "Free Mobile Banking",
      desc: "Unlimited transactions on our app",
    },
    {
      icon: <Shield size={24} />,
      title: "Free Insurance Cover",
      desc: "Up to ₹2 Lakhs accidental coverage",
    },
    {
      icon: <Gift size={24} />,
      title: "Welcome Benefits",
      desc: "Exclusive offers & cashback on first purchase",
    },
    {
      icon: <Clock size={24} />,
      title: "24/7 Customer Support",
      desc: "Round-the-clock banking assistance",
    },
  ];

  const benefits = [
    "Free Debit Card with annual fee waiver",
    "Unlimited ATM withdrawals across India",
    "UPI & Mobile banking with daily limit of ₹1 Lakh",
    "Free cheque book (25 leaves per year)",
    "Bill payments & recharges with cashback",
    "Fixed deposit creation starting at ₹1000",
  ];

  const interestRates = [
    { balance: "Up to ₹50,000", rate: "4.00%" },
    { balance: "₹50,001 - ₹1,00,000", rate: "4.50%" },
    { balance: "₹1,00,001 - ₹5,00,000", rate: "5.00%" },
    { balance: "Above ₹5,00,000", rate: "6.00%" },
  ];

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone number must be 10 digits";
    if (!formData.panCard.trim()) newErrors.panCard = "PAN card is required";
    else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panCard))
      newErrors.panCard = "Invalid PAN card format";
    if (!formData.aadharCard.trim())
      newErrors.aadharCard = "Aadhar card is required";
    else if (!/^\d{12}$/.test(formData.aadharCard))
      newErrors.aadharCard = "Aadhar must be 12 digits";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!acceptTerms)
      newErrors.terms = "You must accept the terms and conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error for this field when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Reset form when modal closes
    setFormData({
      name: "",
      email: "",
      phone: "",
      panCard: "",
      aadharCard: "",
      dob: "",
      address: "",
      occupation: "",
      annualIncome: "",
      nominee: "",
      password: "",
    });
    setAcceptTerms(false);
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      MySwal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please fill all required fields correctly",
        confirmButtonColor: "#228296",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);

      MySwal.fire({
        icon: "success",
        title:
          "<span style='color: #228296; font-weight: 700;'>Application Submitted Successfully!</span>",
        html:
          "<p style='color: #6b7280; font-size: 16px;'>Our representative will contact you within 24 hours.</p><p style='color: #228296; font-size: 14px; margin-top: 10px;'>Application ID: NCOSL" +
          Math.floor(Math.random() * 1000000) +
          "</p>",
        confirmButtonColor: "#228296",
        confirmButtonText: "Close",
        background: "#ffffff",
        backdrop: "rgba(0, 0, 0, 0.4)",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
        didOpen: (modal) => {
          modal.style.borderRadius = "20px";
          modal.style.boxShadow = "0 20px 60px rgba(0, 0, 0, 0.2)";
        },
        allowOutsideClick: false,
        allowEscapeKey: false,
        timer: 5000,
        timerProgressBar: true,
        showConfirmButton: true,
        buttonsStyling: false,
        customClass: {
          confirmButton:
            "px-8 py-3 bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white rounded-lg font-semibold hover:shadow-lg transition-all",
        },
      }).then(() => {
        closeModal();
        setIsSubmitting(false);
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#228296] via-[#2c9cb3] to-[#6f3c85]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative px-4 py-10 mx-auto md:pt-8 md:pb-24">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-3 py-2 mb-2 text-sm font-semibold rounded-full bg-gradient-to-r from-[#1a5b6b] to-[#6f3c85] backdrop-blur-sm">
              <PiggyBank size={16} className="mr-2" />
              Smart Savings for Every Indian
            </div>
            <h1 className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">
              Savings Account
            </h1>
            <p className="mb-3 text-lg text-white/90 md:text-xl">
              Grow your savings with India's most rewarding savings account.
              High interest, zero hassle, and complete digital experience.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button
                onClick={() =>
                  document
                    .getElementById("application-form")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-[#228296] transition-all bg-slate-50 rounded-lg hover:shadow-xl hover:scale-105"
              >
                Open Account Now
                <ArrowRight size={18} className="ml-2" />
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white transition-all border-2 border-white rounded-lg hover:bg-white/10 hover:scale-105">
                Calculate Interest
                <Calculator size={18} className="ml-2" />
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
        {/* Key Features Grid */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-gray-300">
              Why Choose Our{" "}
              <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                Savings Account?
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Experience banking reimagined with features designed for your
              financial success
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 transition-all duration-300 rounded-lg shadow-lg bg-slate-50 dark:bg-gray-900 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="mb-4 text-[#228296]">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits & Interest Rates */}
        <div className="grid gap-8 mb-16 md:grid-cols-2">
          <div className="p-8 rounded-lg shadow-lg bg-slate-50 dark:bg-gray-900">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle size={28} className="text-[#228296]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-300">
                Key Benefits
              </h3>
            </div>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle size={18} className="mt-1 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-400">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-lg shadow-lg bg-slate-50 dark:bg-gray-900">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <TrendingUp size={28} className="text-[#228296]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-300">
                Interest Rates
              </h3>
            </div>
            <div className="space-y-3">
              {interestRates.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between p-3 border-b border-gray-200 dark:border-gray-700"
                >
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    {item.balance}
                  </span>
                  <span className="font-bold text-[#228296]">{item.rate}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              *Interest rates are subject to change as per RBI guidelines
            </p>
          </div>
        </div>

        {/* Eligibility Section */}
        <div className="p-8 mb-16 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-700">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-300">
                Eligibility Criteria
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-400">
                <li>✓ Indian resident individual</li>
                <li>
                  ✓ Minimum age: 18 years (10+ years for minor account with
                  guardian)
                </li>
                <li>✓ Valid PAN Card</li>
                <li>✓ Valid Aadhar Card</li>
                <li>✓ Address proof required</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-300">
                Documents Required
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-400">
                <li>✓ PAN Card (Mandatory)</li>
                <li>✓ Aadhar Card</li>
                <li>✓ Passport size photograph</li>
                <li>✓ Address proof (Voter ID/Passport/Utility Bill)</li>
                <li>✓ Signature verification</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          id="application-form"
          className="p-8 text-center rounded-lg shadow-xl bg-slate-50 dark:bg-gray-900"
        >
          <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-300">
            Ready to Start Your Banking Journey?
          </h2>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            Open your savings account in just 5 minutes with zero paperwork
          </p>
          <button
            onClick={openModal}
            className="inline-flex items-center justify-center px-8 py-3 text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg hover:scale-105 font-semibold"
          >
            Open Account Now
            <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </div>

      {/* Modern Modal with Animation */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
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
                  <div className="grid gap-5 md:grid-cols-2">
                    {/* Full Name */}
                    <div>
                      <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User
                          size={18}
                          className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
                        />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-2.5 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-[#228296] focus:border-transparent transition-all ${
                            errors.name ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="Enter your full name"
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail
                          size={18}
                          className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
                        />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-2.5 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-[#228296] focus:border-transparent transition-all ${
                            errors.email ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="your@email.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone
                          size={18}
                          className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
                        />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-2.5 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-[#228296] focus:border-transparent transition-all ${
                            errors.phone ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="10-digit mobile number"
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Date of Birth */}
                    <div>
                      <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Date of Birth <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Calendar
                          size={18}
                          className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
                        />
                        <input
                          type="date"
                          name="dob"
                          required
                          value={formData.dob}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-2.5 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-[#228296] focus:border-transparent transition-all ${
                            errors.dob ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                      </div>
                      {errors.dob && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.dob}
                        </p>
                      )}
                    </div>

                    {/* PAN Card */}
                    <div>
                      <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        PAN Card Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <IdCard
                          size={18}
                          className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
                        />
                        <input
                          type="text"
                          name="panCard"
                          required
                          value={formData.panCard}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-2.5 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-[#228296] focus:border-transparent uppercase transition-all ${
                            errors.panCard
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                          placeholder="ABCDE1234F"
                        />
                      </div>
                      {errors.panCard && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.panCard}
                        </p>
                      )}
                    </div>

                    {/* Aadhar Card */}
                    <div>
                      <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Aadhar Card Number{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <IdCard
                          size={18}
                          className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
                        />
                        <input
                          type="text"
                          name="aadharCard"
                          required
                          value={formData.aadharCard}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-2.5 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-[#228296] focus:border-transparent transition-all ${
                            errors.aadharCard
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                          placeholder="12-digit Aadhar number"
                        />
                      </div>
                      {errors.aadharCard && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.aadharCard}
                        </p>
                      )}
                    </div>

                    {/* Occupation */}
                    <div>
                      <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Occupation <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="occupation"
                        required
                        value={formData.occupation}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-[#228296] focus:border-transparent transition-all"
                      >
                        <option value="">Select occupation</option>
                        <option value="salaried">Salaried</option>
                        <option value="self-employed">Self-Employed</option>
                        <option value="business">Business</option>
                        <option value="student">Student</option>
                        <option value="retired">Retired</option>
                        <option value="homemaker">Homemaker</option>
                      </select>
                    </div>

                    {/* Annual Income */}
                    <div>
                      <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Annual Income (₹)
                      </label>
                      <select
                        name="annualIncome"
                        value={formData.annualIncome}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-[#228296] focus:border-transparent transition-all"
                      >
                        <option value="">Select income range</option>
                        <option value="<2.5L">Less than ₹2.5 Lakhs</option>
                        <option value="2.5L-5L">₹2.5 Lakhs - ₹5 Lakhs</option>
                        <option value="5L-10L">₹5 Lakhs - ₹10 Lakhs</option>
                        <option value="10L-25L">₹10 Lakhs - ₹25 Lakhs</option>
                        <option value=">25L">Above ₹25 Lakhs</option>
                      </select>
                    </div>

                    {/* Nominee Name */}
                    <div>
                      <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Nominee Name
                      </label>
                      <input
                        type="text"
                        name="nominee"
                        value={formData.nominee}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-[#228296] focus:border-transparent transition-all"
                        placeholder="Nominee full name"
                      />
                    </div>

                    {/* Password */}
                    <div>
                      <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Create Password <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          required
                          value={formData.password}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-[#228296] focus:border-transparent pr-10"
                          placeholder="Create a strong password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2 hover:text-gray-600"
                        >
                          {showPassword ? (
                            <EyeOff size={18} />
                          ) : (
                            <Eye size={18} />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Residential Address{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Home
                        size={18}
                        className="absolute text-gray-400 left-3 top-3"
                      />
                      <textarea
                        name="address"
                        required
                        rows="3"
                        value={formData.address}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-[#228296] focus:border-transparent transition-all ${
                          errors.address ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Enter your complete address with PIN code"
                      />
                    </div>
                    {errors.address && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.address}
                      </p>
                    )}
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
                          if (errors.terms) setErrors({ ...errors, terms: "" });
                        }}
                        className="mt-1 w-4 h-4 text-[#228296] rounded focus:ring-[#228296]"
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm text-gray-700 dark:text-gray-300"
                      >
                        I confirm that the information provided is accurate and
                        I agree to the
                        <a
                          href="#"
                          className="text-[#228296] hover:underline ml-1"
                        >
                          Terms & Conditions {""}
                        </a>
                         and {" "}
                        <a
                          href="#"
                          className="text-[#228296] hover:underline ml-1"
                        >
                          Privacy Policy
                        </a>
                      </label>
                    </div>
                    {errors.terms && (
                      <p className="mt-2 text-xs text-red-500">
                        {errors.terms}
                      </p>
                    )}
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
                  <div className="flex gap-3 pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3 text-white rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
      )}

      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #228296;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #1a6b7c;
        }
      `}</style>
    </div>
  );
};

export default SavingsAccount;
