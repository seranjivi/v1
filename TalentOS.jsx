import { useState } from "react";

const COLORS = {
  bg: "#F4F6FA",
  sidebar: "#FFFFFF",
  card: "#FFFFFF",
  card2: "#F8FAFC",
  border: "#E8ECF4",
  border2: "#D1D9E8",
  accent: "#AB6E26",
  accent2: "#8B5A1F",
  accentBg: "#FEF7F0",
  teal: "#0D9488",
  tealBg: "#F0FDFA",
  green: "#059669",
  greenBg: "#ECFDF5",
  amber: "#D97706",
  amberBg: "#FFFBEB",
  red: "#DC2626",
  redBg: "#FEF2F2",
  violet: "#7C3AED",
  violetBg: "#F5F3FF",
  pink: "#DB2777",
  pinkBg: "#FDF2F8",
  text1: "#0F172A",
  text2: "#475569",
  text3: "#94A3B8",
  text4: "#CBD5E1",
  white: "#FFFFFF",
};

const stages = [
  {
    id: "applied",
    label: "Applied",
    count: 84,
    color: COLORS.accent,
    bg: COLORS.accentBg,
    candidates: [
      { id: 1, name: "Ananya Kumar", role: "Sr. Frontend Dev", score: 92, skills: ["React", "TypeScript"], exp: "5 yrs", avatarBg: "linear-gradient(135deg,#0EA5E9,#6366F1)" },
      { id: 2, name: "Rahul Verma", role: "Product Designer", score: 78, skills: ["Figma", "UX"], exp: "3 yrs", avatarBg: "linear-gradient(135deg,#DB2777,#F43F5E)" },
      { id: 3, name: "Sneha Patel", role: "Data Analyst", score: 88, skills: ["Python", "SQL"], exp: "4 yrs", avatarBg: "linear-gradient(135deg,#059669,#0891B2)" },
    ],
  },
  {
    id: "screening",
    label: "Screening",
    count: 52,
    color: COLORS.amber,
    bg: COLORS.amberBg,
    candidates: [
      { id: 4, name: "Meera Krishnan", role: "Backend Engineer", score: 95, skills: ["Node.js", "AWS"], exp: "6 yrs", avatarBg: "linear-gradient(135deg,#D97706,#EF4444)" },
      { id: 5, name: "Jai Sharma", role: "DevOps Lead", score: 81, skills: ["Docker", "K8s"], exp: "7 yrs", avatarBg: "linear-gradient(135deg,#7C3AED,#DB2777)" },
    ],
  },
  {
    id: "interview",
    label: "Interview",
    count: 28,
    color: COLORS.violet,
    bg: COLORS.violetBg,
    candidates: [
      { id: 6, name: "Nisha Reddy", role: "ML Engineer", score: 97, skills: ["PyTorch", "LLMs"], exp: "5 yrs", avatarBg: "linear-gradient(135deg,#7C3AED,#A78BFA)", badge: "📅 Today 3:00 PM", badgeColor: COLORS.amber },
      { id: 7, name: "Arjun Tiwari", role: "Product Manager", score: 89, skills: ["Strategy", "B2B"], exp: "8 yrs", avatarBg: "linear-gradient(135deg,#0891B2,#059669)", badge: "📅 Tomorrow 11 AM", badgeColor: COLORS.accent },
    ],
  },
  {
    id: "offer",
    label: "Offer",
    count: 8,
    color: COLORS.green,
    bg: COLORS.greenBg,
    candidates: [
      { id: 8, name: "Priya Gupta", role: "UX Lead", score: 99, skills: ["Systems", "Research"], exp: "9 yrs", avatarBg: "linear-gradient(135deg,#059669,#0D9488)", badge: "✅ Offer Accepted", badgeColor: COLORS.green },
      { id: 9, name: "Vikram Nair", role: "CTO Track", score: 94, skills: ["Leadership"], exp: "12 yrs", avatarBg: "linear-gradient(135deg,#D97706,#F97316)", badge: "⏳ Awaiting Response", badgeColor: COLORS.amber },
    ],
  },
];

const jobs = [
  { title: "Sr. Frontend Engineer", dept: "Engineering · Bengaluru", count: 42, dot: COLORS.accent },
  { title: "Product Manager", dept: "Product · Remote", count: 38, dot: COLORS.green },
  { title: "UX Designer", dept: "Design · Chennai", count: 29, dot: COLORS.amber },
  { title: "ML Engineer", dept: "AI/ML · Hyderabad", count: 21, dot: COLORS.violet },
];

const activities = [
  { icon: "✓", text: <><b>Priya Gupta</b> accepted the offer for UX Lead</>, time: "2 mins ago", bg: COLORS.greenBg, color: COLORS.green },
  { icon: "📅", text: <><b>Nisha Reddy</b> interview scheduled today 3 PM</>, time: "18 mins ago", bg: COLORS.violetBg, color: COLORS.violet },
  { icon: "📨", text: <><b>12 new applications</b> for Sr. Frontend Engineer</>, time: "1 hr ago", bg: COLORS.accentBg, color: COLORS.accent },
  { icon: "🤖", text: <>AI screened <b>34 candidates</b> — 8 shortlisted</>, time: "3 hrs ago", bg: COLORS.amberBg, color: COLORS.amber },
];

const sources = [
  { label: "LinkedIn", pct: 42, color: COLORS.accent },
  { label: "Naukri", pct: 28, color: COLORS.violet },
  { label: "Referrals", pct: 18, color: COLORS.green },
  { label: "Career Page", pct: 12, color: COLORS.amber },
];

const navItems = [
  { icon: "⊞", label: "Dashboard", badge: null, active: true },
  { icon: "💼", label: "Jobs", badge: "12", badgeColor: COLORS.accent },
  { icon: "👥", label: "Candidates", badge: "248", badgeColor: COLORS.teal },
  { icon: "📋", label: "Applications", badge: null },
  { icon: "📅", label: "Interviews", badge: "8", badgeColor: COLORS.green },
];

const navItems2 = [
  { icon: "📊", label: "Reports" },
  { icon: "🔍", label: "Talent Pool" },
  { icon: "🤖", label: "AI Screening" },
  { icon: "📧", label: "Email Templates" },
];

const navItems3 = [
  { icon: "🏢", label: "Departments" },
  { icon: "👤", label: "Team Members" },
  { icon: "⚙️", label: "Settings" },
];

function ScoreBadge({ score }) {
  const color = score >= 90 ? COLORS.green : score >= 75 ? COLORS.amber : COLORS.text3;
  const bg = score >= 90 ? COLORS.greenBg : score >= 75 ? COLORS.amberBg : "#F1F5F9";
  return (
    <span style={{ fontSize: 11, fontWeight: 700, color, background: bg, padding: "2px 7px", borderRadius: 6, minWidth: 30, textAlign: "center" }}>
      {score}
    </span>
  );
}

function CandidateCard({ c, onClick }) {
  const initials = c.name.split(" ").map(n => n[0]).join("");
  return (
    <div style={{
      background: COLORS.white, border: `1px solid ${COLORS.border}`,
      borderRadius: 10, padding: "10px 12px", marginBottom: 8, cursor: "pointer",
      transition: "all 0.15s", boxShadow: "0 1px 3px rgba(15,23,42,0.04)",
    }}
      onClick={() => onClick && onClick(c)}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 4px 16px rgba(15,23,42,0.10)"; e.currentTarget.style.borderColor = COLORS.border2; e.currentTarget.style.transform = "translateY(-1px)"; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 1px 3px rgba(15,23,42,0.04)"; e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 7 }}>
        <div style={{ width: 30, height: 30, borderRadius: "50%", background: c.avatarBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: "#fff", flexShrink: 0, letterSpacing: 0.3 }}>
          {initials}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: COLORS.text1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.name}</div>
          <div style={{ fontSize: 10, color: COLORS.text3, marginTop: 1 }}>{c.role}</div>
        </div>
        <ScoreBadge score={c.score} />
      </div>
      <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: c.badge ? 7 : 0 }}>
        {c.skills.map(s => (
          <span key={s} style={{ fontSize: 9, fontWeight: 700, padding: "2px 7px", borderRadius: 5, background: COLORS.accentBg, color: COLORS.accent2, letterSpacing: 0.2 }}>{s}</span>
        ))}
        <span style={{ fontSize: 9, fontWeight: 700, padding: "2px 7px", borderRadius: 5, background: COLORS.tealBg, color: COLORS.teal }}>{c.exp}</span>
      </div>
      {c.badge && (
        <div style={{ fontSize: 10, fontWeight: 700, color: c.badgeColor, marginTop: 2 }}>{c.badge}</div>
      )}
    </div>
  );
}

function StatCard({ label, value, delta, deltaUp, icon, iconBg, accentColor, delay }) {
  return (
    <div style={{
      background: COLORS.white, border: `1px solid ${COLORS.border}`,
      borderRadius: 14, padding: "18px 20px", position: "relative", overflow: "hidden",
      boxShadow: "0 1px 4px rgba(15,23,42,0.05)", cursor: "pointer", transition: "all 0.2s",
      animationDelay: delay,
    }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 8px 24px rgba(15,23,42,0.10)`; e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 1px 4px rgba(15,23,42,0.05)"; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      <div style={{ position: "absolute", top: 0, right: 0, width: 80, height: 80, borderRadius: "0 14px 0 80px", background: iconBg, opacity: 0.5 }} />
      <div style={{ position: "absolute", top: 14, right: 14, width: 34, height: 34, borderRadius: 9, background: iconBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>
        {icon}
      </div>
      <div style={{ fontSize: 10, fontWeight: 700, color: COLORS.text3, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>{label}</div>
      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 30, fontWeight: 800, color: COLORS.text1, letterSpacing: -1, lineHeight: 1, marginBottom: 8 }}>{value}</div>
      <div style={{ fontSize: 11, fontWeight: 600, color: deltaUp ? COLORS.green : COLORS.red, display: "flex", alignItems: "center", gap: 3 }}>
        <span>{deltaUp ? "▲" : "▼"}</span>{delta}
      </div>
    </div>
  );
}

export default function TalentOS() {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [activeTab, setActiveTab] = useState("Overview");
  const [activeFilter, setActiveFilter] = useState("All Roles");
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleNavClick = (item) => {
    setActiveNav(item.label);
    console.log(`Navigated to: ${item.label}`);
  };

  const handleCandidateClick = (candidate) => {
    setSelectedCandidate(candidate);
    console.log(`Selected candidate: ${candidate.name}`);
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
    console.log(`Selected job: ${job.title}`);
  };

  const handlePostJob = () => {
    alert('Post Job functionality would open a form here');
  };

  const handleImport = () => {
    alert('Import functionality would open file selector here');
  };

  const handleSearch = (e) => {
    console.log('Searching for:', e.target.value);
  };

  const filters = ["All Roles", "Engineering", "Design", "Marketing", "Finance"];

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: COLORS.bg, fontFamily: "'Satoshi', 'DM Sans', system-ui, sans-serif" }}>

      {/* SIDEBAR */}
      <div style={{ width: 228, background: COLORS.sidebar, borderRight: `1px solid ${COLORS.border}`, display: "flex", flexDirection: "column", flexShrink: 0, boxShadow: "2px 0 12px rgba(15,23,42,0.04)" }}>

        {/* LOGO */}
        <div style={{ padding: "18px 18px 14px", borderBottom: `1px solid ${COLORS.border}`, display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, background: "linear-gradient(135deg,#AB6E26,#D97706)", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, boxShadow: "0 4px 12px rgba(171,110,38,0.30)" }}>
            ⚡
          </div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 800, color: COLORS.text1, letterSpacing: -0.4 }}>TalentOS</div>
            <div style={{ fontSize: 9, fontWeight: 700, color: COLORS.accent, letterSpacing: 0.08, textTransform: "uppercase" }}>Pro Edition</div>
          </div>
          <div style={{ marginLeft: "auto", background: "linear-gradient(135deg,#AB6E26,#D97706)", color: "#fff", fontSize: 9, fontWeight: 800, padding: "3px 8px", borderRadius: 5, letterSpacing: 0.3 }}>PRO</div>
        </div>

        {/* NAV */}
        <div style={{ padding: "14px 12px", flex: 1, overflowY: "auto" }}>
          {[
            { title: "Recruitment", items: navItems },
            { title: "Management", items: navItems2 },
            { title: "Company", items: navItems3 },
          ].map(section => (
            <div key={section.title}>
              <div style={{ fontSize: 9, fontWeight: 800, color: COLORS.text4, letterSpacing: "0.10em", textTransform: "uppercase", padding: "0 8px", marginBottom: 5, marginTop: 14 }}>{section.title}</div>
              {section.items.map(item => {
                const isActive = activeNav === item.label;
                return (
                  <div key={item.label}
                    onClick={() => handleNavClick(item)}
                    style={{
                      display: "flex", alignItems: "center", gap: 9, padding: "8px 10px",
                      borderRadius: 8, cursor: "pointer", fontSize: 13, fontWeight: isActive ? 700 : 500,
                      color: isActive ? COLORS.accent2 : COLORS.text2,
                      background: isActive ? COLORS.accentBg : "transparent",
                      marginBottom: 1, transition: "all 0.12s",
                    }}
                    onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = COLORS.bg; e.currentTarget.style.color = COLORS.text1; } }}
                    onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = COLORS.text2; } }}
                  >
                    <span style={{ fontSize: 14, width: 18, textAlign: "center" }}>{item.icon}</span>
                    <span style={{ flex: 1 }}>{item.label}</span>
                    {item.badge && (
                      <span style={{ background: item.badgeColor || COLORS.text3, color: "#fff", fontSize: 10, fontWeight: 800, padding: "1px 7px", borderRadius: 10 }}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* USER */}
        <div style={{ padding: "12px 12px 14px", borderTop: `1px solid ${COLORS.border}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", borderRadius: 9, cursor: "pointer", transition: "background 0.12s" }}
            onMouseEnter={e => e.currentTarget.style.background = COLORS.bg}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#AB6E26,#D97706)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: "#fff", flexShrink: 0 }}>S</div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: COLORS.text1 }}>Seranjivi G.</div>
              <div style={{ fontSize: 10, color: COLORS.text3 }}>HR Manager</div>
            </div>
            <span style={{ marginLeft: "auto", color: COLORS.text3, fontSize: 16 }}>⋯</span>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>

        {/* TOPBAR */}
        <div style={{ height: 60, background: COLORS.white, borderBottom: `1px solid ${COLORS.border}`, display: "flex", alignItems: "center", padding: "0 26px", gap: 14, flexShrink: 0, boxShadow: "0 1px 4px rgba(15,23,42,0.04)" }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 800, color: COLORS.text1, letterSpacing: -0.4 }}>{activeNav}</div>
            <div style={{ fontSize: 11, color: COLORS.text3, marginTop: 1 }}>
              {activeNav === "Dashboard" && "March 2026 · Q1 Hiring Cycle"}
              {activeNav === "Jobs" && "Manage job postings and requirements"}
              {activeNav === "Candidates" && "248 total candidates in database"}
              {activeNav === "Applications" && "Track and review applications"}
              {activeNav === "Interviews" && "8 interviews scheduled today"}
              {activeNav === "Reports" && "Analytics and insights"}
              {activeNav === "Talent Pool" && "Build your candidate pipeline"}
              {activeNav === "AI Screening" && "Automated candidate screening"}
              {activeNav === "Email Templates" && "Manage communication templates"}
              {activeNav === "Departments" && "Company organization structure"}
              {activeNav === "Team Members" && "User management and permissions"}
              {activeNav === "Settings" && "System configuration"}
            </div>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, background: COLORS.bg, border: `1px solid ${COLORS.border}`, borderRadius: 9, padding: "7px 14px", transition: "border-color 0.15s" }}>
              <span style={{ color: COLORS.text3, fontSize: 13 }}>🔍</span>
              <input placeholder="Search candidates, jobs..." onChange={handleSearch} style={{ background: "none", border: "none", outline: "none", fontFamily: "inherit", fontSize: 13, color: COLORS.text1, width: 190 }} />
            </div>
            <button onClick={handleImport} style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 14px", borderRadius: 9, fontFamily: "inherit", fontSize: 13, fontWeight: 700, cursor: "pointer", border: `1px solid ${COLORS.border}`, background: COLORS.white, color: COLORS.text2, transition: "all 0.12s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.border2; e.currentTarget.style.color = COLORS.text1; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.color = COLORS.text2; }}
            >
              📥 Import
            </button>
            <button onClick={handlePostJob} style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: 9, fontFamily: "inherit", fontSize: 13, fontWeight: 700, cursor: "pointer", border: "none", background: "linear-gradient(135deg,#AB6E26,#D97706)", color: "#fff", boxShadow: "0 4px 14px rgba(171,110,38,0.30)", transition: "all 0.15s" }}
              onMouseEnter={e => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              ＋ Post Job
            </button>
            <div onClick={() => alert('Notifications would open here')} style={{ width: 36, height: 36, background: COLORS.bg, border: `1px solid ${COLORS.border}`, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", position: "relative" }}>
              🔔
              <div style={{ position: "absolute", top: 6, right: 6, width: 8, height: 8, background: COLORS.red, borderRadius: "50%", border: `2px solid ${COLORS.white}` }} />
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 26px" }}>

          {/* DASHBOARD CONTENT */}
          {activeNav === "Dashboard" && (
            <div>
              {/* TABS */}
              <div style={{ display: "flex", gap: 2, background: COLORS.white, border: `1px solid ${COLORS.border}`, padding: 4, borderRadius: 11, width: "fit-content", marginBottom: 24, boxShadow: "0 1px 3px rgba(15,23,42,0.05)" }}>
                {["Overview", "Pipeline", "Analytics", "Interviews"].map(t => (
                  <div key={t} onClick={() => setActiveTab(t)}
                    style={{
                      padding: "6px 18px", borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: "pointer",
                      color: activeTab === t ? COLORS.text1 : COLORS.text3,
                      background: activeTab === t ? COLORS.bg : "transparent",
                      boxShadow: activeTab === t ? "0 1px 4px rgba(15,23,42,0.08)" : "none",
                      transition: "all 0.15s",
                    }}
                  >{t}</div>
                ))}
              </div>

              {/* ORIGINAL OVERVIEW CONTENT - MOVING THIS INSIDE THE CONDITIONAL */}
              {activeTab === "Overview" && (
                <div>
                  {/* STATS */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginBottom: 26 }}>
                    <StatCard label="Active Jobs" value="12" delta="3 added this month" deltaUp icon="💼" iconBg={COLORS.accentBg} />
                    <StatCard label="Total Applicants" value="248" delta="18% vs last month" deltaUp icon="👥" iconBg={COLORS.tealBg} />
                    <StatCard label="Interviews Today" value="8" delta="3 pending confirm" deltaUp={false} icon="📅" iconBg={COLORS.amberBg} />
                    <StatCard label="Hired This Month" value="6" delta="2 ahead of target" deltaUp icon="✅" iconBg={COLORS.greenBg} />
                  </div>

                  {/* DIVIDER */}
                  <div style={{ height: 1, background: `linear-gradient(90deg,transparent,${COLORS.accent},transparent)`, marginBottom: 24, opacity: 0.25 }} />

                  {/* MAIN GRID */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 18 }}>

                    {/* LEFT — PIPELINE */}
                    <div>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                        <div>
                          <div style={{ fontSize: 15, fontWeight: 800, color: COLORS.text1, letterSpacing: -0.3 }}>Hiring Pipeline</div>
                          <div style={{ fontSize: 11, color: COLORS.text3, marginTop: 2 }}>Drag candidates across stages</div>
                        </div>
                        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                          {filters.map(f => (
                            <div key={f} onClick={() => setActiveFilter(f)}
                              style={{
                                display: "flex", alignItems: "center", gap: 5, padding: "5px 12px",
                                background: activeFilter === f ? COLORS.accentBg : COLORS.white,
                                border: `1px solid ${activeFilter === f ? COLORS.accent : COLORS.border}`,
                                borderRadius: 20, fontSize: 11, fontWeight: 700,
                                color: activeFilter === f ? COLORS.accent2 : COLORS.text2,
                                cursor: "pointer", transition: "all 0.12s",
                              }}
                            >
                              <div style={{ width: 6, height: 6, borderRadius: "50%", background: activeFilter === f ? COLORS.accent : COLORS.text4 }} />
                              {f}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* KANBAN */}
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
                        {stages.map(stage => (
                          <div key={stage.id} style={{ background: COLORS.card2, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: 12 }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                              <span style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.07em", color: stage.color }}>{stage.label}</span>
                              <span style={{ fontSize: 10, fontWeight: 800, padding: "2px 8px", borderRadius: 10, background: stage.bg, color: stage.color }}>{stage.count}</span>
                            </div>
                            {stage.candidates.map(c => <CandidateCard key={c.id} c={c} onClick={handleCandidateClick} />)}
                            <div style={{ textAlign: "center", fontSize: 11, color: COLORS.text3, padding: "6px", cursor: "pointer", fontWeight: 600 }}>
                              +{stage.count - stage.candidates.length} more
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* RIGHT PANEL */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

                      {/* ACTIVE JOBS */}
                      <div style={{ background: COLORS.white, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 18, boxShadow: "0 1px 4px rgba(15,23,42,0.05)" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                          <div style={{ fontSize: 14, fontWeight: 800, color: COLORS.text1, letterSpacing: -0.2 }}>Active Jobs</div>
                          <span onClick={() => alert('View All Jobs functionality would open here')} style={{ fontSize: 11, fontWeight: 700, color: COLORS.accent2, cursor: "pointer" }}>View All →</span>
                        </div>
                        {jobs.map((j, i) => (
                          <div key={i} onClick={() => handleJobClick(j)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderBottom: i < jobs.length - 1 ? `1px solid ${COLORS.border}` : "none", cursor: "pointer" }}>
                            <div style={{ width: 9, height: 9, borderRadius: "50%", background: j.dot, flexShrink: 0 }} />
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: 12, fontWeight: 700, color: COLORS.text1 }}>{j.title}</div>
                              <div style={{ fontSize: 10, color: COLORS.text3, marginTop: 1 }}>{j.dept}</div>
                            </div>
                            <div style={{ textAlign: "right" }}>
                              <div style={{ fontSize: 17, fontWeight: 800, color: COLORS.text1, letterSpacing: -0.5, lineHeight: 1 }}>{j.count}</div>
                              <div style={{ fontSize: 9, color: COLORS.text3, fontWeight: 600 }}>applicants</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* SOURCES */}
                      <div style={{ background: COLORS.white, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 18, boxShadow: "0 1px 4px rgba(15,23,42,0.05)" }}>
                        <div style={{ fontSize: 14, fontWeight: 800, color: COLORS.text1, marginBottom: 4, letterSpacing: -0.2 }}>Candidate Sources</div>
                        <div style={{ fontSize: 10, color: COLORS.text3, marginBottom: 14, fontWeight: 600 }}>This month's breakdown</div>
                        {sources.map((s, i) => (
                          <div key={i} style={{ marginBottom: 12 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 5 }}>
                              <span style={{ fontWeight: 600, color: COLORS.text2 }}>{s.label}</span>
                              <span style={{ fontWeight: 800, color: s.color }}>{s.pct}%</span>
                            </div>
                            <div style={{ height: 6, background: COLORS.bg, borderRadius: 10, overflow: "hidden" }}>
                              <div style={{ width: `${s.pct}%`, height: "100%", background: s.color, borderRadius: 10, transition: "width 0.8s ease" }} />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* ACTIVITY */}
                      <div style={{ background: COLORS.white, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 18, boxShadow: "0 1px 4px rgba(15,23,42,0.05)" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                          <div style={{ fontSize: 14, fontWeight: 800, color: COLORS.text1, letterSpacing: -0.2 }}>Recent Activity</div>
                          <span onClick={() => alert('View All Activity functionality would open here')} style={{ fontSize: 11, fontWeight: 700, color: COLORS.accent2, cursor: "pointer" }}>All →</span>
                        </div>
                        {activities.map((a, i) => (
                          <div key={i} style={{ display: "flex", gap: 10, padding: "9px 0", borderBottom: i < activities.length - 1 ? `1px solid ${COLORS.border}` : "none" }}>
                            <div style={{ width: 30, height: 30, borderRadius: "50%", background: a.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, flexShrink: 0, color: a.color }}>
                              {a.icon}
                            </div>
                            <div>
                              <div style={{ fontSize: 11, color: COLORS.text2, lineHeight: 1.55 }}>{a.text}</div>
                              <div style={{ fontSize: 10, color: COLORS.text3, marginTop: 2, fontWeight: 600 }}>{a.time}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "Pipeline" && (
            <div>
              <div style={{ fontSize: 20, fontWeight: 800, color: COLORS.text1, marginBottom: 16 }}>Hiring Pipeline</div>
              <div style={{ background: COLORS.white, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 24, boxShadow: "0 1px 4px rgba(15,23,42,0.05)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
                  {stages.map(stage => (
                    <div key={stage.id} style={{ background: COLORS.card2, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: 12 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                        <span style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.07em", color: stage.color }}>{stage.label}</span>
                        <span style={{ fontSize: 10, fontWeight: 800, padding: "2px 8px", borderRadius: 10, background: stage.bg, color: stage.color }}>{stage.count}</span>
                      </div>
                      {stage.candidates.map(c => <CandidateCard key={c.id} c={c} onClick={handleCandidateClick} />)}
                      <div style={{ textAlign: "center", fontSize: 11, color: COLORS.text3, padding: "6px", cursor: "pointer", fontWeight: 600 }}>
                        +{stage.count - stage.candidates.length} more
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "Analytics" && (
            <div>
              <div style={{ fontSize: 20, fontWeight: 800, color: COLORS.text1, marginBottom: 16 }}>Recruitment Analytics</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 18 }}>
                <div style={{ background: COLORS.white, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 20, boxShadow: "0 1px 4px rgba(15,23,42,0.05)" }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: COLORS.text1, marginBottom: 12 }}>Hiring Trends</div>
                  <div style={{ height: 200, background: COLORS.bg, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.text3 }}>
                    📊 Chart: Monthly hiring trends
                  </div>
                </div>
                <div style={{ background: COLORS.white, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 20, boxShadow: "0 1px 4px rgba(15,23,42,0.05)" }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: COLORS.text1, marginBottom: 12 }}>Source Performance</div>
                  <div style={{ height: 200, background: COLORS.bg, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.text3 }}>
                    📈 Chart: Source conversion rates
                  </div>
                </div>
                <div style={{ background: COLORS.white, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 20, boxShadow: "0 1px 4px rgba(15,23,42,0.05)" }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: COLORS.text1, marginBottom: 12 }}>Time to Hire</div>
                  <div style={{ fontSize: 32, fontWeight: 800, color: COLORS.accent, textAlign: "center", margin: "40px 0" }}>18 days</div>
                  <div style={{ fontSize: 12, color: COLORS.text3, textAlign: "center" }}>Average time from application to offer</div>
                </div>
                <div style={{ background: COLORS.white, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 20, boxShadow: "0 1px 4px rgba(15,23,42,0.05)" }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: COLORS.text1, marginBottom: 12 }}>Offer Acceptance Rate</div>
                  <div style={{ fontSize: 32, fontWeight: 800, color: COLORS.green, textAlign: "center", margin: "40px 0" }}>87%</div>
                  <div style={{ fontSize: 12, color: COLORS.text3, textAlign: "center" }}>Of offers made this quarter</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Interviews" && (
            <div>
              <div style={{ fontSize: 20, fontWeight: 800, color: COLORS.text1, marginBottom: 16 }}>Scheduled Interviews</div>
              <div style={{ background: COLORS.white, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 20, boxShadow: "0 1px 4px rgba(15,23,42,0.05)" }}>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text1, marginBottom: 12 }}>Today's Interviews</div>
                  {[
                    { time: "10:00 AM", candidate: "Nisha Reddy", role: "ML Engineer", type: "Technical Round", interviewer: "Dr. Raj Kumar" },
                    { time: "2:00 PM", candidate: "Arjun Tiwari", role: "Product Manager", type: "Cultural Fit", interviewer: "Sarah Chen" },
                    { time: "3:00 PM", candidate: "Priya Gupta", role: "UX Lead", type: "Final Round", interviewer: "Michael Brown" },
                  ].map((interview, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", padding: "12px", border: `1px solid ${COLORS.border}`, borderRadius: 8, marginBottom: 8, cursor: "pointer" }}
                      onClick={() => alert(`Interview details for ${interview.candidate}`)}>
                      <div style={{ minWidth: 80, fontSize: 12, fontWeight: 700, color: COLORS.accent }}>{interview.time}</div>
                      <div style={{ flex: 1, marginLeft: 12 }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.text1 }}>{interview.candidate}</div>
                        <div style={{ fontSize: 11, color: COLORS.text3 }}>{interview.role} · {interview.type}</div>
                      </div>
                      <div style={{ fontSize: 11, color: COLORS.text3 }}>with {interview.interviewer}</div>
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text1, marginBottom: 12 }}>Upcoming This Week</div>
                  <div style={{ padding: "20px", textAlign: "center", color: COLORS.text3, background: COLORS.bg, borderRadius: 8 }}>
                    📅 8 more interviews scheduled this week
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ORIGINAL OVERVIEW CONTENT - MOVING THIS INSIDE THE CONDITIONAL */}
          {activeTab === "Overview" && (
            <div>
              {/* STATS */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginBottom: 26 }}>
                <StatCard label="Active Jobs" value="12" delta="3 added this month" deltaUp icon="💼" iconBg={COLORS.accentBg} />
                <StatCard label="Total Applicants" value="248" delta="18% vs last month" deltaUp icon="👥" iconBg={COLORS.tealBg} />
                <StatCard label="Interviews Today" value="8" delta="3 pending confirm" deltaUp={false} icon="📅" iconBg={COLORS.amberBg} />
                <StatCard label="Hired This Month" value="6" delta="2 ahead of target" deltaUp icon="✅" iconBg={COLORS.greenBg} />
              </div>

              {/* DIVIDER */}
              <div style={{ height: 1, background: `linear-gradient(90deg,transparent,${COLORS.accent},transparent)`, marginBottom: 24, opacity: 0.25 }} />

              {/* MAIN GRID */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 18 }}>

                {/* LEFT — PIPELINE */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 800, color: COLORS.text1, letterSpacing: -0.3 }}>Hiring Pipeline</div>
                      <div style={{ fontSize: 11, color: COLORS.text3, marginTop: 2 }}>Drag candidates across stages</div>
                    </div>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {filters.map(f => (
                        <div key={f} onClick={() => setActiveFilter(f)}
                          style={{
                            display: "flex", alignItems: "center", gap: 5, padding: "5px 12px",
                            background: activeFilter === f ? COLORS.accentBg : COLORS.white,
                            border: `1px solid ${activeFilter === f ? COLORS.accent : COLORS.border}`,
                            borderRadius: 20, fontSize: 11, fontWeight: 700,
                            color: activeFilter === f ? COLORS.accent2 : COLORS.text2,
                            cursor: "pointer", transition: "all 0.12s",
                          }}
                        >
                          <div style={{ width: 6, height: 6, borderRadius: "50%", background: activeFilter === f ? COLORS.accent : COLORS.text4 }} />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* KANBAN */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
                    {stages.map(stage => (
                      <div key={stage.id} style={{ background: COLORS.card2, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: 12 }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                          <span style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.07em", color: stage.color }}>{stage.label}</span>
                          <span style={{ fontSize: 10, fontWeight: 800, padding: "2px 8px", borderRadius: 10, background: stage.bg, color: stage.color }}>{stage.count}</span>
                        </div>
                        {stage.candidates.map(c => <CandidateCard key={c.id} c={c} onClick={handleCandidateClick} />)}
                        <div style={{ textAlign: "center", fontSize: 11, color: COLORS.text3, padding: "6px", cursor: "pointer", fontWeight: 600 }}>
                          +{stage.count - stage.candidates.length} more
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT PANEL */}
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

                  {/* ACTIVE JOBS */}
                  <div style={{ background: COLORS.white, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 18, boxShadow: "0 1px 4px rgba(15,23,42,0.05)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                      <div style={{ fontSize: 14, fontWeight: 800, color: COLORS.text1, letterSpacing: -0.2 }}>Active Jobs</div>
                      <span onClick={() => alert('View All Jobs functionality would open here')} style={{ fontSize: 11, fontWeight: 700, color: COLORS.accent2, cursor: "pointer" }}>View All →</span>
                    </div>
                    {jobs.map((j, i) => (
                      <div key={i} onClick={() => handleJobClick(j)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderBottom: i < jobs.length - 1 ? `1px solid ${COLORS.border}` : "none", cursor: "pointer" }}>
                        <div style={{ width: 9, height: 9, borderRadius: "50%", background: j.dot, flexShrink: 0 }} />
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 12, fontWeight: 700, color: COLORS.text1 }}>{j.title}</div>
                          <div style={{ fontSize: 10, color: COLORS.text3, marginTop: 1 }}>{j.dept}</div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <div style={{ fontSize: 17, fontWeight: 800, color: COLORS.text1, letterSpacing: -0.5, lineHeight: 1 }}>{j.count}</div>
                          <div style={{ fontSize: 9, color: COLORS.text3, fontWeight: 600 }}>applicants</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* SOURCES */}
                  <div style={{ background: COLORS.white, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 18, boxShadow: "0 1px 4px rgba(15,23,42,0.05)" }}>
                    <div style={{ fontSize: 14, fontWeight: 800, color: COLORS.text1, marginBottom: 4, letterSpacing: -0.2 }}>Candidate Sources</div>
                    <div style={{ fontSize: 10, color: COLORS.text3, marginBottom: 14, fontWeight: 600 }}>This month's breakdown</div>
                    {sources.map((s, i) => (
                      <div key={i} style={{ marginBottom: 12 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 5 }}>
                          <span style={{ fontWeight: 600, color: COLORS.text2 }}>{s.label}</span>
                          <span style={{ fontWeight: 800, color: s.color }}>{s.pct}%</span>
                        </div>
                        <div style={{ height: 6, background: COLORS.bg, borderRadius: 10, overflow: "hidden" }}>
                          <div style={{ width: `${s.pct}%`, height: "100%", background: s.color, borderRadius: 10, transition: "width 0.8s ease" }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* ACTIVITY */}
                  <div style={{ background: COLORS.white, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 18, boxShadow: "0 1px 4px rgba(15,23,42,0.05)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                      <div style={{ fontSize: 14, fontWeight: 800, color: COLORS.text1, letterSpacing: -0.2 }}>Recent Activity</div>
                      <span onClick={() => alert('View All Activity functionality would open here')} style={{ fontSize: 11, fontWeight: 700, color: COLORS.accent2, cursor: "pointer" }}>All →</span>
                    </div>
                    {activities.map((a, i) => (
                      <div key={i} style={{ display: "flex", gap: 10, padding: "9px 0", borderBottom: i < activities.length - 1 ? `1px solid ${COLORS.border}` : "none" }}>
                        <div style={{ width: 30, height: 30, borderRadius: "50%", background: a.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, flexShrink: 0, color: a.color }}>
                          {a.icon}
                        </div>
                        <div>
                          <div style={{ fontSize: 11, color: COLORS.text2, lineHeight: 1.55 }}>{a.text}</div>
                          <div style={{ fontSize: 10, color: COLORS.text3, marginTop: 2, fontWeight: 600 }}>{a.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          )}

          {/* JOBS CONTENT */}
          {activeNav === "Jobs" && (
            <div>
              <div style={{ fontSize: 20, fontWeight: 800, color: COLORS.text1, marginBottom: 16 }}>Job Management</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
                {jobs.map((job, i) => (
                  <div key={i} onClick={() => handleJobClick(job)} style={{ background: COLORS.white, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 20, cursor: "pointer", boxShadow: "0 1px 4px rgba(15,23,42,0.05)" }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 24px rgba(15,23,42,0.10)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 1px 4px rgba(15,23,42,0.05)"; e.currentTarget.style.transform = "translateY(0)"; }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                      <div style={{ width: 12, height: 12, borderRadius: "50%", background: job.dot }} />
                      <div style={{ fontSize: 16, fontWeight: 800, color: COLORS.text1 }}>{job.title}</div>
                    </div>
                    <div style={{ fontSize: 12, color: COLORS.text3, marginBottom: 12 }}>{job.dept}</div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{ fontSize: 24, fontWeight: 800, color: COLORS.accent }}>{job.count}</div>
                      <div style={{ fontSize: 11, color: COLORS.text3, fontWeight: 600 }}>applicants</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CANDIDATES CONTENT */}
          {activeNav === "Candidates" && (
            <div>
              <div style={{ fontSize: 20, fontWeight: 800, color: COLORS.text1, marginBottom: 16 }}>Candidate Database</div>
              <div style={{ background: COLORS.white, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 20, boxShadow: "0 1px 4px rgba(15,23,42,0.05)" }}>
                <div style={{ marginBottom: 16 }}>
                  <input placeholder="Search candidates..." style={{ width: "100%", padding: "12px", border: `1px solid ${COLORS.border}`, borderRadius: 8, fontSize: 14 }} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
                  {stages.flatMap(stage => stage.candidates).map(candidate => (
                    <CandidateCard key={candidate.id} c={candidate} onClick={handleCandidateClick} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* APPLICATIONS CONTENT */}
          {activeNav === "Applications" && (
            <div>
              <div style={{ fontSize: 20, fontWeight: 800, color: COLORS.text1, marginBottom: 16 }}>Application Tracking</div>
              <div style={{ background: COLORS.white, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 20, boxShadow: "0 1px 4px rgba(15,23,42,0.05)" }}>
                <div style={{ marginBottom: 20, display: "flex", gap: 12 }}>
                  <button style={{ padding: "8px 16px", background: COLORS.accentBg, color: COLORS.accent2, border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>All (248)</button>
                  <button style={{ padding: "8px 16px", background: COLORS.white, color: COLORS.text2, border: `1px solid ${COLORS.border}`, borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>New (84)</button>
                  <button style={{ padding: "8px 16px", background: COLORS.white, color: COLORS.text2, border: `1px solid ${COLORS.border}`, borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>In Review (52)</button>
                  <button style={{ padding: "8px 16px", background: COLORS.white, color: COLORS.text2, border: `1px solid ${COLORS.border}`, borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>Shortlisted (28)</button>
                </div>
                <div style={{ fontSize: 14, color: COLORS.text3, textAlign: "center", padding: "40px" }}>
                  📋 Application management interface would display detailed application reviews, status tracking, and bulk actions.
                </div>
              </div>
            </div>
          )}

          {/* OTHER NAVIGATION ITEMS */}
          {["Reports", "Talent Pool", "AI Screening", "Email Templates", "Departments", "Team Members", "Settings"].map(navItem => (
            activeNav === navItem && (
              <div key={navItem}>
                <div style={{ fontSize: 20, fontWeight: 800, color: COLORS.text1, marginBottom: 16 }}>{navItem}</div>
                <div style={{ background: COLORS.white, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 40, textAlign: "center", boxShadow: "0 1px 4px rgba(15,23,42,0.05)" }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>
                    {navItem === "Reports" && "📊"}
                    {navItem === "Talent Pool" && "👥"}
                    {navItem === "AI Screening" && "🤖"}
                    {navItem === "Email Templates" && "📧"}
                    {navItem === "Departments" && "🏢"}
                    {navItem === "Team Members" && "👤"}
                    {navItem === "Settings" && "⚙️"}
                  </div>
                  <div style={{ fontSize: 16, color: COLORS.text2, marginBottom: 8 }}>{navItem} Module</div>
                  <div style={{ fontSize: 14, color: COLORS.text3 }}>This section would contain detailed {navItem.toLowerCase()} functionality and management tools.</div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
