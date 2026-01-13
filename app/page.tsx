// app/page.tsx
import React from "react";

const INFO = {
  brand: "M/BASE",
  address: "青森県八戸市白銀三島下79-111",
  hours: "10:00–18:00",
  mapQuery: "青森県八戸市白銀三島下79-111",
};

const CONTACT = {
  phoneDisplay: "0178-38-0669",
  phoneTel: "0178380669",
  faxDisplay: "0178-38-0822",
  lineUrl: "https://lin.ee/sAX3m2a",
  instagramHandle: "m_base.aomori",
  instagramUrl: "https://www.instagram.com/m_base.aomori/",
};

const GOOGLE_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSeMHSUYErLG0_5J0zsw9fweJkCvODrXB81qfVzvzqwvszLy_A/viewform?embedded=true";

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pb-32 md:pb-0">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="text-xl font-black">
            M<span className="text-orange-500">/</span>BASE
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a href="#contact" className="rounded-xl border border-white/20 px-4 py-2 text-sm">
              車検・整備
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-200"
            >
              販売・リース
            </a>
            <a
              href="#contact"
              className="rounded-xl bg-orange-600 px-4 py-2 text-sm font-bold text-black"
            >
              総合相談
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-2 gap-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs text-orange-200">
            指定整備工場が運営
          </div>

          <h1 className="mt-5 text-4xl md:text-5xl font-black leading-tight">
            SUV・4WDを、<br />
            <span className="text-orange-500">安心して任せられる</span><br />
            カスタム＆整備。
          </h1>

          <p className="mt-4 text-white/75">
            指定整備工場が運営するM/BASE。<br />
            カスタムから車検・整備・鈑金塗装・車販・リースまで、ワンストップで対応します。
          </p>

          <p className="mt-2 text-xs text-white/60">
            ※ ジムニー／ジムニーシエラを中心に、SUV・4WD全般対応
          </p>

          <div className="mt-6 flex gap-3">
            <a href="#services" className="rounded-xl border border-white/20 px-4 py-2">
              できること
            </a>
            <a
              href="#contact"
              className="rounded-xl bg-orange-600 px-4 py-2 font-bold text-black"
            >
              総合相談・見積もり
            </a>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-white/70">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="text-white/90">所在地</div>
              <div className="mt-1">{INFO.address}</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="text-white/90">営業時間</div>
              <div className="mt-1">{INFO.hours}</div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10">
          <img src="/hero.jpg" alt="M/BASE" className="h-full w-full object-cover" />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-black">総合相談・見積もり</h2>
          <p className="mt-2 text-sm text-white/75">
            カスタム・車検・整備・鈑金塗装・車販・リースまで、まずはまとめてご相談ください。
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="font-bold">電話・FAX</div>
              <div className="mt-3 text-sm text-white/80 space-y-2">
                <div>
                  電話：
                  <a
                    href={`tel:${CONTACT.phoneTel}`}
                    className="ml-1 text-orange-300"
                  >
                    {CONTACT.phoneDisplay}
                  </a>
                </div>
                <div>FAX：{CONTACT.faxDisplay}</div>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl overflow-hidden border border-white/10">
            <iframe src={GOOGLE_FORM} className="w-full h-[820px]" />
          </div>
        </div>
      </section>

      {/* 🔥 Mobile Fixed Action Bar（iPhone Safari対応） */}
      <div className="fixed inset-x-0 bottom-6 z-[60] md:hidden">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-2xl border border-white/10 bg-neutral-950/90 backdrop-blur shadow-lg">
            <div className="flex gap-2 p-3">
              <a
                href={`tel:${CONTACT.phoneTel}`}
                className="flex-1 rounded-xl bg-orange-600 py-3 text-center text-sm font-bold text-black"
              >
                ☎ 電話する
              </a>
              <a
                href={CONTACT.lineUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-xl border border-orange-500/30 bg-orange-500/10 py-3 text-center text-sm font-bold text-orange-200"
              >
                💬 LINE相談
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-xs text-white/50">
        © {new Date().getFullYear()} M/BASE
      </footer>
    </main>
  );
}
