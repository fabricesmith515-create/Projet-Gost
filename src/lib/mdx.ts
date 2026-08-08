import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  coverImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  featured?: boolean;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

export interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title || 'Sans titre',
        excerpt: data.excerpt || '',
        date: data.date || new Date().toISOString(),
        category: data.category || 'Rédaction',
        readTime: data.readTime || `${Math.ceil(stats.minutes)} min de lecture`,
        coverImage: data.coverImage || 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
        author: data.author || {
          name: 'PrêtePlume',
          role: 'Rédacteur de l\'ombre & Biographe',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
        },
        featured: Boolean(data.featured),
      } as BlogPostMeta;
    });

  return allPosts.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPathMDX = path.join(postsDirectory, `${slug}.mdx`);
    const fullPathMD = path.join(postsDirectory, `${slug}.md`);
    
    let fullPath = fullPathMDX;
    if (!fs.existsSync(fullPathMDX)) {
      if (fs.existsSync(fullPathMD)) {
        fullPath = fullPathMD;
      } else {
        return null;
      }
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title || 'Sans titre',
      excerpt: data.excerpt || '',
      date: data.date || new Date().toISOString(),
      category: data.category || 'Rédaction',
      readTime: data.readTime || `${Math.ceil(stats.minutes)} min de lecture`,
      coverImage: data.coverImage || 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
      author: data.author || {
        name: 'PrêtePlume',
        role: 'Rédacteur de l\'ombre & Biographe',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      },
      featured: Boolean(data.featured),
      content,
    };
  } catch (error) {
    console.error(`Erreur chargement article ${slug}:`, error);
    return null;
  }
}

export function extractHeadings(content: string): HeadingItem[] {
  const headingLines = content.split('\n').filter((line) => line.match(/^#{2,3}\s/));
  return headingLines.map((line) => {
    const level = line.startsWith('###') ? 3 : 2;
    const text = line.replace(/^#{2,3}\s/, '').trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
    return { id, text, level };
  });
}
