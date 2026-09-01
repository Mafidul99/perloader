/* eslint-disable react-hooks/static-components */
import React, { useState } from 'react';
import { MapPin, Phone, Mail, ExternalLink, Clock, Shield, MoveRight, X } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaApple, FaAndroid, FaUserCircle, FaUsers } from 'react-icons/fa';
import FooterLogo from '../../assets/OQPX091.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Accounts', href: '/accounts' },
    { name: 'Loans', href: '/loans' },
    { name: 'Digital Services', href: '/digital-services' },
    { name: 'Schemes', href: '/schemes' },
    { name: 'Fixed Deposit', href: '/fixed-deposit' },
    { name: 'Recurring Deposit', href: '/recurring-deposit' },
  ];

  const socialLinks = [
    {
      icon: FaFacebook,
      href: '/',
      color: '#1877f2',
      label: 'Facebook'
    },
    {
      icon: FaTwitter,
      href: '/',
      color: '#1da1f2',
      label: 'Twitter'
    },
    {
      icon: FaInstagram,
      href: '/',
      color: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
      label: 'Instagram'
    },
    {
      icon: FaYoutube,
      href: '/',
      color: '#ff0000',
      label: 'YouTube'
    },
    {
      icon: FaLinkedin,
      href: '/',
      color: '#0077b5',
      label: 'LinkedIn'
    },
  ];

  const usefulLinks = [
    { name: 'IFSC Codes', href: '/ifsc-codes' },
    { name: 'Bank Holidays', href: '/bank-holidays' },
    { name: 'Careers', href: '/careers' },
    { name: 'Branches & ATMs', href: '/branches' },
    { name: 'Customer Reviews', href: '/reviews' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'FAQs', href: '/faqs' },
  ];

  const bankingServices = [
    { name: 'Savings Account', href: '/savings-account' },
    { name: 'Current Account', href: '/current-account' },
    { name: 'Fixed Deposit', href: '/fixed-deposit' },
    { name: 'Recurring Deposit', href: '/recurring-deposit' },
    { name: 'Personal Loan', href: '/personal-loan' },
    { name: 'Gold Loan', href: '/gold-loan' },
    { name: 'Business Loan', href: '/business-loan' },
    { name: 'NRI Services', href: '/nri-services' },
  ];

  const handleSocialClick = (social, e) => {
    e.preventDefault();
    window.open(social.href, '_blank', 'noopener,noreferrer');
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openAppStore = (url) => {
    window.open(url, '_blank');
  };

  const bankNameIcon = import.meta.env.VITE_APP_WEB_TITLE || 'NTCCSL';
  const Fullname = import.meta.env.VITE_APP_FULL_NAME || 'Nofino Thrift & Credit Cooperative Society Ltd.';


  const memberAppStores =  {
    android: import.meta.env.VITE_APP_APK_MEMBERS_URL || '../../../public/mobAPK/Nofino_Member_1.0.0.2.apk',
    ios: import.meta.env.VITE_APP_APK_MEMBERS_URL || '../../../public/mobAPK/Nofino_Member_1.0.0.2.apk',
  };

  const collectorAppStores = {
    android: import.meta.env.VITE_APP_APK_COLLECTOR_URL || '../../../public/mobAPK/Nofino_Collector_1.0.0.2.apk',
    ios: import.meta.env.VITE_APP_APK_COLLECTOR_URL || '../../../public/mobAPK/Nofino_Collector_1.0.0.2.apk',
  };

  // Mobile Banking Modal Component
  const MobileBankingModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-lg shadow-2xl dark:bg-gray-900 bg-slate-50 animate-slideUp">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white rounded-t-lg">
          <div className="flex items-center gap-2">
            <FaAndroid size={24} />
            <h2 className="text-xl font-bold">Mobile Banking</h2>
          </div>
          <button
            onClick={closeModal}
            className="text-white transition-transform hover:rotate-90 hover:scale-110"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {/* Member App Section */}
          <div className="mb-8 p-4 rounded-lg bg-gradient-to-br from-[#228296]/5 to-[#6f3c85]/5 border border-[#228296]/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-full bg-[#228296]/10">
                <FaUserCircle size={32} className="text-[#228296]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                  Member App
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">For Customers</p>
              </div>
              <span className="px-3 py-1 ml-auto text-xs font-semibold text-white bg-green-500 rounded-full animate-pulse">
                Available
              </span>
            </div>
            
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
              Access your accounts, transfer funds, pay bills, and manage your finances on the go.
            </p>
            
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                onClick={() => openAppStore(memberAppStores.android)}
                className="flex items-center justify-center gap-3 px-4 py-3 text-white transition-all rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-lg hover:scale-[1.02] transform active:scale-95"
              >
                <FaAndroid size={24} />
                <div className="text-left">
                  <div className="text-xs font-normal opacity-90">Download for</div>
                  <div className="font-semibold">Android</div>
                </div>
              </button>
              
              <button
                onClick={() => openAppStore(memberAppStores.ios)}
                className="flex items-center justify-center gap-3 px-4 py-3 text-white transition-all bg-gray-800 rounded-lg hover:bg-gray-700 hover:shadow-lg hover:scale-[1.02] transform dark:bg-gray-700 dark:hover:bg-gray-600 active:scale-95"
              >
                <FaApple size={24} />
                <div className="text-left">
                  <div className="text-xs font-normal opacity-90">Download for</div>
                  <div className="font-semibold">iOS</div>
                </div>
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 text-gray-500 bg-slate-50 dark:bg-gray-900 dark:text-gray-400">
                Staff Access Only
              </span>
            </div>
          </div>

          {/* Collector App Section */}
          <div className="p-4 rounded-lg bg-gradient-to-br from-[#6f3c85]/5 to-[#228296]/5 border border-[#6f3c85]/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-full bg-[#6f3c85]/10">
                <FaUsers size={32} className="text-[#6f3c85]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                  Collector App
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">For Field Staff</p>
              </div>
              <span className="px-3 py-1 ml-auto text-xs font-semibold text-white bg-blue-500 rounded-full">
                Staff Only
              </span>
            </div>
            
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
              Field collection, customer verification, payment tracking, and real-time reporting for collection officers.
            </p>
            
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                onClick={() => openAppStore(collectorAppStores.android)}
                className="flex items-center justify-center gap-3 px-4 py-3 text-white transition-all rounded-lg bg-gradient-to-r from-[#6f3c85] to-[#228296] hover:shadow-lg hover:scale-[1.02] transform active:scale-95"
              >
                <FaAndroid size={24} />
                <div className="text-left">
                  <div className="text-xs font-normal opacity-90">Download for</div>
                  <div className="font-semibold">Android</div>
                </div>
              </button>
              
              <button
                onClick={() => openAppStore(collectorAppStores.ios)}
                className="flex items-center justify-center gap-3 px-4 py-3 text-white transition-all bg-gray-800 rounded-lg hover:bg-gray-700 hover:shadow-lg hover:scale-[1.02] transform dark:bg-gray-700 dark:hover:bg-gray-600 active:scale-95"
              >
                <FaApple size={24} />
                <div className="text-left">
                  <div className="text-xs font-normal opacity-90">Download for</div>
                  <div className="font-semibold">iOS</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <footer className="text-white bg-gray-900">
        {/* Main Footer */}
        <div className="container px-4 py-12 mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Logo & About Section */}
            <div>
              <div className="flex items-center mb-4 space-x-2">
                <div className="flex items-center justify-center">
                  <img src={FooterLogo} alt={bankNameIcon} className="w-12 h-12 rounded-full" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                  {bankNameIcon}
                </span>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-gray-400">
                Your trusted financial partner serving you 365 days a year with commitment,
                consistency, and innovative banking solutions.
              </p>

              {/* Banking Hours */}
              <div className="p-3 mb-4 bg-gray-800 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Clock size={16} className="text-[#228296]" />
                  <span className="text-sm font-semibold">Banking Hours</span>
                </div>
                <p className="text-xs text-gray-400">
                  Monday - Friday: 10:00 AM - 4:00 PM<br />
                  Saturday: 10:00 AM - 3:00 PM<br />
                  Sunday: Closed
                </p>
              </div>

              {/* Social Links with working URLs */}
              <div>
                <h4 className="mb-3 text-sm font-semibold text-gray-300">Follow Us</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      onClick={(e) => handleSocialClick(social, e)}
                      className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full hover:scale-110 hover:shadow-lg"
                      style={{
                        background: social.color,
                        boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                      }}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon size={18} className="text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
           
            {/* Quick Links */}
            <div>
              <h3 className="relative mb-4 text-lg font-semibold">
                Quick Links
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#228296] to-[#6f3c85] mt-2"></span>
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#228296] transition-all duration-300 text-sm flex items-center gap-2 group"
                    >
                      <MoveRight size={12} className="transition-opacity opacity-0 group-hover:opacity-100" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Banking Services */}
            <div>
              <h3 className="relative mb-4 text-lg font-semibold">
                Banking Services
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#228296] to-[#6f3c85] mt-2"></span>
              </h3>
              <ul className="space-y-2">
                {bankingServices.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-gray-400 hover:text-[#228296] transition-all duration-300 text-sm flex items-center gap-2 group"
                    >
                      <MoveRight size={12} className="transition-opacity opacity-0 group-hover:opacity-100" />
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Useful Links */}
            <div>
              <h3 className="relative mb-4 text-lg font-semibold">
                Get in Touch
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#228296] to-[#6f3c85] mt-2"></span>
              </h3>

              {/* Contact Details */}
              <div className="mb-6 space-y-3">
                <div className="flex items-start space-x-3 group">
                  <MapPin size={18} className="text-[#228296] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <p className="text-sm leading-relaxed text-gray-400">
                    Mandia Mandia,<br />
                    Near SBI Bank, Tal. Dist.<br />
                    Barpeta. Assam, India - 781308
                  </p>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Phone size={18} className="text-[#6f3c85] group-hover:scale-110 transition-transform" />
                  <div>
                    <a href="tel:+919282956845" className="block text-sm text-gray-400 transition hover:text-white">
                      +91 9282956845
                    </a>
                    <a href="tel:+919282956846" className="text-sm text-gray-400 transition hover:text-white">
                      +91 9282956846
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Mail size={18} className="text-[#228296] group-hover:scale-110 transition-transform" />
                  <div>
                    <a href="mailto:cmd@ntccsl.in" className="block text-sm text-gray-400 transition hover:text-white">
                      cmd@ntccsl.in
                    </a>
                    <a href="mailto:support@ntccsl.in" className="text-xs text-gray-400 transition hover:text-white">
                      support@ntccsl.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Useful Links */}
              <h3 className="mb-3 font-semibold text-gray-300 text-md">Useful Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {usefulLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-400 hover:text-[#228296] transition-all duration-300 text-xs flex items-center gap-1"
                  >
                    <ExternalLink size={10} />
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile App Promotion - Clickable to open modal */}
          <div className="py-8 mt-8 rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-2xl transition-all duration-500"
          >
            <div className="px-6 text-center">
              <h3 className="mb-2 text-xl font-bold text-white">Download Our Mobile App</h3>
              <p className="mb-6 text-sm text-gray-300">
                Banking at your fingertips. Download our app for seamless mobile banking experience.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
                <button 
                  onClick={openModal}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 bg-black rounded-lg hover:bg-gray-800 hover:scale-105">
                  <FaApple size={20} />
                  <span>App Store</span>
                </button>
                <button 
                  onClick={openModal}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#228296] rounded-lg hover:bg-[#1a6680] transition-all duration-300 hover:scale-105">
                  <FaAndroid size={20} />
                  <span>Google Play</span>
                </button>
              </div>
              <p className="mt-4 text-xs text-white/70">
                👆 Click anywhere to view Member & Collector apps
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 mt-10 border-t border-gray-800">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-400">
                  © {currentYear} {Fullname} All Rights Reserved.
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Powered by Nofino Rural Finance Pvt. Ltd.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 text-xs">
                <a href="/disclaimer" className="text-gray-400 hover:text-[#228296] transition">Disclaimer</a>
                <span className="text-gray-600">|</span>
                <a href="/privacy-policy" className="text-gray-400 hover:text-[#228296] transition">Privacy Policy</a>
                <span className="text-gray-600">|</span>
                <a href="/terms" className="text-gray-400 hover:text-[#228296] transition">Terms & Conditions</a>
                <span className="text-gray-600">|</span>
                <a href="/sitemap" className="text-gray-400 hover:text-[#228296] transition">Sitemap</a>
              </div>

              {/* Security Badge */}
              <div className="flex items-center">
                <img src="./secured1.png" alt="Security Badge" className="w-12 h-12" />
                <span className="text-xs text-gray-400">100% Secure Banking</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 p-3 bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 opacity-0 invisible group-hover:opacity-100"
          id="scrollToTop"
        >
          ↑
        </button>
      </footer>

      {/* Mobile Banking Modal */}
      {isModalOpen && <MobileBankingModal />}

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Footer;