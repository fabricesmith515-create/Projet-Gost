'use client';

import React, { useState, useEffect } from 'react';
import { HeadingItem } from '@/lib/mdx';
import { List } from 'lucide-react';

interface TableOfContentsProps {
  headings: HeadingItem[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -80% 0px' }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (!headings || headings.length === 0) return null;

  return (
    <nav className="bg-[#FAF8F4] p-6 rounded-2xl border border-[#E5E0D8] shadow-soft mb-8 sticky top-28">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#E5E0D8] text-[#1A1A2E]">
        <List className="w-4 h-4 text-[#C75B39]" />
        <h4 className="font-editorial text-lg font-bold">Sommaire de l'article</h4>
      </div>
      <ul className="space-y-2.5 text-xs sm:text-sm">
        {headings.map((heading) => {
          const isActive = activeId === heading.id;
          return (
            <li
              key={heading.id}
              className={`${heading.level === 3 ? 'pl-4' : 'pl-0'}`}
            >
              <a
                href={`#${heading.id}`}
                className={`block transition-colors py-0.5 ${
                  isActive
                    ? 'text-[#C75B39] font-bold border-l-2 border-[#C75B39] pl-2 -ml-2'
                    : 'text-[#5A5A72] hover:text-[#1A1A2E]'
                }`}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
