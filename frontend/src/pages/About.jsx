import useIsMobile from "../useIsMobile";

const About = () => {
  const isMobile = useIsMobile();

  const styles = {
    header: {
      backgroundColor: "#0D1B3E",
      padding: isMobile ? "40px 20px" : "80px",
      textAlign: "center",
    },
    headerTag: {
      color: "#FF6B6B",
      fontSize: "13px",
      fontWeight: "600",
      letterSpacing: "2px",
      textTransform: "uppercase",
      marginBottom: "12px",
    },
    headerTitle: {
      color: "#FFFFFF",
      fontSize: isMobile ? "36px" : "48px",
      fontWeight: "700",
      marginBottom: "16px",
      letterSpacing: "-0.5px",
    },
    headerSub: {
      color: "#A0B4D6",
      fontSize: "17px",
    },
    story: {
      backgroundColor: "#FFFFFF",
      padding: isMobile ? "40px 20px" : "80px",
    },
    storyContent: {
      maxWidth: "800px",
      margin: "0 auto",
    },
    sectionTag: {
      color: "#FF6B6B",
      fontSize: "13px",
      fontWeight: "600",
      letterSpacing: "2px",
      textTransform: "uppercase",
      marginBottom: "12px",
    },
    sectionTitle: {
      color: "#0D1B3E",
      fontSize: isMobile ? "24px" : "32px",
      fontWeight: "700",
      marginBottom: "24px",
      lineHeight: "1.3",
      letterSpacing: "-0.3px",
    },
    sectionTitleDark: {
      color: "#FFFFFF",
      fontSize: isMobile ? "24px" : "32px",
      fontWeight: "700",
      marginBottom: "48px",
      lineHeight: "1.3",
      letterSpacing: "-0.3px",
    },
    storyText: {
      color: "#6B7280",
      fontSize: "16px",
      lineHeight: "1.8",
      marginBottom: "16px",
    },
    storyStats: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
      gap: isMobile ? "16px" : "20px",
      marginTop: "40px",
    },
    storyStat: {
      backgroundColor: "#F0F4FF",
      borderRadius: "12px",
      padding: "20px",
      textAlign: "center",
      borderLeft: "4px solid #FF6B6B",
      boxShadow: "0 4px 14px rgba(13, 27, 62, 0.08)",
    },
    storyStatNum: {
      color: "#0D1B3E",
      fontSize: "28px",
      fontWeight: "700",
    },
    storyStatLabel: {
      color: "#6B7280",
      fontSize: "13px",
      marginTop: "4px",
    },
    doctor: {
      backgroundColor: "#F0F4FF",
      padding: isMobile ? "40px 20px" : "80px",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: isMobile ? "30px" : "60px",
      alignItems: "center",
    },
    doctorLeft: {
      flexShrink: 0,
      display: "flex",
      justifyContent: "center",
    },
    doctorAvatar: {
      width: isMobile ? "150px" : "200px",
      height: isMobile ? "150px" : "200px",
      borderRadius: "50%",
      backgroundColor: "#0D1B3E",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "6px solid #FF6B6B",
      boxShadow: "0 12px 28px rgba(13, 27, 62, 0.25)",
    },
    doctorAvatarText: {
      color: "#FF6B6B",
      fontSize: isMobile ? "48px" : "64px",
      fontWeight: "700",
    },
    doctorRight: {
      flex: 1,
      textAlign: isMobile ? "center" : "left",
    },
    doctorName: {
      color: "#0D1B3E",
      fontSize: isMobile ? "28px" : "36px",
      fontWeight: "700",
      marginBottom: "8px",
    },
    doctorDegree: {
      color: "#FF6B6B",
      fontSize: "14px",
      fontWeight: "600",
      marginBottom: "4px",
    },
    doctorTitle: {
      color: "#6B7280",
      fontSize: "15px",
      fontStyle: "italic",
      marginBottom: "20px",
    },
    doctorText: {
      color: "#6B7280",
      fontSize: "15px",
      lineHeight: "1.8",
      marginBottom: "12px",
      textAlign: isMobile ? "center" : "left",
    },
    doctorTags: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      marginTop: "20px",
      justifyContent: isMobile ? "center" : "flex-start",
    },
    tag: {
      backgroundColor: "#0D1B3E",
      color: "#FFFFFF",
      padding: isMobile ? "6px 14px" : "6px 16px",
      borderRadius: "50px",
      fontSize: isMobile ? "12.5px" : "13px",
      fontWeight: "500",
    },
    whyUs: {
      backgroundColor: "#0D1B3E",
      padding: isMobile ? "40px 20px" : "80px",
      textAlign: "center",
    },
    whyGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
      gap: isMobile ? "16px" : "24px",
      maxWidth: "1100px",
      margin: "0 auto",
    },
    whyCard: {
      backgroundColor: "#1A2F5A",
      borderRadius: "16px",
      padding: isMobile ? "24px 14px" : "32px 20px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.18)",
    },
    whyIconWrap: {
      width: isMobile ? "48px" : "56px",
      height: isMobile ? "48px" : "56px",
      borderRadius: "50%",
      backgroundColor: "rgba(255, 107, 107, 0.15)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 16px",
    },
    whyIcon: {
      fontSize: isMobile ? "24px" : "28px",
    },
    whyTitle: {
      color: "#FFFFFF",
      fontSize: "16px",
      fontWeight: "600",
      marginBottom: "10px",
    },
    whyText: {
      color: "#A0B4D6",
      fontSize: "14px",
      lineHeight: "1.7",
    },
  };

  return (
    <div>
      {/* Page Header */}
      <section style={styles.header}>
        <p style={styles.headerTag}>Who We Are</p>
        <h1 style={styles.headerTitle}>About Us</h1>
        <p style={styles.headerSub}>Trusted women's healthcare in Ahmedabad since 2012</p>
      </section>

      {/* Hospital Story */}
      <section style={styles.story}>
        <div style={styles.storyContent}>
          <p style={styles.sectionTag}>Our Story</p>
          <h2 style={styles.sectionTitle}>Comprehensive Women's Health Services at One Place</h2>
          <p style={styles.storyText}>
            At City Women's Hospital, we offer complete and compassionate care
            for every stage of a woman's life. From advanced maternity and
            fertility treatments to expert gynecological care, our team is
            committed to supporting your health with the latest technology
            and a personalized approach.
          </p>
          <p style={styles.storyText}>
            Whether you need support through pregnancy, fertility solutions
            like IVF, treatment for hormonal disorders, or preventive
            screenings — we provide trusted, expert care in a modern and
            comfortable environment.
          </p>
          <div style={styles.storyStats}>
            <div style={styles.storyStat}>
              <h3 style={styles.storyStatNum}>5000+</h3>
              <p style={styles.storyStatLabel}>Deliveries</p>
            </div>
            <div style={styles.storyStat}>
              <h3 style={styles.storyStatNum}>20K+</h3>
              <p style={styles.storyStatLabel}>Patients</p>
            </div>
            <div style={styles.storyStat}>
              <h3 style={styles.storyStatNum}>12+</h3>
              <p style={styles.storyStatLabel}>Years</p>
            </div>
            <div style={styles.storyStat}>
              <h3 style={styles.storyStatNum}>24/7</h3>
              <p style={styles.storyStatLabel}>Emergency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section style={styles.doctor}>
        <div style={styles.doctorLeft}>
          <div style={styles.doctorAvatar}>
            <span style={styles.doctorAvatarText}>PS</span>
          </div>
        </div>
        <div style={styles.doctorRight}>
          <p style={styles.sectionTag}>Meet Our Doctor</p>
          <h2 style={styles.doctorName}>Dr. Priya Sharma</h2>
          <p style={styles.doctorDegree}>M.B.B.S, M.S</p>
          <p style={styles.doctorTitle}>Consultant Obstetrician and Gynecologist</p>
          <p style={styles.doctorText}>
            Dr. Priya Sharma is a leading gynecologist and obstetrician
            in Ahmedabad, known for her compassionate care and clinical
            excellence in women's health, maternity and fertility treatments.
          </p>
          <p style={styles.doctorText}>
            With over 12 years of experience, she specializes in high-risk
            pregnancy, infertility (IVF & IUI), advanced sonography and
            minimally invasive gynecological procedures.
          </p>
          <div style={styles.doctorTags}>
            <span style={styles.tag}>High Risk Pregnancy</span>
            <span style={styles.tag}>IVF & IUI</span>
            <span style={styles.tag}>Laparoscopy</span>
            <span style={styles.tag}>Sonography</span>
            <span style={styles.tag}>PCOD</span>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={styles.whyUs}>
        <p style={styles.sectionTag}>Why Choose Us</p>
        <h2 style={styles.sectionTitleDark}>Why Choose City Women's Hospital?</h2>
        <div style={styles.whyGrid}>
          {whyData.map((item, index) => (
            <div key={index} style={styles.whyCard}>
              <div style={styles.whyIconWrap}>
                <div style={styles.whyIcon}>{item.icon}</div>
              </div>
              <h3 style={styles.whyTitle}>{item.title}</h3>
              <p style={styles.whyText}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const whyData = [
  { icon: "👩‍⚕️", title: "Expert Doctor", desc: "Led by Dr. Priya Sharma with 12+ years of specialized experience in women's healthcare." },
  { icon: "🏥", title: "Modern Facility", desc: "Equipped with latest technology including 3D/4D sonography and advanced surgical tools." },
  { icon: "💝", title: "Compassionate Care", desc: "Every patient receives personalized attention and compassionate care at every stage." },
  { icon: "🚑", title: "24x7 Emergency", desc: "Round the clock emergency obstetric and gynecological care always available." },
];

export default About;