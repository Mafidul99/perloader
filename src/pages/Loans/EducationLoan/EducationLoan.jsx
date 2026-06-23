import React, { useState } from "react";
import {
  GraduationCap,
  TrendingUp,
  Shield,
  Clock,
  ArrowRight,
  CheckCircle,
  BookOpen,
  Globe,
  Award,
  FileText,
  Calculator,
  IndianRupee,
  Calendar,
  Percent,
  University,
  Laptop,
  Plane,
  X,
  Mail,
  Phone,
  User,
  MapPin,
  DollarSign,
  Send,
} from "lucide-react";

const EducationLoan = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    courseName: "",
    institutionName: "",
    loanAmount: "",
    courseDuration: "",
    studyDestination: "india",
    coApplicantIncome: "",
    agreeToTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const features = [
    {
      icon: <University size={24} />,
      title: "100% Finance",
      desc: "Covers tuition + living expenses",
    },
    {
      icon: <Plane size={24} />,
      title: "Study Abroad",
      desc: "Funds for international education",
    },
    {
      icon: <Laptop size={24} />,
      title: "Course Fee Coverage",
      desc: "Complete fee payment",
    },
    {
      icon: <Award size={24} />,
      title: "Tax Benefits",
      desc: "Save tax under Section 80E",
    },
    {
      icon: <Globe size={24} />,
      title: "Global Recognition",
      desc: "For top universities worldwide",
    },
    {
      icon: <BookOpen size={24} />,
      title: "No Margin Money",
      desc: "Up to ₹4 Lakhs loan",
    },
  ];

  const eligibleCourses = [
    "Graduation & Post Graduation (India)",
    "Professional Courses (CA, CS, CMA)",
    "MBA from top B-schools",
    "MS/MTech from abroad",
    "Medical & Engineering courses",
    "Vocational training programs",
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Application submitted:", formData);
    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        courseName: "",
        institutionName: "",
        loanAmount: "",
        courseDuration: "",
        studyDestination: "india",
        coApplicantIncome: "",
        agreeToTerms: false,
      });
    }, 3000);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setSubmitted(false);
  };

  const closeModal = () => {
    if (!isSubmitting) {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1a5b6b] via-[#228296] to-[#6f3c85]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative px-4 py-10 mx-auto md:pt-8 md:pb-24">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-3 py-2 mb-2 text-sm font-semibold rounded-full bg-gradient-to-r from-[#1a5b6b] to-[#6f3c85] backdrop-blur-sm">
              <GraduationCap size={16} className="mr-2" />
              Invest in Your Future
            </div>
            <h1 className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">
              Education Loan
            </h1>
            <p className="mb-3 text-lg text-white/90 md:text-xl">
              Fund your dreams of quality education. Study in India or abroad
              with our hassle-free education loans.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-[#228296] transition-all bg-white rounded-lg hover:shadow-xl hover:scale-105"
              >
                Apply Now <ArrowRight size={18} className="ml-2" />
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
              onClick={closeModal}
            ></div>

            {/* Modal panel */}
            <div className="inline-block overflow-hidden text-left align-bottom transition-all transform rounded-lg shadow-xl bg-slate-50 dark:bg-gray-800 sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              {/* Modal Header */}
              <div className="relative px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-[#1a5b6b] to-[#6f3c85]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="text-white" size={28} />
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        Education Loan Application
                      </h3>
                      <p className="text-sm text-white/80">
                        Fill the details to apply for education loan
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    disabled={isSubmitting}
                    className="transition-colors text-white/80 hover:text-white disabled:opacity-50"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              {!submitted ? (
                <form onSubmit={handleSubmit} className="px-6 py-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
                        <User size={20} className="text-[#228296]" />
                        Personal Information
                      </h4>

                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#228296] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail
                            className="absolute text-gray-400 left-3 top-3"
                            size={18}
                          />
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#228296] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Phone
                            className="absolute text-gray-400 left-3 top-3"
                            size={18}
                          />
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#228296] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            placeholder="9876543210"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                          Address *
                        </label>
                        <div className="relative">
                          <MapPin
                            className="absolute text-gray-400 left-3 top-3"
                            size={18}
                          />
                          <textarea
                            name="address"
                            required
                            value={formData.address}
                            onChange={handleInputChange}
                            rows="2"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#228296] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            placeholder="Your complete address"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Education & Loan Details */}
                    <div className="space-y-4">
                      <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
                        <BookOpen size={20} className="text-[#228296]" />
                        Education & Loan Details
                      </h4>

                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                          Course Name *
                        </label>
                        <input
                          type="text"
                          name="courseName"
                          required
                          value={formData.courseName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#228296] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          placeholder="e.g., MBA, MS in CS, etc."
                        />
                      </div>

                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                          Institution/University Name *
                        </label>
                        <input
                          type="text"
                          name="institutionName"
                          required
                          value={formData.institutionName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#228296] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          placeholder="Name of college/university"
                        />
                      </div>

                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                          Loan Amount Required (₹) *
                        </label>
                        <div className="relative">
                          <IndianRupee
                            className="absolute text-gray-400 left-3 top-3"
                            size={18}
                          />
                          <input
                            type="number"
                            name="loanAmount"
                            required
                            value={formData.loanAmount}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#228296] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            placeholder="e.g., 2500000"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                          Course Duration (Years) *
                        </label>
                        <select
                          name="courseDuration"
                          required
                          value={formData.courseDuration}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#228296] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        >
                          <option value="">Select duration</option>
                          <option value="1">1 Year</option>
                          <option value="2">2 Years</option>
                          <option value="3">3 Years</option>
                          <option value="4">4 Years</option>
                          <option value="5">5+ Years</option>
                        </select>
                      </div>
                    </div>

                    {/* Additional Details */}
                    <div className="space-y-4 md:col-span-2">
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                            Study Destination *
                          </label>
                          <select
                            name="studyDestination"
                            required
                            value={formData.studyDestination}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#228296] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          >
                            <option value="india">India</option>
                            <option value="usa">USA</option>
                            <option value="uk">UK</option>
                            <option value="canada">Canada</option>
                            <option value="australia">Australia</option>
                            <option value="germany">Germany</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                            Co-applicant Annual Income (₹) *
                          </label>
                          <div className="relative">
                            <IndianRupee
                              className="absolute text-gray-400 left-3 top-3"
                              size={18}
                            />
                            <input
                              type="number"
                              name="coApplicantIncome"
                              required
                              value={formData.coApplicantIncome}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#228296] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                              placeholder="Annual income of co-applicant"
                            />
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            name="agreeToTerms"
                            required
                            checked={formData.agreeToTerms}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-[#228296] border-gray-300 rounded focus:ring-[#228296]"
                          />
                          <label className="text-sm text-gray-700 dark:text-gray-300">
                            I agree to the terms and conditions *
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Modal Footer */}
                  <div className="flex justify-end gap-3 mt-8">
                    <button
                      type="button"
                      onClick={closeModal}
                      disabled={isSubmitting}
                      className="px-6 py-2 text-gray-700 transition-all border border-gray-300 rounded-lg hover:bg-gray-50 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 disabled:opacity-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.agreeToTerms}
                      className="flex items-center gap-2 px-6 py-2 text-white transition-all bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-lg hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Submit Application
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="px-6 py-12 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-green-100 rounded-full">
                    <CheckCircle size={40} className="text-green-600" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-gray-800 dark:text-gray-200">
                    Application Submitted Successfully!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Thank you for applying. Our education loan expert will
                    contact you within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="container px-4 py-12 mx-auto">
        {/* Key Stats */}
        <div className="grid gap-6 mb-16 md:grid-cols-4">
          <div className="p-6 text-center rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
            <div className="text-3xl font-bold text-[#228296]">
              Up to ₹1.5 Cr
            </div>
            <div className="mt-2 text-gray-600 dark:text-gray-400">
              Maximum Loan Amount
            </div>
          </div>
          <div className="p-6 text-center rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
            <div className="text-3xl font-bold text-[#228296]">9.5% p.a.</div>
            <div className="mt-2 text-gray-600 dark:text-gray-400">
              Interest Rate Starting
            </div>
          </div>
          <div className="p-6 text-center rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
            <div className="text-3xl font-bold text-[#228296]">15 Years</div>
            <div className="mt-2 text-gray-600 dark:text-gray-400">
              Maximum Repayment
            </div>
          </div>
          <div className="p-6 text-center rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
            <div className="text-3xl font-bold text-[#228296]">1 Year</div>
            <div className="mt-2 text-gray-600 dark:text-gray-400">
              Moratorium Period
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
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Eligible Courses */}
        <div className="p-8 mb-16 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600">
          <h3 className="mb-6 text-2xl font-bold text-center text-gray-800 dark:text-gray-300">
            Eligible Courses
          </h3>
          <div className="grid gap-3 md:grid-cols-2">
            {eligibleCourses.map((course, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle size={18} className="text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  {course}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Documents */}
        <div className="grid gap-8 mb-16 md:grid-cols-2">
          <div className="p-8 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
            <h3 className="mb-4 text-xl font-bold text-gray-800 dark:text-gray-300">
              Documents Required
            </h3>
            <ul className="space-y-2 dark:text-gray-400">
              <li>✓ Admission letter from institution</li>
              <li>✓ Fee structure of the course</li>
              <li>✓ Academic records (10th, 12th, Graduation)</li>
              <li>✓ PAN & Aadhar of student and co-applicant</li>
              <li>✓ Income proof of co-applicant/parents</li>
              <li>✓ Bank statements (last 6 months)</li>
            </ul>
          </div>
          <div className="p-8 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
            <h3 className="mb-4 text-xl font-bold text-gray-800 dark:text-gray-300">
              Collateral Options
            </h3>
            <ul className="space-y-2 dark:text-gray-400">
              <li>✓ No collateral up to ₹4 Lakhs</li>
              <li>✓ Third-party guarantee above ₹4 Lakhs</li>
              <li>✓ Property mortgage above ₹7.5 Lakhs</li>
              <li>✓ Fixed deposit as collateral</li>
              <li>✓ LIC policies/NSC/KVP certificates</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 text-center bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-lg text-white">
          <h2 className="mb-4 text-2xl font-bold">Fund Your Education Today</h2>
          <p className="mb-6">
            Simple application process | Quick approval | Minimal documentation
          </p>
          <button
            onClick={openModal}
            className="px-8 py-3 font-semibold text-[#228296] transition-all bg-white rounded-lg hover:shadow-xl hover:scale-105"
          >
            Apply for Education Loan
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationLoan;
