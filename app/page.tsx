// app/page.tsx
import React from "react";

const INFO = {
  brand: "M/BASE",
  tagline: "ジムニーを、“戦える一台”へ。",
  subtag: "ジムニーカスタム専門店 M/BASE｜足回り・外装・電装までワンストップ",
  address: "青森県八戸市白銀三島下79-111",
  hours: "10:00–18:00",
  // フォーム位置へ直行（ヘッダーのボタンもここへ）
  formAnchor: "#contact-form",
  mapQuery: "青森県八戸市白銀三島下79-111",
};

const NAV = [
  { label: "コンセプト", href: "#concept" },
  { label: "施工事例", href: "#works" },
  { label: "サービス", href: "#services" },
  { label: "取扱ブランド", href: "#brands" },
  { label: "アクセス", href: "#access" },
  { label: "問い合わせ", href: "#contact" },
];

const FEATURES = [
  "ジムニー専門プロショップ",
  "現車確認ベースで最適提案",
  "カスタム初心者もOK",
  "パーツ持ち込み対応",
  "車検・構変も相談可",
];

const SERVICES = [
  { title: "リフトアップ・足回り", desc: "スプリング／ショック／補正パーツまで最適化" },
  { title: "外装カスタム", desc: "バンパー／フェンダー／ルーフラックなど" },
  { title: "タイヤ・ホイール", desc: "用途に合わせたサイズ＆銘柄選定" },
  { title: "電装", desc: "ライト／フォグ／ドラレコ／ウインチ等" },
  { title: "トータル相談", desc: "乗り方と予算からプラン提案" },
];

const BRANDS = ["APIO", "CL-Link", "DAMD", "IPF", "その他"];

const WORKS = [
  { title: "JB64｜足回り", tag: "リフトアップ", img: "/works/works-1.jpg", note: "例：40mmリフト＋補正" },
  { title: "JB74｜外装", tag: "外装", img: "/works/works-2.jpg", note: "例：バンパー＋ガード" },
  { title: "JB64｜タイヤ", tag: "タイヤ", img: "/works/works-3.jpg", note: "例：サイズ相談OK" },
  { title: "JB74｜電装", tag: "電装", img: "/works/works-4.jpg", note: "例：ライト・配線" },
  { title: "JB64｜外装", tag: "外装", img: "/works/works-5.jpg", note: "例：ラック・ステップ" },
  { title: "JB74｜足回り", tag: "足回り", img: "/works/works-6.jpg", note: "例：乗り味調整" },
];

// Googleフォーム（埋め込み用）
const GOOGLE_FORM_EMBED =
  "https://docs.google.com/forms/d/e/1FAIpQLSeMHSUYErLG0_5J0zsw9fweJkCvODrXB81qfVzvzqwvszLy_A/viewform?embedded=true";
const GOOGLE_FORM_OPEN =
  "https://docs.google.com/forms/d/e/1FAIpQLSeMHSUYErLG0_5J0zsw9fweJkCvODrXB81qfVzvzqwvszLy_A/viewform";

function ImgPlaceholder({ label }: { label: string }) {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(249,115,22,0.28),rgba(0,0,0,0.75))]" />
      <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
      <div className="absolute bottom-3 left-3 rounded-xl bg-black/55 px-3 py-2 text-xs text-white/80 backdrop-blur">
        {label}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Background texture */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.12] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="text-xl font-black tracking-tight">
              <span className="text-white">M</span>
              <span className="text-orange-500">/</span>
              <span className="text-white">BASE</span>
            </div>
            <div className="hidden text-xs text-white/60 sm:block">JIMNY CUSTOM PRO SHOP</div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-white">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#works"
              className="hidden rounded-xl border border-white/15 px-4 py-2 text-sm text-white/90 hover:border-white/30 md:inline-flex"
            >
              施工事例を見る
            </a>
            <a
              href={INFO.formAnchor}
              className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-black hover:bg-orange-500"
            >
              カスタム相談フォーム
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-2 md:py-16">
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs text-orange-200">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              Jimny Custom Specialist
            </div>

            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-5xl">
              ジムニーを、<br />
              <span className="text-orange-500">“戦える一台”</span>へ。
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">{INFO.subtag}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#works"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:border-white/30"
              >
                施工事例を見る
              </a>
              <a
                href={INFO.formAnchor}
                className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-5 py-3 text-sm font-semibold text-black hover:bg-orange-500"
              >
                カスタム相談フォーム
              </a>
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

          <div className="relative">
            {/* Hero image placeholder */}
           <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-black">
  <img
    src="/hero.jpg"
    alt="M/BASE Jimny"
    className="h-full w-full object-cover"
  />
</div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {["/public/works/works-1.jpg", "/public/works/works-2.jpg", "/public/works/works-3.jpg"].map((p) => (
                <div key={p} className="aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-white/5">
                  <ImgPlaceholder label={p} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Concept */}
      <section id="concept" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-black tracking-tight">
              <span className="text-orange-500">M/BASE</span> の強み
            </h2>
            <div className="hidden text-sm text-white/60 md:block">“専門”だから提案が速い</div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm leading-relaxed text-white/80">
                ジムニーに特化した知見と現車確認をベースに、用途・予算・好みから最適プランを提案。
                「どこから手を付ければいい？」の段階でもOKです。
              </p>
              <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {FEATURES.map((f) => (
                  <div key={f} className="flex items-start gap-2 rounded-xl border border-white/10 bg-black/30 p-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-orange-500" />
                    <div className="text-sm text-white/85">{f}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-sm font-bold text-white/90">おすすめ導線</h3>
              <div className="mt-3 grid gap-3">
                <a
                  href={INFO.formAnchor}
                  className="rounded-xl bg-orange-600 px-4 py-3 text-sm font-semibold text-black hover:bg-orange-500"
                >
                  まずはフォームで相談する
                </a>
                <a
                  href="#works"
                  className="rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-white hover:border-white/30"
                >
                  施工事例を見てイメージを固める
                </a>
                <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-xs text-white/70">
                  ※ 予約優先。内容によっては写真や現車確認のご相談をお願いします。
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works */}
      <section id="works" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-black tracking-tight">施工事例</h2>
            <a href={INFO.formAnchor} className="text-sm text-orange-300 hover:text-orange-200">
              事例の再現・相談はこちら →
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WORKS.map((w) => (
              <div key={w.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <div className="relative aspect-[4/3] bg-black/40">
                  <div className="absolute left-3 top-3 rounded-full bg-orange-600 px-3 py-1 text-xs font-semibold text-black">
                    {w.tag}
                  </div>
                  <img
  src={w.img}
  alt={w.title}
  className="h-full w-full object-cover"
/>
                </div>
                <div className="p-4">
                  <div className="text-sm font-bold">{w.title}</div>
                  <div className="mt-1 text-xs text-white/65">{w.note}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white/75">
            施工事例ページ（一覧・詳細）は次フェーズで追加OK。まずはTOPに“見せ場”だけ作って集客を回す。
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-black tracking-tight">サービス</h2>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {SERVICES.map((s) => (
              <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-base font-bold">{s.title}</div>
                    <div className="mt-2 text-sm text-white/75">{s.desc}</div>
                  </div>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-orange-600/20 text-orange-300">
                    ●
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white/75">
            料金表（目安）はここに追加できます。「基本工賃」＋「よくあるメニュー」だけでも信頼が上がる。
          </div>
        </div>
      </section>

      {/* Brands */}
      <section id="brands" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-black tracking-tight">取扱ブランド</h2>
            <div className="hidden text-sm text-white/60 md:block">ロゴ画像はあとで差し替え</div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {BRANDS.map((b) => (
              <div
                key={b}
                className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-sm font-semibold text-white/85"
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access */}
      <section id="access" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-black tracking-tight">アクセス</h2>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-white/70">住所</div>
              <div className="mt-1 text-base font-bold">{INFO.address}</div>

              <div className="mt-4 text-sm text-white/70">営業時間</div>
              <div className="mt-1 text-base font-bold">{INFO.hours}</div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  className="rounded-xl bg-orange-600 px-4 py-3 text-sm font-semibold text-black hover:bg-orange-500"
                  href={INFO.formAnchor}
                >
                  フォームで相談する
                </a>
                <a
                  className="rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-white hover:border-white/30"
                  target="_blank"
                  rel="noreferrer"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(INFO.mapQuery)}`}
                >
                  Googleマップで開く
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <iframe
                title="map"
                className="h-[360px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(INFO.mapQuery)}&output=embed`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact (A案ガレージ調) */}
      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="mb-6 flex flex-col gap-2">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs text-orange-200">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              Reservation First / 予約優先
            </div>
            <h2 className="text-2xl font-black tracking-tight md:text-3xl">カスタム相談フォーム</h2>
            <p className="text-sm text-white/75">
              車種・ご希望内容・時期など、分かる範囲でOK。内容確認後、順次ご連絡します。
            </p>
          </div>

          <div className="rounded-3xl border border-orange-500/25 bg-[linear-gradient(135deg,rgba(249,115,22,0.22),rgba(0,0,0,0.75))] p-[1px]">
            <div className="rounded-3xl bg-neutral-950/70 p-5 md:p-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-lg font-black">
                    <span className="text-white">M</span>
                    <span className="text-orange-500">/</span>
                    <span className="text-white">BASE</span>
                  </div>
                  <div className="hidden text-xs text-white/55 md:block">JIMNY CUSTOM PRO SHOP</div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <a
                    href="#works"
                    className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:border-white/30"
                  >
                    施工事例を見る
                  </a>
                  <a
                    href="#access"
                    className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:border-white/30"
                  >
                    アクセス
                  </a>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                  <div className="text-xs font-bold text-orange-300">ご相談のコツ</div>
                  <div className="mt-2 text-xs text-white/70">
                    「乗り方（街乗り/林道/雪道）」と「予算感」があると提案が速いです。
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                  <div className="text-xs font-bold text-orange-300">予約優先</div>
                  <div className="mt-2 text-xs text-white/70">
                    内容によっては写真の送付や現車確認をお願いする場合があります。
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                  <div className="text-xs font-bold text-orange-300">目安返信</div>
                  <div className="mt-2 text-xs text-white/70">
                    営業時間（10:00–18:00）内に順次返信します。お急ぎは追記送信もOK。
                  </div>
                </div>
              </div>

              <div id="contact-form" className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {/* Left */}
                <div className="rounded-2xl border border-white/10 bg-black/35 p-6">
                  <div className="text-sm font-bold">フォーム入力の前に</div>

                  <div className="mt-4 space-y-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs font-bold text-white/85">よくある相談例</div>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-white/70">
                        <li>4cmリフト＋タイヤサイズ相談</li>
                        <li>バンパー交換＋ライト追加</li>
                        <li>街乗り快適＆見た目も強めにしたい</li>
                        <li>予算内で段階的に仕上げたい</li>
                      </ul>
                    </div>

                    <a
                      href="#works"
                      className="block rounded-2xl border border-orange-500/30 bg-orange-500/10 px-4 py-4 text-sm font-semibold text-orange-200 hover:bg-orange-500/15"
                    >
                      施工事例を見て、方向性を決める →
                      <div className="mt-1 text-xs font-normal text-orange-200/80">
                        近い事例をベースに提案できます
                      </div>
                    </a>

                    <div className="rounded-2xl border border-white/10 bg-black/40 p-4 text-xs text-white/65">
                      <span className="font-bold text-white/80">所在地</span>：{INFO.address}
                      <br />
                      <span className="font-bold text-white/80">営業時間</span>：{INFO.hours}
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="rounded-2xl border border-white/10 bg-black/35 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-sm font-bold">入力フォーム</div>
                      <div className="mt-1 text-xs text-white/60">送信内容は自動で記録されます。</div>
                    </div>

                    <a
                      className="rounded-xl bg-orange-600 px-4 py-2 text-xs font-bold text-black hover:bg-orange-500"
                      href={GOOGLE_FORM_OPEN}
                      target="_blank"
                      rel="noreferrer"
                    >
                      別タブで開く
                    </a>
                  </div>

                  <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                    <iframe
                      title="M/BASE Custom Form"
                      className="h-[860px] w-full"
                      loading="lazy"
                      src={GOOGLE_FORM_EMBED}
                      frameBorder="0"
                      marginHeight={0}
                      marginWidth={0}
                    >
                      読み込んでいます…
                    </iframe>
                  </div>

                  <div className="mt-3 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-3 text-xs text-orange-100/90">
                    ※ 写真添付を有効にしている場合、Googleログインが必要になることがあります。
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/45 p-4 md:flex md:items-center md:justify-between">
                <div className="text-xs text-white/70">
                  <span className="font-bold text-white/85">来店相談</span>をご希望の場合は、フォームの「来店希望」を「あり」にして送信してください。
                </div>
                <div className="mt-3 flex gap-2 md:mt-0">
                  <a
                    href="#access"
                    className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold text-white hover:border-white/30"
                  >
                    地図を見る
                  </a>
                  <a
                    href={INFO.formAnchor}
                    className="rounded-xl bg-orange-600 px-4 py-2 text-xs font-bold text-black hover:bg-orange-500"
                  >
                    いま入力する
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-xs text-white/55">
            ※ 予約優先。内容によっては写真の送付や現車確認をお願いする場合があります。
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-lg font-black">
                <span className="text-white">M</span>
                <span className="text-orange-500">/</span>
                <span className="text-white">BASE</span>
              </div>
              <div className="mt-1 text-xs text-white/60">JIMNY CUSTOM PRO SHOP</div>
              <div className="mt-3 text-xs text-white/60">
                {INFO.address} ｜ 営業時間 {INFO.hours}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 text-sm">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} className="text-white/70 hover:text-white">
                  {n.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 text-xs text-white/40">© {new Date().getFullYear()} M/BASE. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}
