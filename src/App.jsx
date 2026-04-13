const makeProjectArt = (title, subtitle) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520" role="img" aria-label="${title} abstract cover">
      <rect width="800" height="520" fill="#111111" />
      <path d="M40 392C154 332 266 330 374 286C470 246 556 164 760 124" fill="none" stroke="#8A0303" stroke-width="10" stroke-linecap="round" opacity="0.9"/>
      <path d="M78 438C218 376 348 380 488 332C604 292 678 238 764 190" fill="none" stroke="#C5A059" stroke-width="3" stroke-linecap="round" opacity="0.75"/>
      <circle cx="642" cy="138" r="64" fill="#8A0303" opacity="0.18"/>
      <circle cx="642" cy="138" r="46" fill="#C5A059" opacity="0.08"/>
      <text x="58" y="118" fill="#F2EEE7" font-size="64" font-family="Georgia, serif">${title}</text>
      <text x="62" y="168" fill="#C5A059" font-size="22" font-family="Verdana, sans-serif" letter-spacing="4">${subtitle}</text>
      <path d="M56 236H334" stroke="#3A3328" stroke-width="2"/>
      <path d="M56 266H296" stroke="#3A3328" stroke-width="2"/>
      <path d="M56 296H252" stroke="#3A3328" stroke-width="2"/>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

const profile = {
  name: 'Daksh',
  role: '2nd Year Computer Science Student',
  summary:
    'Focused on game development, virtual reality, and low-level graphics with hands-on work in Unity, C++, and OpenGL.',
  detail:
    'The current portfolio centers on gameplay systems, rendering fundamentals, object-oriented design, and interactive VR development.',
  email: 'gargdaksh0616@gmail.com',
  github: 'https://github.com/DaDicaso',
};

const techStack = ['Unity', 'VR', 'C/C++', 'Blender'];

const focusAreas = [
  {
    title: 'Current Focus',
    body: 'Game development, immersive VR workflows, and real-time interaction systems.',
  },
  {
    title: 'Systems Work',
    body: 'Custom physics logic, rendering pipelines, and low-level graphics concepts.',
  },
  {
    title: 'Core Strengths',
    body: 'Object-oriented programming, problem solving, and scalable code structure.',
  },
];

const projects = [
  {
    name: 'VArena',
    subtitle: 'Unity Prototype',
    image: makeProjectArt('VArena', 'UNITY / NETWORKED GAMEPLAY'),
    bullets: [
      'Multiplayer arena shooter prototype built in Unity.',
      'Implemented character classes, ability systems, and network state synchronization.',
      'Applied client-side prediction and server reconciliation.',
    ],
  },
  {
    name: 'MAPMIT',
    subtitle: 'C++ Systems Project',
    image: makeProjectArt('MAPMIT', 'C++ / PHYSICS / OPENGL'),
    bullets: [
      '2D rigid body physics engine built from scratch in C++.',
      'Implemented SAT collision detection and impulse-based collision resolution.',
      'Added gravity, spatial partitioning, and OpenGL debug rendering.',
    ],
  },
  {
    name: 'AirLense',
    subtitle: 'VR Interaction Study',
    image: makeProjectArt('AirLense', 'UNITY / VR / INTERACTION'),
    bullets: [
      'Immersive VR experience built in Unity.',
      'Implemented grab interactions, physics-based puzzles, and spatial audio.',
      'Structured the interaction system to support adding new puzzle elements.',
    ],
  },
];

const leaves = [
  { left: '8%', delay: '0s', duration: '14s', drift: '-5vw', size: '1rem' },
  { left: '18%', delay: '4s', duration: '16s', drift: '4vw', size: '0.9rem' },
  { left: '28%', delay: '2s', duration: '13s', drift: '-3vw', size: '1.1rem' },
  { left: '42%', delay: '7s', duration: '18s', drift: '5vw', size: '1rem' },
  { left: '58%', delay: '1s', duration: '15s', drift: '-4vw', size: '0.95rem' },
  { left: '68%', delay: '5s', duration: '17s', drift: '3vw', size: '1.15rem' },
  { left: '80%', delay: '3s', duration: '12s', drift: '-2vw', size: '0.85rem' },
  { left: '90%', delay: '6s', duration: '19s', drift: '4vw', size: '1rem' },
];

function InkDivider() {
  return (
    <div className="ink-divider" aria-hidden="true">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M20 62C182 24 288 26 406 52C516 76 630 94 752 78C884 60 984 34 1180 56"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M94 84C244 96 370 96 502 84C640 72 784 48 942 54C1036 58 1102 68 1168 80"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>
    </div>
  );
}

function LeafField() {
  return (
    <div className="leaf-field" aria-hidden="true">
      {leaves.map((leaf, index) => (
        <span
          key={index}
          className="leaf"
          style={{
            left: leaf.left,
            animationDelay: leaf.delay,
            animationDuration: leaf.duration,
            '--leaf-drift': leaf.drift,
            '--leaf-size': leaf.size,
          }}
        >
          <svg viewBox="0 0 32 32">
            <path d="M16 2C14 8 10 9 8 14C6 18 6 22 8 25C9 21 11 20 13 19C10 22 9 26 10 30C13 27 15 25 16 21C17 25 19 27 22 30C23 26 22 22 19 19C21 20 23 21 24 25C26 22 26 18 24 14C22 9 18 8 16 2Z" />
          </svg>
        </span>
      ))}
    </div>
  );
}

function App() {
  const year = new Date().getFullYear();

  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <LeafField />

      <header className="site-header">
        <nav className="site-nav" aria-label="Primary navigation">
          <a className="wordmark" href="#top" aria-label="Go to top of page">
            {profile.name}
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main id="content" className="shell">
        <section className="hero section-grid" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">{profile.role}</p>
            <h1 id="hero-title">Game development, VR, and graphics systems in a minimal single-page resume.</h1>
            <p className="intro">{profile.summary}</p>
            <p className="detail">{profile.detail}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects" aria-label="Jump to featured projects">
                View Projects
              </a>
              <a className="button button-secondary" href={`mailto:${profile.email}`} aria-label="Send an email to Daksh">
                Email
              </a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Resume snapshot">
            <div className="summary-card">
              <p className="summary-label">Tech Stack</p>
              <div className="tag-list" aria-label="Primary tech stack">
                {techStack.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="summary-grid">
              {focusAreas.map((item) => (
                <article className="panel-card" key={item.title}>
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </aside>
        </section>

        <InkDivider />

        <section className="section-grid section-block" id="about" aria-labelledby="about-title">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2 id="about-title">Clear structure, restrained copy, and mobile-first presentation.</h2>
          </div>

          <div className="about-grid">
            <article className="panel-card">
              <h3>Background</h3>
              <p>
                Current work is centered on Unity-based development, VR interaction, and the math and logic behind
                real-time experiences.
              </p>
            </article>
            <article className="panel-card">
              <h3>Technical Direction</h3>
              <p>
                The existing portfolio evidence points to hands-on work with rendering, collision handling, gameplay
                systems, and object-oriented architecture.
              </p>
            </article>
            <article className="panel-card">
              <h3>Portfolio Intent</h3>
              <p>
                This refactor keeps the surface minimal while preserving accessibility, responsive structure, and
                deployment readiness.
              </p>
            </article>
          </div>
        </section>

        <InkDivider />

        <section className="section-grid section-block" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2 id="projects-title">Selected work shown as uniform factual cards.</h2>
          </div>

          <div className="projects-grid" role="list" aria-label="Project cards">
            {projects.map((project) => (
              <article className="project-card" key={project.name} role="listitem" aria-labelledby={`${project.name}-title`}>
                <img
                  className="project-art"
                  src={project.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  aria-hidden="true"
                />
                <div className="project-copy">
                  <div className="project-header">
                    <h3 id={`${project.name}-title`}>{project.name}</h3>
                    <p>{project.subtitle}</p>
                  </div>
                  <ul>
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <InkDivider />

        <section className="section-grid section-block contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">Direct links for follow-up.</h2>
          </div>

          <address className="contact-grid">
            <a className="contact-card" href={`mailto:${profile.email}`} aria-label="Email Daksh">
              <span>Email</span>
              <strong>{profile.email}</strong>
            </a>
            <a className="contact-card" href={profile.github} target="_blank" rel="noreferrer" aria-label="Open GitHub profile">
              <span>GitHub</span>
              <strong>github.com/DaDicaso</strong>
            </a>
          </address>
        </section>
      </main>

      <footer className="site-footer">
        <p>{year} Daksh. Built for a single-page resume deployment.</p>
      </footer>
    </>
  );
}

export default App;
