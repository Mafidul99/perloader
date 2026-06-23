import React, { useState } from 'react';
import { 
  Smartphone, 
  Fingerprint, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle,
  QrCode,
  Send,
  CreditCard,
  Bell,
  RefreshCw,
  Download,
  Apple,
  Coffee,
  Globe,
  Lock
} from 'lucide-react';

const MobileBanking = () => {
  const [showDemo, setShowDemo] = useState(false);

  const features = [
    { icon: <Fingerprint size={24} />, title: 'Biometric Login', desc: 'Secure access with fingerprint/face ID' },
    { icon: <Send size={24} />, title: 'Instant Fund Transfer', desc: 'NEFT/RTGS/IMPS 24x7' },
    { icon: <QrCode size={24} />, title: 'QR Payments', desc: 'Scan & pay at millions of stores' },
    { icon: <Bell size={24} />, title: 'Smart Alerts', desc: 'Real-time transaction notifications' },
    { icon: <CreditCard size={24} />, title: 'Card Management', desc: 'Block/unblock, set limits instantly' },
    { icon: <RefreshCw size={24} />, title: 'Bill Payments', desc: 'Pay bills, recharge mobile/DTH' }
  ];

  const steps = [
    { step: '01', title: 'Download App', desc: 'Get from Google Play or App Store' },
    { step: '02', title: 'Register', desc: 'Use your registered mobile number' },
    { step: '03', title: 'Set MPIN', desc: 'Create secure 6-digit MPIN' },
    { step: '04', title: 'Start Banking', desc: 'Enjoy seamless banking experience' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#228296] via-[#2c9cb3] to-[#6f3c85]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative px-4 py-10 mx-auto md:pt-8 md:pb-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="text-white">
              <div className="inline-flex items-center px-3 py-2 mb-2 text-sm font-semibold rounded-full bg-gradient-to-r from-[#1a5b6b] to-[#6f3c85] backdrop-blur-sm">
                <Smartphone size={16} className="mr-2" />
                Banking at Your Fingertips
              </div>
              <h1 className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">
                Mobile Banking
              </h1>
              <p className="mb-3 text-lg text-white/90">
                Manage your money anytime, anywhere with our powerful mobile banking app. 
                Secure, fast, and packed with features.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-[#228296] transition-all bg-white rounded-lg hover:shadow-xl hover:scale-105">
                  <Download size={18} />
                  Download App
                </button>
                <button 
                  onClick={() => setShowDemo(!showDemo)}
                  className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white transition-all border-2 border-white rounded-lg hover:bg-white/10"
                >
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="relative w-64 h-128">
                <div className="absolute inset-0 bg-black shadow-2xl rounded-3xl">
                  <div className="p-4 -mt-24">
                    <div className="bg-gradient-to-r from-[#228296] to-[#6f3c85] p-2 rounded-lg text-white text-center text-sm">
                      Welcome back, User!
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="p-2 text-xs bg-gray-100 rounded">💰 Balance: ₹25,000</div>
                      <div className="p-2 text-xs bg-gray-100 rounded">📱 Send Money</div>
                      <div className="p-2 text-xs bg-gray-100 rounded">📊 View Statements</div>
                    </div>
                  </div>
                </div>
              </div>
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
        {/* Features Grid */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-gray-300">Powerful {' '}
              <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                Features
              </span>
              </h2>
            <p className="text-gray-600 dark:text-gray-400">Everything you need for modern banking in one app</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="p-6 transition-all duration-300 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50 hover:shadow-xl hover:-translate-y-2">
                <div className="mb-4 text-[#228296]">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-300">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How to Get Started */}
        <div className="mb-16">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-800 dark:text-gray-300">Get Started in 4 {' '}
              <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                Easy Steps
              </span></h2>
          <div className="grid gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="w-16 h-16 mx-auto mb-4 text-2xl font-bold text-white bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-full flex items-center justify-center">
                  {step.step}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-300">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.desc}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#228296] to-[#6f3c85]"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* App Features Showcase */}
        <div className="grid gap-8 mb-16 md:grid-cols-3">
          <div className="p-6 text-center rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50">
            <Lock size={40} className="mx-auto mb-4 text-[#228296]" />
            <h3 className="mb-2 text-xl font-bold">Secure Banking</h3>
            <p className="text-gray-600">256-bit encryption with multi-factor authentication</p>
          </div>
          <div className="p-6 text-center rounded-lg bg-gradient-to-br from-purple-50 to-pink-50">
            <Zap size={40} className="mx-auto mb-4 text-[#6f3c85]" />
            <h3 className="mb-2 text-xl font-bold">Lightning Fast</h3>
            <p className="text-gray-600">Instant payments and real-time updates</p>
          </div>
          <div className="p-6 text-center rounded-lg bg-gradient-to-br from-green-50 to-emerald-50">
            <Globe size={40} className="mx-auto mb-4 text-[#228296]" />
            <h3 className="mb-2 text-xl font-bold">24/7 Access</h3>
            <p className="text-gray-600">Bank anytime from anywhere in the world</p>
          </div>
        </div>

        {/* App Download Section */}
        <div className="p-8 text-center bg-white rounded-lg shadow-xl">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">Download Our Mobile App</h2>
          <p className="mb-6 text-gray-600">Available on both iOS and Android platforms</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-3 px-6 py-3 text-white transition-all bg-black rounded-lg hover:scale-105">
              <Apple size={24} />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </button>
            <button className="flex items-center gap-3 px-6 py-3 text-white transition-all bg-black rounded-lg hover:scale-105">
              <Smartphone size={24} />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileBanking;