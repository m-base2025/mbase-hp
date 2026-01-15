// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

/* ここは共通設定（全ページ共通） */
const INFO = {
  brand: "M/BASE",
  operator: "有限会社ミシマ自動車",
  address: "青森県八戸市白銀三島下79-111",
  hours: "10:00–18:00",
};

const CONTACT = {
  phoneTel: "0178380669",
  lineUrl: "https://lin.ee/sAX3m2a",
};

export const metadata: Metadata = {
  title: "M/BASE（エムベース） | SUV・4WD CUSTOM & MAINTENANCE",
  description:
    "有限会社ミシマ自動車が運営するSUV・4WD拠点。カスタム／車検／一般整備／鈑金塗装／車販／リースまでワンストップ対応。",
};

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="rounded-lg px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white"
    >
      {label}
    </a>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-neutral-950 text-white">
        {/* 背景（全ページ共通） */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_20%_0%,rgba(255,255,255,0.06),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_85%_10%,rgba(249,115,22,0.12),transparent_60%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/95" />
        </div>

        {/* HEADER（全ページ共通） */}
        <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="rounded-xl bg-white px-3 py-2 shadow-sm">
                <img
                  src="/brand/mbase-logo.png"
                  alt="M/BASE"
                  className="h-7 md:h-8 w-auto"
                />
              </div>
              <div className="hidden sm:block min-w-0">
                <div className="text-xs text-white/55">運営：{INFO.operator}</div>
                <div className="text-xs text-white/55">{INFO.hours}</div>
              </div>
            </div>

            <nav className="flex items-center gap-1 text-xs md:text-sm">
              <NavLink href="/" label="トップ" />
              <NavLink href="/services" label="できること" />
              <NavLink href="/stock" label="在庫" />
              <NavLink href="/access" label="地図・会社" />
              <NavLink href="/contact" label="問合せ" />
              <a
                href={CONTACT.lineUrl}
                target="_blank"
                rel="noreferrer"
                className="ml-1 inline-flex rounded-xl bg-orange-600 px-3 py-2 font-black text-black hover:bg-orange-500"
              >
                LINE相談
              </a>
            </nav>
          </div>
        </header>

        {/* 各ページの中身 */}
        {children}

        {/* MOBILE FIXED BAR（全ページ共通） */}
        <div className="fixed inset-x-0 bottom-6 z-[60] md:hidden">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex gap-2 rounded-2xl border border-white/10 bg-neutral-950/90 p-3 shadow-lg backdrop-blur">
              <a
                href={`tel:${CONTACT.phoneTel}`}
                className="flex-1 rounded-xl bg-orange-600 py-3 text-center font-black text-black"
              >
                ☎ 電話
              </a>
              <a
                href={CONTACT.lineUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-xl border border-orange-500/30 bg-orange-500/10 py-3 text-center font-black text-orange-200"
              >
                💬 LINE
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER（全ページ共通） */}
        <footer className="border-t border-white/10 py-10 text-center text-xs text-white/55">
          <div className="mx-auto max-w-6xl px-4 space-y-1">
            <div className="font-black text-white/75">{INFO.brand}</div>
            <div>運営会社：{INFO.operator}</div>
            <div>〒 {INFO.address}</div>
            <div className="pt-3 text-white/35">
              © {new Date().getFullYear()} M/BASE
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
