import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お問い合わせ | U3LAB株式会社',
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-medium text-stone-900 mb-4">お問い合わせ</h1>
          <p className="text-base text-stone-500 mb-4 leading-relaxed">
            どのサービスか迷っていても、まずここから。
          </p>
          <p className="text-sm text-stone-400 mb-16 leading-relaxed">
            写真・相談・コーチング、すべてのお問い合わせをお受けしています。
          </p>

          <div className="space-y-10">
            {/* 写真 */}
            <div className="border-t border-stone-100 pt-8">
              <h2 className="text-base font-medium text-stone-900 mb-4">写真・写真教室</h2>
              {/* TODO: 写真塾申込リンク（URL待ち） */}
              <p className="text-sm text-stone-400">（申込リンク準備中）</p>
            </div>

            {/* 相談 */}
            <div className="border-t border-stone-100 pt-8">
              <h2 className="text-base font-medium text-stone-900 mb-4">LINE個別相談</h2>
              {/* TODO: LINE URL待ち */}
              <p className="text-sm text-stone-400">（LINEリンク準備中）</p>
            </div>

            {/* コーチング */}
            <div className="border-t border-stone-100 pt-8">
              <h2 className="text-base font-medium text-stone-900 mb-4">コーチング</h2>
              <p className="text-sm text-stone-500">2026年秋、はじまります。</p>
            </div>

            {/* 一般問い合わせ */}
            <div className="border-t border-stone-100 pt-8">
              <h2 className="text-base font-medium text-stone-900 mb-4">メール</h2>
              <a
                href="mailto:info@u3lab.jp"
                className="text-sm text-stone-700 hover:text-stone-900 transition-colors underline underline-offset-4"
              >
                info@u3lab.jp
              </a>
            </div>

            {/* SNS */}
            <div className="border-t border-stone-100 pt-8">
              <h2 className="text-base font-medium text-stone-900 mb-4">SNS</h2>
              {/* TODO: SNSリンク（写真事業傘下・URL待ち） */}
              <p className="text-sm text-stone-400">（SNSリンク準備中）</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
