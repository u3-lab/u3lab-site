import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Slug = 'photo' | 'soudan' | 'coaching';

const SERVICE_META: Record<Slug, { title: string; catch: string }> = {
  photo: {
    title: '写真',
    catch: '見方が変わると、写真が変わる。',
  },
  soudan: {
    title: '相談',
    catch: 'まずは話してみることから。',
  },
  coaching: {
    title: 'コーチング',
    catch: 'ふんわりしたやりたいを、最初の一歩に。',
  },
};

export async function generateStaticParams() {
  return (['photo', 'soudan', 'coaching'] as Slug[]).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = SERVICE_META[slug as Slug];
  if (!meta) return {};
  return { title: `${meta.title} | U3LAB株式会社` };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = SERVICE_META[slug as Slug];
  if (!meta) notFound();

  return (
    <div className="pt-16">
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-medium text-stone-900 mb-4">{meta.title}</h1>
          <p className="text-base text-stone-500 mb-16 leading-relaxed">{meta.catch}</p>

          {slug === 'photo' && <PhotoContent />}
          {slug === 'soudan' && <SoudanContent />}
          {slug === 'coaching' && <CoachingContent />}
        </div>
      </section>
    </div>
  );
}

function PhotoContent() {
  return (
    <div className="space-y-16">
      <div>
        <p className="text-base text-stone-700 font-medium mb-6">技術より先に、見方が変わる。</p>
        <div className="space-y-3 text-sm text-stone-600">
          <p>ウェディング・ポートレート・出張撮影（全国対応）</p>
          <p>写真教室（月額・単発）</p>
          <p>SNS運用・映像制作</p>
        </div>
      </div>
      {/* TODO: 作品ギャラリー（写真素材待ち） */}
      <div className="h-64 bg-stone-100 flex items-center justify-center">
        <p className="text-xs text-stone-400">作品ギャラリー（写真素材待ち）</p>
      </div>
      <div className="border-t border-stone-100 pt-12">
        <p className="text-base text-stone-700 font-medium mb-2">撮影・写真教室のお申し込み・お問い合わせ</p>
        <p className="text-sm text-stone-400 mb-8">ご予約・ご質問は以下よりどうぞ。</p>
        <div className="space-y-4">
          {/* TODO: PHOTO_SCHOOL_URL */}
          <div className="inline-block border-b border-stone-400 pb-0.5 text-sm text-stone-400 cursor-not-allowed">
            写真教室の詳細・お申し込み（準備中）
          </div>
          <br />
          {/* TODO: PHOTO_INQUIRY_URL */}
          <div className="inline-block border-b border-stone-400 pb-0.5 text-sm text-stone-400 cursor-not-allowed">
            撮影のお問い合わせ（準備中）
          </div>
        </div>
      </div>
    </div>
  );
}

function SoudanContent() {
  return (
    <div className="space-y-8">
      <p className="text-base text-stone-600 leading-loose">
        LINEでの個別お悩み相談。<br />
        気軽に、安心して、最初の一歩を話してみてください。
      </p>
      <div className="border-t border-stone-100 pt-10">
        <p className="text-base text-stone-700 font-medium mb-8">まずは気軽に話してみませんか。</p>
        {/* TODO: LINE_URL */}
        <div className="inline-block border-b border-stone-400 pb-0.5 text-sm text-stone-400 cursor-not-allowed">
          LINEで相談する（準備中）
        </div>
      </div>
    </div>
  );
}

function CoachingContent() {
  return (
    <div className="space-y-8">
      <p className="text-base text-stone-600 leading-loose">
        人生の設計を一緒に考える、伴走型コーチングプログラム。<br />
        詳細は近日公開予定です。
      </p>
      <div className="border-t border-stone-100 pt-10">
        <p className="text-base text-stone-700 font-medium mb-2">2026年秋、はじまります。</p>
        <p className="text-sm text-stone-400 mb-8">スタートに先駆けて、案内をお届けします。</p>
        {/* TODO: COACHING_URL */}
        <div className="inline-block border-b border-stone-400 pb-0.5 text-sm text-stone-400 cursor-not-allowed">
          事前のご案内を受け取る（準備中）
        </div>
      </div>
    </div>
  );
}
