"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowLeft, FiArrowUpRight, FiSearch } from "react-icons/fi";
import { siteContent } from "../content";
import catalog from "./catalog-data.json";
import "./catalog.css";

const PAGE_SIZE = 24;
const allCategories = ["Semua kesan", ...new Set(catalog.aromas.map((aroma) => aroma.category))];

function Logo() {
  return (
    <Link className="brandmark" href="/" aria-label="Kembali ke beranda Mathor">
      <img className="brandmark-crest" src="/mathor-crest.png" alt="" width="189" height="239" aria-hidden="true" />
      <img className="brandmark-wordmark" src="/mathor-wordmark.png" alt="Mathor Fragrance House" width="732" height="161" />
    </Link>
  );
}

function whatsappLink(name: string) {
  const message = catalog.settings.whatsappMessage.replace("{name}", name);
  return `${siteContent.brand.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export default function CatalogPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Semua kesan");
  const [sort, setSort] = useState("az");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filteredAromas = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("id");
    const matches = catalog.aromas.filter((aroma) => {
      const searchable = [
        aroma.name,
        aroma.impression,
        aroma.notes.top,
        aroma.notes.heart,
        aroma.notes.base,
      ].join(" ").toLocaleLowerCase("id");

      return (
        (category === "Semua kesan" || aroma.category === category) &&
        (!normalizedQuery || searchable.includes(normalizedQuery))
      );
    });

    return [...matches].sort((first, second) =>
      sort === "za"
        ? second.name.localeCompare(first.name, "id")
        : first.name.localeCompare(second.name, "id"),
    );
  }, [category, query, sort]);

  const visibleAromas = filteredAromas.slice(0, visibleCount);

  function updateQuery(value: string) {
    setQuery(value);
    setVisibleCount(PAGE_SIZE);
  }

  function updateCategory(value: string) {
    setCategory(value);
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <main className="catalog-page">
      <header className="catalog-header">
        <Logo />
        <div className="catalog-header-actions">
          <Link className="catalog-back" href="/"><FiArrowLeft aria-hidden="true" /> Beranda</Link>
          <a className="catalog-shopee" href={siteContent.brand.shopeeUrl}>Shopee <FiArrowUpRight aria-hidden="true" /></a>
        </div>
      </header>

      <section className="catalog-intro">
        <div>
          <p className="catalog-eyebrow">Katalog aroma / Mathor</p>
          <h1>Temukan aroma yang terasa seperti dirimu.</h1>
        </div>
        <p>
          Dari aroma yang bersih dan ringan hingga karakter yang hangat dan berani.
          Pilih melalui notes atau kesan yang paling dekat dengan seleramu.
        </p>
      </section>

      <section className="catalog-browser" aria-label="Daftar aroma Mathor">
        <div className="catalog-tools">
          <label className="catalog-search">
            <FiSearch aria-hidden="true" />
            <span className="sr-only">Cari aroma atau notes</span>
            <input
              type="search"
              value={query}
              onChange={(event) => updateQuery(event.target.value)}
              placeholder="Cari nama atau notes..."
            />
          </label>

          <label className="catalog-select">
            <span>Kesan</span>
            <select value={category} onChange={(event) => updateCategory(event.target.value)}>
              {allCategories.map((option) => <option key={option}>{option}</option>)}
            </select>
          </label>

          <label className="catalog-select catalog-sort">
            <span>Urutan</span>
            <select value={sort} onChange={(event) => setSort(event.target.value)}>
              <option value="az">A - Z</option>
              <option value="za">Z - A</option>
            </select>
          </label>
        </div>

        <div className="catalog-result-bar" aria-live="polite">
          <span>{filteredAromas.length} aroma</span>
          <p>{category === "Semua kesan" ? "Seluruh koleksi" : category}</p>
        </div>

        {visibleAromas.length ? (
          <div className="aroma-grid">
            {visibleAromas.map((aroma, index) => (
              <article className="aroma-item" key={aroma.id}>
                <div className="aroma-heading">
                  <span>{String(index + 1).padStart(3, "0")}</span>
                  <p>{aroma.impression}</p>
                </div>
                <h2>{aroma.name}</h2>
                <dl className="aroma-notes">
                  <div><dt>Top</dt><dd>{aroma.notes.top}</dd></div>
                  <div><dt>Heart</dt><dd>{aroma.notes.heart}</dd></div>
                  <div><dt>Base</dt><dd>{aroma.notes.base}</dd></div>
                </dl>
                <div className="aroma-footer">
                  <strong>{aroma.price ?? catalog.settings.priceFallback}</strong>
                  <a href={whatsappLink(aroma.name)} aria-label={`Tanyakan aroma ${aroma.name} melalui WhatsApp`}>
                    <FaWhatsapp aria-hidden="true" /> Tanya aroma
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="catalog-empty">
            <strong>Aroma belum ditemukan.</strong>
            <p>Coba nama atau notes lain, atau tanyakan langsung kepada tim Mathor.</p>
            <a href={siteContent.brand.whatsappUrl}><FaWhatsapp aria-hidden="true" /> Chat WhatsApp</a>
          </div>
        )}

        {visibleCount < filteredAromas.length && (
          <button className="catalog-more" type="button" onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}>
            Tampilkan aroma lainnya
            <span>{Math.min(PAGE_SIZE, filteredAromas.length - visibleCount)}</span>
          </button>
        )}
      </section>

      <section className="catalog-consultation">
        <p className="catalog-eyebrow">Belum yakin memilih?</p>
        <h2>Ceritakan aroma yang biasa kamu sukai.</h2>
        <a href={siteContent.brand.whatsappUrl}><FaWhatsapp aria-hidden="true" /> Konsultasi WhatsApp</a>
      </section>

      <footer className="catalog-footer">
        <Logo />
        <p>{siteContent.brand.address}</p>
        <div>
          <a href={siteContent.brand.instagramUrl}>Instagram</a>
          <a href={siteContent.brand.tiktokUrl}>TikTok</a>
          <a href={siteContent.brand.shopeeUrl}>Shopee</a>
        </div>
      </footer>
    </main>
  );
}
