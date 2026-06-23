/* eslint-disable react-hooks/static-components */
import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTimes,
  FaAndroid,
  FaRupeeSign,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaBuilding,
  FaBriefcase,
  FaHeadset,
  FaQuestionCircle,
  FaTicketAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const TopBar = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [formData, setFormData] = useState({
    // Open Account Form
    fullName: "",
    email: "",
    phone: "",
    panCard: "",
    aadharCard: "",
    address: "",
    // Fixed Deposit Form
    fdAmount: "",
    fdTenure: "",
    nomineeName: "",
    // Recurring Deposit Form
    rdAmount: "",
    rdTenure: "",
    // Loan Account Form
    loanType: "",
    loanAmount: "",
    employmentType: "",
    monthlyIncome: "",
  });

  const openModal = (modalId) => {
    setActiveModal(modalId);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = "auto";
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e, type) => {
    e.preventDefault();
    console.log(`${type} form submitted:`, formData);
    toast.success(`Your ${type} application has been submitted successfully! Our representative will contact you soon.`);
    closeModal();
    // Reset form if needed
  };

  // Modal Components
  const OpenAccountModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto dark:bg-gray-900 bg-slate-50 rounded-lg shadow-xl">
        <div className="sticky top-0 flex items-center justify-between p-4 bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white rounded-t-lg">
          <h2 className="text-xl font-bold">Open Savings Account</h2>
          <button
            onClick={closeModal}
            className="text-white transition hover:opacity-80"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <form
          onSubmit={(e) => handleSubmit(e, "Account Opening")}
          className="p-6 space-y-4"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                Full Name *
              </label>
              <div className="relative">
                <FaUser className="absolute text-gray-400 left-3 top-3" />
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:ring-2 focus:ring-[#228296] focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                Email Address *
              </label>
              <div className="relative">
                <FaEnvelope className="absolute text-gray-400 left-3 top-3" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:ring-2 focus:ring-[#228296] focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                Phone Number *
              </label>
              <div className="relative">
                <FaPhone className="absolute text-gray-400 left-3 top-3" />
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:ring-2 focus:ring-[#228296] focus:border-transparent"
                  placeholder="10-digit mobile number"
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                PAN Card Number *
              </label>
              <input
                type="text"
                name="panCard"
                required
                value={formData.panCard}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:ring-2 focus:ring-[#228296] focus:border-transparent"
                placeholder="ABCDE1234F"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                Aadhar Card Number *
              </label>
              <input
                type="text"
                name="aadharCard"
                required
                value={formData.aadharCard}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:ring-2 focus:ring-[#228296] focus:border-transparent"
                placeholder="12-digit Aadhar number"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                Date of Birth
              </label>
              <div className="relative">
                <FaCalendarAlt className="absolute text-gray-400 left-3 top-3" />
                <input
                  type="date"
                  name="dob"
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:ring-2 focus:ring-[#228296] focus:border-transparent"
                />
              </div>
            </div>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
              Residential Address
            </label>
            <textarea
              name="address"
              rows="2"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:ring-2 focus:ring-[#228296] focus:border-transparent"
              placeholder="Enter your complete address"
            ></textarea>
          </div>
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 py-2 text-white rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg transition-all font-semibold"
            >
              Submit Application
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="px-6 py-2 text-gray-700 transition-all bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const FixedDepositModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-50 dark:bg-gray-900 rounded-lg shadow-xl">
        <div className="sticky top-0 flex items-center justify-between p-4 bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white rounded-t-lg">
          <h2 className="text-xl font-bold">Open Fixed Deposit</h2>
          <button
            onClick={closeModal}
            className="text-white transition hover:opacity-80"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <form
          onSubmit={(e) => handleSubmit(e, "Fixed Deposit")}
          className="p-6 space-y-4"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:ring-2 focus:ring-[#228296] focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:ring-2 focus:ring-[#228296] focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:ring-2 focus:ring-[#228296] focus:border-transparent"
                placeholder="10-digit mobile number"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                FD Amount (₹) *
              </label>
              <div className="relative">
                <FaRupeeSign className="absolute text-gray-400 left-3 top-3" />
                <input
                  type="number"
                  name="fdAmount"
                  required
                  value={formData.fdAmount}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:ring-2 focus:ring-[#228296] focus:border-transparent"
                  placeholder="Minimum ₹10,000"
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                Tenure (Months) *
              </label>
              <select
                name="fdTenure"
                required
                value={formData.fdTenure}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 dark:bg-gray-800 dark:text-gray-300 focus:ring-[#228296] focus:border-transparent"
              >
                <option value="">Select tenure</option>
                <option value="12">12 months (7.2% p.a.)</option>
                <option value="24">24 months (7.5% p.a.)</option>
                <option value="36">36 months (7.8% p.a.)</option>
                <option value="60">60 months (8.0% p.a.)</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                Nominee Name
              </label>
              <input
                type="text"
                name="nomineeName"
                value={formData.nomineeName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 dark:bg-gray-800 dark:text-gray-300 focus:ring-[#228296] focus:border-transparent"
                placeholder="Nominee full name"
              />
            </div>
          </div>
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 py-2 text-white rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg transition-all font-semibold"
            >
              Book FD
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="px-6 py-2 text-gray-700 transition-all bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const RecurringDepositModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-50 dark:bg-gray-900  rounded-lg shadow-xl">
        <div className="sticky top-0 flex items-center justify-between p-4 bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white rounded-t-lg">
          <h2 className="text-xl font-bold">Open Recurring Deposit</h2>
          <button
            onClick={closeModal}
            className="text-white transition hover:opacity-80"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <form
          onSubmit={(e) => handleSubmit(e, "Recurring Deposit")}
          className="p-6 space-y-4"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 dark:bg-gray-800 dark:text-gray-300 focus:ring-[#228296] focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:ring-2 focus:ring-[#228296] focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 dark:bg-gray-800 dark:text-gray-300 focus:ring-[#228296] focus:border-transparent"
                placeholder="10-digit mobile number"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                Monthly Deposit (₹) *
              </label>
              <div className="relative">
                <FaRupeeSign className="absolute text-gray-400 left-3 top-3" />
                <input
                  type="number"
                  name="rdAmount"
                  required
                  value={formData.rdAmount}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:ring-2 focus:ring-[#228296] focus:border-transparent"
                  placeholder="Minimum ₹500"
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                Tenure (Months) *
              </label>
              <select
                name="rdTenure"
                required
                value={formData.rdTenure}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:ring-2 focus:ring-[#228296] focus:border-transparent"
              >
                <option value="">Select tenure</option>
                <option value="12">12 months (6.5% p.a.)</option>
                <option value="24">24 months (7.0% p.a.)</option>
                <option value="36">36 months (7.2% p.a.)</option>
                <option value="60">60 months (7.5% p.a.)</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                Nominee Name
              </label>
              <input
                type="text"
                name="nomineeName"
                value={formData.nomineeName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:ring-2 focus:ring-[#228296] focus:border-transparent"
                placeholder="Nominee full name"
              />
            </div>
          </div>
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 py-2 text-white rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg transition-all font-semibold"
            >
              Start RD
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="px-6 py-2 text-gray-700 transition-all bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const LoanAccountModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-50 dark:bg-gray-900 rounded-lg shadow-xl">
        <div className="sticky top-0 flex items-center justify-between p-4 bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white rounded-t-lg">
          <h2 className="text-xl font-bold">Apply for Loan</h2>
          <button
            onClick={closeModal}
            className="text-white transition hover:opacity-80"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <form
          onSubmit={(e) => handleSubmit(e, "Loan")}
          className="p-6 space-y-4"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:ring-2 focus:ring-[#228296] focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:ring-2 focus:ring-[#228296] focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:ring-2 focus:ring-[#228296] focus:border-transparent"
                placeholder="10-digit mobile number"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                Loan Type *
              </label>
              <div className="relative">
                <FaBriefcase className="absolute text-gray-400 left-3 top-3" />
                <select
                  name="loanType"
                  required
                  value={formData.loanType}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:ring-2 focus:ring-[#228296] focus:border-transparent"
                >
                  <option value="">Select loan type</option>
                  <option value="personal">Personal Loan</option>
                  <option value="home">Home Loan</option>
                  <option value="gold">Gold Loan</option>
                  <option value="business">Business Loan</option>
                  <option value="car">Car Loan</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                Loan Amount (₹) *
              </label>
              <div className="relative">
                <FaRupeeSign className="absolute text-gray-400 left-3 top-3" />
                <input
                  type="number"
                  name="loanAmount"
                  required
                  value={formData.loanAmount}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:ring-2 focus:ring-[#228296] focus:border-transparent"
                  placeholder="Enter desired loan amount"
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                Employment Type *
              </label>
              <select
                name="employmentType"
                required
                value={formData.employmentType}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:ring-2 focus:ring-[#228296] focus:border-transparent"
              >
                <option value="">Select employment type</option>
                <option value="salaried">Salaried</option>
                <option value="self-employed">Self-Employed</option>
                <option value="business">Business Owner</option>
                <option value="professional">Professional</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                Monthly Income (₹) *
              </label>
              <div className="relative">
                <FaRupeeSign className="absolute text-gray-400 left-3 top-3" />
                <input
                  type="number"
                  name="monthlyIncome"
                  required
                  value={formData.monthlyIncome}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:ring-2 focus:ring-[#228296] focus:border-transparent"
                  placeholder="Enter monthly income"
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                PAN Card Number
              </label>
              <input
                type="text"
                name="panCard"
                value={formData.panCard}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 focus:ring-2 focus:ring-[#228296] focus:border-transparent"
                placeholder="ABCDE1234F"
              />
            </div>
          </div>
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 py-2 text-white rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg transition-all font-semibold"
            >
              Apply for Loan
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="px-6 py-2 text-gray-700 transition-all bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const MobileBankingModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-lg shadow-xl dark:bg-gray-900 bg-slate-50">
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white rounded-t-lg">
          <h2 className="text-xl font-bold">Mobile Banking</h2>
          <button
            onClick={closeModal}
            className="text-white transition hover:opacity-80"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <div className="p-6 text-center">
          <FaAndroid size={48} className="mx-auto mb-4 text-[#228296]" />
          <h3 className="mb-2 text-lg font-bold text-gray-800 dark:text-gray-200">
            Download Our App
          </h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Experience seamless banking on your mobile
          </p>
          <div className="space-y-3">
            <button className="w-full py-2 text-white rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg transition-all font-semibold">
              Download for Android
            </button>
            <button className="w-full py-2 text-gray-700 transition-all bg-gray-100 rounded-lg hover:bg-gray-200">
              Download for iOS
            </button>
          </div>
          <button
            onClick={closeModal}
            className="w-full py-2 mt-4 text-gray-500 transition-all border border-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-50 dark:text-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  const CustomerSupportModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl rounded-lg shadow-xl dark:bg-gray-900 bg-slate-50">
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white rounded-t-lg">
          <h2 className="text-xl font-bold">Customer Support</h2>
          <button
            onClick={closeModal}
            className="text-white transition hover:opacity-80"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <div className="p-6 max-h-[80vh] overflow-y-auto">
          <h3 className="mb-6 text-lg font-bold text-center text-gray-800 dark:text-gray-200">
            Get Help & Support
          </h3>

          {/* Contact Options Grid */}
          <div className="grid gap-4 mb-6 md:grid-cols-2">
            {/* Phone */}
            <div className="p-4 transition border border-gray-200 rounded-lg dark:border-gray-700 hover:shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <FaPhone className="text-[#228296]" size={20} />
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">Call Us</h4>
              </div>
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">+91 1234 567 890</p>
              <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">Toll Free: 1800-BANK-123</p>
            </div>

            {/* Email */}
            <div className="p-4 transition border border-gray-200 rounded-lg dark:border-gray-700 hover:shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <FaEnvelope className="text-[#228296]" size={20} />
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">Email Us</h4>
              </div>
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">support@bank.com</p>
              <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">Response time: 24 hours</p>
            </div>

            {/* Live Chat */}
            <div className="p-4 transition border border-gray-200 rounded-lg cursor-pointer dark:border-gray-700 hover:shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <FaHeadset className="text-[#228296]" size={20} />
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">Live Chat</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Chat with our agent</p>
              <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">Mon-Fri: 9 AM - 6 PM IST</p>
            </div>

            {/* Support Hours */}
            <div className="p-4 transition border border-gray-200 rounded-lg dark:border-gray-700 hover:shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <FaCalendarAlt className="text-[#228296]" size={20} />
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">Support Hours</h4>
              </div>
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">24/7 Available</p>
              <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">Phone: Mon-Fri 9 AM - 8 PM</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid gap-3 mb-4 md:grid-cols-2">
            {/* FAQ */}
            <Link
              to="/faqs"
              onClick={closeModal}
              className="flex items-center justify-center gap-2 py-3 text-white rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg transition-all font-semibold"
            >
              <FaQuestionCircle size={18} />
              FAQ
            </Link>
            {/* Support Ticket */}
            <Link
              to="/support-ticket"
              onClick={closeModal}
              className="flex items-center justify-center gap-2 py-3 text-white rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg transition-all font-semibold"
            >
              <FaTicketAlt size={18} />
              Create Ticket
            </Link>
          </div>

          <button
            onClick={closeModal}
            className="w-full py-2 font-semibold text-gray-700 transition-all bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  const socialLinks = [
    {
      icon: FaFacebook,
      href: "/",
      color: "#1877f2",
      label: "Facebook",
    },
    {
      icon: FaTwitter,
      href: "/",
      color: "#1da1f2",
      label: "Twitter",
    },
    {
      icon: FaInstagram,
      href: "/",
      color:
        "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
      label: "Instagram",
    },
    {
      icon: FaYoutube,
      href: "/",
      color: "#ff0000",
      label: "YouTube",
    },
  ];
  const handleSocialClick = (social, e) => {
    e.preventDefault();
    window.open(social.href, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="items-center justify-between hidden px-4 py-2 text-sm text-white bg-gradient-to-r from-[#228296] to-[#6f3c85] md:flex">
        <div className="flex space-x-4">
          <div className="flex gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                onClick={(e) => handleSocialClick(social, e)}
                className="flex items-center justify-center w-8 h-8 transition-all duration-300 rounded-full hover:scale-110 hover:shadow-lg"
                style={{
                  background: social.color,
                  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                }}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon size={15} className="text-white" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => openModal("openAccount")}
            className="text-sm font-medium bg-white text-[#228296] px-3 py-1 rounded-full shadow-sm hover:bg-gray-100 transition"
          >
            Open Account
          </button>
          <button
            onClick={() => openModal("fixedDeposit")}
            className="text-sm font-medium bg-white text-[#228296] px-3 py-1 rounded-full hover:bg-gray-100 transition"
          >
            Fixed Deposits
          </button>
          <button
            onClick={() => openModal("recurringDeposit")}
            className="text-sm font-medium bg-white text-[#228296] px-3 py-1 rounded-full hover:bg-gray-100 transition"
          >
            Recurring Deposits
          </button>
          <button
            onClick={() => openModal("loanAccount")}
            className="text-sm font-medium bg-white text-[#228296] px-3 py-1 rounded-full hover:bg-gray-100 transition"
          >
            Loan Account
          </button>
          <button
            onClick={() => openModal("mobileBanking")}
            className="bg-white text-[#228296] px-3 py-1 rounded-full text-sm font-semibold hover:bg-gray-100 transition inline-flex items-center gap-1"
          >
            <FaAndroid /> Mobile Banking
          </button>
          <button
            onClick={() => openModal("customerSupport")}
            className="bg-white text-[#228296] px-3 py-1 rounded-full text-sm font-semibold hover:bg-gray-100 transition inline-flex items-center gap-1"
          >
            <FaHeadset /> Customer Support
          </button>
          <span className="pl-3 text-sm font-medium text-white border-l border-white/30">
            India
          </span>
        </div>
      </div>

      {/* Modals */}
      {activeModal === "openAccount" && <OpenAccountModal />}
      {activeModal === "fixedDeposit" && <FixedDepositModal />}
      {activeModal === "recurringDeposit" && <RecurringDepositModal />}
      {activeModal === "loanAccount" && <LoanAccountModal />}
      {activeModal === "mobileBanking" && <MobileBankingModal />}
      {activeModal === "customerSupport" && <CustomerSupportModal />}
    </>
  );
};

export default TopBar;
