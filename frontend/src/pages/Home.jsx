import useIsMobile from "../useIsMobile";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const Home = () => {
  const isMobile = useIsMobile();
  const [formData, setFormData] = useState({
    fullName: "", email: "", phone: "",
    city: "", service: "", date: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  useEffect(() => {
  if (window.location.hash === "#appointment") {
    setTimeout(() => {
      const el = document.getElementById("appointment");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }
}, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim())
      newErrors.fullName = "Full name is required";
    if (!formData.email.trim())
      newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.phone.trim())
      newErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone must be exactly 10 digits";
    if (!formData.service)
      newErrors.service = "Please select a service";
    if (!formData.date)
      newErrors.date = "Please select a date";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    try {
      await axios.post("http://localhost:5000/api/appointments", formData);
      setSubmitted(true);
      setErrors({});
      setFormData({
        fullName: "", email: "", phone: "",
        city: "", service: "", date: "", message: ""
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  const styles = {
    hero: {
      backgroundColor: "#0D1B3E",
      minHeight: isMobile ? "70vh" : "90vh",
      display: "flex",
      alignItems: "center",
      padding: isMobile ? "40px 20px" : "60px 80px",
    },
    heroContent: {
      maxWidth: "600px",
    },
    heroTag: {
      color: "#FF6B6B",
      fontSize: "14px",
      fontWeight: "600",
      letterSpacing: "2px",
      textTransform: "uppercase",
      marginBottom: "16px",
    },
    heroTitle: {
      color: "#FFFFFF",
      fontSize: isMobile ? "32px" : "52px",
      fontWeight: "700",
      lineHeight: "1.2",
      marginBottom: "20px",
    },
    heroSub: {
      color: "#A0B4D6",
      fontSize: isMobile ? "15px" : "17px",
      lineHeight: "1.7",
      marginBottom: "32px",
    },
    heroButtons: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: "16px",
    },
    btnPrimary: {
      backgroundColor: "#FF6B6B",
      color: "#FFFFFF",
      padding: "14px 32px",
      borderRadius: "50px",
      textDecoration: "none",
      fontSize: "15px",
      fontWeight: "600",
      textAlign: "center",
    },
    btnSecondary: {
      backgroundColor: "transparent",
      color: "#FFFFFF",
      padding: "14px 32px",
      borderRadius: "50px",
      textDecoration: "none",
      fontSize: "15px",
      fontWeight: "600",
      border: "2px solid #FFFFFF",
      textAlign: "center",
    },
    sliderWrapper: {
      backgroundColor: "#0D1B3E",
      overflow: "hidden",
      paddingBottom: "40px",
    },
    sliderTrack: {
      display: "flex",
      gap: "16px",
      animation: "slide 20s linear infinite",
      width: "max-content",
      padding: "0 16px",
    },
    slide: {
      position: "relative",
      flexShrink: 0,
      borderRadius: "16px",
      overflow: "hidden",
      width: isMobile ? "200px" : "280px",
      height: isMobile ? "130px" : "180px",
    },
    slideImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    slideOverlay: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(13, 27, 62, 0.7)",
      padding: "10px 14px",
    },
    slideText: {
      color: "#FFFFFF",
      fontSize: "13px",
      fontWeight: "600",
    },
    statsBar: {
      backgroundColor: "#FF6B6B",
      padding: isMobile ? "30px 20px" : "40px 80px",
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr auto 1fr auto 1fr auto 1fr",
      alignItems: "center",
      textAlign: "center",
      gap: isMobile ? "20px" : "0",
    },
    statItem: {
      padding: "10px",
    },
    statBarNum: {
      color: "#FFFFFF",
      fontSize: isMobile ? "28px" : "42px",
      fontWeight: "700",
      marginBottom: "6px",
    },
    statBarLabel: {
      color: "#FFE0E0",
      fontSize: "12px",
      lineHeight: "1.5",
    },
    statDivider: {
      display: isMobile ? "none" : "block",
      width: "1px",
      height: "60px",
      backgroundColor: "#FF9999",
    },
    services: {
      backgroundColor: "#FFFFFF",
      padding: isMobile ? "40px 20px" : "80px 80px",
      textAlign: "center",
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
      fontSize: isMobile ? "28px" : "36px",
      fontWeight: "700",
      marginBottom: "48px",
    },
    servicesGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
      gap: "24px",
      maxWidth: "1100px",
      margin: "0 auto",
    },
    serviceCard: {
      backgroundColor: "#F0F4FF",
      borderRadius: "16px",
      padding: "32px 24px",
      textAlign: "left",
      border: "1px solid #E0E8FF",
    },
    serviceIcon: {
      fontSize: "36px",
      marginBottom: "16px",
    },
    serviceCardTitle: {
      color: "#0D1B3E",
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "10px",
    },
    serviceCardText: {
      color: "#6B7280",
      fontSize: "14px",
      lineHeight: "1.7",
    },
    whyUs: {
      backgroundColor: "#0D1B3E",
      padding: isMobile ? "40px 20px" : "80px",
      textAlign: "center",
    },
    whyGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
      gap: "16px",
      maxWidth: "1100px",
      margin: "0 auto",
    },
    whyCard: {
      backgroundColor: "#1A2F5A",
      borderRadius: "16px",
      padding: isMobile ? "20px 12px" : "32px 20px",
    },
    whyIcon: {
      fontSize: "40px",
      marginBottom: "16px",
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
    doctor: {
      backgroundColor: "#0D1B3E",
      padding: isMobile ? "40px 20px" : "80px 80px",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: isMobile ? "30px" : "60px",
      alignItems: "center",
    },
    doctorContent: {
      flex: 1,
    },
    doctorName: {
      color: "#FFFFFF",
      fontSize: isMobile ? "28px" : "36px",
      fontWeight: "700",
      marginBottom: "8px",
    },
    doctorDegree: {
      color: "#FF6B6B",
      fontSize: "14px",
      fontWeight: "600",
      marginBottom: "20px",
      marginTop: "8px",
    },
    doctorText: {
      color: "#A0B4D6",
      fontSize: "15px",
      lineHeight: "1.8",
      marginBottom: "16px",
    },
    doctorImageBox: {
      flex: 1,
      position: "relative",
      display: "flex",
      justifyContent: "center",
      width: isMobile ? "100%" : "auto",
    },
    doctorImage: {
      width: "100%",
      maxWidth: "420px",
      height: isMobile ? "350px" : "500px",
      objectFit: "cover",
      borderRadius: "20px",
      border: "4px solid #FF6B6B",
    },
    doctorBadge: {
      position: "absolute",
      bottom: "30px",
      left: "20px",
      backgroundColor: "#FF6B6B",
      borderRadius: "12px",
      padding: "16px 24px",
      textAlign: "center",
    },
    doctorBadgeNum: {
      color: "#FFFFFF",
      fontSize: "28px",
      fontWeight: "700",
    },
    doctorBadgeText: {
      color: "#FFE0E0",
      fontSize: "13px",
    },
    faq: {
      backgroundColor: "#F0F4FF",
      padding: isMobile ? "40px 20px" : "80px",
      textAlign: "center",
    },
    faqList: {
      maxWidth: "800px",
      margin: "0 auto",
      textAlign: "left",
    },
    faqItem: {
      backgroundColor: "#FFFFFF",
      borderRadius: "12px",
      marginBottom: "12px",
      overflow: "hidden",
      border: "1px solid #E0E8FF",
    },
    faqQuestion: {
      padding: "22px 28px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
      color: "#0D1B3E",
      fontSize: isMobile ? "14px" : "16px",
      fontWeight: "600",
      userSelect: "none",
      backgroundColor: "#FFFFFF",
    },
    faqIconBox: {
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },
    faqIcon: {
      color: "#FFFFFF",
      fontSize: "20px",
      fontWeight: "700",
      lineHeight: "1",
    },
    faqAnswer: {
      padding: "16px 24px 20px",
      color: "#6B7280",
      fontSize: "15px",
      lineHeight: "1.7",
      borderTop: "1px solid #E0E8FF",
    },
    appointment: {
      backgroundColor: "#F0F4FF",
      padding: isMobile ? "40px 20px" : "80px 80px",
      textAlign: "center",
    },
    appointmentTitle: {
      color: "#0D1B3E",
      fontSize: isMobile ? "28px" : "36px",
      fontWeight: "700",
      marginBottom: "48px",
    },
    form: {
      maxWidth: "800px",
      margin: "0 auto",
      textAlign: "left",
    },
    formRow: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: "16px",
      marginBottom: "16px",
    },
    input: {
      padding: "14px 18px",
      borderRadius: "10px",
      border: "1px solid #D0D8F0",
      fontSize: "15px",
      backgroundColor: "#FFFFFF",
      color: "#333",
      width: "100%",
      outline: "none",
    },
    textarea: {
      padding: "14px 18px",
      borderRadius: "10px",
      border: "1px solid #D0D8F0",
      fontSize: "15px",
      backgroundColor: "#FFFFFF",
      color: "#333",
      width: "100%",
      height: "120px",
      marginBottom: "16px",
      outline: "none",
    },
    submitBtn: {
      backgroundColor: "#FF6B6B",
      color: "#FFFFFF",
      padding: "14px 40px",
      borderRadius: "50px",
      border: "none",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      display: "block",
      margin: "0 auto",
      width: isMobile ? "100%" : "auto",
    },
    successMsg: {
      color: "#0D1B3E",
      backgroundColor: "#D4EDDA",
      padding: "12px 20px",
      borderRadius: "10px",
      marginBottom: "16px",
      textAlign: "center",
      fontWeight: "500",
    },
    inputError: {
      padding: "14px 18px",
      borderRadius: "10px",
      border: "1.5px solid #FF6B6B",
      fontSize: "15px",
      backgroundColor: "#FFF5F5",
      color: "#333",
      width: "100%",
      outline: "none",
    },
    errorMsg: {
      color: "#FF6B6B",
      fontSize: "12px",
      marginTop: "4px",
      marginLeft: "4px",
    },
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <p style={styles.heroTag}>Trusted Women's Care in Ahmedabad</p>
          <h1 style={styles.heroTitle}>
            Expert Gynecologist &<br />
            IVF Specialist
          </h1>
          <p style={styles.heroSub}>
            Led by Dr. Priya Sharma, City Women's Hospital provides
            compassionate care for every stage of a woman's life.
          </p>
          <div style={styles.heroButtons}>
            <button style={styles.btnPrimary} onClick={() => document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" })}>
              Book Appointment
            </button>
            <a href="/services" style={styles.btnSecondary}>Our Services</a>
          </div>
        </div>
      </section>

      {/* Photo Slider */}
      <div style={styles.sliderWrapper}>
        <div style={styles.sliderTrack}>
          {[...sliderImages, ...sliderImages].map((img, index) => (
            <div key={index} style={styles.slide}>
              <img src={img.src} alt={img.alt} style={styles.slideImg} />
              <div style={styles.slideOverlay}>
                <p style={styles.slideText}>{img.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Bar */}
      <section style={styles.statsBar}>
        <div style={styles.statItem}>
          <h3 style={styles.statBarNum}><CountUp target={5000} suffix="+" /></h3>
          <p style={styles.statBarLabel}>Successful Deliveries & Surgeries</p>
        </div>
        <div style={styles.statDivider}></div>
        <div style={styles.statItem}>
          <h3 style={styles.statBarNum}><CountUp target={20} suffix="K+" /></h3>
          <p style={styles.statBarLabel}>Happy Women & Families Served</p>
        </div>
        <div style={styles.statDivider}></div>
        <div style={styles.statItem}>
          <h3 style={styles.statBarNum}><CountUp target={12} suffix="+" /></h3>
          <p style={styles.statBarLabel}>Years of Compassionate Experience</p>
        </div>
        <div style={styles.statDivider}></div>
        <div style={styles.statItem}>
          <h3 style={styles.statBarNum}>24/7</h3>
          <p style={styles.statBarLabel}>Emergency Obstetric & Gynec Care</p>
        </div>
      </section>

      {/* Services Section */}
      <section style={styles.services}>
        <p style={styles.sectionTag}>What We Offer</p>
        <h2 style={styles.sectionTitle}>Our Services</h2>
        <div style={styles.servicesGrid}>
          {servicesData.map((service, index) => (
            <div key={index} style={styles.serviceCard}>
              <div style={styles.serviceIcon}>{service.icon}</div>
              <h3 style={styles.serviceCardTitle}>{service.title}</h3>
              <p style={styles.serviceCardText}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={styles.whyUs}>
        <p style={styles.sectionTag}>Our Advantages</p>
        <h2 style={{...styles.sectionTitle, color: "#FFFFFF"}}>Why Choose Us</h2>
        <div style={styles.whyGrid}>
          {whyData.map((item, index) => (
            <div key={index} style={styles.whyCard}>
              <div style={styles.whyIcon}>{item.icon}</div>
              <h3 style={styles.whyTitle}>{item.title}</h3>
              <p style={styles.whyText}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Doctor Section */}
      <section style={styles.doctor}>
        <div style={styles.doctorContent}>
          <p style={styles.sectionTag}>Meet Our Doctor</p>
          <h2 style={styles.doctorName}>Dr. Priya Sharma</h2>
          <p style={styles.doctorDegree}>M.B.B.S, M.S — Consultant Gynecologist & IVF Specialist</p>
          <p style={styles.doctorText}>
            Dr. Priya Sharma is a leading gynecologist and obstetrician in Ahmedabad,
            known for her compassionate care and clinical excellence in women's health,
            maternity and fertility treatments.
          </p>
          <p style={styles.doctorText}>
            With over 12 years of experience, she specializes in high-risk pregnancy,
            infertility treatments, advanced sonography and minimally invasive procedures.
          </p>
          <button style={styles.btnPrimary} onClick={() => document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" })}>
            Book Appointment
          </button>
        </div>
        <div style={styles.doctorImageBox}>
          <img
            src="https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827776.jpg"
            alt="Dr. Priya Sharma"
            style={styles.doctorImage}
          />
          <div style={styles.doctorBadge}>
            <h4 style={styles.doctorBadgeNum}>12+</h4>
            <p style={styles.doctorBadgeText}>Years Experience</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={styles.faq}>
        <p style={styles.sectionTag}>Have Questions?</p>
        <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
        <div style={styles.faqList}>
          {faqData.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} styles={styles} />
          ))}
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" style={styles.appointment}>
        <p style={styles.sectionTag}>Get In Touch</p>
        <h2 style={styles.appointmentTitle}>Book An Appointment</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.formRow}>
            <div>
              <input style={errors.fullName ? styles.inputError : styles.input} type="text" placeholder="Full Name *" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
              {errors.fullName && <p style={styles.errorMsg}>{errors.fullName}</p>}
            </div>
            <div>
              <input style={errors.email ? styles.inputError : styles.input} type="email" placeholder="Email *" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              {errors.email && <p style={styles.errorMsg}>{errors.email}</p>}
            </div>
          </div>
          <div style={styles.formRow}>
            <div>
              <input style={errors.phone ? styles.inputError : styles.input} type="text" placeholder="Phone * (10 digits)" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} maxLength={10} />
              {errors.phone && <p style={styles.errorMsg}>{errors.phone}</p>}
            </div>
            <input style={styles.input} type="text" placeholder="City" value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} />
          </div>
          <div style={styles.formRow}>
            <div>
              <select style={errors.service ? styles.inputError : styles.input} value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}>
                <option value="">Select Service *</option>
                <option value="Maternity Care">Maternity Care</option>
                <option value="IVF & Fertility">IVF & Fertility</option>
                <option value="Gynecological Care">Gynecological Care</option>
                <option value="Advanced Sonography">Advanced Sonography</option>
                <option value="24x7 Emergency">24x7 Emergency</option>
              </select>
              {errors.service && <p style={styles.errorMsg}>{errors.service}</p>}
            </div>
            <div>
              <input style={errors.date ? styles.inputError : styles.input} type="date" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} />
              {errors.date && <p style={styles.errorMsg}>{errors.date}</p>}
            </div>
          </div>
          <textarea style={styles.textarea} placeholder="Message (optional)" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
          {submitted && <p style={styles.successMsg}>✅ Appointment booked successfully! We will contact you soon.</p>}
          <button type="submit" style={styles.submitBtn}>Book Appointment</button>
        </form>
      </section>
    </div>
  );
};

const CountUp = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const increment = target / (2000 / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const FaqItem = ({ question, answer, styles }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ ...styles.faqItem, border: isOpen ? "1px solid #FF6B6B" : "1px solid #E0E8FF" }}>
      <div style={styles.faqQuestion} onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <div style={{ ...styles.faqIconBox, backgroundColor: isOpen ? "#FF6B6B" : "#0D1B3E", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", transition: "all 0.3s ease" }}>
          <span style={styles.faqIcon}>+</span>
        </div>
      </div>
      <div style={{ maxHeight: isOpen ? "200px" : "0px", overflow: "hidden", transition: "max-height 0.4s ease" }}>
        <p style={styles.faqAnswer}>{answer}</p>
      </div>
    </div>
  );
};

const faqData = [
  { question: "What services does City Women's Hospital offer?", answer: "We provide comprehensive women's healthcare services including obstetrics, gynecology, fertility treatments (IVF, IUI), advanced sonography, laparoscopic surgeries, menopause care, and 24x7 emergency obstetric services." },
  { question: "Is emergency care available at night or on weekends?", answer: "Yes! City Women's Hospital provides 24x7 emergency obstetric and gynecological care including nights, weekends and holidays." },
  { question: "How do I book an appointment with Dr. Priya Sharma?", answer: "You can book an appointment by filling our online appointment form, calling us at +91 79458 55363, or visiting us directly during OPD hours." },
  { question: "What are the OPD hours?", answer: "Our OPD hours are Monday to Saturday: 9:30 AM - 12:30 PM and 4:30 PM - 8:30 PM. Emergency services are available 24x7." },
  { question: "Do you provide IVF and fertility treatments?", answer: "Yes! We offer advanced fertility solutions including IVF, IUI, and ovulation induction treatments to support couples in achieving parenthood." },
];

const sliderImages = [
  { src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=250&fit=crop", alt: "Maternity Care", label: "Maternity Care" },
  { src: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&h=250&fit=crop", alt: "Sonography", label: "Advanced Sonography" },
  { src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop", alt: "IVF", label: "IVF & Fertility" },
  { src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=250&fit=crop", alt: "Gynecology", label: "Gynecological Care" },
  { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=250&fit=crop", alt: "Emergency", label: "24x7 Emergency" },
  { src: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=250&fit=crop", alt: "Women Health", label: "Women's Health" },
];

const whyData = [
  { icon: "👩‍⚕️", title: "Expert Doctor", desc: "Led by Dr. Priya Sharma with 12+ years of specialized experience in women's healthcare." },
  { icon: "🏥", title: "Modern Facility", desc: "Equipped with latest technology including 3D/4D sonography and advanced surgical tools." },
  { icon: "💝", title: "Compassionate Care", desc: "Every patient receives personalized attention and compassionate care at every stage." },
  { icon: "🚑", title: "24x7 Emergency", desc: "Round the clock emergency obstetric and gynecological care always available." },
];

const servicesData = [
  { icon: "🤰", title: "Maternity Care", desc: "Complete prenatal, delivery and postnatal care for a safe motherhood journey." },
  { icon: "🔬", title: "IVF & Fertility", desc: "Advanced IVF, IUI and ovulation treatments to help couples achieve parenthood." },
  { icon: "🏥", title: "Gynecological Care", desc: "Treatment for PCOD, menstrual disorders, hormonal imbalance and more." },
  { icon: "📡", title: "Advanced Sonography", desc: "2D, 3D and 4D ultrasound and diagnostic imaging services." },
  { icon: "🚑", title: "24x7 Emergency", desc: "Round the clock emergency care for high risk pregnancy and urgent conditions." },
];

export default Home;