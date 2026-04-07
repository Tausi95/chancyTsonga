import { useState } from "react";

const PROJECTS = [
  {
    id:"capetrip", cat:"tech", emoji:"🚌", color:"#EEEDFE", accent:"#534AB7",
    title:"CapeTrip", tagline:"Commuting & logistics platform",
    tags:["Transport","Logistics","Web Platform"], link:"https://capetrip.com",
    desc:"CapeTrip is a commuting and logistics platform designed for seamless movement and tour experiences. It connects passengers, drivers, and tour operators in a single unified platform — making travel smarter, safer, and more accessible.",
    highlights:["Passenger & driver matching","Tour operator integration","Real-time logistics","Seamless booking experience"],
    images:["/images/mocks.png","/images/ux.jpg"],
  },
  {
    id:"mizpay", cat:"tech", emoji:"💳", color:"#EAF3DE", accent:"#3B6D11",
    title:"Mizpay", tagline:"Fintech & community savings app",
    tags:["Fintech","Mobile App","Community"],
    desc:"Mizpay is a fintech application and group/community savings platform. It empowers communities with collaborative savings tools, digital payments, and financial inclusion features.",
    highlights:["Group savings pools","Digital payments","Community-led finance","Financial inclusion tools"],
    images:["/images/mizpay.jpg","/images/mizupay.jpg","/images/mizumicro.jpg","/images/mizum.jpg"],
  },
  {
    id:"aet", cat:"edu", emoji:"🎓", color:"#E6F1FB", accent:"#185FA5",
    title:"Association for Education Transformation", tagline:"Software Engineer · EdTech & STEM",
    tags:["EdTech","STEM","Non-profit"], link:"https://www.asset.org.za/",
    desc:"An edtech initiative driving systemic change in education through technology and STEM support. Built and maintained the digital platforms powering the association's programs across Malawi.",
    highlights:["Software engineering & platform development","STEM curriculum support","Technology-driven learning","Community education programs"],
    images:["/images/aet1.jpg"],
  },
  {
    id:"namiwawa", cat:"construction", emoji:"🏠", color:"#FAECE7", accent:"#993C1D",
    title:"Residential House — Namiwawa", tagline:"Mr. Simon Msefula · Blantyre, Malawi",
    tags:["Residential","Project Mgmt","Design"],
    desc:"Full project design and construction management for Mr. Simon Msefula. Residential build in Namiwawa, Blantyre, Malawi — delivered on schedule from drawings to handover.",
    highlights:["Architectural design","Site management","Material procurement","Quality assurance"],
    images:["/images/namiwawa.png","/images/house_plan.jpg","/images/floorplan.png"],
  },
  {
    id:"chileka", cat:"construction", emoji:"🏡", color:"#FAECE7", accent:"#993C1D",
    title:"Residential House — Chileka", tagline:"Mr. James Ts · Chileka, Malawi",
    tags:["Residential","Design","Construction"],
    desc:"Design and construction management for Mr. James Ts. A residential property in Chileka, Malawi — handled end-to-end from structural planning through to completion.",
    highlights:["Full design package","Structural planning","On-site supervision","Client handover"],
    images:["/images/chileka1.jpg","/images/chileka2.jpg","/images/house_gate.jpg"],
  },
  {
    id:"machinjiri", cat:"construction", emoji:"🏢", color:"#FAEEDA", accent:"#854F0B",
    title:"Business Complex — Machinjiri", tagline:"Blessings Business Ltd · Blantyre, Malawi",
    tags:["Commercial","Construction","Project Mgmt"],
    desc:"Commercial project for Blessings Business Ltd. Full design and construction management of a multi-purpose business complex in Machinjiri, Blantyre.",
    highlights:["Commercial design","Multi-unit complex","Contractor coordination","Timeline delivery"],
    images:["/images/machinjiri.png","/images/construction1.jpg"],
  },
  {
    id:"renovations", cat:"construction", emoji:"🔧", color:"#E1F5EE", accent:"#0F6E56",
    title:"Corporate Renovations", tagline:"TNM · National Bank · Central Water Board",
    tags:["Renovation","Commercial","Corporate"],
    desc:"High-profile renovation works for TNM Malawi, National Bank of Malawi, and the Central Region Water Board — structural upgrades, interior refurbishments, and facility improvements.",
    highlights:["TNM Malawi offices","National Bank of Malawi","Central Region Water Board","Commercial-grade refurbishments"],
    images:["/images/reno1.jpg","/images/reno2.jpg","/images/reno3.jpg","/images/reno4.jpg","/images/reno5.jpg"],
  },
  {
    id:"nevags", cat:"marketing", emoji:"📈", color:"#FBEAF0", accent:"#993556",
    title:"NEVAGs Building Contractors", tagline:"Business & Marketing Manager",
    tags:["Marketing","Business Dev","Construction"],
    desc:"Served as Business and Marketing Manager — responsible for brand positioning, client acquisition, proposal development, and business growth strategy.",
    highlights:["Brand strategy","Client acquisition","Proposal & tendering","Business development"],
    images:["/images/nevag1.jpg","/images/nevags1.jpg","/images/nevags_factory.jpg","/images/kiln_nevags.jpg"],
  },
  {
    id:"woodlain", cat:"marketing", emoji:"🌐", color:"#EEEDFE", accent:"#534AB7",
    title:"Woodlain Digital", tagline:"Marketing & Traffic Conversion Officer · Cyprus",
    tags:["Digital Marketing","Conversion","Remote"], link:"https://woodlaine.com/",
    desc:"Working with Woodlain Digital (Cyprus) as Marketing & Traffic Conversion Officer — designing digital campaigns, driving traffic, and optimizing conversion funnels for international clients.",
    highlights:["Traffic acquisition strategy","Conversion rate optimization","Campaign performance","International client base"],
    images:["/images/graphics.png","/images/ux.jpg"],
  },
];

const STARTUPS = [
  { id:"effort", emoji:"⚡", color:"#FAECE7", accent:"#993C1D", title:"Effort Construction", desc:"A multi-service firm spanning software development, construction (planning, renovation, building, consultation), and digital marketing — operating across Malawi, South Africa, and Cyprus.", tags:["Founder","Construction","Software Dev","Digital Marketing"] },
  { id:"mizu",   emoji:"💰", color:"#EAF3DE", accent:"#3B6D11", title:"Mizu-Microbank",      desc:"A microfinance and community banking platform bringing accessible financial services to underserved communities.", tags:["Fintech","Microfinance"] },
  { id:"stemlink",emoji:"📚", color:"#E6F1FB", accent:"#185FA5", title:"STEM-LINK",           desc:"Connecting students, educators, and STEM resources across Africa — bridging the education gap through technology and mentorship.", tags:["EdTech","STEM"] },
];

const BLOG_POSTS = [
  { id:1, title:"Why I work across 6 industries — and why it works",                     date:"Apr 2026", category:"Lifestyle",    excerpt:"Most people pick a lane. I built a highway. Here's the mindset and systems that let me operate across tech, construction, marketing, and more without burning out.",                                                       readTime:"5 min read" },
  { id:2, title:"Building CapeTrip: logistics lessons from the ground up",                date:"Mar 2026", category:"Tech",         excerpt:"What I learned building a commuting platform in Malawi — from user research on the streets to scaling a transport product.",                                                                                         readTime:"7 min read" },
  { id:3, title:"Construction meets code: why every builder should learn tech",           date:"Feb 2026", category:"Construction", excerpt:"The surprising overlap between software engineering and construction project management — and how knowing both makes you unstoppable.",                                                                              readTime:"6 min read" },
  { id:4, title:"Community savings & fintech: the Mizpay origin story",                   date:"Jan 2026", category:"Fintech",      excerpt:"How watching communities pool money informally inspired me to build a digital platform for group savings across Africa.",                                                                                         readTime:"5 min read" },
  { id:5, title:"Digital marketing from Cyprus to Malawi: what changes, what doesn't",   date:"Dec 2025", category:"Marketing",    excerpt:"Working remotely across continents taught me that great marketing is about human psychology — not geography.",                                                                                                    readTime:"4 min read" },
  { id:6, title:"STEM education in Malawi: the gap and how we're closing it",             date:"Nov 2025", category:"Education",    excerpt:"A candid look at the state of STEM education in Malawi and what the Association for Education Transformation is doing about it.",                                                                                readTime:"6 min read" },
];

// Gallery items — labelled for context
const GALLERY = [
  { src:"/images/profile.png",         label:"Profile",                cat:"profile" },
  { src:"/images/pr.jpg",              label:"Professional",           cat:"profile" },
  { src:"/images/mizpay.jpg",          label:"Mizpay App",             cat:"tech" },
  { src:"/images/mizupay.jpg",         label:"Mizpay UI",              cat:"tech" },
  { src:"/images/mizumicro.jpg",       label:"Mizu Microbank",         cat:"tech" },
  { src:"/images/mizum.jpg",           label:"Mizu Platform",          cat:"tech" },
  { src:"/images/mocks.png",           label:"App Mockups",            cat:"tech" },
  { src:"/images/aet1.jpg",            label:"Working with kids — ASSET", cat:"edu" },
  { src:"/images/namiwawa.png",        label:"Namiwawa House",         cat:"construction" },
  { src:"/images/machinjiri.png",      label:"Machinjiri Complex",     cat:"construction" },
  { src:"/images/chileka1.jpg",        label:"Chileka House",          cat:"construction" },
  { src:"/images/chileka2.jpg",        label:"Chileka Build",          cat:"construction" },
  { src:"/images/house_gate.jpg",      label:"House Gate",             cat:"construction" },
  { src:"/images/house_plan.jpg",      label:"House Plan",             cat:"construction" },
  { src:"/images/floorplan.png",       label:"Floor Plan",             cat:"construction" },
  { src:"/images/construction1.jpg",   label:"Construction Site",      cat:"construction" },
  { src:"/images/reno1.jpg",           label:"Corporate Renovation 1", cat:"construction" },
  { src:"/images/reno2.jpg",           label:"Corporate Renovation 2", cat:"construction" },
  { src:"/images/reno3.jpg",           label:"Corporate Renovation 3", cat:"construction" },
  { src:"/images/reno4.jpg",           label:"Corporate Renovation 4", cat:"construction" },
  { src:"/images/reno5.jpg",           label:"Corporate Renovation 5", cat:"construction" },
  { src:"/images/bricks.jpg",          label:"Bricks",                 cat:"construction" },
  { src:"/images/hallow_bricks.jpg",   label:"Hollow Bricks",          cat:"construction" },
  { src:"/images/finishes.jpg",        label:"Wall Finishes",          cat:"construction" },
  { src:"/images/wall_finishes.jpg",   label:"Wall Finishes Detail",   cat:"construction" },
  { src:"/images/wall_fence.jpg",      label:"Wall & Fence",           cat:"construction" },
  { src:"/images/nevag1.jpg",          label:"NEVAGs",                 cat:"marketing" },
  { src:"/images/nevags1.jpg",         label:"NEVAGs Team",            cat:"marketing" },
  { src:"/images/nevags_factory.jpg",  label:"NEVAGs Factory",         cat:"marketing" },
  { src:"/images/kiln_nevags.jpg",     label:"NEVAGs Kiln",            cat:"marketing" },
  { src:"/images/graphics.png",        label:"Graphics Work",          cat:"marketing" },
  { src:"/images/vsk.jpg",             label:"VSK",                    cat:"marketing" },
];

const GALLERY_CATS = ["all","tech","construction","marketing","edu","profile"];
const GALLERY_CAT_LABELS = { all:"All", tech:"Tech", construction:"Construction", marketing:"Marketing", edu:"Education", profile:"Profile" };

const CATS       = ["all","tech","construction","marketing","edu"];
const CAT_LABELS = { all:"All", tech:"Tech & Fintech", construction:"Construction", marketing:"Marketing", edu:"Education" };
const CAT_COLORS = { Tech:"#EEEDFE", Construction:"#FAECE7", Fintech:"#EAF3DE", Marketing:"#FBEAF0", Education:"#E6F1FB", Lifestyle:"#E1F5EE" };
const CAT_TEXT   = { Tech:"#3C3489", Construction:"#993C1D", Fintech:"#3B6D11", Marketing:"#993556", Education:"#0C447C", Lifestyle:"#0F6E56" };

const WA           = "https://wa.me/277699840601";
const EMAIL_PRIMARY = "chancy.tsonga@yahoo.com";
const LINKEDIN      = "https://linkedin.com/in/chancytsonga/";

/* ── small helpers ── */
function Tag({ label, bg, color }) {
  return (
    <span style={{ display:"inline-block", fontSize:11, padding:"3px 9px", borderRadius:20, background:bg||"#EEEDFE", color:color||"#3C3489", marginRight:4, marginBottom:4, fontWeight:500 }}>
      {label}
    </span>
  );
}

function ProjectImg({ src, alt, color, emoji }) {
  const [err, setErr] = useState(false);
  if (err) {
    return (
      <div style={{ height:200, background:color||"#f0f0f0", borderRadius:10, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:6 }}>
        <span style={{ fontSize:28 }}>{emoji}</span>
        <span style={{ fontSize:11, color:"#888" }}>Image coming soon</span>
      </div>
    );
  }
  return (
    <img src={src} alt={alt} onError={() => setErr(true)}
      style={{ width:"100%", height:200, objectFit:"cover", borderRadius:10, display:"block", border:"0.5px solid rgba(0,0,0,0.06)" }} />
  );
}

function BackBtn({ onBack, label="← Back", border }) {
  return (
    <button onClick={onBack} style={{ display:"flex", alignItems:"center", gap:6, background:"transparent", border:`0.5px solid ${border||"rgba(0,0,0,0.12)"}`, borderRadius:8, padding:"7px 14px", cursor:"pointer", fontSize:13, color:"#666", fontFamily:"var(--font-sans)", marginBottom:"2rem" }}>
      {label}
    </button>
  );
}

function Lightbox({ item, onClose }) {
  return (
    <div onClick={onClose} style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.88)", zIndex:2000, display:"flex", alignItems:"center", justifyContent:"center", padding:"1rem" }}>
      <div onClick={e => e.stopPropagation()} style={{ maxWidth:"90vw", maxHeight:"90vh", position:"relative" }}>
        <img src={item.src} alt={item.label} style={{ maxWidth:"90vw", maxHeight:"85vh", objectFit:"contain", borderRadius:10, display:"block" }} />
        <div style={{ position:"absolute", bottom:-36, left:0, right:0, textAlign:"center", color:"rgba(255,255,255,0.7)", fontSize:13 }}>{item.label}</div>
        <button onClick={onClose} style={{ position:"absolute", top:-40, right:0, background:"transparent", border:"none", color:"#fff", fontSize:24, cursor:"pointer", lineHeight:1 }}>✕</button>
      </div>
    </div>
  );
}

function ProjectDetail({ proj, onBack }) {
  return (
    <div style={{ maxWidth:720, margin:"0 auto", padding:"1.5rem 1rem" }}>
      <BackBtn onBack={onBack} label="← Back to portfolio" />
      <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:"1.5rem" }}>
        <div style={{ width:56, height:56, borderRadius:14, background:proj.color, display:"flex", alignItems:"center", justifyContent:"center", fontSize:28, flexShrink:0 }}>{proj.emoji}</div>
        <div>
          <h1 style={{ fontSize:22, fontWeight:600, marginBottom:4 }}>{proj.title}</h1>
          <p style={{ fontSize:13, color:"#666" }}>{proj.tagline}</p>
        </div>
      </div>
      <div style={{ marginBottom:"1.5rem" }}>{proj.tags.map(t => <Tag key={t} label={t} bg={proj.color} color={proj.accent} />)}</div>
      <p style={{ fontSize:15, lineHeight:1.8, color:"#555", marginBottom:"2rem" }}>{proj.desc}</p>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))", gap:12, marginBottom:"2rem" }}>
        {proj.images.map(src => <ProjectImg key={src} src={src} alt={proj.title} color={proj.color} emoji={proj.emoji} />)}
      </div>
      <div style={{ background:"#f7f7f5", borderRadius:12, padding:"1.25rem", marginBottom:"2rem" }}>
        <h3 style={{ fontSize:14, fontWeight:600, marginBottom:12 }}>Key highlights</h3>
        {proj.highlights.map((h, i) => (
          <div key={i} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:8 }}>
            <div style={{ width:6, height:6, borderRadius:"50%", background:proj.accent, flexShrink:0 }} />
            <span style={{ fontSize:13, color:"#555" }}>{h}</span>
          </div>
        ))}
      </div>
      <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
        {proj.link && (
          <a href={proj.link} target="_blank" rel="noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:6, background:proj.accent, color:"#fff", padding:"10px 22px", borderRadius:8, fontSize:14, textDecoration:"none", fontWeight:500 }}>
            Visit {proj.title} ↗
          </a>
        )}
        <a href={WA} target="_blank" rel="noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:6, background:"#25D366", color:"#fff", padding:"10px 22px", borderRadius:8, fontSize:14, textDecoration:"none", fontWeight:500 }}>
          💬 Discuss this project
        </a>
      </div>
    </div>
  );
}

function BlogPost({ post, onBack }) {
  return (
    <div style={{ maxWidth:680, margin:"0 auto", padding:"1.5rem 1rem" }}>
      <BackBtn onBack={onBack} label="← Back to blog" />
      <div style={{ marginBottom:14, display:"flex", alignItems:"center", gap:10, flexWrap:"wrap" }}>
        <span style={{ background:CAT_COLORS[post.category]||"#EEEDFE", color:CAT_TEXT[post.category]||"#3C3489", fontSize:11, padding:"3px 10px", borderRadius:20, fontWeight:500 }}>{post.category}</span>
        <span style={{ fontSize:12, color:"#888" }}>{post.date} · {post.readTime}</span>
      </div>
      <h1 style={{ fontSize:24, fontWeight:600, lineHeight:1.3, marginBottom:"1.25rem" }}>{post.title}</h1>
      <p style={{ fontSize:15, color:"#555", lineHeight:1.8, marginBottom:"1.5rem" }}>{post.excerpt}</p>
      <div style={{ background:"#f7f7f5", borderRadius:12, padding:"1.25rem" }}>
        <p style={{ fontSize:13, color:"#666", lineHeight:1.7 }}>This is a preview. The full article is coming soon. Want to be notified when it's published?</p>
        <a href={WA} target="_blank" rel="noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:6, marginTop:12, background:"#25D366", color:"#fff", padding:"9px 18px", borderRadius:8, fontSize:13, textDecoration:"none", fontWeight:500 }}>
          💬 Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}

function StartupDetail({ s, onBack }) {
  return (
    <div style={{ maxWidth:720, margin:"0 auto", padding:"1.5rem 1rem" }}>
      <BackBtn onBack={onBack} />
      <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:"1.5rem" }}>
        <div style={{ width:56, height:56, borderRadius:14, background:s.color, display:"flex", alignItems:"center", justifyContent:"center", fontSize:28, flexShrink:0 }}>{s.emoji}</div>
        <div>
          <h1 style={{ fontSize:22, fontWeight:600 }}>{s.title}</h1>
          <p style={{ fontSize:12, color:"#888" }}>Startup venture</p>
        </div>
      </div>
      <div style={{ marginBottom:"1rem" }}>{s.tags.map(t => <Tag key={t} label={t} bg={s.color} color={s.accent} />)}</div>
      <p style={{ fontSize:15, lineHeight:1.8, color:"#555", margin:"1.5rem 0" }}>{s.desc}</p>
      <div style={{ background:"#f7f7f5", borderRadius:12, padding:"1.25rem" }}>
        <p style={{ fontSize:13, color:"#666" }}>Currently in active development. Interested in collaborating or investing?</p>
        <a href={WA} target="_blank" rel="noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:6, marginTop:12, background:s.accent, color:"#fff", padding:"9px 18px", borderRadius:8, fontSize:13, textDecoration:"none", fontWeight:500 }}>
          💬 Get in touch on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default function App() {
  const [dark, setDark]               = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [activeProj, setActiveProj]   = useState(null);
  const [activeStartup, setActiveStartup] = useState(null);
  const [activeBlog, setActiveBlog]   = useState(null);
  const [cat, setCat]                 = useState("all");
  const [galCat, setGalCat]           = useState("all");
  const [lightbox, setLightbox]       = useState(null);
  const [formName, setFormName]       = useState("");
  const [formEmail, setFormEmail]     = useState("");
  const [formSubject, setFormSubject] = useState("");
  const [formMsg, setFormMsg]         = useState("");

  const filtered    = cat    === "all" ? PROJECTS : PROJECTS.filter(p => p.cat === cat);
  const galFiltered = galCat === "all" ? GALLERY   : GALLERY.filter(g => g.cat === galCat);

  const scrollTo = id => {
    setMenuOpen(false);
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior:"smooth" }), 50);
  };

  const bg      = dark ? "#111"                   : "#fff";
  const fg      = dark ? "#e8e8e8"                : "#1a1a1a";
  const fgMuted = dark ? "#999"                   : "#666";
  const border  = dark ? "rgba(255,255,255,0.1)"  : "rgba(0,0,0,0.1)";
  const cardBg  = dark ? "#1a1a1a"                : "#fff";
  const surfBg  = dark ? "#161616"                : "#f7f7f5";
  const inputBg = dark ? "#1e1e1e"                : "#fff";

  const wrap  = { background:bg, color:fg, minHeight:"100vh", fontFamily:"var(--font-sans)", transition:"background 0.2s, color 0.2s" };
  const inner = { maxWidth:960, margin:"0 auto", padding:"0 1.25rem" };

  const waMsg    = `Hi Chancy, I'm ${formName||"reaching out"}${formSubject ? ` — ${formSubject}` : ""}. ${formMsg}`.trim();
  const mailHref = `mailto:${EMAIL_PRIMARY}?subject=${encodeURIComponent(formSubject||`Message from ${formName||"website"}`)}&body=${encodeURIComponent(formMsg)}`;

  if (activeProj)    return <div style={wrap}><div style={inner}><ProjectDetail  proj={activeProj}    onBack={() => setActiveProj(null)}    /></div></div>;
  if (activeStartup) return <div style={wrap}><div style={inner}><StartupDetail  s={activeStartup}    onBack={() => setActiveStartup(null)} /></div></div>;
  if (activeBlog)    return <div style={wrap}><div style={inner}><BlogPost        post={activeBlog}    onBack={() => setActiveBlog(null)}    /></div></div>;

  return (
    <div style={wrap}>
      {lightbox && <Lightbox item={lightbox} onClose={() => setLightbox(null)} />}

      {/* WHATSAPP FLOATING */}
      <a href={WA} target="_blank" rel="noreferrer" title="Chat on WhatsApp"
        style={{ position:"fixed", bottom:24, right:24, width:52, height:52, background:"#25D366", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, textDecoration:"none", boxShadow:"0 4px 16px rgba(37,211,102,0.4)", zIndex:999, transition:"transform 0.2s" }}
        onMouseEnter={e => e.currentTarget.style.transform="scale(1.1)"}
        onMouseLeave={e => e.currentTarget.style.transform="scale(1)"}>
        💬
      </a>

      <div style={inner}>
        {/* NAV */}
        <nav style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"1.25rem 0", borderBottom:`0.5px solid ${border}` }}>
          <div style={{ fontSize:18, fontWeight:600, cursor:"pointer", color:fg, letterSpacing:-0.3 }} onClick={() => scrollTo("hero")}>
            Chancy<span style={{ color:"#7F77DD" }}>.</span>
          </div>
          <div className="desk-nav" style={{ display:"flex", gap:22, alignItems:"center" }}>
            {["About","Projects","Gallery","Blog","Startups","Experience","Contact"].map(l => (
              <span key={l} onClick={() => scrollTo(l.toLowerCase())} style={{ fontSize:13, color:fgMuted, cursor:"pointer", transition:"color 0.15s" }}
                onMouseEnter={e => e.currentTarget.style.color=fg}
                onMouseLeave={e => e.currentTarget.style.color=fgMuted}>
                {l}
              </span>
            ))}
            <button onClick={() => setDark(d => !d)} style={{ background:"transparent", border:`0.5px solid ${border}`, borderRadius:8, padding:"5px 12px", cursor:"pointer", fontSize:12, color:fgMuted, fontFamily:"var(--font-sans)" }}>
              {dark ? "☀ Light" : "🌙 Dark"}
            </button>
          </div>
          <button className="ham-btn" onClick={() => setMenuOpen(m => !m)} style={{ background:"transparent", border:`0.5px solid ${border}`, borderRadius:8, padding:"6px 10px", fontSize:18, cursor:"pointer", color:fg }}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div style={{ background:cardBg, border:`0.5px solid ${border}`, borderRadius:12, padding:"1.25rem", marginBottom:"1rem", display:"flex", flexDirection:"column", gap:16 }}>
            {["About","Projects","Gallery","Blog","Startups","Experience","Contact"].map(l => (
              <span key={l} onClick={() => scrollTo(l.toLowerCase())} style={{ fontSize:14, color:fg, cursor:"pointer" }}>{l}</span>
            ))}
            <button onClick={() => { setDark(d => !d); setMenuOpen(false); }} style={{ background:"transparent", border:`0.5px solid ${border}`, borderRadius:8, padding:"8px", cursor:"pointer", fontSize:13, color:fgMuted, fontFamily:"var(--font-sans)", textAlign:"left" }}>
              {dark ? "☀ Switch to light mode" : "🌙 Switch to dark mode"}
            </button>
          </div>
        )}

        {/* HERO */}
        <section id="hero" style={{ padding:"5rem 0 3rem", maxWidth:640 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:6, background:"#EEEDFE", color:"#3C3489", fontSize:11, padding:"5px 14px", borderRadius:20, marginBottom:"1.5rem", border:"0.5px solid #AFA9EC", fontWeight:500 }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:"#534AB7", display:"inline-block" }} />
            Open to collaborations
          </div>
          <h1 style={{ fontSize:"clamp(28px,5vw,38px)", fontWeight:600, lineHeight:1.12, letterSpacing:-1.5, marginBottom:"1.25rem", color:fg }}>
            Tech. Design. Build.<br />
            <span style={{ color:"#7F77DD" }}>Across every industry.</span>
          </h1>
          <p style={{ fontSize:15, color:fgMuted, lineHeight:1.8, marginBottom:"2rem", maxWidth:520 }}>
            I'm Chancy Tsonga — a multi-disciplinary professional working across technology, construction, marketing, fintech, and education. Based across Malawi, South Africa, and Cyprus.
          </p>
          <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
            <button onClick={() => scrollTo("projects")} style={{ padding:"11px 24px", background:"#534AB7", color:"#EEEDFE", border:"none", borderRadius:8, fontSize:14, cursor:"pointer", fontFamily:"var(--font-sans)", fontWeight:500 }}>View my work</button>
            <a href={WA} target="_blank" rel="noreferrer" style={{ padding:"11px 24px", background:"#25D366", color:"#fff", borderRadius:8, fontSize:14, textDecoration:"none", fontWeight:500 }}>💬 WhatsApp me</a>
            <button onClick={() => scrollTo("contact")} style={{ padding:"11px 24px", background:"transparent", color:fg, border:`0.5px solid ${border}`, borderRadius:8, fontSize:14, cursor:"pointer", fontFamily:"var(--font-sans)" }}>Get in touch</button>
          </div>
        </section>

        {/* STATS */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(130px,1fr))", gap:10, margin:"0 0 2.5rem" }}>
          {[["6+","Industries"],["3","Active startups"],["10+","Build projects"],["4","Tech platforms"]].map(([n,l]) => (
            <div key={l} style={{ background:surfBg, borderRadius:10, padding:"1rem 1.25rem" }}>
              <div style={{ fontSize:28, fontWeight:600, color:"#7F77DD" }}>{n}</div>
              <div style={{ fontSize:12, color:fgMuted, marginTop:4 }}>{l}</div>
            </div>
          ))}
        </div>

        {/* ABOUT */}
        <section id="about" style={{ padding:"2.5rem 0", borderTop:`0.5px solid ${border}` }}>
          <h2 style={{ fontSize:18, fontWeight:600, marginBottom:"1.75rem", color:fg }}>About me</h2>
          <div className="two-col" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"2.5rem" }}>
            <div>
              <div style={{ width:72, height:72, borderRadius:"50%", background:"linear-gradient(135deg,#EEEDFE,#AFA9EC)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:26, fontWeight:700, marginBottom:"1.25rem", border:"2px solid #AFA9EC", color:"#534AB7" }}>CT</div>
              <p style={{ fontSize:14, color:fgMuted, lineHeight:1.85, marginBottom:"1rem" }}>I'm Chancy Tsonga — a professional with a broad and practical skill set spanning software engineering, construction management, digital marketing, and fintech. I currently operate across Malawi, South Africa, and Cyprus.</p>
              <p style={{ fontSize:14, color:fgMuted, lineHeight:1.85 }}>As the founder of Effort Construction and co-creator of platforms like CapeTrip and Mizpay, I bring both technical depth and business acumen to every project I take on.</p>
            </div>
            <div>
              <h3 style={{ fontSize:14, fontWeight:600, marginBottom:14, color:fg }}>Skills & tools</h3>
              {[
                { label:"Software Development", tags:["Web Apps","Mobile","Platforms","APIs"] },
                { label:"Construction",          tags:["Planning","Design","Renovation","Consultation"] },
                { label:"Digital Marketing",     tags:["Traffic Conversion","Campaigns","SEO","Brand"] },
                { label:"Business",              tags:["Strategy","Fintech","Startups","Project Mgmt"] },
              ].map(g => (
                <div key={g.label} style={{ marginBottom:16 }}>
                  <div style={{ fontSize:12, color:fgMuted, marginBottom:6, fontWeight:500 }}>{g.label}</div>
                  <div>{g.tags.map(t => <span key={t} style={{ display:"inline-block", fontSize:11, padding:"3px 10px", borderRadius:20, background:surfBg, color:fgMuted, marginRight:4, marginBottom:4, border:`0.5px solid ${border}` }}>{t}</span>)}</div>
                </div>
              ))}
              <button onClick={() => alert("CV download coming soon — contact Chancy directly on WhatsApp to request a copy.")}
                style={{ marginTop:8, display:"inline-flex", alignItems:"center", gap:8, background:"#534AB7", color:"#EEEDFE", border:"none", borderRadius:8, padding:"10px 18px", fontSize:13, cursor:"pointer", fontFamily:"var(--font-sans)", fontWeight:500 }}>
                ⬇ Download CV
              </button>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" style={{ padding:"2.5rem 0", borderTop:`0.5px solid ${border}` }}>
          <h2 style={{ fontSize:18, fontWeight:600, marginBottom:4, color:fg }}>Projects</h2>
          <p style={{ fontSize:13, color:fgMuted, marginBottom:"1.5rem" }}>Click any project card to view full details.</p>
          <div style={{ display:"flex", gap:8, marginBottom:"1.5rem", flexWrap:"wrap" }}>
            {CATS.map(c => (
              <button key={c} onClick={() => setCat(c)}
                style={{ padding:"6px 16px", borderRadius:20, fontSize:12, cursor:"pointer", border:`0.5px solid ${cat===c ? "#534AB7" : border}`, background:cat===c ? "#534AB7" : "transparent", color:cat===c ? "#EEEDFE" : fgMuted, fontFamily:"var(--font-sans)", fontWeight:cat===c ? 500 : 400, transition:"all 0.15s" }}>
                {CAT_LABELS[c]}
              </button>
            ))}
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(255px,1fr))", gap:14 }}>
            {filtered.map(p => (
              <div key={p.id} onClick={() => setActiveProj(p)}
                style={{ border:`0.5px solid ${border}`, borderRadius:12, overflow:"hidden", background:cardBg, cursor:"pointer", transition:"transform 0.15s, box-shadow 0.15s" }}
                onMouseEnter={e => { e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow=`0 8px 24px rgba(0,0,0,${dark?0.3:0.08})`; }}
                onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)";   e.currentTarget.style.boxShadow="none"; }}>
                <div style={{ height:100, background:p.color, overflow:"hidden", position:"relative" }}>
                  <img src={p.images[0]} alt={p.title} onError={e => { e.target.style.display="none"; }}
                    style={{ width:"100%", height:"100%", objectFit:"cover", opacity:0.9 }} />
                  <div style={{ position:"absolute", top:8, right:10, fontSize:26 }}>{p.emoji}</div>
                </div>
                <div style={{ padding:"1rem" }}>
                  <h3 style={{ fontSize:14, fontWeight:600, marginBottom:4, color:fg }}>{p.title}</h3>
                  <p style={{ fontSize:12, color:fgMuted, marginBottom:10, lineHeight:1.5 }}>{p.tagline}</p>
                  <div>{p.tags.slice(0,2).map(t => <Tag key={t} label={t} bg={p.color} color={p.accent} />)}</div>
                  <div style={{ marginTop:10, fontSize:12, color:p.accent, fontWeight:600 }}>View project →</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" style={{ padding:"2.5rem 0", borderTop:`0.5px solid ${border}` }}>
          <h2 style={{ fontSize:18, fontWeight:600, marginBottom:4, color:fg }}>Gallery</h2>
          <p style={{ fontSize:13, color:fgMuted, marginBottom:"1.5rem" }}>A visual record of work across industries. Click any image to expand.</p>
          <div style={{ display:"flex", gap:8, marginBottom:"1.5rem", flexWrap:"wrap" }}>
            {GALLERY_CATS.map(c => (
              <button key={c} onClick={() => setGalCat(c)}
                style={{ padding:"6px 16px", borderRadius:20, fontSize:12, cursor:"pointer", border:`0.5px solid ${galCat===c ? "#534AB7" : border}`, background:galCat===c ? "#534AB7" : "transparent", color:galCat===c ? "#EEEDFE" : fgMuted, fontFamily:"var(--font-sans)", fontWeight:galCat===c ? 500 : 400, transition:"all 0.15s" }}>
                {GALLERY_CAT_LABELS[c]}
              </button>
            ))}
          </div>
          <div style={{ columns:"3 200px", gap:12 }}>
            {galFiltered.map((item, i) => (
              <div key={i} onClick={() => setLightbox(item)}
                style={{ breakInside:"avoid", marginBottom:12, borderRadius:10, overflow:"hidden", cursor:"pointer", position:"relative", border:`0.5px solid ${border}` }}
                onMouseEnter={e => e.currentTarget.querySelector(".gal-overlay").style.opacity="1"}
                onMouseLeave={e => e.currentTarget.querySelector(".gal-overlay").style.opacity="0"}>
                <img src={item.src} alt={item.label}
                  style={{ width:"100%", display:"block", borderRadius:10 }}
                  onError={e => { e.target.parentElement.style.display="none"; }} />
                <div className="gal-overlay" style={{ position:"absolute", inset:0, background:"rgba(0,0,0,0.45)", display:"flex", alignItems:"flex-end", padding:"10px", borderRadius:10, opacity:0, transition:"opacity 0.2s" }}>
                  <span style={{ color:"#fff", fontSize:12, fontWeight:500 }}>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BLOG */}
        <section id="blog" style={{ padding:"2.5rem 0", borderTop:`0.5px solid ${border}` }}>
          <h2 style={{ fontSize:18, fontWeight:600, marginBottom:4, color:fg }}>Blog</h2>
          <p style={{ fontSize:13, color:fgMuted, marginBottom:"1.5rem" }}>Thoughts on tech, construction, business, and life across industries.</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:12 }}>
            {BLOG_POSTS.map(post => (
              <div key={post.id} onClick={() => setActiveBlog(post)}
                style={{ border:`0.5px solid ${border}`, borderRadius:12, padding:"1.25rem", background:cardBg, cursor:"pointer", transition:"transform 0.15s, box-shadow 0.15s" }}
                onMouseEnter={e => { e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow=`0 8px 24px rgba(0,0,0,${dark?0.3:0.08})`; }}
                onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)";   e.currentTarget.style.boxShadow="none"; }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
                  <span style={{ background:CAT_COLORS[post.category]||"#EEEDFE", color:CAT_TEXT[post.category]||"#3C3489", fontSize:11, padding:"2px 8px", borderRadius:20, fontWeight:500 }}>{post.category}</span>
                  <span style={{ fontSize:11, color:fgMuted }}>{post.readTime}</span>
                </div>
                <h3 style={{ fontSize:14, fontWeight:600, marginBottom:6, lineHeight:1.45, color:fg }}>{post.title}</h3>
                <p style={{ fontSize:12, color:fgMuted, lineHeight:1.65, marginBottom:10 }}>{post.excerpt.substring(0,90)}…</p>
                <div style={{ fontSize:12, color:"#7F77DD", fontWeight:600 }}>Read more → <span style={{ color:fgMuted, fontWeight:400 }}>{post.date}</span></div>
              </div>
            ))}
          </div>
        </section>

        {/* STARTUPS */}
        <section id="startups" style={{ padding:"2.5rem 0", borderTop:`0.5px solid ${border}` }}>
          <h2 style={{ fontSize:18, fontWeight:600, marginBottom:4, color:fg }}>Startups & ventures</h2>
          <p style={{ fontSize:13, color:fgMuted, marginBottom:"1.5rem" }}>Building from the ground up. Click to learn more.</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))", gap:12 }}>
            {STARTUPS.map(s => (
              <div key={s.id} onClick={() => setActiveStartup(s)}
                style={{ background:surfBg, borderRadius:12, padding:"1.25rem", border:`0.5px solid ${border}`, cursor:"pointer", transition:"all 0.15s" }}
                onMouseEnter={e => { e.currentTarget.style.background=cardBg; e.currentTarget.style.boxShadow=`0 4px 16px rgba(0,0,0,${dark?0.25:0.06})`; }}
                onMouseLeave={e => { e.currentTarget.style.background=surfBg;  e.currentTarget.style.boxShadow="none"; }}>
                <div style={{ width:44, height:44, borderRadius:10, background:s.color, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, marginBottom:12 }}>{s.emoji}</div>
                <h3 style={{ fontSize:14, fontWeight:600, marginBottom:6, color:fg }}>{s.title}</h3>
                <p style={{ fontSize:12, color:fgMuted, lineHeight:1.6, marginBottom:10 }}>{s.desc.substring(0,80)}…</p>
                <span style={{ fontSize:12, color:s.accent, fontWeight:600 }}>Learn more →</span>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" style={{ padding:"2.5rem 0", borderTop:`0.5px solid ${border}` }}>
          <h2 style={{ fontSize:18, fontWeight:600, marginBottom:"1.75rem", color:fg }}>Work experience</h2>
          {[
            { dot:"#7F77DD", title:"Marketing & Traffic Conversion Officer",          sub:"Woodlain Digital · woodlaine.com · Cyprus · Current",                                     link:"https://woodlaine.com/",          desc:"Leading digital marketing campaigns, traffic acquisition, and conversion rate optimization for international clients." },
            { dot:"#2B6CB0", title:"Cybersecurity & Digital Operations",               sub:"Enhalo EN · enhalo.co · South Africa",                                                    link:"https://enhalo.co/",              desc:"Worked with Enhalo EN on cybersecurity and digital operations, supporting their defense-focused services across international markets." },
            { dot:"#1D9E75", title:"Business & Marketing Manager",                     sub:"NEVAGs Building Contractors · Malawi",                                                    link:null,                              desc:"Managed business development, client relations, brand strategy, and marketing operations." },
            { dot:"#378ADD", title:"Founder / Platform Lead — CapeTrip",               sub:"capetrip.com",                                                                           link:"https://capetrip.com",            desc:"Building and growing a commuting and logistics platform for seamless movement and tour experiences." },
            { dot:"#639922", title:"Software Engineer",                                sub:"Association for Education Transformation (ASSET) · asset.org.za · Malawi",               link:"https://www.asset.org.za/",       desc:"Built and maintained software systems driving edtech and STEM initiatives across Malawi." },
            { dot:"#805AD5", title:"Junior Officer",                                   sub:"Assemblies of God Care · Malawi",                                                         link:"https://malawiassembliesofgod.org/ag-cares/", desc:"Served as Junior Officer supporting community care programs and organizational operations under the Assemblies of God Care initiative in Malawi." },
            { dot:"#993C1D", title:"Founder — Effort Construction",                    sub:"Software Dev · Construction · Digital Marketing · Malawi, SA & Cyprus",                  link:null,                              desc:"Multi-service firm spanning software development, construction (planning, renovation, building, consultation), and digital marketing." },
            { dot:"#D85A30", title:"Construction Project Designer & Manager",          sub:"Blantyre & Chileka, Malawi",                                                             link:null,                              desc:"Delivered residential and commercial projects — including TNM Malawi, National Bank of Malawi, and Central Region Water Board." },
          ].map((e, i) => (
            <div key={i} style={{ display:"flex", gap:16, padding:"1rem 1.25rem", border:`0.5px solid ${border}`, borderRadius:12, marginBottom:10, background:cardBg }}>
              <div style={{ width:10, height:10, minWidth:10, borderRadius:"50%", background:e.dot, marginTop:5 }} />
              <div style={{ flex:1 }}>
                <h3 style={{ fontSize:14, fontWeight:600, marginBottom:4, color:fg }}>{e.title}</h3>
                <p style={{ fontSize:13, color:fgMuted, lineHeight:1.6, marginBottom:5 }}>{e.desc}</p>
                <div style={{ display:"flex", alignItems:"center", gap:8, flexWrap:"wrap" }}>
                  <span style={{ fontSize:11, color:e.dot, fontWeight:500 }}>{e.sub}</span>
                  {e.link && (
                    <a href={e.link} target="_blank" rel="noreferrer" onClick={ev => ev.stopPropagation()}
                      style={{ fontSize:11, color:e.dot, textDecoration:"underline", opacity:0.8 }}>
                      ↗ Visit
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ padding:"2.5rem 0", borderTop:`0.5px solid ${border}` }}>
          <h2 style={{ fontSize:18, fontWeight:600, marginBottom:"1.75rem", color:fg }}>Get in touch</h2>
          <div className="two-col" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"2.5rem" }}>
            <div>
              <p style={{ fontSize:14, color:fgMuted, lineHeight:1.8, marginBottom:"1.5rem" }}>Whether you have a project, a collaboration, investment opportunity, or just want to connect — reach out via any channel below.</p>
              {[
                ["📧", EMAIL_PRIMARY,                   `mailto:${EMAIL_PRIMARY}`],
                ["💼", "LinkedIn",                      LINKEDIN],
                ["✖",  "@chancytausi",                 "https://x.com/chancytausi"],
                ["💬", "WhatsApp: +27 76 998 4060",    WA],
                ["📍", "Malawi · South Africa · Cyprus","#"],
              ].map(([icon, label, href]) => (
                <a key={label} href={href} target={href==="#" ? "_self" : "_blank"} rel="noreferrer"
                  style={{ display:"flex", alignItems:"center", gap:10, fontSize:13, marginBottom:12, color:fgMuted, textDecoration:"none", transition:"color 0.15s" }}
                  onMouseEnter={e => e.currentTarget.style.color=fg}
                  onMouseLeave={e => e.currentTarget.style.color=fgMuted}>
                  <span style={{ fontSize:16, width:20, textAlign:"center" }}>{icon}</span>
                  {label}
                </a>
              ))}
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {[
                { val:formName,    set:setFormName,    ph:"Your name" },
                { val:formEmail,   set:setFormEmail,   ph:"Email address", type:"email" },
                { val:formSubject, set:setFormSubject, ph:"Subject" },
              ].map(({ val, set, ph, type="text" }) => (
                <input key={ph} type={type} value={val} onChange={e => set(e.target.value)} placeholder={ph}
                  style={{ fontSize:13, padding:"11px 12px", border:`0.5px solid ${border}`, borderRadius:8, background:inputBg, color:fg, fontFamily:"var(--font-sans)", outline:"none" }} />
              ))}
              <textarea value={formMsg} onChange={e => setFormMsg(e.target.value)} placeholder="Your message..." rows={4}
                style={{ fontSize:13, padding:"11px 12px", border:`0.5px solid ${border}`, borderRadius:8, background:inputBg, color:fg, fontFamily:"var(--font-sans)", resize:"vertical", outline:"none" }} />
              <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
                <a href={`${WA}?text=${encodeURIComponent(waMsg)}`} target="_blank" rel="noreferrer"
                  style={{ padding:"11px 22px", background:"#25D366", color:"#fff", borderRadius:8, fontSize:14, textDecoration:"none", fontWeight:500 }}>
                  💬 Send via WhatsApp
                </a>
                <a href={mailHref}
                  style={{ padding:"11px 22px", background:"transparent", color:fg, border:`0.5px solid ${border}`, borderRadius:8, fontSize:14, textDecoration:"none" }}>
                  📧 Send via Email
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer style={{ padding:"2rem 0", borderTop:`0.5px solid ${border}`, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
          <p style={{ fontSize:12, color:fgMuted }}>© 2026 Chancy Tsonga · Malawi · South Africa · Cyprus</p>
          <div style={{ display:"flex", gap:16, flexWrap:"wrap" }}>
            {[["CapeTrip","https://capetrip.com"],["LinkedIn",LINKEDIN],["X","https://x.com/chancytausi"],["WhatsApp",WA]].map(([l,h]) => (
              <a key={l} href={h} target="_blank" rel="noreferrer" style={{ fontSize:12, color:fgMuted, textDecoration:"none" }}>{l}</a>
            ))}
          </div>
        </footer>
      </div>

      <style>{`
        .desk-nav { display: flex   !important; }
        .ham-btn  { display: none   !important; }
        @media (max-width: 640px) {
          .desk-nav { display: none  !important; }
          .ham-btn  { display: flex  !important; }
          .two-col  { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
