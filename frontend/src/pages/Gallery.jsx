import { useState } from "react";
import useIsMobile from "../useIsMobile";

const Gallery = () => {
  const isMobile = useIsMobile();
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div>

      {/* Page Header */}
      <section style={styles.header(isMobile)}>
        <p style={styles.headerTag}>Our Facility</p>
        <h1 style={styles.headerTitle(isMobile)}>Photo Gallery</h1>
        <p style={styles.headerSub(isMobile)}>Take a look inside City Women's Hospital</p>
      </section>

      {/* Filter Buttons */}
      <section style={styles.filterSection(isMobile)}>
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(cat)}
            style={{
              ...styles.filterBtn(isMobile),
              backgroundColor: activeCategory === cat ? "#FF6B6B" : "#FFFFFF",
              color: activeCategory === cat ? "#FFFFFF" : "#0D1B3E",
              border: activeCategory === cat ? "none" : "1px solid #E0E8FF",
            }}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Gallery Grid */}
      <section style={styles.gallerySection(isMobile)}>
        <div style={styles.masonryGrid(isMobile)}>
          {filtered.map((img, index) => (
            <div
              key={index}
              style={styles.masonryItem}
              onClick={() => setLightbox(img)}
              onMouseEnter={e => {
                if (!isMobile) {
                  e.currentTarget.querySelector("img").style.transform = "scale(1.08)";
                  e.currentTarget.querySelector(".overlay").style.opacity = "1";
                }
              }}
              onMouseLeave={e => {
                if (!isMobile) {
                  e.currentTarget.querySelector("img").style.transform = "scale(1)";
                  e.currentTarget.querySelector(".overlay").style.opacity = "0";
                }
              }}
            >
              <img
                src={img.src}
                alt={img.title}
                style={{
                  ...styles.masonryImg,
                  height: isMobile ? "180px" : img.height,
                }}
              />
              {/* On mobile show label always, on desktop show on hover */}
              <div className="overlay" style={{
                ...styles.overlay,
                opacity: isMobile ? 1 : 0,
                background: isMobile
                  ? "linear-gradient(to top, rgba(13,27,62,0.85) 0%, transparent 60%)"
                  : "rgba(13, 27, 62, 0.75)",
                justifyContent: isMobile ? "flex-end" : "center",
                paddingBottom: isMobile ? "12px" : "0",
              }}>
                <p style={styles.overlayTitle}>{img.title}</p>
                <p style={styles.overlayCategory}>{img.category}</p>
                {!isMobile && <p style={styles.overlayHint}>Click to view</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div style={styles.lightboxBg} onClick={() => setLightbox(null)}>
          <div style={styles.lightboxBox(isMobile)} onClick={e => e.stopPropagation()}>
            <button style={styles.closeBtn} onClick={() => setLightbox(null)}>✕</button>
            <img src={lightbox.src} alt={lightbox.title} style={styles.lightboxImg(isMobile)} />
            <div style={styles.lightboxInfo}>
              <h3 style={styles.lightboxTitle}>{lightbox.title}</h3>
              <p style={styles.lightboxCategory}>{lightbox.category}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

const categories = ["All", "Facility", "Maternity", "Surgery", "Emergency"];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop", title: "Hospital Reception", category: "Facility", height: "220px" },
  { src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=500&fit=crop", title: "Operation Theatre", category: "Surgery", height: "320px" },
  { src: "https://images.unsplash.com/photo-1574279606130-09958dc756f7?w=400&h=280&fit=crop", title: "Maternity Ward", category: "Maternity", height: "250px" },
  { src: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=350&fit=crop", title: "Sonography Room", category: "Facility", height: "300px" },
  { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop", title: "ICU Unit", category: "Emergency", height: "220px" },
  { src: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&h=400&fit=crop", title: "Patient Room", category: "Facility", height: "280px" },
  { src: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop", title: "Newborn Care", category: "Maternity", height: "260px" },
  { src: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=350&fit=crop", title: "Emergency Unit", category: "Emergency", height: "300px" },
  { src: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=280&fit=crop", title: "Laparoscopy Suite", category: "Surgery", height: "240px" },
  { src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=320&fit=crop", title: "Consultation Room", category: "Facility", height: "280px" },
  { src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=260&fit=crop", title: "Delivery Room", category: "Maternity", height: "240px" },
  { src: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=400&h=380&fit=crop", title: "Surgery Suite", category: "Surgery", height: "320px" },
];

const styles = {

  /* ── Header ── */
  header: (isMobile) => ({
    backgroundColor: "#0D1B3E",
    padding: isMobile ? "60px 20px" : "80px",
    textAlign: "center",
  }),
  headerTag: {
    color: "#FF6B6B",
    fontSize: "13px",
    fontWeight: "600",
    letterSpacing: "2px",
    textTransform: "uppercase",
    marginBottom: "12px",
  },
  headerTitle: (isMobile) => ({
    color: "#FFFFFF",
    fontSize: isMobile ? "32px" : "48px",
    fontWeight: "700",
    marginBottom: "16px",
  }),
  headerSub: (isMobile) => ({
    color: "#A0B4D6",
    fontSize: isMobile ? "15px" : "17px",
  }),

  /* ── Filter ── */
  filterSection: (isMobile) => ({
    backgroundColor: "#F0F4FF",
    padding: isMobile ? "24px 16px" : "32px 80px",
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    flexWrap: "wrap",
  }),
  filterBtn: (isMobile) => ({
    padding: isMobile ? "8px 16px" : "10px 24px",
    borderRadius: "50px",
    fontSize: isMobile ? "13px" : "14px",
    fontWeight: "600",
    cursor: "pointer",
  }),

  /* ── Gallery ── */
  gallerySection: (isMobile) => ({
    backgroundColor: "#F0F4FF",
    padding: isMobile ? "16px 12px 48px" : "20px 80px 80px",
  }),
  masonryGrid: (isMobile) => ({
    columns: isMobile ? "2" : "3",
    columnGap: isMobile ? "10px" : "16px",
    maxWidth: "1100px",
    margin: "0 auto",
  }),
  masonryItem: {
    position: "relative",
    marginBottom: "10px",
    borderRadius: "12px",
    overflow: "hidden",
    cursor: "pointer",
    breakInside: "avoid",
  },
  masonryImg: {
    width: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.4s ease",
    borderRadius: "12px",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "opacity 0.3s ease",
    borderRadius: "12px",
  },
  overlayTitle: {
    color: "#FFFFFF",
    fontSize: "13px",
    fontWeight: "700",
    marginBottom: "4px",
    textAlign: "center",
    padding: "0 8px",
  },
  overlayCategory: {
    color: "#FF6B6B",
    fontSize: "11px",
    fontWeight: "600",
  },
  overlayHint: {
    color: "#A0B4D6",
    fontSize: "12px",
    marginTop: "6px",
  },

  /* ── Lightbox ── */
  lightboxBg: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.85)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    padding: "16px",
  },
  lightboxBox: (isMobile) => ({
    backgroundColor: "#0D1B3E",
    borderRadius: "20px",
    overflow: "hidden",
    maxWidth: "700px",
    width: "100%",
    position: "relative",
  }),
  closeBtn: {
    position: "absolute",
    top: "12px",
    right: "12px",
    backgroundColor: "#FF6B6B",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "50%",
    width: "36px",
    height: "36px",
    fontSize: "16px",
    cursor: "pointer",
    zIndex: 10000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  lightboxImg: (isMobile) => ({
    width: "100%",
    maxHeight: isMobile ? "260px" : "500px",
    objectFit: "cover",
  }),
  lightboxInfo: {
    padding: "16px 20px",
  },
  lightboxTitle: {
    color: "#FFFFFF",
    fontSize: "18px",
    fontWeight: "700",
    marginBottom: "6px",
  },
  lightboxCategory: {
    color: "#FF6B6B",
    fontSize: "14px",
    fontWeight: "600",
  },
};

export default Gallery;