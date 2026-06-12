export default function Footer() {
  return (
    <footer className="border-t border-stone-100 py-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-stone-400 tracking-widest uppercase">U3LAB</p>
        <p className="text-xs text-stone-400">
          © {new Date().getFullYear()} U3LAB株式会社. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
