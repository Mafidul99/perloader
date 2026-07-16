import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, Mail, Phone, Bot, Send, X } from 'lucide-react';
import robotIconSvg from '../../src/assets/icon/Live chatbot.svg';

const quickReplies = [
  { label: 'Account info', reply: 'We offer savings, current, and fixed deposit accounts with simple eligibility steps.' },
  { label: 'Loans', reply: 'We provide personal, business, home, gold, education, and auto loans.' },
  { label: 'Branches', reply: 'You can visit our branch and ATM section to find the nearest location.' },
  { label: 'Support', reply: 'I can connect you to WhatsApp, call, or email support right away.' },
];

const getBotReply = (message) => {
  const normalized = message.toLowerCase();

  if (normalized.includes('account') || normalized.includes('deposit')) {
    return 'We offer savings, current, and fixed deposit accounts with easy documentation and quick processing.';
  }

  if (normalized.includes('loan') || normalized.includes('finance')) {
    return 'We provide personal, business, home, gold, education, and auto loans tailored to your needs.';
  }

  if (normalized.includes('branch') || normalized.includes('atm')) {
    return 'You can open our branch and ATM section for the nearest location and service details.';
  }

  if (normalized.includes('support') || normalized.includes('help')) {
    return 'You can reach our support team via WhatsApp, phone call, or email.';
  }

  if (normalized.includes('hello') || normalized.includes('hi')) {
    return 'Hello! I am Takio, your banking assistant. I can help with account options, loans, branches, and support.';
  }

  return 'I can help with account options, loans, branch locations, and support. Try one of the quick replies above.';
};

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Hi! I am Takio. I can help with accounts, loans, branches, and support. Ask me anything.',
    },
  ]);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAction = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const sendMessage = (text, sender = 'user') => {
    if (!text || !text.trim()) return;

    const cleanText = text.trim();
    setMessages((prev) => [...prev, { id: Date.now(), sender, text: cleanText }]);

    if (sender === 'user') {
      window.setTimeout(() => {
        const botMessage = getBotReply(cleanText);
        setMessages((prev) => [...prev, { id: Date.now() + 1, sender: 'bot', text: botMessage }]);
      }, 250);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(draft);
    setDraft('');
  };

  const handleQuickReply = (item) => {
    sendMessage(item.label, 'user');
    window.setTimeout(() => {
      setMessages((prev) => [...prev, { id: Date.now() + 2, sender: 'bot', text: item.reply }]);
    }, 250);
  };

  return (
    <div ref={menuRef} className="fixed bottom-6 left-6 z-[1000] flex flex-col items-start gap-3">
      {isOpen && (
        <div className="w-[320px] overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_25px_80px_-20px_rgba(15,23,42,0.45)] dark:border-slate-700 dark:bg-slate-900 sm:w-[360px]">
          <div className="flex items-center justify-between bg-gradient-to-r from-[#228296] to-[#6f3c85] px-4 py-3 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <Bot size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold">Takio</p>
                <p className="text-xs text-white/80">Online now</p>
              </div>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} className="rounded-full p-1.5 transition hover:bg-white/20" aria-label="Close chatbot">
              <X size={16} />
            </button>
          </div>

          <div className="max-h-[320px] space-y-3 overflow-y-auto bg-slate-50/80 px-4 py-3 dark:bg-slate-950/60">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${message.sender === 'user' ? 'bg-[#228296] text-white' : 'bg-white text-slate-700 shadow-sm dark:bg-slate-800 dark:text-slate-200'}`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 bg-white px-3 py-3 dark:border-slate-700 dark:bg-slate-900">
            <div className="mb-2 flex flex-wrap gap-2">
              {quickReplies.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleQuickReply(item)}
                  className="rounded-full border border-[#228296]/20 bg-[#228296]/10 px-2.5 py-1.5 text-xs font-medium text-[#228296] transition hover:bg-[#228296]/20"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder="Type your question..."
                className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none ring-0 focus:border-[#228296] dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
              />
              <button type="submit" className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white transition hover:scale-105" aria-label="Send message">
                <Send size={16} />
              </button>
            </form>

            <div className="mt-3 grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => handleAction('https://api.whatsapp.com/send?phone=917002079156&text=I%20want%20more%20information%2C%20Please%20Contact%20Me.')}
                className="flex items-center justify-center gap-1 rounded-xl border border-emerald-200 bg-emerald-50 px-2 py-2 text-[11px] font-medium text-emerald-700 transition hover:bg-emerald-100"
              >
                <MessageCircle size={13} />
                WhatsApp
              </button>

              <button
                type="button"
                onClick={() => handleAction('tel:+917767006627')}
                className="flex items-center justify-center gap-1 rounded-xl border border-[#228296]/20 bg-[#228296]/10 px-2 py-2 text-[11px] font-medium text-[#228296] transition hover:bg-[#228296]/20"
              >
                <Phone size={13} />
                Call
              </button>

              <button
                type="button"
                onClick={() => handleAction('mailto:info@ncosl.com')}
                className="flex items-center justify-center gap-1 rounded-xl border border-[#6f3c85]/20 bg-[#6f3c85]/10 px-2 py-2 text-[11px] font-medium text-[#6f3c85] transition hover:bg-[#6f3c85]/20"
              >
                <Mail size={13} />
                Email
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Open Takio chatbot"
      >
        <img src={robotIconSvg} alt="Takio chatbot icon" className="h-24 w-24 sm:h-20 sm:w-20" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
