import React from 'react';
import { getAllPosts } from '@/lib/mdx';
import { constructMetadata } from '@/lib/metadata';
import BlogClientPage from './BlogClientPage';

export const metadata = constructMetadata({
  title: 'Blog & Articles sur le Ghostwriting — PrêtePlume',
  description:
    'Conseils d\'écriture, méthodes de ghostwriting et guides pour publier votre livre d\'expert. L\'actualité éditoriale de PrêtePlume.',
  canonical: 'https://preteplume.com/blog',
});

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogClientPage initialPosts={posts} />;
}
