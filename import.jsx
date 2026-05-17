import { useState } from "react";

const COLORS = {
  bg: "#FBFBFD",
  surface: "#FFFFFF",
  surfaceHover: "#F4F7FB",
  text: "#1A1D23",
  textMuted: "#6B7280",
  textLight: "#9CA3AF",
  blue: "#2563EB",
  blueLight: "#DBEAFE",
  blueDark: "#1D4ED8",
  blueMuted: "#93B4F5",
  border: "#E8ECF1",
  borderLight: "#F0F2F5",
  accent: "#3B82F6",
};

const FONTS = {
  heading: "'Outfit', sans-serif",
  body: "'Source Sans 3', sans-serif",
  mono: "'JetBrains Mono', monospace",
};

const mockPosts = [
  { id: 1, title: "Akhirnya Pindah ke Apartemen Baru", label: "Diary", date: "2 Mei 2026", excerpt: "Setelah hampir setahun cari-cari, akhirnya nemu tempat yang cocok. Prosesnya panjang dan melelahkan tapi worth it banget...", thumb: "🏠", comments: 12, featured: true },
  { id: 2, title: "Review Jujur: Hidup Tanpa Motor Selama Sebulan", label: "Opini", date: "28 Apr 2026", excerpt: "Eksperimen kecil yang ternyata mengubah banyak perspektif soal mobilitas di Jakarta...", thumb: "🚶", comments: 24 },
  { id: 3, title: "Weekend di Bandung: Coffee Shop Hunting", label: "Travel", date: "20 Apr 2026", excerpt: "Tiga hari dua malam nyobain kopi dari tempat-tempat yang belum pernah aku kunjungi sebelumnya...", thumb: "☕", comments: 8 },
  { id: 4, title: "Resep Nasi Goreng Kampung ala Ibu", label: "Food", date: "15 Apr 2026", excerpt: "Bukan resep fancy, tapi ini comfort food yang selalu bikin kangen rumah...", thumb: "🍳", comments: 31 },
  { id: 5, title: "Kenapa Aku Mulai Journaling Lagi", label: "Lifestyle", date: "10 Apr 2026", excerpt: "Di tengah semua kebisingan digital, nulis di kertas ternyata masih punya magic tersendiri...", thumb: "📓", comments: 5 },
  { id: 6, title: "Film-Film yang Nemenin Bulan April", label: "Diary", date: "5 Apr 2026", excerpt: "Empat film yang aku tonton bulan ini dan kenapa semuanya bikin mikir...", thumb: "🎬", comments: 17 },
];

const labels = ["Diary", "Opini", "Travel", "Food", "Lifestyle"];

const labelColors = {
  Diary: { bg: "#DBEAFE", text: "#1D4ED8" },
  Opini: { bg: "#FEF3C7", text: "#92400E" },
  Travel: { bg: "#D1FAE5", text: "#065F46" },
  Food: { bg: "#FEE2E2", text: "#991B1B" },
  Lifestyle: { bg: "#EDE9FE", text: "#5B21B6" },
};

function Header({ menuOpen, setMenuOpen }) {
  return (
    <header
      style={{
        background: COLORS.surface,
        borderBottom: `1px solid ${COLORS.border}`,
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: `linear-gradient(135deg, ${COLORS.blue}, ${COLORS.blueDark})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontFamily: FONTS.heading,
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            i
          </div>
          <span
            style={{
              fontFamily: FONTS.heading,
              fontWeight: 700,
              fontSize: 20,
              color: COLORS.text,
              letterSpacing: "-0.02em",
            }}
          >
            igona
          </span>
          <span
            style={{
              fontFamily: FONTS.mono,
              fontSize: 11,
              color: COLORS.textLight,
              background: COLORS.borderLight,
              padding: "2px 6px",
              borderRadius: 4,
            }}
          >
            .web.id
          </span>
        </div>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
          }}
          className="desktop-nav"
        >
          {["Beranda", "Tentang", "Arsip"].map((item, i) => (
            <a
              key={item}
              href="#"
              style={{
                fontFamily: FONTS.body,
                fontSize: 14,
                fontWeight: i === 0 ? 600 : 400,
                color: i === 0 ? COLORS.blue : COLORS.textMuted,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              {item}
            </a>
          ))}
          <button
            style={{
              background: "none",
              border: `1.5px solid ${COLORS.border}`,
              borderRadius: 8,
              padding: "6px 8px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              color: COLORS.textMuted,
            }}
            title="Search"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            color: COLORS.text,
          }}
          className="mobile-menu-btn"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M4 6h16M4 12h16M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div
          style={{
            borderTop: `1px solid ${COLORS.border}`,
            padding: "12px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {["Beranda", "Tentang", "Arsip"].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                fontFamily: FONTS.body,
                fontSize: 15,
                color: COLORS.text,
                textDecoration: "none",
                padding: "8px 0",
              }}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function FeaturedPost({ post }) {
  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${COLORS.blue}08, ${COLORS.blue}04)`,
        borderRadius: 16,
        border: `1px solid ${COLORS.blue}15`,
        padding: 32,
        display: "grid",
        gridTemplateColumns: "1fr 200px",
        gap: 32,
        alignItems: "center",
        marginBottom: 40,
      }}
      className="featured-post"
    >
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <span
            style={{
              fontFamily: FONTS.body,
              fontSize: 11,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: COLORS.blue,
              background: COLORS.blueLight,
              padding: "3px 8px",
              borderRadius: 4,
            }}
          >
            Featured
          </span>
          <span
            style={{
              fontFamily: FONTS.body,
              fontSize: 11,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: labelColors[post.label].text,
              background: labelColors[post.label].bg,
              padding: "3px 8px",
              borderRadius: 4,
            }}
          >
            {post.label}
          </span>
        </div>
        <h2
          style={{
            fontFamily: FONTS.heading,
            fontSize: 26,
            fontWeight: 700,
            color: COLORS.text,
            lineHeight: 1.3,
            margin: "0 0 10px 0",
            letterSpacing: "-0.02em",
          }}
        >
          {post.title}
        </h2>
        <p
          style={{
            fontFamily: FONTS.body,
            fontSize: 15,
            color: COLORS.textMuted,
            lineHeight: 1.6,
            margin: "0 0 16px 0",
          }}
        >
          {post.excerpt}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.textLight }}>{post.date}</span>
          <span style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.textLight }}>
            💬 {post.comments} komentar
          </span>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          aspectRatio: "1",
          borderRadius: 12,
          background: `linear-gradient(135deg, ${COLORS.blueLight}, ${COLORS.blue}20)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 56,
        }}
      >
        {post.thumb}
      </div>
    </div>
  );
}

function PostCard({ post }) {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "88px 1fr",
        gap: 16,
        padding: "18px 0",
        borderBottom: `1px solid ${COLORS.borderLight}`,
        cursor: "pointer",
        transition: "all 0.15s ease",
        ...(hovered ? { background: COLORS.surfaceHover, margin: "0 -12px", padding: "18px 12px", borderRadius: 10 } : {}),
      }}
    >
      <div
        style={{
          width: 88,
          height: 88,
          borderRadius: 10,
          background: `linear-gradient(135deg, ${labelColors[post.label].bg}, ${COLORS.surface})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 32,
          flexShrink: 0,
        }}
      >
        {post.thumb}
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <span
            style={{
              fontFamily: FONTS.body,
              fontSize: 11,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: labelColors[post.label].text,
              background: labelColors[post.label].bg,
              padding: "2px 7px",
              borderRadius: 4,
            }}
          >
            {post.label}
          </span>
          <span style={{ fontFamily: FONTS.body, fontSize: 12, color: COLORS.textLight }}>{post.date}</span>
        </div>
        <h3
          style={{
            fontFamily: FONTS.heading,
            fontSize: 16,
            fontWeight: 650,
            color: hovered ? COLORS.blue : COLORS.text,
            margin: "0 0 4px 0",
            lineHeight: 1.35,
            letterSpacing: "-0.01em",
            transition: "color 0.15s",
          }}
        >
          {post.title}
        </h3>
        <p
          style={{
            fontFamily: FONTS.body,
            fontSize: 13.5,
            color: COLORS.textMuted,
            lineHeight: 1.5,
            margin: 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {post.excerpt}
        </p>
      </div>
    </article>
  );
}

function Sidebar() {
  return (
    <aside style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      {/* About Card */}
      <div
        style={{
          background: COLORS.surface,
          borderRadius: 14,
          border: `1px solid ${COLORS.border}`,
          padding: 22,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${COLORS.blue}, ${COLORS.blueDark})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontFamily: FONTS.heading,
              fontWeight: 700,
              fontSize: 18,
            }}
          >
            I
          </div>
          <div>
            <div style={{ fontFamily: FONTS.heading, fontWeight: 650, fontSize: 14, color: COLORS.text }}>
              igona
            </div>
            <div style={{ fontFamily: FONTS.body, fontSize: 12, color: COLORS.textLight }}>
              Personal Blog
            </div>
          </div>
        </div>
        <p
          style={{
            fontFamily: FONTS.body,
            fontSize: 13.5,
            color: COLORS.textMuted,
            lineHeight: 1.55,
            margin: 0,
          }}
        >
          Catatan keseharian, opini, dan cerita perjalanan dari seseorang yang suka mengamati hal-hal kecil.
        </p>
      </div>

      {/* Labels */}
      <div
        style={{
          background: COLORS.surface,
          borderRadius: 14,
          border: `1px solid ${COLORS.border}`,
          padding: 22,
        }}
      >
        <h4
          style={{
            fontFamily: FONTS.heading,
            fontSize: 13,
            fontWeight: 650,
            color: COLORS.text,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            margin: "0 0 14px 0",
          }}
        >
          Kategori
        </h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {labels.map((label) => (
            <a
              key={label}
              href="#"
              style={{
                fontFamily: FONTS.body,
                fontSize: 12.5,
                fontWeight: 500,
                color: labelColors[label].text,
                background: labelColors[label].bg,
                padding: "5px 11px",
                borderRadius: 6,
                textDecoration: "none",
                transition: "opacity 0.15s",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Popular Posts */}
      <div
        style={{
          background: COLORS.surface,
          borderRadius: 14,
          border: `1px solid ${COLORS.border}`,
          padding: 22,
        }}
      >
        <h4
          style={{
            fontFamily: FONTS.heading,
            fontSize: 13,
            fontWeight: 650,
            color: COLORS.text,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            margin: "0 0 14px 0",
          }}
        >
          Populer
        </h4>
        {mockPosts
          .sort((a, b) => b.comments - a.comments)
          .slice(0, 3)
          .map((post, i) => (
            <div
              key={post.id}
              style={{
                display: "flex",
                gap: 10,
                padding: "10px 0",
                borderBottom: i < 2 ? `1px solid ${COLORS.borderLight}` : "none",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: 22,
                  fontWeight: 700,
                  color: COLORS.blueLight,
                  lineHeight: 1,
                  minWidth: 24,
                }}
              >
                {i + 1}
              </span>
              <div>
                <div
                  style={{
                    fontFamily: FONTS.heading,
                    fontSize: 13.5,
                    fontWeight: 600,
                    color: COLORS.text,
                    lineHeight: 1.35,
                    marginBottom: 3,
                  }}
                >
                  {post.title}
                </div>
                <span style={{ fontFamily: FONTS.body, fontSize: 11.5, color: COLORS.textLight }}>
                  💬 {post.comments}
                </span>
              </div>
            </div>
          ))}
      </div>

      {/* Archive */}
      <div
        style={{
          background: COLORS.surface,
          borderRadius: 14,
          border: `1px solid ${COLORS.border}`,
          padding: 22,
        }}
      >
        <h4
          style={{
            fontFamily: FONTS.heading,
            fontSize: 13,
            fontWeight: 650,
            color: COLORS.text,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            margin: "0 0 14px 0",
          }}
        >
          Arsip
        </h4>
        {["Mei 2026 (2)", "April 2026 (4)", "Maret 2026 (6)", "Februari 2026 (3)"].map((month, i) => (
          <a
            key={i}
            href="#"
            style={{
              display: "block",
              fontFamily: FONTS.body,
              fontSize: 13,
              color: COLORS.textMuted,
              textDecoration: "none",
              padding: "6px 0",
              borderBottom: i < 3 ? `1px solid ${COLORS.borderLight}` : "none",
            }}
          >
            {month}
          </a>
        ))}
      </div>
    </aside>
  );
}

function Footer() {
  return (
    <footer
      style={{
        background: COLORS.text,
        marginTop: 56,
        padding: "40px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr",
          gap: 40,
        }}
        className="footer-grid"
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 6,
                background: COLORS.blue,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontFamily: FONTS.heading,
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              i
            </div>
            <span style={{ fontFamily: FONTS.heading, fontWeight: 700, fontSize: 17, color: "#fff" }}>
              igona
            </span>
          </div>
          <p style={{ fontFamily: FONTS.body, fontSize: 13, color: "#9CA3AF", lineHeight: 1.6, margin: 0 }}>
            Blog personal tentang kehidupan, perjalanan, dan hal-hal kecil yang berarti.
          </p>
        </div>
        <div>
          <h5 style={{ fontFamily: FONTS.heading, fontSize: 12, fontWeight: 650, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 12px 0" }}>
            Navigasi
          </h5>
          {["Beranda", "Tentang", "Arsip", "Kontak"].map((item) => (
            <a key={item} href="#" style={{ display: "block", fontFamily: FONTS.body, fontSize: 13, color: "#9CA3AF", textDecoration: "none", padding: "4px 0" }}>
              {item}
            </a>
          ))}
        </div>
        <div>
          <h5 style={{ fontFamily: FONTS.heading, fontSize: 12, fontWeight: 650, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 12px 0" }}>
            Kategori
          </h5>
          {labels.map((label) => (
            <a key={label} href="#" style={{ display: "block", fontFamily: FONTS.body, fontSize: 13, color: "#9CA3AF", textDecoration: "none", padding: "4px 0" }}>
              {label}
            </a>
          ))}
        </div>
      </div>
      <div
        style={{
          maxWidth: 1120,
          margin: "32px auto 0",
          paddingTop: 20,
          borderTop: "1px solid #374151",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="footer-bottom"
      >
        <span style={{ fontFamily: FONTS.body, fontSize: 12, color: "#6B7280" }}>
          © 2026 igona.web.id
        </span>
        <span style={{ fontFamily: FONTS.mono, fontSize: 11, color: "#4B5563" }}>
          Powered by Blogger
        </span>
      </div>
    </footer>
  );
}

export default function IgonaConcept() {
  const [menuOpen, setMenuOpen] = useState(false);
  const featured = mockPosts.find((p) => p.featured);
  const regularPosts = mockPosts.filter((p) => !p.featured);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Source+Sans+3:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${COLORS.bg}; }
        .mobile-menu-btn { display: none !important; }
        .featured-post { grid-template-columns: 1fr 200px; }
        .main-layout { grid-template-columns: 1fr 280px; }
        .footer-grid { grid-template-columns: 1.5fr 1fr 1fr; }
        .footer-bottom { flex-direction: row; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .featured-post { grid-template-columns: 1fr !important; }
          .featured-post > div:last-child { display: none; }
          .main-layout { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-bottom { flex-direction: column !important; gap: 8px; text-align: center; }
        }
      `}</style>

      <div style={{ minHeight: "100vh", background: COLORS.bg, fontFamily: FONTS.body }}>
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* Concept Badge */}
        <div
          style={{
            background: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.blueDark})`,
            padding: "8px 24px",
            textAlign: "center",
          }}
        >
          <span style={{ fontFamily: FONTS.mono, fontSize: 11, color: "#fff", letterSpacing: "0.05em" }}>
            🎨 CONCEPT MOCKUP — igona.web.id — Blogger Template Direction
          </span>
        </div>

        <main style={{ maxWidth: 1120, margin: "0 auto", padding: "32px 24px" }}>
          {/* Featured Post */}
          <FeaturedPost post={featured} />

          {/* Main Layout: Content + Sidebar */}
          <div
            style={{
              display: "grid",
              gap: 36,
            }}
            className="main-layout"
          >
            {/* Content Area */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 8,
                  paddingBottom: 14,
                  borderBottom: `2px solid ${COLORS.text}`,
                }}
              >
                <h3
                  style={{
                    fontFamily: FONTS.heading,
                    fontSize: 15,
                    fontWeight: 700,
                    color: COLORS.text,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  Terbaru
                </h3>
                <a
                  href="#"
                  style={{
                    fontFamily: FONTS.body,
                    fontSize: 12.5,
                    color: COLORS.blue,
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  Lihat semua →
                </a>
              </div>

              {regularPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}

              {/* Pagination */}
              <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 28 }}>
                {[1, 2, 3, "...", 8].map((page, i) => (
                  <button
                    key={i}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      border: page === 1 ? "none" : `1px solid ${COLORS.border}`,
                      background: page === 1 ? COLORS.blue : COLORS.surface,
                      color: page === 1 ? "#fff" : COLORS.textMuted,
                      fontFamily: FONTS.body,
                      fontSize: 13,
                      fontWeight: page === 1 ? 600 : 400,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <Sidebar />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
