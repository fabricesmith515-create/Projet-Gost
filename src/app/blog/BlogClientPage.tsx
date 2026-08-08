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
  const regularPosts = filteredPosts.filter((p) => p.slug !== featuredPost?.slug);

  return (
    <div className="pt-28 pb-20">
      {/* Header Section */}
      <section className="py-16 bg-[#F4EFEA] border-b border-[#E5E0D8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C75B39] mb-3 block">
            Espace Éditorial & Conseils
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A2E] mb-6">
            Le Blog de PrêtePlume
          </h1>
          <p className="text-base sm:text-lg text-[#5A5A72] max-w-2xl mx-auto leading-relaxed">
            Réflexions sur l'art du ghostwriting, conseils pour rédiger votre livre d'expert et méthodologies pour sublimer vos écrits.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post Card */}
          {featuredPost && selectedCategory === 'Tous' && (
            <div className="mb-16 bg-white rounded-3xl overflow-hidden border border-[#E5E0D8] shadow-soft hover:shadow-card transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 group">
              <div className="lg:col-span-7 relative min-h-[320px]">
                <img
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-6 left-6 bg-[#C75B39] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  À la une
                </span>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-[#5A5A72] mb-4">
                    <span className="text-[#C75B39] font-bold uppercase tracking-wider">
                      {featuredPost.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#B08D57]" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4 group-hover:text-[#C75B39] transition-colors leading-tight">
                    <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                  </h2>

                  <p className="text-sm text-[#5A5A72] leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#F4EFEA] flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-[#5A5A72]">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span>{featuredPost.author.name}</span>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#C75B39] hover:text-[#B04A2A]"
                  >
                    <span>Lire l'article</span>
                    <ArrowRight className="w-4 h-4" />
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
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#E5E0D8]">
              <p className="text-[#5A5A72] font-medium text-base">
                Aucun article trouvé dans cette catégorie pour le moment.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => {
                const formattedDate = post.date
                  ? format(parseISO(post.date), 'dd MMMM yyyy', { locale: fr })
                  : '';

                return (
                  <article
                    key={post.slug}
                    className="bg-white rounded-2xl overflow-hidden border border-[#E5E0D8] shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                  >
                    <div>
                      <div className="relative h-48 w-full overflow-hidden">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-4 left-4 bg-white/95 text-[#C75B39] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                          {post.category}
                        </span>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-4 text-xs text-[#5A5A72] mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-[#B08D57]" />
                            {formattedDate}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-[#B08D57]" />
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="font-editorial text-xl font-bold text-[#1A1A2E] mb-3 group-hover:text-[#C75B39] transition-colors line-clamp-2">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>

                        <p className="text-xs sm:text-sm text-[#5A5A72] line-clamp-3 leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-0">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1A1A2E] group-hover:text-[#C75B39] transition-colors"
                      >
                        <span>Lire l'article</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
