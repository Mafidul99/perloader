import React, { useState } from 'react';
import { 
  Home, 
  PiggyBank, 
  Building2, 
  TrendingUp, 
  CalendarDays, 
  FileText, 
  HelpCircle, 
  Phone, 
  Mail,
  Shield,
  CreditCard,
  Users,
  Briefcase,
  Search,
  ChevronRight,
  MapPin,
  Globe,
  Smartphone,
  Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const sitemapSections = [
    {
      title: "Personal Banking",
      icon: <Home size={20} />,
      links: [
        { name: "Savings Account", path: "/savings-account", description: "Open savings account with high interest" },
        { name: "Current Account", path: "/current-account", description: "Business banking solutions" },
        { name: "Fixed Deposit", path: "/fixed-deposit", description: "FD interest rates up to 8.5%" },
        { name: "Recurring Deposit", path: "/recurring-deposit", description: "Regular savings with good returns" },
        { name: "FD Interest Rates", path: "/fd-interest-rate", description: "Check FD rates by tenure" },
        { name: "RD Interest Rates", path: "/rd-interest-rate", description: "RD rates for all tenures" }
      ]
    },
    {
      title: "Loans",
      icon: <Briefcase size={20} />,
      links: [
        { name: "Personal Loan", path: "/personal-loan", description: "Quick personal loans up to ₹25 Lakhs" },
        { name: "Gold Loan", path: "/gold-loan", description: "Loan against gold ornaments" },
        { name: "Home Loan", path: "/home-loan", description: "Dream home financing" },
        { name: "Car Loan", path: "/car-loan", description: "New & used car loans" },
        { name: "Business Loan", path: "/business-loan", description: "Funds for business growth" },
        { name: "Loan Against FD", path: "/loan-against-fd", description: "Instant loan against FD" }
      ]
    },
    {
      title: "Digital Services",
      icon: <Smartphone size={20} />,
      links: [
        { name: "Mobile Banking", path: "/mobile-banking", description: "Banking on your fingertips" },
        { name: "Internet Banking", path: "/internet-banking", description: "Online banking portal" },
        { name: "UPI Payments", path: "/upi-payments", description: "Instant money transfer" },
        { name: "Bill Payments", path: "/bill-payments", description: "Pay bills online" },
        { name: "Card Services", path: "/card-services", description: "Debit card management" },
        { name: "E-Statements", path: "/e-statements", description: "Download account statements" }
      ]
    },
    {
      title: "About Us",
      icon: <Users size={20} />,
      links: [
        { name: "Company Overview", path: "/about", description: "About NCOSL" },
        { name: "Our Leadership", path: "/leadership", description: "Board of Directors" },
        { name: "Mission & Vision", path: "/mission-vision", description: "Our core values" },
        { name: "Awards & Recognition", path: "/awards", description: "Industry achievements" },
        { name: "CSR Initiatives", path: "/csr", description: "Corporate social responsibility" },
        { name: "Media Center", path: "/media", description: "News and press releases" }
      ]
    },
    {
      title: "Resources",
      icon: <HelpCircle size={20} />,
      links: [
        { name: "FAQs", path: "/faqs", description: "Frequently asked questions" },
        { name: "Interest Rates", path: "/interest-rates", description: "Current interest rates" },
        { name: "Service Charges", path: "/service-charges", description: "Fee structure" },
        { name: "Forms & Applications", path: "/forms", description: "Downloadable forms" },
        { name: "Calculators", path: "/calculators", description: "Financial calculators" },
        { name: "Customer Reviews", path: "/reviews", description: "What customers say" }
      ]
    },
    {
      title: "Legal",
      icon: <Shield size={20} />,
      links: [
        { name: "Disclaimer", path: "/disclaimer", description: "Legal disclaimer" },
        { name: "Privacy Policy", path: "/privacy-policy", description: "Privacy practices" },
        { name: "Terms & Conditions", path: "/terms-conditions", description: "Terms of service" },
        { name: "Sitemap", path: "/sitemap", description: "Website sitemap" },
        { name: "Cookie Policy", path: "/cookie-policy", description: "Cookie usage" },
        { name: "Grievance Redressal", path: "/grievance", description: "Complaint handling" }
      ]
    },
    {
      title: "Contact",
      icon: <Phone size={20} />,
      links: [
        { name: "Contact Us", path: "/contact", description: "Get in touch" },
        { name: "Branch Locator", path: "/branches", description: "Find nearest branch" },
        { name: "ATM Locator", path: "/atms", description: "Find ATMs" },
        { name: "Customer Support", path: "/support", description: "24/7 customer care" },
        { name: "Feedback", path: "/feedback", description: "Share your feedback" },
        { name: "Careers", path: "/careers", description: "Join our team" }
      ]
    }
  ];

  const filteredSections = sitemapSections.map(section => ({
    ...section,
    links: section.links.filter(link => 
      link.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      link.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.links.length > 0);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#228296] to-[#6f3c85]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative px-4 pt-10 pb-24 mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 mb-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-[#228296] to-[#6f3c85] backdrop-blur-sm">
            <Globe size={16} className="mr-2" />
            Website Navigation
          </div>
          <h1 className="mb-2 text-4xl font-bold text-white md:text-5xl">Sitemap</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            Find everything you need on our website - complete navigation guide
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mt-8">
            <div className="relative">
              <Search className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" size={20} />
              <input
                type="text"
                placeholder="Search pages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6f3c85]"
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
        {/* Quick Stats */}
        <div className="grid gap-4 mb-12 md:grid-cols-4">
          <div className="p-4 text-center rounded-lg shadow dark:bg-gray-900 bg-slate-50">
            <div className="text-2xl font-bold text-[#228296]">{sitemapSections.length}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Main Sections</div>
          </div>
          <div className="p-4 text-center rounded-lg shadow dark:bg-gray-900 bg-slate-50">
            <div className="text-2xl font-bold text-[#228296]">
              {sitemapSections.reduce((acc, section) => acc + section.links.length, 0)}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Pages</div>
          </div>
          <div className="p-4 text-center rounded-lg shadow dark:bg-gray-900 bg-slate-50">
            <div className="text-2xl font-bold text-[#228296]">24/7</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Customer Support</div>
          </div>
          <div className="p-4 text-center rounded-lg shadow dark:bg-gray-900 bg-slate-50">
            <div className="text-2xl font-bold text-[#228296]">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Secure Banking</div>
          </div>
        </div>

        {/* Sitemap Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredSections.map((section, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
              <div className="p-4 bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white">
                <div className="flex items-center gap-2">
                  {section.icon}
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-300">{section.title}</h2>
                </div>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link 
                        to={link.path}
                        className="flex items-start gap-2 p-2 transition rounded-lg hover:bg-gray-50 group"
                      >
                        <ChevronRight size={16} className="mt-0.5 text-gray-400 dark:text-gray-300 group-hover:text-[#228296] flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-800 group-hover:text-[#228296] dark:text-gray-300">
                            {link.name}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{link.description}</div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Site Information */}
        <div className="p-6 mt-12 rounded-md shadow-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
          <div className="grid gap-6 text-center md:grid-cols-3">
            <div>
              <MapPin size={24} className="mx-auto mb-2 text-[#228296]" />
              <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-300">Visit Our Branch</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">N-4 Cidco, Near Kamgar Chowk, Chh. Sambhajinagar</p>
            </div>
            <div>
              <Phone size={24} className="mx-auto mb-2 text-[#228296]" />
              <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-300">Call Us</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">+91 7767006627</p>
            </div>
            <div>
              <Mail size={24} className="mx-auto mb-2 text-[#228296]" />
              <h3 className="mb-1 font-semibold text-gray-800 dark:text-gray-300">Email Us</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">info@ncosl.com</p>
            </div>
          </div>
        </div>

        {/* Download Sitemap */}
        <div className="mt-8 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#228296] text-[#228296] rounded-lg font-semibold hover:bg-[#228296] hover:text-[#6f3c85] transition">
            <FileText size={18} />
            Download Sitemap (XML)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;