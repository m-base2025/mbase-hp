// app/stock/page.tsx
import React from "react";

const INFO = {
  brand: "M/BASE",
  operator: "有限会社ミシマ自動車",
  note: "在庫は随時変動します。気になる車両は早めにお問い合わせください。",
};

const CONTACT = {
  lineUrl: "https://lin.ee/sAX3m2a",
  phoneTel: "0178380669",
  phoneDisplay: "0178-38-0669",
};

type StockStatus = "在庫" | "商談中" | "SOLD" | "入庫予定";

type StockItem = {
  id: string;
  name: string;
  year: string;
  mileage: string;
  price: string;
  status: StockStatus;
  note: string;
  tags: string[];
  img: string; // public 配下のパス
};

const STOCK: StockItem[] = [
  {
    id: "s1",
    name: "ジムニー JB64（ベース車両）",
    year: "2019",
    mileage: "6.2万km",
    price: "ASK",
    status: "在庫",
    note: "カスタム前提のベース車両。内容は相談にて。",
    tags: ["ベース車", "カスタム相談OK", "4WD"],
    img: "/stock/placeholder.jpg",
  },
  {
    id: "s2",
    name: "ジムニーシエラ JB74（ベース車両）",
    year: "2021",
    mileage: "3.8万km",
    price: "ASK",
    status: "入庫予定",
    note: "リフトアップ等カスタム相談可能。",
    tags: ["シエラ", "カスタム相談OK", "SUV/4WD"],
    img: "/stock/placeholder.jpg",
  },
];

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

function Badge({ status }: { status: StockStatus }) {
  const styles: Record<StockStatus, string> = {
    在庫: "border-emerald-400/30 bg-emerald-500/10 text-emerald-200",
    商談中: "border-amber-400/30 bg-amber-500/10 text-amber-200",
    SOLD: "border-white/15 bg-white/10 text-white/70",
    入庫予定: "border-sky-400/30 bg-sky-500/10 text-sky-200",
  };

  return (
    <span
      className={
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-black backdrop-blur " +
        styles[status]
      }
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />
      {status}
    </span>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[11px] text-white/75">
      {children}
    </span>
  );
}

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 p-7 md:p-10">
        <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(900px_520px_at_20%_0%,rgba(249,115,22,0.16),transparent_60%)]" />
        <div className="relative">
          <div className="text-xs text-white/55">在庫・ベース車両</div>
          <h1 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
            在庫車両
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/75 md:text-base">
            {INFO.operator}が運営する{INFO.brand}の在庫一覧です。
            <br />
            ベース車両の取り寄せ・希望条件での車両探しも可能です。
          </p>

          <Card className="mt-6 p-5">
            <div className="text-sm font-black">ポイント</div>
            <ul className="mt-3 grid gap-2 md:grid-cols-3 text-sm text-white/75">
              <li className="rounded-xl border border-white/10 bg-black/20 p-3">
                ● 在庫は随時変動（先着順）
              </li>
              <li className="rounded-xl border border-white/10 bg-black/20 p-3">
                ● カスタム込みで相談OK
              </li>
              <li className="rounded-xl border border-white/10 bg-black/20 p-3">
                ● 条件で車両探しも可能
              </li>
            </ul>
          </Card>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-xl bg-white px-6 py-3 text-sm font-black text-black hover:bg-white/90"
            >
              問い合わせへ
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
              href={`tel:${CONTACT.phoneTel}`}
              className="rounded-xl border border-white/20 bg-white/[0.03] px-6 py-3 text-sm font-black text-white hover:bg-white/[0.06]"
            >
              電話：{CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* LIST */}
      <div className="mt-10">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-black md:text-2xl">掲載車両</h2>
            <p className="mt-2 text-sm text-white/65">{INFO.note}</p>
          </div>
          <div className="text-xs text-white/45">
            ※ 写真は準備中のため仮画像の場合があります
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STOCK.map((v) => (
            <Card key={v.id} className="overflow-hidden">
              <div className="relative h-56 w-full bg-black">
                <img
                  src={v.img}
                  alt={v.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-3 top-3">
                  <Badge status={v.status} />
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
                  {v.tags.slice(0, 3).map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
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

                <p className="mt-3 text-sm text-white/70">{v.note}</p>

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
                    href="/contact"
                    className="flex-1 rounded-xl bg-orange-600 py-2 text-center text-sm font-black text-black hover:bg-orange-500"
                  >
                    フォーム
                  </a>
                </div>

                <div className="mt-2 text-[11px] text-white/45">
                  ※ 在庫・価格・状態はお問い合わせください
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* REQUEST */}
      <Card className="mt-10 p-6 md:p-8">
        <div className="text-lg font-black md:text-xl">
          在庫が無い場合でもOK（車両探しできます）
        </div>
        <p className="mt-2 text-sm text-white/70">
          「希望車種」「予算」「用途（通勤／アウトドア／雪道）」をLINEかフォームで送ってください。
          ベース車両＋カスタム込みのプランも提案できます。
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={CONTACT.lineUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-white px-6 py-3 text-sm font-black text-black hover:bg-white/90"
          >
            LINEで希望を送る
          </a>
          <a
            href="/contact"
            className="rounded-xl border border-white/20 bg-white/[0.03] px-6 py-3 text-sm font-black text-white hover:bg-white/[0.06]"
          >
            フォームで相談
          </a>
          <a
            href="/services"
            className="rounded-xl border border-white/20 bg-white/[0.03] px-6 py-3 text-sm font-black text-white hover:bg-white/[0.06]"
          >
            できることを見る
          </a>
        </div>
      </Card>

      {/* Spacer for mobile fixed bar */}
      <div className="h-24 md:h-0" />
    </main>
  );
}
