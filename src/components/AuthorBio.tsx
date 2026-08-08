import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Feather } from 'lucide-react';

interface AuthorBioProps {
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export default function AuthorBio({ author }: AuthorBioProps) {
  return (
    <div className="bg-[#FAF8F4] rounded-2xl p-8 border border-[#E5E0D8] shadow-soft my-12 flex flex-col sm:flex-row items-center sm:items-start gap-6">
      <img
        src={author.avatar}
        alt={author.name}
        className="w-20 h-20 rounded-full object-cover border-2 border-[#C75B39] shadow-soft shrink-0"
      />
      <div className="flex-1 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <div>
            <h4 className="font-editorial text-2xl font-bold text-[#1A1A2E]">
              {author.name}
            </h4>
            <span className="text-xs font-semibold text-[#B08D57] uppercase tracking-wider block">
              {author.role}
            </span>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-1.5 bg-[#C75B39] hover:bg-[#B04A2A] text-white text-xs font-semibold px-4 py-2 rounded-full shadow-soft transition-all duration-200"
          >
            <span>Un projet d'écriture ?</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <p className="text-xs sm:text-sm text-[#5A5A72] leading-relaxed">
          Ghostwriter et rédacteur d'expérience, j'accompagne les dirigeants, entrepreneurs et personnalités dans la rédaction sur-mesure d'ebooks, de livres et de textes d'impact. Confiez-moi vos idées, je leur donne forme et élégance.
        </p>
      </div>
    </div>
  );
}
