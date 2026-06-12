import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-sm font-medium tracking-widest uppercase text-stone-900 hover:opacity-60 transition-opacity">
          U3LAB Inc.
        </Link>
        <nav className="flex items-center gap-8">
          <Link href="/services" className="text-sm text-stone-600 hover:text-stone-900 transition-colors">
            事業
          </Link>
          <Link href="/profile" className="text-sm text-stone-600 hover:text-stone-900 transition-colors">
            プロフィール
          </Link>
          <Link href="/members" className="text-sm text-stone-600 hover:text-stone-900 transition-colors">
            メンバー
          </Link>
          <Link href="/about" className="text-sm text-stone-600 hover:text-stone-900 transition-colors">
            会社情報
          </Link>
          <Link href="/contact" className="text-sm text-stone-600 hover:text-stone-900 transition-colors">
            お問い合わせ
          </Link>
        </nav>
      </div>
    </header>
  );
}
