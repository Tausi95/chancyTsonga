import { useState, useEffect } from "react";

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
    images:["/images/chileka_view1.jpg","/images/chileka_texture.jpg","/images/chileka_front.jpg","/images/chileka1.jpg","/images/chileka2.jpg","/images/house_gate.jpg"],
  },
  {
    id:"balaka", cat:"construction", emoji:"🏛️", color:"#FAECE7", accent:"#993C1D",
    title:"Residential House — Balaka", tagline:"Balaka, Malawi",
    tags:["Residential","Design","Construction"],
    desc:"Design and construction management of a grand residential property in Balaka, Malawi. Features decorative concrete columns, a spacious veranda, ornate textured wall finishes, and a multi-section tiled roof — delivered end-to-end from structural planning to completion.",
    highlights:["Decorative concrete columns","Ornate textured wall finishes","Large veranda & verandah design","Multi-section tiled roof","End-to-end project management"],
    images:["/images/balaka_columns.jpg","/images/balaka_front.jpg","/images/balaka_side.jpg"],
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
  { id:"effort",  emoji:"⚡", color:"#FAECE7", accent:"#993C1D", title:"Effort Construction",  desc:"A multi-service firm spanning software development, construction (planning, renovation, building, consultation), and digital marketing — operating across Malawi, South Africa, and Cyprus.", tags:["Founder","Construction","Software Dev","Digital Marketing"] },
  { id:"mizu",    emoji:"💰", color:"#EAF3DE", accent:"#3B6D11", title:"Mizu-Microbank",       desc:"A microfinance and community banking platform bringing accessible financial services to underserved communities.", tags:["Fintech","Microfinance"] },
  { id:"stemlink",emoji:"📚", color:"#E6F1FB", accent:"#185FA5", title:"STEM-LINK",            desc:"Connecting students, educators, and STEM resources across Africa — bridging the education gap through technology and mentorship.", tags:["EdTech","STEM"] },
];

const BLOG_POSTS = [
  { id:1, title:"Why I work across 6 industries — and why it works",                   date:"Apr 2026", category:"Lifestyle",    excerpt:"Most people pick a lane. I built a highway. Here's the mindset and systems that let me operate across tech, construction, marketing, and more without burning out.",                                                     readTime:"5 min read" },
  { id:2, title:"Building CapeTrip: logistics lessons from the ground up",              date:"Mar 2026", category:"Tech",         excerpt:"What I learned building a commuting platform in Malawi — from user research on the streets to scaling a transport product.",                                                                                       readTime:"7 min read" },
  { id:3, title:"Construction meets code: why every builder should learn tech",         date:"Feb 2026", category:"Construction", excerpt:"The surprising overlap between software engineering and construction project management — and how knowing both makes you unstoppable.",                                                                            readTime:"6 min read" },
  { id:4, title:"Community savings & fintech: the Mizpay origin story",                 date:"Jan 2026", category:"Fintech",      excerpt:"How watching communities pool money informally inspired me to build a digital platform for group savings across Africa.",                                                                                       readTime:"5 min read" },
  { id:5, title:"Digital marketing from Cyprus to Malawi: what changes, what doesn't", date:"Dec 2025", category:"Marketing",    excerpt:"Working remotely across continents taught me that great marketing is about human psychology — not geography.",                                                                                                  readTime:"4 min read" },
  { id:6, title:"STEM education in Malawi: the gap and how we're closing it",           date:"Nov 2025", category:"Education",    excerpt:"A candid look at the state of STEM education in Malawi and what the Association for Education Transformation is doing about it.",                                                                              readTime:"6 min read" },
];

const GALLERY = [
  { src:"/images/profile.png",         label:"Profile",                cat:"profile" },
  { src:"/images/pr.jpg",              label:"Professional",           cat:"profile" },
  { src:"/images/mizpay.jpg",          label:"Mizpay App",             cat:"tech" },
  { src:"/images/mizupay.jpg",         label:"Mizpay UI",              cat:"tech" },
  { src:"/images/mizumicro.jpg",       label:"Mizu Microbank",         cat:"tech" },
  { src:"/images/mizum.jpg",           label:"Mizu Platform",          cat:"tech" },
  { src:"/images/mocks.png",           label:"App Mockups",            cat:"tech" },
  { src:"/images/aet1.jpg",            label:"Working with kids — ASSET", cat:"edu" },
  { src:"/images/namiwawa.png",         label:"Namiwawa House",              cat:"construction" },
  { src:"/images/balaka_columns.jpg",   label:"Balaka — Columns & Veranda",  cat:"construction" },
  { src:"/images/balaka_front.jpg",     label:"Balaka — Front Elevation",    cat:"construction" },
  { src:"/images/balaka_side.jpg",      label:"Balaka — Side View",          cat:"construction" },
  { src:"/images/machinjiri.png",       label:"Machinjiri Complex",          cat:"construction" },
  { src:"/images/chileka1.jpg",        label:"Chileka House",          cat:"construction" },
  { src:"/images/chileka2.jpg",        label:"Chileka Build",          cat:"construction" },
  { src:"/images/chileka_view1.jpg",   label:"Chileka — Site View",    cat:"construction" },
  { src:"/images/chileka_texture.jpg", label:"Chileka — Wall Finish",  cat:"construction" },
  { src:"/images/chileka_front.jpg",   label:"Chileka — Front",        cat:"construction" },
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

const GALLERY_CATS       = ["all","tech","construction","marketing","edu","profile"];
const GALLERY_CAT_LABELS = { all:"All", tech:"Tech", construction:"Construction", marketing:"Marketing", edu:"Education", profile:"Profile" };
const CATS               = ["all","tech","construction","marketing","edu"];
const CAT_LABELS         = { all:"All", tech:"Tech & Fintech", construction:"Construction", marketing:"Marketing", edu:"Education" };
const CAT_COLORS         = { Tech:"#EEEDFE", Construction:"#FAECE7", Fintech:"#EAF3DE", Marketing:"#FBEAF0", Education:"#E6F1FB", Lifestyle:"#E1F5EE" };
const CAT_TEXT           = { Tech:"#3C3489", Construction:"#993C1D", Fintech:"#3B6D11", Marketing:"#993556", Education:"#0C447C", Lifestyle:"#0F6E56" };

const WA            = "https://wa.me/277699840601";
const EMAIL_PRIMARY = "chancy.tsonga@yahoo.com";
const LINKEDIN      = "https://linkedin.com/in/chancytsonga/";

function Tag({ label, bg, color }) {
  return (
    <span style={{ display:"inline-block", fontSize:11, padding:"3px 10px", borderRadius:20, background:bg||"#EEEDFE", color:color||"#3C3489", marginRight:4, marginBottom:4, fontWeight:600 }}>
      {label}
    </span>
  );
}

function SectionHeading({ title, sub, fg, fgMuted }) {
  return (
    <div style={{ marginBottom:"2rem" }}>
      <h2 style={{ fontSize:26, fontWeight:700, color:fg, letterSpacing:-0.8, marginBottom:6, lineHeight:1.1 }}>
        <span style={{ color:"#7F77DD" }}>— </span>{title}
      </h2>
      {sub && <p style={{ fontSize:14, color:fgMuted, lineHeight:1.7 }}>{sub}</p>}
    </div>
  );
}

function ProfileAvatar({ size=80, radius="50%", objectPos="center top" }) {
  const [err, setErr] = useState(false);
  if (err) {
    return (
      <div style={{ width:size, height:size, borderRadius:radius, background:"linear-gradient(135deg,#EEEDFE,#AFA9EC)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:size*0.35, fontWeight:700, color:"#534AB7", flexShrink:0 }}>CT</div>
    );
  }
  return (
    <img src="/images/profile.png" alt="Chancy Tsonga" onError={() => setErr(true)}
      style={{ width:size, height:size, borderRadius:radius, objectFit:"cover", objectPosition:objectPos, display:"block", flexShrink:0 }} />
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
      style={{ width:"100%", height:200, objectFit:"cover", borderRadius:10, display:"block" }} />
  );
}

function BackBtn({ onBack, label="← Back", accent="#534AB7" }) {
  return (
    <button onClick={onBack}
      style={{ display:"inline-flex", alignItems:"center", gap:6, background:"transparent", border:"0.5px solid rgba(0,0,0,0.12)", borderRadius:8, padding:"8px 16px", cursor:"pointer", fontSize:13, color:"#666", fontFamily:"var(--font-sans)", marginBottom:"2rem" }}>
      {label}
    </button>
  );
}

function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const item = items[index];
  useEffect(() => {
    const fn = e => {
      if (e.key === "ArrowLeft")  onPrev();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "Escape")     onClose();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onPrev, onNext, onClose]);

  return (
    <div onClick={onClose}
      style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.96)", zIndex:2000, display:"flex", alignItems:"center", justifyContent:"center" }}>
      {/* prev */}
      <button onClick={e => { e.stopPropagation(); onPrev(); }}
        style={{ position:"fixed", left:20, top:"50%", transform:"translateY(-50%)", background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.15)", color:"#fff", fontSize:22, width:48, height:48, borderRadius:"50%", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", backdropFilter:"blur(8px)", transition:"background 0.2s", opacity:index===0?0.3:1 }}>
        ‹
      </button>
      {/* image */}
      <div onClick={e => e.stopPropagation()} style={{ maxWidth:"88vw", maxHeight:"88vh", position:"relative", display:"flex", flexDirection:"column", alignItems:"center", gap:14 }}>
        <img src={item.src} alt={item.label}
          style={{ maxWidth:"88vw", maxHeight:"80vh", objectFit:"contain", borderRadius:14, display:"block", boxShadow:"0 32px 80px rgba(0,0,0,0.6)" }} />
        <div style={{ display:"flex", alignItems:"center", gap:12 }}>
          <span style={{ color:"rgba(255,255,255,0.55)", fontSize:12 }}>{index + 1} / {items.length}</span>
          <span style={{ color:"rgba(255,255,255,0.8)", fontSize:13, fontWeight:600 }}>{item.label}</span>
        </div>
      </div>
      {/* next */}
      <button onClick={e => { e.stopPropagation(); onNext(); }}
        style={{ position:"fixed", right:20, top:"50%", transform:"translateY(-50%)", background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.15)", color:"#fff", fontSize:22, width:48, height:48, borderRadius:"50%", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", backdropFilter:"blur(8px)", transition:"background 0.2s", opacity:index===items.length-1?0.3:1 }}>
        ›
      </button>
      {/* close */}
      <button onClick={onClose}
        style={{ position:"fixed", top:20, right:20, background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.15)", color:"#fff", fontSize:18, width:40, height:40, borderRadius:"50%", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", backdropFilter:"blur(8px)" }}>
        ✕
      </button>
    </div>
  );
}

function ProjectDetail({ proj, onBack }) {
  return (
    <div style={{ maxWidth:720, margin:"0 auto", padding:"2rem 1rem" }}>
      <BackBtn onBack={onBack} label="← Back to portfolio" />
      <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:"1.75rem" }}>
        <div style={{ width:60, height:60, borderRadius:16, background:proj.color, display:"flex", alignItems:"center", justifyContent:"center", fontSize:28, flexShrink:0 }}>{proj.emoji}</div>
        <div>
          <h1 style={{ fontSize:24, fontWeight:700, marginBottom:4 }}>{proj.title}</h1>
          <p style={{ fontSize:13, color:"#666" }}>{proj.tagline}</p>
        </div>
      </div>
      <div style={{ marginBottom:"1.5rem" }}>{proj.tags.map(t => <Tag key={t} label={t} bg={proj.color} color={proj.accent} />)}</div>
      <p style={{ fontSize:15, lineHeight:1.85, color:"#555", marginBottom:"2rem" }}>{proj.desc}</p>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))", gap:12, marginBottom:"2rem" }}>
        {proj.images.map(src => <ProjectImg key={src} src={src} alt={proj.title} color={proj.color} emoji={proj.emoji} />)}
      </div>
      <div style={{ background:"#f7f7f5", borderRadius:14, padding:"1.5rem", marginBottom:"2rem" }}>
        <h3 style={{ fontSize:14, fontWeight:700, marginBottom:14 }}>Key highlights</h3>
        {proj.highlights.map((h, i) => (
          <div key={i} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}>
            <div style={{ width:7, height:7, borderRadius:"50%", background:proj.accent, flexShrink:0 }} />
            <span style={{ fontSize:13, color:"#555" }}>{h}</span>
          </div>
        ))}
      </div>
      <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
        {proj.link && (
          <a href={proj.link} target="_blank" rel="noreferrer"
            style={{ display:"inline-flex", alignItems:"center", gap:6, background:proj.accent, color:"#fff", padding:"11px 22px", borderRadius:8, fontSize:14, textDecoration:"none", fontWeight:600 }}>
            Visit {proj.title} ↗
          </a>
        )}
        <a href={WA} target="_blank" rel="noreferrer"
          style={{ display:"inline-flex", alignItems:"center", gap:6, background:"#25D366", color:"#fff", padding:"11px 22px", borderRadius:8, fontSize:14, textDecoration:"none", fontWeight:600 }}>
          💬 Discuss this project
        </a>
      </div>
    </div>
  );
}

function BlogPost({ post, onBack }) {
  return (
    <div style={{ maxWidth:680, margin:"0 auto", padding:"2rem 1rem" }}>
      <BackBtn onBack={onBack} label="← Back to blog" />
      <div style={{ marginBottom:16, display:"flex", alignItems:"center", gap:10, flexWrap:"wrap" }}>
        <span style={{ background:CAT_COLORS[post.category]||"#EEEDFE", color:CAT_TEXT[post.category]||"#3C3489", fontSize:11, padding:"3px 10px", borderRadius:20, fontWeight:600 }}>{post.category}</span>
        <span style={{ fontSize:12, color:"#888" }}>{post.date} · {post.readTime}</span>
      </div>
      <h1 style={{ fontSize:26, fontWeight:700, lineHeight:1.25, marginBottom:"1.25rem" }}>{post.title}</h1>
      <p style={{ fontSize:15, color:"#555", lineHeight:1.85, marginBottom:"1.5rem" }}>{post.excerpt}</p>
      <div style={{ background:"#f7f7f5", borderRadius:14, padding:"1.5rem" }}>
        <p style={{ fontSize:13, color:"#666", lineHeight:1.7 }}>Full article coming soon. Want to be notified when it's published?</p>
        <a href={WA} target="_blank" rel="noreferrer"
          style={{ display:"inline-flex", alignItems:"center", gap:6, marginTop:14, background:"#25D366", color:"#fff", padding:"10px 20px", borderRadius:8, fontSize:13, textDecoration:"none", fontWeight:600 }}>
          💬 Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}

function StartupDetail({ s, onBack }) {
  return (
    <div style={{ maxWidth:720, margin:"0 auto", padding:"2rem 1rem" }}>
      <BackBtn onBack={onBack} />
      <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:"1.75rem" }}>
        <div style={{ width:60, height:60, borderRadius:16, background:s.color, display:"flex", alignItems:"center", justifyContent:"center", fontSize:28, flexShrink:0 }}>{s.emoji}</div>
        <div>
          <h1 style={{ fontSize:24, fontWeight:700 }}>{s.title}</h1>
          <p style={{ fontSize:12, color:"#888", marginTop:2 }}>Startup venture</p>
        </div>
      </div>
      <div style={{ marginBottom:"1rem" }}>{s.tags.map(t => <Tag key={t} label={t} bg={s.color} color={s.accent} />)}</div>
      <p style={{ fontSize:15, lineHeight:1.85, color:"#555", margin:"1.5rem 0" }}>{s.desc}</p>
      <div style={{ background:"#f7f7f5", borderRadius:14, padding:"1.5rem" }}>
        <p style={{ fontSize:13, color:"#666" }}>Currently in active development. Interested in collaborating or investing?</p>
        <a href={WA} target="_blank" rel="noreferrer"
          style={{ display:"inline-flex", alignItems:"center", gap:6, marginTop:14, background:s.accent, color:"#fff", padding:"10px 20px", borderRadius:8, fontSize:13, textDecoration:"none", fontWeight:600 }}>
          💬 Get in touch on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default function App() {
  const [dark, setDark]                   = useState(false);
  const [scrolled, setScrolled]           = useState(false);
  const [menuOpen, setMenuOpen]           = useState(false);
  const [activeProj, setActiveProj]       = useState(null);
  const [activeStartup, setActiveStartup] = useState(null);
  const [activeBlog, setActiveBlog]       = useState(null);
  const [cat, setCat]                     = useState("all");
  const [galCat, setGalCat]               = useState("all");
  const [lightboxIdx, setLightboxIdx]     = useState(null);
  const [formName, setFormName]           = useState("");
  const [formEmail, setFormEmail]         = useState("");
  const [formSubject, setFormSubject]     = useState("");
  const [formMsg, setFormMsg]             = useState("");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive:true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const filtered    = cat    === "all" ? PROJECTS : PROJECTS.filter(p => p.cat === cat);
  const galFiltered = galCat === "all" ? GALLERY   : GALLERY.filter(g => g.cat === galCat);

  const scrollTo = id => {
    setMenuOpen(false);
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior:"smooth" }), 50);
  };

  const bg      = dark ? "#0f0f0f"                 : "#ffffff";
  const fg      = dark ? "#ededed"                 : "#111111";
  const fgMuted = dark ? "#888888"                 : "#666666";
  const border  = dark ? "rgba(255,255,255,0.09)"  : "rgba(0,0,0,0.08)";
  const cardBg  = dark ? "#1a1a1a"                 : "#ffffff";
  const surfBg  = dark ? "#161616"                 : "#f8f8f7";
  const inputBg = dark ? "#1e1e1e"                 : "#ffffff";

  const wrap  = { background:bg, color:fg, minHeight:"100vh", fontFamily:"var(--font-sans)", transition:"background 0.3s,color 0.3s" };
  const inner = { maxWidth:980, margin:"0 auto", padding:"0 1.5rem" };

  const waMsg    = `Hi Chancy, I'm ${formName||"reaching out"}${formSubject ? ` — ${formSubject}` : ""}. ${formMsg}`.trim();
  const mailHref = `mailto:${EMAIL_PRIMARY}?subject=${encodeURIComponent(formSubject||`Message from ${formName||"website"}`)}&body=${encodeURIComponent(formMsg)}`;

  if (activeProj)    return <div style={wrap}><div style={inner}><ProjectDetail proj={activeProj}    onBack={() => setActiveProj(null)}    /></div></div>;
  if (activeStartup) return <div style={wrap}><div style={inner}><StartupDetail s={activeStartup}    onBack={() => setActiveStartup(null)} /></div></div>;
  if (activeBlog)    return <div style={wrap}><div style={inner}><BlogPost       post={activeBlog}    onBack={() => setActiveBlog(null)}    /></div></div>;

  const filterBtn = (active, onClick, label) => (
    <button key={label} onClick={onClick}
      style={{ padding:"7px 18px", borderRadius:20, fontSize:12, cursor:"pointer", fontFamily:"var(--font-sans)", fontWeight:active ? 600 : 400, transition:"all 0.15s", border:`0.5px solid ${active ? "#534AB7" : border}`, background:active ? "#534AB7" : "transparent", color:active ? "#fff" : fgMuted }}>
      {label}
    </button>
  );

  return (
    <div style={wrap}>
      {lightboxIdx !== null && (
        <Lightbox
          items={galFiltered}
          index={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
          onPrev={() => setLightboxIdx(i => Math.max(0, i - 1))}
          onNext={() => setLightboxIdx(i => Math.min(galFiltered.length - 1, i + 1))}
        />
      )}

      {/* FLOATING WHATSAPP */}
      <a href={WA} target="_blank" rel="noreferrer" title="Chat on WhatsApp" className="wa-float"
        style={{ position:"fixed", bottom:28, right:28, width:56, height:56, background:"#25D366", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, textDecoration:"none", boxShadow:"0 4px 20px rgba(37,211,102,0.45)", zIndex:999 }}>
        💬
      </a>

      {/* STICKY NAV */}
      <nav style={{ position:"sticky", top:0, zIndex:100, background:scrolled ? (dark?"rgba(15,15,15,0.92)":"rgba(255,255,255,0.92)") : "transparent", backdropFilter:scrolled?"blur(20px) saturate(1.8)":"none", WebkitBackdropFilter:scrolled?"blur(20px) saturate(1.8)":"none", borderBottom:`0.5px solid ${scrolled?border:"transparent"}`, transition:"all 0.3s" }}>
        <div style={{ ...inner, display:"flex", justifyContent:"space-between", alignItems:"center", padding:"1rem 1.5rem" }}>
          <div style={{ fontSize:20, fontWeight:700, cursor:"pointer", color:fg, letterSpacing:-0.5 }} onClick={() => scrollTo("hero")}>
            Chancy<span style={{ color:"#7F77DD" }}>.</span>
          </div>
          <div className="desk-nav" style={{ display:"flex", gap:24, alignItems:"center" }}>
            {["About","Projects","Gallery","Blog","Startups","Experience","Contact"].map(l => (
              <span key={l} onClick={() => scrollTo(l.toLowerCase())} className="nav-lnk"
                style={{ fontSize:13, color:fgMuted, cursor:"pointer", fontWeight:500, transition:"color 0.15s" }}>
                {l}
              </span>
            ))}
            <button onClick={() => setDark(d => !d)}
              style={{ background:"transparent", border:`0.5px solid ${border}`, borderRadius:20, padding:"5px 14px", cursor:"pointer", fontSize:12, color:fgMuted, fontFamily:"var(--font-sans)", transition:"border-color 0.15s" }}>
              {dark ? "☀ Light" : "🌙 Dark"}
            </button>
          </div>
          <button className="ham-btn" onClick={() => setMenuOpen(m => !m)}
            style={{ background:"transparent", border:`0.5px solid ${border}`, borderRadius:8, padding:"7px 11px", fontSize:18, cursor:"pointer", color:fg, display:"none" }}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div style={{ position:"fixed", inset:0, top:56, background:dark?"rgba(15,15,15,0.97)":"rgba(255,255,255,0.97)", backdropFilter:"blur(20px)", zIndex:99, display:"flex", flexDirection:"column", padding:"2rem 1.5rem", gap:0 }}>
          {["About","Projects","Gallery","Blog","Startups","Experience","Contact"].map(l => (
            <span key={l} onClick={() => scrollTo(l.toLowerCase())}
              style={{ fontSize:20, fontWeight:600, color:fg, cursor:"pointer", borderBottom:`0.5px solid ${border}`, padding:"18px 0" }}>
              {l}
            </span>
          ))}
          <button onClick={() => { setDark(d => !d); setMenuOpen(false); }}
            style={{ background:"transparent", border:`0.5px solid ${border}`, borderRadius:10, padding:"14px", cursor:"pointer", fontSize:14, color:fgMuted, fontFamily:"var(--font-sans)", textAlign:"left", marginTop:20 }}>
            {dark ? "☀ Switch to light mode" : "🌙 Switch to dark mode"}
          </button>
        </div>
      )}

      <div style={inner}>

        {/* ── HERO ── */}
        <section id="hero" style={{ padding:"5rem 0 4rem" }}>
          <div className="hero-grid" style={{ display:"grid", gridTemplateColumns:"1fr auto", gap:"4rem", alignItems:"center" }}>
            <div>
              <div style={{ display:"inline-flex", alignItems:"center", gap:7, background:"#EEEDFE", color:"#3C3489", fontSize:11, padding:"5px 14px", borderRadius:20, marginBottom:"1.75rem", border:"0.5px solid #AFA9EC", fontWeight:600, letterSpacing:0.2 }}>
                <span style={{ width:7, height:7, borderRadius:"50%", background:"#534AB7", display:"inline-block" }} />
                Open to collaborations
              </div>
              <h1 style={{ fontSize:"clamp(32px,5vw,50px)", fontWeight:800, lineHeight:1.06, letterSpacing:-2.5, marginBottom:"1.25rem", color:fg }}>
                Tech. Design. Build.<br />
                <span style={{ color:"#7F77DD" }}>Across every industry.</span>
              </h1>
              <p style={{ fontSize:16, color:fgMuted, lineHeight:1.85, marginBottom:"2.25rem", maxWidth:500 }}>
                I'm Chancy Tsonga — a multi-disciplinary professional working across technology, construction, marketing, fintech, and education. Based across Malawi, South Africa, and Cyprus.
              </p>
              <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
                <button onClick={() => scrollTo("projects")} className="btn-primary"
                  style={{ padding:"13px 28px", background:"#534AB7", color:"#fff", border:"none", borderRadius:10, fontSize:14, cursor:"pointer", fontFamily:"var(--font-sans)", fontWeight:700, transition:"all 0.2s" }}>
                  View my work
                </button>
                <a href={WA} target="_blank" rel="noreferrer"
                  style={{ padding:"13px 28px", background:"#25D366", color:"#fff", borderRadius:10, fontSize:14, textDecoration:"none", fontWeight:700, display:"inline-flex", alignItems:"center", gap:6 }}>
                  💬 WhatsApp me
                </a>
                <button onClick={() => scrollTo("contact")}
                  style={{ padding:"13px 28px", background:"transparent", color:fg, border:`1px solid ${border}`, borderRadius:10, fontSize:14, cursor:"pointer", fontFamily:"var(--font-sans)", fontWeight:500, transition:"all 0.2s" }}>
                  Get in touch
                </button>
              </div>
            </div>

            <div className="hero-photo" style={{ position:"relative", display:"flex", justifyContent:"center" }}>
              <div style={{ width:220, height:220, borderRadius:"50%", overflow:"hidden", border:"3px solid #7F77DD", boxShadow:`0 0 0 10px ${surfBg}, 0 24px 64px rgba(83,74,183,0.22)`, position:"relative" }}>
                <ProfileAvatar size={220} radius="50%" objectPos="center top" />
              </div>
              <div style={{ position:"absolute", bottom:4, right:-10, background:"#534AB7", color:"#fff", fontSize:11, fontWeight:700, padding:"5px 12px", borderRadius:20, letterSpacing:0.3, whiteSpace:"nowrap", boxShadow:"0 4px 12px rgba(83,74,183,0.4)" }}>
                Chancy Tsonga
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(130px,1fr))", gap:12, marginBottom:"3.5rem" }}>
          {[["6+","Industries"],["3","Active startups"],["10+","Build projects"],["4","Tech platforms"]].map(([n,l]) => (
            <div key={l} style={{ background:surfBg, borderRadius:14, padding:"1.4rem 1rem", textAlign:"center", border:`0.5px solid ${border}` }}>
              <div style={{ fontSize:36, fontWeight:800, color:"#7F77DD", letterSpacing:-1.5, lineHeight:1 }}>{n}</div>
              <div style={{ fontSize:12, color:fgMuted, marginTop:8, fontWeight:500 }}>{l}</div>
            </div>
          ))}
        </div>

        {/* ── ABOUT ── */}
        <section id="about" style={{ padding:"3rem 0", borderTop:`0.5px solid ${border}` }}>
          <SectionHeading title="About me" fg={fg} fgMuted={fgMuted} />
          <div className="two-col" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"3rem" }}>
            <div>
              <div style={{ width:88, height:88, borderRadius:18, overflow:"hidden", marginBottom:"1.5rem", border:"2.5px solid #AFA9EC", boxShadow:"0 6px 24px rgba(83,74,183,0.18)" }}>
                <ProfileAvatar size={88} radius={0} />
              </div>
              <p style={{ fontSize:14, color:fgMuted, lineHeight:1.9, marginBottom:"1rem" }}>
                I'm Chancy Tsonga — a professional with a broad and practical skill set spanning software engineering, construction management, digital marketing, and fintech. I currently operate across Malawi, South Africa, and Cyprus.
              </p>
              <p style={{ fontSize:14, color:fgMuted, lineHeight:1.9 }}>
                As the founder of Effort Construction and co-creator of platforms like CapeTrip and Mizpay, I bring both technical depth and business acumen to every project I take on.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize:14, fontWeight:700, marginBottom:20, color:fg }}>Skills & tools</h3>
              {[
                { label:"Software Development", tags:["Web Apps","Mobile","Platforms","APIs"] },
                { label:"Construction",          tags:["Planning","Design","Renovation","Consultation"] },
                { label:"Digital Marketing",     tags:["Traffic Conversion","Campaigns","SEO","Brand"] },
                { label:"Business",              tags:["Strategy","Fintech","Startups","Project Mgmt"] },
              ].map(g => (
                <div key={g.label} style={{ marginBottom:20 }}>
                  <div style={{ fontSize:10, color:"#7F77DD", marginBottom:8, fontWeight:800, textTransform:"uppercase", letterSpacing:1 }}>{g.label}</div>
                  <div>
                    {g.tags.map(t => (
                      <span key={t} style={{ display:"inline-block", fontSize:12, padding:"4px 12px", borderRadius:20, background:surfBg, color:fgMuted, marginRight:4, marginBottom:4, border:`0.5px solid ${border}`, fontWeight:500 }}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
              <button onClick={() => alert("CV download coming soon — contact Chancy directly on WhatsApp to request a copy.")}
                style={{ marginTop:8, display:"inline-flex", alignItems:"center", gap:8, background:"#534AB7", color:"#fff", border:"none", borderRadius:10, padding:"12px 20px", fontSize:13, cursor:"pointer", fontFamily:"var(--font-sans)", fontWeight:700 }}>
                ⬇ Download CV
              </button>
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" style={{ padding:"3rem 0", borderTop:`0.5px solid ${border}` }}>
          <SectionHeading title="Projects" sub="Click any card to view full details." fg={fg} fgMuted={fgMuted} />
          <div style={{ display:"flex", gap:8, marginBottom:"1.75rem", flexWrap:"wrap" }}>
            {CATS.map(c => filterBtn(cat===c, () => setCat(c), CAT_LABELS[c]))}
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(270px,1fr))", gap:16 }}>
            {filtered.map(p => (
              <div key={p.id} onClick={() => setActiveProj(p)} className="card"
                style={{ border:`0.5px solid ${border}`, borderRadius:16, overflow:"hidden", background:cardBg, cursor:"pointer" }}>
                <div style={{ height:130, background:p.color, overflow:"hidden", position:"relative" }}>
                  <img src={p.images[0]} alt={p.title} onError={e => { e.target.style.display="none"; }}
                    style={{ width:"100%", height:"100%", objectFit:"cover", opacity:0.82 }} />
                  <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.18))" }} />
                  <div style={{ position:"absolute", top:10, right:12, fontSize:28 }}>{p.emoji}</div>
                </div>
                <div style={{ padding:"1.1rem" }}>
                  <h3 style={{ fontSize:15, fontWeight:700, marginBottom:4, color:fg }}>{p.title}</h3>
                  <p style={{ fontSize:12, color:fgMuted, marginBottom:12, lineHeight:1.6 }}>{p.tagline}</p>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                    <div>{p.tags.slice(0,2).map(t => <Tag key={t} label={t} bg={p.color} color={p.accent} />)}</div>
                    <span style={{ fontSize:12, color:p.accent, fontWeight:700 }}>View →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── GALLERY ── */}
        <section id="gallery" style={{ padding:"3rem 0", borderTop:`0.5px solid ${border}` }}>
          <SectionHeading title="Gallery" sub="A visual record of work across industries. Click any image to expand." fg={fg} fgMuted={fgMuted} />
          <div style={{ display:"flex", gap:8, marginBottom:"1.75rem", flexWrap:"wrap" }}>
            {GALLERY_CATS.map(c => filterBtn(galCat===c, () => setGalCat(c), GALLERY_CAT_LABELS[c]))}
          </div>
          <div className="gal-grid">
            {galFiltered.map((item, i) => {
              const featured = i === 0 || i % 8 === 5;
              return (
                <div key={i} onClick={() => setLightboxIdx(i)} className={`gal-item${featured ? " gal-feat" : ""}`}
                  style={{ borderRadius:12, overflow:"hidden", cursor:"pointer", position:"relative", border:`0.5px solid ${border}`, background:surfBg }}>
                  <img src={item.src} alt={item.label}
                    style={{ width:"100%", height:"100%", objectFit:"cover", display:"block", transition:"transform 0.4s ease" }}
                    onError={e => { e.target.parentElement.style.display="none"; }} />
                  <div className="gal-overlay"
                    style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 55%)", display:"flex", alignItems:"flex-end", justifyContent:"space-between", padding:"14px 16px", opacity:0, transition:"opacity 0.25s" }}>
                    <span style={{ color:"#fff", fontSize:13, fontWeight:600 }}>{item.label}</span>
                    <span style={{ color:"rgba(255,255,255,0.7)", fontSize:20, lineHeight:1 }}>⊕</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── BLOG ── */}
        <section id="blog" style={{ padding:"3rem 0", borderTop:`0.5px solid ${border}` }}>
          <SectionHeading title="Blog" sub="Thoughts on tech, construction, business, and life across industries." fg={fg} fgMuted={fgMuted} />
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:14 }}>
            {BLOG_POSTS.map(post => (
              <div key={post.id} onClick={() => setActiveBlog(post)} className="card"
                style={{ border:`0.5px solid ${border}`, borderRadius:16, padding:"1.4rem", background:cardBg, cursor:"pointer" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
                  <span style={{ background:CAT_COLORS[post.category]||"#EEEDFE", color:CAT_TEXT[post.category]||"#3C3489", fontSize:11, padding:"3px 10px", borderRadius:20, fontWeight:600 }}>{post.category}</span>
                  <span style={{ fontSize:11, color:fgMuted }}>{post.readTime}</span>
                </div>
                <h3 style={{ fontSize:14, fontWeight:700, marginBottom:8, lineHeight:1.45, color:fg }}>{post.title}</h3>
                <p style={{ fontSize:12, color:fgMuted, lineHeight:1.7, marginBottom:12 }}>{post.excerpt.substring(0,95)}…</p>
                <div style={{ fontSize:12, color:"#7F77DD", fontWeight:700 }}>
                  Read more → <span style={{ color:fgMuted, fontWeight:400 }}>{post.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── STARTUPS ── */}
        <section id="startups" style={{ padding:"3rem 0", borderTop:`0.5px solid ${border}` }}>
          <SectionHeading title="Startups & ventures" sub="Building from the ground up. Click to learn more." fg={fg} fgMuted={fgMuted} />
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))", gap:14 }}>
            {STARTUPS.map(s => (
              <div key={s.id} onClick={() => setActiveStartup(s)} className="card"
                style={{ background:surfBg, borderRadius:16, padding:"1.5rem", border:`0.5px solid ${border}`, cursor:"pointer" }}>
                <div style={{ width:52, height:52, borderRadius:14, background:s.color, display:"flex", alignItems:"center", justifyContent:"center", fontSize:26, marginBottom:16 }}>{s.emoji}</div>
                <h3 style={{ fontSize:15, fontWeight:700, marginBottom:8, color:fg }}>{s.title}</h3>
                <p style={{ fontSize:12, color:fgMuted, lineHeight:1.7, marginBottom:14 }}>{s.desc.substring(0,90)}…</p>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <div>{s.tags.slice(0,2).map(t => <Tag key={t} label={t} bg={s.color} color={s.accent} />)}</div>
                  <span style={{ fontSize:13, color:s.accent, fontWeight:700 }}>→</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section id="experience" style={{ padding:"3rem 0", borderTop:`0.5px solid ${border}` }}>
          <SectionHeading title="Work experience" fg={fg} fgMuted={fgMuted} />
          <div style={{ position:"relative" }}>
            <div style={{ position:"absolute", left:18, top:16, bottom:16, width:1.5, background:`linear-gradient(to bottom, #7F77DD 0%, ${border} 100%)`, borderRadius:2 }} />
            {[
              { dot:"#7F77DD", title:"Marketing & Traffic Conversion Officer",   sub:"Woodlain Digital · Cyprus · Current",                                           link:"https://woodlaine.com/",          desc:"Leading digital marketing campaigns, traffic acquisition, and conversion rate optimization for international clients." },
              { dot:"#2B6CB0", title:"Cybersecurity & Digital Operations",        sub:"Enhalo EN · South Africa",                                                     link:"https://enhalo.co/",              desc:"Worked with Enhalo EN on cybersecurity and digital operations, supporting defense-focused services across international markets." },
              { dot:"#1D9E75", title:"Business & Marketing Manager",              sub:"NEVAGs Building Contractors · Malawi",                                          link:null,                              desc:"Managed business development, client relations, brand strategy, and marketing operations." },
              { dot:"#378ADD", title:"Founder / Platform Lead — CapeTrip",        sub:"capetrip.com",                                                                  link:"https://capetrip.com",            desc:"Building and growing a commuting and logistics platform for seamless movement and tour experiences." },
              { dot:"#639922", title:"Software Engineer",                         sub:"Association for Education Transformation (ASSET) · Malawi",                    link:"https://www.asset.org.za/",       desc:"Built and maintained software systems driving edtech and STEM initiatives across Malawi." },
              { dot:"#805AD5", title:"Junior Officer",                            sub:"Assemblies of God Care · Malawi",                                               link:"https://malawiassembliesofgod.org/ag-cares/", desc:"Supporting community care programs and organizational operations." },
              { dot:"#993C1D", title:"Founder — Effort Construction",             sub:"Software Dev · Construction · Digital Marketing · Malawi, SA & Cyprus",        link:null,                              desc:"Multi-service firm spanning software development, construction, and digital marketing." },
              { dot:"#D85A30", title:"Construction Project Designer & Manager",   sub:"Blantyre & Chileka, Malawi",                                                    link:null,                              desc:"Delivered residential and commercial projects — including TNM Malawi, National Bank of Malawi, and Central Region Water Board." },
            ].map((e, i) => (
              <div key={i} style={{ display:"flex", gap:0, marginBottom:10 }}>
                <div style={{ width:38, flexShrink:0, display:"flex", justifyContent:"center", paddingTop:18 }}>
                  <div style={{ width:12, height:12, borderRadius:"50%", background:e.dot, border:`2.5px solid ${bg}`, boxShadow:`0 0 0 2px ${e.dot}`, zIndex:1 }} />
                </div>
                <div style={{ flex:1, border:`0.5px solid ${border}`, borderRadius:14, padding:"1rem 1.1rem", background:cardBg }}>
                  <h3 style={{ fontSize:14, fontWeight:700, marginBottom:4, color:fg }}>{e.title}</h3>
                  <p style={{ fontSize:13, color:fgMuted, lineHeight:1.65, marginBottom:6 }}>{e.desc}</p>
                  <div style={{ display:"flex", alignItems:"center", gap:10, flexWrap:"wrap" }}>
                    <span style={{ fontSize:11, color:e.dot, fontWeight:600 }}>{e.sub}</span>
                    {e.link && (
                      <a href={e.link} target="_blank" rel="noreferrer" onClick={ev => ev.stopPropagation()}
                        style={{ fontSize:11, color:e.dot, textDecoration:"underline", opacity:0.75 }}>↗ Visit</a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" style={{ padding:"3rem 0", borderTop:`0.5px solid ${border}` }}>
          <SectionHeading title="Get in touch" fg={fg} fgMuted={fgMuted} />
          <div className="two-col" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"3rem" }}>
            <div>
              <p style={{ fontSize:14, color:fgMuted, lineHeight:1.9, marginBottom:"1.75rem" }}>Whether you have a project, collaboration, investment opportunity, or just want to connect — reach out via any channel below.</p>
              <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                {[
                  ["📧", EMAIL_PRIMARY,                   `mailto:${EMAIL_PRIMARY}`],
                  ["💼", "LinkedIn",                      LINKEDIN],
                  ["✖",  "@chancytausi",                 "https://x.com/chancytausi"],
                  ["💬", "WhatsApp: +27 76 998 4060",    WA],
                  ["📍", "Malawi · South Africa · Cyprus","#"],
                ].map(([icon, label, href]) => (
                  <a key={label} href={href} target={href==="#"?"_self":"_blank"} rel="noreferrer"
                    className="contact-row"
                    style={{ display:"flex", alignItems:"center", gap:12, fontSize:13, color:fgMuted, textDecoration:"none", padding:"11px 14px", borderRadius:12, border:`0.5px solid ${border}`, background:cardBg, transition:"all 0.18s" }}>
                    <span style={{ fontSize:18, width:24, textAlign:"center", flexShrink:0 }}>{icon}</span>
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {[
                { val:formName,    set:setFormName,    ph:"Your name" },
                { val:formEmail,   set:setFormEmail,   ph:"Email address", type:"email" },
                { val:formSubject, set:setFormSubject, ph:"Subject" },
              ].map(({ val, set, ph, type="text" }) => (
                <input key={ph} type={type} value={val} onChange={e => set(e.target.value)} placeholder={ph}
                  style={{ fontSize:13, padding:"12px 14px", border:`0.5px solid ${border}`, borderRadius:10, background:inputBg, color:fg, fontFamily:"var(--font-sans)", outline:"none" }}
                  onFocus={e => e.target.style.borderColor="#7F77DD"}
                  onBlur={e => e.target.style.borderColor=border} />
              ))}
              <textarea value={formMsg} onChange={e => setFormMsg(e.target.value)} placeholder="Your message..." rows={4}
                style={{ fontSize:13, padding:"12px 14px", border:`0.5px solid ${border}`, borderRadius:10, background:inputBg, color:fg, fontFamily:"var(--font-sans)", resize:"vertical", outline:"none" }}
                onFocus={e => e.target.style.borderColor="#7F77DD"}
                onBlur={e => e.target.style.borderColor=border} />
              <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
                <a href={`${WA}?text=${encodeURIComponent(waMsg)}`} target="_blank" rel="noreferrer"
                  style={{ padding:"12px 24px", background:"#25D366", color:"#fff", borderRadius:10, fontSize:14, textDecoration:"none", fontWeight:700, flex:1, textAlign:"center" }}>
                  💬 Send via WhatsApp
                </a>
                <a href={mailHref}
                  style={{ padding:"12px 24px", background:"transparent", color:fg, border:`0.5px solid ${border}`, borderRadius:10, fontSize:14, textDecoration:"none", textAlign:"center", flex:1 }}>
                  📧 Email
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ padding:"2.5rem 0", borderTop:`0.5px solid ${border}`, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:16 }}>
          <div>
            <div style={{ fontSize:18, fontWeight:800, color:fg, letterSpacing:-0.5, marginBottom:4 }}>
              Chancy<span style={{ color:"#7F77DD" }}>.</span>
            </div>
            <p style={{ fontSize:12, color:fgMuted }}>© 2026 · Malawi · South Africa · Cyprus</p>
          </div>
          <div style={{ display:"flex", gap:20, flexWrap:"wrap" }}>
            {[["CapeTrip","https://capetrip.com"],["LinkedIn",LINKEDIN],["X","https://x.com/chancytausi"],["WhatsApp",WA]].map(([l,h]) => (
              <a key={l} href={h} target="_blank" rel="noreferrer" className="footer-lnk"
                style={{ fontSize:12, color:fgMuted, textDecoration:"none", fontWeight:500, transition:"color 0.15s" }}>
                {l}
              </a>
            ))}
          </div>
        </footer>
      </div>

      <style>{`
        * { box-sizing: border-box; }

        .desk-nav { display: flex !important; }
        .ham-btn  { display: none !important; }

        .card { transition: transform 0.22s, box-shadow 0.22s; }
        .card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); }

        .wa-float { transition: transform 0.2s, box-shadow 0.2s; }
        .wa-float:hover { transform: scale(1.12) translateY(-2px); box-shadow: 0 8px 28px rgba(37,211,102,0.55); }

        .btn-primary:hover { background: #4540A0 !important; }

        .nav-lnk:hover  { color: #534AB7 !important; }
        .footer-lnk:hover { color: #534AB7 !important; }

        .contact-row:hover { border-color: #7F77DD !important; color: #111 !important; }

        .gal-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 220px;
          gap: 10px;
        }
        .gal-item { height: 220px; }
        .gal-feat {
          grid-column: span 2;
          grid-row: span 2;
          height: auto;
          min-height: 450px;
        }
        .gal-item:hover img { transform: scale(1.06); }
        .gal-item:hover .gal-overlay { opacity: 1 !important; }

        @media (max-width: 640px) {
          .gal-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 160px; }
          .gal-item { height: 160px; }
          .gal-feat { grid-column: span 2; min-height: 260px; }
        }

        @media (max-width: 760px) {
          .desk-nav  { display: none  !important; }
          .ham-btn   { display: flex  !important; }
          .two-col   { grid-template-columns: 1fr !important; }
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-photo { display: none !important; }
        }
      `}</style>
    </div>
  );
}
