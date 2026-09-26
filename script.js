/* ============================================================
   EDIT YOUR DETAILS HERE. Everything on the page is built from this object.
   ============================================================ */
const P = {
  name: "Sourava Kumar Swain",
  roles: ["Full Stack Developer", "AI Engineer", "Problem Solver"],
  availability: "Available to work",
  badge: "Full-stack Developer",
  logo: "logo.png",                       // put your image logo here if you want a logo instead of initials
  photo: "hero.png",                       // paste an image URL or data URI here to replace the initials
  location: "Bhubaneswar, India",
  timezone: "Asia/Kolkata",
  email: "souravkumarswain3333@gmail.com",
  phone: "+919692618822",
  summary: "Full Stack Developer and AI Engineer who builds scalable web apps and practical machine learning tools. Open to internships, freelance projects and collaborations.",
  socials: {
    linkedin: "https://www.linkedin.com/in/souravakumarswain",
    github: "https://github.com/sourava-coder",
    whatsapp: "https://wa.me/+919692618822"
  },
  stats: [
    { value: 20, suffix: "+", label: "Projects built" },
    { value: 500, suffix: "+", label: "Git commits" },
    { value: 8.0, dec: 1, suffix: "", label: "CGPA (B.Tech)" },
    { value: 3, suffix: "+", label: "Hackathons won" }
  ],
  aboutHeading: "Crafting digital experiences with precision",
  about: "I'm a final-year engineering student who enjoys turning ideas into working products, from hackathon prototypes to full stack apps. I work across the stack with JavaScript, React, Node.js and Python, and I am growing my skills in machine learning and computer vision. Replace this paragraph with your own story: what you study, what you have built and what you are looking for.",
  facts: [
    ["Achievements", "1st place at a university project exhibition. Hackathon winner."],
    ["Education", "B.Tech in Computer Science and Data Science (2026 to 2030)."],
    ["Current focus", "Machine learning models, OpenCV and full stack platforms."]
  ],
  skills: [
    ["Frontend","HTML5",95],["Frontend","CSS3",90],["Frontend","JavaScript",88],["Frontend","React",85],["Frontend","Next.js",80],["Frontend","Responsive design",92],
    ["Backend","Node.js",85],["Backend","Express.js",82],["Backend","MySQL",80],["Backend","SQL",78],
    ["Programming","Python",85],["Programming","Java",75],["Programming","C",72],
    ["AI & Data Science","Machine learning",75],["AI & Data Science","OpenCV",78],["AI & Data Science","Data analytics",72],
    ["Tools & DevOps","Git",88],["Tools & DevOps","GitHub",90]
  ],
  projects: [
    { title: "Service Marketplace", cat: "Full Stack", icon: "SM",
      text: "A web platform that connects local service providers with customers. Includes sign-in, provider listings, search and an admin dashboard.",
      features: ["User sign-in with roles", "Search and provider matching", "Admin dashboard", "Works on desktop and mobile"],
      tags: ["HTML", "CSS", "JavaScript", "MySQL"], live: "#", code: "#" },
    { title: "Face Attendance System", cat: "AI / ML", icon: "FA",
      text: "Marks attendance automatically by recognising faces in a live camera feed, and logs every check-in to a database.",
      features: ["Real-time face detection", "Automatic attendance log", "Hard to fake with a photo", "Simple management screen"],
      tags: ["Python", "OpenCV", "SQLite"], live: "#", code: "#" },
    { title: "Travel Planner", cat: "Full Stack", icon: "TP",
      text: "A hackathon project that helps visitors explore destinations, plan an itinerary and book activities in one place.",
      features: ["Destination guides", "Itinerary planner", "Booking flow", "Responsive layout"],
      tags: ["HTML", "CSS", "JavaScript", "SQL"], live: "", code: "#" }
  ],
  journey: [
    { year: "2030", kind: "Internship", title: "AI and Machine Learning Intern", org: "Organisation name", text: "One-month hands-on internship covering supervised learning, model evaluation and building small AI applications." },
    { year: "2029", kind: "Award", title: "1st place, university project exhibition", org: "University name", text: "Won first place for a full stack platform with real-world use." },
    { year: "2028", kind: "Hackathon", title: "Winner, hackathon name", org: "Host institute, with your team name", text: "First place in the tourism tech theme for creativity and technical execution." },
    { year: "2027", kind: "Internship", title: "Advanced C Programming Intern", org: "Institute name", text: "Focused on pointers, data structures and memory management in C." },
    { year: "2027", kind: "Award", title: "2nd place, college coding contest", org: "Your college", text: "Runner-up in a competitive college-level coding contest." },
    { year: "2026", kind: "Education", title: "Started B.Tech in Computer Science and Data Science", org: "Your college", text: "Core focus on full stack development, machine learning, REST APIs and database systems." }
  ],
  education: [
    { yrs: "2026 to 2030", title: "B.Tech in Computer Science and Data Science", org: "Bhubaneswar Engineering College, Bhubaneswar",
      text: "Core subjects, machine learning, data structures and algorithms, database systems and AI.", score: "CGPA: 8.0" },
    { yrs: "2024 to 2026", title: "+2 Science", org: "UNOPOS Higher Secondary School of Science,Tirtol",
      text: "CSS, HTML and Java, web development basics, database management and computer networks.", score: "Score: 81%" }
  ],
  certs: [
    { year: "2024", title: "Full-Stack Web Development", issuer: "Issuer name", tags: "React, Node.js, MongoDB" },
    { year: "2024", title: "Data Structures and Algorithms in Java", issuer: "Issuer name", tags: "Java, DSA" },
    { year: "2024", title: "OpenCV Python for Computer Vision", issuer: "Issuer name", tags: "OpenCV, Python" },
    { year: "2023", title: "Responsive Web Design", issuer: "Issuer name", tags: "HTML5, CSS3" }
  ],
  resume: {
    title: "Full Stack Developer and AI Engineer",
    summary: "Full stack developer and computer science undergraduate with a strong foundation in front end, back end and databases. Delivered award-winning software including a service marketplace and an AI attendance system.",
    languages: "C, Java, HTML, CSS, JavaScript, SQL, Python",
    tools: "MySQL, SQLite, MongoDB, Git, GitHub, VS Code",
    concepts: "Full stack web, REST APIs, MERN, machine learning, OpenCV"
  }
};

/* ============================================================
   Page code
   ============================================================ */
const $ = (s, r=document) => r.querySelector(s);
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const initials = P.name.split(/\s+/).filter(Boolean).slice(0,2).map(w => w[0].toUpperCase()).join("");
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

const ICON = {
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21l1.65-4.9A8.5 8.5 0 1 1 8 19.4L3 21Z"/><path d="M9 9.5c.3 2 2.2 3.9 4.5 4.5l1.2-1.2-1.6-.9-.7.6c-.9-.4-1.6-1.1-2-2l.6-.7-.9-1.6L9 9.5Z"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>'
};

/* ---------- Static bits ---------- */
document.title = `${P.name} | ${P.roles.slice(0,2).join(" & ")}`;
["brandName","footName","heroName"].forEach(id => $("#"+id).textContent = P.name);
["brandMark","footMark"].forEach(id => {
  const el = $("#" + id);
  if (P.logo) {
    el.innerHTML = `<img src="${esc(P.logo)}" alt="${esc(P.name)} logo" />`;
  } else {
    el.textContent = initials;
  }
});
$("#portraitInitials").textContent = initials;
$("#availText").textContent = P.availability;
$("#floatA").textContent = P.availability;
$("#floatB").textContent = P.badge;
$("#heroSummary").textContent = P.summary;
$("#aboutHeading").textContent = P.aboutHeading;
$("#aboutText").textContent = P.about;
$("#roleStatic").textContent = P.roles.join(", ");
$("#clockPlace").textContent = P.location.split(",")[0];
$("#copyright").textContent = `© ${new Date().getFullYear()} ${P.name}. All rights reserved.`;
if (P.photo) $("#portraitFrame").innerHTML = `<img src="${esc(P.photo)}" alt="${esc(P.name)}">`;

/* ---------- Nav ---------- */
const NAV = [["home","Home"],["about","About"],["skills","Skills"],["projects","Projects"],["journey","Journey"],["resume","Resume"],["contact","Contact"]];
$("#navList").innerHTML = NAV.map(([id,l]) => `<li><a href="#${id}" data-id="${id}">${l}</a></li>`).join("");
const header = $(".site-header");
$("#menuBtn").addEventListener("click", e => {
  const open = header.classList.toggle("open");
  e.currentTarget.setAttribute("aria-expanded", open);
});
$("#navList").addEventListener("click", () => { header.classList.remove("open"); $("#menuBtn").setAttribute("aria-expanded","false"); });

const navLinks = [...document.querySelectorAll("#navList a")];
const spy = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) navLinks.forEach(a => a.classList.toggle("active", a.dataset.id === en.target.id));
  });
}, { rootMargin: "-40% 0px -55% 0px" });
NAV.forEach(([id]) => spy.observe($("#"+id)));

/* ---------- Scroll progress ---------- */
const bar = $("#progress");
let scrollTick = false;
function onScroll(){
  if (scrollTick) return;
  scrollTick = true;
  requestAnimationFrame(() => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${h > 0 ? Math.min(1, window.scrollY / h) : 0})`;
    scrollTick = false;
  });
}
window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

/* ---------- Loader ---------- */
window.addEventListener("load", () => {
  const loader = document.getElementById("loaderScreen");
  const fill = document.getElementById("loaderFill");
  const percent = document.getElementById("loaderPercent");
  if (!loader || !fill || !percent) return;

  let current = 0;
  const totalDuration = 2200;
  const stepDelay = 40;
  const start = performance.now();

  const tick = (now) => {
    const elapsed = now - start;
    const value = Math.min(100, Math.max(0, (elapsed / totalDuration) * 100));
    current = value;
    fill.style.width = `${value}%`;
    percent.textContent = `${Math.round(value)}%`;

    if (value < 100) {
      requestAnimationFrame(tick);
    } else {
      setTimeout(() => {
        loader.classList.add("hidden");
        document.body.classList.remove("loading");
      }, 650);
    }
  };

  requestAnimationFrame(tick);
});

/* ---------- Theme ---------- */
const root = document.documentElement;
const currentTheme = () => root.dataset.theme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
function paintThemeBtn(){
  const dark = currentTheme() === "dark";
  $("#themeBtn").innerHTML = dark ? ICON.sun : ICON.moon;
  $("#themeBtn").setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
}
try { const t = localStorage.getItem("theme"); if (t === "light" || t === "dark") root.dataset.theme = t; } catch(e) {}
paintThemeBtn();
$("#themeBtn").addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch(e) {}
  paintThemeBtn();
});

/* ---------- Socials ---------- */
const socialLinks = (extra) => {
  const s = P.socials;
  return [
    ["LinkedIn", s.linkedin, ICON.linkedin],
    ["GitHub", s.github, ICON.github],
    ["Email", `mailto:${P.email}`, ICON.email],
    ["WhatsApp", s.whatsapp, ICON.whatsapp]
  ].filter(x => x[1]).map(([l,h,i]) => `<a href="${esc(h)}" aria-label="${l}" ${h.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}>${i}</a>`).join("");
};
$("#heroSocials").insertAdjacentHTML("beforeend", socialLinks());
$("#footSocials").innerHTML = socialLinks();

/* ---------- Typing role ---------- */
(function(){
  const el = $("#roleText"), roles = P.roles;
  let ri = 0, ci = 0, del = false;
  (function step(){
    const w = roles[ri];
    ci += del ? -1 : 1;
    el.textContent = w.slice(0, ci);
    let wait = del ? 40 : 80;
    if (!del && ci === w.length) { del = true; wait = 1100; }
    else if (del && ci === 0) { del = false; ri = (ri + 1) % roles.length; wait = 260; }
    setTimeout(step, wait);
  })();
})();

/* ---------- About ---------- */
$("#stats").innerHTML = P.stats.map(s =>
  `<div class="stat"><b data-target="${s.value}" data-dec="${s.dec||0}" data-suffix="${esc(s.suffix||"")}">0${esc(s.suffix||"")}</b><span>${esc(s.label)}</span></div>`).join("");
$("#facts").innerHTML = P.facts.map(([k,v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("");

function countUp(el){
  const t = parseFloat(el.dataset.target), d = +el.dataset.dec, suf = el.dataset.suffix;
  if (reduce) { el.textContent = t.toFixed(d) + suf; return; }
  const start = performance.now(), dur = 1200;
  (function tick(now){
    const p = Math.min(1, (now - start) / dur), e = 1 - Math.pow(1 - p, 3);
    el.textContent = (t * e).toFixed(d) + suf;
    if (p < 1) requestAnimationFrame(tick);
  })(start);
}
const reveal = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    if (en.target.matches(".stat b")) countUp(en.target);
    else en.target.classList.add("in");
    reveal.unobserve(en.target);
  });
}, { threshold: .35 });
document.querySelectorAll(".stat b").forEach(el => reveal.observe(el));

/* ---------- Filter helper ---------- */
function filterBar(container, labels, onPick){
  container.innerHTML = labels.map((l,i) => `<button class="chip-btn" type="button" aria-pressed="${i===0}" data-v="${esc(l)}">${esc(l)}</button>`).join("");
  container.addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    container.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", x === b));
    onPick(b.dataset.v);
  });
}

/* ---------- Skills ---------- */
const skillCats = ["All", ...new Set(P.skills.map(s => s[0]))];
$("#skillGrid").innerHTML = P.skills.map(([c,n,v]) =>
  `<div class="skill" data-cat="${esc(c)}" style="--w:${v/100}">
     <div class="skill-top"><span>${esc(n)}</span><em>${v}%</em></div>
     <div class="meter" role="img" aria-label="${esc(n)} proficiency ${v} percent"><i></i></div>
   </div>`).join("");
document.querySelectorAll(".skill").forEach(el => reveal.observe(el));
filterBar($("#skillChips"), skillCats, v => {
  document.querySelectorAll(".skill").forEach(el => el.hidden = !(v === "All" || el.dataset.cat === v));
});

/* ---------- Projects ---------- */
const projCats = ["All", ...new Set(P.projects.map(p => p.cat))];
$("#projectGrid").innerHTML = P.projects.map(p => `
  <article class="card" data-cat="${esc(p.cat)}">
    <div class="card-head"><div class="tile">${esc(p.icon)}</div><span class="cat">${esc(p.cat)}</span></div>
    <h3>${esc(p.title)}</h3>
    <p>${esc(p.text)}</p>
    <ul>${p.features.map(f => `<li>${esc(f)}</li>`).join("")}</ul>
    <div class="tags">${p.tags.map(t => `<span>${esc(t)}</span>`).join("")}</div>
    <div class="card-links">
      ${p.live ? `<a href="${esc(p.live)}" target="_blank" rel="noopener noreferrer">Live demo</a>` : ""}
      ${p.code ? `<a href="${esc(p.code)}" target="_blank" rel="noopener noreferrer">Code repository</a>` : ""}
    </div>
  </article>`).join("");
filterBar($("#projectChips"), projCats, v => {
  document.querySelectorAll("#projectGrid .card").forEach(el => el.hidden = !(v === "All" || el.dataset.cat === v));
});

/* ---------- Journey ---------- */
$("#timeline").innerHTML = P.journey.map(j => `
  <li class="tl">
    <div class="tl-meta"><span>${esc(j.year)}</span><span class="kind">${esc(j.kind)}</span></div>
    <h3>${esc(j.title)}</h3>
    <h4>${esc(j.org)}</h4>
    <p>${esc(j.text)}</p>
  </li>`).join("");

const revealTargets = document.querySelectorAll(".card, .stat, .edu, .cert, .tl, .skill, form, .site-header nav a");
revealTargets.forEach(el => el.classList.add("reveal"));

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  revealTargets.forEach(el => el.classList.add("in"));
} else {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  revealTargets.forEach(el => revealObserver.observe(el));
}

/* ---------- Education + certs ---------- */
$("#eduGrid").innerHTML = P.education.map(e => `
  <article class="edu">
    <div class="yrs">${esc(e.yrs)}</div>
    <h3>${esc(e.title)}</h3>
    <h4>${esc(e.org)}</h4>
    <p>${esc(e.text)}</p>
    <span class="score">${esc(e.score)}</span>
  </article>`).join("");
$("#certGrid").innerHTML = P.certs.map(c => `
  <article class="cert">
    <small>${esc(c.year)} · ${esc(c.issuer)}</small>
    <h4>${esc(c.title)}</h4>
    <small>${esc(c.tags)}</small>
    <span class="verified"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 4.5 4.5L19 7"/></svg>Verified</span>
  </article>`).join("");

/* ---------- Resume ---------- */
const R = P.resume;
$("#paper").innerHTML = `
  <h3>${esc(P.name)}</h3>
  <div class="sub">${esc(R.title)}</div>
  <div class="contact-line"><span>${esc(P.location)}</span><span>${esc(P.email)}</span><span>${esc(P.phone)}</span></div>
  <h4>Professional summary</h4><p>${esc(R.summary)}</p>
  <h4>Education</h4>
  ${P.education.map(e => `<div class="row"><strong>${esc(e.title)}, ${esc(e.org)}</strong><span>${esc(e.yrs)} · ${esc(e.score)}</span></div>`).join("")}
  <h4>Key achievements</h4>
  ${P.journey.filter(j => j.kind === "Award" || j.kind === "Hackathon").map(j => `<p><strong>${esc(j.title)}:</strong> ${esc(j.text)}</p>`).join("")}
  <h4>Technical skills</h4>
  <p><strong>Languages:</strong> ${esc(R.languages)}</p>
  <p><strong>Tools and databases:</strong> ${esc(R.tools)}</p>
  <p><strong>Concepts:</strong> ${esc(R.concepts)}</p>
  <h4>Internships</h4>
  ${P.journey.filter(j => j.kind === "Internship").map(j => `<div class="row"><strong>${esc(j.title)}, ${esc(j.org)}</strong><span>${esc(j.year)}</span></div>`).join("")}
  <h4>Featured projects</h4>
  ${P.projects.map(p => `<div class="row"><strong>${esc(p.title)}</strong><span>${esc(p.tags.join(", "))}</span></div>`).join("")}
`;
$("#printBtn").addEventListener("click", () => window.print());

/* ---------- Contact ---------- */
$("#info").innerHTML = [
  ["LinkedIn", P.socials.linkedin ? `<a href="${esc(P.socials.linkedin)}" target="_blank" rel="noopener noreferrer">${esc(P.socials.linkedin.replace(/^https?:\/\/(www\.)?/, ""))}</a>` : ""],
  ["Email", `<a href="mailto:${esc(P.email)}">${esc(P.email)}</a>`],
  ["Phone", `<a href="tel:${esc(P.phone.replace(/\s/g,""))}">${esc(P.phone)}</a>`],
  ["Location", esc(P.location)]
].filter(r => r[1]).map(([k,v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("");
$("#contactBtns").innerHTML =
  (P.socials.linkedin ? `<a class="btn" href="${esc(P.socials.linkedin)}" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>` : "") +
  (P.socials.whatsapp ? `<a class="btn" href="${esc(P.socials.whatsapp)}" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>` : "");

$("#contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.currentTarget);
  const subject = `Portfolio message from ${f.get("name")}`;
  const body = `${f.get("message")}\n\nFrom: ${f.get("name")} (${f.get("email")})`;
  $("#formNote").textContent = `Opening your email app. If nothing opens, write to ${P.email}.`;
  window.location.href = `mailto:${P.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

/* ---------- Clock ---------- */
function tickClock(){
  const el = $("#clock");
  try { el.textContent = new Intl.DateTimeFormat("en-GB", { hour:"2-digit", minute:"2-digit", second:"2-digit", timeZone:P.timezone }).format(new Date()); }
  catch(e) { el.textContent = new Date().toLocaleTimeString(); }
}
tickClock(); setInterval(tickClock, 1000);
