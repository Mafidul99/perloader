/* eslint-disable no-unused-vars */
import React, { useState, useMemo } from "react";
import Swal from "sweetalert2";
import { 
  TrendingUp, 
} from 'lucide-react';

const DailyAccount = () => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [activeTab, setActiveTab] = useState("all");
  const [selectedPrincipal, setSelectedPrincipal] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(50);
  const [showModal, setShowModal] = useState(false);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [selectedInvestment, setSelectedInvestment] = useState(null);

  // Application form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    investmentAmount: "",
    investmentPeriod: "1Y",
    message: "",
    terms: false,
  });

  // Investment data with daily collections
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = [
    {
      id: 1,
      DailyCollection: 100,
      rate: "6.0%",
      days1: 365,
      days2: 730,
      days3: 1095,
      amount1: 37614.05,
      amount2: 77553.82,
      amount3: 119847.23,
      dailyBreakdown: Array.from({ length: 1095 }, (_, i) => ({
        day: i + 1,
        amount: 100,
        date: new Date(2025, 0, 1 + i).toISOString().split("T")[0],
      })),
    },
    {
      id: 2,
      DailyCollection: 200,
      rate: "6.5%",
      days1: 365,
      days2: 730,
      days3: 1095,
      amount1: 75417.81,
      amount2: 155900.15,
      amount3: 241237.89,
      dailyBreakdown: Array.from({ length: 1095 }, (_, i) => ({
        day: i + 1,
        amount: 200,
        date: new Date(2025, 0, 1 + i).toISOString().split("T")[0],
      })),
    },
    {
      id: 3,
      DailyCollection: 300,
      rate: "7.0%",
      days1: 365,
      days2: 730,
      days3: 1095,
      amount1: 113412.25,
      amount2: 235047.0,
      amount3: 364589.12,
      dailyBreakdown: Array.from({ length: 1095 }, (_, i) => ({
        day: i + 1,
        amount: 300,
        date: new Date(2025, 0, 1 + i).toISOString().split("T")[0],
      })),
    },
    {
      id: 4,
      DailyCollection: 500,
      rate: "7.5%",
      days1: 365,
      days2: 730,
      days3: 1095,
      amount1: 189497.89,
      amount2: 393753.09,
      amount3: 612345.67,
      dailyBreakdown: Array.from({ length: 1095 }, (_, i) => ({
        day: i + 1,
        amount: 500,
        date: new Date(2025, 0, 1 + i).toISOString().split("T")[0],
      })),
    },
    {
      id: 5,
      DailyCollection: 1000,
      rate: "8.0%",
      days1: 365,
      days2: 730,
      days3: 1095,
      amount1: 379953.92,
      amount2: 791549.48,
      amount3: 1234567.89,
      dailyBreakdown: Array.from({ length: 1095 }, (_, i) => ({
        day: i + 1,
        amount: 1000,
        date: new Date(2025, 0, 1 + i).toISOString().split("T")[0],
      })),
    },
  ];

  // Sorting logic
  const sortedData = useMemo(() => {
    if (!sortField) return data;
    return [...data].sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];
      if (typeof aVal === "string") {
        return sortDirection === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }
      return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
    });
  }, [data, sortField, sortDirection]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  // Get daily collection data for selected principal
  const getDailyData = (principal) => {
    const investment = data.find((d) => d.DailyCollection === principal);
    if (!investment) return [];
    return investment.dailyBreakdown;
  };

  const getFilteredDays = (period) => {
    if (period === "all") return 1095;
    return period;
  };

  const filterData = (period) => {
    if (period === "all") return sortedData;
    return sortedData.filter(
      (row) =>
        row.days1 === period || row.days2 === period || row.days3 === period,
    );
  };

  const totalAmount1 = data.reduce((sum, row) => sum + row.amount1, 0);
  const totalAmount2 = data.reduce((sum, row) => sum + row.amount2, 0);
  const totalAmount3 = data.reduce((sum, row) => sum + row.amount3, 0);
  const totalDailyCollection = data.reduce(
    (sum, row) => sum + row.DailyCollection,
    0,
  );

  const getGrowthPercentage = (amount1, amount2) => {
    return (((amount2 - amount1) / amount1) * 100).toFixed(1);
  };

  const getCAGR = (start, end, years) => {
    return ((Math.pow(end / start, 1 / years) - 1) * 100).toFixed(1);
  };

  // Get daily collection data for selected investment
  const dailyData = selectedPrincipal ? getDailyData(selectedPrincipal) : [];
  const allDisplayedDays =
    activeTab === "all"
      ? dailyData
      : dailyData.slice(0, getFilteredDays(activeTab));
  const totalDailyAmount = allDisplayedDays.reduce(
    (sum, d) => sum + d.amount,
    0,
  );

  // Pagination logic
  const totalPages = Math.ceil(allDisplayedDays.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const displayedDays = allDisplayedDays.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  // Calculate totals for displayed page
  const pageTotalAmount = displayedDays.reduce((sum, d) => sum + d.amount, 0);

  // Calculate maturity amounts for selected investment
  const selectedInvestmentData = selectedPrincipal
    ? data.find((d) => d.DailyCollection === selectedPrincipal)
    : null;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setHoveredRow(null);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  // Generate page numbers
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }
    return pageNumbers;
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate terms
    if (!formData.terms) {
      Swal.fire({
        icon: "warning",
        title: "Terms Required",
        text: "Please agree to the Terms and Conditions before submitting.",
        confirmButtonColor: "#228296",
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Application submitted:", formData);
    Swal.fire({
      icon: "success",
      title: "Submitted",
      text: "Application submitted successfully! We will contact you shortly.",
      confirmButtonColor: "#228296",
    });
    setShowApplicationModal(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      investmentAmount: "",
      investmentPeriod: "1Y",
      message: "",
      terms: false,
    });
  };

  // Open application modal with investment details
  const openApplicationModal = (investment) => {
    setSelectedInvestment(investment);
    setFormData((prev) => ({
      ...prev,
      investmentAmount: investment ? investment.DailyCollection : "",
    }));
    setShowApplicationModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-800 dark:via-slate-800 dark:to-slate-800 text-slate-900 dark:text-slate-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#228296] via-[#2c9cb3] to-[#6f3c85]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative px-4 py-10 mx-auto md:pt-8 md:pb-24">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-3 py-2 mb-2 text-sm font-semibold rounded-full bg-gradient-to-br from-[#1a5b6b] to-[#6f3c85] backdrop-blur-sm">
              <TrendingUp size={16} className="mr-2" />
              Daily Collections
            </div>
            <h1 className="mb-2 text-3xl font-bold md:text-4xl lg:text-5xl">
              Investment Daily Tracker
            </h1>
            <p className="mb-3 text-base text-white/90 md:text-lg">
              Earn up to <span className="text-2xl font-bold">8.0% p.a.*</span> with our premium DDS schemes
            </p>
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
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative mb-10 overflow-hidden border shadow-2xl bg-slate-50 dark:bg-slate-900 rounded-3xl border-slate-200/50 dark:border-slate-700/50">
          <div className="absolute inset-0 bg-gradient-to-r from-[#228296]/5 via-transparent to-[#6f3c85]/5"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#228296]/10 to-[#6f3c85]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#228296]/10 to-[#6f3c85]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block w-1.5 h-8 rounded-full bg-gradient-to-b from-[#228296] via-[#4a2c7a] to-[#6f3c85]"></span>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#228296] dark:text-[#6f3c85]">
                  Daily Collections
                </p>
              </div>
              <h1 className="text-4xl font-bold sm:text-5xl bg-gradient-to-r from-[#228296] via-[#4a2c7a] to-[#6f3c85] bg-clip-text text-transparent">
                Track Your Daily Investments
              </h1>
              <p className="max-w-2xl mt-3 text-sm text-slate-600 dark:text-slate-400">
                Track daily collections across different investment scenarios
                with 1Y, 2Y, and 3Y projections.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => openApplicationModal(null)}
                className="px-6 py-2.5 text-sm font-medium text-white rounded-full bg-gradient-to-r from-[#228296] to-[#6f3c85] shadow-lg shadow-[#228296]/25 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Apply Now
                </span>
              </button>
              <div className="px-4 py-2 text-sm font-medium text-white rounded-full bg-gradient-to-r from-[#228296] to-[#6f3c85] shadow-lg shadow-[#228296]/25">
                <span className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-slate-50 animate-pulse"></span>
                  Live Tracking
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-5">
          <div className="p-6 transition-all duration-300 border shadow-lg bg-slate-50 dark:bg-slate-900 rounded-2xl border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400">
                  Daily Collection
                </p>
                <p className="mt-2 text-[20px] font-bold text-slate-900 dark:text-slate-100">
                  ₹{totalDailyCollection.toLocaleString()}
                </p>
              </div>
              <div className="p-3 rounded-full bg-[#228296]/10">
                <svg
                  className="w-6 h-6 text-[#228296]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v1m0 1v1m0 1v1m0 1v1"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="p-6 transition-all duration-300 border shadow-lg bg-slate-50 dark:bg-slate-900 rounded-2xl border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400">
                  1 Year Value
                </p>
                <p className="mt-2 text-[20px] font-bold text-emerald-600 dark:text-emerald-400">
                  ₹{totalAmount1.toFixed(2)}
                </p>
              </div>
              <div className="p-3 rounded-full bg-emerald-50 dark:bg-emerald-900/20">
                <svg
                  className="w-6 h-6 text-emerald-600 dark:text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="p-6 transition-all duration-300 border shadow-lg bg-slate-50 dark:bg-slate-900 rounded-2xl border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400">
                  2 Year Value
                </p>
                <p className="mt-2 text-[20px] font-bold text-purple-600 dark:text-purple-400">
                  ₹{totalAmount2.toFixed(2)}
                </p>
              </div>
              <div className="p-3 rounded-full bg-purple-50 dark:bg-purple-900/20">
                <svg
                  className="w-6 h-6 text-purple-600 dark:text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="p-6 transition-all duration-300 border shadow-lg bg-slate-50 dark:bg-slate-900 rounded-2xl border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400">
                  3 Year Value
                </p>
                <p className="mt-2 text-[20px] font-bold text-amber-600 dark:text-amber-400">
                  ₹{totalAmount3.toFixed(2)}
                </p>
              </div>
              <div className="p-3 rounded-full bg-amber-50 dark:bg-amber-900/20">
                <svg
                  className="w-6 h-6 text-amber-600 dark:text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="p-6 transition-all duration-300 border shadow-lg bg-slate-50 dark:bg-slate-900 rounded-2xl border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400">
                  CAGR (3Y)
                </p>
                <p className="mt-2 text-[20px] font-bold text-blue-600 dark:text-blue-400">
                  {getCAGR(totalAmount1, totalAmount3, 3)}%
                </p>
              </div>
              <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/20">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Selection Buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          {[100, 200, 300, 500, 1000].map((amount) => (
            <button
              key={amount}
              onClick={() => {
                setSelectedPrincipal(
                  selectedPrincipal === amount ? null : amount,
                );
                setCurrentPage(1);
              }}
              className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                selectedPrincipal === amount
                  ? "bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white shadow-lg shadow-[#228296]/25 scale-105"
                  : "bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-2 border-slate-200 dark:border-slate-700 hover:shadow-lg hover:scale-105"
              }`}
            >
              ₹{amount}/day
            </button>
          ))}
          {selectedPrincipal && (
            <button
              onClick={() => {
                setSelectedPrincipal(null);
                setCurrentPage(1);
              }}
              className="px-5 py-2.5 text-sm font-semibold text-red-600 transition-all duration-300 bg-red-50 rounded-full hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30"
            >
              Clear Filter
            </button>
          )}
        </div>

        {/* Period Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => {
              setActiveTab("all");
              setCurrentPage(1);
            }}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
              activeTab === "all"
                ? "bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white shadow-lg shadow-[#228296]/25"
                : "bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:shadow-md"
            }`}
          >
            All Days
          </button>
          <button
            onClick={() => {
              setActiveTab(365);
              setCurrentPage(1);
            }}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
              activeTab === 365
                ? "bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white shadow-lg shadow-[#228296]/25"
                : "bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:shadow-md"
            }`}
          >
            1 Year (365 days)
          </button>
          <button
            onClick={() => {
              setActiveTab(730);
              setCurrentPage(1);
            }}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
              activeTab === 730
                ? "bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white shadow-lg shadow-[#228296]/25"
                : "bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:shadow-md"
            }`}
          >
            2 Years (730 days)
          </button>
          <button
            onClick={() => {
              setActiveTab(1095);
              setCurrentPage(1);
            }}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
              activeTab === 1095
                ? "bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white shadow-lg shadow-[#228296]/25"
                : "bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:shadow-md"
            }`}
          >
            3 Years (1095 days)
          </button>
        </div>

        {/* Daily Collection Table */}
        <div className="overflow-hidden border shadow-2xl bg-slate-50 dark:bg-slate-900 rounded-3xl border-slate-200/50 dark:border-slate-700/50">
          <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-700 bg-gradient-to-r from-[#228296]/5 to-[#6f3c85]/5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  Daily Collection Details
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {selectedPrincipal
                    ? `Showing ₹${selectedPrincipal}/day investments • `
                    : "Showing all investments • "}
                  {allDisplayedDays.length} days displayed
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-full bg-[#228296]/10 text-[#228296] dark:bg-[#228296]/20 dark:text-[#6f3c85]">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#228296] dark:bg-[#6f3c85] animate-pulse"></span>
                  {allDisplayedDays.length} records
                </div>
                <div className="px-3 py-1.5 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  Total: ₹{totalDailyAmount.toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 pt-4 pb-8 overflow-x-auto">
            {displayedDays.length > 0 ? (
              <>
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-xl shadow-lg">
                      <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-white uppercase rounded-tl-xl">
                        #
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-white uppercase">
                        Day
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-white uppercase">
                        Date
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-white uppercase">
                        Amount (₹)
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-white uppercase">
                        Maturity (₹)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    {displayedDays.map((day, index) => {
                      // Calculate maturity amount for this day (cumulative)
                      const cumulativeAmount = displayedDays
                        .slice(0, index + 1)
                        .reduce((sum, d) => sum + d.amount, 0);

                      // Calculate maturity based on selected investment's rate
                      let maturityAmount = 0;
                      if (selectedInvestmentData) {
                        const dailyRate =
                          parseFloat(selectedInvestmentData.rate) / 100 / 365;
                        const days = day.day;
                        maturityAmount =
                          cumulativeAmount * Math.pow(1 + dailyRate, days);
                      }

                      return (
                        <tr
                          key={index}
                          onMouseEnter={() => setHoveredRow(index)}
                          onMouseLeave={() => setHoveredRow(null)}
                          className={`transition-all duration-300 ${
                            hoveredRow === index
                              ? "bg-gradient-to-r from-[#228296]/10 to-[#6f3c85]/10 shadow-lg scale-[1.01]"
                              : "hover:bg-gradient-to-r hover:from-[#228296]/5 hover:to-[#6f3c85]/5"
                          }`}
                        >
                          <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                            <span
                              className={`inline-flex items-center justify-center w-8 h-8 text-xs font-bold rounded-full transition-all duration-300 ${
                                hoveredRow === index
                                  ? "bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white shadow-lg scale-110"
                                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                              }`}
                            >
                              {indexOfFirstItem + index + 1}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-slate-100">
                            Day {day.day}
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                            {day.date}
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 shadow-sm">
                              ₹{day.amount.toLocaleString()}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-400 shadow-sm">
                              ₹
                              {selectedInvestmentData
                                ? maturityAmount.toFixed(2)
                                : "N/A"}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  {/* Table Footer with Totals */}
                  <tfoot>
                    <tr className="bg-gradient-to-r from-[#228296]/20 to-[#6f3c85]/20 border-t-2 border-slate-300 dark:border-slate-600">
                      <td
                        colSpan="3"
                        className="px-6 py-4 text-sm font-bold text-right text-slate-700 dark:text-slate-300"
                      >
                        Page Total:
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-4 py-1.5 text-sm font-bold rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300">
                          ₹{pageTotalAmount.toLocaleString()}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-4 py-1.5 text-sm font-bold rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300">
                          ₹
                          {selectedInvestmentData
                            ? (
                                pageTotalAmount *
                                (1 +
                                  parseFloat(selectedInvestmentData.rate) / 100)
                              ).toFixed(2)
                            : "N/A"}
                        </span>
                      </td>
                    </tr>
                    <tr className="bg-gradient-to-r from-[#228296]/5 to-[#6f3c85]/5 border-t border-slate-200 dark:border-slate-700">
                      <td
                        colSpan="3"
                        className="px-6 py-4 text-sm font-bold text-right text-slate-800 dark:text-slate-200"
                      >
                        Grand Total:
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-4 py-2 text-sm font-bold rounded-full shadow-md bg-emerald-200 dark:bg-emerald-800/40 text-emerald-900 dark:text-emerald-200">
                          ₹{totalDailyAmount.toLocaleString()}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-4 py-2 text-sm font-bold text-purple-900 bg-purple-200 rounded-full shadow-md dark:bg-purple-800/40 dark:text-purple-200">
                          ₹
                          {selectedInvestmentData
                            ? (
                                totalDailyAmount *
                                (1 +
                                  parseFloat(selectedInvestmentData.rate) / 100)
                              ).toFixed(2)
                            : "N/A"}
                        </span>
                      </td>
                    </tr>
                  </tfoot>
                </table>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="flex flex-col items-center justify-between gap-4 pt-6 mt-4 border-t border-slate-200 dark:border-slate-700 md:flex-row">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        Rows per page:
                      </span>
                      <select
                        value={itemsPerPage}
                        onChange={handleItemsPerPageChange}
                        className="px-3 py-1.5 text-sm border rounded-lg bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#228296]"
                      >
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                        <option value={200}>200</option>
                      </select>
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {indexOfFirstItem + 1}-
                        {Math.min(indexOfLastItem, allDisplayedDays.length)} of{" "}
                        {allDisplayedDays.length}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handlePageChange(1)}
                        disabled={currentPage === 1}
                        className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                          currentPage === 1
                            ? "text-slate-400 cursor-not-allowed dark:text-slate-600"
                            : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                        }`}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                          currentPage === 1
                            ? "text-slate-400 cursor-not-allowed dark:text-slate-600"
                            : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                        }`}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </button>

                      {getPageNumbers().map((page, index) => (
                        <button
                          key={index}
                          onClick={() =>
                            typeof page === "number" && handlePageChange(page)
                          }
                          className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                            page === currentPage
                              ? "bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white shadow-md"
                              : page === "..."
                                ? "text-slate-500 cursor-default dark:text-slate-400"
                                : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                          }`}
                          disabled={page === "..."}
                        >
                          {page}
                        </button>
                      ))}

                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                          currentPage === totalPages
                            ? "text-slate-400 cursor-not-allowed dark:text-slate-600"
                            : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                        }`}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => handlePageChange(totalPages)}
                        disabled={currentPage === totalPages}
                        className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                          currentPage === totalPages
                            ? "text-slate-400 cursor-not-allowed dark:text-slate-600"
                            : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                        }`}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 5l7 7-7 7M5 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="py-12 text-center">
                <p className="text-lg text-slate-500 dark:text-slate-400">
                  No data available
                </p>
                <p className="mt-2 text-sm text-slate-400 dark:text-slate-500">
                  Select an investment amount to view daily details
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Investment Summary Cards */}
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-5">
          {data.map((item) => (
            <div
              key={item.id}
              className={`p-4 border shadow-lg bg-slate-50 dark:bg-slate-900 rounded-2xl border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 cursor-pointer ${
                selectedPrincipal === item.DailyCollection
                  ? "ring-2 ring-[#228296] shadow-xl scale-105"
                  : "hover:shadow-xl hover:scale-105"
              }`}
              onClick={() => {
                setSelectedPrincipal(
                  selectedPrincipal === item.DailyCollection
                    ? null
                    : item.DailyCollection,
                );
                setCurrentPage(1);
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold text-[#228296] dark:text-[#6f3c85]">
                  {item.rate}
                </p>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  #{item.id}
                </span>
              </div>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                ₹{item.DailyCollection}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Daily Collection
              </p>
              <div className="grid grid-cols-3 gap-2 pt-3 mt-3 border-t border-slate-200 dark:border-slate-700">
                <div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">
                    1Y
                  </p>
                  <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    ₹{item.amount1.toFixed(0)}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">
                    2Y
                  </p>
                  <p className="text-xs font-semibold text-purple-600 dark:text-purple-400">
                    ₹{item.amount2.toFixed(0)}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">
                    3Y
                  </p>
                  <p className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                    ₹{item.amount3.toFixed(0)}
                  </p>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openApplicationModal(item);
                }}
                className="w-full mt-3 px-4 py-2 text-xs font-semibold text-white rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg transition-all duration-300"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Application Modal */}
      {showApplicationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 z-10 px-6 py-4 bg-white border-b border-slate-200 dark:border-slate-700 dark:bg-slate-900 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    Apply for Investment
                  </h2>
                  {selectedInvestment && (
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      ₹{selectedInvestment.DailyCollection}/day •{" "}
                      {selectedInvestment.rate} interest rate
                    </p>
                  )}
                </div>
                <button
                  onClick={() => {
                    setShowApplicationModal(false);
                    setSelectedInvestment(null);
                  }}
                  className="p-2 transition-colors duration-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <svg
                    className="w-6 h-6 text-slate-600 dark:text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Application Modal */}
            {showApplicationModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 duration-300 bg-black/60 backdrop-blur-md animate-in fade-in">
                <div className="relative w-full max-w-2xl bg-slate-50 dark:bg-slate-900 rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto border border-slate-200/50 dark:border-slate-700/50 scrollbar-thin scrollbar-track-slate-100 dark:scrollbar-track-slate-800 scrollbar-thumb-[#228296]/50 dark:scrollbar-thumb-[#6f3c85]/50 hover:scrollbar-thumb-[#228296] dark:hover:scrollbar-thumb-[#6f3c85] animate-in slide-in-from-bottom-4 duration-300">
                  {/* Modal Header */}
                  <div className="sticky top-0 z-10 px-6 py-4 bg-gradient-to-r from-[#228296]/10 to-[#6f3c85]/10 border-b border-slate-200 dark:border-slate-700 backdrop-blur-md rounded-t-3xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-xl bg-gradient-to-br from-[#228296]/20 to-[#6f3c85]/20">
                            <svg
                              className="w-5 h-5 text-[#228296] dark:text-[#6f3c85]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v1m0 1v1m0 1v1m0 1v1"
                              />
                            </svg>
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#228296] via-[#4a2c7a] to-[#6f3c85] bg-clip-text text-transparent">
                              Apply for Investment
                            </h2>
                            {selectedInvestment && (
                              <p className="text-sm text-slate-600 dark:text-slate-400">
                                <span className="font-semibold text-[#228296] dark:text-[#6f3c85]">
                                  ₹{selectedInvestment.DailyCollection}
                                </span>
                                /day •{" "}
                                <span className="font-semibold text-[#6f3c85]">
                                  {selectedInvestment.rate}
                                </span>{" "}
                                interest rate
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setShowApplicationModal(false);
                          setSelectedInvestment(null);
                        }}
                        className="p-2 transition-all duration-300 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800/50 hover:rotate-90"
                      >
                        <svg
                          className="w-6 h-6 text-slate-600 dark:text-slate-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Modal Body */}
                  <div className="px-6 py-6 bg-slate-50 dark:bg-slate-900">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <span className="inline-block w-1 h-4 rounded-full bg-gradient-to-b from-[#228296] to-[#6f3c85]"></span>
                          <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                            Personal Information
                          </h3>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                              Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-2.5 border shadow-sm bg-slate-50/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#228296] focus:border-transparent transition-all duration-200 placeholder:text-slate-400 dark:placeholder:text-slate-500"
                              placeholder="John Doe"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                              Email Address{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-2.5 border shadow-sm bg-slate-50/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#228296] focus:border-transparent transition-all duration-200 placeholder:text-slate-400 dark:placeholder:text-slate-500"
                              placeholder="john@example.com"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                              Phone Number{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-2.5 border shadow-sm bg-slate-50/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#228296] focus:border-transparent transition-all duration-200 placeholder:text-slate-400 dark:placeholder:text-slate-500"
                              placeholder="+91 98765 43210"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                              Investment Amount{" "}
                              <span className="text-[#6f3c85]">(₹)</span>
                            </label>
                            <input
                              type="number"
                              name="investmentAmount"
                              value={formData.investmentAmount}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2.5 border shadow-sm bg-slate-50/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#228296] focus:border-transparent transition-all duration-200 placeholder:text-slate-400 dark:placeholder:text-slate-500"
                              placeholder="Enter amount"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Investment Details */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <span className="inline-block w-1 h-4 rounded-full bg-gradient-to-b from-[#228296] to-[#6f3c85]"></span>
                          <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                            Investment Details
                          </h3>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                            Investment Period
                          </label>
                          <select
                            name="investmentPeriod"
                            value={formData.investmentPeriod}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2.5 border shadow-sm bg-slate-50/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#228296] focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                              backgroundPosition: "right 0.5rem center",
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "1.5em 1.5em",
                              paddingRight: "2.5rem",
                            }}
                          >
                            <option value="1Y">1 Year</option>
                            <option value="2Y">2 Years</option>
                            <option value="3Y">3 Years</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                            Additional Message
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows="3"
                            className="w-full px-4 py-2.5 border shadow-sm bg-slate-50/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#228296] focus:border-transparent transition-all duration-200 resize-y placeholder:text-slate-400 dark:placeholder:text-slate-500"
                            placeholder="Any additional information you'd like to share..."
                          />
                        </div>
                      </div>

                      {/* Investment Summary Card */}
                      {selectedInvestment && (
                        <div className="p-4 rounded-xl bg-gradient-to-r from-[#228296]/10 to-[#6f3c85]/10 border border-[#228296]/20 dark:border-[#6f3c85]/20">
                          <div className="flex items-center gap-2 mb-3">
                            <svg
                              className="w-4 h-4 text-[#228296] dark:text-[#6f3c85]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                              />
                            </svg>
                            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                              Investment Summary
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-4">
                            <div className="p-3 rounded-lg bg-white/50 dark:bg-slate-800/50">
                              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                Daily Collection
                              </p>
                              <p className="text-lg font-bold text-[#228296]">
                                ₹{selectedInvestment.DailyCollection}
                              </p>
                            </div>
                            <div className="p-3 rounded-lg bg-white/50 dark:bg-slate-800/50">
                              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                Interest Rate
                              </p>
                              <p className="text-lg font-bold text-[#6f3c85]">
                                {selectedInvestment.rate}
                              </p>
                            </div>
                            <div className="p-3 rounded-lg bg-white/50 dark:bg-slate-800/50">
                              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                3Y Projected
                              </p>
                              <p className="text-lg font-bold text-amber-600 dark:text-amber-400">
                                ₹{selectedInvestment.amount3.toFixed(0)}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Terms & Conditions */}
                      <div className="flex items-start gap-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                        <input
                          type="checkbox"
                          id="terms"
                          name="terms"
                          checked={formData.terms || false}
                          onChange={(e) => {
                            setFormData((prev) => ({
                              ...prev,
                              terms: e.target.checked,
                            }));
                          }}
                          className="w-4 h-4 mt-0.5 text-[#228296] bg-slate-100 border-slate-300 rounded focus:ring-[#228296] dark:focus:ring-[#6f3c85] dark:ring-offset-slate-800"
                        />
                        <label
                          htmlFor="terms"
                          className="text-sm text-slate-600 dark:text-slate-300"
                        >
                          I agree to the{" "}
                          <a
                            href="#"
                            className="text-[#228296] hover:underline dark:text-[#6f3c85] font-medium"
                          >
                            Terms and Conditions
                          </a>{" "}
                          and{" "}
                          <a
                            href="#"
                            className="text-[#228296] hover:underline dark:text-[#6f3c85] font-medium"
                          >
                            Privacy Policy
                          </a>
                        </label>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col gap-3 pt-4 border-t border-slate-200 dark:border-slate-700 sm:flex-row">
                        <button
                          type="submit"
                          className="flex-1 px-6 py-3 text-sm font-medium text-white rounded-xl bg-gradient-to-r from-[#228296] to-[#6f3c85] shadow-lg shadow-[#228296]/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          Submit Application
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setShowApplicationModal(false);
                            setSelectedInvestment(null);
                          }}
                          className="px-6 py-3 text-sm font-medium transition-all duration-300 rounded-xl text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 hover:shadow-md active:scale-[0.98] flex items-center justify-center gap-2"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DailyAccount;
