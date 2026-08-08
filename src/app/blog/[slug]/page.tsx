import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPosts, extractHeadings } from '@/lib/mdx';
import { constructMetadata, SITE_CONFIG } from '@/lib/metadata';
import { MDXRemote } from 'next-mdx-remote/rsc';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import TableOfContents from '@/components/TableOfContents';
import SocialShare from '@/components/SocialShare';
import AuthorBio from '@/components/AuthorBio';
import FinalCTASection from '@/components/FinalCTASection';
import { Clock, Calendar, ArrowLeft, ArrowRight, Tag } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return constructMetadata({ title: 'Article introuvable — PrêtePlume' });
  }

  return constructMetadata({
    title: `${post.title} — Blog PrêtePlume`,
    description: post.excerpt,
    image: post.coverImage,
    canonical: `${SITE_CONFIG.url}/blog/${params.slug}`,
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const headings = extractHeadings(post.content);
  const formattedDate = post.date
    ? format(parseISO(post.date), 'dd MMMM yyyy', { locale: fr })
    : '';

  const articleUrl = `${SITE_CONFIG.url}/blog/${post.slug}`;

  // JSON-LD Schema.org for BlogPosting
  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
  };

  return (
    <>
      <ReadingProgressBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      <article className="pt-28 pb-20 bg-[#FAF8F4]">
        {/* Article Header */}
        <header className="py-12 bg-[#F4EFEA] border-b border-[#E5E0D8] mb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C75B39] hover:text-[#B04A2A] transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour à la liste des articles</span>
            </Link>

            <div className="flex flex-wrap items-center gap-4 text-xs text-[#5A5A72] mb-4">
              <span className="bg-[#C75B39] text-white font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#B08D57]" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#B08D57]" />
                {post.readTime}
              </span>
            </div>

            <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A2E] leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-[#5A5A72] leading-relaxed italic border-l-2 border-[#C75B39] pl-4">
              {post.excerpt}
            </p>
          </div>
        </header>

        {/* Main Content & Sidebar TOC */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar Table of Contents */}
            <aside className="hidden lg:block lg:col-span-4">
              <TableOfContents headings={headings} />
            </aside>

            {/* Article Body */}
            <main className="lg:col-span-8 bg-white p-6 sm:p-12 rounded-3xl border border-[#E5E0D8] shadow-soft">
              {/* Cover Image */}
              <div className="mb-8 rounded-2xl overflow-hidden shadow-soft">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-[350px] sm:h-[420px] object-cover"
                />
              </div>

              {/* MDX Body */}
              <div className="prose max-w-none text-[#2B2B40]">
                <MDXRemote source={post.content} />
              </div>

              {/* Social Share Buttons */}
              <SocialShare title={post.title} url={articleUrl} />

              {/* Author Bio Box */}
              <AuthorBio author={post.author} />

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-16 pt-10 border-t border-[#E5E0D8]">
                  <h3 className="font-editorial text-2xl font-bold text-[#1A1A2E] mb-6">
                    Articles similaires à lire ensuite
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {relatedPosts.map((related) => (
                      <div
                        key={related.slug}
                        className="bg-[#FAF8F4] p-5 rounded-2xl border border-[#E5E0D8] hover:border-[#C75B39] transition-all duration-200 flex flex-col justify-between"
                      >
                        <div>
                          <span className="text-[10px] uppercase font-bold text-[#C75B39] block mb-2">
                            {related.category}
                          </span>
                          <h4 className="font-editorial font-bold text-lg text-[#1A1A2E] mb-2 line-clamp-2">
                            <Link href={`/blog/${related.slug}`}>{related.title}</Link>
                          </h4>
                          <p className="text-xs text-[#5A5A72] line-clamp-2 mb-4">
                            {related.excerpt}
                          </p>
                        </div>
                        <Link
                          href={`/blog/${related.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#C75B39]"
                        >
                          <span>Lire l'article</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </main>
          </div>
        </div>
      </article>

      <FinalCTASection />
    </>
  );
}
