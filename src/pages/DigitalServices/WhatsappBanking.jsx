import React, { useState } from 'react';
import { 
  MessageCircle, 
  Send, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle,
  Smartphone,
  CreditCard,
  DollarSign,
  HelpCircle,
  Bell,
  FileText,
  Users,
  Clock
} from 'lucide-react';

const WhatsappBanking = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { type: 'bot', message: '👋 Welcome to Shantishwar WhatsApp Banking! How can I help you today?' },
  ]);

  const quickReplies = [
    { text: '💰 Check Balance', command: 'BALANCE' },
    { text: '📊 Mini Statement', command: 'MINI' },
    { text: '💳 Block Card', command: 'BLOCK CARD' },
    { text: '🏦 FD Rates', command: 'FD RATES' },
    { text: '📞 Contact Support', command: 'SUPPORT' },
    { text: '🔐 Reset MPIN', command: 'RESET MPIN' }
  ];

  const sendMessage = () => {
    if (message.trim()) {
      setChatHistory([...chatHistory, { type: 'user', message: message }]);
      // Simulate bot response
      setTimeout(() => {
        let response = '';
        switch(message.toUpperCase()) {
          case 'BALANCE':
            response = '💰 Your Savings Account balance is ₹25,000. Current Account balance is ₹1,00,000.';
            break;
          case 'MINI':
            response = '📊 Last 5 transactions:\n1. ₹5,000 - UPI Payment\n2. ₹10,000 - ATM Withdrawal\n3. ₹2,000 - Bill Payment\n4. ₹15,000 - Online Transfer\n5. ₹1,000 - QR Payment';
            break;
          default:
            response = 'Thank you for your message. Our representative will assist you shortly. For urgent help, call 1800-XXX-XXXX.';
        }
        setChatHistory(prev => [...prev, { type: 'bot', message: response }]);
      }, 1000);
      setMessage('');
    }
  };

  const services = [
    { icon: <DollarSign size={20} />, title: 'Balance Inquiry', desc: 'Check account balance anytime' },
    { icon: <FileText size={20} />, title: 'Mini Statement', desc: 'Get last 5 transactions' },
    { icon: <CreditCard size={20} />, title: 'Card Services', desc: 'Block/unblock cards' },
    { icon: <Bell size={20} />, title: 'Transaction Alerts', desc: 'Get real-time updates' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1a4d5e] via-[#228296] to-[#6f3c85]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative px-4 py-10 mx-auto md:pt-8 md:pb-24">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-3 py-1 mb-2 text-sm font-semibold rounded-full bg-gradient-to-r from-[#1a5b6b] to-[#6f3c85] backdrop-blur-sm">
              <MessageCircle size={16} className="mr-2" />
              Chat. Bank. Relax.
            </div>
            <h1 className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">
              WhatsApp Banking
            </h1>
            <p className="mb-3 text-lg text-white/90">
              Banking at your fingertips, now on WhatsApp. Get account info, 
              make payments, and resolve queries instantly.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="inline-flex items-center justify-center px-6 py-3 font-semibold text-[#25D366] transition-all bg-white rounded-lg hover:shadow-xl hover:scale-105">
                Connect on WhatsApp
                <MessageCircle size={18} className="ml-2" />
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white transition-all border-2 border-white rounded-lg hover:bg-white/10">
                How it Works
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
        {/* WhatsApp Chat Demo */}
        <div className="mb-16">
          <div className="max-w-2xl mx-auto overflow-hidden rounded-lg shadow-xl dark:bg-gray-900 bg-slate-50">
            <div className="bg-[#075E54] p-4 text-white">
              <div className="flex items-center gap-3">
                <MessageCircle size={24} />
                <div>
                  <h3 className="font-semibold">Shantishwar Bank WhatsApp</h3>
                  <p className="text-xs opacity-90">Online • Typically replies within a minute</p>
                </div>
              </div>
            </div>
            <div className="h-96 overflow-y-auto p-4 bg-[#E5DDD5] space-y-3">
              {chatHistory.map((chat, index) => (
                <div key={index} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs p-3 rounded-lg ${chat.type === 'user' ? 'bg-[#DCF8C6]' : 'bg-white'}`}>
                    <p className="text-sm">{chat.message}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-900">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366]"
                />
                <button onClick={sendMessage} className="px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#128C7E]">
                  <Send size={20} />
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => setMessage(reply.command)}
                    className="px-3 py-1 text-sm border border-gray-300 rounded-full dark:bg-gray-800 bg-slate-50 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    {reply.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 mb-16 md:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="p-6 text-center transition-all duration-300 rounded-lg shadow-lg dark:bg-gray-900 bg-slate-50 hover:shadow-xl">
              <div className="mb-4 text-[#25D366]">{service.icon}</div>
              <h3 className="mb-2 font-semibold text-gray-800 dark:text-gray-300">{service.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* How to Connect */}
        <div className="p-8 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-lg text-white">
          <h3 className="mb-6 text-2xl font-bold text-center">How to Get Started?</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-white rounded-full flex items-center justify-center text-[#25D366] font-bold text-xl">1</div>
              <p>Save +91 7767006627 to contacts</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-white rounded-full flex items-center justify-center text-[#25D366] font-bold text-xl">2</div>
              <p>Send "Hi" on WhatsApp</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-white rounded-full flex items-center justify-center text-[#25D366] font-bold text-xl">3</div>
              <p>Verify using MPIN to start banking</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsappBanking;