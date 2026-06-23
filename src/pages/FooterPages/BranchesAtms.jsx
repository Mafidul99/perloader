/* eslint-disable react-hooks/static-components */
import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  MapPin,
  Search,
  Navigation,
  Clock,
  Phone,
  Mail,
  Filter,
  X,
  Star,
  Wifi,
  Car,
  Coffee,
  Accessibility,
  ChevronRight,
  AlertCircle,
  Building,
  CreditCard,
  AlertTriangle,
  CheckCircle,
  Loader,
} from "lucide-react";

const MySwal = withReactContent(Swal);

const BranchesAtms = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedBranch, setSelectedBranch] = useState(null);

  // Modal states
  const [showLostCardModal, setShowLostCardModal] = useState(false);
  const [showBlockCardModal, setShowBlockCardModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Form states
  const [lostCardData, setLostCardData] = useState({
    cardNumber: "",
    accountNumber: "",
    fullName: "",
    reason: "lost",
    additionalInfo: "",
  });

  const [blockCardData, setBlockCardData] = useState({
    cardNumber: "",
    accountNumber: "",
    fullName: "",
    reason: "stolen",
    additionalInfo: "",
  });

  const branches = [
    {
      id: 1,
      name: "Head Office - Chh. Sambhajinagar",
      type: "branch",
      address: "N-4 Cidco, Near Kamgar Chowk, High Court Road",
      city: "Chh. Sambhajinagar",
      pincode: "431003",
      phone: "+91 7767006627",
      email: "branch.hos@ncosl.com",
      timings: "10:00 AM - 4:00 PM (Mon-Fri), 10:00 AM - 1:00 PM (Sat)",
      facilities: [
        "ATM",
        "Locker",
        "Parking",
        "Wheelchair Access",
        "Passbook Printing",
      ],
      rating: 4.8,
      coordinates: { lat: 19.8762, lng: 75.3433 },
      manager: "Mr. Rajesh Sharma",
      holiday: "2nd & 4th Saturday, Sunday",
    },
    {
      id: 2,
      name: "CIDCO Branch",
      type: "branch",
      address: "Plot No. 15, CIDCO Complex, Near Bus Stand",
      city: "Chh. Sambhajinagar",
      pincode: "431003",
      phone: "+91 240 2345678",
      email: "cidco.branch@ncosl.com",
      timings: "10:00 AM - 4:00 PM (Mon-Fri), 10:00 AM - 1:00 PM (Sat)",
      facilities: ["ATM", "Locker", "Parking", "Wheelchair Access"],
      rating: 4.6,
      coordinates: { lat: 19.8862, lng: 75.3533 },
      manager: "Mrs. Priya Patil",
      holiday: "2nd & 4th Saturday, Sunday",
    },
    {
      id: 3,
      name: "Railway Station ATM",
      type: "atm",
      address: "Railway Station Premises, Platform No. 1",
      city: "Chh. Sambhajinagar",
      pincode: "431005",
      phone: "+91 1800 123 4567",
      email: null,
      timings: "24/7",
      facilities: ["24/7 Access", "Cash Deposit", "Check Deposit"],
      rating: 4.5,
      coordinates: { lat: 19.8662, lng: 75.3633 },
    },
    {
      id: 4,
      name: "Shivaji Nagar Branch",
      type: "branch",
      address: "Shop No. 8-10, Shivaji Nagar Main Road",
      city: "Pune",
      pincode: "411005",
      phone: "+91 20 25678901",
      email: "pune.branch@ncosl.com",
      timings: "10:00 AM - 4:00 PM (Mon-Fri), 10:00 AM - 1:00 PM (Sat)",
      facilities: [
        "ATM",
        "Locker",
        "Parking",
        "Wheelchair Access",
        "Passbook Printing",
      ],
      rating: 4.7,
      coordinates: { lat: 18.5204, lng: 73.8567 },
      manager: "Mr. Suresh Joshi",
      holiday: "2nd & 4th Saturday, Sunday",
    },
    {
      id: 5,
      name: "MG Road ATM",
      type: "atm",
      address: "MG Road, Near City Center Mall",
      city: "Pune",
      pincode: "411001",
      phone: "+91 1800 123 4567",
      email: null,
      timings: "24/7",
      facilities: ["24/7 Access", "Cash Deposit"],
      rating: 4.4,
      coordinates: { lat: 18.5304, lng: 73.8667 },
    },
    {
      id: 6,
      name: "Andheri Branch",
      type: "branch",
      address: "Andheri East, Near International Airport",
      city: "Mumbai",
      pincode: "400069",
      phone: "+91 22 26789012",
      email: "mumbai.branch@ncosl.com",
      timings: "10:00 AM - 4:00 PM (Mon-Fri), 10:00 AM - 1:00 PM (Sat)",
      facilities: [
        "ATM",
        "Locker",
        "Parking",
        "Wheelchair Access",
        "Passbook Printing",
        "Currency Exchange",
      ],
      rating: 4.9,
      coordinates: { lat: 19.1136, lng: 72.8697 },
      manager: "Mr. Amit Shah",
      holiday: "2nd & 4th Saturday, Sunday",
    },
  ];

  const cities = [
    "all",
    "Chh. Sambhajinagar",
    "Pune",
    "Mumbai",
    "Nagpur",
    "Nashik",
  ];

  const getFacilityIcon = (facility) => {
    switch (facility) {
      case "ATM":
        return <MapPin size={14} />;
      case "Locker":
        return <Star size={14} />;
      case "Parking":
        return <Car size={14} />;
      case "Wheelchair Access":
        return <Accessibility size={14} />;
      case "24/7 Access":
        return <Clock size={14} />;
      case "Cash Deposit":
        return <MapPin size={14} />;
      default:
        return <Coffee size={14} />;
    }
  };

  const filteredBranches = branches.filter((branch) => {
    const matchesSearch =
      branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      branch.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      branch.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || branch.type === selectedType;
    const matchesCity = selectedCity === "all" || branch.city === selectedCity;
    return matchesSearch && matchesType && matchesCity;
  });

  const getDirections = (branch) => {
    const address = encodeURIComponent(`${branch.address}, ${branch.city}`);
    window.open(`https://www.google.com/maps/search/${address}`, "_blank");
  };

  const handleLostCardInputChange = (e) => {
    setLostCardData({
      ...lostCardData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlockCardInputChange = (e) => {
    setBlockCardData({
      ...blockCardData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLostCardSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Lost Card Report Submitted:", lostCardData);
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset and close after success message
      setTimeout(() => {
        setSubmitSuccess(false);
        setShowLostCardModal(false);
        setLostCardData({
          cardNumber: "",
          accountNumber: "",
          fullName: "",
          reason: "lost",
          additionalInfo: "",
        });
        MySwal.fire({
          icon: "success",
          title: "Lost Card Reported",
          html: `
            <div style="text-align: left;">
              <p>Your lost card report has been submitted successfully.</p>
              <p>Reference ID: <strong>LOST-${Math.floor(
                Math.random() * 1000000,
              )}</strong></p>
              <p>Our team will contact you shortly.</p>
            </div>
          `,
          confirmButtonColor: "#228296",
          confirmButtonText: "Close",
          background: "#ffffff",
          backdrop: "rgba(0, 0, 0, 0.4)",
          timer: 5000,
          timerProgressBar: true,
        });
      }, 1500);
    }, 1500);
  };

  const handleBlockCardSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Card Block Request Submitted:", blockCardData);
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset and close after success message
      setTimeout(() => {
        setSubmitSuccess(false);
        setShowBlockCardModal(false);
        setBlockCardData({
          cardNumber: "",
          accountNumber: "",
          fullName: "",
          reason: "stolen",
          additionalInfo: "",
        });
        MySwal.fire({
          icon: 'success',
          title: 'Card Blocked Successfully!',
          html: `
            <div style="text-align: left;">
              <p>Your card has been blocked successfully.</p>
              <p>A new card will be dispatched within 5-7 business days.</p>
            </div>
          `,
          confirmButtonColor: '#228296',
          confirmButtonText: 'Close',
          background: '#ffffff',
          backdrop: 'rgba(0, 0, 0, 0.4)',
          timer: 5000,
          timerProgressBar: true,
        });
      }, 1500);
    }, 1500);
  };

  const closeModals = () => {
    setShowLostCardModal(false);
    setShowBlockCardModal(false);
    setIsSubmitting(false);
    setSubmitSuccess(false);
  };

  // Modal Component (reusable)
  const Modal = ({
    isOpen,
    onClose,
    title,
    // eslint-disable-next-line no-unused-vars
    icon: Icon,
    children,
    onSubmit,
  }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div
          className="fixed inset-0 transition-opacity bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />
        <div className="flex items-center justify-center min-h-full p-4">
          <div className="relative w-full max-w-md transition-all transform shadow-2xl bg-slate-50 rounded-xl dark:bg-gray-900">
            <div className="sticky top-0 flex items-center justify-between p-5 text-white bg-gradient-to-r from-red-600 to-orange-600 rounded-t-xl">
              <div className="flex items-center gap-2">
                <Icon size={24} />
                <h2 className="text-xl font-bold">{title}</h2>
              </div>
              <button
                onClick={onClose}
                className="p-1 text-white transition-colors rounded-lg hover:bg-white/20"
              >
                <X size={24} />
              </button>
            </div>
            <form onSubmit={onSubmit} className="p-6 space-y-4">
              {children}
            </form>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#228296] via-[#2c9cb3] to-[#6f3c85] py-12">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative px-4 py-10 mx-auto">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-3 py-1 mb-2 text-sm font-semibold rounded-full bg-gradient-to-r from-[#228296] to-[#6f3c85] backdrop-blur-sm">
              <MapPin size={16} className="mr-2" />
              Find Us Near You
            </div>
            <h1 className="mb-2 text-3xl font-bold md:text-4xl lg:text-5xl">
              Branches & ATMs
            </h1>
            <p className="mb-3 text-lg text-white/90">
              Locate our nearest branch or ATM across Maharashtra. We're here to
              serve you better.
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

      <div className="container px-1 py-10 mx-auto">
        {/* Search and Filters */}
        <div className="p-6 mb-8 rounded-lg shadow-md bg-slate-50 dark:bg-gray-900">
          <div className="grid gap-3 md:grid-cols-3">
            <div className="relative items-center justify-center md:col-span-1">
              <Search
                className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
                size={20}
              />
              <input
                type="text"
                placeholder="Search by branch name, city or address..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 rounded-lg focus:ring-2 focus:ring-[#228296] focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedType("all")}
                className={`flex-1 px-2 py-2 rounded-lg font-medium transition ${
                  selectedType === "all"
                    ? "bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 hover:dark:bg-gray-700 shadow-md"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedType("branch")}
                className={`flex-1 px-2 py-2 rounded-lg font-medium transition ${
                  selectedType === "branch"
                    ? "bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 hover:dark:bg-gray-700 shadow-md"
                }`}
              >
                Branches
              </button>
              <button
                onClick={() => setSelectedType("atm")}
                className={`flex-1 px-2 py-2 rounded-lg font-medium transition ${
                  selectedType === "atm"
                    ? "bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 hover:dark:bg-gray-700 shadow-md"
                }`}
              >
                ATMs
              </button>
            </div>
            <div>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 rounded-lg focus:ring-2 focus:ring-[#228296] focus:border-transparent"
              >
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city === "all" ? "All Cities" : city}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-600 dark:text-gray-200">
            Found{" "}
            <span className="font-bold text-[#228296]">
              {filteredBranches.length}
            </span>{" "}
            locations
          </p>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
            >
              <X size={14} /> Clear search
            </button>
          )}
        </div>

        {/* Branches Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredBranches.map((branch) => (
            <div
              key={branch.id}
              className={`dark:bg-gray-900 bg-slate-50 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer ${
                selectedBranch === branch.id ? "ring-2 ring-[#228296]" : ""
              }`}
              onClick={() =>
                setSelectedBranch(
                  selectedBranch === branch.id ? null : branch.id,
                )
              }
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div
                        className={`p-1 rounded-full ${branch.type === "branch" ? "bg-[#228296]/10" : "bg-[#6f3c85]/10"}`}
                      >
                        {branch.type === "branch" ? (
                          <Building size={18} className="text-[#228296]" />
                        ) : (
                          <MapPin size={18} className="text-[#6f3c85]" />
                        )}
                      </div>
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                          branch.type === "branch"
                            ? "bg-green-100 text-green-700"
                            : "bg-purple-100 text-purple-700"
                        }`}
                      >
                        {branch.type === "branch" ? "Branch" : "ATM"}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                      {branch.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star
                      size={14}
                      className="text-yellow-500 fill-yellow-500"
                    />
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                      {branch.rating}
                    </span>
                  </div>
                </div>

                <div className="mb-4 space-y-2">
                  <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-200">
                    <MapPin
                      size={14}
                      className="mt-0.5 flex-shrink-0 text-gray-600 dark:text-gray-200"
                    />
                    <span className="text-gray-800 dark:text-gray-200">
                      {branch.address}, {branch.city} - {branch.pincode}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-200">
                    <Clock size={14} />
                    <span className="text-gray-800 dark:text-gray-200">
                      {branch.timings}
                    </span>
                  </div>
                  {branch.phone && (
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-200">
                      <Phone size={14} />
                      <a
                        href={`tel:${branch.phone}`}
                        className="hover:text-[#228296]"
                      >
                        {branch.phone}
                      </a>
                    </div>
                  )}
                </div>

                {branch.facilities && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {branch.facilities.map((facility, idx) => (
                      <span
                        key={idx}
                        className="flex items-center gap-1 px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-300"
                      >
                        {getFacilityIcon(facility)}
                        {facility}
                      </span>
                    ))}
                  </div>
                )}

                {selectedBranch === branch.id && (
                  <div className="pt-4 mt-4 space-y-3 border-t border-gray-200 animate-fadeIn">
                    {branch.manager && (
                      <div className="text-sm">
                        <span className="font-semibold text-gray-800 dark:text-gray-200">
                          Branch Manager:
                        </span>
                        <span className="ml-1 text-gray-800 dark:text-gray-200">
                          {" "}
                          {branch.manager}
                        </span>
                      </div>
                    )}
                    {branch.holiday && (
                      <div className="text-sm">
                        <span className="font-semibold text-gray-800 dark:text-gray-200">
                          Weekly Holiday:
                        </span>
                        <span className="ml-1 text-gray-800 dark:text-gray-200">
                          {" "}
                          {branch.holiday}
                        </span>
                      </div>
                    )}
                    {branch.email && (
                      <div className="flex items-center gap-2 text-sm">
                        <Mail
                          size={14}
                          className="font-semibold text-gray-800 dark:text-gray-200"
                        />
                        <a
                          href={`mailto:${branch.email}`}
                          className="text-[#228296] hover:underline"
                        >
                          {branch.email}
                        </a>
                      </div>
                    )}

                    <div className="flex gap-3 pt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          getDirections(branch);
                        }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg transition"
                      >
                        <Navigation size={14} />
                        Get Directions
                      </button>
                    </div>
                  </div>
                )}

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedBranch(
                      selectedBranch === branch.id ? null : branch.id,
                    );
                  }}
                  className="w-full mt-3 flex items-center justify-center gap-1 text-sm text-[#228296] hover:underline"
                >
                  {selectedBranch === branch.id ? "Show Less" : "View Details"}
                  <ChevronRight
                    size={14}
                    className={`transition-transform ${selectedBranch === branch.id ? "rotate-90" : ""}`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredBranches.length === 0 && (
          <div className="py-12 text-center">
            <MapPin
              size={48}
              className="mx-auto mb-4 text-gray-400 dark:text-gray-300"
            />
            <h3 className="mb-2 text-xl font-semibold text-gray-700 dark:text-gray-200">
              No locations found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search or filters
            </p>
          </div>
        )}

        {/* Map Placeholder */}
        <div className="p-6 mt-8 rounded-lg shadow-md bg-slate-50 dark:bg-gray-900">
          <h3 className="mb-3 text-lg font-bold text-gray-800 dark:text-gray-200">
            Branch Locator Map
          </h3>
          <div className="flex items-center justify-center h-64 rounded-lg bg-slate-300 dark:bg-gray-800">
            <div className="text-center">
              <MapPin
                size={32}
                className="mx-auto mb-2 text-gray-400 dark:text-gray-300"
              />
              <p className="text-gray-500 dark:text-gray-400">
                Interactive map will be integrated here
              </p>
              <p className="mt-1 text-sm text-gray-400 dark:text-gray-500">
                View all our branches on Google Maps
              </p>
            </div>
          </div>
        </div>

        {/* Service Alert */}
        <div className="flex items-start gap-3 p-4 mt-8 rounded-lg bg-yellow-50">
          <AlertCircle size={20} className="text-yellow-600 mt-0.5" />
          <div className="text-sm text-gray-700">
            <p className="font-semibold">ATM Service Alert:</p>
            <p>
              Free ATM transactions: 5 transactions/month at other bank ATMs in
              metro cities, 3 transactions in non-metro cities
            </p>
          </div>
        </div>

        {/* Emergency Contact with Working Modals */}
        <div className="p-6 mt-8 text-center text-white rounded-lg bg-gradient-to-r from-red-600 to-orange-600">
          <h3 className="mb-2 text-xl font-bold">24/7 Customer Support</h3>
          <p className="mb-4">
            For lost card or emergency assistance, call us anytime
          </p>
          <div className="flex flex-col justify-center gap-4 md:flex-row">
            <button
              onClick={() => setShowLostCardModal(true)}
              className="px-6 py-2 font-semibold text-red-600 transition bg-white rounded-lg hover:shadow-lg hover:bg-gray-100"
            >
              Report Lost Card
            </button>
            <button
              onClick={() => setShowBlockCardModal(true)}
              className="px-6 py-2 font-semibold transition border border-white rounded-lg bg-white/20 hover:bg-white/30"
            >
              Block ATM Card
            </button>
          </div>
        </div>
      </div>

      {/* Report Lost Card Modal */}
      <Modal
        isOpen={showLostCardModal}
        onClose={closeModals}
        title="Report Lost Card"
        icon={AlertTriangle}
        onSubmit={handleLostCardSubmit}
      >
        <div className="p-3 mb-2 rounded-lg bg-red-50">
          <p className="flex items-center gap-2 text-sm text-red-700">
            <AlertCircle size={16} />
            Immediate action required. Your card will be blocked instantly.
          </p>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Card Number *
          </label>
          <input
            type="text"
            name="cardNumber"
            required
            placeholder="XXXX-XXXX-XXXX-XXXX"
            value={lostCardData.cardNumber}
            onChange={handleLostCardInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Account Number *
          </label>
          <input
            type="text"
            name="accountNumber"
            required
            placeholder="Enter your account number"
            value={lostCardData.accountNumber}
            onChange={handleLostCardInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Full Name (as on card) *
          </label>
          <input
            type="text"
            name="fullName"
            required
            placeholder="Enter your full name"
            value={lostCardData.fullName}
            onChange={handleLostCardInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Reason *
          </label>
          <select
            name="reason"
            value={lostCardData.reason}
            onChange={handleLostCardInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
          >
            <option value="lost">Card Lost</option>
            <option value="stolen">Card Stolen</option>
            <option value="misplaced">Card Misplaced</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Additional Information
          </label>
          <textarea
            name="additionalInfo"
            rows="2"
            placeholder="Any additional details about the incident..."
            value={lostCardData.additionalInfo}
            onChange={handleLostCardInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 py-2.5 text-white rounded-lg bg-gradient-to-r from-red-600 to-orange-600 font-semibold hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader size={18} className="animate-spin" /> Processing...
              </>
            ) : submitSuccess ? (
              <>
                <CheckCircle size={18} /> Reported Successfully
              </>
            ) : (
              <>
                <AlertTriangle size={18} /> Report Lost Card
              </>
            )}
          </button>
          <button
            type="button"
            onClick={closeModals}
            className="px-6 py-2.5 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </Modal>

      {/* Block ATM Card Modal */}
      <Modal
        isOpen={showBlockCardModal}
        onClose={closeModals}
        title="Block ATM Card"
        icon={CreditCard}
        onSubmit={handleBlockCardSubmit}
      >
        <div className="p-3 mb-2 rounded-lg bg-orange-50">
          <p className="flex items-center gap-2 text-sm text-orange-700">
            <AlertCircle size={16} />
            Once blocked, this card cannot be unblocked. A new card will be
            issued.
          </p>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Card Number *
          </label>
          <input
            type="text"
            name="cardNumber"
            required
            placeholder="XXXX-XXXX-XXXX-XXXX"
            value={blockCardData.cardNumber}
            onChange={handleBlockCardInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Account Number *
          </label>
          <input
            type="text"
            name="accountNumber"
            required
            placeholder="Enter your account number"
            value={blockCardData.accountNumber}
            onChange={handleBlockCardInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Full Name (as on card) *
          </label>
          <input
            type="text"
            name="fullName"
            required
            placeholder="Enter your full name"
            value={blockCardData.fullName}
            onChange={handleBlockCardInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Block Reason *
          </label>
          <select
            name="reason"
            value={blockCardData.reason}
            onChange={handleBlockCardInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
          >
            <option value="stolen">Card Stolen</option>
            <option value="lost">Card Lost</option>
            <option value="compromised">
              Card Compromised (Unauthorized Transaction)
            </option>
            <option value="damaged">Card Damaged</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Additional Comments
          </label>
          <textarea
            name="additionalInfo"
            rows="2"
            placeholder="Any additional information..."
            value={blockCardData.additionalInfo}
            onChange={handleBlockCardInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 py-2.5 text-white rounded-lg bg-gradient-to-r from-red-600 to-orange-600 font-semibold hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader size={18} className="animate-spin" /> Processing...
              </>
            ) : submitSuccess ? (
              <>
                <CheckCircle size={18} /> Blocked Successfully
              </>
            ) : (
              <>
                <CreditCard size={18} /> Block Card
              </>
            )}
          </button>
          <button
            type="button"
            onClick={closeModals}
            className="px-6 py-2.5 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default BranchesAtms;
