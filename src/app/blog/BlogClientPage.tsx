'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BlogPostMeta } from '@/lib/mdx';
import CategoryFilter from '@/components/CategoryFilter';
import { Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

interface BlogClientPageProps {
  initialPosts: BlogPostMeta[];
}

export default function BlogClientPage({ initialPosts }: BlogClientPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const categories = [
    'Tous',
    'Conseils d\'écriture',
    'Édition',
    'Marketing de contenu',
    'Rédaction',
  ];

  const filteredPosts =
    selectedCategory === 'Tous'
      ? initialPosts
      : initialPosts.filter((post) => post.category === selectedCategory);

  const featuredPost = initialPosts.find((p) => p.featured) || initialPosts[0];

  return (
    <div className="pt-28 pb-20">
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto glass-panel rounded-[2.5rem] p-8 sm:p-12 border border-white/15 shadow-glass">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F6A028] mb-3 block">
            Espace Éditorial & Conseils
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Le Blog de l'Atelier PrêtePlume
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Conseils pour rédiger vos romans, publier sur Amazon KDP, structurer vos essais et sublimer vos écrits.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Featured Post Card */}
          {featuredPost && selectedCategory === 'Tous' && (
            <div className="mb-16 glass-panel rounded-[2.5rem] overflow-hidden border border-white/15 shadow-glass grid grid-cols-1 lg:grid-cols-12 group">
              <div className="lg:col-span-7 relative min-h-[320px]">
                <img
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-6 left-6 bg-[#F6A028] text-[#2A1B12] text-xs font-bold px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  À la une
                </span>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-white/70 mb-4">
                    <span className="text-[#F6A028] font-bold uppercase tracking-wider">
                      {featuredPost.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#F6A028]" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-[#F6A028] transition-colors leading-tight">
                    <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                  </h2>

                  <p className="text-sm text-white/80 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-white/75">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span>{featuredPost.author.name}</span>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="btn-white-pill text-xs px-4 py-2 flex items-center gap-1"
                  >
                    <span>Lire l'article</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#2A1B12]" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Category Filter Pills */}
          <CategoryFilter
            categories={categories}
            activeCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          {/* Regular Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => {
              const formattedDate = post.date
                ? format(parseISO(post.date), 'dd MMMM yyyy', { locale: fr })
                : '';

              return (
                <article
                  key={post.slug}
                  className="glass-panel rounded-3xl overflow-hidden border border-white/15 shadow-glass flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-[#F6A028] text-xs font-bold px-3 py-1 rounded-full border border-white/15">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-white/60 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#F6A028]" />
                          {formattedDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#F6A028]" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="font-editorial text-xl font-bold text-white mb-3 group-hover:text-[#F6A028] transition-colors line-clamp-2">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>

                      <p className="text-xs sm:text-sm text-white/75 line-clamp-3 leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-0">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#F6A028] transition-colors"
                    >
                      <span>Lire l'article</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
