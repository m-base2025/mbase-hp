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

const CONTACT = {
  phoneDisplay: "0178-38-0669",
  phoneTel: "0178380669",
  faxDisplay: "0178-38-0822",
  lineUrl: "https://lin.ee/sAX3m2a",
  instagramHandle: "m_base.aomori",
  instagramUrl: "https://www.instagram.com/m_base.aomori/",
};

/* =======================
  Instagram（ここだけ触る）
  投稿URLを追加するだけ
======================= */
const INSTAGRAM_POSTS = [
  "https://www.instagram.com/p/DTZdAxoEtrV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/p/CXXXXXX2/",
  "https://www.instagram.com/p/CXXXXXX3/",
];

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
    note: "カスタム前提のベース車両。",
    img: "/stock/placeholder.jpg",
  },
  {
    id: "s2",
    name: "ジムニーシエラ JB74（ベース車両）",
    year: "2021",
    mileage: "3.8万km",
    price: "ASK",
    note: "リフトアップ等カスタム相談可能。",
    img: "/stock/placeholder.jpg",
  },
];

const SERVICES = [
  "SUV・4WDカスタム",
  "車検・法定点検（指定整備工場）",
  "一般整備・メンテナンス",
  "鈑金・塗装",
  "車両販売（新車・中古車）",
  "リース・各種相談",
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
        "rounded-2xl border border-white/10 bg-white/[0.04] shadow-xl backdrop-blur " +
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
    <div id={id} className="scroll-mt-28">
      <h2 className="text-2xl md:text-3xl font-black">{title}</h2>
      {sub && <p className="mt-2 text-sm text-white/70">{sub}</p>}
      <div className="mt-4 h-px bg-white/10" />
    </div>
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
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/40 to-black/95" />

      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <img src="/brand/mbase-logo.png" alt="M/BASE" className="h-8 md:h-10" />
          <nav className="flex items-center gap-2 text-xs md:text-sm">
            <a href="#services" className="px-3 py-2 text-white/70 hover:text-white">
              できること
            </a>
            <a href="#instagram" className="px-3 py-2 text-white/70 hover:text-white">
              Instagram
            </a>
            <a href="#stock" className="px-3 py-2 text-white/70 hover:text-white">
              在庫
            </a>
            <a href="#contact" className="px-3 py-2 text-white/70 hover:text-white">
              問合せ
            </a>
            <a
              href={CONTACT.lineUrl}
              target="_blank"
              className="ml-1 rounded-xl bg-orange-600 px-3 py-2 font-black text-black"
            >
              LINE相談
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <img
          src="/images/hero.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto max-w-6xl px-4 py-24">
          <img src="/brand/mbase-logo.png" className="w-[260px] md:w-[420px]" />
          <p className="mt-4 text-white/80">{INFO.brandSub}</p>
          <p className="mt-6 max-w-2xl text-white/85">
            {INFO.operator}が運営。<br />
            カスタム・車検・整備・鈑金・車販までワンストップ。
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-4 py-14" id="services">
        <SectionTitle title="できること" />
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {SERVICES.map((s) => (
            <Card key={s} className="p-6 font-bold">
              {s}
            </Card>
          ))}
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="mx-auto max-w-6xl px-4 py-14" id="instagram">
        <SectionTitle
          title="Instagram"
          sub="投稿URLを追加するだけで更新されます"
        />

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INSTAGRAM_POSTS.map((url) => (
            <div
              key={url}
              className="overflow-hidden rounded-2xl border border-white/10 bg-black"
            >
              <iframe
                src={`${url}embed`}
                className="w-full h-[420px]"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="mt-4 text-sm text-white/60">
          最新情報 →
          <a
            href={CONTACT.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-1 underline"
          >
            @{CONTACT.instagramHandle}
          </a>
        </div>
      </section>

      {/* STOCK */}
      <section className="mx-auto max-w-6xl px-4 py-14" id="stock">
        <SectionTitle title="在庫車両" />
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {STOCK.map((v) => (
            <Card key={v.id} className="overflow-hidden">
              <img src={v.img} className="h-60 w-full object-cover" />
              <div className="p-5">
                <div className="font-black">{v.name}</div>
                <div className="mt-2 text-sm text-white/70">
                  {v.year} / {v.mileage} / {v.price}
                </div>
                <p className="mt-3 text-sm text-white/70">{v.note}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="mx-auto max-w-6xl px-4 py-14" id="contact">
        <SectionTitle title="お問い合わせ" />
        <Card className="mt-6 p-6 text-sm space-y-2">
          <div>
            TEL：
            <a href={`tel:${CONTACT.phoneTel}`} className="ml-1 underline">
              {CONTACT.phoneDisplay}
            </a>
          </div>
          <div>FAX：{CONTACT.faxDisplay}</div>
          <a href={mapSearch} target="_blank" className="underline">
            地図を見る
          </a>
        </Card>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} M/BASE / {INFO.operator}
      </footer>
    </main>
  );
}
