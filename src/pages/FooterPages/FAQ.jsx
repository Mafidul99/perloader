import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle, CreditCard, Landmark, Shield, Phone, Mail, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const categories = [
    { id: 'all', name: 'All Questions', icon: <HelpCircle size={18} /> },
    { id: 'account', name: 'Account Opening', icon: <CreditCard size={18} /> },
    { id: 'banking', name: 'Digital Banking', icon: <Landmark size={18} /> },
    { id: 'security', name: 'Security', icon: <Shield size={18} /> }
  ];

  const faqs = [
    {
      id: 1,
      category: 'account',
      question: 'How do I open a savings account?',
      answer: 'You can open a savings account online through our website or mobile app. Simply click on "Open Account", fill in your details, upload KYC documents, and complete video KYC. You can also visit any of our branches with your PAN Card, Aadhar Card, and passport size photographs.'
    },
    {
      id: 2,
      category: 'account',
      question: 'What is the minimum balance required for a savings account?',
      answer: 'Our basic savings account requires a minimum balance of ₹2,500 in urban areas and ₹1,000 in rural areas. We also offer zero-balance accounts for students and senior citizens.'
    },
    {
      id: 3,
      category: 'account',
      question: 'What documents are required for account opening?',
      answer: 'You need PAN Card, Aadhar Card, passport size photographs, and address proof (Voter ID/Passport/Utility Bill). For business accounts, additional documents like GST registration and business proof are required.'
    },
    {
      id: 4,
      category: 'banking',
      question: 'How do I activate mobile banking?',
      answer: 'Download our mobile app from Google Play Store or Apple App Store. Register using your registered mobile number and account number. Set your MPIN and start banking instantly.'
    },
    {
      id: 5,
      category: 'banking',
      question: 'What is the daily limit for UPI transactions?',
      answer: 'The daily limit for UPI transactions is ₹1,00,000 per day with a maximum of 20 transactions. For bill payments, the limit is ₹50,000 per day.'
    },
    {
      id: 6,
      category: 'banking',
      question: 'How do I generate a PIN for my debit card?',
      answer: 'You can generate your debit card PIN through our mobile app, internet banking, or by visiting any ATM. Choose "Generate PIN" option, enter your registered mobile number, and follow the instructions.'
    },
    {
      id: 7,
      category: 'security',
      question: 'Is my money safe with NCOSL?',
      answer: 'Yes, your deposits are insured up to ₹5,00,000 under DICGC (Deposit Insurance and Credit Guarantee Corporation) scheme. We follow strict security protocols and RBI guidelines.'
    },
    {
      id: 8,
      category: 'security',
      question: 'What should I do if my debit card is lost?',
      answer: 'Immediately block your card through mobile banking, internet banking, or call our 24/7 customer care. Request a replacement card through the app or visit your home branch.'
    },
    {
      id: 9,
      category: 'account',
      question: 'How do I close my account?',
      answer: 'Submit an account closure request at your home branch with a written application. Ensure all pending transactions are cleared and return unused cheque books. The process takes 7-10 working days.'
    },
    {
      id: 10,
      category: 'banking',
      question: 'What are the charges for NEFT/RTGS transfers?',
      answer: 'Online NEFT/RTGS transfers are free. Branch transactions: NEFT up to ₹10,000 - ₹2.50, above ₹10,000 - ₹5; RTGS up to ₹2 lakhs - ₹15, above ₹2 lakhs - ₹20.'
    },
    {
      id: 11,
      category: 'security',
      question: 'How do I change my internet banking password?',
      answer: 'Login to internet banking, go to Settings > Change Password. Enter your current password and new password. You can also reset using "Forgot Password" option on the login page.'
    },
    {
      id: 12,
      category: 'account',
      question: 'What is the interest rate on fixed deposits?',
      answer: 'FD rates range from 5.5% to 8.5% depending on tenure. Senior citizens get an additional 0.50%. Current rates: 1 year - 7.2%, 2 years - 7.5%, 3 years - 7.8%, 5 years - 8.0%.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#228296] to-[#6f3c85] py-16">
        <div className="container relative px-4 py-10 mx-auto">
          <div className="max-w-3xl mx-auto text-center text-white">
            <HelpCircle size={48} className="mx-auto mb-2" />
            <h1 className="mb-2 text-4xl font-bold">Frequently Asked Questions</h1>
            <p className="mb-3 text-lg text-white/90">Find answers to common questions about our banking services</p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute text-gray-400 transform -translate-y-1/2 left-4 top-1/2" size={20} />
              <input
                type="text"
                placeholder="Search your question..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 pl-12 pr-4 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
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
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* FAQs List */}
        <div className="max-w-4xl mx-auto">
          {filteredFaqs.length === 0 ? (
            <div className="p-12 text-center rounded-lg shadow bg-slate-50 dark:bg-gray-900">
              <HelpCircle size={48} className="mx-auto mb-4 text-gray-400 dark:text-gray-300" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">No results found</h3>
              <p className="text-gray-600 dark:text-gray-400 ">Try searching with different keywords</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <div key={faq.id} className="overflow-hidden rounded-lg shadow-md dark:bg-gray-900 bg-slate-50">
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="flex items-center justify-between w-full px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <span className="font-semibold text-gray-800 dark:text-gray-200">{faq.question}</span>
                    {openItems[faq.id] ? <ChevronUp size={20} className='text-gray-800 dark:text-gray-200'/> : <ChevronDown size={20} className='text-gray-800 dark:text-gray-200'/>}
                  </button>
                  {openItems[faq.id] && (
                    <div className="px-6 pt-3 pb-4 text-gray-600 border-t border-gray-100 dark:text-gray-400">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Still Have Questions */}
        <div className="max-w-4xl p-8 mx-auto mt-12 text-center rounded-lg bg-gradient-to-r from-blue-50 to-purple-50">
          <MessageCircle size={32} className="mx-auto mb-4 text-[#228296]" />
          <h3 className="mb-2 text-xl font-bold text-gray-800">Still have questions?</h3>
          <p className="mb-6 text-gray-600">We're here to help you 24/7</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+917767006627" className="inline-flex items-center gap-2 px-6 py-2 bg-[#228296] text-white rounded-lg hover:bg-[#1a6b7c] transition">
              <Phone size={18} /> Call Support
            </a>
            <a href="mailto:support@ncosl.com" className="inline-flex items-center gap-2 px-6 py-2 border border-[#228296] text-[#228296] rounded-lg hover:bg-[#228296] hover:text-white transition">
              <Mail size={18} /> Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;