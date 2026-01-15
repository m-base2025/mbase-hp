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
  // QR画像を置く場所（無ければ表示は出るが画像が割れるので、入れるのがおすすめ）
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
  {
    title: "SUV・4WDカスタム",
    desc: "リフトアップ、足回り、タイヤ・ホイール、外装・電装まで。安全性・法規を前提に提案します。",
  },
  {
    title: "車検・法定点検（指定整備工場）",
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
    <div id={id} className="scroll-mt-28">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white">
            {title}
          </h2>
          {sub ? <p className="mt-2 text-sm text-white/70">{sub}</p> : null}
        </div>
        <div className="hidden md:block text-xs text-white/40">{INFO.brand}</div>
      </div>
      <div className="mt-5 h-px w-full bg-white/10" />
    </div>
  );
}

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/95" />
      </div>

      {/* HEADER */}
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
            <NavLink href="#services" label="できること" />
            <NavLink href="#instagram" label="Instagram" />
            <NavLink href="#stock" label="在庫" />
            <NavLink href="#contact" label="地図・問合せ" />
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

      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="M/BASE hero"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <img
            src="/brand/mbase-logo.png"
            alt="M/BASE"
            className="w-[260px] md:w-[440px] h-auto"
          />
          <p className="mt-4 text-sm md:text-base text-white/80">
            {INFO.brandSub}
          </p>

          <h1 className="mt-6 text-3xl md:text-5xl font-black leading-tight">
            SUV・4WDを{" "}
            <span className="text-orange-500">安心して任せられる</span>{" "}
            カスタム＆整備
          </h1>

          <p className="mt-5 max-w-2xl text-white/85 leading-relaxed">
            {INFO.operator}が運営。カスタムだけでなく、車検・整備・鈑金塗装・車両販売・リースまでワンストップ対応。
          </p>

          <Card className="mt-8 p-6">
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs text-white/50">所在地</div>
                <div className="mt-1 text-sm font-bold">{INFO.address}</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs text-white/50">営業時間</div>
                <div className="mt-1 text-sm font-bold">{INFO.hours}</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs text-white/50">対応</div>
                <div className="mt-1 text-sm font-bold">{INFO.tagline}</div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-xl bg-white px-6 py-3 text-sm font-black text-black hover:bg-white/90"
              >
                相談・見積もりへ
              </a>
              <a
                href={mapSearch}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/25 px-6 py-3 text-sm font-black text-white hover:bg-white/5"
              >
                地図を見る
              </a>
              <a
                href={CONTACT.lineUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-orange-500/30 bg-orange-500/10 px-6 py-3 text-sm font-black text-orange-200 hover:bg-orange-500/15"
              >
                LINEで相談
              </a>
            </div>
          </Card>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-4 py-12" id="services">
        <SectionTitle
          title="できること"
          sub="指定整備工場の基準で、“通る・使える・長持ちする”提案をします。"
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {SERVICES.map((s) => (
            <Card key={s.title} className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="text-base font-black">{s.title}</div>
                <span className="rounded-full border border-white/10 bg-black/20 px-2 py-1 text-[11px] text-white/60">
                  対応可
                </span>
              </div>
              <div className="mt-2 text-sm leading-relaxed text-white/70">
                {s.desc}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* INSTAGRAM（1枠・埋め込み・中でスクロール） */}
      <section className="mx-auto max-w-6xl px-4 py-12" id="instagram">
        <SectionTitle
          title="Instagram"
          sub="最新情報・作業風景はこちら（枠の中でスクロールできます）"
        />

        <Card className="mt-6 overflow-hidden">
          <div className="border-b border-white/10 bg-black/10 p-4">
            <div className="text-sm font-black">公式Instagram</div>
            <div className="mt-1 text-xs text-white/60">
              投稿が増えるとここに自動で反映されます
            </div>
          </div>

          {/* 高さはここで調整：h-[520px] / h-[600px] / h-[720px] */}
          <div className="h-[600px] w-full">
            <iframe
              src="https://www.instagram.com/m_base.aomori/embed"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </Card>

        <div className="mt-3 text-sm text-white/60">
          直接開く →
          <a
            href={CONTACT.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-1 text-white underline"
          >
            @{CONTACT.instagramHandle}
          </a>
        </div>
      </section>

      {/* STOCK */}
      <section className="mx-auto max-w-6xl px-4 py-12" id="stock">
        <SectionTitle title="在庫車両" sub="写真が揃うまで仮画像表示（在庫は随時更新）" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STOCK.map((v) => (
            <Card key={v.id} className="overflow-hidden">
              <div className="relative h-56 w-full bg-black">
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
                    地図・連絡
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CONTACT + MAP + QR + FORM */}
      <section className="mx-auto max-w-6xl px-4 py-12" id="contact">
        <SectionTitle
          title="地図・お問い合わせ"
          sub="電話／LINE／Instagram／フォーム。好きな方法でOK。"
        />

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {/* CONTACT */}
          <Card className="p-6 md:col-span-1">
            <div className="text-sm font-black">連絡先</div>
            <div className="mt-4 space-y-2 text-sm text-white/80">
              <div>
                電話：
                <a
                  href={`tel:${CONTACT.phoneTel}`}
                  className="ml-1 text-orange-300 hover:text-orange-200 underline"
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
                  className="ml-1 text-orange-300 hover:text-orange-200 underline"
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
                  className="ml-1 text-orange-300 hover:text-orange-200 underline"
                >
                  @{CONTACT.instagramHandle}
                </a>
              </div>
              <div className="pt-2 text-xs text-white/60">
                返信が早いのはLINEです（写真も送れます）
              </div>
            </div>
          </Card>

          {/* MAP */}
          <Card className="overflow-hidden md:col-span-2">
            <div className="border-b border-white/10 bg-black/10 p-4">
              <div className="text-sm font-black">地図・アクセス</div>
              <div className="mt-1 text-xs text-white/60">{INFO.address}</div>
              <a
                href={mapSearch}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block rounded-xl border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-bold text-white hover:bg-white/[0.06]"
              >
                Googleマップで開く →
              </a>
            </div>
            <iframe
              title="map"
              src={mapEmbed}
              className="h-[320px] w-full"
              loading="lazy"
            />
          </Card>
        </div>

        {/* QR + FORM */}
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Card className="p-6 md:col-span-1">
            <div className="text-sm font-black">QRで追加</div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center">
                <div className="text-xs text-white/60">LINE</div>
                <img
                  src={CONTACT.lineQr}
                  alt="LINE QR"
                  className="mx-auto mt-2 h-28 w-28 object-contain"
                />
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center">
                <div className="text-xs text-white/60">Instagram</div>
                <img
                  src={CONTACT.instaQr}
                  alt="Instagram QR"
                  className="mx-auto mt-2 h-28 w-28 object-contain"
                />
              </div>
            </div>

            <div className="mt-3 text-xs text-white/55">
              ※QR画像を入れる場所：
              <br />
              public/qr/line.png と public/qr/instagram.png
            </div>
          </Card>

          <Card className="overflow-hidden md:col-span-2">
            <div className="border-b border-white/10 bg-black/10 p-4">
              <div className="text-sm font-black">相談フォーム</div>
              <div className="mt-1 text-xs text-white/60">
                ※送信後、順次返信します
              </div>
            </div>
            <iframe src={GOOGLE_FORM} className="h-[860px] w-full" />
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
