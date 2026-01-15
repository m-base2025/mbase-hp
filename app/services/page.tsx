// app/services/page.tsx
import React from "react";

const INFO = {
  brand: "M/BASE",
  operator: "有限会社ミシマ自動車",
  tagline:
    "SUV・4WDカスタム／車検／一般整備／鈑金塗装／車両販売／リース",
};

const SERVICES = [
  {
    title: "SUV・4WDカスタム（ジムニー中心）",
    points: [
      "リフトアップ／足回り／駆動系／電装／外装",
      "安全性・耐久性・法規を前提に“通る・使える”提案",
      "持ち込み相談OK（内容により事前確認）",
    ],
    desc:
      "見た目だけじゃなく、走り・使い勝手・雪道やアウトドアでの実用性まで含めて提案します。",
  },
  {
    title: "車検・法定点検（指定整備工場）",
    points: [
      "指定整備工場の基準で検査・整備",
      "カスタム車も状態を見て最適化（要相談）",
      "「通す」だけではなく、安心して乗れる状態へ",
    ],
    desc:
      "カスタム車の車検は“通る状態”の作り方が重要。必要に応じて改善提案もします。",
  },
  {
    title: "一般整備・メンテナンス",
    points: [
      "日常点検／オイル類／消耗品交換",
      "故障診断（異音・振動・警告灯など）",
      "4WD特有の足回り・駆動系も対応",
    ],
    desc:
      "調子が悪い・気になる音がする・長距離前に見てほしい、など気軽に相談してください。",
  },
  {
    title: "鈑金・塗装",
    points: [
      "キズ・凹み修理／事故修理",
      "部分塗装／補修／カスタムペイント相談",
      "見た目＋防錆など機能面も意識",
    ],
    desc:
      "雪国はサビ対策も重要。状態に合わせて最適な修理方法を提案します。",
  },
  {
    title: "車両販売（新車・中古車）",
    points: [
      "ベース車両探し（用途・予算に合わせて）",
      "購入＋カスタムのセット提案",
      "納車前整備・仕上げまで一括対応",
    ],
    desc:
      "「ベースを探して、まとめて作りたい」人向けに、最短ルートで仕上げます。",
  },
  {
    title: "リース・各種相談",
    points: [
      "法人・個人向けリースの相談",
      "仕事車両の運用含めて提案",
      "整備・メンテもセットで考えられる",
    ],
    desc:
      "まずは用途（距離・年数・使い方）を教えてください。合う形を一緒に決めます。",
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

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-bold text-orange-200">
      {children}
    </span>
  );
}

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 p-7 md:p-10">
        <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(800px_420px_at_20%_0%,rgba(249,115,22,0.18),transparent_60%)]" />
        <div className="relative">
          <Badge>指定整備工場が運営</Badge>
          <h1 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
            できること
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/75 md:text-base">
            {INFO.operator}が運営する{INFO.brand}。
            <br />
            カスタムだけでなく、車検・整備・鈑金塗装・車両販売・リースまで
            <span className="text-white">ワンストップ</span>で対応します。
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <Card className="p-5">
              <div className="text-xs text-white/55">得意</div>
              <div className="mt-1 font-black">4WD / SUV（ジムニー中心）</div>
            </Card>
            <Card className="p-5">
              <div className="text-xs text-white/55">方針</div>
              <div className="mt-1 font-black">通る・使える・長持ち</div>
            </Card>
            <Card className="p-5">
              <div className="text-xs text-white/55">対応</div>
              <div className="mt-1 font-black">{INFO.tagline}</div>
            </Card>
          </div>
        </div>
      </div>

      {/* LIST */}
      <div className="mt-10">
        <h2 className="text-xl font-black md:text-2xl">サービス一覧</h2>
        <p className="mt-2 text-sm text-white/65">
          気になる内容があれば、LINEまたは問い合わせフォームで相談してください。
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {SERVICES.map((s) => (
            <Card key={s.title} className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="text-base font-black">{s.title}</div>
                <span className="rounded-full border border-white/10 bg-black/20 px-2 py-1 text-[11px] text-white/60">
                  対応可
                </span>
              </div>

              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {s.desc}
              </p>

              <ul className="mt-4 space-y-2 text-sm text-white/75">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="flex gap-2 rounded-xl border border-white/10 bg-black/20 p-3"
                  >
                    <span className="mt-0.5 text-orange-300">●</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Card className="mt-10 p-6 md:p-8">
        <div className="text-lg font-black md:text-xl">
          まずは「用途」と「予算」を教えてください
        </div>
        <p className="mt-2 text-sm text-white/70">
          通勤／アウトドア／雪道／家族利用など、使い方で最適解が変わります。
          写真があればLINEが早いです。
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="/contact"
            className="rounded-xl bg-white px-6 py-3 text-sm font-black text-black hover:bg-white/90"
          >
            問い合わせへ
          </a>
          <a
            href="/access"
            className="rounded-xl border border-white/20 bg-white/[0.03] px-6 py-3 text-sm font-black text-white hover:bg-white/[0.06]"
          >
            地図・会社情報
          </a>
          <a
            href="/stock"
            className="rounded-xl border border-white/20 bg-white/[0.03] px-6 py-3 text-sm font-black text-white hover:bg-white/[0.06]"
          >
            在庫を見る
          </a>
        </div>
      </Card>

      {/* Spacer for mobile fixed bar */}
      <div className="h-24 md:h-0" />
    </main>
  );
}
