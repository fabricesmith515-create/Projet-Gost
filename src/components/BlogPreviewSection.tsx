import React from 'react';
import Link from 'next/link';
import { BlogPostMeta } from '@/lib/mdx';
import { Clock, ArrowRight, Calendar } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

interface BlogPreviewSectionProps {
  posts: BlogPostMeta[];
}

export default function BlogPreviewSection({ posts }: BlogPreviewSectionProps) {
  return (
    <section className="py-20 bg-white border-y border-[#E5E0D8]" id="blog-apercu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C75B39] mb-2 block">
              Espace Réflexion & Écriture
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A2E]">
              Derniers articles du blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#C75B39] hover:text-[#B04A2A] transition-colors"
          >
            <span>Découvrir tous les articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((post) => {
            const formattedDate = post.date
              ? format(parseISO(post.date), 'dd MMMM yyyy', { locale: fr })
              : '';

            return (
              <article
                key={post.slug}
                className="bg-[#FAF8F4] rounded-2xl overflow-hidden border border-[#E5E0D8] shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
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
      </div>
    </section>
  );
}
