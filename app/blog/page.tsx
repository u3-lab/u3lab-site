import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | U3LAB株式会社',
};

const POSTS = [
  {
    slug: 'hito-to-ai',
    title: '人とAIで、ひとつの作品をつくった日',
    date: '2026-06-14',
  },
];

export default function BlogPage() {
  return (
    <div className="pt-16">
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-medium text-stone-900 mb-16">Blog</h1>
          <div>
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 py-6 border-b border-stone-100 hover:opacity-60 transition-opacity"
              >
                <time className="text-xs text-stone-400 flex-shrink-0">{post.date}</time>
                <span className="text-sm text-stone-700">{post.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
