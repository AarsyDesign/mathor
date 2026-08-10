# Mathor Design Direction

## Brand Idea

Mathor adalah fragrance house dari Pontianak yang tumbuh lewat kedekatan: perjalanan rutin, hubungan dengan toko, dan suplai yang konsisten. Tampilan brand harus terasa premium tanpa menjadi berjarak. Kata kuncinya adalah **grounded luxury**: tenang, berkarakter, dan nyata.

## Visual Principles

1. **Editorial, bukan template.** Gunakan komposisi asimetris, garis tipis, caption kecil, dan ruang kosong yang terukur. Hindari kumpulan kartu identik.
2. **Produk menjadi pusat perhatian.** Foto harus terlihat jelas, tidak tertutup teks, dan tidak dipaksa memenuhi container hingga terpotong.
3. **Luxury melalui restraint.** Brass hanya sebagai aksen. Tidak ada gradient dekoratif, glow, orb, atau shadow berat.
4. **Hangat dan approachable.** Dasar warm white menjaga halaman tidak terasa dingin; charcoal memberi kontras premium.
5. **Setiap elemen punya fungsi.** Badge, border, dan radius hanya dipakai saat membantu struktur atau interaksi.

## Logo System

Logo utama terdiri dari monogram `M` dan wordmark `MATHOR`. Descriptor `FRAGRANCE HOUSE` dipakai pada ukuran medium-besar dan boleh dihilangkan pada ukuran sangat kecil.

- Clear space minimum: setara lebar monogram di semua sisi.
- Ukuran minimum digital: 120 px untuk logo lengkap, 28 px untuk monogram.
- Versi terang: charcoal + brass pada latar warm white.
- Versi gelap: ivory + brass pada latar charcoal.
- Jangan memberi kotak latar, gradient, shadow, outline tambahan, atau merapatkan wordmark ke tepi container.

## Color Palette

| Token | Hex | Use |
| --- | --- | --- |
| Ink | `#191815` | Main text, dark sections |
| Bone | `#F5F1E8` | Main background |
| Paper | `#FCFAF5` | Product surfaces |
| Brass | `#A87938` | Brand accent, active details |
| Moss | `#626A54` | Supporting accent |
| Rust | `#9A5540` | Eyebrows and warm emphasis |
| Line | `#D8D1C5` | Dividers and controls |

Brass tidak boleh mendominasi lebih dari sekitar 10% bidang visual.

## Typography

- Display: `Cormorant Garamond` atau fallback Georgia. Dipakai untuk headline editorial, maksimum 72 px desktop dan 46 px mobile.
- Sans: `Inter` atau system sans. Dipakai untuk body, navigasi, tombol, label, dan data.
- Body ideal: 16-18 px, line-height 1.65.
- Eyebrow: 11 px uppercase dengan letter-spacing 0.16em.
- Jangan memakai teks hero raksasa yang menguasai seluruh layar.

## Layout & Spacing

- Content max-width: 1280 px.
- Gutter: 64 px desktop, 32 px tablet, 18 px mobile.
- Section spacing: 112 px desktop, 72 px tablet, 56 px mobile.
- Grid: 12 kolom desktop, 6 tablet, 1-2 mobile.
- Radius: 0-6 px. Gunakan radius hanya pada media, card produk, dan kontrol.
- Button height: 46 px desktop, minimum touch target 44 px.
- Jarak antar CTA: 10-12 px; jangan menempel ke body copy.

## Components

### Header

Sticky, tipis, warm-white transparan. Logo harus terlihat penuh tanpa crop. Navigasi desktop berupa teks sederhana; mobile memakai satu tombol menu.

### Hero

Copy dan foto berbagi ruang seimbang. Foto hero selalu memakai `object-fit: contain` atau aspect ratio stabil. Caption diletakkan di luar area utama foto pada mobile agar tidak overlap.

### Product

Hanya product item yang tampil sebagai card. Visual botol punya latar netral dan perbedaan warna aroma yang halus. Informasi disusun dengan urutan: tag, nama, tipe, harga, notes.

### Services & Values

Gunakan numbered editorial rows atau grid dengan divider. Jangan menjadikannya kumpulan floating cards.

### Buttons

Primary charcoal, secondary transparan dengan border. Gunakan pill hanya untuk CTA global; elemen informasional memakai teks atau divider biasa.

### Motion

Durasi 160-240 ms. Hover menggunakan perubahan warna, garis, atau perpindahan maksimal 2 px. Hormati `prefers-reduced-motion`.

## Content Editing

Semua data bisnis utama disimpan di `app/content.json`: kontak, link, statistik, produk, testimonial, FAQ, layanan, dan value proposition. Ganti nilai di file tersebut tanpa mengubah struktur halaman. Simpan gambar pengganti di folder `public` dan pertahankan nama file saat ingin mengganti visual tanpa menyentuh komponen.

## Anti-Patterns

- Tidak memakai gradient dekoratif atau glow.
- Tidak memakai headline ekstrem di dalam section biasa.
- Tidak membuat setiap section sebagai card.
- Tidak menumpuk card di dalam card.
- Tidak memakai terlalu banyak pill/tag.
- Tidak menampilkan kata “dummy”, “placeholder”, atau instruksi editor kepada pengunjung.
- Tidak membiarkan logo, teks, dan media saling overlap di viewport mana pun.
