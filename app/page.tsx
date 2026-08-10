"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import { siteContent } from "./content";

const { brand } = siteContent;

function Logo() {
  return (
    <a className="brandmark" href="#top" aria-label="Mathor home">
      <span className="brandmark-symbol" aria-hidden="true">M</span>
      <span className="brandmark-copy">
        <strong>MATHOR</strong>
        <small>Fragrance House</small>
      </span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main id="top">
      <header className="site-header">
        <Logo />
        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
          {siteContent.navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="button ghost" href={brand.shopeeUrl}>
            Shopee
          </a>
          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy reveal">
          <p className="eyebrow">Fragrance house / {brand.location}</p>
          <h1>Aroma yang tumbuh bersama langkahmu.</h1>
          <p className="tagline">Original dan custom fragrance dari Pontianak.</p>
          <p className="hero-text">{brand.summary}</p>
          <div className="hero-actions">
            <a className="button primary" href={brand.shopeeUrl}>
              Belanja di Shopee
            </a>
            <a className="button secondary" href={brand.whatsappUrl}>
              Chat WhatsApp
            </a>
          </div>
          <div className="hero-highlights">
            {siteContent.heroHighlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="hero-visual reveal delay">
          <img src="/hero-mathor.png" alt="Editorial perfume bottles for Mathor" />
          <div className="image-caption">
            <span>01</span>
            <p>Berakar di Kalimantan Barat.<br />Bergerak ke seluruh Indonesia.</p>
          </div>
        </div>
      </section>

      <section className="stats-band" aria-label="Mathor statistics">
        {siteContent.stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="section story" id="story">
        <div>
          <p className="eyebrow">Cerita Mathor</p>
          <h2>Dari hubungan yang nyata, menuju jangkauan yang lebih luas.</h2>
        </div>
        <div className="story-grid">
          <p>
            Mathor bermula dari cara kerja yang dekat dengan pemilik toko:
            datang langsung, memahami kebutuhan display, menjaga ritme suplai,
            lalu membangun kepercayaan lewat kunjungan berkala.
          </p>
          <p>
            Ekspansi online membuka jangkauan baru tanpa memutus sistem offline.
            Pembeli personal bisa masuk lewat Shopee, sementara retail,
            reseller, dan B2B tetap bisa berkonsultasi langsung via WhatsApp.
          </p>
        </div>
      </section>

      <section className="section" id="collections">
        <div className="section-heading">
          <p className="eyebrow">Koleksi</p>
          <h2>Temukan aroma untuk setiap sisi dirimu.</h2>
          <p>Tiga arah aroma sebagai gambaran koleksi Mathor: segar, hangat, dan lembut.</p>
        </div>
        <div className="product-grid">
          {siteContent.products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-bottle" style={{ "--accent": product.color } as CSSProperties}>
                <small>M / {product.tag}</small>
                <span>{product.name.split(" ")[0]}</span>
              </div>
              <div className="product-meta">
                <span className="product-tag">{product.tag}</span>
                <h3>{product.name}</h3>
                <p>{product.type}</p>
                <strong>{product.price}</strong>
                <small>{product.size}</small>
                <div className="notes">
                  {product.notes.map((note) => (
                    <span key={note}>{note}</span>
                  ))}
                </div>
                <p className="mood">{product.mood}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section why" id="why">
        <div className="section-heading">
          <p className="eyebrow">Mengapa Mathor</p>
          <h2>Dibuat untuk dipakai. Dibangun untuk bertumbuh.</h2>
        </div>
        <div className="value-grid">
          {siteContent.valueProps.map((item, index) => (
            <article key={item.title} className="value-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="route-story">
        <div className="route-copy">
          <p className="eyebrow">Perjalanan distribusi</p>
          <h2>Dekat secara offline, mudah dijangkau secara online.</h2>
          <p>
            Distribusi langsung memberi Mathor pemahaman tentang toko, stok, dan
            pembeli lokal. Kanal online memperluas pasar tanpa menghapus sentuhan
            konsultatif yang membuat brand ini tumbuh.
          </p>
        </div>
        <div className="route-line" aria-label="Distribution path from Pontianak to national market">
          <div className="route-step">
            <span aria-hidden="true" />
            <strong>Pontianak</strong>
            <small>Berangkat</small>
          </div>
          <i />
          <div className="route-step">
            <span aria-hidden="true" />
            <strong>Retail Kalbar</strong>
            <small>Jaringan offline</small>
          </div>
          <i />
          <div className="route-step">
            <span aria-hidden="true" />
            <strong>Indonesia</strong>
            <small>Jangkauan online</small>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p className="eyebrow">Layanan</p>
          <h2>Satu rumah parfum, empat cara untuk bekerja bersama.</h2>
        </div>
        <div className="service-grid">
          {siteContent.services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-index">{String(siteContent.services.indexOf(service) + 1).padStart(2, "0")}</span>
              <div><h3>{service.title}</h3><p>{service.text}</p></div>
              <a href={service.title === "Personal" ? brand.shopeeUrl : brand.whatsappUrl}>{service.cta} <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="b2b" id="b2b">
        <div>
          <p className="eyebrow">B2B / Maklon</p>
          <h2>Wujudkan identitas brand dalam sebuah aroma.</h2>
          <p>
            Konsultasikan arah aroma dan kebutuhan produk untuk brand Anda.
            Detail paket, minimum order, pilihan botol, dan alur sampling akan
            disesuaikan melalui diskusi awal bersama tim Mathor.
          </p>
        </div>
        <a className="button primary" href={brand.whatsappUrl}>
          Diskusi Maklon
        </a>
      </section>

      <section className="section testimonials" id="testimonials">
        <div className="section-heading">
          <p className="eyebrow">Cerita pelanggan</p>
          <h2>Kepercayaan dibangun dari layanan yang konsisten.</h2>
        </div>
        <div className="testimonial-grid">
          {siteContent.testimonials.map((testimonial) => (
            <figure key={testimonial.name}>
              <blockquote>"{testimonial.quote}"</blockquote>
              <figcaption>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="section-heading">
          <p className="eyebrow">Pertanyaan umum</p>
          <h2>Sebelum memilih aroma atau memulai kerja sama.</h2>
        </div>
        <div className="faq-list">
          {siteContent.faqs.map((faq, index) => (
            <div className="faq-item" key={faq.question}>
              <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                <span>{faq.question}</span>
                <b>{openFaq === index ? "-" : "+"}</b>
              </button>
              <div className={openFaq === index ? "faq-answer open" : "faq-answer"}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Mulai bersama Mathor</p>
        <h2>Mulai dari satu botol, satu toko, atau satu brief maklon.</h2>
        <div className="hero-actions">
          <a className="button primary" href={brand.shopeeUrl}>
            Ke Shopee Mathor
          </a>
          <a className="button secondary" href={brand.whatsappUrl}>
            Konsultasi WhatsApp
          </a>
        </div>
      </section>

      <footer>
        <Logo />
        <div className="footer-links">
          <a href={brand.whatsappUrl}>WhatsApp</a>
          <a href={brand.instagramUrl}>Instagram</a>
          <a href={brand.tiktokUrl}>TikTok</a>
          <a href={brand.shopeeUrl}>Shopee</a>
        </div>
        <p>{brand.address}</p>
      </footer>

      <a className="floating-whatsapp" href={brand.whatsappUrl} aria-label="Chat Mathor on WhatsApp">
        WA
      </a>
    </main>
  );
}
