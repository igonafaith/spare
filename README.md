# Spare — Blogger Template

Template Blogger yang bersih dan fungsional. Terdiri dari dua bagian utama: **base template** (`index.xml`) dan **komponen opsional** (`components/`).

---

## Struktur Proyek

```
/components/             ← komponen opsional (CSS + JS)
index.xml                ← base template (standalone)
index_blogger_overwrite.xml  ← versi parse Blogger
import.jsx               ← root design reference
CHANGELOG.md
README.md
```

---

## index.xml

`index.xml` adalah base template Blogger yang bersifat **standalone** — dapat digunakan sendiri tanpa komponen tambahan apapun.

Yang sudah tersedia di dalamnya:

- Layout responsif dengan header, sidebar, footer grid, dan area konten
- CSS variables untuk sistem warna (`--bg`, `--surface`, `--text`, `--blue`, dst.) dengan dukungan dark mode via `:root[data-theme="dark"]`
- Anti-FOUC: deteksi tema tersimpan di `localStorage` dijalankan di `<head>` sebelum render
- Tipografi dengan Google Fonts (body + heading + mono)
- Ikon via RemixIcon
- Komponen UI bawaan: featured post, post card, tag, pagination, form komentar, 404, header scroll shadow, back-to-top
- Share links (Twitter/X, Facebook, WhatsApp, copy link)
- Related posts dengan thumbnail via Blogger Feeds JSON API
- Copy button pada blok kode
- Footer dengan copyright + credit
- Deteksi jenis halaman via objek global `_bv` (`isPost`, `isHome`, `isPage`, `isSearch`, `isLabel`, `isArchive`)

---

## components/

Komponen adalah file opsional yang ditambahkan ke template untuk memperluas tampilan atau fungsionalitas. Setiap komponen bersifat independen dan dapat dipilih sesuai kebutuhan.

### Struktur file

Setiap komponen umumnya terdiri dari sepasang file:

```
components/
  nama-fitur.css       ← styling komponen
  nama-fitur-js.html   ← script + markup HTML (jika diperlukan)
```

Beberapa komponen hanya CSS (`admonition.css`, `print.css`, `reduced-motion.css`), dan satu file adalah utilitas bersama untuk semua komponen JS (`shared-utils-js.html`).

### Cara kerja

Komponen CSS ditempelkan ke widget **Custom CSS** di Blogger (widget HTML701). Blogger secara otomatis membungkusnya dalam `<style>` — cukup paste isi file tanpa tag `<style>`.

Komponen JS/HTML ditempelkan ke widget **Custom JS Footer** (widget HTML712) atau widget HTML kosong lainnya di akhir body. File ini berisi blok `<script>` (dan kadang markup HTML kecil) yang dibungkus dalam CDATA.

### Komponen tersedia

| Komponen | Deskripsi |
|---|---|
| `shared-utils-js` | Fungsi utilitas bersama (`escHtml`, `slug`) via `window.__h`. Muat lebih awal dari komponen JS lain. |
| `dark-mode` | Toggle dark/light mode dengan ikon dan transisi halus |
| `toc` | Daftar isi otomatis dari heading artikel |
| `heading-anchor` | Tambah tautan anchor `#` di setiap heading |
| `copy-code` | Tombol salin pada blok kode `<pre>` |
| `lightbox` | Klik gambar untuk tampilan penuh |
| `image-caption` | Tampilkan keterangan gambar dari atribut `alt` |
| `related-posts` | Postingan terkait berdasarkan label, dengan thumbnail |
| `news-slider` | Slider postingan terbaru di halaman utama |
| `reading-time` | Estimasi waktu baca di header artikel |
| `reading-focus` | Highlight paragraf yang sedang dibaca |
| `footnotes` | Sistem catatan kaki dengan tooltip |
| `spoiler` | Blok konten yang bisa dibuka/tutup |
| `admonition` | Blok callout (info, warning, tip, danger) |
| `responsive-table` | Bungkus tabel agar bisa scroll horizontal di mobile |
| `lazy-embed` | Tunda muat iframe YouTube/Maps hingga diklik |
| `external-links` | Buka tautan eksternal di tab baru + ikon indikator |
| `smooth-scroll` | Scroll halus untuk tautan anchor `#` |
| `back-to-top` | Tombol kembali ke atas |
| `share-link` | Tombol share (Twitter/X, Facebook, WhatsApp, copy) |
| `cookie-consent` | Banner persetujuan cookie (GDPR-friendly) |
| `kbd-shortcuts` | Keyboard shortcut (mis. `G H` ke homepage) |
| `nav-menu-desktop` | Menu navigasi desktop dengan dropdown |
| `nav-menu-mobile` | Menu navigasi mobile dengan slide-in |
| `print` | Optimasi tampilan saat halaman dicetak |
| `reduced-motion` | Kurangi animasi untuk pengguna dengan preferensi `prefers-reduced-motion` |
| `theme-autumn` | Override palet warna tema musim gugur (oranye kecoklatan) |
| `theme-spring` | Override palet warna tema musim semi (hijau segar) |

### Versi minify

Folder `components/minify/` berisi versi satu baris dari setiap file CSS dan JS, siap pakai langsung di Blogger untuk menghemat ukuran template.

---

## Urutan pemasangan komponen JS yang disarankan

```
1. shared-utils-js    ← fondasi, muat pertama
2. dark-mode-js
3. toc-js / heading-anchor-js
4. copy-code-js
5. lightbox-js / image-caption-js
6. reading-time-js / reading-focus-js
7. related-posts-js
8. news-slider-js
9. (komponen lainnya bebas urutan)
```

---

## Lisensi

MIT License — bebas digunakan, dimodifikasi, dan didistribusikan.

Dibuat oleh [Spare](https://spare-dev.blogspot.com/)
