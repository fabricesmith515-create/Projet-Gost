import React from 'react';

interface NumflashIconProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// Premium Flaticon Pack Colored Icons (exact pack icons for top badge position)
const FLATICON_PACK: Record<string, string> = {
  romans: "https://cdn-icons-png.flaticon.com/512/3429/3429149.png", // Roman & Fiction Book
  essais: "https://cdn-icons-png.flaticon.com/512/2232/2232688.png", // Essay & Philosophy Book
  nouvelles: "https://cdn-icons-png.flaticon.com/512/3522/3522262.png", // Short Stories Feather Inkwell
  enfants: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // Children's Storybook Castle
  kdp: "https://cdn-icons-png.flaticon.com/512/5968/5968854.png", // Amazon KDP Publishing
  ebooks: "https://cdn-icons-png.flaticon.com/512/3308/3308304.png", // Expert Ebook & Tablet
  biographies: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png", // Biography Heritage Book
  discours: "https://cdn-icons-png.flaticon.com/512/2111/2111624.png", // Speech Podcast & Microphone
  articles: "https://cdn-icons-png.flaticon.com/512/2540/2540827.png", // Strategic Press Article Digest
  livresblancs: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png", // Executive Whitepaper Report
  reecriture: "https://cdn-icons-png.flaticon.com/512/12222/12222560.png", // Master Pen Polish
  step01: "https://cdn-icons-png.flaticon.com/512/3670/3670051.png", // Brief Chat
  step02: "https://cdn-icons-png.flaticon.com/512/732/732221.png", // Framework Document
  step03: "https://cdn-icons-png.flaticon.com/512/3522/3522262.png", // Writing Supervision
  step04: "https://cdn-icons-png.flaticon.com/512/5968/5968854.png", // KDP & Rights Delivery
  whatsapp: "https://cdn-icons-png.flaticon.com/512/3670/3670051.png",
  google: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
  amazon: "https://cdn-icons-png.flaticon.com/512/5968/5968854.png",
};

export default function NumflashIcon({ name, size = 'md', className = '' }: NumflashIconProps) {
  const normalizedKey = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  const iconUrl = FLATICON_PACK[normalizedKey] || FLATICON_PACK[name] || FLATICON_PACK.romans;

  const sizeMap = {
    sm: { container: 'w-10 h-10 rounded-xl', img: 'w-6 h-6' },
    md: { container: 'w-12 h-12 rounded-2xl', img: 'w-7 h-7' },
    lg: { container: 'w-16 h-16 rounded-2xl', img: 'w-9 h-9' },
  };

  const { container, img: imgSize } = sizeMap[size];

  return (
    <div
      className={`relative flex items-center justify-center ${container} bg-white/10 border border-white/20 backdrop-blur-md shadow-md group-hover:border-[#F6A028] group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 ${className}`}
    >
      <img
        src={iconUrl}
        alt={`${name} icon`}
        className={`${imgSize} object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm`}
      />
    </div>
  );
}
