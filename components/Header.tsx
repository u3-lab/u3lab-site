'use client';

import Link from 'next/link';
import { useState } from 'react';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Works' },
  { href: '/about', label: 'About' },
  { href: '/members', label: 'Member' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium tracking-widest uppercase text-stone-900 hover:opacity-60 transition-opacity"
        >
          U3LAB Inc.
        </Link>

        {/* デスクトップナビ */}
        <nav className="hidden sm:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* モバイルハンバーガーボタン */}
        <button
          className="sm:hidden p-2 text-stone-600 hover:text-stone-900 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="メニューを開く"
        >
          <span className="block w-5 h-px bg-current mb-1" />
          <span className="block w-5 h-px bg-current mb-1" />
          <span className="block w-5 h-px bg-current" />
        </button>
      </div>

      {/* モバイルメニュー */}
      {open && (
        <nav className="sm:hidden bg-white border-t border-stone-100 px-6 py-6 flex flex-col gap-5 items-end">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
