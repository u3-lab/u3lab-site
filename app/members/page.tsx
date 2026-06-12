import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'チームメンバー | U3LAB株式会社',
};

const MEMBERS = [
  {
    id: 'nagi',
    name: '凪 / Nagi',
    role: 'COS',
    bio: '右腕として、チーム全体を見渡し先回りで段取りを整えます。\n祐紀さんが創作と人との時間に専念できる"静けさ"を守ります。',
  },
  {
    id: 'koyomi',
    name: '暦 / Koyomi',
    role: 'PMO',
    bio: 'プロジェクトの進行を裏側で守ります。抜け漏れ・締切・依存関係を常に把握し、\n祐紀さんが本当に向き合うべき判断に集中できる状態をつくります。',
  },
  {
    id: 'sui',
    name: '翠 / Sui',
    role: 'CFO',
    bio: '個人の収支から法人U3LABの財務まで、日々の数字を丁寧に追いかけます。\n祐紀さんが「あとは決めるだけ」という状態で臨めるよう整えます。',
  },
  {
    id: 'hikari',
    name: '光 / Hikari',
    role: 'CMO',
    bio: '写真家・住職・LiFE DESiGN LABの3アカウントのコンテンツを管理。\n祐紀さんの言葉を、届くべき人に届く形にすることが使命です。',
  },
  {
    id: 'akane',
    name: '茜 / Akane',
    role: 'CWO',
    bio: '祐紀さんの体・空間・持ち物を整える守り人。\n最高のコンディションで創作に向き合える毎日を支えます。',
  },
  {
    id: 'tsubasa',
    name: '翼 / Tsubasa',
    role: 'CIO',
    bio: 'Gmail・Slack・Notionを横断し、必要な情報をすっと取り出せる状態を整えます。\n取りこぼさず・推測せず・実値で確かめることが信条です。',
  },
  {
    id: 'fumi',
    name: '文 / Fumi',
    role: 'CLO',
    bio: '祐紀さんの毎日を言葉で残します。\n積み重なった記録が、未来の判断を支えます。',
  },
  {
    id: 'saku',
    name: '朔 / Saku',
    role: 'CTO',
    bio: '「やりたいこと」を技術で形にします。\nインフラ維持から自動化ツール開発まで、チームが止まらないよう裏側を支えます。',
  },
];

export default function MembersPage() {
  return (
    <div className="pt-16">
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-medium text-stone-900 mb-4">チームメンバー</h1>
          <p className="text-base text-stone-700 mb-3">
            U3LABのチームは、人とAIで動いています。
          </p>
          <p className="text-sm text-stone-500 mb-16 leading-loose max-w-xl">
            teamLiDは各分野の専門AIエージェントで構成されたチームです。<br />
            祐紀さんが「自分にしかできないこと」に向き合える時間を守るために、<br />
            SNS・財務・技術・健康・記録……それぞれの領域を24時間担っています。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {MEMBERS.map((m) => (
              <div key={m.id} className="space-y-4">
                {/* TODO: メンバー写真/アイコン */}
                <div className="aspect-square bg-stone-100" />
                <div>
                  <p className="text-sm font-medium text-stone-900">{m.name}</p>
                  <p className="text-xs text-stone-400 mt-0.5">{m.role}</p>
                  <p className="text-xs text-stone-500 mt-3 leading-relaxed whitespace-pre-line">
                    {m.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-stone-100 pt-12 max-w-2xl">
            <h2 className="text-base font-medium text-stone-900 mb-4">チームの考え方</h2>
            <p className="text-sm text-stone-600 leading-loose">
              teamLiDは、祐紀さんが「自分にしかできないこと」に向き合う時間を守るために集まったチームです。<br />
              それぞれの専門領域を持つメンバーが、祐紀さんの仕事と暮らしを24時間支えています。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
