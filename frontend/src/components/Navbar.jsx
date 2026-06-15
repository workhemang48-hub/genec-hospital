import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleBookAppointment = () => {
    setIsOpen(false);
    navigate("/");
    setTimeout(() => {
      document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link to="/" style={isMobile ? styles.logoMobile : styles.logo}>
          City Women's Hospital
        </Link>

        {/* Desktop Links */}
        {!isMobile && (
          <div style={styles.links}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/about" style={styles.link}>About Us</Link>
            <Link to="/services" style={styles.link}>Services</Link>
            <Link to="/gallery" style={styles.link}>Gallery</Link>
            <Link to="/contact" style={styles.link}>Contact</Link>
            <button style={styles.btn} onClick={handleBookAppointment}>
              Book Appointment
            </button>
          </div>
        )}

        {/* Hamburger Button */}
        {isMobile && (
          <button
            style={{
              ...styles.hamburger,
              backgroundColor: isOpen ? "#FF6B6B" : "transparent",
              border: isOpen ? "1px solid #FF6B6B" : "1px solid #A0B4D6",
              transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && isOpen && (
        <div style={{
          ...styles.mobileMenu,
          animation: "slideDown 0.3s ease",
        }}>
          <Link to="/" style={styles.mobileLink} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" style={styles.mobileLink} onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/services" style={styles.mobileLink} onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/gallery" style={styles.mobileLink} onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link to="/contact" style={styles.mobileLink} onClick={() => setIsOpen(false)}>Contact</Link>
          <button style={styles.mobileBtn} onClick={handleBookAppointment}>
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: "#0D1B3E",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 24px",
    height: "70px",
  },
  logo: {
    color: "#FFFFFF",
    fontSize: "20px",
    fontWeight: "700",
    textDecoration: "none",
  },
  logoMobile: {
    color: "#FFFFFF",
    fontSize: "16px",
    fontWeight: "700",
    textDecoration: "none",
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "28px",
  },
  link: {
    color: "#A0B4D6",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "500",
  },
  btn: {
    backgroundColor: "#FF6B6B",
    color: "#FFFFFF",
    padding: "10px 22px",
    borderRadius: "50px",
    border: "none",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
  },
  hamburger: {
    backgroundColor: "transparent",
    border: "1px solid #A0B4D6",
    color: "#FFFFFF",
    fontSize: "20px",
    cursor: "pointer",
    borderRadius: "8px",
    padding: "4px 10px",
    transition: "all 0.3s ease",
  },
  mobileMenu: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#0D1B3E",
    padding: "16px 24px 24px",
    borderTop: "1px solid #1A2F5A",
  },
  mobileLink: {
    color: "#A0B4D6",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    padding: "14px 0",
    borderBottom: "1px solid #1A2F5A",
  },
  mobileBtn: {
    backgroundColor: "#FF6B6B",
    color: "#FFFFFF",
    padding: "14px 22px",
    borderRadius: "50px",
    border: "none",
    fontSize: "15px",
    fontWeight: "600",
    textAlign: "center",
    marginTop: "16px",
    display: "block",
    cursor: "pointer",
    width: "100%",
  },
};

export default Navbar;