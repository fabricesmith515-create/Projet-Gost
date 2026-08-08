import { getAllPosts } from '@/lib/mdx';
import { SITE_CONFIG } from '@/lib/metadata';

export const dynamic = 'force-static';

export async function GET() {
  const posts = getAllPosts();

  const itemsXml = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${SITE_CONFIG.url}/blog/${post.slug}</link>
      <guid>${SITE_CONFIG.url}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.excerpt}]]></description>
      <category>${post.category}</category>
    </item>
  `
    )
    .join('');

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_CONFIG.name} — Blog Ghostwriting</title>
    <link>${SITE_CONFIG.url}/blog</link>
    <description>${SITE_CONFIG.description}</description>
    <language>fr-FR</language>
    <atom:link href="${SITE_CONFIG.url}/rss.xml" rel="self" type="application/rss+xml"/>
    ${itemsXml}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
