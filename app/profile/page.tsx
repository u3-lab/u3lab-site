import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プロフィール | U3LAB株式会社',
};

export default function ProfilePage() {
  return (
    <div className="pt-16">
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* TODO: ページ名称確定後に更新（プロフィール／ごあいさつ／代表紹介） */}
          <h1 className="text-2xl font-medium text-stone-900 mb-12">プロフィール</h1>

          {/* 代表写真 + 名前・肩書 */}
          <div className="flex flex-col sm:flex-row gap-12 mb-16">
            {/* TODO: 代表写真 */}
            <div className="w-48 h-60 bg-stone-100 flex-shrink-0" />
            <div className="space-y-3">
              <p className="text-xs text-stone-400 leading-relaxed">
                写真家 / 写真教室主宰 / LiFE DESiGN LAB代表
              </p>
              <p className="text-2xl font-medium text-stone-900">原田 祐紀</p>
              <p className="text-base text-stone-600 italic">
                写真と言葉で、人生の見方を変える人。
              </p>
            </div>
          </div>

          {/* 紹介文 */}
          <div className="mb-16">
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
          </div>

          {/* 代表の一言（トップから移設） */}
          <blockquote className="border-l-2 border-stone-300 pl-6 py-2">
            <p className="text-base text-stone-700 leading-loose">
              「やりたいことはある。でも何から始めればいいかわからない。」<br />
              その2〜3年を、一緒に動かしましょう。
            </p>
            <p className="mt-3 text-sm text-stone-400">— 原田 祐紀</p>
          </blockquote>
        </div>
      </section>
    </div>
  );
}
