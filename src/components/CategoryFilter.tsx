'use client';

import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${
              isActive
                ? 'bg-black text-[#F6A028] border-2 border-[#F6A028] shadow-2xl scale-105 font-bold'
                : 'bg-black/70 text-white/90 border border-white/20 hover:border-white/40 hover:bg-black'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
