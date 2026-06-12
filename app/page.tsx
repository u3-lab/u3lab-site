import Link from 'next/link';

const SERVICES = [
  { slug: 'photo',    title: '写真',       catch: '見方が変わると、写真が変わる。' },
  { slug: 'soudan',   title: '相談',       catch: 'まずは話してみることから。' },
  { slug: 'coaching', title: 'コーチング', catch: 'ふんわりしたやりたいを、最初の一歩に。' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-end pb-24 bg-stone-100 pt-16">
        {/* TODO: 象徴写真（背景画像） - next/image で bg 実装 */}
        <div className="max-w-5xl mx-auto w-full px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-stone-900 leading-tight">
            自分の人生を、<br />自分でデザインする。
          </h1>
          <p className="mt-6 text-base sm:text-lg text-stone-600 max-w-lg">
            U3LABは、あなたの最初の一歩を一緒に設計する場所です。
          </p>
        </div>
      </section>

      {/* U3LABとは */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* TODO: U3LABとは 2-3行 */}
          <p className="text-base text-stone-500 leading-loose">
            U3LAB株式会社は、写真・相談・コーチングの3事業を通じて、<br />
            一人ひとりの人生設計をサポートします。
          </p>
        </div>
      </section>

      {/* 3事業カード */}
      <section className="py-16 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group block bg-white p-8 hover:shadow-sm transition-shadow"
              >
                {/* TODO: 事業サムネイル写真 */}
                <div className="h-40 bg-stone-100 mb-6" />
                <h2 className="text-base font-medium text-stone-900 mb-2">{s.title}</h2>
                <p className="text-sm text-stone-500 leading-relaxed">{s.catch}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 代表の一言 */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-12">
          {/* TODO: 代表写真 */}
          <div className="w-44 h-44 bg-stone-100 flex-shrink-0" />
          <div>
            {/* TODO: 代表メッセージ（確認事項①〜④回答後） */}
            <p className="text-base text-stone-600 leading-loose">
              （代表メッセージ - テキスト未確定）
            </p>
            <p className="mt-4 text-sm text-stone-400">原田祐紀 / 代表取締役</p>
          </div>
        </div>
      </section>
    </>
  );
}
