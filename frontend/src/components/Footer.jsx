const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        <div style={styles.col}>
          <h3 style={styles.logo}>City Women's Hospital</h3>
          <p style={styles.desc}>
            Trusted women's healthcare center in Ahmedabad,
            specializing in Obstetrics, Gynecology and IVF treatments.
          </p>
        </div>

        <div style={styles.col}>
          <h4 style={styles.colTitle}>Quick Links</h4>
          <a href="/" style={styles.footerLink}>Home</a>
          <a href="/about" style={styles.footerLink}>About Us</a>
          <a href="/services" style={styles.footerLink}>Services</a>
          <a href="/gallery" style={styles.footerLink}>Gallery</a>
          <a href="/contact" style={styles.footerLink}>Contact</a>
        </div>

        <div style={styles.col}>
          <h4 style={styles.colTitle}>Services</h4>
          <p style={styles.footerLink}>Maternity Care</p>
          <p style={styles.footerLink}>IVF & Fertility</p>
          <p style={styles.footerLink}>Gynecological Care</p>
          <p style={styles.footerLink}>Advanced Sonography</p>
          <p style={styles.footerLink}>24x7 Emergency</p>
        </div>

        <div style={styles.col}>
          <h4 style={styles.colTitle}>Contact Us</h4>
          <p style={styles.footerLink}>📍 Ahmedabad, Gujarat</p>
          <p style={styles.footerLink}>📞 +91 79458 55363</p>
          <p style={styles.footerLink}>📧 citywomenshospital@gmail.com</p>
          <h4 style={{...styles.colTitle, marginTop: "16px"}}>OPD Hours</h4>
        <p style={styles.opdTime}>Mon - Sat: 9:30 AM - 12:30 PM</p>
          <p style={styles.opdTime}>Evening: 4:30 PM - 8:30 PM</p>
          <p style={styles.emergency}>🚑 Emergency: 24x7</p>        </div>

      </div>
      <div style={styles.bottom}>
        <p style={styles.bottomText}>
          © 2024 City Women's Hospital. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#0D1B3E",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
    gap: "40px",
    padding: "60px 80px",
  },
  col: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  logo: {
    color: "#FFFFFF",
    fontSize: "18px",
    fontWeight: "700",
    marginBottom: "8px",
  },
  desc: {
    color: "#A0B4D6",
    fontSize: "14px",
    lineHeight: "1.7",
  },
  colTitle: {
    color: "#FFFFFF",
    fontSize: "15px",
    fontWeight: "600",
    marginBottom: "8px",
  },
  footerLink: {
    color: "#A0B4D6",
    fontSize: "14px",
    textDecoration: "none",
    lineHeight: "1.8",
  },
  bottom: {
    borderTop: "1px solid #1A2F5A",
    padding: "20px 80px",
    textAlign: "center",
  },
  bottomText: {
    color: "#A0B4D6",
    fontSize: "13px",
  },
  opdTime: {
    color: "#FF6B6B",
    fontSize: "14px",
    fontWeight: "600",
    backgroundColor: "#1A2F5A",
    padding: "6px 12px",
    borderRadius: "6px",
    borderLeft: "3px solid #FF6B6B",
  },
  emergency: {
    color: "#FFFFFF",
    fontSize: "14px",
    fontWeight: "700",
    backgroundColor: "#FF6B6B",
    padding: "6px 12px",
    borderRadius: "6px",
    marginTop: "4px",
  },
};

export default Footer;