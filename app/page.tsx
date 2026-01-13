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
  // QR画像（①で置いたパス）
  lineQr: "/qr/line.png",
  instaQr: "/qr/instagram.png",
};

const NAV = [
  { label: "強み", href: "#trust" },
  { label: "できること", href: "#services" },
  { label: "得意分野", href: "#specialty" },
  { label: "施工事例", href: "#works" },
  { label: "アクセス", href: "#access" },
  { label: "総合相談", href: "#contact" },
];

const TRUST_POINTS = [
  {
    title: "指定整備工場が運営",
    desc: "国の認可を受けた指定整備工場が母体。カスタム・整備・車検を同じ基準と責任で対応します。",
  },
  {
    title: "法規・安全を前提に提案",
    desc: "通る／通らないを曖昧にせず、事前説明。必要に応じて構造変更も相談できます。",
  },
  {
    title: "長く任せられる",
    desc: "カスタム後の点検・整備・修理まで一貫対応。“作って終わり”にしません。",
  },
];

const SERVICES = [
  {
    title: "SUV・4WDカスタム",
    desc: "リフトアップ、足回り、タイヤ・ホイール、外装・電装まで。安全性・耐久性・法規を重視します。",
  },
  {
    title: "車検・法定点検",
    desc: "指定整備工場の基準で対応。カスタム車も含めて、安心して任せられる車検。",
  },
  {
    title: "一般整備・メンテナンス",
    desc: "日常点検から故障診断まで。4WD特有の足回り・駆動系も対応します。",
  },
  {
    title: "鈑金・塗装",
    desc: "キズ・凹み修理、事故修理、部分塗装、カスタムペイントまで対応。",
  },
  {
    title: "車両販売（新車・中古車）",
    desc: "ベース車両探しからカスタム前提の車両選定まで、用途と予算で提案します。",
  },
  {
    title: "リース・各種相談",
    desc: "法人・個人向けリース相談にも対応。購入から維持までまとめてご相談ください。",
  },
];

const SPECIALTY = [
  {
    title: "ジムニー／ジムニーシエラ",
    desc: "主力分野。構造を理解した実用前提のカスタムが強みです。",
  },
  {
    title: "国産SUV・4WD全般",
    desc: "ジムニー以外も同じ基準で対応。街乗り・雪道・林道など用途に合わせます。",
  },
];

const WORKS = [
  { title: "足回り", tag: "リフトアップ", img: "/works/works-1.jpg", note: "日常＋アウトドア両立" },
  { title: "外装", tag: "外装", img: "/works/works-2.jpg", note: "実用性重視" },
  { title: "タイヤ", tag: "タイヤ", img: "/works/works-3.jpg", note: "干渉・車検考慮" },
  { title: "電装", tag: "電装", img: "/works/works-4.jpg", note: "配線品質重視" },
  { title: "鈑金塗装", tag: "鈑金", img: "/works/works-5.jpg", note: "耐久性も考慮" },
  { title: "整備", tag: "整備", img: "/works/works-6.jpg", note: "継続メンテ" },
];

const GOOGLE_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSeMHSUYErLG0_5J0zsw9fweJkCvODrXB81qfVzvzqwvszLy_A/viewform?embedded=true";

function Button({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "soft";
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition";
  const styles =
    variant === "solid"
      ? "bg-orange-600 text-black hover:bg-orange-500"
      : variant === "soft"
      ? "border border-orange-500/30 bg-orange-500/10 text-orange-200 hover:bg-orange-500/15"
      : "border border-white/20 text-white hover:border-white/35";
  return (
    <a className={`${base} ${styles}`} href={href}>
      {children}
    </a>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="font-bold">{title}</div>
      <div className="mt-2 text-sm text-white/75">{children}</div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="text-xl font-black">
            M<span className="text-orange-500">/</span>BASE
          </div>

          <nav className="hidden gap-6 text-sm md:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-white/80 hover:text-white">
                {n.label}
              </a>
            ))}
          </nav>

          {/* 入口を分ける（問い合わせ率UP） */}
          <div className="flex items-center gap-2">
            <Button href="#contact" variant="outline">車検・整備</Button>
            <Button href="#contact" variant="soft">販売・リース</Button>
            <Button href="#contact" variant="solid">総合相談</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-2 gap-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs text-orange-200">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
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

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="#services" variant="outline">できること</Button>
            <Button href="#contact" variant="solid">総合相談・見積もり</Button>
            <Button href="#contact" variant="soft">車検・整備の相談</Button>
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

          <div className="mt-6 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-4 text-xs text-orange-100/90">
            予約優先｜内容によっては写真の送付や現車確認をお願いする場合があります。
          </div>
        </div>

        <div>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <img src="/hero.jpg" alt="M/BASE" className="h-full w-full object-cover" />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {["/works/works-1.jpg", "/works/works-2.jpg", "/works/works-3.jpg"].map((p) => (
              <div key={p} className="aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-black">
                <img src={p} alt="works preview" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section id="trust" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-black">指定整備工場が運営するM/BASE</h2>
          <p className="mt-3 text-sm text-white/75">
            カスタム・整備・車検・修理を、同じ基準・同じ責任で一貫対応。だから安心して任せられます。
          </p>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {TRUST_POINTS.map((t) => (
              <Card key={t.title} title={t.title}>{t.desc}</Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-black">M/BASEでできること</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {SERVICES.map((s) => (
              <Card key={s.title} title={s.title}>{s.desc}</Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty */}
      <section id="specialty" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-black">SUV・4WDの中でも、特に得意な分野</h2>
          <p className="mt-3 text-sm text-white/75">
            ジムニー／ジムニーシエラを中心に、4WD構造・足回り・駆動系を熟知した提案が可能です。
            ただし、対応はジムニーに限りません。SUV・4WD全般を同じ基準で扱います。
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {SPECIALTY.map((s) => (
              <Card key={s.title} title={s.title}>{s.desc}</Card>
            ))}
          </div>
        </div>
      </section>

      {/* Works */}
      <section id="works" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-black">施工・整備実績</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WORKS.map((w) => (
              <div key={w.img} className="rounded-2xl border border-white/10 overflow-hidden">
                <img src={w.img} alt={w.title} className="h-48 w-full object-cover" />
                <div className="p-4">
                  <div className="font-bold text-sm">{w.title}</div>
                  <div className="mt-1 text-xs text-white/60">{w.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access */}
      <section id="access" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="font-bold">所在地</div>
            <div className="text-sm text-white/75">{INFO.address}</div>
            <div className="mt-4 font-bold">営業時間</div>
            <div className="text-sm text-white/75">{INFO.hours}</div>

            <div className="mt-4 font-bold">連絡先</div>
            <div className="mt-2 text-sm text-white/80 space-y-2">
              <div>
                電話：{" "}
                <a className="text-orange-300 hover:text-orange-200" href={`tel:${CONTACT.phoneTel}`}>
                  {CONTACT.phoneDisplay}
                </a>
              </div>
              <div>FAX：{CONTACT.faxDisplay}</div>
              <div>
                LINE：{" "}
                <a className="text-orange-300 hover:text-orange-200" href={CONTACT.lineUrl} target="_blank" rel="noreferrer">
                  友だち追加
                </a>
              </div>
              <div>
                Instagram：{" "}
                <a
                  className="text-orange-300 hover:text-orange-200"
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  @{CONTACT.instagramHandle}
                </a>
              </div>
            </div>
          </div>

          <iframe
            className="w-full h-72 rounded-2xl border border-white/10"
            src={`https://www.google.com/maps?q=${encodeURIComponent(INFO.mapQuery)}&output=embed`}
            loading="lazy"
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-black">総合相談・見積もり</h2>
          <p className="mt-2 text-sm text-white/75">
            カスタム・車検・整備・鈑金塗装・購入・リースまで、まずはまとめてご相談ください。
            <br />
            ※ フォームの最初に「車検」「販売」「リース」など、ご希望を書いてもらえるとスムーズです。
          </p>

          {/* 連絡手段（QR付き） */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="font-bold">電話・FAX</div>
              <div className="mt-3 text-sm text-white/80 space-y-2">
                <div>
                  電話：{" "}
                  <a className="text-orange-300 hover:text-orange-200" href={`tel:${CONTACT.phoneTel}`}>
                    {CONTACT.phoneDisplay}
                  </a>
                </div>
                <div>FAX：{CONTACT.faxDisplay}</div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="font-bold">LINE / Instagram</div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/10 bg-black/30 p-3 text-center">
                  <div className="text-xs text-white/70">LINE</div>
                  <img src={CONTACT.lineQr} alt="LINE QR" className="mx-auto mt-2 h-28 w-28 object-contain" />
                  <a
                    href={CONTACT.lineUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-xs text-orange-300 hover:text-orange-200"
                  >
                    友だち追加 →
                  </a>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/30 p-3 text-center">
                  <div className="text-xs text-white/70">Instagram</div>
                  <img src={CONTACT.instaQr} alt="Instagram QR" className="mx-auto mt-2 h-28 w-28 object-contain" />
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

          {/* Form */}
          <div className="mt-6 rounded-2xl overflow-hidden border border-white/10">
            <iframe src={GOOGLE_FORM} className="w-full h-[820px]" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-xs text-white/50">
        © {new Date().getFullYear()} M/BASE
      </footer>
    </main>
  );
}
