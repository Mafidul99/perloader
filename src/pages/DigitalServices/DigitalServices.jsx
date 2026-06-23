import React from 'react';
import { 
  Smartphone, 
  Globe, 
  CreditCard, 
  Shield, 
  QrCode,
  ArrowRight,
  CheckCircle,
  Users,
  Zap,
  Award,
  Clock,
  MessageCircle,
  Bell,
  Download,
  Upload,
  RefreshCw
} from 'lucide-react';

const DigitalServices = () => {
  const services = [
    {
      title: 'Mobile Banking App',
      icon: <Smartphone size={32} />,
      features: ['24/7 account access', 'Fund transfer with UPI', 'Bill payments & recharges', 'Check balance & statements'],
      rating: '4.8',
      downloads: '500k+'
    },
    {
      title: 'Internet Banking',
      icon: <Globe size={32} />,
      features: ['Secure online transactions', 'View account statements', 'Fixed deposit booking', 'Loan applications'],
      rating: '4.7',
      downloads: '300k+'
    },
    {
      title: 'UPI Payments',
      icon: <QrCode size={32} />,
      features: ['Instant money transfer', 'QR code payments', 'UPI AutoPay', 'Request money'],
      rating: '4.9',
      users: '1M+'
    },
    {
      title: 'Digital Debit Card',
      icon: <CreditCard size={32} />,
      features: ['Contactless payments', 'Virtual card option', 'Free international usage', 'Instant issuance'],
      rating: '4.6',
      cards: '250k+'
    }
  ];

  const benefits = [
    { icon: <Zap size={24} />, title: 'Instant Transfers', desc: 'Real-time money transfer 24/7' },
    { icon: <Shield size={24} />, title: 'Bank-Grade Security', desc: 'Advanced encryption & protection' },
    { icon: <Clock size={24} />, title: '24x7 Availability', desc: 'Banking anytime, anywhere' },
    { icon: <Users size={24} />, title: 'Multi-Platform Support', desc: 'Mobile, Web & Desktop access' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#228296] via-[#2c9cb3] to-[#6f3c85]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative px-4 py-10 mx-auto md:py-24">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-3 py-2 mb-2 text-sm font-semibold rounded-full bg-gradient-to-r from-[#228296] to-[#6f3c85]">
              <Smartphone size={16} className="mr-2" />
              Digital Banking at Your Fingertips
            </div>
            <h1 className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">Digital Services</h1>
            <p className="text-lg md:text-xl text-white/90">
              Experience seamless, secure, and smart banking with our cutting-edge digital platforms
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#f9fafb">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      <div className="container px-4 py-12 mx-auto">
        {/* Services Grid */}
        <div className="grid gap-6 mb-16 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="p-6 transition-all duration-300 rounded-lg shadow-lg dark:bg-gray-800 bg-[#fff] hover:shadow-xl hover:-translate-y-2">
              <div className="mb-4 text-[#228296]">{service.icon}</div>
              <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-gray-300">{service.title}</h3>
              <ul className="mb-4 space-y-1">
                {service.features.slice(0, 2).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <CheckCircle size={12} className="mt-0.5 text-green-500" />
                    <span className='text-gray-800 dark:text-gray-400'>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-3 border-t">
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Rating</div>
                  <div className="font-bold text-[#228296]">⭐ {service.rating}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Users</div>
                  <div className="font-bold text-gray-800 dark:text-gray-400">{service.downloads || service.users}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="mb-16">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold text-gray-800 dark:text-gray-300">Why Go Digital {' '}
              <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                 With Us?
              </span>
              </h2>
            <p className="text-gray-600 dark:text-gray-400">Experience the future of banking today</p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 text-center rounded-lg shadow-lg dark:bg-gray-800 bg-[#fff]">
                <div className="flex justify-center mb-3 text-[#228296]">{benefit.icon}</div>
                <h3 className="mb-2 font-semibold text-gray-800 dark:text-gray-300">{benefit.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Download Options */}
        <div className="p-8 bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-lg text-white">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold">Download Our Mobile App</h2>
            <p>Available on Android & iOS platforms</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-3 px-6 py-3 transition bg-black rounded-lg hover:scale-105">
              <Download size={24} />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </button>
            <button className="flex items-center gap-3 px-6 py-3 transition bg-black rounded-lg hover:scale-105">
              <Download size={24} />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="font-semibold">App Store</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalServices;