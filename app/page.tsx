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
  instagramHandle: "m_base.aomori",
  instagramUrl: "https://www.instagram.com/m_base.aomori/",
  lineQr: "/qr/line.png",
  instaQr: "/qr/instagram.png",
};

const GOOGLE_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSeMHSUYErLG0_5J0zsw9fweJkCvODrXB81qfVzvzqwvszLy_A/viewform?embedded=true";

const STOCK = [
  {
    id: "stock-1",
    name: "ジムニー JB64（ベース車両）",
    year: "2019",
    mileage: "6.2万km",
    price: "ASK",
    note: "カスタム前提のベース車両。内容は相談にて。",
    img: "/stock/placeholder.jpg",
  },
  {
    id: "stock-2",
    name: "ジムニーシエラ JB74（ベース車両）",
    year: "2021",
    mileage: "3.8万km",
    price: "ASK",
    note: "リフトアップ等カスタム相談可能。",
    img: "/stock/placeholder.jpg",
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
    <div className="flex items-end justify-between gap-4">
      <div>
        <h2 className="text-2xl font-black tracking-tight md:text-3xl">
          {title}
        </h2>
        {sub ? <p className="mt-2 text-sm text-white/70">{sub}</p> : null}
      </div>
      <div className="hidden md:block text-xs text-white/40">{INFO.brand}</div>
    </div>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur " +
        className
      }
    >
      {children}
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs text-orange-200">
      <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
      {children}
    </span>
  );
}

export default function Page() {
  const mapsSearch = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    INFO.address
  )}`;
  const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
    INFO.address
  )}&output=embed`;

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* 背景 */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_0%,rgba(249,115,22,0.18),transparent_55%),radial-gradient(800px_600px_at_80%_10%,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.8))]" />
      </div>

      {/* TOP NAV */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="text-sm font-black tracking-wide">{INFO.brand}</div>
            <span className="hidden sm:inline text-xs text-white/45">
              運営：{INFO.operator}
            </span>
          </div>
          <nav className="flex items-center gap-2 text-xs">
            <a
              className="rounded-lg px-3 py-2 text-white/70 hover:bg-white/5"
              href="#services"
            >
              できること
            </a>
            <a
              className="rounded-lg px-3 py-2 text-white/70 hover:bg-white/5"
              href="#stock"
            >
              在庫
            </a>
            <a
              className="rounded-lg px-3 py-2 text-white/70 hover:bg-white/5"
              href="#contact"
            >
              問合せ
            </a>
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex rounded-xl border border-white/15 bg-white/[0.03] px-3 py-2 font-bold text-white/85 hover:bg-white/[0.06]"
            >
              Instagram
            </a>
            <a
              href={CONTACT.lineUrl}
              target="_blank"
              rel="noreferrer"
              className="ml-1 hidden sm:inline-flex rounded-xl border border-orange-500/30 bg-orange-500/10 px-3 py-2 font-bold text-orange-200 hover:bg-orange-500/15"
            >
              LINE相談
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-7">
            <Chip>指定整備工場が運営</Chip>

            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-6xl">
              SUV・4WDを
              <br />
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

            <Card className="mt-6 p-5">
              <div className="text-xs text-white/60">対応内容</div>
              <div className="mt-1 font-semibold">{INFO.tagline}</div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-white/70">
                <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                  <div className="text-white/50">所在地</div>
                  <div className="mt-1">{INFO.address}</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                  <div className="text-white/50">営業時間</div>
                  <div className="mt-1">{INFO.hours}</div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href="#services"
                  className="rounded-xl border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-bold text-white hover:bg-white/[0.06]"
                >
                  できること
                </a>
                <a
                  href="#stock"
                  className="rounded-xl border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-bold text-white hover:bg-white/[0.06]"
                >
                  在庫を見る
                </a>
                <a
                  href={mapsSearch}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-bold text-white hover:bg-white/[0.06]"
                >
                  地図
                </a>
                <a
                  href="#contact"
                  className="rounded-xl bg-orange-600 px-4 py-2 text-sm font-black text-black hover:bg-orange-500"
                >
                  相談・見積もり
                </a>
              </div>
            </Card>
          </div>

          <div className="md:col-span-5">
            <Card className="overflow-hidden">
              <div className="border-b border-white/10 p-5">
                <div className="text-xs text-white/60">安心ポイント</div>
                <div className="mt-1 text-lg font-black">
                  指定整備工場 × 4WD/SUV
                </div>
                <p className="mt-2 text-sm text-white/70">
                  「通る」「使える」「長持ちする」カスタムを前提に提案します。
                </p>
              </div>
              <div className="grid gap-3 p-5">
                {TRUST_POINTS.map((p) => (
                  <div
                    key={p.title}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="font-bold">{p.title}</div>
                    <div className="mt-1 text-sm text-white/70">{p.desc}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-4 py-12" id="services">
        <SectionTitle
          title="できること"
          sub="整備工場だから、カスタムだけじゃなく“維持”まで任せられる。"
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {SERVICES.map((s) => (
            <Card key={s.title} className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="font-black">{s.title}</div>
                <span className="rounded-full border border-white/10 bg-black/20 px-2 py-1 text-[11px] text-white/60">
                  対応可
                </span>
              </div>
              <div className="mt-2 text-sm text-white/70">{s.desc}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* STOCK */}
      <section className="mx-auto max-w-6xl px-4 py-12" id="stock">
        <SectionTitle
          title="在庫車両"
          sub="写真が揃うまで仮画像表示。実在庫は随時更新します。"
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STOCK.map((v) => (
            <Card key={v.id} className="overflow-hidden">
              <div className="relative h-44 w-full bg-black">
                <img
                  src={v.img}
                  alt={v.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[11px] text-white/80 backdrop-blur">
                  在庫
                </div>
              </div>

              <div className="p-5">
                <div className="text-sm font-black">{v.name}</div>

                <div className="mt-3 grid grid-cols-3 gap-2 text-[11px] text-white/70">
                  <div className="rounded-xl border border-white/10 bg-black/20 p-2">
                    <div className="text-white/50">年式</div>
                    <div className="mt-0.5 text-white/85">{v.year}</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/20 p-2">
                    <div className="text-white/50">走行</div>
                    <div className="mt-0.5 text-white/85">{v.mileage}</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/20 p-2">
                    <div className="text-white/50">価格</div>
                    <div className="mt-0.5 text-white/85">{v.price}</div>
                  </div>
                </div>

                <div className="mt-3 text-xs text-white/65">{v.note}</div>

                <div className="mt-4 flex gap-2">
                  <a
                    href={CONTACT.lineUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-xl border border-orange-500/30 bg-orange-500/10 py-2 text-center text-sm font-black text-orange-200 hover:bg-orange-500/15"
                  >
                    LINEで問合せ
                  </a>
                  <a
                    href="#contact"
                    className="flex-1 rounded-xl bg-orange-600 py-2 text-center text-sm font-black text-black hover:bg-orange-500"
                  >
                    フォーム
                  </a>
                </div>

                <div className="mt-2 text-[11px] text-white/45">
                  ※ 在庫は随時変動します。先着順です。
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-6 p-5">
          <div className="text-sm font-black">在庫が無い場合でもOK</div>
          <p className="mt-2 text-sm text-white/70">
            ベース車両の相談・取り寄せが可能です。
            「希望車種」「予算」「用途（通勤／アウトドア／雪道）」をLINEかフォームで送ってください。
          </p>
        </Card>
      </section>

      {/* CONTACT + MAP + QR */}
      <section className="mx-auto max-w-6xl px-4 py-12" id="contact">
        <SectionTitle
          title="総合相談・見積もり"
          sub="車検・整備・カスタム・鈑金塗装・車販・リースまでまとめて。"
        />

        {/* 地図＋QR（復活） */}
        <Card className="mt-6 p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="text-sm font-black">地図・アクセス</div>
              <div className="mt-2 text-sm text-white/70">{INFO.address}</div>
              <a
                className="mt-3 inline-block rounded-xl border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-bold text-white hover:bg-white/[0.06]"
                href={mapsSearch}
                target="_blank"
                rel="noreferrer"
              >
                Googleマップで開く →
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center">
                <div className="text-xs text-white/60">LINE</div>
                <img
                  src={CONTACT.lineQr}
                  alt="LINE QR"
                  className="mx-auto mt-2 h-28 w-28 object-contain"
                />
                <a
                  href={CONTACT.lineUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-xs font-bold text-orange-300 hover:text-orange-200"
                >
                  友だち追加 →
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center">
                <div className="text-xs text-white/60">Instagram</div>
                <img
                  src={CONTACT.instaQr}
                  alt="Instagram QR"
                  className="mx-auto mt-2 h-28 w-28 object-contain"
                />
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-xs font-bold text-orange-300 hover:text-orange-200"
                >
                  @{CONTACT.instagramHandle} →
                </a>
              </div>
            </div>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="map"
              className="h-[320px] w-full"
              loading="lazy"
              src={mapsEmbed}
            />
          </div>
        </Card>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card className="p-6 md:col-span-1">
            <div className="text-sm font-black">連絡先</div>
            <div className="mt-4 space-y-2 text-sm text-white/80">
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
              <div>
                LINE：
                <a
                  href={CONTACT.lineUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-1 text-orange-300 hover:text-orange-200"
                >
                  友だち追加
                </a>
              </div>
              <div>
                Instagram：
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-1 text-orange-300 hover:text-orange-200"
                >
                  @{CONTACT.instagramHandle}
                </a>
              </div>
            </div>
            <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4 text-xs text-white/65">
              返信が早いのはLINEです。写真も送れます。
            </div>
          </Card>

          <Card className="overflow-hidden md:col-span-2">
            <div className="border-b border-white/10 bg-black/10 p-4">
              <div className="text-sm font-black">相談フォーム</div>
              <div className="mt-1 text-xs text-white/60">
                ※ 送信後、順次返信します
              </div>
            </div>
            <iframe src={GOOGLE_FORM} className="w-full h-[820px]" />
          </Card>
        </div>
      </section>

      {/* MOBILE FIXED BAR */}
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

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-xs text-white/55">
        <div className="mx-auto max-w-6xl px-4">
          <div className="space-y-1">
            <div className="font-black text-white/75">{INFO.brand}</div>
            <div>{INFO.tagline}</div>
            <div>運営会社：{INFO.operator}</div>
            <div>〒 {INFO.address}</div>
            <div>
              TEL {CONTACT.phoneDisplay} / FAX {CONTACT.faxDisplay}
            </div>
            <div className="pt-3 text-white/35">
              © {new Date().getFullYear()} M/BASE
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
