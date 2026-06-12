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
          <p className="text-sm text-stone-500 mb-16 leading-relaxed">
            各事業へのお問い合わせは下記よりご連絡ください。
          </p>

          <div className="space-y-10">
            {/* 写真 */}
            <div className="border-t border-stone-100 pt-8">
              <h2 className="text-base font-medium text-stone-900 mb-4">写真・写真教室</h2>
              {/* TODO: 写真塾申込リンク（確認事項①） */}
              <p className="text-sm text-stone-400">（導線リンク未確定）</p>
            </div>

            {/* 相談 */}
            <div className="border-t border-stone-100 pt-8">
              <h2 className="text-base font-medium text-stone-900 mb-4">LINE相談</h2>
              {/* TODO: LINE URL（確認事項①） */}
              <p className="text-sm text-stone-400">（LINE導線未確定）</p>
            </div>

            {/* コーチング */}
            <div className="border-t border-stone-100 pt-8">
              <h2 className="text-base font-medium text-stone-900 mb-4">コーチング</h2>
              {/* TODO: 掲載可否は確認事項②待ち */}
              <p className="text-sm text-stone-500">2026年秋、はじまります。</p>
            </div>

            {/* 一般問い合わせ */}
            <div className="border-t border-stone-100 pt-8">
              <h2 className="text-base font-medium text-stone-900 mb-4">一般的なお問い合わせ</h2>
              <a
                href="mailto:info@u3lab.jp"
                className="text-sm text-stone-600 hover:text-stone-900 transition-colors underline underline-offset-4"
              >
                info@u3lab.jp
              </a>
            </div>

            {/* SNS */}
            <div className="border-t border-stone-100 pt-8">
              <h2 className="text-base font-medium text-stone-900 mb-4">SNS</h2>
              {/* TODO: SNSリンク集約（確認事項④） */}
              <p className="text-sm text-stone-400">（SNSリンク未確定）</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
