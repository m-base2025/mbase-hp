// app/page.tsx
import React from "react";

/* =======================
  BASIC INFO
======================= */
const INFO = {
  brand: "M/BASE",
  brandSub: "SUV・4WD CUSTOM & MAINTENANCE",
  operator: "有限会社ミシマ自動車",
  address: "青森県八戸市白銀三島下79-111",
  hours: "10:00–18:00",
  tagline:
    "SUV・4WDカスタム／車検／一般整備／鈑金塗装／車両販売／リース",
};

const ASSETS = {
  logo: "/brand/mbase-logo.png",
  hero: "/images/hero.jpg",
  gallery: ["/images/gallery-1.jpg", "/images/gallery-2.jpg", "/images/gallery-3.jpg"],
  stockPlaceholder: "/stock/placeholder.jpg",
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

/* =======================
  DATA
======================= */
const STOCK = [
  {
    id: "s1",
    name: "ジムニー JB64（ベース車両）",
    year: "2019",
    mileage: "6.2万km",
    price: "ASK",
    note: "カスタム前提のベース車両。内容は相談にて。",
    img: ASSETS.stockPlaceholder,
  },
  {
    id: "s2",
    name: "ジムニーシエラ JB74（ベース車両）",
    year: "2021",
    mileage: "3.8万km",
    price: "ASK",
    note: "リフトアップ等カスタム相談可能。",
    img: ASSETS.stockPlaceholder,
  },
];

const TRUST_POINTS = [
  {
    title: "指定整備工場クオリティで提案",
    desc: "安全性・法規を前提に、通る・使える・長持ちするカスタムを提案します。",
  },
  {
    title: "運営：有限会社ミシマ自動車",
    desc: "整備の実績と技術を活かし、カスタム〜車検・整備・鈑金塗装まで一貫対応。",
  },
  {
    title: "作って終わりにしない",
    desc: "カスタム後の点検・整備・修理まで。維持管理まで任せられます。",
  },
];

const SERVICES = [
  { title: "SUV・4WDカスタム", desc: "リフトアップ／足回り／タイヤ・ホイール／外装・電装まで。" },
  { title: "車検・法定点検", desc: "指定整備工場の基準で対応。カスタム車もOK。" },
  { title: "一般整備・メンテナンス", desc: "日常点検から故障診断まで。4WD特有の足回りも対応。" },
  { title: "鈑金・塗装", desc: "キズ凹み／事故修理／部分塗装／カスタムペイント。" },
  { title: "車両販売（新車・中古車）", desc: "ベース車両探しからカスタム前提の車両選定まで提案。" },
  { title: "リース・各種相談", desc: "法人・個人向けリース相談にも対応。" },
];

/* =======================
  UI PARTS
======================= */
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

function SectionTitle({
  title,
  sub,
  id,
}: {
  title: string;
  sub?: string;
  id?: string;
}) {
  return (
    <div id={id} className="scroll-mt-24">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white">
            {title}
          </h2>
          {sub ? (
            <p className="mt-2 text-sm leading-relaxed text-white/70">{sub}</p>
          ) : null}
        </div>
        <div className="hidden md:block text-xs text-white/40">{INFO.brand}</div>
      </div>
      <div className="mt-5 h-px w-full bg-white/10" />
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

/* =======================
  PAGE
======================= */
export default function Page() {
  const mapSearch = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    INFO.address
  )}`;
  const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
    INFO.address
  )}&output=embed`;

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_20%_0%,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_85%_10%,rgba(249,115,22,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/90" />
      </div>

      {/* HEADER（メニュー増やす） */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          {/* LOGO + BRAND (白文字) */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="rounded-xl bg-white px-3 py-2 shadow-sm">
              <img src={ASSETS.logo} alt="M/BASE logo" className="h-7 md:h-8 w-auto" />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-black tracking-wide text-white">
                {INFO.brand}
              </div>
              <div className="hidden sm:block text-[11px] text-white/60">
                運営：{INFO.operator}
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-1 text-xs md:text-sm">
            <a className="rounded-lg px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white" href="#services">
              できること
            </a>
            <a className="rounded-lg px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white" href="#gallery">
              ギャラリー
            </a>
            <a className="rounded-lg px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white" href="#stock">
              在庫
            </a>
            <a className="rounded-lg px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white" href="#contact">
              問合せ
            </a>

            {/* PCだけ表示（詰まるので） */}
            <a
              className="hidden md:inline-flex rounded-xl border border-white/15 bg-white/[0.03] px-3 py-2 font-bold text-white hover:bg-white/[0.06]"
              href={mapSearch}
              target="_blank"
              rel="noreferrer"
            >
              地図
            </a>
            <a
              className="hidden md:inline-flex rounded-xl border border-white/15 bg-white/[0.03] px-3 py-2 font-bold text-white hover:bg-white/[0.06]"
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

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

      {/* HERO（写真＋白文字で豪華） */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src={ASSETS.hero} alt="M/BASE hero" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_20%_10%,rgba(255,255,255,0.08),transparent_60%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            指定整備工場が運営
          </div>

          <h1 className="mt-6 text-[64px] md:text-[108px] font-black tracking-tight leading-none text-white">
            {INFO.brand}
          </h1>
          <p className="mt-2 text-sm md:text-base text-white/80">{INFO.brandSub}</p>

          <p className="mt-6 max-w-2xl text-sm md:text-base leading-relaxed text-white/85">
            {INFO.operator}が運営するSUV・4WDのカスタム＆整備拠点。
            <br />
            車検・一般整備・鈑金塗装・車両販売・リースまでワンストップ対応。
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <Pill>所在地：{INFO.address}</Pill>
            <Pill>営業時間：{INFO.hours}</Pill>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-xl bg-white px-6 py-3 font-black text-black hover:bg-white/90"
            >
              相談・見積もりへ
            </a>
            <a
              href="#stock"
              className="rounded-xl border border-white/30 px-6 py-3 text-white hover:bg-white/5"
            >
              在庫を見る
            </a>
            <a
              href={CONTACT.lineUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-orange-500/30 bg-orange-500/10 px-6 py-3 font-black text-orange-200 hover:bg-orange-500/15"
            >
              LINEで相談
            </a>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionTitle title="安心ポイント" sub="整備工場品質で「通る・使える・長持ち」を前提に提案。" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {TRUST_POINTS.map((p) => (
            <Card key={p.title} className="p-6">
              <div className="text-base font-black">{p.title}</div>
              <div className="mt-2 text-sm leading-relaxed text-white/70">{p.desc}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-4 py-12" id="services">
        <SectionTitle
          title="できること"
          sub="カスタムだけじゃない。車検・整備・鈑金・車販までまとめてOK。"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {SERVICES.map((s) => (
            <Card key={s.title} className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="text-base font-black">{s.title}</div>
                <span className="rounded-full border border-white/10 bg-black/20 px-2 py-1 text-[11px] text-white/60">
                  対応可
                </span>
              </div>
              <div className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-6xl px-4 py-12" id="gallery">
        <SectionTitle
          title="施工・作業ギャラリー"
          sub="写真は随時更新。まずは雰囲気が伝わる写真を表示します。"
        />
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
          {ASSETS.gallery.map((src) => (
            <div key={src} className="overflow-hidden rounded-2xl border border-white/10">
              <img
                src={src}
                alt="M/BASE works"
                className="h-44 md:h-56 w-full object-cover hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </section>

      {/* STOCK */}
      <section className="mx-auto max-w-6xl px-4 py-12" id="stock">
        <SectionTitle title="在庫車両" sub="写真が揃うまで仮画像表示。実在庫は随時更新します。" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STOCK.map((v) => (
            <Card key={v.id} className="overflow-hidden">
              <div className="relative h-64 w-full bg-black">
                <img src={v.img} alt={v.name} className="h-full w-full object-cover" />
                <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/55 px-3 py-1 text-[11px] text-white/85 backdrop-blur">
                  在庫
                </div>
              </div>

              <div className="p-6">
                <div className="text-base font-black">{v.name}</div>

                <div className="mt-4 grid grid-cols-3 gap-2 text-[11px] text-white/70">
                  <div className="rounded-xl border border-white/10 bg-black/20 p-2">
                    <div className="text-white/50">年式</div>
                    <div className="mt-0.5 text-white/90">{v.year}</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/20 p-2">
                    <div className="text-white/50">走行</div>
                    <div className="mt-0.5 text-white/90">{v.mileage}</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/20 p-2">
                    <div className="text-white/50">価格</div>
                    <div className="mt-0.5 text-white/90">{v.price}</div>
                  </div>
                </div>

                <div className="mt-4 text-sm leading-relaxed text-white/70">{v.note}</div>

                <div className="mt-5 flex gap-2">
                  <a
                    href={CONTACT.lineUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-xl border border-orange-500/30 bg-orange-500/10 py-3 text-center text-sm font-black text-orange-200 hover:bg-orange-500/15"
                  >
                    LINEで問合せ
                  </a>
                  <a
                    href="#contact"
                    className="flex-1 rounded-xl bg-orange-600 py-3 text-center text-sm font-black text-black hover:bg-orange-500"
                  >
                    フォーム
                  </a>
                </div>

                <div className="mt-3 text-[11px] text-white/45">
                  ※ 在庫は随時変動します。先着順です。
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="mx-auto max-w-6xl px-4 py-12" id="contact">
        <SectionTitle title="総合相談・見積もり" sub="電話／LINE／Instagram／フォーム。好きな方法でOK。" />

        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          {/* CONTACT */}
          <Card className="p-6 lg:col-span-4">
            <div className="text-base font-black">連絡先</div>
            <div className="mt-4 space-y-3 text-sm text-white/80">
              <div>
                電話：
                <a href={`tel:${CONTACT.phoneTel}`} className="ml-2 font-black text-orange-300 hover:text-orange-200">
                  {CONTACT.phoneDisplay}
                </a>
              </div>
              <div>FAX：{CONTACT.faxDisplay}</div>
              <div>
                LINE：
                <a href={CONTACT.lineUrl} target="_blank" rel="noreferrer" className="ml-2 font-black text-orange-300 hover:text-orange-200">
                  友だち追加
                </a>
              </div>
              <div>
                Instagram：
                <a href={CONTACT.instagramUrl} target="_blank" rel="noreferrer" className="ml-2 font-black text-orange-300 hover:text-orange-200">
                  @{CONTACT.instagramHandle}
                </a>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 text-xs text-white/65">
              返信が早いのはLINEです。写真も送れます。
            </div>

            <div className="mt-4 flex gap-2">
              <a href={`tel:${CONTACT.phoneTel}`} className="flex-1 rounded-xl bg-orange-600 py-3 text-center text-sm font-black text-black hover:bg-orange-500">
                ☎ 電話
              </a>
              <a href={CONTACT.lineUrl} target="_blank" rel="noreferrer" className="flex-1 rounded-xl border border-orange-500/30 bg-orange-500/10 py-3 text-center text-sm font-black text-orange-200 hover:bg-orange-500/15">
                💬 LINE
              </a>
            </div>
          </Card>

          {/* QR */}
          <Card className="p-6 lg:col-span-4">
            <div className="text-base font-black">QRで追加</div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center">
                <div className="text-xs text-white/60">LINE</div>
                <img src={CONTACT.lineQr} alt="LINE QR" className="mx-auto mt-2 h-28 w-28 object-contain" />
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center">
                <div className="text-xs text-white/60">Instagram</div>
                <img src={CONTACT.instaQr} alt="Instagram QR" className="mx-auto mt-2 h-28 w-28 object-contain" />
              </div>
            </div>
          </Card>

          {/* MAP */}
          <Card className="overflow-hidden lg:col-span-4">
            <div className="border-b border-white/10 bg-black/10 p-4">
              <div className="text-base font-black">地図・アクセス</div>
              <div className="mt-1 text-sm text-white/70">{INFO.address}</div>
              <a
                href={mapSearch}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block rounded-xl border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-bold text-white hover:bg-white/[0.06]"
              >
                Googleマップで開く →
              </a>
            </div>
            <iframe title="map" className="h-[320px] w-full" loading="lazy" src={mapEmbed} />
          </Card>
        </div>

        {/* FORM */}
        <Card className="mt-6 overflow-hidden">
          <div className="border-b border-white/10 bg-black/10 p-4">
            <div className="text-base font-black">相談フォーム</div>
            <div className="mt-1 text-xs text-white/60">※ 送信後、順次返信します</div>
          </div>
          <iframe src={GOOGLE_FORM} className="w-full h-[860px]" />
        </Card>
      </section>

      {/* MOBILE FIXED BAR */}
      <div className="fixed inset-x-0 bottom-6 z-[60] md:hidden">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex gap-2 rounded-2xl border border-white/10 bg-neutral-950/90 p-3 shadow-lg backdrop-blur">
            <a href={`tel:${CONTACT.phoneTel}`} className="flex-1 rounded-xl bg-orange-600 py-3 text-center font-black text-black">
              ☎ 電話
            </a>
            <a href={CONTACT.lineUrl} target="_blank" rel="noreferrer" className="flex-1 rounded-xl border border-orange-500/30 bg-orange-500/10 py-3 text-center font-black text-orange-200">
              💬 LINE
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-xs text-white/55">
        <div className="mx-auto max-w-6xl px-4">
          <div className="space-y-1">
            <div className="font-black text-white/80">{INFO.brand}</div>
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
