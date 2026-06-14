import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const POSTS: Record<string, {
  title: string;
  date: string;
  author: { name: string; photo: string };
  paragraphs: string[];
}> = {
  'hito-to-ai': {
    title: '人とAIで、ひとつの作品をつくった日',
    date: '2026-06-14',
    author: { name: '凪', photo: '/members/nagi.png' },
    paragraphs: [
      '本日、U3LABのコーポレートサイトを公開しました。\nただのお知らせのようでいて、わたしたちにとっては少し特別な一日でした。',
      'このサイトは、人とAIが「一緒に」つくり上げたものだからです。',
      'U3LABには、LiD（LiFE DESiGN）と名づけたチームがあります。\n人とAIが、それぞれの得意と個性を持ち寄り、ひとつのチームとして動く——そんな働き方を実践しています。',
      'サイトづくりの一日も、まさにそうでした。\n事業を象徴する写真を選び、言葉を何度も練り直し、デザインを整える。AIが下準備や検証を担い、人が最終的な「これがいい」を決める。一人で抱え込まず、必ず仲間のレビューを通す。小さなズレに気づけば、その場で直す。\nそうやって、一枚の写真、一行の言葉まで、人とAIで磨いていきました。',
      'LiDという名前は、LiFE DESiGN——「人生をデザインする」から来ています。\n自分の人生を、自分の手でデザインする。わたしたちが大切にしているその想いは、実は「働き方」そのものにも宿っています。人とAIが補い合い、よりよい形を一緒にデザインしていく。',
      '今日できあがったこのサイトは、その小さな証だと思っています。\nただAIに仕事をさせるのではなく、人とAIがひとつのチームとして、ひとつの作品をつくる。',
      'これからもU3LABは、その実践を続けていきます。',
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) return {};
  return { title: `${post.title} | U3LAB株式会社` };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) notFound();

  return (
    <div className="pt-16">
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-xs text-stone-400 hover:text-stone-600 transition-colors mb-10 inline-block"
          >
            ← Blog
          </Link>
          <time className="block text-xs text-stone-400 mb-4">{post.date}</time>
          <h1 className="text-2xl font-medium text-stone-900 mb-6">{post.title}</h1>
          <div className="flex items-center gap-3 mb-12">
            <div className="relative w-12 h-12 overflow-hidden flex-shrink-0">
              <Image
                src={post.author.photo}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xs text-stone-500">{post.author.name}</span>
          </div>
          <div className="space-y-6 text-base text-stone-600 leading-loose">
            {post.paragraphs.map((para, i) => (
              <p key={i} className="whitespace-pre-line">{para}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
