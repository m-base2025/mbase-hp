// app/page.tsx
import React from "react";

const INFO = {
  brand: "M/BASE（エムベース）",
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
  // QR（public/qr に置いてある前提）
  lineQr: "/qr/line.png",
  instaQr: "/qr/instagram.png",
};

const NAV = [
  { label: "特徴", href: "#trust" },
  { label: "できること", href: "#services" },
  { label: "得意分野", href: "#specialty" },
  { label: "実績", href: "#works" },
  { label: "アクセス", href: "#access" },
  { label: "相談・見積もり", href: "#contact" },
];

const TRUST_POINTS = [
  {
    title: "指定整備工場が運営",
    desc: "国の認可を受けた指定整備工場が母体。カスタム・整備・車検を同じ基準と責任で対応します。",
  },
  {
    title: "法規・安全を前提に提案",
    desc: "通る／通らないを曖昧にせず事前に説明。必要に応じて構造変更も相談できます。",
  },
  {
    title: "作って終わりにしない",
    desc: "カスタム後の点検・整備・修理まで一貫対応。維持管理まで任せられます。",
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
    desc: "ベース車両探しからカスタム前提の車両選定まで。用途と予算で提案します。",
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
  { title: "足回り", tag: "リフトアップ", img: "/works/works-1.jpg", note: "日常＋アウトドア両立（車検も考慮）" },
  { title: "外装", tag: "外装", img: "/works/works-2.jpg", note: "実用性と見た目のバランス" },
  { title: "タイヤ", tag: "タイヤ", img: "/works/works-3.jpg", note: "干渉・乗り味・車検も含めて提案" },
  { title: "電装", tag: "電装", img: "/works/works-4.jpg", note: "配線品質と安全性を重視" },
  { title: "鈑金塗装", tag: "鈑金", img: "/works/works-5.jpg", note: "修理〜カスタム塗装まで" },
  { title: "整備", tag: "整備", img: "/works/works-6.jpg", note: "カスタム後の維持管理まで" },
];

const GOOGLE_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSeMHSUYErLG0_5J0zsw9fweJkCvODrXB81qfVzvzqwvszLy_A/viewform?embedded=true";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs text-orange-200">
      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
      {children}
    </div>
  );
}

function Button({
  href,
  children,
  variant = "solid",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "soft";
  external?: boolean;
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
    <a
      className={`${base} ${styles}`}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
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
    <main className="min-h-screen bg-neutral-950 text-white pb-32 md:pb-0">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="text-xl font-black tracking-tight">
            M<span className="text-orange-500">/</span>BASE
          </div>

          <nav className="hidden gap-6 text-sm md:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-white/80 hover:text-white">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Button href="#contact" variant="outline">車検・整備</Button>
            <Button href="#contact" variant="soft">販売・リース</Button>
            <Button href="#contact" variant="solid">総合相談</Button>
          </div>

          <div className="md:hidden">
            <Button href="#contact" variant="solid">相談</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div className="flex flex-col justify-center">
          <Badge>指定整備工場が運営</Badge>

          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-5xl">
            SUV・4WDを、<br />
            <span className="text-orange-500">安心して任せられる</span>
            <br />
            カスタム＆整備。
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">
            指定整備工場が運営するM/BASE。<br />
            カスタムから車検・整備・鈑金塗装・車販・リースまで、ワンストップで対応します。
          </p>

          {/* ★完成のための一行：対応範囲 */}
          <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
            <div className="text-white/90 font-bold">対応内容</div>
            <div className="mt-1">{INFO.tagline}</div>
          </div>

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
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-black">
            <img src="/hero.jpg" alt="M/BASE SUV/4WD" className="h-full w-full object-cover" />
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
          <div className="flex flex-col gap-2">
            <Badge>安心して任せられる理由</Badge>
            <h2 className="text-2xl font-black tracking-tight md:text-3xl">
              指定整備工場が運営しているから、安心
            </h2>
            <p className="text-sm text-white/75">
              M/BASEは国の認可を受けた指定整備工場が運営しています。だから、カスタムだけでなく車検・整備・修理まで、同じ基準・同じ責任で一貫対応できます。
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {TRUST_POINTS.map((p) => (
              <Card key={p.title} title={p.title}>{p.desc}</Card>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-4 text-sm text-orange-100/90">
            「カスタムしたいけど車検や維持が不安」「全部まとめて相談したい」そんな方こそ、M/BASEにご相談ください。
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-black tracking-tight md:text-3xl">M/BASEでできること</h2>
            <a href="#contact" className="hidden text-sm text-orange-300 hover:text-orange-200 md:block">
              まとめて相談する →
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {SERVICES.map((s) => (
              <Card key={s.title} title={s.title}>{s.desc}</Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty */}
      <section id="specialty" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-black tracking-tight md:text-3xl">SUV・4WDの中でも、特に得意な分野</h2>
          <p className="mt-3 text-sm text-white/75">
            ジムニー／ジムニーシエラを中心に、4WD構造・足回り・駆動系を熟知した提案が可能です。
            ただし、対応はジムニーに限りません。SUV・4WD全般を同じ基準で扱います。
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {SPECIALTY.map((s) => (
              <Card key={s.title} title={s.title}>{s.desc}</Card>
            ))}
          </div>
        </div>
      </section>

      {/* Works */}
      <section id="works" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-black tracking-tight md:text-3xl">施工・整備実績</h2>
          <p className="mt-3 text-sm text-white/75">
            カスタムだけでなく、車検・整備・鈑金塗装まで一貫対応。安心して任せられる品質を重視します。
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WORKS.map((w) => (
              <div key={w.img} className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                <img src={w.img} alt={w.title} className="h-48 w-full object-cover" />
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold">{w.title}</div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/70">
                      {w.tag}
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-white/60">{w.note}</div>
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

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-center">
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

              <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-center">
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
          <h2 className="text-2xl font-black tracking-tight md:text-3xl">総合相談・見積もり</h2>
          <p className="mt-2 text-sm text-white/75">
            カスタム・車検・整備・鈑金塗装・購入・リースまで、まずはまとめてご相談ください。
            <br />
            ※ フォームの最初で「相談内容」を選択してください（車検・整備・販売・リースなど）。
          </p>

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
                <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-center">
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
                <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-center">
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

          <div className="mt-6 rounded-2xl overflow-hidden border border-white/10">
            <iframe src={GOOGLE_FORM} className="w-full h-[820px]" />
          </div>
        </div>
      </section>

      {/* Mobile Fixed Action Bar（iPhone Safari対策：少し上に） */}
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

      {/* Footer（完成感を出す） */}
      <footer className="border-t border-white/10 py-10 text-center text-xs text-white/55">
        <div className="mx-auto max-w-6xl px-4 space-y-2">
          <div className="text-white/75 font-bold">{INFO.brand}</div>
          <div>{INFO.tagline}</div>
          <div>〒 {INFO.address}</div>
          <div>
            TEL：{CONTACT.phoneDisplay}　FAX：{CONTACT.faxDisplay}
          </div>
          <div className="text-white/40">
            © {new Date().getFullYear()} M/BASE
          </div>
        </div>
      </footer>
    </main>
  );
}
