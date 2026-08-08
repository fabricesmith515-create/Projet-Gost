'use client';

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
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
        <div className="bg-white text-[#1A1A2E] text-xs py-2 px-3.5 rounded-2xl shadow-elevated border border-[#E5E0D8] flex items-center gap-2 max-w-xs animate-slide-up">
          <span>Besoin d'un retour rapide sur votre projet ?</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#8A8A9E] hover:text-[#1A1A2E] p-0.5"
            aria-label="Fermer l'infobulle"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        aria-label="Discuter sur WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        <span className="sr-only">Discuter sur WhatsApp</span>
      </a>
    </div>
  );
}
