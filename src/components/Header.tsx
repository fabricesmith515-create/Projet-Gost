'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Feather, Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', path: '/services' },
    { name: 'À propos', path: '/a-propos' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F4]/90 backdrop-blur-md shadow-soft py-3 border-b border-[#E5E0D8]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group transition-transform duration-200 hover:scale-[1.01]"
          >
            <div className="w-10 h-10 rounded-full bg-[#1A1A2E] text-[#FAF8F4] flex items-center justify-center transition-colors group-hover:bg-[#C75B39]">
              <Feather className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-2xl font-bold tracking-tight text-[#1A1A2E]">
                Prête<span className="text-[#C75B39] font-normal italic">Plume</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#5A5A72] font-medium -mt-1">
                Ghostwriter
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-sm font-medium transition-colors hover:text-[#C75B39] relative py-1 ${
                    isActive ? 'text-[#C75B39]' : 'text-[#1A1A2E]'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C75B39] rounded-full animate-fade-in" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent('Bonjour, je souhaite échanger sur un projet d\'écriture.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#1A1A2E] hover:text-[#C75B39] flex items-center gap-1.5 px-3 py-2 rounded-full border border-[#D9CBB9] hover:border-[#C75B39] transition-all duration-200"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#C75B39] hover:bg-[#B04A2A] text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-soft hover:shadow-elevated transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Discutons de votre projet</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#1A1A2E] hover:bg-[#F4EFEA] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] bg-[#FAF8F4] z-40 px-6 py-8 flex flex-col justify-between border-t border-[#E5E0D8] animate-fade-in">
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-editorial text-2xl font-semibold border-b border-[#E5E0D8] pb-3 ${
                  pathname === item.path ? 'text-[#C75B39]' : 'text-[#1A1A2E]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-4 mt-8">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-[#C75B39] hover:bg-[#B04A2A] text-white font-medium py-3.5 rounded-full shadow-soft"
            >
              Discutons de votre projet
            </Link>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent('Bonjour, je souhaite échanger sur un projet d\'écriture.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center border border-[#1A1A2E] text-[#1A1A2E] font-medium py-3 rounded-full flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              Échanger sur WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
