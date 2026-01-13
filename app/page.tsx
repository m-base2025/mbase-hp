// app/page.tsx
import React from "react";

const INFO = {
  brand: "M/BASE（エムベース）",
  operator: "有限会社ミシマ自動車",
  address: "青森県八戸市白銀三島下79-111",
  hours: "10:00–18:00",
  tagline:
    "SUV・4WDカスタム／車検／一般整備／鈑金塗装／車両販売／リース",
};

const CONTACT = {
  phoneDisplay: "0178-38-0669",
  phoneTel: "0178380669",
  faxDisplay: "0178-38-0822",
  lineUrl: "https://lin.ee/sAX3m2a",
};

const GOOGLE_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSeMHSUYErLG0_5J0zsw9fweJkCvODrXB81qfVzvzqwvszLy_A/viewform?embedded=true";

/** 仮画像を使う在庫 */
const STOCK = [
  {
    id: "1",
    name: "ジムニー JB64（ベース車両）",
    year: "2019",
    mileage: "6.2万km",
    price: "ASK",
    note: "カスタム前提のベース車両。内容は相談にて。",
    img: "/stock/placeholder.jpg",
  },
  {
    id: "2",
    name: "ジムニーシエラ JB74（ベース車両）",
    year: "2021",
    mileage: "3.8万km",
    price: "ASK",
    note: "リフトアップ等カスタム相談可能。",
    img: "/stock/placeholder.jpg",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pb-32">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs text-orange-200">
          指定整備工場が運営
        </span>

        <h1 className="mt-5 text-4xl font-black md:text-5xl">
          SUV・4WDを<br />
          <span className="text-orange-500">安心して任せられる</span><br />
          カスタム＆整備
        </h1>

        <p className="mt-4 text-white/75">
          {INFO.operator}が運営するM/BASE。<br />
          カスタム・車検・整備・鈑金塗装・車両販売・リースまで
          ワンストップ対応。
        </p>

        <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4 text-sm">
          {INFO.tagline}
        </div>
      </section>

      {/* STOCK */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-black">在庫車両</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {STOCK.map((v) => (
              <div
                key={v.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-black/20"
              >
                <img
                  src={v.img}
                  alt={v.name}
                  className="h-44 w-full object-cover"
                />

                <div className="p-4">
                  <div className="font-bold">{v.name}</div>

                  <div className="mt-2 grid grid-cols-3 gap-2 text-xs text-white/70">
                    <div>年式：{v.year}</div>
                    <div>走行：{v.mileage}</div>
                    <div>価格：{v.price}</div>
                  </div>

                  <p className="mt-2 text-xs text-white/60">{v.note}</p>

                  <div className="mt-4 flex gap-2">
                    <a
                      href={CONTACT.lineUrl}
                      target="_blank"
                      className="flex-1 rounded-xl border border-orange-500/30 bg-orange-500/10 py-2 text-center text-sm font-bold text-orange-200"
                    >
                      LINE相談
                    </a>
                    <a
                      href="#contact"
                      className="flex-1 rounded-xl bg-orange-600 py-2 text-center text-sm font-bold text-black"
                    >
                      問い合わせ
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-black">総合相談・見積もり</h2>

          <p className="mt-2 text-sm text-white/75">
            車検・整備・カスタム・車両販売までお気軽に。
          </p>

          <div className="mt-4">
            TEL：
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="ml-1 text-orange-300"
            >
              {CONTACT.phoneDisplay}
            </a>
          </div>

          <div className="mt-6 rounded-2xl overflow-hidden border border-white/10">
            <iframe src={GOOGLE_FORM} className="w-full h-[820px]" />
          </div>
        </div>
      </section>

      {/* MOBILE BAR */}
      <div className="fixed bottom-4 left-0 right-0 z-50 md:hidden">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex gap-2 rounded-2xl bg-black/90 p-3">
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="flex-1 rounded-xl bg-orange-600 py-3 text-center font-bold text-black"
            >
              ☎ 電話
            </a>
            <a
              href={CONTACT.lineUrl}
              target="_blank"
              className="flex-1 rounded-xl border border-orange-500/30 bg-orange-500/10 py-3 text-center font-bold text-orange-200"
            >
              💬 LINE
            </a>
          </div>
        </div>
      </div>

      <footer className="border-t border-white/10 py-6 text-center text-xs text-white/60">
        <div>{INFO.brand}</div>
        <div>運営：{INFO.operator}</div>
        <div>© {new Date().getFullYear()} M/BASE</div>
      </footer>
    </main>
  );
}
