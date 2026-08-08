'use client';

import React, { useState } from 'react';
import { MessageCircle, Linkedin, Twitter, Copy, Check } from 'lucide-react';

interface SocialShareProps {
  title: string;
  url: string;
}

export default function SocialShare({ title, url }: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: 'WhatsApp',
      href: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      icon: MessageCircle,
      color: 'bg-[#25D366] text-white hover:bg-[#1ebd59]',
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: Linkedin,
      color: 'bg-[#0A66C2] text-white hover:bg-[#084e96]',
    },
    {
      name: 'X',
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      icon: Twitter,
      color: 'bg-[#1A1A2E] text-white hover:bg-[#2B2B40]',
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3 py-6 border-y border-[#E5E0D8] my-8">
      <span className="text-xs font-bold uppercase tracking-wider text-[#5A5A72] mr-2">
        Partager cet article :
      </span>

      {shareLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold shadow-soft transition-all duration-200 ${link.color}`}
            aria-label={`Partager sur ${link.name}`}
          >
            <Icon className="w-3.5 h-3.5 fill-current" />
            <span>{link.name}</span>
          </a>
        );
      })}

      <button
        onClick={handleCopy}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#FAF8F4] text-[#1A1A2E] border border-[#E5E0D8] hover:border-[#1A1A2E] transition-all duration-200 ml-auto"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-[#25D366]" />
            <span className="text-[#25D366]">Lien copié !</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5 text-[#C75B39]" />
            <span>Copier le lien</span>
          </>
        )}
      </button>
    </div>
  );
}
