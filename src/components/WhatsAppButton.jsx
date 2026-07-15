import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, Mail, Phone, Sparkles } from 'lucide-react';

import robotIconSvg from '../../src/assets/icon/Live chatbot.svg';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <div ref={menuRef} className="fixed bottom-6 left-6 z-[1000] flex flex-col items-start gap-3">
      {isOpen && (
        <div className="p-4 bg-white border border-gray-200 shadow-2xl w-72 rounded-2xl dark:border-gray-700 dark:bg-gray-900">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white">
              <Sparkles size={18} />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">Need help?</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Talk to our support team</p>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <button
              type="button"
              onClick={() => handleAction('https://api.whatsapp.com/send?phone=917002079156&text=I%20want%20more%20information%2C%20Please%20Contact%20Me.')}
              className="flex items-center w-full gap-2 px-3 py-2 text-sm font-medium transition border rounded-xl border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400"
            >
              <MessageCircle size={16} />
              WhatsApp Chat
            </button>

            <button
              type="button"
              onClick={() => handleAction('tel:+917767006627')}
              className="flex w-full items-center gap-2 rounded-xl border border-[#228296]/20 bg-[#228296]/10 px-3 py-2 text-sm font-medium text-[#228296] transition hover:bg-[#228296]/20"
            >
              <Phone size={16} />
              Call Now
            </button>

            <button
              type="button"
              onClick={() => handleAction('mailto:info@ncosl.com')}
              className="flex w-full items-center gap-2 rounded-xl border border-[#6f3c85]/20 bg-[#6f3c85]/10 px-3 py-2 text-sm font-medium text-[#6f3c85] transition hover:bg-[#6f3c85]/20"
            >
              <Mail size={16} />
              Email Us
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 transition-all duration-300 rounded-full hover:scale-125"
        aria-label="Open support menu"
      >
        <img src={robotIconSvg} alt="Chatbot Icon" className="w-24 h-24 sm:w-20 sm:h-20" />
        {/* <MessageCircle size={20} /> */}
        {/* <span className="hidden text-sm font-semibold sm:inline">Chat</span> */}
      </button>
    </div>
  );
};

export default WhatsAppButton;