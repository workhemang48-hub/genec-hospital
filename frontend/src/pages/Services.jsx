import useIsMobile from "../useIsMobile";

const Services = () => {
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
    },
    headerSub: {
      color: "#A0B4D6",
      fontSize: "17px",
    },
    serviceSection: {
      display: "flex",
      alignItems: "center",
      padding: isMobile ? "40px 20px" : "80px",
      gap: isMobile ? "24px" : "60px",
      flexDirection: "row",
    },
    serviceImage: {
      flex: 1,
    },
    img: {
      width: "100%",
      height: isMobile ? "220px" : "380px",
      objectFit: "cover",
      borderRadius: "20px",
      border: "3px solid #FF6B6B",
    },
    serviceContent: {
      flex: 1,
    },
    serviceIconBox: {
      width: "60px",
      height: "60px",
      backgroundColor: "#F0F4FF",
      borderRadius: "16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "16px",
    },
    serviceIcon: {
      fontSize: "28px",
    },
    sectionTag: {
      color: "#FF6B6B",
      fontSize: "13px",
      fontWeight: "600",
      letterSpacing: "2px",
      textTransform: "uppercase",
      marginBottom: "12px",
    },
    serviceTitle: {
      color: "#0D1B3E",
      fontSize: isMobile ? "22px" : "32px",
      fontWeight: "700",
      marginBottom: "16px",
      lineHeight: "1.3",
    },
    serviceDesc: {
      color: "#6B7280",
      fontSize: "15px",
      lineHeight: "1.8",
      marginBottom: "24px",
    },
    serviceList: {
      listStyle: "none",
      marginBottom: "28px",
    },
    servicePoint: {
      color: "#0D1B3E",
      fontSize: "15px",
      marginBottom: "10px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    checkIcon: {
      color: "#FF6B6B",
      fontWeight: "700",
      fontSize: "16px",
    },
    btn: {
      backgroundColor: "#FF6B6B",
      color: "#FFFFFF",
      padding: "12px 28px",
      borderRadius: "50px",
      textDecoration: "none",
      fontSize: "15px",
      fontWeight: "600",
      display: "inline-block",
    },
  };

  return (
    <div>
      {/* Page Header */}
      <section style={styles.header}>
        <p style={styles.headerTag}>What We Offer</p>
        <h1 style={styles.headerTitle}>Our Services</h1>
        <p style={styles.headerSub}>Comprehensive women's healthcare services at one place</p>
      </section>

      {/* Services List */}
      {servicesData.map((service, index) => (
        <section
          key={index}
          style={{
            ...styles.serviceSection,
            flexDirection: isMobile ? "column" : index % 2 === 0 ? "row" : "row-reverse",
            backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F0F4FF",
          }}
        >
          <div style={styles.serviceImage}>
            <img src={service.image} alt={service.title} style={styles.img} />
          </div>
          <div style={styles.serviceContent}>
            <div style={styles.serviceIconBox}>
              <span style={styles.serviceIcon}>{service.icon}</span>
            </div>
            <p style={styles.sectionTag}>{service.tag}</p>
            <h2 style={styles.serviceTitle}>{service.title}</h2>
            <p style={styles.serviceDesc}>{service.desc}</p>
            <ul style={styles.serviceList}>
              {service.points.map((point, i) => (
                <li key={i} style={styles.servicePoint}>
                  <span style={styles.checkIcon}>✓</span>
                  {point}
                </li>
              ))}
            </ul>
            <a href="/#appointment" style={styles.btn}>Book Appointment</a>
          </div>
        </section>
      ))}
    </div>
  );
};

const servicesData = [
  {
    icon: "🤰",
    tag: "Maternity",
    title: "Pregnancy & Maternity Care",
    desc: "Complete prenatal, delivery and postnatal care ensuring a safe and comfortable journey through motherhood.",
    image: "https://images.unsplash.com/photo-1574279606130-09958dc756f7?w=600&h=400&fit=crop",
    points: ["High risk pregnancy management", "Normal and cesarean delivery", "Prenatal and postnatal checkups", "Newborn care and support"],
  },
  {
    icon: "🔬",
    tag: "Fertility",
    title: "IVF & Fertility Treatments",
    desc: "Advanced fertility solutions including IVF, IUI and ovulation induction to support couples in achieving parenthood.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    points: ["In Vitro Fertilization (IVF)", "Intrauterine Insemination (IUI)", "Ovulation induction therapy", "Fertility counseling and support"],
  },
  {
    icon: "🏥",
    tag: "Gynecology",
    title: "Gynecological Care",
    desc: "Comprehensive treatment for PCOD, menstrual disorders, hormonal imbalance and reproductive health issues.",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop",
    points: ["PCOD and PCOS treatment", "Menstrual disorder management", "Hormonal imbalance treatment", "Laparoscopic surgeries"],
  },
  {
    icon: "📡",
    tag: "Sonography",
    title: "Advanced Sonography",
    desc: "3D/4D ultrasound and diagnostic imaging for pregnancy monitoring and accurate gynecological assessments.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop",
    points: ["2D, 3D and 4D ultrasound", "Pregnancy monitoring scans", "Gynecological imaging", "Diagnostic assessments"],
  },
  {
    icon: "🚑",
    tag: "Emergency",
    title: "24x7 Emergency Care",
    desc: "Round the clock emergency care for high risk pregnancy, labor and urgent gynecological conditions.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
    points: ["24x7 obstetric emergency", "High risk labor management", "Urgent gynecological care", "Fully equipped emergency unit"],
  },
];

export default Services;