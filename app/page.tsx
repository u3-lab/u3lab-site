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
          <div className="mt-8 max-w-lg space-y-4">
            <p className="text-base sm:text-lg text-stone-600 leading-loose">
              やりたいことはある。<br />
              でも、何から始めればいいかわからない。<br />
              そのままにしてきた時間を、一緒に動かしませんか。
            </p>
            <p className="text-base sm:text-lg text-stone-700 leading-loose">
              U3LABは、あなたらしい生き方を全力で応援します。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
