import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'チームメンバー | U3LAB株式会社',
};

export default function MembersPage() {
  return (
    <div className="pt-16">
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-medium text-stone-900 mb-4">チームメンバー</h1>
          {/* TODO: LiD紹介コピー（光がhikari-marketingに用意中） */}
          <p className="text-sm text-stone-500 mb-16 leading-relaxed">
            （リード文 - テキスト未確定）
          </p>

          {/* TODO: メンバーカード一覧（LiDメンバー スタッフ紹介 叩き台v1 を素材に） */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* placeholder */}
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="aspect-square bg-stone-100" />
                <div>
                  <p className="text-sm font-medium text-stone-900">（名前）</p>
                  <p className="text-xs text-stone-400 mt-1">（役割）</p>
                  <p className="text-xs text-stone-500 mt-3 leading-relaxed">（プロフィール）</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
