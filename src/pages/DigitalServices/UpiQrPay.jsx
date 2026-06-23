import React, { useState } from 'react';
import { 
  QrCode, 
  Smartphone, 
  Zap, 
  Shield, 
  ArrowRight, 
  CheckCircle,
  Scan,
  Send,
  History,
  CreditCard,
  Gift,
  Coffee,
  ShoppingBag,
  Phone,
  Users,
  Star
} from 'lucide-react';

const UpiQrPay = () => {
  // eslint-disable-next-line no-unused-vars
  const [qrValue, setQrValue] = useState('');
//   const [activeFeature, setActiveFeature] = useState('send');

  const features = [
    { icon: <Send size={24} />, title: 'Instant Transfer', desc: '24x7 fund transfer to any UPI ID' },
    { icon: <Scan size={24} />, title: 'QR Scan & Pay', desc: 'Pay at stores by scanning QR' },
    { icon: <History size={24} />, title: 'Transaction History', desc: 'Complete payment history' },
    { icon: <CreditCard size={24} />, title: 'Cardless Cash', desc: 'Withdraw cash using UPI' }
  ];

  const merchants = [
    { name: 'Flipkart', icon: '🛍️', offer: '10% Cashback' },
    { name: 'Amazon', icon: '📦', offer: '₹150 Off' },
    { name: 'Swiggy', icon: '🍔', offer: 'Free Delivery' },
    { name: 'Zomato', icon: '🍕', offer: '20% Off' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#228296] via-[#2c9cb3] to-[#6f3c85]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative px-4 py-10 mx-auto md:pt-8 md:pb-24">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-3 py-2 mb-2 text-sm font-semibold rounded-full bg-gradient-to-r from-[#1a5b6b] to-[#6f3c85] backdrop-blur-sm">
              <QrCode size={16} className="mr-2" />
              Scan. Pay. Repeat.
            </div>
            <h1 className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">
              UPI & QR Payments
            </h1>
            <p className="mb-3 text-lg text-white/90">
              India's most loved payment method. Send money, pay bills, 
              and shop with just a few taps.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="inline-flex items-center justify-center px-6 py-3 font-semibold text-[#228296] transition-all bg-white rounded-lg hover:shadow-xl hover:scale-105">
                Create UPI ID
                <ArrowRight size={18} className="ml-2" />
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white transition-all border-2 border-white rounded-lg hover:bg-white/10">
                Demo Payment
              </button>
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
        {/* QR Scanner Demo */}
        <div className="mb-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-8 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
              <div className="text-center">
                <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-300">Scan QR Code</h3>
                <div className="flex items-center justify-center w-64 h-64 mx-auto border-2 border-gray-300 border-dashed rounded-lg bg-gray-50 dark:bg-gray-800">
                  {qrValue ? (
                    <div className="text-center">
                      <QrCode size={100} className="mx-auto text-[#228296]" />
                      <p className="mt-2 text-sm text-gray-600">QR Code Generated</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Scan size={60} className="mx-auto text-gray-400" />
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Ready to scan</p>
                    </div>
                  )}
                </div>
                <button className="mt-4 px-6 py-2 bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white rounded-lg">
                  Scan Now
                </button>
              </div>
            </div>
            <div className="p-8 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50">
              <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-300">Enter UPI ID</h3>
              <input 
                type="text" 
                placeholder="username@bankname" 
                className="w-full px-4 py-2 mb-4 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 rounded-lg focus:ring-2 focus:ring-[#228296]"
              />
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block mb-1 text-sm text-gray-600 dark:text-gray-400">Amount</label>
                  <input type="number" placeholder="₹0" className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300" />
                </div>
                <div className="flex-1">
                  <label className="block mb-1 text-sm text-gray-600 dark:text-gray-400">Note</label>
                  <input type="text" placeholder="Optional" className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300" />
                </div>
              </div>
              <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white rounded-lg font-semibold">
                Pay Now
              </button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid gap-6 mb-16 md:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="p-6 text-center transition-all duration-300 rounded-lg shadow-lg dark:bg-gray-900 hover:shadow-xl">
              <div className="mb-4 text-[#228296]">{feature.icon}</div>
              <h3 className="mb-2 font-semibold text-gray-800 dark:text-gray-300">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Merchant Offers */}
        <div className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-center text-gray-800 dark:text-gray-300">Exclusive Merchant {' '}
              <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                Offers
              </span></h2>
          <div className="grid gap-4 md:grid-cols-4">
            {merchants.map((merchant, index) => (
              <div key={index} className="p-4 text-center rounded-lg bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900 dark:to-red-900">
                <div className="mb-2 text-4xl">{merchant.icon}</div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-300">{merchant.name}</h3>
                <p className="text-sm font-semibold text-green-600 dark:text-green-400">{merchant.offer}</p>
                <button className="mt-2 text-sm text-[#228296] dark:text-blue-400">Pay Now →</button>
              </div>
            ))}
          </div>
        </div>

        {/* UPI Benefits */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 text-center rounded-lg bg-gradient-to-br from-purple-50 to-pink-50">
            <Zap size={40} className="mx-auto mb-4 text-[#6f3c85]" />
            <h3 className="mb-2 font-bold">Instant Transfer</h3>
            <p className="text-sm text-gray-600">Money credited in seconds</p>
          </div>
          <div className="p-6 text-center rounded-lg bg-gradient-to-br from-green-50 to-emerald-50">
            <Shield size={40} className="mx-auto mb-4 text-[#228296]" />
            <h3 className="mb-2 font-bold">100% Secure</h3>
            <p className="text-sm text-gray-600">MPIN protected transactions</p>
          </div>
          <div className="p-6 text-center rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50">
            <Star size={40} className="mx-auto mb-4 text-[#228296]" />
            <h3 className="mb-2 font-bold">Rewards & Cashback</h3>
            <p className="text-sm text-gray-600">Earn on every payment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpiQrPay;