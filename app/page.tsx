// app/page.tsx
import React from "react";

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

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-black text-orange-200">
      <span className="h-1.5 w-1.5 rounded-full bg-orange-300" />
      {children}
    </span>
  );
}

function QuickLink({
  title,
  desc,
  href,
  accent = false,
}: {
  title: string;
  desc: string;
  href: string;
  accent?: boolean;
}) {
  return (
    <a href={href} className="block">
      <Card
        className={
          "h-full p-6 transition hover:bg-white/[0.06] " +
          (accent ? "border-orange-500/25 bg-orange-500/10" : "")
        }
      >
        <div className="flex items-start justify-between gap-3">
          <div className="text-base font-black">{title}</div>
          <span className="rounded-full border border-white/10 bg-black/20 px-2 py-1 text-[11px] text-white/60">
            詳細 →
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
      </Card>
    </a>
  );
}

export default function Page() {
  const mapSearch = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    INFO.address
  )}`;

  return (
    <main>
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

        <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-24">
          <Badge>指定整備工場が運営</Badge>

          <div className="mt-5">
            {/* ロゴ（白文字の雰囲気を壊さないように画像ロゴ） */}
            <img
              src="/brand/mbase-logo.png"
              alt="M/BASE"
              className="w-[260px] md:w-[460px] h-auto"
            />
            <p className="mt-3 text-sm md:text-base text-white/80">
              {INFO.brandSub}
            </p>
          </div>

          <h1 className="mt-6 text-3xl font-black leading-tight md:text-5xl">
            SUV・4WDを{" "}
            <span className="text-orange-500">安心して任せられる</span>{" "}
            カスタム＆整備
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/85 md:text-base">
            {INFO.operator}が運営。カスタムだけでなく、車検・一般整備・鈑金塗装・車両販売・リースまで
            ワンストップ対応します。
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
                href="/contact"
                className="rounded-xl bg-white px-6 py-3 text-sm font-black text-black hover:bg-white/90"
              >
                相談・見積もりへ
              </a>
              <a
                href="/services"
                className="rounded-xl border border-white/20 bg-white/[0.03] px-6 py-3 text-sm font-black text-white hover:bg-white/[0.06]"
              >
                できること
              </a>
              <a
                href="/stock"
                className="rounded-xl border border-white/20 bg-white/[0.03] px-6 py-3 text-sm font-black text-white hover:bg-white/[0.06]"
              >
                在庫を見る
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

            <div className="mt-3 text-xs text-white/55">
              ※写真や症状がある場合はLINEが早いです（画像OK）
            </div>
          </Card>
        </div>
      </section>

      {/* PURPOSE NAV */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-black md:text-3xl">目的から選ぶ</h2>
        <p className="mt-2 text-sm text-white/70">
          「何をしたいか」から迷わず進めます。
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <QuickLink
            title="カスタム相談（SUV・4WD / ジムニー中心）"
            desc="足回り・タイヤ・外装・電装など。通る・使える提案で仕上げます。"
            href="/services"
            accent
          />
          <QuickLink
            title="車検・点検・整備"
            desc="指定整備工場の基準で対応。カスタム車も状態を見て最適化します。"
            href="/services"
          />
          <QuickLink
            title="鈑金・塗装（キズ・凹み・事故修理）"
            desc="部分補修から事故修理まで。雪国の防錆も含めて提案します。"
            href="/services"
          />
          <QuickLink
            title="車両購入・ベース車両探し"
            desc="在庫車両の確認、条件での車探し、購入＋カスタムのセット提案。"
            href="/stock"
          />
          <QuickLink
            title="地図・会社情報（営業時間・アクセス）"
            desc="場所・営業時間・運営会社情報。Googleマップでの案内も。"
            href="/access"
          />
          <QuickLink
            title="問い合わせ（フォーム / LINE / 電話）"
            desc="相談内容選択つきフォーム。返信が早いのはLINEです。"
            href="/contact"
            accent
          />
        </div>
      </section>

      {/* TRUST */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-black md:text-3xl">安心ポイント</h2>
        <p className="mt-2 text-sm text-white/70">
          ただ作るだけじゃなく、維持まで任せられるのが強み。
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card className="p-6">
            <div className="text-base font-black">指定整備工場が運営</div>
            <p className="mt-2 text-sm text-white/70">
              {INFO.operator}の整備実績と基準で対応。安全性・法規を前提に提案します。
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-base font-black">ワンストップ対応</div>
            <p className="mt-2 text-sm text-white/70">
              カスタムだけでなく、車検・一般整備・鈑金塗装・車販・リースまでまとめて相談できます。
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-base font-black">作って終わりにしない</div>
            <p className="mt-2 text-sm text-white/70">
              カスタム後の点検・整備・修理まで対応。維持管理まで任せられます。
            </p>
          </Card>
        </div>
      </section>

      {/* Instagram one frame scroll */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-black md:text-3xl">Instagram</h2>
        <p className="mt-2 text-sm text-white/70">
          最新情報・作業風景（枠の中でスクロールできます）
        </p>

        <Card className="mt-6 overflow-hidden">
          <div className="border-b border-white/10 bg-black/10 p-4">
            <div className="text-sm font-black">@{CONTACT.instagramHandle}</div>
            <div className="mt-1 text-xs text-white/60">
              投稿が増えるとここに自動で反映されます
            </div>
          </div>
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

      {/* ACCESS mini */}
      <section className="mx-auto max-w-6xl px-4 pb-8">
        <Card className="p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-black">アクセス</div>
              <div className="mt-2 text-sm text-white/75">{INFO.address}</div>
              <div className="mt-1 text-sm text-white/75">営業時間：{INFO.hours}</div>
              <div className="mt-1 text-xs text-white/55">
                TEL {CONTACT.phoneDisplay} / FAX {CONTACT.faxDisplay}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/access"
                className="rounded-xl border border-white/20 bg-white/[0.03] px-6 py-3 text-sm font-black text-white hover:bg-white/[0.06]"
              >
                地図・会社情報
              </a>
              <a
                href={mapSearch}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/20 bg-white/[0.03] px-6 py-3 text-sm font-black text-white hover:bg-white/[0.06]"
              >
                Googleマップで開く
              </a>
              <a
                href="/contact"
                className="rounded-xl bg-orange-600 px-6 py-3 text-sm font-black text-black hover:bg-orange-500"
              >
                問合せへ
              </a>
            </div>
          </div>
        </Card>

        {/* Spacer for mobile fixed bar */}
        <div className="h-24 md:h-0" />
      </section>
    </main>
  );
}
