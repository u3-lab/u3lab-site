export default function Home() {
  return (
    <>
      {/* Hero = コンセプトのみ */}
      <section className="relative min-h-screen flex items-end pb-24 bg-stone-100 pt-16">
        {/* TODO: 象徴写真（背景画像） */}
        <div className="max-w-5xl mx-auto w-full px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-stone-900 leading-tight">
            自分の人生を、<br />自分でデザインする。
          </h1>
          {/* TODO: サブコピー確定待ち（光） */}
          <p className="mt-6 text-base sm:text-lg text-stone-600 max-w-lg">
            ひとりで、歩かなくていい。
          </p>
        </div>
      </section>
    </>
  );
}
