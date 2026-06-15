import { useEffect, useState } from "react";
import axios from "axios";
import useIsMobile from "../useIsMobile";

const AdminPanel = () => {
  const isMobile = useIsMobile();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterStatus, setFilterStatus] = useState("All");
  const [search, setSearch] = useState("");
  const [updatingId, setUpdatingId] = useState(null);
  const [authed, setAuthed] = useState(false);
  const [pass, setPass] = useState("");

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/api/appointments");
      setAppointments(res.data.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch appointments. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);
  if (!authed) {
    return (
      <div style={styles.loginBox}>
        <h2 style={styles.loginTitle}>🔐 Admin Access</h2>
        <p style={styles.loginSub}>City Women's Hospital</p>
        <input
          type="password"
          placeholder="Enter password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && pass === "cwh@admin123") setAuthed(true);
            else if (e.key === "Enter") alert("Wrong password!");
          }}
          style={styles.loginInput}
        />
        <button
          style={styles.loginBtn}
          onClick={() => {
            if (pass === "cwh@admin123") setAuthed(true);
            else alert("Wrong password!");
          }}
        >
          Login
        </button>
      </div>
    );
  }

  const updateStatus = async (id, newStatus) => {
    setUpdatingId(id);
    try {
      await axios.patch(`http://localhost:5000/api/appointments/${id}`, {
        status: newStatus,
      });
      setAppointments((prev) =>
        prev.map((a) => (a._id === id ? { ...a, status: newStatus } : a))
      );
    } catch (err) {
      alert("Failed to update status. Please try again.");
    } finally {
      setUpdatingId(null);
    }
  };

  const filtered = appointments.filter((a) => {
    const matchStatus =
      filterStatus === "All" || a.status === filterStatus.toLowerCase();
    const matchSearch =
      a.fullName.toLowerCase().includes(search.toLowerCase()) ||
      a.phone.includes(search) ||
      a.service.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  const stats = {
    total: appointments.length,
    pending: appointments.filter((a) => a.status === "pending").length,
    confirmed: appointments.filter((a) => a.status === "confirmed").length,
    cancelled: appointments.filter((a) => a.status === "cancelled").length,
  };

  const statusColor = (status) => {
    if (status === "confirmed") return { bg: "#D1FAE5", color: "#065F46" };
    if (status === "cancelled") return { bg: "#FEE2E2", color: "#991B1B" };
    return { bg: "#FEF3C7", color: "#92400E" };
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    const d = new Date(dateStr);
    return isNaN(d) ? dateStr : d.toLocaleDateString("en-IN", {
      day: "2-digit", month: "short", year: "numeric",
    });
  };

  return (
    <div style={styles.page}>

      {/* Header */}
      <div style={styles.header}>
        <div>
          <h1 style={styles.headerTitle}>Admin Panel</h1>
          <p style={styles.headerSub}>City Women's Hospital — Appointment Manager</p>
        </div>
        <button style={styles.refreshBtn} onClick={fetchAppointments}>
          🔄 Refresh
        </button>
      </div>

      {/* Stats Cards */}
      <div style={styles.statsGrid(isMobile)}>
        {[
          { label: "Total", value: stats.total, bg: "#EEF2FF", color: "#3730A3" },
          { label: "Pending", value: stats.pending, bg: "#FEF3C7", color: "#92400E" },
          { label: "Confirmed", value: stats.confirmed, bg: "#D1FAE5", color: "#065F46" },
          { label: "Cancelled", value: stats.cancelled, bg: "#FEE2E2", color: "#991B1B" },
        ].map((s, i) => (
          <div key={i} style={{ ...styles.statCard, backgroundColor: s.bg }}>
            <h2 style={{ ...styles.statNum, color: s.color }}>{s.value}</h2>
            <p style={{ ...styles.statLabel, color: s.color }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Search + Filter */}
      <div style={styles.controls(isMobile)}>
        <input
          style={styles.searchInput}
          type="text"
          placeholder="🔍  Search by name, phone or service..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div style={styles.filterBtns}>
          {["All", "Pending", "Confirmed", "Cancelled"].map((s) => (
            <button
              key={s}
              style={{
                ...styles.filterBtn,
                backgroundColor: filterStatus === s ? "#0D1B3E" : "#F0F4FF",
                color: filterStatus === s ? "#FFFFFF" : "#0D1B3E",
              }}
              onClick={() => setFilterStatus(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {loading ? (
        <div style={styles.center}>
          <p style={styles.loadingText}>⏳ Loading appointments...</p>
        </div>
      ) : error ? (
        <div style={styles.center}>
          <p style={styles.errorText}>{error}</p>
          <button style={styles.refreshBtn} onClick={fetchAppointments}>Try Again</button>
        </div>
      ) : filtered.length === 0 ? (
        <div style={styles.center}>
          <p style={styles.loadingText}>No appointments found.</p>
        </div>
      ) : isMobile ? (

        /* ── Mobile: Cards ── */
        <div style={styles.cardList}>
          {filtered.map((a) => (
            <div key={a._id} style={styles.card}>
              <div style={styles.cardTop}>
                <div>
                  <h3 style={styles.cardName}>{a.fullName}</h3>
                  <p style={styles.cardSub}>{a.service}</p>
                </div>
                <span style={{
                  ...styles.badge,
                  backgroundColor: statusColor(a.status).bg,
                  color: statusColor(a.status).color,
                }}>
                  {a.status}
                </span>
              </div>
              <div style={styles.cardDetails}>
                <p style={styles.cardDetail}>📞 {a.phone}</p>
                <p style={styles.cardDetail}>📍 {a.city || "—"}</p>
                <p style={styles.cardDetail}>📅 {formatDate(a.date)}</p>
                <p style={styles.cardDetail}>📧 {a.email}</p>
              </div>
              {a.message && (
                <p style={styles.cardMessage}>💬 {a.message}</p>
              )}
              <div style={styles.cardActions}>
                {["pending", "confirmed", "cancelled"].map((s) => (
                  <button
                    key={s}
                    disabled={a.status === s || updatingId === a._id}
                    style={{
                      ...styles.actionBtn,
                      opacity: a.status === s ? 0.4 : 1,
                      backgroundColor:
                        s === "confirmed" ? "#D1FAE5" :
                        s === "cancelled" ? "#FEE2E2" : "#FEF3C7",
                      color:
                        s === "confirmed" ? "#065F46" :
                        s === "cancelled" ? "#991B1B" : "#92400E",
                    }}
                    onClick={() => updateStatus(a._id, s)}
                  >
                    {updatingId === a._id ? "..." : s.charAt(0).toUpperCase() + s.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

      ) : (

        /* ── Desktop: Table ── */
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.thead}>
                <th style={styles.th}>#</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Phone</th>
                <th style={styles.th}>Service</th>
                <th style={styles.th}>Date</th>
                <th style={styles.th}>City</th>
                <th style={styles.th}>Message</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((a, index) => (
                <tr key={a._id} style={{
                  ...styles.tr,
                  backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F8FAFF",
                }}>
                  <td style={styles.td}>{index + 1}</td>
                  <td style={{ ...styles.td, fontWeight: "600", color: "#0D1B3E" }}>
                    {a.fullName}
                    <div style={styles.tdSub}>{a.email}</div>
                  </td>
                  <td style={styles.td}>{a.phone}</td>
                  <td style={styles.td}>{a.service}</td>
                  <td style={styles.td}>{formatDate(a.date)}</td>
                  <td style={styles.td}>{a.city || "—"}</td>
                  <td style={{ ...styles.td, maxWidth: "160px", color: "#6B7280", fontSize: "13px" }}>
                    {a.message ? a.message.slice(0, 40) + (a.message.length > 40 ? "…" : "") : "—"}
                  </td>
                  <td style={styles.td}>
                    <span style={{
                      ...styles.badge,
                      backgroundColor: statusColor(a.status).bg,
                      color: statusColor(a.status).color,
                    }}>
                      {a.status}
                    </span>
                  </td>
                  <td style={styles.td}>
                    <div style={styles.actionRow}>
                      {["pending", "confirmed", "cancelled"].map((s) => (
                        <button
                          key={s}
                          disabled={a.status === s || updatingId === a._id}
                          style={{
                            ...styles.actionBtn,
                            opacity: a.status === s ? 0.35 : 1,
                            backgroundColor:
                              s === "confirmed" ? "#D1FAE5" :
                              s === "cancelled" ? "#FEE2E2" : "#FEF3C7",
                            color:
                              s === "confirmed" ? "#065F46" :
                              s === "cancelled" ? "#991B1B" : "#92400E",
                          }}
                          onClick={() => updateStatus(a._id, s)}
                        >
                          {updatingId === a._id ? "…" : s.charAt(0).toUpperCase() + s.slice(1)}
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <p style={styles.footer}>
        Showing {filtered.length} of {appointments.length} appointments
      </p>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: "#F0F4FF",
    minHeight: "100vh",
    padding: "32px 24px",
    fontFamily: "sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "28px",
    flexWrap: "wrap",
    gap: "12px",
  },
  headerTitle: {
    color: "#0D1B3E",
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "4px",
  },
  headerSub: {
    color: "#6B7280",
    fontSize: "14px",
  },
  refreshBtn: {
    backgroundColor: "#0D1B3E",
    color: "#FFFFFF",
    border: "none",
    padding: "10px 20px",
    borderRadius: "50px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
  },
  statsGrid: (isMobile) => ({
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
    gap: "16px",
    marginBottom: "24px",
  }),
  statCard: {
    borderRadius: "14px",
    padding: "20px",
    textAlign: "center",
  },
  statNum: {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "4px",
  },
  statLabel: {
    fontSize: "13px",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  controls: (isMobile) => ({
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: "12px",
    marginBottom: "20px",
    alignItems: isMobile ? "stretch" : "center",
  }),
  searchInput: {
    flex: 1,
    padding: "12px 16px",
    borderRadius: "10px",
    border: "1px solid #D0D8F0",
    fontSize: "14px",
    backgroundColor: "#FFFFFF",
    outline: "none",
    color: "#0D1B3E",
  },
  filterBtns: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },
  filterBtn: {
    padding: "10px 18px",
    borderRadius: "50px",
    border: "none",
    fontSize: "13px",
    fontWeight: "600",
    cursor: "pointer",
  },
  center: {
    textAlign: "center",
    padding: "60px 20px",
  },
  loadingText: {
    color: "#6B7280",
    fontSize: "16px",
  },
  errorText: {
    color: "#FF6B6B",
    fontSize: "15px",
    marginBottom: "16px",
  },

  /* Table */
  tableWrapper: {
    backgroundColor: "#FFFFFF",
    borderRadius: "16px",
    overflow: "auto",
    border: "1px solid #E0E8FF",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "14px",
  },
  thead: {
    backgroundColor: "#0D1B3E",
  },
  th: {
    color: "#FFFFFF",
    padding: "14px 16px",
    textAlign: "left",
    fontSize: "13px",
    fontWeight: "600",
    whiteSpace: "nowrap",
  },
  tr: {
    borderBottom: "1px solid #E0E8FF",
  },
  td: {
    padding: "14px 16px",
    color: "#374151",
    verticalAlign: "middle",
  },
  tdSub: {
    fontSize: "12px",
    color: "#9CA3AF",
    fontWeight: "400",
    marginTop: "2px",
  },
  badge: {
    display: "inline-block",
    padding: "4px 12px",
    borderRadius: "50px",
    fontSize: "12px",
    fontWeight: "600",
    textTransform: "capitalize",
  },
  actionRow: {
    display: "flex",
    gap: "6px",
  },
  actionBtn: {
    padding: "5px 10px",
    borderRadius: "6px",
    border: "none",
    fontSize: "12px",
    fontWeight: "600",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },

  /* Mobile cards */
  cardList: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: "16px",
    padding: "20px",
    border: "1px solid #E0E8FF",
  },
  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "14px",
  },
  cardName: {
    color: "#0D1B3E",
    fontSize: "16px",
    fontWeight: "700",
    marginBottom: "4px",
  },
  cardSub: {
    color: "#FF6B6B",
    fontSize: "13px",
    fontWeight: "600",
  },
  cardDetails: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "8px",
    marginBottom: "12px",
  },
  cardDetail: {
    color: "#6B7280",
    fontSize: "13px",
  },
  cardMessage: {
    color: "#6B7280",
    fontSize: "13px",
    backgroundColor: "#F8FAFF",
    padding: "8px 12px",
    borderRadius: "8px",
    marginBottom: "12px",
  },
  cardActions: {
    display: "flex",
    gap: "8px",
  },
  footer: {
    textAlign: "center",
    color: "#9CA3AF",
    fontSize: "13px",
    marginTop: "24px",
  },
  loginBox: {
    minHeight: "100vh",
    backgroundColor: "#0D1B3E",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
  },
  loginTitle: {
    color: "#FFFFFF",
    fontSize: "28px",
    fontWeight: "700",
  },
  loginSub: {
    color: "#A0B4D6",
    fontSize: "15px",
    marginBottom: "8px",
  },
  loginInput: {
    padding: "14px 20px",
    borderRadius: "10px",
    border: "1px solid #1A2F5A",
    backgroundColor: "#1A2F5A",
    color: "#FFFFFF",
    fontSize: "15px",
    width: "300px",
    outline: "none",
  },
  loginBtn: {
    backgroundColor: "#FF6B6B",
    color: "#FFFFFF",
    border: "none",
    padding: "14px 40px",
    borderRadius: "50px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    width: "300px",
  },
};

export default AdminPanel;