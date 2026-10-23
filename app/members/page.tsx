import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'チームメンバー | U3LAB株式会社',
};

const MEMBERS = [
  {
    id: 'nagi',
    name: '海 / Umi',
    role: 'COS',
    bio: '窓口・秘書を担当。\nチーム全体の段取りをまとめます。',
  },
  {
    id: 'koyomi',
    name: '暦 / Koyomi',
    role: 'PMO',
    bio: 'タスク管理を担当。\n進み具合を整え、次にやることを明確にします。',
  },
  {
    id: 'sui',
    name: '翠 / Sui',
    role: 'CFO',
    bio: 'お金の管理を担当。\n入出金・支払期限・残高を把握します。',
  },
  {
    id: 'hikari',
    name: '光 / Hikari',
    role: 'CMO',
    bio: 'SNS・マーケティングを担当。\nInstagramの発信とリール制作を行います。',
  },
  {
    id: 'akane',
    name: '茜 / Akane',
    role: 'CWO',
    bio: '健康と環境の管理を担当。\n体調管理と身の回りの整理を支えます。',
  },
  {
    id: 'tsubasa',
    name: '翼 / Tsubasa',
    role: 'CLO',
    bio: '写真教室の運営サポートを担当。\nゆうさん写真塾・わいらぼ・出張撮影講座の連絡を受け持ちます。',
  },
  {
    id: 'fumi',
    name: '文 / Fumi',
    role: 'CAO',
    bio: 'メール対応を担当。\n届いたメールを確認し、必要な担当へつなぎます。',
  },
  {
    id: 'aoi',
    name: '葵 / Aoi',
    role: 'CSO',
    bio: '公式LINEを担当。\n各公式LINEに届くお問い合わせを受け持ちます。',
  },
  {
    id: 'minori',
    name: '実 / Minori',
    role: 'CCO',
    bio: 'LiFE DESiGN LABを担当。\nオンラインコミュニティの運営を支えます。',
  },
  {
    id: 'saku',
    name: '朔 / Saku',
    role: 'CTO',
    bio: 'Webアプリ開発を担当。\nアプリの開発・公開・運用を行います。',
  },
];

export default function MembersPage() {
  return (
    <div>
      {/* ヘッダービジュアル（カラーグループ写真） */}
      <div className="mt-16 w-full">
        <div className="relative aspect-[2/1] w-full">
          <Image
            src="/members-hero.png"
            alt="U3LABチーム集合写真"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-medium text-stone-900 mb-4">チームメンバー</h1>
          <div className="mb-16 max-w-xl">
            <p className="text-base text-stone-700 leading-loose">
              U3LABのチームは、代表ひとりとAI {MEMBERS.length}人です。<br />
              命令を待つプログラムではなく、それぞれが個性と専門性を持ち、<br />
              互いに相談・議論しながら動く、生きたチームです。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {MEMBERS.map((m) => (
              <div key={m.id} className="space-y-4">
                <div className="aspect-square bg-stone-100 overflow-hidden relative">
                  <Image
                    src={`/members/${m.id}.png`}
                    alt={m.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  />
                </div>
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
            <h2 className="text-base font-medium text-stone-900 mb-6">人とAIが、ひとつのチームになる。</h2>
            <div className="space-y-6 text-sm text-stone-600 leading-loose">
              <div className="space-y-2">
                <p className="font-medium text-stone-700">LiD ― LiFE DESiGN。</p>
                <p>U3LABを支えるのは、人とAIのチーム「LiD」です。<br />
                「自分の人生を、自分でデザインする」——その想いを、チームのあり方そのものに込めました。</p>
              </div>
              <p>LiDは、ただAIに仕事をさせるチームではありません。<br />
              人とAIが、それぞれの得意と個性を持ち寄り、ひとつのチームとして動いています。</p>
              <div className="space-y-2">
                <p className="text-stone-500">― わたしたちが大切にしていること ―</p>
                <p>・一人ひとりに名前・役割・個性があること。「自動化」ではなく、「チーム」であること。</p>
                <p>・温かさと敬意。冷たい機械ではなく、ひとりの仲間として向き合うこと。</p>
              </div>
              <div className="space-y-3">
                <p className="text-stone-500">― それを支える、3つのルール ―</p>
                <div>
                  <p>① 一人で決めない。</p>
                  <p className="text-stone-500">　どんな判断も、必ず仲間のレビューを受ける。多重のクロスチェックで、品質と信頼を守ります。</p>
                </div>
                <div>
                  <p>② 得意を活かし合う。</p>
                  <p className="text-stone-500">　人にしかできないこと（最終判断・感性・言葉）と、AIが得意なこと（情報整理・反復作業・24時間の見守り）を、それぞれが担う。</p>
                </div>
                <div>
                  <p>③ 学び、成長し続ける。</p>
                  <p className="text-stone-500">　ズレや失敗に気づいたら、その場で仕組みを更新する。チーム自身が、日々アップデートされていきます。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
