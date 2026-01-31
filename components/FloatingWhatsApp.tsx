import React from 'react';
import { Phone } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5547984717341"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Contato via WhatsApp"
    >
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black text-xs font-bold py-1.5 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
        Fale Conosco
      </span>
      <div className="w-14 h-14 bg-brand-gold rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(198,168,124,0.4)] transition-transform duration-300 hover:scale-110 hover:bg-white border-2 border-brand-gold">
        <Phone 
          size={24} 
          className="text-black group-hover:text-brand-gold transition-colors duration-300 fill-current" 
        />
      </div>
      {/* Pulse effect */}
      <div className="absolute inset-0 rounded-full border border-brand-gold animate-ping opacity-20" />
    </a>
  );
};

export default FloatingWhatsApp;