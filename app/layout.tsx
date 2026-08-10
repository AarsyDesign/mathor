import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mathor | Aroma yang Mengikuti Langkahmu",
  description:
    "Landing page Mathor, rumah parfum Pontianak untuk personal, retail, reseller, dan B2B maklon.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Mathor",
    description: "Aroma yang Mengikuti Langkahmu",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathor",
    description: "Aroma yang Mengikuti Langkahmu",
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
