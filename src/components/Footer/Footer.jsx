import React from 'react';
import { MapPin, Phone, Mail, ExternalLink, Clock, Shield, MoveRight  } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import FooterLogo from '../../assets/OQPX091.png';


const Footer = () => {
  const currentYear = new Date().getFullYear();

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

  // eslint-disable-next-line no-undef
  const bankName = process.env.VITE_APP_WEB_TITLE || 'NTCCSL';

  return (
    <footer className="text-white bg-gray-900">
      {/* Main Footer */}
      <div className="container px-4 py-12 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & About Section */}
          <div>
            <div className="flex items-center mb-4 space-x-2">
              <div className="flex items-center justify-center">
                <img src={FooterLogo} alt={bankName} className="w-12 h-12 rounded-full" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                {bankName}
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
                    {/* <MoveRight size={12} className=" bg-[#228296] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" /> */}
                    <MoveRight  size={12} className="transition-opacity opacity-0 group-hover:opacity-100" />
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
                    <MoveRight  size={12} className="transition-opacity opacity-0 group-hover:opacity-100" />
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
                  <a href="tel:+917767006627" className="block text-sm text-gray-400 transition hover:text-white">
                    +91 7767006627
                  </a>
                  <a href="tel:+912402345678" className="text-sm text-gray-400 transition hover:text-white">
                    +91 240 2345678
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail size={18} className="text-[#228296] group-hover:scale-110 transition-transform" />
                <div>
                  <a href="mailto:info@ncosl.com" className="block text-sm text-gray-400 transition hover:text-white">
                    info@ncosl.com
                  </a>
                  <a href="mailto:support@ncosl.com" className="text-xs text-gray-400 transition hover:text-white">
                    support@ncosl.com
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

        {/* Bottom Bar */}
        <div className="pt-8 mt-10 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                © {currentYear} Nofino Thrift & Credit Co-Operative Society Ltd. All Rights Reserved.
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
              {/* <Shield size={16} className="text-green-500" /> */}
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
  );
};

export default Footer;