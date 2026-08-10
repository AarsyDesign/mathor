import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mathor | Aroma yang Mengikuti Langkahmu",
  description:
    "Mathor Fragrance House dari Pontianak menghadirkan inspired fragrance, parfum spray, parfum oles, serta layanan retail, reseller, dan B2B.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Mathor",
    description: "Inspired fragrance, parfum spray, dan parfum oles dari Pontianak.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathor",
    description: "Inspired fragrance, parfum spray, dan parfum oles dari Pontianak.",
    images: ["/og.png"],
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
