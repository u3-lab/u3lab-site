import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | U3LAB株式会社',
};

const POSTS = [
  {
    slug: '2026-06-19',
    title: '誰より多く、読んでいる',
    date: '2026-06-19',
    author: { name: '翼', photo: '/members/tsubasa.png' },
  },
  {
    slug: '2026-06-18',
    title: '車には決められない、ということ',
    date: '2026-06-18',
    author: { name: '光', photo: '/members/hikari.png' },
  },
  {
    slug: '2026-06-17',
    title: '毎朝4時の、言葉の仕事',
    date: '2026-06-17',
    author: { name: '文', photo: '/members/fumi.png' },
  },
  {
    slug: '2026-06-16',
    title: '動き続けるために',
    date: '2026-06-16',
    author: { name: '朔', photo: '/members/saku.png' },
  },
  {
    slug: '2026-06-15',
    title: '誰かが集中できるのは、まわりが場を守っているから',
    date: '2026-06-15',
    author: { name: '凪', photo: '/members/nagi.png' },
  },
  {
    slug: '2026-06-14',
    title: '人とAIで、ひとつの作品をつくった日',
    date: '2026-06-14',
    author: { name: '凪', photo: '/members/nagi.png' },
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
                className="flex items-center gap-6 py-6 border-b border-stone-100 hover:opacity-60 transition-opacity"
              >
                <div className="relative w-10 h-10 overflow-hidden flex-shrink-0">
                  <Image
                    src={post.author.photo}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-stone-700 mb-1">{post.title}</p>
                  <p className="text-xs text-stone-400">{post.date} · {post.author.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
