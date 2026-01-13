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
    <div id={id} className="scroll-mt-24">
      <h2 className="text-2xl md:text-3xl font-black text-white">{title}</h2>
      {sub && (
        <p className="mt-2 text-sm leading-relaxed text-white/70">{sub}</p>
      )}
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
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_0%,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/90" />
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex justify-between items-center">
          <div className="font-black tracking-wide">{INFO.brand}</div>
          <nav className="flex gap-3 text-sm">
            <a href="#services" className="text-white/70 hover:text-white">
              できること
            </a>
            <a href="#stock" className="text-white/70 hover:text-white">
              在庫
            </a>
            <a href="#contact" className="text-white/70 hover:text-white">
              問合せ
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        {/* LOGO */}
        <h1 className="text-[64px] md:text-[96px] font-black tracking-tight leading-none text-white">
          {INFO.brand}
        </h1>
        <p className="mt-3 text-sm md:text-base text-white/70">
          {INFO.brandSub}
        </p>

        <p className="mt-6 max-w-2xl text-white/80 leading-relaxed">
          {INFO.operator}が運営するSUV・4WD専門拠点。
          <br />
          カスタムだけでなく、車検・整備・鈑金・車販までワンストップ対応。
        </p>

        <Card className="mt-8 p-6">
          <div className="text-sm font-bold">対応内容</div>
          <p className="mt-2 text-white/80">{INFO.tagline}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-xl bg-white text-black px-5 py-3 font-black"
            >
              相談する
            </a>
            <a
              href={mapSearch}
              target="_blank"
              className="rounded-xl border border-white/20 px-5 py-3"
            >
              地図を見る
            </a>
          </div>
        </Card>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionTitle
          id="services"
          title="できること"
          sub="指定整備工場だから、カスタムも整備も任せられる"
        />
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {SERVICES.map((s) => (
            <Card key={s} className="p-5">
              <div className="font-bold">{s}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* STOCK */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionTitle
          id="stock"
          title="在庫車両"
          sub="写真準備中のため仮画像を表示しています"
        />
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {STOCK.map((v) => (
            <Card key={v.id} className="overflow-hidden">
              <img src={v.img} alt={v.name} className="h-48 w-full object-cover" />
              <div className="p-5">
                <div className="font-bold">{v.name}</div>
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
      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionTitle id="contact" title="お問い合わせ" />

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <Card className="p-6">
            <div className="font-bold">連絡先</div>
            <div className="mt-3 text-sm">
              TEL：
              <a href={`tel:${CONTACT.phoneTel}`} className="ml-1 underline">
                {CONTACT.phoneDisplay}
              </a>
            </div>
            <div className="text-sm">FAX：{CONTACT.faxDisplay}</div>
            <div className="mt-3 text-sm">
              LINE：
              <a
                href={CONTACT.lineUrl}
                target="_blank"
                className="ml-1 underline"
              >
                友だち追加
              </a>
            </div>
            <div className="mt-3 text-sm">
              Instagram：
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                className="ml-1 underline"
              >
                @{CONTACT.instagramHandle}
              </a>
            </div>
          </Card>

          <Card className="p-6">
            <div className="font-bold">QR</div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <img src={CONTACT.lineQr} alt="LINE QR" />
              <img src={CONTACT.instaQr} alt="Instagram QR" />
            </div>
          </Card>

          <Card className="overflow-hidden">
            <iframe src={mapEmbed} className="w-full h-full min-h-[260px]" />
          </Card>
        </div>

        <Card className="mt-6 overflow-hidden">
          <iframe src={GOOGLE_FORM} className="w-full h-[820px]" />
        </Card>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} M/BASE / {INFO.operator}
      </footer>
    </main>
  );
}
