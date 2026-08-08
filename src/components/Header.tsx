'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Feather, Menu, X, ArrowUpRight, ExternalLink } from 'lucide-react';
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
    { name: 'Portfolio', path: '/#portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 sm:py-6 px-4 sm:px-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo in Refined Serif Small Caps */}
        <Link
          href="/"
          className="flex items-center gap-3 group transition-transform duration-200 hover:scale-105"
        >
          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F6A028] flex items-center justify-center group-hover:bg-white group-hover:text-[#2A1B12] transition-all">
            <Feather className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="logo-caps text-white font-bold tracking-[0.2em]">
              PRÊTE<span className="text-[#F6A028] font-normal">PLUME</span>
            </span>
            <span className="text-[9px] uppercase tracking-widest text-white/70 font-medium -mt-0.5">
              Atelier & Collectif de Plumes
            </span>
          </div>
        </Link>

        {/* Centered Floating Glass Pill Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full glass-panel shadow-pill border border-white/15">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-[#2A1B12] shadow-sm'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Action CTAs: ComeUp Badge + White Pill Contact Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={SITE_CONFIG.comeup}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-white/80 hover:text-white px-3.5 py-2 rounded-full glass-pill flex items-center gap-1.5 transition-all"
            title="Vérifier notre profil sur ComeUp (Horizonrose)"
          >
            <span>Horizonrose</span>
            <ExternalLink className="w-3 h-3 text-[#F6A028]" />
          </a>

          <Link
            href="/contact"
            className="btn-white-pill text-xs px-5 py-2.5 flex items-center gap-1.5 group"
          >
            <span>Discutons de votre projet</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-full glass-panel text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 glass-panel-darker rounded-[2rem] p-6 z-50 border border-white/20 shadow-glass animate-fade-in flex flex-col gap-6">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-editorial text-xl font-bold py-2 border-b border-white/10 ${
                  pathname === item.path ? 'text-[#F6A028]' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-white-pill text-center py-3 text-sm"
            >
              Discutons de votre projet
            </Link>
            <a
              href={SITE_CONFIG.comeup}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pill text-center py-2.5 text-xs text-white/90 flex items-center justify-center gap-1.5"
            >
              <span>Profil ComeUp (Horizonrose)</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#F6A028]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
