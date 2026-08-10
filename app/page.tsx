"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import { siteContent } from "./content";

const { brand } = siteContent;

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Mathor home">
      <span className="logo-mark">M</span>
      <span className="logo-text">
        <span>Mathor</span>
        <small>Pontianak fragrance house</small>
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
          <a className="icon-link" href={brand.instagramUrl} aria-label="Instagram">
            IG
          </a>
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
          <p className="eyebrow">{brand.location}</p>
          <h1>{brand.name}</h1>
          <p className="tagline">{brand.tagline}</p>
          <p className="hero-text">{brand.summary}</p>
          <div className="hero-actions">
            <a className="button primary" href={brand.shopeeUrl}>
              Belanja di Shopee
            </a>
            <a className="button secondary" href={brand.whatsappUrl}>
              Chat WhatsApp
            </a>
          </div>
          <div className="hero-pills">
            {siteContent.heroHighlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="hero-visual reveal delay">
          <img src="/og.png" alt="Mathor perfume editorial preview" />
          <div className="hero-card">
            <span>Distribution DNA</span>
            <strong>Kalbar ke Nasional</strong>
          </div>
        </div>
      </section>

      <section className="stats-band" aria-label="Mathor placeholder statistics">
        {siteContent.stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="section story" id="story">
        <div>
          <p className="eyebrow">Brand Story</p>
          <h2>Dibangun dari rute toko, dirancang untuk pasar nasional.</h2>
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
          <p className="eyebrow">Collections</p>
          <h2>Dummy product yang siap diganti dari content layer.</h2>
          <p>
            Nama, harga, notes, tag, dan karakter aroma berada di satu file data.
            Ini membuat katalog mudah diperbarui saat produk final tersedia.
          </p>
        </div>
        <div className="product-grid">
          {siteContent.products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-bottle" style={{ "--accent": product.color } as CSSProperties}>
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
          <p className="eyebrow">Why Mathor</p>
          <h2>Premium yang tetap mudah didekati.</h2>
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
          <p className="eyebrow">Offline to Online</p>
          <h2>Sistem lama tetap hidup, kanal baru membuka skala.</h2>
          <p>
            Distribusi langsung memberi Mathor pemahaman tentang toko, stok, dan
            pembeli lokal. Kanal online memperluas pasar tanpa menghapus sentuhan
            konsultatif yang membuat brand ini tumbuh.
          </p>
        </div>
        <div className="route-line" aria-label="Distribution path from Pontianak to national market">
          <span>Pontianak</span>
          <i />
          <span>Kalbar Retail</span>
          <i />
          <span>Online Nasional</span>
        </div>
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Empat pintu masuk untuk calon pelanggan dan partner.</h2>
        </div>
        <div className="service-grid">
          {siteContent.services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href={service.title === "Personal" ? brand.shopeeUrl : brand.whatsappUrl}>{service.cta}</a>
            </article>
          ))}
        </div>
      </section>

      <section className="b2b" id="b2b">
        <div>
          <p className="eyebrow">B2B / Maklon</p>
          <h2>Ruang awal untuk brand yang ingin mengembangkan parfum sendiri.</h2>
          <p>
            Bagian ini sengaja dibuat fleksibel karena detail maklon belum final.
            Nanti bisa ditambah paket, MOQ, pilihan botol, timeline produksi,
            sertifikasi, dan alur sampling tanpa mengubah desain utama.
          </p>
        </div>
        <a className="button primary" href={brand.whatsappUrl}>
          Diskusi Maklon
        </a>
      </section>

      <section className="section testimonials" id="testimonials">
        <div className="section-heading">
          <p className="eyebrow">Testimonials</p>
          <h2>Placeholder social proof untuk fase awal landing page.</h2>
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
          <p className="eyebrow">FAQ</p>
          <h2>Pertanyaan yang paling mungkin muncul sebelum chat.</h2>
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
        <p className="eyebrow">Ready to scent the next step</p>
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
