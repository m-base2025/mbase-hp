// app/contact/page.tsx
import React from "react";

const INFO = {
  brand: "M/BASE",
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
    <span className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-black text-orange-200">
      {children}
    </span>
  );
}

export default function Page() {
  const mapSearch = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    INFO.address
  )}`;

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 p-7 md:p-10">
        <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(900px_520px_at_20%_0%,rgba(249,115,22,0.16),transparent_60%)]" />
        <div className="relative">
          <Chip>相談・見積もり</Chip>
          <h1 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
            お問い合わせ
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/75 md:text-base">
            {INFO.operator}が運営する{INFO.brand}。
            <br />
            カスタムだけでなく、車検・整備・鈑金塗装・車販・リースまでまとめて相談できます。
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <Card className="p-5">
              <div className="text-xs text-white/55">おすすめ</div>
              <div className="mt-1 text-sm font-black">返信が早い：LINE</div>
              <div className="mt-2 text-xs text-white/60">
                写真（車・気になる箇所）も送れます
              </div>
            </Card>

            <Card className="p-5">
              <div className="text-xs text-white/55">電話</div>
              <div className="mt-1 text-sm font-black">{CONTACT.phoneDisplay}</div>
              <div className="mt-2 text-xs text-white/60">
                営業時間：{INFO.hours}
              </div>
            </Card>

            <Card className="p-5">
              <div className="text-xs text-white/55">住所</div>
              <div className="mt-1 text-sm font-black">{INFO.address}</div>
              <a
                href={mapSearch}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-xs text-orange-200 underline"
              >
                Googleマップで開く →
              </a>
            </Card>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={CONTACT.lineUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-6 py-3 text-sm font-black text-black hover:bg-white/90"
            >
              LINEで相談する
            </a>
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="rounded-xl border border-white/20 bg-white/[0.03] px-6 py-3 text-sm font-black text-white hover:bg-white/[0.06]"
            >
              電話する
            </a>
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/20 bg-white/[0.03] px-6 py-3 text-sm font-black text-white hover:bg-white/[0.06]"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {/* LEFT: CONTACT + QR */}
        <div className="md:col-span-1 space-y-4">
          <Card className="p-6">
            <div className="text-sm font-black">連絡先</div>

            <div className="mt-4 space-y-3 text-sm text-white/80">
              <div>
                TEL：
                <a
                  href={`tel:${CONTACT.phoneTel}`}
                  className="ml-1 text-orange-200 underline"
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
                  className="ml-1 text-orange-200 underline"
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
                  className="ml-1 text-orange-200 underline"
                >
                  @{CONTACT.instagramHandle}
                </a>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4 text-xs text-white/65">
              相談内容の例：
              <ul className="mt-2 space-y-1">
                <li>・車検（カスタム車含む）</li>
                <li>・足回り／タイヤ／外装／電装</li>
                <li>・鈑金修理／塗装／事故修理</li>
                <li>・ベース車両探し／購入相談</li>
              </ul>
            </div>
          </Card>

          <Card className="p-6">
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
              ※QR画像の場所：
              <br />
              public/qr/line.png と public/qr/instagram.png
            </div>
          </Card>
        </div>

        {/* RIGHT: FORM */}
        <Card className="overflow-hidden md:col-span-2">
          <div className="border-b border-white/10 bg-black/10 p-4">
            <div className="text-sm font-black">相談フォーム</div>
            <div className="mt-1 text-xs text-white/60">
              ※「相談内容選択」あり／送信後、順次返信します
            </div>
          </div>
          <iframe src={GOOGLE_FORM} className="h-[900px] w-full" />
        </Card>
      </div>

      {/* EXTRA: Instagram one-frame scroll embed */}
      <Card className="mt-10 overflow-hidden">
        <div className="border-b border-white/10 bg-black/10 p-4">
          <div className="text-sm font-black">Instagram（最新情報）</div>
          <div className="mt-1 text-xs text-white/60">
            枠の中でスクロールできます
          </div>
        </div>
        <div className="h-[520px] w-full">
          <iframe
            src="https://www.instagram.com/m_base.aomori/embed"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
      </Card>

      {/* Spacer for mobile fixed bar */}
      <div className="h-24 md:h-0" />
    </main>
  );
}
