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
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${
              isActive
                ? 'bg-[#C75B39] text-white shadow-soft scale-105'
                : 'bg-white text-[#1A1A2E] border border-[#E5E0D8] hover:border-[#C75B39]'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
