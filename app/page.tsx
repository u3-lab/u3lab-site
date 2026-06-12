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

      {/* ── ブランドコンセプト ── */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto space-y-8 text-stone-700">
          <p className="text-2xl font-medium text-stone-900 leading-relaxed">
            「誰もが、自分らしく幸せに生きるために」
          </p>
          <p className="text-base leading-loose">
            誰もが、幸せに生きる権利を持っています。
          </p>
          <p className="text-base leading-loose">
            けれど、その幸せを日々の中で実感しながら生きている人は、どれだけいるでしょうか。
          </p>
          <p className="text-base leading-loose">
            悩みや不安、人間関係、社会のしがらみの中で、自分の人生を自分で選べなくなっている人がいます。
          </p>
          <div className="space-y-1 text-base leading-loose">
            <p>本当はこう生きたい。</p>
            <p>もっと自分らしく在りたい。</p>
            <p>誰かの価値観ではなく、自分の手で人生のハンドルを握りたい。</p>
          </div>
          <p className="text-base leading-loose">
            U3LABは、そんな人たちが自分の心と向き合い、自分の人生を主体的に歩んでいくための学びときっかけを届けます。
          </p>
          <p className="text-base leading-loose">
            言葉、表現、行動、発信。<br />
            さまざまな実践を通して、ひとりひとりが幸せを実感できる社会をつくっていきます。
          </p>
        </div>
      </section>
    </>
  );
}
