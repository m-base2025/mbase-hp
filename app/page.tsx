// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "M/BASE（エムベース）｜SUV・4WDカスタム・車検・整備｜八戸市",
  description:
    "青森県八戸市のSUV・4WD専門店 M/BASE。指定整備工場が運営し、ジムニーを中心にカスタム・車検・一般整備・鈑金塗装・車両販売・リースまでワンストップ対応。",
  openGraph: {
    title: "M/BASE（エムベース）｜SUV・4WDを安心して任せられる",
    description:
      "指定整備工場が運営。SUV・4WDカスタム／車検／整備／鈑金塗装／車両販売／リースまで対応。",
    url: "https://mbase-hp.vercel.app",
    siteName: "M/BASE",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "M/BASE SUV・4WDカスタム",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  // X(Twitter)のカード表示も整える（任意だけどおすすめ）
  twitter: {
    card: "summary_large_image",
    title: "M/BASE（エムベース）｜SUV・4WDカスタム・車検・整備｜八戸市",
    description:
      "指定整備工場が運営。SUV・4WDカスタム／車検／整備／鈑金塗装／車両販売／リースまでワンストップ対応。",
    images: ["/hero.jpg"],
  },
  // ついでに robots も明示（任意）
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
