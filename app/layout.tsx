import type { Metadata } from "next";
import "./globals.css";
import "./logo.css";
import "./theme.css";

export const metadata: Metadata = {
  title: "Mathor | Aroma yang Mengikuti Langkahmu",
  description:
    "Mathor Fragrance House dari Pontianak menghadirkan parfum induk, parfum alkohol, dan parfum non-alkohol untuk pelanggan personal dan retail.",
  icons: {
    icon: "/mathor-crest.png",
    shortcut: "/mathor-crest.png",
  },
  openGraph: {
    title: "Mathor",
    description: "Parfum induk, parfum alkohol, dan parfum non-alkohol dari Pontianak.",
    images: ["/hero-mathor-consumer.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathor",
    description: "Parfum induk, parfum alkohol, dan parfum non-alkohol dari Pontianak.",
    images: ["/hero-mathor-consumer.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
