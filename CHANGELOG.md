# Changelog

All notable changes to this project will be documented in this file.

---

## [1.0.0] — 2026-05-17

### Added
- Base template `index.xml`: layout responsif, dark mode, CSS variables, Google Fonts, RemixIcon
- Sistem deteksi halaman via `_bv` global (`isPost`, `isHome`, `isPage`, `isSearch`, `isLabel`, `isArchive`)
- Anti-FOUC dark mode via `localStorage` di `<head>`
- Featured post, post card, tag, pagination, form komentar, 404, share links, related posts, copy button
- Footer copyright dengan credit Spare
- Komponen `shared-utils-js`: utilitas bersama `window.__h.escHtml`, `window.__h.slug`
- Komponen tema warna: `theme-autumn.css`, `theme-spring.css` (light + dark mode)
- Komponen UI: `dark-mode`, `toc`, `heading-anchor`, `copy-code`, `lightbox`, `image-caption`, `related-posts`, `news-slider`, `reading-time`, `reading-focus`, `footnotes`, `spoiler`, `admonition`, `responsive-table`, `lazy-embed`, `external-links`, `smooth-scroll`, `back-to-top`, `share-link`, `cookie-consent`, `kbd-shortcuts`, `nav-menu-desktop`, `nav-menu-mobile`, `print`, `reduced-motion`
- Folder `components/minify/` berisi versi minified semua komponen
- `CHANGELOG.md` dan `README.md`

### Fixed
- Thumbnail URL regex related posts: pola `/s72-w640-h360-c/` dan varian lain kini cocok dengan `/\/s\d+[^/]*\//`
- Duplikasi `dns-prefetch` yang redundan dengan `preconnect` dihapus
- Atribut `fetchpriority` pada Google Fonts (`high`) dan RemixIcon (`low`)
- Atribut `width`/`height` pada gambar featured post dan post card (CLS fix)
- Share URL menggunakan `data:post.url.canonical.jsonEscaped` + `jsonEscaped` untuk title
- `display:block` dihapus dari selector `.post-body table` (tidak semantis); diganti dengan `.post-body .table-wrap` + `.post-body>table` sebagai fallback
- Guard duplikasi related posts dan copy button di base template
- `!important` berlebih dihapus dari `dark-mode.css` (tag, label, kategori)
- `escHtml` dan `slug` disentralisasi ke `window.__h`; semua komponen JS pakai fallback lokal jika belum dimuat
