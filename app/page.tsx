"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
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

function StatCounter({ value, index }: { value: string; index: number }) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const target = Number(match[1]);
    const suffix = match[2];
    let frame = 0;
    let delay = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setDisplayValue(value);
          return;
        }

        delay = window.setTimeout(() => {
          const startedAt = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - startedAt) / 1200, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(`${Math.round(target * eased)}${suffix}`);
            if (progress < 1) frame = requestAnimationFrame(animate);
          };
          frame = requestAnimationFrame(animate);
        }, index * 110);
      },
      { threshold: 0.35 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      window.clearTimeout(delay);
      cancelAnimationFrame(frame);
    };
  }, [index, value]);

  return (
    <span ref={elementRef} aria-label={value}>
      <span aria-hidden="true">{displayValue}</span>
    </span>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [activeRoute, setActiveRoute] = useState(0);
  const [routePulse, setRoutePulse] = useState(0);

  const activateRoute = (index: number) => {
    setActiveRoute(index);
    setRoutePulse((value) => value + 1);
  };

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
          <p className="tagline">Racikan aroma pilihan dari Pontianak, untuk setiap langkahmu.</p>
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
        {siteContent.stats.map((stat, index) => (
          <div key={stat.label}>
            <strong><StatCounter value={stat.value} index={index} /></strong>
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
          <p>Tiga format untuk kebutuhan yang berbeda: inspired fragrance spray, perfume oil, dan pocket fragrance.</p>
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
        <div className="collection-cta">
          <div>
            <strong>{siteContent.collectionCta.title}</strong>
            <p>{siteContent.collectionCta.text}</p>
          </div>
          <a className="button primary" href={brand.shopeeUrl}>
            {siteContent.collectionCta.label} <span aria-hidden="true">↗</span>
          </a>
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
          {routePulse > 0 && <span className="route-signal" key={routePulse} aria-hidden="true" />}
          <button className={activeRoute === 0 ? "route-step active" : "route-step"} type="button" aria-pressed={activeRoute === 0} onClick={() => activateRoute(0)}>
            <span aria-hidden="true" />
            <strong>Pontianak</strong>
            <small>Berangkat</small>
          </button>
          <i />
          <button className={activeRoute === 1 ? "route-step active" : "route-step"} type="button" aria-pressed={activeRoute === 1} onClick={() => activateRoute(1)}>
            <span aria-hidden="true" />
            <strong>Retail Kalbar</strong>
            <small>Jaringan offline</small>
          </button>
          <i />
          <button className={activeRoute === 2 ? "route-step active" : "route-step"} type="button" aria-pressed={activeRoute === 2} onClick={() => activateRoute(2)}>
            <span aria-hidden="true" />
            <strong>Indonesia</strong>
            <small>Jangkauan online</small>
          </button>
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
          <p className="eyebrow">B2B / Private Label</p>
          <h2>Hadirkan produk parfum dengan identitas brand Anda.</h2>
          <p>
            Pilih konsentrasi yang tersedia, lalu hadirkan produk menggunakan
            brand atau merek dagang Anda. Detail kebutuhan dibahas langsung
            bersama tim Mathor.
          </p>
        </div>
        <a className="button primary" href={brand.whatsappUrl}>
          Diskusi B2B
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
        <h2>Mulai dari satu botol, satu toko, atau satu brand.</h2>
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
