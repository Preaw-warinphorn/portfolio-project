// year stamp
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
});

// (optional) mobile menu toggle if you want to make it functional later
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
toggle?.addEventListener('click', () => {
 menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
 });
// ---- Projects data (edit this) ----
const projects = [
  
  {
    title: "Tetrix (Java)",
    stack: ["Java","JavaFX","JSON"],
    summary: "Tetris with JSON config, persistent high scores, and AI heuristics.",
    bullets: [
      "game field for 1 or 2 players",
      "Save/Load config & scores",
      "Dynamic window resizing",
      "Music & SFX toggles"
    ],
    links: [
      {label: "Video", url: "https://www.youtube.com/watch?v=MUCsAu3I0Wc"},
      {label: "GitHub", url: "https://github.com/shengguagua/tetris-game"}
    ]
  },
  {
    title: "Brick Measure Environment",
    stack: ["HTML","CSS","Javascript","C++", "JSON", "Sensor hardware"],
    summary: "An IoT-based environment-monitoring brick using NodeMCU and sensors measures temperature, humidity, and vibrations, sending real-time alerts via LINE Notify to enhance home safety.",
    bullets: [
      "Created an environment-monitoring brick prototype.",
      "Measures temperature, humidity, and vibrations around the house.",
      "Uses NodeMCU with environmental sensors.",
      "Displays data on a web page.",
      "Sends alerts via LINE Notify."      
    ],
    links: [
      {label: "Video", url: "https://www.youtube.com/watch?v=jNG6OQ4r49c"},
      {label: "My drive", url: "https://drive.google.com/file/d/1M4_h2tAjXJHLGUy6-lqd8iCfEp6GnO2x/view?usp=sharing"}
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