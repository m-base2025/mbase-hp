// app/access/page.tsx
import React from "react";

const INFO = {
  brand: "M/BASE",
  operator: "有限会社ミシマ自動車",
  address: "青森県八戸市白銀三島下79-111",
  hours: "10:00–18:00",
  note:
    "SUV・4WDカスタムだけでなく、車検・一般整備・鈑金塗装・車両販売・リースまでワンストップ対応。",
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
  const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
    INFO.address
  )}&output=embed`;

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 p-7 md:p-10">
        <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(900px_520px_at_20%_0%,rgba(249,115,22,0.16),transparent_60%)]" />
        <div className="relative">
          <Chip>運営：{INFO.operator}</Chip>
          <h1 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
            地図・会社情報
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/75 md:text-base">
            {INFO.brand}は{INFO.operator}が運営しています。
            <br />
            {INFO.note}
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <Card className="p-5">
              <div className="text-xs text-white/55">住所</div>
              <div className="mt-1 text-sm font-black">{INFO.address}</div>
              <a
                href={mapSearch}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm text-orange-200 underline"
              >
                Googleマップで開く →
              </a>
            </Card>
            <Card className="p-5">
              <div className="text-xs text-white/55">営業時間</div>
              <div className="mt-1 text-sm font-black">{INFO.hours}</div>
              <div className="mt-3 text-xs text-white/55">
                ※ 予定が変わる場合はInstagramで告知します
              </div>
            </Card>
            <Card className="p-5">
              <div className="text-xs text-white/55">連絡</div>
              <div className="mt-1 text-sm font-black">
                TEL {CONTACT.phoneDisplay}
              </div>
              <div className="mt-1 text-xs text-white/60">FAX {CONTACT.faxDisplay}</div>
              <div className="mt-3 text-xs text-white/55">
                返信が早いのはLINEです（写真もOK）
              </div>
            </Card>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="rounded-xl bg-white px-6 py-3 text-sm font-black text-black hover:bg-white/90"
            >
              電話する
            </a>
            <a
              href={CONTACT.lineUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-orange-500/30 bg-orange-500/10 px-6 py-3 text-sm font-black text-orange-200 hover:bg-orange-500/15"
            >
              LINEで相談
            </a>
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/20 bg-white/[0.03] px-6 py-3 text-sm font-black text-white hover:bg-white/[0.06]"
            >
              Instagramを見る
            </a>
          </div>
        </div>
      </div>

      {/* MAP */}
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <Card className="overflow-hidden md:col-span-2">
          <div className="border-b border-white/10 bg-black/10 p-4">
            <div className="text-sm font-black">地図</div>
            <div className="mt-1 text-xs text-white/60">{INFO.address}</div>
          </div>
          <iframe
            title="map"
            src={mapEmbed}
            className="h-[360px] w-full"
            loading="lazy"
          />
        </Card>

        {/* CONTACT DETAIL */}
        <Card className="p-6 md:col-span-1">
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
            相談はLINEが早いです。<br />
            写真（車両・気になる箇所）を送ってください。
          </div>

          <div className="mt-5 flex gap-2">
            <a
              href="/contact"
              className="flex-1 rounded-xl bg-orange-600 py-2 text-center text-sm font-black text-black hover:bg-orange-500"
            >
              問合せ
            </a>
            <a
              href="/services"
              className="flex-1 rounded-xl border border-white/20 bg-white/[0.03] py-2 text-center text-sm font-black text-white hover:bg-white/[0.06]"
            >
              できること
            </a>
          </div>
        </Card>
      </div>

      {/* QR */}
      <div className="mt-10 grid gap-4 md:grid-cols-3">
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

        {/* Instagram one-frame scroll embed (optional bonus on access page) */}
        <Card className="overflow-hidden md:col-span-2">
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
      </div>

      {/* Spacer for mobile fixed bar */}
      <div className="h-24 md:h-0" />
    </main>
  );
}
