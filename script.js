// Year stamp
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
});

// Dark mode toggle (remembers preference)
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if (saved) root.setAttribute('data-theme', saved);

themeToggle?.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// ---- Projects data (edit this) ----
const projects = [
  {
    title: "SmartHome Plus",
    stack: ["Laravel","IoT","MFA"],
    summary: "Home automation platform with energy tracking and secure access.",
    bullets: [
      "15% energy savings via automation rules",
      "MFA + AES-256 encryption",
      "Dockerized deployment"
    ],
    links: [
      {label: "Demo", url: "#"},
      {label: "GitHub", url: "#"}
    ],
    image: "assets/images/project-thumb.webp",
    imageAlt: "SmartHome dashboard preview"
  },
  {
    title: "Tetrix (Java)",
    stack: ["JavaFX","JSON","AI"],
    summary: "Tetris with JSON config, persistent high scores, and AI heuristics.",
    bullets: [
      "Save/Load config & scores",
      "Dynamic window resizing",
      "Music & SFX toggles"
    ],
    links: [
      {label: "Video", url: "#"},
      {label: "GitHub", url: "#"}
    ]
  },
  {
    title: "Feather-Security",
    stack: ["ServiceNow","SecOps"],
    summary: "Automated phishing detection and incident response workflows.",
    bullets: [
      "End-to-end triage pipeline",
      "Vulnerability response dashboards",
      "Training content & KPIs"
    ],
    links: [
      {label: "Case Study", url: "#"},
      {label: "Slides", url: "#"}
    ]
  }
];

// ---- Render project cards ----
const grid = document.getElementById('projectsGrid');
if (grid) {
  grid.innerHTML = projects.map(p => {
    const badge = `<span class="badge">${p.stack.join(" • ")}</span>`;
    const img = p.image ? `<img src="${p.image}" alt="${p.imageAlt || p.title}" loading="lazy" class="thumb">` : "";
    const lis = p.bullets.map(b => `<li>${b}</li>`).join("");
    const links = p.links.map(l => `<a class="link" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join(" ");
    return `
      <article class="card">
        <header>
          <h3>${p.title}</h3>
          ${badge}
        </header>
        ${img}
        <p>${p.summary}</p>
        <ul>${lis}</ul>
        <footer>${links}</footer>
      </article>
    `;
  }).join("");
}
