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
                  浄土真宗 明善寺 住職 / 写真家 / 写真教室主宰 / コンサルティング・コーチングメンター / 経営者
                </p>
                <p className="text-xl font-medium text-stone-900">原田 祐紀</p>
              </div>
            </div>
            <div className="space-y-6 text-base text-stone-600 leading-loose">
              <p className="text-lg font-medium text-stone-800">見方が変わると、人生が変わる。</p>
              <p>
                浄土真宗 明善寺の住職。<br />
                そして、写真家であり、写真教室の主宰であり、コンサルティング・コーチングメンターであり、経営者でもあります。<br />
                肩書きは多くても、やっていることはいつも一つ。——「自分らしく生きる」人を、増やすこと。
              </p>
              <p>
                はじまりは、教育でした。<br />
                23年間、障害児教育の専門家として教壇に立ち、一人ひとりの「その人らしさ」と向き合い続けてきました。
              </p>
              <p>
                写真家としては、世界フォトコンテストで2年連続 世界2位・3位を受賞。<br />
                ネットに溢れる薄く不確かな情報ではなく、「正しい写真との向き合い方」を伝えたい——。その思いで開いた写真教室には、現在260名の受講生。これまでに200名のプロフォトグラファーを送り出してきました。
              </p>
              <p>
                住職としては、法務と寺院経営に携わりながら、SNSでも精力的に発信。住職アカウントは20万人、写真家アカウントは3万人のフォロワーへ、日々「生き方」を届けています。
              </p>
              <p>
                コンサルティング・コーチングメンターとして大切にしているのは、「自分と向き合い、自分らしく生きる」こと。<br />
                その実践の場として生まれたのが、LiFE DESiGN LAB。<br />
                U3LABは、これらの活動のすべてをまとめた場所です。
              </p>
              <p>
                自分の人生を、自分らしくデザインする。<br />
                その一歩を、ここから一緒に。
              </p>
              <p className="text-stone-400">— 原田 祐紀</p>
            </div>
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
