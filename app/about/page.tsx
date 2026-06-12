import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '会社情報 | U3LAB株式会社',
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-medium text-stone-900 mb-12">会社情報</h1>

          {/* 代表メッセージ */}
          <div className="mb-16">
            <h2 className="text-lg font-medium text-stone-900 mb-6">代表メッセージ</h2>
            <p className="text-base text-stone-600 leading-loose">
              写真家として、コーチとして、<br />
              「自分の人生を自分でデザインする」という問いに向き合ってきました。<br />
              その問いを、一人でも多くの人と共有するためにU3LABをつくりました。
            </p>
          </div>

          {/* 会社概要 */}
          <div className="mb-16">
            <h2 className="text-lg font-medium text-stone-900 mb-6">会社概要</h2>
            <dl className="space-y-0">
              {[
                { label: '商号',     value: 'U3LAB株式会社' },
                { label: '設立',     value: '2026年5月' },
                { label: '所在地',   value: '山口県防府市台道1339' },
                { label: '代表',     value: '原田 祐紀' },
                { label: '資本金',   value: '100万円' },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-8 py-4 border-b border-stone-100">
                  <dt className="w-24 text-sm text-stone-400 flex-shrink-0">{label}</dt>
                  <dd className="text-sm text-stone-700">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
