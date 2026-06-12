'use client';

import { useState } from 'react';

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ID
  ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
  : '';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!FORMSPREE_ENDPOINT) return;
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('done');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="pt-16">
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-medium text-stone-900 mb-4">お問い合わせ</h1>
          <p className="text-base text-stone-500 mb-16 leading-relaxed">
            写真・個別相談・コーチングなど、どんなことでもお気軽にどうぞ。
          </p>

          {status === 'done' ? (
            <p className="text-base text-stone-700 leading-loose">
              送信しました。2〜3営業日以内にご連絡いたします。
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm text-stone-600 mb-2">
                  お名前
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full border-b border-stone-300 py-2 text-sm text-stone-900 bg-transparent focus:outline-none focus:border-stone-900 transition-colors placeholder:text-stone-300"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-stone-600 mb-2">
                  メールアドレス
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full border-b border-stone-300 py-2 text-sm text-stone-900 bg-transparent focus:outline-none focus:border-stone-900 transition-colors placeholder:text-stone-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-stone-600 mb-2">
                  お問い合わせ内容
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full border-b border-stone-300 py-2 text-sm text-stone-900 bg-transparent focus:outline-none focus:border-stone-900 transition-colors placeholder:text-stone-300 resize-none"
                  placeholder="ご質問・ご相談内容をご記入ください"
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-500">
                  送信に失敗しました。時間をおいて再度お試しください。
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="text-sm text-stone-900 border-b border-stone-900 pb-0.5 hover:opacity-60 transition-opacity disabled:opacity-40"
              >
                {status === 'sending' ? '送信中…' : '送信する'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
