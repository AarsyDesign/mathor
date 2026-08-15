"use client";

import { useEffect, useRef, useState } from "react";
import { siteContent } from "./content";

const { brand } = siteContent;

function Logo() {
  return (
    <a className="brandmark" href="#top" aria-label="Mathor home">
      <img className="brandmark-crest" src="/mathor-crest.png" alt="" width="189" height="239" aria-hidden="true" />
      <img className="brandmark-wordmark" src="/mathor-wordmark.png" alt="" width="732" height="161" aria-hidden="true" />
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
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    if (!menuOpen) return;

    const closeMenu = () => setMenuOpen(false);
    const closeFromOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) closeMenu();
    };
    const closeFromKeyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("scroll", closeMenu, { passive: true });
    document.addEventListener("pointerdown", closeFromOutside);
    document.addEventListener("keydown", closeFromKeyboard);

    return () => {
      window.removeEventListener("scroll", closeMenu);
      document.removeEventListener("pointerdown", closeFromOutside);
      document.removeEventListener("keydown", closeFromKeyboard);
    };
  }, [menuOpen]);

  return (
    <main id="top">
      <header className="site-header" ref={headerRef}>
        <Logo />
        <nav id="main-navigation" className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
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
            aria-controls="main-navigation"
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
          <img src="/hero-mathor-consumer.png" alt="Koleksi parfum Mathor dengan crest dan wordmark baru" />
          <div className="image-caption">
            <span>01</span>
            <p>Dari Pontianak untuk menemani<br />langkahmu di seluruh Indonesia.</p>
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
          <h2>Dari Pontianak, untuk menjadi bagian dari keseharianmu.</h2>
        </div>
        <div className="story-grid">
          <p>
            Mathor tumbuh dari interaksi yang dekat dan pemahaman bahwa setiap
            orang memiliki selera aroma, rutinitas, dan cara mengekspresikan diri
            yang berbeda.
          </p>
          <p>
            Kini koleksi Mathor dapat dijangkau lebih luas melalui Shopee.
            Pelanggan personal maupun pemilik toko juga dapat berkonsultasi
            langsung melalui WhatsApp sebelum memesan.
          </p>
        </div>
      </section>

      <section className="section" id="collections">
        <div className="section-heading">
          <p className="eyebrow">Koleksi</p>
          <h2>Pilih jenis parfum yang paling sesuai.</h2>
          <p>Kenali perbedaan parfum induk, parfum alkohol, dan parfum non-alkohol sebelum menentukan pilihan.</p>
        </div>
        <div className="product-grid">
          {siteContent.products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-media">
                <img src={product.image} alt={`${product.name}, ${product.type}`} />
                <small>M / {product.tag}</small>
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
          <h2>Dibuat untuk dipakai. Dipilih untuk menemani harimu.</h2>
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

      <section className="section" id="services">
        <div className="section-heading">
          <p className="eyebrow">Layanan</p>
          <h2>Untuk pemakaian personal dan kebutuhan retail.</h2>
        </div>
        <div className="service-grid">
          {siteContent.services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-index">{String(siteContent.services.indexOf(service) + 1).padStart(2, "0")}</span>
              <div><h3>{service.title}</h3><p>{service.text}</p></div>
              <a href={service.title === "Belanja di Shopee" ? brand.shopeeUrl : brand.whatsappUrl}>{service.cta} <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
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
          <h2>Sebelum memilih aroma Mathor.</h2>
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
        <h2>Pilih aromamu atau bicarakan kebutuhan tokomu.</h2>
        <div className="hero-actions">
          <a className="button primary" href={brand.shopeeUrl}>
            Belanja di Shopee
          </a>
          <a className="button secondary" href={brand.whatsappUrl}>
            Chat WhatsApp
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
        <span className="whatsapp-mark" aria-hidden="true">WA</span>
        <span>WhatsApp</span>
      </a>
    </main>
  );
}
