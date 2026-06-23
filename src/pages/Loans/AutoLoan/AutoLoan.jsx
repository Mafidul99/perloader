import React, { useState } from "react";
import {
  Car,
  TrendingUp,
  Shield,
  Clock,
  ArrowRight,
  CheckCircle,
  Bike,
  Truck,
  Zap,
  FileText,
  Calculator,
  IndianRupee,
  Calendar,
  Percent,
  Fuel,
  Wrench,
  Award,
  X,
  User,
  Phone,
  Mail,
  MapPin,
  CreditCard,
  DollarSign,
  Home,
  Briefcase,
  Upload,
  AlertCircle,
} from "lucide-react";

const AutoLoan = () => {
  const [vehiclePrice, setVehiclePrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(100000);
  const [tenure, setTenure] = useState(5);
  const [vehicleType, setVehicleType] = useState("new");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    panCard: "",
    employmentType: "salaried",
    monthlyIncome: "",
    companyName: "",
    currentAddress: "",
    city: "",
    pincode: "",
    loanAmount: "",
    vehicleModel: "",
    agreeTerms: false,
  });
  const [errors, setErrors] = useState({});

  const loanAmount = vehiclePrice - downPayment;
  const interestRate = vehicleType === "new" ? 8.5 : 10.5;

  const calculateEMI = () => {
    const principal = loanAmount;
    const ratePerMonth = interestRate / 12 / 100;
    const months = tenure * 12;
    const emi =
      (principal * ratePerMonth * Math.pow(1 + ratePerMonth, months)) /
      (Math.pow(1 + ratePerMonth, months) - 1);
    return emi.toFixed(0);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    else if (formData.fullName.length < 3)
      newErrors.fullName = "Name must be at least 3 characters";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone number must be 10 digits";

    if (!formData.panCard.trim()) newErrors.panCard = "PAN card is required";
    else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panCard))
      newErrors.panCard = "Invalid PAN card format";

    if (!formData.monthlyIncome)
      newErrors.monthlyIncome = "Monthly income is required";
    else if (parseFloat(formData.monthlyIncome) < 15000)
      newErrors.monthlyIncome = "Minimum income required is ₹15,000";

    if (!formData.vehicleModel.trim())
      newErrors.vehicleModel = "Vehicle model is required";

    if (!formData.agreeTerms)
      newErrors.agreeTerms = "You must agree to the terms and conditions";

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
      console.log("Form submitted:", {
        ...formData,
        loanAmount: loanAmount,
        emi: calculateEMI(),
        vehiclePrice,
        downPayment,
        tenure,
        vehicleType,
        interestRate,
      });

      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form after 3 seconds and close modal
      setTimeout(() => {
        setSubmitSuccess(false);
        setIsModalOpen(false);
        resetForm();
      }, 3000);
    }, 2000);
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      panCard: "",
      employmentType: "salaried",
      monthlyIncome: "",
      companyName: "",
      currentAddress: "",
      city: "",
      pincode: "",
      loanAmount: "",
      vehicleModel: "",
      agreeTerms: false,
    });
    setErrors({});
  };

  const features = [
    {
      icon: <Zap size={24} />,
      title: "Quick Approval",
      desc: "Loan approval in 1 hour",
    },
    {
      icon: <Car size={24} />,
      title: "100% On-Road Price",
      desc: "Includes insurance & registration",
    },
    {
      icon: <Percent size={24} />,
      title: "Low Interest",
      desc: "Starting from 8.5% p.a.",
    },
    {
      icon: <Calendar size={24} />,
      title: "Long Tenure",
      desc: "Up to 7 years repayment",
    },
    {
      icon: <Shield size={24} />,
      title: "Zero Prepayment",
      desc: "No charges after 1 year",
    },
    {
      icon: <Award size={24} />,
      title: "Insurance Included",
      desc: "Comprehensive coverage",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#228296] via-[#2c9cb3] to-[#1a5566]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative px-4 py-10 mx-auto md:pt-8 md:pb-24">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-3 py-2 mb-2 text-sm font-semibold rounded-full bg-gradient-to-r from-[#1a5b6b] to-[#6f3c85] backdrop-blur-sm">
              <Car size={16} className="mr-2" />
              Drive Your Dream Car
            </div>
            <h1 className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">
              Auto Loan
            </h1>
            <p className="mb-3 text-lg text-white/90 md:text-xl">
              Get the car, bike, or commercial vehicle of your dreams with easy
              EMIs and lowest interest rates.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-[#228296] transition-all bg-white rounded-lg hover:shadow-xl hover:scale-105"
              >
                Apply Now <ArrowRight size={18} className="ml-2" />
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("calculator")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white transition-all border-2 border-white rounded-lg hover:bg-white/10 hover:scale-105"
              >
                Check EMI
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
        <div
          id="calculator"
          className="p-8 mb-16 rounded-lg shadow-xl dark:bg-gray-900 bg-slate-50"
        >
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-800 dark:text-gray-300">
            Auto Loan EMI Calculator
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Vehicle Type
                </label>
                <div className="flex gap-4">
                  {[
                    {
                      type: "new",
                      label: "New Vehicle",
                      icon: <Car size={18} />,
                    },
                    {
                      type: "used",
                      label: "Used Vehicle",
                      icon: <Car size={18} />,
                    },
                  ].map((v) => (
                    <button
                      key={v.type}
                      onClick={() => setVehicleType(v.type)}
                      className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition-all ${vehicleType === v.type ? "bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white" : "bg-gray-100 text-gray-700"}`}
                    >
                      {v.icon}
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Vehicle Price (₹)
                </label>
                <input
                  type="range"
                  min="100000"
                  max="2000000"
                  step="10000"
                  value={vehiclePrice}
                  onChange={(e) => setVehiclePrice(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    ₹1 Lakh
                  </span>
                  <span className="font-semibold text-[#228296]">
                    ₹{(vehiclePrice / 100000).toFixed(0)} Lakhs
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    ₹20 Lakhs
                  </span>
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Down Payment (₹)
                </label>
                <input
                  type="range"
                  min="0"
                  max={vehiclePrice * 0.5}
                  step="5000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    ₹0
                  </span>
                  <span className="font-semibold text-[#228296]">
                    ₹{(downPayment / 1000).toFixed(0)}K
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    ₹{((vehiclePrice * 0.5) / 1000).toFixed(0)}K
                  </span>
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Loan Tenure (Years)
                </label>
                <input
                  type="range"
                  min="1"
                  max="7"
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
                    7 years
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50">
              <h3 className="mb-4 text-xl font-bold text-gray-800">
                Loan Summary
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Vehicle Price:</span>
                  <span className="font-semibold">
                    ₹{vehiclePrice.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Down Payment:</span>
                  <span className="font-semibold">
                    ₹{downPayment.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Loan Amount:</span>
                  <span className="font-semibold">
                    ₹{loanAmount.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Interest Rate:</span>
                  <span className="font-semibold text-[#228296]">
                    {interestRate}% p.a.
                  </span>
                </div>
                <div className="pt-3 mt-3 border-t-2 border-gray-300">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-gray-800">
                      Monthly EMI:
                    </span>
                    <span className="text-2xl font-bold text-[#6f3c85]">
                      ₹{parseFloat(calculateEMI()).toLocaleString()}
                    </span>
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
              <div
                key={index}
                className="p-6 transition-all duration-300 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50 hover:shadow-xl"
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

        {/* Benefits */}
        <div className="grid gap-6 mb-16 md:grid-cols-3">
          <div className="p-6 text-center rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
            <Fuel size={40} className="mx-auto mb-3 text-[#228296]" />
            <h3 className="mb-2 font-bold text-gray-800 dark:text-gray-300">
              Low Fuel Cost
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Fuel-efficient vehicles with lower EMIs
            </p>
          </div>
          <div className="p-6 text-center rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
            <Wrench size={40} className="mx-auto mb-3 text-[#228296]" />
            <h3 className="mb-2 font-bold text-gray-800 dark:text-gray-300">
              Free Servicing
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              1 year free maintenance included
            </p>
          </div>
          <div className="p-6 text-center rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
            <Shield size={40} className="mx-auto mb-3 text-[#228296]" />
            <h3 className="mb-2 font-bold text-gray-800 dark:text-gray-300">
              Extended Warranty
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              5 years warranty on new vehicles
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 text-center bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-lg text-white">
          <h2 className="mb-4 text-2xl font-bold">Ready to Hit the Road?</h2>
          <p className="mb-6">
            Get your dream vehicle with easy EMI options starting from just
            ₹1,500 per lakh
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3 font-semibold text-[#228296] transition-all bg-white rounded-lg hover:shadow-xl hover:scale-105"
          >
            Apply for Auto Loan
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
              onClick={() => setIsModalOpen(false)}
            ></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>

            <div className="inline-block overflow-hidden text-left align-bottom transition-all transform rounded-lg shadow-xl bg-slate-50 dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              {/* Modal Header */}
              <div className="relative px-6 py-4 bg-gradient-to-r from-[#228296] to-[#6f3c85]">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute text-white transition-colors right-4 top-4 hover:text-gray-200"
                >
                  <X size={24} />
                </button>
                <div className="flex items-center gap-3">
                  <Car size={28} className="text-white" />
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      Apply for Auto Loan
                    </h2>
                    <p className="text-sm text-white/90">
                      Fill in your details to get instant approval
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              {submitSuccess ? (
                <div className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-green-100 rounded-full">
                    <CheckCircle size={40} className="text-green-600" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">
                    Application Submitted!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for applying. Our representative will contact you
                    shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="px-6 py-4 overflow-y-auto max-h-[70vh]"
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    {/* Personal Information */}
                    <div className="md:col-span-2">
                      <h3 className="flex items-center gap-2 mb-3 text-lg font-semibold text-gray-800 dark:text-gray-300">
                        <User size={20} className="text-[#228296]" />
                        Personal Information
                      </h3>
                    </div>

                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User
                          size={18}
                          className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
                        />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] dark:bg-gray-900 dark:text-gray-300 ${errors.fullName ? "border-red-500" : "border-gray-300"}`}
                          placeholder="Enter your full name"
                        />
                      </div>
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
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
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] dark:bg-gray-900 dark:text-gray-300 ${errors.email ? "border-red-500" : "border-gray-300"}`}
                          placeholder="you@example.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
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
                          value={formData.phone}
                          onChange={handleInputChange}
                          maxLength="10"
                          className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] dark:bg-gray-900 dark:text-gray-300 ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                          placeholder="9876543210"
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                        PAN Card <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <CreditCard
                          size={18}
                          className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
                        />
                        <input
                          type="text"
                          name="panCard"
                          value={formData.panCard}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] dark:bg-gray-900 dark:text-gray-300 ${errors.panCard ? "border-red-500" : "border-gray-300"}`}
                          placeholder="ABCDE1234F"
                        />
                      </div>
                      {errors.panCard && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.panCard}
                        </p>
                      )}
                    </div>

                    {/* Employment Details */}
                    <div className="mt-2 md:col-span-2">
                      <h3 className="flex items-center gap-2 mb-3 text-lg font-semibold text-gray-800 dark:text-gray-300">
                        <Briefcase size={20} className="text-[#228296]" />
                        Employment & Income Details
                      </h3>
                    </div>

                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Employment Type
                      </label>
                      <select
                        name="employmentType"
                        value={formData.employmentType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] dark:bg-gray-900 dark:text-gray-300"
                      >
                        <option value="salaried">Salaried</option>
                        <option value="self-employed">Self-Employed</option>
                        <option value="business">Business</option>
                      </select>
                    </div>

                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Monthly Income (₹){" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <DollarSign
                          size={18}
                          className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
                        />
                        <input
                          type="number"
                          name="monthlyIncome"
                          value={formData.monthlyIncome}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] dark:bg-gray-900 dark:text-gray-300 ${errors.monthlyIncome ? "border-red-500" : "border-gray-300"}`}
                          placeholder="50000"
                        />
                      </div>
                      {errors.monthlyIncome && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.monthlyIncome}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Company/Organization Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] dark:bg-gray-900 dark:text-gray-300"
                        placeholder="Enter your company name"
                      />
                    </div>

                    {/* Vehicle Details */}
                    <div className="mt-2 md:col-span-2">
                      <h3 className="flex items-center gap-2 mb-3 text-lg font-semibold text-gray-800 dark:text-gray-300">
                        <Car size={20} className="text-[#228296]" />
                        Vehicle Details
                      </h3>
                    </div>

                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Vehicle Model <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="vehicleModel"
                        value={formData.vehicleModel}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] dark:bg-gray-900 dark:text-gray-300 ${errors.vehicleModel ? "border-red-500" : "border-gray-300"}`}
                        placeholder="e.g., Maruti Suzuki Swift"
                      />
                      {errors.vehicleModel && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.vehicleModel}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Loan Amount Required (₹)
                      </label>
                      <input
                        type="text"
                        value={`₹${loanAmount.toLocaleString()}`}
                        disabled
                        className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg cursor-not-allowed dark:bg-gray-800 dark:text-gray-300"
                      />
                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        Calculated based on vehicle price and down payment
                      </p>
                    </div>

                    {/* Address Details */}
                    <div className="mt-2 md:col-span-2">
                      <h3 className="flex items-center gap-2 mb-3 text-lg font-semibold text-gray-800 dark:text-gray-300">
                        <Home size={20} className="text-[#228296]" />
                        Address Details
                      </h3>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Current Address
                      </label>
                      <textarea
                        name="currentAddress"
                        value={formData.currentAddress}
                        onChange={handleInputChange}
                        rows="2"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] dark:bg-gray-900 dark:text-gray-300"
                        placeholder="Enter your complete address"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] dark:bg-gray-900 dark:text-gray-300"
                        placeholder="Enter your city"
                      />
                    </div>

                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Pincode
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        maxLength="6"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] dark:bg-gray-900 dark:text-gray-300"
                        placeholder="Enter pincode"
                      />
                    </div>

                    {/* Terms and Conditions */}
                    <div className="md:col-span-2">
                      <label className="flex items-start gap-2">
                        <input
                          type="checkbox"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          I agree to the{" "}
                          <a
                            href="#"
                            className="text-[#228296] hover:underline"
                          >
                            Terms and Conditions
                          </a>{" "}
                          and authorize the bank to verify my information
                        </span>
                      </label>
                      {errors.agreeTerms && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.agreeTerms}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Modal Footer */}
                  <div className="flex justify-end gap-3 pt-4 mt-6 border-t">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 text-gray-700 transition-all bg-gray-100 rounded-lg hover:bg-gray-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2 text-white transition-all bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AutoLoan;
