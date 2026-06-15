import useIsMobile from "../useIsMobile";
const Contact = () => {
  const isMobile = useIsMobile();

  return (
    <div>

      {/* Page Header */}
      <section style={styles.header(isMobile)}>
        <p style={styles.headerTag}>Get In Touch</p>
        <h1 style={styles.headerTitle(isMobile)}>Contact Us</h1>
        <p style={styles.headerSub(isMobile)}>
          We are here to help you at every step
        </p>
      </section>

      {/* Contact Info + Map */}
      <section style={styles.contactSection(isMobile)}>

        {/* Left — Contact Info */}
        <div style={styles.contactInfo(isMobile)}>
          <h2 style={styles.infoTitle}>City Women's Hospital</h2>
          <p style={styles.infoDesc}>
            Trusted women's healthcare center in Ahmedabad,
            specializing in Obstetrics, Gynecology and IVF treatments.
          </p>

          <div style={styles.infoItem}>
            <div style={styles.infoIcon}>📍</div>
            <div>
              <h4 style={styles.infoLabel}>Address</h4>
              <p style={styles.infoText}>2nd Floor, Shivalik Plaza, Near Navrangpura Bus Stand, Navrangpura, Ahmedabad - 380009</p>
            </div>
          </div>

          <div style={styles.infoItem}>
            <div style={styles.infoIcon}>📞</div>
            <div>
              <h4 style={styles.infoLabel}>Phone</h4>
              <p style={styles.infoText}>
                <a href="tel:+918969196342" style={styles.link}>+91 89691 96342</a>
              </p>
              <p style={styles.infoText}>
                <a href="tel:+919999999999" style={styles.link}>+91 99999 99999</a>
              </p>
            </div>
          </div>

          <div style={styles.infoItem}>
            <div style={styles.infoIcon}>📧</div>
            <div>
              <h4 style={styles.infoLabel}>Email</h4>
              <p style={styles.infoText}>
                <a href="mailto:citywomenshospital@gmail.com" style={styles.link}>
                  citywomenshospital@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div style={styles.infoItem}>
            <div style={styles.infoIcon}>🕐</div>
            <div>
              <h4 style={styles.infoLabel}>OPD Hours</h4>
              <p style={styles.infoText}>Mon - Sat: 9:30 AM - 12:30 PM</p>
              <p style={styles.infoText}>Evening: 4:30 PM - 8:30 PM</p>
              <p style={{ ...styles.infoText, color: "#FF6B6B", fontWeight: "600" }}>
                Emergency: 24x7
              </p>
            </div>
          </div>
        </div>

        {/* Right — Map */}
<div style={styles.mapBox(isMobile)}>
  <iframe
    src="https://maps.google.com/maps?q=Navrangpura,Ahmedabad&output=embed"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    title="Hospital Location"
  ></iframe>
</div>

      </section>

      {/* OPD Schedule Table */}
      <section style={styles.schedule(isMobile)}>
        <p style={styles.sectionTag}>Visiting Hours</p>
        <h2 style={styles.scheduleTitle(isMobile)}>OPD Schedule</h2>

        {isMobile ? (
          /* Mobile: vertical list cards */
          <div style={styles.scheduleList}>
            {scheduleData.map((item, index) => (
              <div key={index} style={styles.scheduleListCard(item.closed)}>
                <span style={styles.scheduleListDay}>{item.day}</span>
                {item.closed ? (
                  <span style={styles.scheduleClosed}>Closed</span>
                ) : (
                  <div style={styles.scheduleTimesCol}>
                    <span style={styles.scheduleTime}>🌅 {item.morning}</span>
                    <span style={styles.scheduleTime}>🌆 {item.evening}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          /* Desktop: original 7-column grid */
          <div style={styles.scheduleGrid}>
            {scheduleData.map((item, index) => (
              <div
                key={index}
                style={{
                  ...styles.scheduleCard,
                  backgroundColor: item.closed ? "#0D1B3E" : "#1A2F5A",
                }}
              >
                <h4 style={styles.scheduleDay}>{item.day}</h4>
                {item.closed ? (
                  <p style={styles.scheduleClosed}>Closed</p>
                ) : (
                  <>
                    <p style={styles.scheduleTime}>{item.morning}</p>
                    <p style={styles.scheduleTime}>{item.evening}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
};

const scheduleData = [
  { day: "Monday",    morning: "9:30 AM - 12:30 PM", evening: "4:30 PM - 8:30 PM" },
  { day: "Tuesday",   morning: "9:30 AM - 12:30 PM", evening: "4:30 PM - 8:30 PM" },
  { day: "Wednesday", morning: "9:30 AM - 12:30 PM", evening: "4:30 PM - 8:30 PM" },
  { day: "Thursday",  morning: "9:30 AM - 12:30 PM", evening: "4:30 PM - 8:30 PM" },
  { day: "Friday",    morning: "9:30 AM - 12:30 PM", evening: "4:30 PM - 8:30 PM" },
  { day: "Saturday",  morning: "9:30 AM - 12:30 PM", evening: "4:30 PM - 8:30 PM" },
  { day: "Sunday",    closed: true },
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

  /* ── Contact Section ── */
  contactSection: (isMobile) => ({
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
    gap: "0",
    minHeight: isMobile ? "auto" : "600px",
  }),
  contactInfo: (isMobile) => ({
    backgroundColor: "#F0F4FF",
    padding: isMobile ? "36px 20px" : "60px",
  }),
  infoTitle: {
    color: "#0D1B3E",
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "12px",
  },
  infoDesc: {
    color: "#6B7280",
    fontSize: "15px",
    lineHeight: "1.7",
    marginBottom: "32px",
  },
  infoItem: {
    display: "flex",
    gap: "16px",
    marginBottom: "24px",
    alignItems: "flex-start",
  },
  infoIcon: {
    fontSize: "20px",
    flexShrink: 0,
    width: "44px",
    height: "44px",
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #E0E8FF",
  },
  infoLabel: {
    color: "#0D1B3E",
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "4px",
  },
  infoText: {
    color: "#6B7280",
    fontSize: "14px",
    lineHeight: "1.6",
  },
  link: {
    color: "#6B7280",
    textDecoration: "none",
  },

  /* ── Map ── */
  mapBox: (isMobile) => ({
    height: isMobile ? "300px" : "600px",
    backgroundColor: "#E0E8FF",
  }),

  /* ── Schedule ── */
  schedule: (isMobile) => ({
    backgroundColor: "#0D1B3E",
    padding: isMobile ? "60px 20px" : "80px",
    textAlign: "center",
  }),
  sectionTag: {
    color: "#FF6B6B",
    fontSize: "13px",
    fontWeight: "600",
    letterSpacing: "2px",
    textTransform: "uppercase",
    marginBottom: "12px",
  },
  scheduleTitle: (isMobile) => ({
    color: "#FFFFFF",
    fontSize: isMobile ? "26px" : "36px",
    fontWeight: "700",
    marginBottom: "36px",
  }),

  /* Desktop grid */
  scheduleGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "12px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  scheduleCard: {
    borderRadius: "12px",
    padding: "20px 12px",
    border: "1px solid #1A2F5A",
    textAlign: "center",
    backgroundColor: "#1A2F5A",
  },
  scheduleDay: {
    color: "#FFFFFF",
    fontSize: "14px",
    fontWeight: "700",
    marginBottom: "12px",
    paddingBottom: "10px",
    borderBottom: "1px solid #243d6e",
  },

  /* Mobile list */
  scheduleList: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "480px",
    margin: "0 auto",
  },
  scheduleListCard: (closed) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: closed ? "#0D1B3E" : "#1A2F5A",
    border: "1px solid #243d6e",
    borderRadius: "12px",
    padding: "16px 20px",
  }),
  scheduleListDay: {
    color: "#FFFFFF",
    fontSize: "15px",
    fontWeight: "700",
    minWidth: "100px",
    textAlign: "left",
  },
  scheduleTimesCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "4px",
  },
  scheduleTime: {
    color: "#FF6B6B",
    fontSize: "11px",
    marginBottom: "4px",
    fontWeight: "500",
  },
  scheduleClosed: {
    color: "#6B7280",
    fontSize: "13px",
  },
};

export default Contact;