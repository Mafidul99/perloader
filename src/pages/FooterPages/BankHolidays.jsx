/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  ChevronRight, 
  AlertCircle,
  Clock,
  Bell,
  Download,
  Share2,
  Filter,
  X,
  CheckCircle,
  Building,
  Landmark,
  HelpCircle,
  Check,
  Phone,
  MessageCircle,
  User,
  Mail,
  CreditCard,
  Tag,
  Send,
  Settings,
  Shield,
  Users
} from 'lucide-react';

const BankHolidays = () => {
  const [selectedYear, setSelectedYear] = useState(2026);
  const [selectedState, setSelectedState] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        accountNumber: '',
        issueType: 'general',
        subject: '',
        message: '',
        priority: 'normal',
        preferredContact: 'email'
      });
      const [errors, setErrors] = useState({});

  const years = [2024, 2025, 2026, 2027];

  const states = [
    { value: 'all', label: 'All India' },
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'gujarat', label: 'Gujarat' },
    { value: 'delhi', label: 'Delhi NCR' },
    { value: 'karnataka', label: 'Karnataka' },
    { value: 'tamilnadu', label: 'Tamil Nadu' },
    { value: 'westbengal', label: 'West Bengal' },
    { value: 'up', label: 'Uttar Pradesh' }
  ];

  const holidays = {
    2026: {
      all: [
        { id: 1, name: 'Republic Day', date: '2026-01-26', day: 'Sunday', type: 'National', description: 'Celebration of the adoption of the Indian Constitution' },
        { id: 2, name: 'Maha Shivaratri', date: '2026-02-15', day: 'Sunday', type: 'Religious', description: 'Great night of Shiva' },
        { id: 3, name: 'Holi', date: '2026-03-04', day: 'Wednesday', type: 'Religious', description: 'Festival of Colors' },
        { id: 4, name: 'Good Friday', date: '2026-04-03', day: 'Friday', type: 'Religious', description: 'Christian holiday commemorating crucifixion' },
        { id: 5, name: 'Dr. Baba Saheb Ambedkar Jayanti', date: '2026-04-14', day: 'Tuesday', type: 'National', description: 'Birth anniversary of Dr. B.R. Ambedkar' },
        { id: 6, name: 'Ramzan Id / Eid-ul-Fitr', date: '2026-05-25', day: 'Monday', type: 'Religious', description: 'End of Ramadan' },
        { id: 7, name: 'Independence Day', date: '2026-08-15', day: 'Saturday', type: 'National', description: '75th Independence Day celebration' },
        { id: 8, name: 'Ganesh Chaturthi', date: '2026-09-15', day: 'Tuesday', type: 'Religious', description: 'Birth of Lord Ganesha' },
        { id: 9, name: 'Gandhi Jayanti', date: '2026-10-02', day: 'Friday', type: 'National', description: 'Birth anniversary of Mahatma Gandhi' },
        { id: 10, name: 'Dussehra', date: '2026-10-20', day: 'Tuesday', type: 'Religious', description: 'Victory of good over evil' },
        { id: 11, name: 'Diwali (Deepavali)', date: '2026-11-10', day: 'Tuesday', type: 'Religious', description: 'Festival of Lights' },
        { id: 12, name: 'Guru Nanak Jayanti', date: '2026-11-15', day: 'Sunday', type: 'Religious', description: 'Birth anniversary of Guru Nanak' },
        { id: 13, name: 'Christmas Day', date: '2026-12-25', day: 'Friday', type: 'Religious', description: 'Birth of Jesus Christ' }
      ],
      maharashtra: [
        { id: 14, name: 'Maharashtra Day', date: '2026-05-01', day: 'Friday', type: 'State', description: 'Formation day of Maharashtra' },
        { id: 15, name: 'Gudi Padwa', date: '2026-03-20', day: 'Friday', type: 'State', description: 'Maharashtrian New Year' }
      ],
      gujarat: [
        { id: 16, name: 'Gujarat Day', date: '2026-05-01', day: 'Friday', type: 'State', description: 'Formation day of Gujarat' }
      ]
    },
    2025: {
      all: [
        { id: 1, name: 'Republic Day', date: '2025-01-26', day: 'Sunday', type: 'National', description: 'Celebration of the adoption of the Indian Constitution' },
        { id: 2, name: 'Holi', date: '2025-03-14', day: 'Friday', type: 'Religious', description: 'Festival of Colors' },
        { id: 3, name: 'Independence Day', date: '2025-08-15', day: 'Friday', type: 'National', description: 'Independence Day celebration' },
        { id: 4, name: 'Diwali', date: '2025-10-20', day: 'Monday', type: 'Religious', description: 'Festival of Lights' },
        { id: 5, name: 'Christmas', date: '2025-12-25', day: 'Thursday', type: 'Religious', description: 'Birth of Jesus Christ' }
      ]
    },
    2024: {
      all: [
        { id: 1, name: 'Republic Day', date: '2024-01-26', day: 'Friday', type: 'National', description: 'Celebration of the adoption of the Indian Constitution' },
        { id: 2, name: 'Independence Day', date: '2024-08-15', day: 'Thursday', type: 'National', description: 'Independence Day celebration' }
      ]
    }
  };

  const getHolidays = () => {
    let holidayList = [];
    
    if (selectedState === 'all') {
      holidayList = [...(holidays[selectedYear]?.all || [])];
    } else {
      holidayList = [
        ...(holidays[selectedYear]?.all || []),
        ...(holidays[selectedYear]?.[selectedState] || [])
      ];
    }
    
    // Sort by date
    return holidayList.sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  const getHolidayTypeColor = (type) => {
    switch(type) {
      case 'National': return 'bg-orange-100 text-orange-700';
      case 'Religious': return 'bg-purple-100 text-purple-700';
      case 'State': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  };

  const downloadHolidayList = () => {
    const holidays = getHolidays();
    const csvContent = holidays.map(h => `${h.name},${h.date},${h.day},${h.type}`).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bank-holidays-${selectedYear}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const upcomingHolidays = getHolidays().filter(h => new Date(h.date) >= new Date()).slice(0, 3);



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    else if (formData.fullName.length < 3) newErrors.fullName = 'Name must be at least 3 characters';
    
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be 10 digits';
    
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    else if (formData.subject.length < 5) newErrors.subject = 'Subject must be at least 5 characters';
    
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';
    
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
      console.log('Support ticket submitted:', {
        ...formData,
        timestamp: new Date().toISOString(),
        ticketId: 'TKT' + Math.floor(Math.random() * 1000000)
      });
      
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after 3 seconds and close modal
      setTimeout(() => {
        setSubmitSuccess(false);
        setIsSupportModalOpen(false);
        resetForm();
      }, 3000);
    }, 2000);
  };
  
  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      accountNumber: '',
      issueType: 'general',
      subject: '',
      message: '',
      priority: 'normal',
      preferredContact: 'email'
    });
    setErrors({});
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'urgent': return 'text-orange-600 bg-orange-50';
      default: return 'text-blue-600 bg-blue-50';
    }
  };


  const issueTypes = [
    { value: 'general', label: 'General Query', icon: <HelpCircle size={16} /> },
    { value: 'technical', label: 'Technical Issue', icon: <Settings size={16} /> },
    { value: 'transaction', label: 'Transaction Issue', icon: <CreditCard size={16} /> },
    { value: 'security', label: 'Security Concern', icon: <Shield size={16} /> },
    { value: 'account', label: 'Account Related', icon: <Users size={16} /> },
    { value: 'complaint', label: 'Complaint', icon: <AlertCircle size={16} /> }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#228296] via-[#2c9cb3] to-[#6f3c85] py-12">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative px-4 py-10 mx-auto">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-3 py-2 mb-2 text-sm font-semibold rounded-full bg-gradient-to-r from-[#228296] to-[#6f3c85] backdrop-blur-sm">
              <Calendar size={16} className="mr-2" />
              Plan Your Banking
            </div>
            <h1 className="mb-2 text-3xl font-bold md:text-4xl lg:text-5xl">
              Bank Holidays {selectedYear}
            </h1>
            <p className="mb-3 text-lg text-white/90">
              Plan your banking activities around holidays. Our branches remain closed on these days.
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

      <div className="container px-4 py-8 mx-auto">
        {/* Upcoming Holidays Alert */}
        {upcomingHolidays.length > 0 && (
          <div className="p-4 mb-8 border-l-4 border-orange-500 rounded-lg shadow-sm bg-gradient-to-r from-yellow-50 to-orange-50">
            <div className="flex items-start gap-3">
              <Bell className="text-orange-500 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">Upcoming Holidays</h3>
                <div className="flex flex-wrap gap-3 mt-2">
                  {upcomingHolidays.map((holiday, index) => (
                    <span key={index} className="text-sm text-gray-600">
                      {holiday.name}: {formatDate(holiday.date)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filters Bar */}
        <div className="p-4 mb-8 rounded-lg shadow-md dark:bg-gray-900 bg-slate-50">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {/* Year Selector */}
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300">
                <Calendar size={18} className="text-[#228296] " />
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                  className="font-medium bg-transparent outline-none"
                >
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              {/* State Selector */}
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300">
                <MapPin size={18} className="text-[#228296]" />
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="font-medium bg-transparent outline-none"
                >
                  {states.map(state => (
                    <option key={state.value} value={state.value}>{state.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={downloadHolidayList}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 transition bg-gray-100 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 dark:bg-gray-700 dark:text-gray-300"
              >
                <Download size={16} />
                Download CSV
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 transition bg-gray-100 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 dark:bg-gray-700 dark:text-gray-300">
                <Share2 size={16} />
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Holiday Statistics */}
        <div className="grid gap-4 mb-8 md:grid-cols-3">
          <div className="p-4 text-center rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50">
            <div className="text-2xl font-bold text-[#228296]">{getHolidays().length}</div>
            <div className="text-sm text-gray-600">Total Holidays</div>
          </div>
          <div className="p-4 text-center rounded-lg bg-gradient-to-r from-purple-50 to-pink-50">
            <div className="text-2xl font-bold text-[#6f3c85]">
              {getHolidays().filter(h => h.type === 'National').length}
            </div>
            <div className="text-sm text-gray-600">National Holidays</div>
          </div>
          <div className="p-4 text-center rounded-lg bg-gradient-to-r from-orange-50 to-red-50">
            <div className="text-2xl font-bold text-orange-600">
              {getHolidays().filter(h => new Date(h.date).getDay() === 0).length}
            </div>
            <div className="text-sm text-gray-600">Sunday Holidays</div>
          </div>
        </div>

        {/* Holidays List */}
        <div className="overflow-hidden rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Holiday Name</th>
                  <th className="px-6 py-3 text-left">Date</th>
                  <th className="px-6 py-3 text-left">Day</th>
                  <th className="px-6 py-3 text-left">Type</th>
                  <th className="px-6 py-3 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                {getHolidays().map((holiday, index) => (
                  <tr key={holiday.id} className={`border-b border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${new Date(holiday.date) < new Date() ? 'opacity-60' : ''}`}>
                    <td className="px-6 py-4 font-medium text-gray-800 dark:text-gray-200">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#228296] rounded-full"></div>
                        {holiday.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{formatDate(holiday.date)}</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{holiday.day}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getHolidayTypeColor(holiday.type)}`}>
                        {holiday.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">{holiday.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Important Notes */}
        <div className="flex items-start gap-3 p-4 mt-8 rounded-lg bg-blue-50 dark:bg-gray-900">
          <AlertCircle size={20} className="text-blue-600 mt-0.5" />
          <div className="text-sm text-gray-700 dark:text-gray-200">
            <p className="font-semibold">Important Notes:</p>
            <ul className="mt-1 space-y-1 list-disc list-inside">
              <li>Branch operations remain closed on all gazetted holidays</li>
              <li>Digital banking services (Mobile App, Net Banking) are available 24/7</li>
              <li>ATM services continue to operate on all holidays</li>
              <li>Holidays may vary by state. Please check with your local branch for exact dates</li>
              <li>Some holidays may be declared by state government at short notice</li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 p-6 bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-lg text-white text-center">
          <h3 className="mb-2 text-xl font-bold">Need Assistance?</h3>
          <p className="mb-4">Our customer support is available 24/7 for any banking needs</p>
          <button 
            onClick={() => setIsSupportModalOpen(true)}
          className="px-6 py-2 bg-white text-[#228296] rounded-lg font-semibold hover:shadow-lg transition">
            Contact Support
          </button>
        </div>
      </div>



      {/* Contact Support Modal */}
      {isSupportModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={() => setIsSupportModalOpen(false)}></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
            
            <div className="inline-block overflow-hidden text-left align-bottom transition-all transform rounded-lg shadow-xl bg-slate-50 dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
              {/* Modal Header */}
              <div className="relative px-6 py-4 bg-gradient-to-r from-[#228296] to-[#6f3c85]">
                <button
                  onClick={() => setIsSupportModalOpen(false)}
                  className="absolute text-white transition-colors right-4 top-4 hover:text-gray-200"
                >
                  <X size={24} />
                </button>
                <div className="flex items-center gap-3">
                  <HelpCircle size={28} className="text-white" />
                  <div>
                    <h2 className="text-2xl font-bold text-white">Customer Support</h2>
                    <p className="text-sm text-white/90">We're here to help you 24/7</p>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              {submitSuccess ? (
                <div className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-green-100 rounded-full">
                    <Check size={40} className="text-green-600" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-200">Ticket Created Successfully!</h3>
                  <p className="text-gray-600 dark:text-gray-300">Our support team will get back to you within 24 hours.</p>
                  <div className="p-4 mt-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <p className="text-sm text-gray-800 dark:text-gray-400">Support ticket has been sent to your registered email</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="px-6 py-4">
                  <div className="space-y-4">
                    {/* Quick Contact Options */}
                    <div className="grid grid-cols-2 gap-3 p-3 rounded-lg bg-gray-50">
                      <div className="text-center">
                        <Phone size={20} className="mx-auto mb-1 text-[#228296]" />
                        <p className="text-xs text-gray-600">Toll Free</p>
                        <p className="text-sm font-semibold">1800 123 4567</p>
                      </div>
                      <div className="text-center">
                        <MessageCircle size={20} className="mx-auto mb-1 text-[#228296]" />
                        <p className="text-xs text-gray-600">WhatsApp</p>
                        <p className="text-sm font-semibold">+91 98765 43210</p>
                      </div>
                    </div>

                    {/* Personal Information */}
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User size={18} className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="Enter your full name"
                          />
                        </div>
                        {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
                      </div>

                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail size={18} className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300. ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="you@example.com"
                          />
                        </div>
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone size={18} className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            maxLength="10"
                            className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296]   dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="9876543210"
                          />
                        </div>
                        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                      </div>

                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Account Number (Optional)</label>
                        <div className="relative">
                          <CreditCard size={18} className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                          <input
                            type="text"
                            name="accountNumber"
                            value={formData.accountNumber}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
                            placeholder="Enter your account number"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Issue Type and Priority */}
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Issue Type</label>
                        <select
                          name="issueType"
                          value={formData.issueType}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
                        >
                          {issueTypes.map(type => (
                            <option key={type.value} value={type.value}>{type.label}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Priority</label>
                        <select
                          name="priority"
                          value={formData.priority}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] ${getPriorityColor(formData.priority)} dark:bg-gray-800 dark:border-gray-600`}
                        >
                          <option value="low">Low - General query</option>
                          <option value="normal">Normal - Need assistance</option>
                          <option value="high">High - Urgent issue</option>
                          <option value="urgent">Urgent - Critical problem</option>
                        </select>
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Tag size={18} className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] ${errors.subject ? 'border-red-500' : 'border-gray-300'} dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300`}
                          placeholder="Brief description of your issue"
                        />
                      </div>
                      {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228296] ${errors.message ? 'border-red-500' : 'border-gray-300'} dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300`}
                        placeholder="Please provide detailed information about your issue..."
                      ></textarea>
                      {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                    </div>

                    {/* Preferred Contact Method */}
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Preferred Contact Method</label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 dark:text-gray-300">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            checked={formData.preferredContact === 'email'}
                            onChange={handleInputChange}
                            className="text-[#228296]"
                          />
                          <span className="text-sm">Email</span>
                        </label>
                        <label className="flex items-center gap-2 dark:text-gray-300">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="phone"
                            checked={formData.preferredContact === 'phone'}
                            onChange={handleInputChange}
                            className="text-[#228296]"
                          />
                          <span className="text-sm">Phone</span>
                        </label>
                        <label className="flex items-center gap-2 dark:text-gray-300">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="whatsapp"
                            checked={formData.preferredContact === 'whatsapp'}
                            onChange={handleInputChange}
                            className="text-[#228296]"
                          />
                          <span className="text-sm">WhatsApp</span>
                        </label>
                      </div>
                    </div>

                    {/* Support Info */}
                    <div className="p-3 rounded-lg bg-blue-50">
                      <div className="flex items-start gap-2">
                        <Clock size={16} className="mt-0.5 text-blue-600" />
                        <div className="text-xs text-blue-800">
                          <p className="font-semibold">Response Time:</p>
                          <p>Priority requests: 2-4 hours | Normal requests: 24 hours</p>
                          <p className="mt-1">Our support team is available 24/7 to assist you</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Modal Footer */}
                  <div className="flex justify-end gap-3 pt-4 mt-6 border-t">
                    <button
                      type="button"
                      onClick={() => setIsSupportModalOpen(false)}
                      className="px-4 py-2 text-gray-700 transition-all bg-gray-100 rounded-lg hover:bg-gray-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-2 text-white transition-all bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Submit Ticket
                        </>
                      )}
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

export default BankHolidays;