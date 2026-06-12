import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About | U3LAB株式会社',
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-medium text-stone-900 mb-12">About</h1>

          {/* 代表メッセージ */}
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row gap-10 mb-10">
              <div className="relative w-52 h-72 flex-shrink-0 overflow-hidden">
                <Image src="/about-rep.png" alt="原田 祐紀" fill className="object-cover object-top" />
              </div>
              <div className="space-y-3">
                <p className="text-xs text-stone-400 leading-relaxed">
                  写真家 / 写真教室主宰 / 代表取締役
                </p>
                <p className="text-xl font-medium text-stone-900">原田 祐紀</p>
                <p className="text-sm text-stone-600 italic">
                  写真と言葉で、人生の見方を変える人。
                </p>
              </div>
            </div>
            <p className="text-base text-stone-600 leading-loose">
              写真家として、山口を拠点に全国で活動。<br />
              「技術より先に、見方が変わる」という信念で写真教室を主宰し、<br />
              受講者の写真を3ヶ月で変えてきました。
            </p>
            <p className="mt-6 text-base text-stone-600 leading-loose">
              コーチとして、「やりたいことはあるのに動けない」という問いと向き合い続けてきました。<br />
              その経験から生まれたのが、LiFE DESiGN LAB。<br />
              自分の人生を自分でデザインする人を、伴走型で育てます。
            </p>
            <p className="mt-6 text-base text-stone-600 leading-loose">
              U3LABは、その活動のすべてをまとめた場所です。
            </p>
            <blockquote className="mt-8 border-l-2 border-stone-300 pl-6 py-2">
              <p className="text-base text-stone-700 leading-loose">
                「やりたいことはある。でも何から始めればいいかわからない。」<br />
                その2〜3年を、一緒に動かしましょう。
              </p>
              <p className="mt-3 text-sm text-stone-400">— 原田 祐紀</p>
            </blockquote>
          </div>

          {/* 会社概要 */}
          <div>
            <h2 className="text-lg font-medium text-stone-900 mb-6">Company</h2>
            <dl className="space-y-0">
              {[
                { label: '商号',   value: 'U3LAB株式会社' },
                { label: '設立',   value: '2026年5月' },
                { label: '所在地', value: '山口県防府市台道1339' },
                { label: '代表取締役', value: '原田 祐紀' },
                { label: '資本金', value: '100万円' },
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
