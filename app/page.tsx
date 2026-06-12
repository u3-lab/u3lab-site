import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-end pb-24 pt-16">
        <Image
          src="/hero.png"
          alt="U3LAB チームビジュアル"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-5xl mx-auto w-full px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight">
            自分の人生を、<br />自分でデザインする。
          </h1>
          <div className="mt-8 max-w-lg space-y-4">
            <p className="text-base sm:text-lg text-white/80 leading-loose">
              やりたいことはある。<br />
              でも、何から始めればいいかわからない。<br />
              そのままにしてきた時間を、一緒に動かしませんか。
            </p>
            <p className="text-base sm:text-lg text-white/90 leading-loose">
              U3LABは、あなたらしい生き方を全力で応援します。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
