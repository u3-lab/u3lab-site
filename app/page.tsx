export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-end pb-24 bg-stone-100 pt-16">
        {/* TODO: 象徴写真（背景画像） */}
        <div className="max-w-5xl mx-auto w-full px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-stone-900 leading-tight">
            自分の人生を、<br />自分でデザインする。
          </h1>
          {/* TODO: サブコピー（伴走イメージ・光確定待ち） */}
          <p className="mt-6 text-base sm:text-lg text-stone-600 max-w-lg">
            ひとりで、歩かなくていい。
          </p>
        </div>
      </section>

      {/* 代表の一言 */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-12">
          {/* TODO: 代表写真 */}
          <div className="w-44 h-44 bg-stone-100 flex-shrink-0" />
          <div>
            <p className="text-base text-stone-700 leading-loose">
              「やりたいことはある。でも何から始めればいいかわからない。」<br />
              その2〜3年を、一緒に動かしましょう。
            </p>
            <p className="mt-4 text-sm text-stone-400">— 原田 祐紀</p>
          </div>
        </div>
      </section>
    </>
  );
}
