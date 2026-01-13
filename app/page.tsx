// app/page.tsx
import React from "react";

const INFO = {
  brand: "M/BASE（エムベース）",
  operator: "有限会社ミシマ自動車",
  address: "青森県八戸市白銀三島下79-111",
  hours: "10:00–18:00",
  mapQuery: "青森県八戸市白銀三島下79-111",
  tagline:
    "SUV・4WDカスタム／車検／一般整備／鈑金塗装／車両販売／リース",
};

const CONTACT = {
  phoneDisplay: "0178-38-0669",
  phoneTel: "0178380669",
  faxDisplay: "0178-38-0822",
  lineUrl: "https://lin.ee/sAX3m2a",
  instagramHandle: "m_base.aomori",
  instagramUrl: "https://www.instagram.com/m_base.aomori/",
  lineQr: "/qr/line.png",
  instaQr: "/qr/instagram.png",
};

const GOOGLE_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSeMHSUYErLG0_5J0zsw9fweJkCvODrXB81qfVzvzqwvszLy_A/viewform?embedded=true";

/**
 * 在庫車両（ここを増やすだけでOK）
 * img は public/stock/ に置いた画像パス
 * price は "ASK" でもOK
 */
const STOCK = [
  {
    id: "stock-1",
    name: "（例）ジムニー JB64",
    year: "2019",
    mileage: "6.2万km",
    price: "ASK",
    note: "ベース車両相談OK／カスタムプラン提案可",
    img: "/stock/stock-1.jpg",
  },
  {
    id: "stock-2",
    name: "（例）ジムニーシエラ JB74",
    year: "2021",
    mileage: "3.8万km",
    price: "ASK",
    note: "足回り・タイヤ込み提案できます",
    img: "/stock/stock-2.jpg",
  },
];

const TRUST_POINTS = [
  {
    title: "有限会社ミシマ自動車が運営",
    desc: "青森県八戸市で長年整備業を行ってきた有限会社ミシマ自動車が運営。指定整備工場としての実績と技術を活かし、カスタムから車検・整備・鈑金塗装まで一貫対応します。",
  },
  {
    title: "指定整備工場としての安心感",
    desc: "国の認可を受けた指定整備工場の基準で対応。安全性・法規を前提に、通る・使えるカスタムを提案します。",
  },
  {
    title: "作って終わりにしない",
    desc: "カスタム後の点検・整備・修理まで対応。維持管理まで任せられるのが強みです。",
  },
];

const SERVICES = [
  {
    title: "SUV・4WDカスタム",
    desc: "リフトアップ、足回り、タイヤ・ホイール、外装・電装まで。安全性・耐久性・法規を重視。",
  },
  {
    title: "車検・法定点検",
    desc: "指定整備工場の基準で対応。カスタム車も含めて安心して任せられる車検。",
  },
  {
    title: "一般整備・メンテナンス",
    desc: "日常点検から故障診断まで。4WD特有の足回り・駆動系も対応。",
  },
  {
    title: "鈑金・塗装",
    desc: "キズ・凹み修理、事故修理、部分塗装、カスタムペイントまで対応。",
  },
  {
    title: "車両販売（新車・中古車）",
    desc: "ベース車両探しからカスタム前提の車両選定まで提案。",
  },
  {
    title: "リース・各種相談",
    desc: "法人・個人向けリース相談にも対応。",
  },
];

function SectionTitle({
  title,
  sub,
}: {
  title: string;
  sub?: string;
}) {
  return (
    <div>
      <h2 className="text-2xl font-black">{title}</h2>
      {sub ? <p className="mt-2 text-sm text-white/75">{sub}</p> : null}
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pb-32 md:pb-0">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs text-orange-200">
          指定整備工場が運営
        </div>

        <h1 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
          SUV・4WDを<br />
          <span className="text-orange-500">安心して任せられる</span>
          <br />
          カスタム＆整備
        </h1>

        <p className="mt-4 text-white/75">
          {INFO.operator}が運営するM/BASE。
          <br />
          カスタムから車検・整備・鈑金塗装・車両販売・リースまで、
          ワンストップで対応します。
        </p>

        <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4 text-sm">
          <div className="font-bold">対応内容</div>
          <div className="mt-1">{INFO.tagline}</div>
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

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#stock"
            className="rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:border-white/35"
          >
            在庫を見る
          </a>
          <a
            href="#contact"
            className="rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-black hover:bg-orange-500"
          >
            相談・見積もり
          </a>
          <a
            href={CONTACT.lineUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-200 hover:bg-orange-500/15"
          >
            LINE相談
          </a>
        </div>
      </section>

      {/* Trust */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <SectionTitle title="信頼できる理由" sub={`運営会社：${INFO.operator}`} />

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {TRUST_POINTS.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="font-bold">{p.title}</div>
                <div className="mt-2 text-sm text-white/75">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <SectionTitle title="できること" />

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="font-bold">{s.title}</div>
                <div className="mt-2 text-sm text-white/75">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stock */}
      <section className="border-t border-white/10" id="stock">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <SectionTitle
            title="在庫車両"
            sub="現在販売中の車両です。気になる車両がありましたら、詳細はお気軽にお問い合わせください。"
          />

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {STOCK.map((v) => (
              <div
                key={v.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-black/20"
              >
                <div className="h-44 w-full bg-black">
                  {/* onError は使わない（Server Componentでビルドが落ちるため） */}
                  <img
                    src={v.img}
                    alt={v.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <div className="text-sm font-bold">{v.name}</div>

                  <div className="mt-2 grid grid-cols-3 gap-2 text-[11px] text-white/70">
                    <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                      <div className="text-white/60">年式</div>
                      <div className="mt-0.5 text-white/85">{v.year}</div>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                      <div className="text-white/60">走行</div>
                      <div className="mt-0.5 text-white/85">{v.mileage}</div>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                      <div className="text-white/60">価格</div>
                      <div className="mt-0.5 text-white/85">{v.price}</div>
                    </div>
                  </div>

                  <div className="mt-2 text-xs text-white/65">{v.note}</div>

                  <div className="mt-4 flex gap-2">
                    <a
                      href={CONTACT.lineUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 rounded-xl border border-orange-500/30 bg-orange-500/10 py-2 text-center text-sm font-bold text-orange-200"
                    >
                      LINEで問合せ
                    </a>
                    <a
                      href="#contact"
                      className="flex-1 rounded-xl bg-orange-600 py-2 text-center text-sm font-bold text-black"
                    >
                      フォーム
                    </a>
                  </div>

                  <div className="mt-2 text-[11px] text-white/55">
                    ※ 在庫は随時変動します。先着順となります。
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/75">
            在庫が無い場合でも、ベース車両の相談・取り寄せが可能です。
            「希望車種」「予算感」「用途（通勤／アウトドア／雪道）」をLINEかフォームで送ってください。
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-white/10" id="contact">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <SectionTitle
            title="総合相談・見積もり"
            sub="車検・整備・カスタム・鈑金塗装・車販・リースまで、まとめてご相談ください。"
          />

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="font-bold">電話・FAX</div>
              <div className="mt-3 text-sm text-white/80 space-y-2">
                <div>
                  電話：
                  <a
                    href={`tel:${CONTACT.phoneTel}`}
                    className="ml-1 text-orange-300 hover:text-orange-200"
                  >
                    {CONTACT.phoneDisplay}
                  </a>
                </div>
                <div>FAX：{CONTACT.faxDisplay}</div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="font-bold">LINE / Instagram</div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-center">
                  <div className="text-xs text-white/70">LINE</div>
                  <img
                    src={CONTACT.lineQr}
                    alt="LINE QR"
                    className="mx-auto mt-2 h-28 w-28 object-contain"
                  />
                  <a
                    href={CONTACT.lineUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-xs text-orange-300 hover:text-orange-200"
                  >
                    友だち追加 →
                  </a>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-center">
                  <div className="text-xs text-white/70">Instagram</div>
                  <img
                    src={CONTACT.instaQr}
                    alt="Instagram QR"
                    className="mx-auto mt-2 h-28 w-28 object-contain"
                  />
                  <a
                    href={CONTACT.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-xs text-orange-300 hover:text-orange-200"
                  >
                    @{CONTACT.instagramHandle} →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl overflow-hidden border border-white/10">
            <iframe src={GOOGLE_FORM} className="w-full h-[820px]" />
          </div>
        </div>
      </section>

      {/* Mobile Fixed Bar */}
      <div className="fixed inset-x-0 bottom-6 z-[60] md:hidden">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex gap-2 rounded-2xl border border-white/10 bg-neutral-950/90 p-3 shadow-lg backdrop-blur">
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="flex-1 rounded-xl bg-orange-600 py-3 text-center font-bold text-black"
            >
              ☎ 電話
            </a>
            <a
              href={CONTACT.lineUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 rounded-xl border border-orange-500/30 bg-orange-500/10 py-3 text-center font-bold text-orange-200"
            >
              💬 LINE
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-xs text-white/60">
        <div className="space-y-1">
          <div className="font-bold">{INFO.brand}</div>
          <div>{INFO.tagline}</div>
          <div>運営会社：{INFO.operator}</div>
          <div>〒 {INFO.address}</div>
          <div>
            TEL {CONTACT.phoneDisplay} / FAX {CONTACT.faxDisplay}
          </div>
          <div className="text-white/40">
            © {new Date().getFullYear()} M/BASE
          </div>
        </div>
      </footer>
    </main>
  );
}
