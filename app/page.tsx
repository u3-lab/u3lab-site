import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="w-full mt-16">

        {/* ── モバイル：画像＋テキスト縦積み ── */}
        <div className="sm:hidden">
          <div className="relative aspect-video w-full">
            <Image
              src="/hero.png"
              alt="U3LAB チームビジュアル"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="px-6 py-10 bg-stone-50">
            <h1 className="text-3xl font-medium tracking-tight text-stone-900 leading-tight">
              自分の人生を、<br />自分でデザインする。
            </h1>
            <div className="mt-6 space-y-3">
              <p className="text-sm text-stone-600 leading-loose">
                やりたいことはある。<br />
                でも、何から始めればいいかわからない。<br />
                そのままにしてきた時間を、一緒に動かしませんか。
              </p>
              <p className="text-sm text-stone-700 leading-loose">
                U3LABは、あなたらしい生き方を全力で応援します。
              </p>
            </div>
          </div>
        </div>

        {/* ── デスクトップ：画像にテキスト重ね合わせ ── */}
        <div className="hidden sm:block relative aspect-video w-full">
          <Image
            src="/hero.png"
            alt="U3LAB チームビジュアル"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full pb-[5%] px-12 md:px-16">
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                自分の人生を、<br />自分でデザインする。
              </h1>
              <div className="mt-6 space-y-3">
                <p className="text-base text-white/80 leading-loose">
                  やりたいことはある。<br />
                  でも、何から始めればいいかわからない。<br />
                  そのままにしてきた時間を、一緒に動かしませんか。
                </p>
                <p className="text-base text-white/90 leading-loose">
                  U3LABは、あなたらしい生き方を全力で応援します。
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
