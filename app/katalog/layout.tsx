import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Katalog Aroma | Mathor Fragrance House",
  description: "Jelajahi koleksi aroma Mathor berdasarkan nama, notes, dan kesan aromanya.",
};

export default function CatalogLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
