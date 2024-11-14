import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/918095132132" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-5 bottom-24 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer z-50 transition-colors duration-300 hover:bg-green-600 text-2xl md:right-3 md:bottom-32 md:w-11 md:h-11 md:text-xl"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;
