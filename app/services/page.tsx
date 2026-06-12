import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '事業 | U3LAB株式会社',
};

const SERVICES = [
  {
    slug: 'photo',
    title: '写真',
    catch: '見方が変わると、写真が変わる。',
    desc: '撮影（ウェディング・ポートレート・出張）、写真教室、SNS／映像制作',
  },
  {
    slug: 'soudan',
    title: '相談',
    catch: 'まずは話してみることから。',
    desc: 'LINE個別お悩み相談',
  },
  {
    slug: 'coaching',
    title: 'コーチング',
    catch: 'ふんわりしたやりたいを、最初の一歩に。',
    desc: '個人・起業家向けコーチング',
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
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group block"
              >
                {/* TODO: 事業サムネイル写真 */}
                <div className="aspect-square bg-stone-100 mb-6" />
                <h2 className="text-base font-medium text-stone-900 mb-2">{s.title}</h2>
                <p className="text-sm text-stone-500 mb-3 leading-relaxed">{s.catch}</p>
                <p className="text-xs text-stone-400 leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
