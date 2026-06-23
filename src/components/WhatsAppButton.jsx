
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=917002079156&text=I want more information, Please Contact Me."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 p-3 transition-all duration-300 rounded-full shadow-lg bottom-6 left-6 hover:scale-110 animate-pulse"
    >
      <img src="./whatsapp.png" alt="WhatsApp" className="w-12 h-12" />
      {/* <MessageCircle size={28} /> */}
    </a>
  );
};

export default WhatsAppButton;