'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
    'Bonjour PrêtePlume, je souhaite discuter de mon projet de rédaction.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
      {/* Tooltip Popup */}
      {showTooltip && (
        <div className="bg-black/90 text-white text-xs py-2 px-3.5 rounded-2xl shadow-2xl border border-white/20 flex items-center gap-2 max-w-xs animate-slide-up backdrop-blur-md">
          <span>Besoin d'un retour rapide sur votre projet ?</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-white/60 hover:text-white p-0.5"
            aria-label="Fermer l'infobulle"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button with Real WhatsApp PNG Icon */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-white p-2.5 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-2 border-[#25D366] hover:scale-110 hover:shadow-[0_0_25px_rgba(37,211,102,0.8)] transition-all duration-300 group focus:outline-none"
        aria-label="Discuter sur WhatsApp"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png"
          alt="WhatsApp Logo Official"
          className="w-full h-full object-contain group-hover:scale-105 transition-transform"
        />
        <span className="sr-only">Discuter sur WhatsApp</span>
      </a>
    </div>
  );
}
