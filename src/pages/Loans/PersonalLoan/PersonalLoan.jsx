/* eslint-disable react-hooks/purity */
import React, { useState } from "react";
import {
  User,
  TrendingUp,
  Shield,
  Clock,
  ArrowRight,
  CheckCircle,
  CreditCard,
  Zap,
  FileText,
  Calculator,
  IndianRupee,
  Calendar,
  Percent,
  Briefcase,
  Home,
  Car,
  GraduationCap,
  X,
  Mail,
  Phone,
  MapPin,
  Calendar as CalendarIcon,
  DollarSign,
  Building,
  Loader,
} from "lucide-react";

const PersonalLoan = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [tenure, setTenure] = useState(3);
  const [interestRate, setInterestRate] = useState(10.5);

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    panCard: "",
    employmentType: "salaried",
    monthlyIncome: "",
    companyName: "",
    address: "",
    city: "",
    pincode: "",
    loanPurpose: "wedding",
  });

  const [formErrors, setFormErrors] = useState({});

  const calculateEMI = () => {
    const principal = loanAmount;
    const ratePerMonth = interestRate / 12 / 100;
    const months = tenure * 12;
    const emi =
      (principal * ratePerMonth * Math.pow(1 + ratePerMonth, months)) /
      (Math.pow(1 + ratePerMonth, months) - 1);
    return emi.toFixed(0);
  };

  const totalPayment = (calculateEMI() * tenure * 12).toFixed(0);
  const totalInterest = (totalPayment - loanAmount).toFixed(0);

  const features = [
    {
      icon: <Zap size={24} />,
      title: "Instant Approval",
      desc: "Get approval within 30 minutes",
    },
    {
      icon: <Clock size={24} />,
      title: "Quick Disbursal",
      desc: "Amount credited in 24 hours",
    },
    {
      icon: <FileText size={24} />,
      title: "Minimal Paperwork",
      desc: "100% digital process",
    },
    {
      icon: <Percent size={24} />,
      title: "Low Interest",
      desc: "Starting from 10.5% p.a.",
    },
    {
      icon: <IndianRupee size={24} />,
      title: "High Loan Amount",
      desc: "Up to ₹25 Lakhs",
    },
    {
      icon: <Calendar size={24} />,
      title: "Flexible Tenure",
      desc: "1-5 years repayment",
    },
  ];

  const eligibility = [
    "Indian citizen aged 21-60 years",
    "Minimum monthly income: ₹25,000",
    "CIBIL score of 750 or above",
    "Employed with minimum 2 years experience",
    "Self-employed with 3 years business continuity",
  ];

  const documents = [
    "PAN Card (Mandatory)",
    "Aadhar Card/Voter ID/Passport",
    "Last 3 months salary slips",
    "Last 6 months bank statements",
    "Photo ID proof",
    "Address proof",
  ];

  const loanPurposes = [
    { value: "wedding", label: "Wedding", icon: <User size={18} /> },
    { value: "travel", label: "Travel", icon: <MapPin size={18} /> },
    {
      value: "medical",
      label: "Medical Emergency",
      icon: <Shield size={18} />,
    },
    { value: "renovation", label: "Home Renovation", icon: <Home size={18} /> },
    {
      value: "education",
      label: "Education",
      icon: <GraduationCap size={18} />,
    },
    {
      value: "debt",
      label: "Debt Consolidation",
      icon: <CreditCard size={18} />,
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.fullName.trim()) errors.fullName = "Full name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email is invalid";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      errors.phone = "Phone number must be 10 digits";
    if (!formData.dateOfBirth) errors.dateOfBirth = "Date of birth is required";
    if (!formData.panCard.trim()) errors.panCard = "PAN Card is required";
    else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panCard.toUpperCase()))
      errors.panCard = "Invalid PAN format";
    if (!formData.monthlyIncome)
      errors.monthlyIncome = "Monthly income is required";
    else if (parseFloat(formData.monthlyIncome) < 25000)
      errors.monthlyIncome = "Minimum monthly income required is ₹25,000";
    if (formData.employmentType === "salaried" && !formData.companyName.trim())
      errors.companyName = "Company name is required";
    if (!formData.address.trim()) errors.address = "Address is required";
    if (!formData.city.trim()) errors.city = "City is required";
    if (!formData.pincode.trim()) errors.pincode = "Pincode is required";
    else if (!/^\d{6}$/.test(formData.pincode))
      errors.pincode = "Pincode must be 6 digits";

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form after 2 seconds and close modal
      setTimeout(() => {
        setSubmitSuccess(false);
        setShowModal(false);
        // Reset form data
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          dateOfBirth: "",
          panCard: "",
          employmentType: "salaried",
          monthlyIncome: "",
          companyName: "",
          address: "",
          city: "",
          pincode: "",
          loanPurpose: "wedding",
        });
        setFormErrors({});
      }, 2000);
    }, 1500);
  };

  const openModal = () => {
    setShowModal(true);
    setSubmitSuccess(false);
    setFormErrors({});
  };

  const closeModal = () => {
    if (!isSubmitting) {
      setShowModal(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#228296] via-[#2c9cb3] to-[#6f3c85]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative px-4 py-10 mx-auto md:pt-8 md:pb-24">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-3 py-2 mb-2 text-sm font-semibold rounded-full bg-gradient-to-r from-[#228296] to-[#6f3c85] backdrop-blur-sm">
              <User size={16} className="mr-2" />
              Your Dreams, Our Support
            </div>
            <h1 className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">
              Personal Loan
            </h1>
            <p className="mb-3 text-lg text-white/90 md:text-xl">
              Fund your dreams with flexible personal loans. Wedding, travel,
              medical emergency, or home renovation - we've got you covered.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-[#228296] transition-all bg-white rounded-lg hover:shadow-xl hover:scale-105"
              >
                Apply Now
                <ArrowRight size={18} className="ml-2" />
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white transition-all border-2 border-white rounded-lg hover:bg-white/10 hover:scale-105">
                Check Eligibility
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
        <div className="p-8 mb-16 rounded-lg shadow-xl dark:bg-gray-900 bg-slate-50">
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-800 dark:text-gray-300">
            Check Your EMI
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">
                  Loan Amount (₹)
                </label>
                <input
                  type="range"
                  min="50000"
                  max="2500000"
                  step="10000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    ₹50,000
                  </span>
                  <span className="font-semibold text-[#228296]">
                    ₹{(loanAmount / 100000).toFixed(0)} Lakhs
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    ₹25 Lakhs
                  </span>
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">
                  Tenure (Years)
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    1 year
                  </span>
                  <span className="font-semibold text-[#228296]">
                    {tenure} years
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    5 years
                  </span>
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">
                  Interest Rate (% p.a.)
                </label>
                <input
                  type="range"
                  min="9.5"
                  max="18"
                  step="0.5"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    9.5%
                  </span>
                  <span className="font-semibold text-[#228296]">
                    {interestRate}%
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    18%
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-200 dark:to-gray-300">
              <h3 className="mb-4 text-xl font-bold text-gray-800">
                Loan Summary
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly EMI:</span>
                  <span className="text-2xl font-bold text-[#6f3c85]">
                    ₹{parseFloat(calculateEMI()).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Principal Amount:</span>
                  <span className="font-semibold">
                    ₹{loanAmount.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Interest:</span>
                  <span className="font-semibold text-green-600">
                    ₹{parseFloat(totalInterest).toLocaleString()}
                  </span>
                </div>
                <div className="pt-3 mt-3 border-t-2 border-gray-300">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-gray-800">
                      Total Payment:
                    </span>
                    <span className="text-xl font-bold text-[#228296]">
                      ₹{parseFloat(totalPayment).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 transition-all duration-300 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50 hover:shadow-xl hover:-translate-y-2"
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

        {/* Eligibility & Documents */}
        <div className="grid gap-8 mb-16 md:grid-cols-2">
          <div className="p-8 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
            <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-300">
              Eligibility Criteria
            </h3>
            <ul className="space-y-3">
              {eligibility.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle size={18} className="mt-1 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-400">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
            <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-300">
              Documents Required
            </h3>
            <ul className="space-y-3">
              {documents.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle size={18} className="mt-1 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-400">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 text-center bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-lg text-white">
          <h2 className="mb-4 text-2xl font-bold">
            Ready to Fulfill Your Dreams?
          </h2>
          <p className="mb-6">
            Get instant personal loan approval with minimal documentation
          </p>
          <button
            onClick={openModal}
            className="px-8 py-3 font-semibold text-[#228296] transition-all bg-white rounded-lg hover:shadow-xl hover:scale-105"
          >
            Apply for Personal Loan
          </button>
        </div>
      </div>

      {/* Application Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 transition-opacity duration-300 bg-black/50"
            onClick={closeModal}
          ></div>

          {/* Modal Container */}
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="relative w-full max-w-3xl transition-all duration-300 transform scale-100 shadow-2xl bg-slate-50 dark:bg-gray-900 rounded-2xl">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85]">
                    <FileText size={24} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      Personal Loan Application
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Fill in your details to get instant approval
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  disabled={isSubmitting}
                  className="p-2 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50"
                >
                  <X size={24} className="text-gray-500 dark:text-gray-400" />
                </button>
              </div>

              {/* Modal Body - Form */}
              {!submitSuccess ? (
                <form
                  onSubmit={handleSubmit}
                  className="p-6 overflow-y-auto max-h-[70vh]"
                >
                  <div className="grid gap-6 md:grid-cols-2">
                    {/* Personal Information */}
                    <div className="md:col-span-2">
                      <h3 className="flex items-center gap-2 mb-4 text-lg font-semibold text-gray-800 dark:text-white">
                        <User size={20} className="text-[#228296]" />
                        Personal Information
                      </h3>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 dark:text-gray-300 focus:ring-[#228296] focus:border-transparent dark:bg-gray-800 dark:border-gray-700 ${
                          formErrors.fullName
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="Enter your full name"
                      />
                      {formErrors.fullName && (
                        <p className="mt-1 text-sm text-red-500">
                          {formErrors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 dark:text-gray-300 focus:ring-[#228296] focus:border-transparent dark:bg-gray-800 dark:border-gray-700 ${
                          formErrors.email
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="you@example.com"
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-sm text-red-500">
                          {formErrors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 dark:text-gray-300 focus:ring-[#228296] focus:border-transparent dark:bg-gray-800 dark:border-gray-700 ${
                          formErrors.phone
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="9876543210"
                        maxLength="10"
                      />
                      {formErrors.phone && (
                        <p className="mt-1 text-sm text-red-500">
                          {formErrors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Date of Birth <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 dark:text-gray-300 focus:ring-[#228296] focus:border-transparent dark:bg-gray-800 dark:border-gray-700 ${
                          formErrors.dateOfBirth
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      />
                      {formErrors.dateOfBirth && (
                        <p className="mt-1 text-sm text-red-500">
                          {formErrors.dateOfBirth}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        PAN Card <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="panCard"
                        value={formData.panCard}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 dark:text-gray-300 focus:ring-[#228296] focus:border-transparent dark:bg-gray-800 dark:border-gray-700 uppercase ${
                          formErrors.panCard
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="ABCDE1234F"
                        maxLength="10"
                      />
                      {formErrors.panCard && (
                        <p className="mt-1 text-sm text-red-500">
                          {formErrors.panCard}
                        </p>
                      )}
                    </div>

                    {/* Employment Details */}
                    <div className="md:col-span-2">
                      <h3 className="flex items-center gap-2 mb-4 text-lg font-semibold text-gray-800 dark:text-white">
                        <Briefcase size={20} className="text-[#228296]" />
                        Employment Details
                      </h3>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Employment Type
                      </label>
                      <select
                        name="employmentType"
                        value={formData.employmentType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 dark:text-gray-300 focus:ring-[#228296] focus:border-transparent dark:bg-gray-800 dark:border-gray-700"
                      >
                        <option value="salaried">Salaried Employee</option>
                        <option value="self-employed">Self Employed</option>
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Monthly Income (₹){" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        name="monthlyIncome"
                        value={formData.monthlyIncome}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 dark:text-gray-300 focus:ring-[#228296] focus:border-transparent dark:bg-gray-800 dark:border-gray-700 ${
                          formErrors.monthlyIncome
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="50000"
                      />
                      {formErrors.monthlyIncome && (
                        <p className="mt-1 text-sm text-red-500">
                          {formErrors.monthlyIncome}
                        </p>
                      )}
                    </div>

                    {formData.employmentType === "salaried" && (
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                          Company Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 dark:text-gray-300 focus:ring-[#228296] focus:border-transparent dark:bg-gray-800 dark:border-gray-700 ${
                            formErrors.companyName
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                          placeholder="Your company name"
                        />
                        {formErrors.companyName && (
                          <p className="mt-1 text-sm text-red-500">
                            {formErrors.companyName}
                          </p>
                        )}
                      </div>
                    )}

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Loan Purpose
                      </label>
                      <select
                        name="loanPurpose"
                        value={formData.loanPurpose}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:text-gray-300 rounded-lg focus:ring-2 focus:ring-[#228296] focus:border-transparent dark:bg-gray-800 dark:border-gray-700"
                      >
                        {loanPurposes.map((purpose) => (
                          <option key={purpose.value} value={purpose.value}>
                            {purpose.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Address Details */}
                    <div className="md:col-span-2">
                      <h3 className="flex items-center gap-2 mb-4 text-lg font-semibold text-gray-800 dark:text-white">
                        <MapPin size={20} className="text-[#228296]" />
                        Address Details
                      </h3>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Residential Address{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows="2"
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 dark:text-gray-300 focus:ring-[#228296] focus:border-transparent dark:bg-gray-800 dark:border-gray-700 ${
                          formErrors.address
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="Enter your complete address"
                      ></textarea>
                      {formErrors.address && (
                        <p className="mt-1 text-sm text-red-500">
                          {formErrors.address}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 dark:text-gray-300 focus:ring-[#228296] focus:border-transparent dark:bg-gray-800 dark:border-gray-700 ${
                          formErrors.city ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Mumbai"
                      />
                      {formErrors.city && (
                        <p className="mt-1 text-sm text-red-500">
                          {formErrors.city}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Pincode <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 dark:text-gray-300 focus:ring-[#228296] focus:border-transparent dark:bg-gray-800 dark:border-gray-700 ${
                          formErrors.pincode
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="400001"
                        maxLength="6"
                      />
                      {formErrors.pincode && (
                        <p className="mt-1 text-sm text-red-500">
                          {formErrors.pincode}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Loan Summary in Modal */}
                  <div className="p-4 mt-6 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800">
                    <h4 className="mb-3 font-semibold text-gray-700 dark:text-gray-300">
                      Loan Summary
                    </h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-gray-500 dark:text-gray-300">
                          Selected Amount:
                        </p>
                        <p className="font-semibold dark:text-[#228296]">
                          ₹{loanAmount.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-gray-300">
                          Tenure:
                        </p>
                        <p className="font-semibold dark:text-[#228296]">
                          {tenure} years
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-gray-300">
                          Interest Rate:
                        </p>
                        <p className="font-semibold dark:text-[#228296]">
                          {interestRate}% p.a.
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-gray-300">
                          Estimated EMI:
                        </p>
                        <p className="font-semibold text-[#6f3c85] dark:text-[#6f3c85]">
                          ₹{parseFloat(calculateEMI()).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-4 mt-6">
                    <button
                      type="button"
                      onClick={closeModal}
                      disabled={isSubmitting}
                      className="flex-1 px-6 py-3 font-semibold text-gray-700 transition-all bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 disabled:opacity-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 px-6 py-3 font-semibold text-white transition-all bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-lg hover:shadow-lg hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <Loader size={20} className="animate-spin" />
                          Submitting...
                        </span>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                /* Success State */
                <div className="p-12 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-green-100 rounded-full">
                    <CheckCircle size={48} className="text-green-500" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">
                    Application Submitted!
                  </h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">
                    Thank you for applying. Our representative will contact you
                    within 24 hours.
                  </p>
                  <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Application Reference ID:
                    </p>
                    <p className="font-mono text-lg font-semibold text-[#228296]">
                      PL{Math.random().toString(36).substr(2, 8).toUpperCase()}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalLoan;
