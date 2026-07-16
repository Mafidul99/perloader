import React, { useEffect, useRef, useState, useCallback } from 'react';
import { MessageCircle, Mail, Phone, Bot, Send, X, Minimize2, Maximize2, ChevronDown, ChevronUp } from 'lucide-react';
import robotIconSvg from '../../src/assets/icon/Live chatbot.svg';

const quickReplies = [
  { label: '💳 Accounts', reply: 'We offer savings, current, and fixed deposit accounts with simple eligibility steps.' },
  { label: '💰 Loans', reply: 'We provide personal, business, home, gold, education, and auto loans.' },
  { label: '📍 Branches', reply: 'You can visit our branch and ATM section to find the nearest location.' },
  { label: '🆘 Support', reply: 'I can connect you to WhatsApp, call, or email support right away.' },
];

const getBotReply = (message) => {
  const normalized = message.toLowerCase();

  if (normalized.includes('account') || normalized.includes('deposit') || normalized.includes('saving')) {
    return '💳 We offer savings, current, and fixed deposit accounts with easy documentation and quick processing.';
  }

  if (normalized.includes('loan') || normalized.includes('finance') || normalized.includes('credit')) {
    return '💰 We provide personal, business, home, gold, education, and auto loans tailored to your needs.';
  }

  if (normalized.includes('branch') || normalized.includes('atm') || normalized.includes('location')) {
    return '📍 You can open our branch and ATM section for the nearest location and service details.';
  }

  if (normalized.includes('support') || normalized.includes('help') || normalized.includes('contact')) {
    return '🆘 You can reach our support team via WhatsApp, phone call, or email using the buttons below.';
  }

  if (normalized.includes('hello') || normalized.includes('hi') || normalized.includes('takio') || normalized.includes('hey')) {
    return '👋 Hello! I am Takio, your banking assistant. I can help with account options, loans, branches, and support.';
  }

  if (normalized.includes('thank')) {
    return '😊 You\'re welcome! Is there anything else I can help you with?';
  }

  if (normalized.includes('bye') || normalized.includes('goodbye')) {
    return '👋 Goodbye! Feel free to come back anytime if you need assistance.';
  }

  return '🤔 I can help with account options, loans, branch locations, and support. Try one of the quick replies above.';
};

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: '👋 Hi! I am Takio. I can help with accounts, loans, branches, and support. Ask me anything!',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const menuRef = useRef(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const takioName = import.meta.env.VITE_APP_TAKIO_NAME || "Takio Assistant";

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsMinimized(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  const handleAction = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const sendMessage = useCallback((text, sender = 'user') => {
    if (!text || !text.trim()) return;

    const cleanText = text.trim();
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    setMessages((prev) => [...prev, { 
      id: Date.now(), 
      sender, 
      text: cleanText,
      timestamp 
    }]);

    if (sender === 'user') {
      setIsTyping(true);
      setTimeout(() => {
        const botMessage = getBotReply(cleanText);
        setMessages((prev) => [...prev, { 
          id: Date.now() + 1, 
          sender: 'bot', 
          text: botMessage,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
        setIsTyping(false);
      }, 600);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!draft.trim()) return;
    sendMessage(draft);
    setDraft('');
    inputRef.current?.focus();
  };

  const handleQuickReply = (item) => {
    sendMessage(item.label, 'user');
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { 
        id: Date.now() + 2, 
        sender: 'bot', 
        text: item.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setIsTyping(false);
    }, 500);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const toggleQuickReplies = () => {
    setShowQuickReplies(!showQuickReplies);
  };

  const clearChat = () => {
    setMessages([
      {
        id: Date.now(),
        sender: 'bot',
        text: '👋 Chat cleared! How can I help you today?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  return (
    <div ref={menuRef} className="fixed bottom-4 left-4 z-[1000] flex flex-col items-start gap-3 sm:bottom-6 sm:left-6">
      {isOpen && !isMinimized && (
        <div className="w-[340px] overflow-hidden rounded-[24px] border border-slate-200/50 bg-slate-50/95 backdrop-blur-sm shadow-[0_25px_80px_-20px_rgba(15,23,42,0.45)] dark:border-slate-700/50 dark:bg-slate-900/95 animate-in slide-in-from-bottom-4 duration-300 sm:w-[380px]">
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-[#228296] to-[#6f3c85] px-4 py-3.5 text-white">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-950/50 backdrop-blur-sm">
                <img 
                  src="../../public/OQPX091.png"
                  alt="WhatsApp Icon"
                  className="object-contain w-full h-full"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
              </div>
              <div>
                <p className="text-sm font-semibold">{takioName}</p>
                <p className="flex items-center gap-1 text-xs text-white/80">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Online • Usually replies instantly
                </p>
              </div>
            </div>
            <div className="flex items-center gap-0.5">
              <button 
                type="button" 
                onClick={clearChat}
                className="rounded-full p-1.5 text-xs transition hover:bg-white/20"
                aria-label="Clear chat"
                title="Clear chat"
              >
                ✕
              </button>
              <button 
                type="button" 
                onClick={toggleMinimize} 
                className="rounded-full p-1.5 transition hover:bg-white/20" 
                aria-label="Minimize chatbot"
              >
                <Minimize2 size={16} />
              </button>
              <button 
                type="button" 
                onClick={() => setIsOpen(false)} 
                className="rounded-full p-1.5 transition hover:bg-white/20" 
                aria-label="Close chatbot"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="max-h-[340px] min-h-[200px] space-y-2.5 overflow-y-auto bg-gradient-to-b from-slate-50/80 to-white px-4 py-4 dark:from-slate-950/60 dark:to-slate-950/80 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700">
            {messages.map((message, index) => (
              <div 
                key={message.id} 
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-200`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm ${
                  message.sender === 'user' 
                    ? 'bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white shadow-md' 
                    : 'bg-slate-50 text-slate-700 shadow-md dark:bg-slate-800 dark:text-slate-200'
                }`}>
                  <div className="leading-relaxed break-words whitespace-pre-wrap">{message.text}</div>
                  <div className={`text-[10px] mt-1.5 ${
                    message.sender === 'user' ? 'text-white/70' : 'text-slate-400 dark:text-slate-500'
                  }`}>
                    {message.timestamp}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start duration-200 animate-in slide-in-from-bottom-2">
                <div className="px-4 py-3 shadow-md bg-slate-50 dark:bg-slate-800 rounded-2xl">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '200ms' }}></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '400ms' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="px-3.5 py-3 border-t bg-slate-50/80 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 dark:bg-slate-900/80">
            {/* Quick Replies Toggle */}
            <div className="flex items-center justify-between mb-2">
              <button
                type="button"
                onClick={toggleQuickReplies}
                className="flex items-center gap-1 text-xs transition text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              >
                {showQuickReplies ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                Quick Replies
              </button>
              <span className="text-[10px] text-slate-400 dark:text-slate-500">
                {messages.length} messages
              </span>
            </div>

            {showQuickReplies && (
              <div className="flex flex-wrap gap-1.5 mb-3">
                {quickReplies.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleQuickReply(item)}
                    className="rounded-full border border-[#228296]/20 bg-[#228296]/5 px-3 py-1.5 text-xs font-medium text-[#228296] transition hover:bg-[#228296]/20 hover:scale-105 hover:shadow-md active:scale-95"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex gap-2">
              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Type your question..."
                  className="w-full rounded-full border border-slate-200 bg-slate-50/80 px-4 py-2.5 pr-10 text-sm text-slate-700 outline-none ring-0 transition focus:border-[#228296] focus:ring-2 focus:ring-[#228296]/20 focus:bg-white dark:border-slate-700 dark:bg-slate-950/80 dark:text-slate-200 dark:focus:bg-slate-950"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit(e);
                    }
                  }}
                />
                {draft && (
                  <button
                    type="button"
                    onClick={() => setDraft('')}
                    className="absolute -translate-y-1/2 right-3 top-1/2 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
              <button 
                type="submit" 
                disabled={!draft.trim()}
                className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white transition hover:scale-105 hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 active:scale-95" 
                aria-label="Send message"
              >
                <Send size={16} className="ml-0.5" />
              </button>
            </form>

            <div className="grid grid-cols-3 gap-2 mt-3">
              <button
                type="button"
                onClick={() => handleAction('https://wa.me/917002079156?text=I%20want%20more%20information%2C%20Please%20Contact%20Me.')}
                className="group flex items-center justify-center gap-1.5 rounded-xl border border-emerald-200 bg-emerald-50/80 px-2 py-2.5 text-xs font-medium text-emerald-700 transition hover:bg-emerald-100 hover:scale-105 hover:shadow-md active:scale-95 dark:border-emerald-800/30 dark:bg-emerald-900/20 dark:text-emerald-400 dark:hover:bg-emerald-900/40"
              >
                <MessageCircle size={14} className="transition group-hover:scale-110" />
                WhatsApp
              </button>

              <button
                type="button"
                onClick={() => handleAction('tel:+917767006627')}
                className="group flex items-center justify-center gap-1.5 rounded-xl border border-[#228296]/20 bg-[#228296]/10 px-2 py-2.5 text-xs font-medium text-[#228296] transition hover:bg-[#228296]/20 hover:scale-105 hover:shadow-md active:scale-95 dark:border-[#228296]/30 dark:bg-[#228296]/20 dark:text-[#228296] dark:hover:bg-[#228296]/30"
              >
                <Phone size={14} className="transition group-hover:scale-110" />
                Call
              </button>

              <button
                type="button"
                onClick={() => handleAction('mailto:info@ncosl.com')}
                className="group flex items-center justify-center gap-1.5 rounded-xl border border-[#6f3c85]/20 bg-[#6f3c85]/10 px-2 py-2.5 text-xs font-medium text-[#6f3c85] transition hover:bg-[#6f3c85]/20 hover:scale-105 hover:shadow-md active:scale-95 dark:border-[#6f3c85]/30 dark:bg-[#6f3c85]/20 dark:text-[#6f3c85] dark:hover:bg-[#6f3c85]/30"
              >
                <Mail size={14} className="transition group-hover:scale-110" />
                Email
              </button>
            </div>
          </div>
        </div>
      )}

      {isOpen && isMinimized && (
        <div className="w-[340px] overflow-hidden rounded-[24px] border border-slate-200/50 bg-slate-50/95 backdrop-blur-sm shadow-lg dark:border-slate-700/50 dark:bg-slate-900/95 animate-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center justify-between bg-gradient-to-r from-[#228296] to-[#6f3c85] px-4 py-3 text-white">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
                <Bot size={16} />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-white rounded-full"></span>
              </div>
              <div>
                <p className="text-sm font-semibold">{takioName}</p>
                <p className="text-xs text-white/80">Click to expand</p>
              </div>
            </div>
            <div className="flex items-center gap-0.5">
              <button 
                type="button" 
                onClick={toggleMinimize} 
                className="rounded-full p-1.5 transition hover:bg-white/20" 
                aria-label="Expand chatbot"
              >
                <Maximize2 size={16} />
              </button>
              <button 
                type="button" 
                onClick={() => setIsOpen(false)} 
                className="rounded-full p-1.5 transition hover:bg-white/20" 
                aria-label="Close chatbot"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
        aria-label="Open Takio chatbot"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#228296] to-[#6f3c85] opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
        <img 
          src={robotIconSvg} 
          alt="Takio chatbot icon" 
          className="relative w-16 h-16 transition-all sm:h-24 sm:w-24 drop-shadow-lg group-hover:drop-shadow-xl" 
        />
        {!isOpen && (
          <>
            <span className="absolute flex w-4 h-4 -top-1 -right-1">
              <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
              <span className="relative inline-flex w-4 h-4 bg-green-500 border-2 border-white rounded-full dark:border-slate-800"></span>
            </span>
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-medium text-slate-600 dark:text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Chat with us
            </span>
          </>
        )}
      </button>
    </div>
  );
};

export default WhatsAppButton;