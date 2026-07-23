import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Menu, X, Sun, Moon, Phone, Mail, MapPin, ChevronDown, ChevronUp } from 'lucide-react';



const Navbar = () => {
  // eslint-disable-next-line no-unused-vars
  const { darkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

  

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', submenu: true, submenuLinks: [
        { name: 'About Us', href: 'about' },
        { name: 'Our Story', href: 'our-story' },
        { name: 'Mission & Vision', href: 'mission-vission' },
        { name: 'Chairman Message', href: 'chirman-message' },
        { name: 'Our Team', href: 'our-team' },

    ] },
    {
      name: 'Accounts',
      submenu: true,
      submenuLinks: [
        { name: 'Savings Account', href: 'savings-account' },
        { name: 'Current Account', href: 'current-account' },
        { name: 'Fixed Deposit', href: 'fixed-deposit' },
      ],
    },
    { name: 'Loans', submenu: true, submenuLinks: [
        { name: 'Personal Loan', href: 'personal-loan' },
        {name: 'Business Loan', href: 'business-loan' },
        { name: 'Education Loan', href: 'education-loan' },
        { name: 'Gold Loan', href: 'gold-loan' },
        { name: 'Home Loan', href: 'home-loan' },
        { name: 'Auto Loan', href: 'auto-loan' },
      ] },
    { name: 'Digital Services', submenu: true, submenuLinks: [
        { name: 'Mobile Banking', href: 'mobile-banking' },
        { name: 'Internet Banking', href: 'internet-banking' },
        { name: 'UPI / QR Pay', href: 'upiqr-pay' },
        { name: 'SMS Banking', href: 'sms-banking' },
        { name: 'WhatsApp Banking', href: 'whatsapp-banking' },
    ] },
    {
      name: 'Deposit',
      submenu: true,
      submenuLinks: [
        { name: 'FD Interest Rate', href: 'fixed-Interest' },
        { name: 'RD Interest Rate', href: 'recurring-deposit' },
      ],
    },
    { name: 'Maturity Projection', submenu: true, submenuLinks: [
        { name: 'Maturity', href: 'maturity-projection' },
        { name: 'Daily', href: 'daily-account' },
        { name: 'Weekly', href: 'weekly-account' },
        { name: 'Monthly', href: 'monthly-account' },
      ] },
    
    { name: 'Contact', href: 'contact' },
  ];

  const toggleDropdown = (dropdownName) => {
    if (openDropdown === dropdownName) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdownName);
    }
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null); // Close any open dropdown when closing mobile menu
  };

  return (
    <>
    <header className={`w-full z-50 p-2.5 transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-[#6f3c85] to-[#228296] shadow-md'}`}>
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <nav className="items-center hidden space-x-6 md:flex">
            {navLinks.map((link) => (
              !link.submenu ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white transition-colors dark:text-gray-300 dark:hover:text-gray-400"
                >
                  {link.name}
                </a>
              ) : (
                <div key={link.name} className="relative">
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className="flex items-center space-x-1 text-white transition-colors dark:text-gray-300 dark:hover:text-gray-400 focus:outline-none"
                  >
                    <span>{link.name}</span>
                    {openDropdown === link.name ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {openDropdown === link.name && (
                    <div className="absolute left-0 mt-2 bg-white rounded-md shadow-lg min-w-[200px] z-50">
                      {link.submenuLinks.map((sublink) => (
                        <a
                          key={sublink.name}
                          href={sublink.href}
                          className="block px-4 py-2 text-gray-800 rounded-md hover:bg-gray-100"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {sublink.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-600 transition bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button> */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 bg-gray-100 rounded-lg md:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="z-50 pb-4 mt-4 space-y-3 md:hidden">
            {navLinks.map((link) => (
              !link.submenu ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="block text-gray-100 dark:text-gray-300 hover:text-[#228296] transition py-2"
                >
                  {link.name}
                </a>
              ) : (
                <div key={link.name} className="space-y-2">
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className="flex items-center justify-between w-full text-gray-100 dark:text-gray-300 hover:text-[#228296] transition py-2"
                  >
                    <span>{link.name}</span>
                    {openDropdown === link.name ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {openDropdown === link.name && (
                    <div className="pl-4 space-y-2 border-l-2 border-white/30">
                      {link.submenuLinks.map((sublink) => (
                        <a
                          key={sublink.name}
                          href={sublink.href}
                          onClick={closeMobileMenu}
                          className="block text-gray-100 dark:text-gray-300 hover:text-[#228296] transition py-1"
                        >
                          {sublink.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )
            ))}
            {/* <a
              href="#open-account"
              onClick={closeMobileMenu}
              className="block px-6 py-2 rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white font-semibold text-center"
            >
              Open Account
            </a> */}
          </div>
        )}
      </div>
    </header>
    
    
    </>
  );
};

export default Navbar;