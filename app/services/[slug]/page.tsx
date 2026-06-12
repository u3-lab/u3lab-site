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
          <p className="text-base text-stone-500 mb-16">{meta.catch}</p>

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
      {/* TODO: 撮影（ウェディング/ポートレート/出張・全国対応） */}
      <div>
        <h2 className="text-lg font-medium text-stone-900 mb-4">撮影</h2>
        <p className="text-sm text-stone-500">ウェディング・ポートレート・出張撮影（全国対応）</p>
        {/* TODO: 既存導線リンク（確認事項①） */}
      </div>
      {/* TODO: 写真教室（月額/単発） */}
      <div>
        <h2 className="text-lg font-medium text-stone-900 mb-4">写真教室</h2>
        <p className="text-sm text-stone-500">月額・単発コース</p>
        {/* TODO: 写真塾申込リンク（確認事項①） */}
      </div>
      {/* TODO: SNS/映像・作品ギャラリー */}
      <div>
        <h2 className="text-lg font-medium text-stone-900 mb-4">SNS・映像</h2>
        {/* TODO: 制作実績 */}
      </div>
    </div>
  );
}

function SoudanContent() {
  return (
    <div className="space-y-8">
      {/* TODO: 概要/対象/流れ */}
      <p className="text-sm text-stone-500">LINE個別お悩み相談</p>
      {/* TODO: LINE導線リンク（確認事項①） */}
      <div>
        <p className="text-sm text-stone-400">（詳細・導線テキスト未確定）</p>
      </div>
    </div>
  );
}

function CoachingContent() {
  return (
    <div className="space-y-8">
      {/* TODO: 概要/対象/メニュー */}
      <p className="text-sm text-stone-500">個人・起業家向けコーチング</p>
      {/* TODO: 掲載可否は確認事項②待ち */}
      <div className="py-12 text-center border border-stone-200">
        <p className="text-base text-stone-500">2026年秋、はじまります。</p>
      </div>
    </div>
  );
}
