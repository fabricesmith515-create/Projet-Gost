import React from 'react';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import ServicesGrid from '@/components/ServicesGrid';
import WhyMeSection from '@/components/WhyMeSection';
import ProcessTimeline from '@/components/ProcessTimeline';
import PortfolioExamples from '@/components/PortfolioExamples';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogPreviewSection from '@/components/BlogPreviewSection';
import FAQAccordion from '@/components/FAQAccordion';
import FinalCTASection from '@/components/FinalCTASection';
import { getAllPosts } from '@/lib/mdx';

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <WhyMeSection />
      <ProcessTimeline />
      <PortfolioExamples />
      <TestimonialsSection />
      <BlogPreviewSection posts={posts} />
      <FAQAccordion />
      <FinalCTASection />
    </>
  );
}
