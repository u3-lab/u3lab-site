import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '事業 | U3LAB株式会社',
};

const SERVICES = [
  {
    slug: 'photo',
    title: '写真撮影・写真教室事業',
    catch: '見方が変わると、写真が変わる。',
    desc: '写真撮影（ウェディング・ポートレート・プロフィール）、写真教室事業',
    image: '/services/photo.png',
    cta: { label: '公式LINE', href: 'https://lin.ee/ndMLYPo' },
  },
  {
    slug: 'soudan',
    title: '相談事業',
    catch: 'まずは話してみることから。',
    desc: '公式LINEによる個別のお悩み相談',
    image: '/services/soudan.png',
    note: '※掲載写真はイメージです。対面でのご相談は承っておりません（公式LINEによる個別相談のみ）。',
    cta: { label: '公式LINE', href: 'https://lin.ee/zvYe1tQ' },
  },
  {
    slug: 'coaching',
    title: 'コーチング事業',
    catch: 'ふんわりしたやりたいを、最初の一歩に。',
    desc: '個人・起業家向けコーチング、オンラインサロン・個別コーチング',
    image: '/services/coaching.png',
    cta: { label: 'しばらくお待ちください', href: null },
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-medium text-stone-900 mb-16">事業</h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <div key={s.slug}>
                <div className="aspect-square relative overflow-hidden mb-6">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <h2 className="text-base font-medium text-stone-900 mb-2">{s.title}</h2>
                <p className="text-sm text-stone-500 mb-3 leading-relaxed">{s.catch}</p>
                <p className="text-xs text-stone-400 leading-relaxed">{s.desc}</p>
                {s.note && (
                  <p className="text-xs text-stone-400 leading-relaxed mt-3">{s.note}</p>
                )}
                {s.cta && (
                  s.cta.href ? (
                    <a
                      href={s.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 border border-stone-400 px-4 py-2 text-xs text-stone-600 hover:bg-stone-50 transition-colors"
                    >
                      {s.cta.label}
                    </a>
                  ) : (
                    <span className="inline-block mt-4 border border-stone-200 px-4 py-2 text-xs text-stone-300 cursor-not-allowed">
                      {s.cta.label}
                    </span>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
