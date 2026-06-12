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

          <div className="flex flex-col sm:flex-row gap-12 mb-16">
            {/* TODO: 代表写真 */}
            <div className="w-48 h-60 bg-stone-100 flex-shrink-0" />
            <div className="space-y-4">
              <div>
                <p className="text-xl font-medium text-stone-900">原田 祐紀</p>
                <p className="text-sm text-stone-500 mt-1">U3LAB株式会社 代表取締役</p>
              </div>
              {/* TODO: 光のコピー（代表メッセージ・人物紹介） */}
              <p className="text-sm text-stone-400 leading-relaxed">
                （代表プロフィールコピー - 光確定待ち）
              </p>
            </div>
          </div>

          {/* TODO: 想い・経歴・3事業との繋がり（光コピー待ち） */}
          <div className="space-y-12">
            <div>
              <h2 className="text-base font-medium text-stone-900 mb-4">想い</h2>
              <p className="text-sm text-stone-500 leading-relaxed">
                （テキスト準備中）
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
