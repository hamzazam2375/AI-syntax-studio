
const services = [
  {
    number: "01",
    title: "AI Automation",
    description:
      "Replace repetitive tasks with intelligent workflows that give your team more time to focus on meaningful work.",
    tags: ["Workflow design", "Process automation"],
  },
  {
    number: "02",
    title: "Custom AI Solutions",
    description:
      "Build practical AI-powered tools around your business needs, data, and existing systems.",
    tags: ["AI assistants", "LLM integration"],
  },
  {
    number: "03",
    title: "Intelligent Systems",
    description:
      "Connect your tools, data, and applications into reliable systems that work together.",
    tags: ["API integration", "Data workflows"],
  },
];

const projects = [
  {
    number: "01",
    type: "CONCEPT PROJECT",
    title: "Intelligent Support",
    description:
      "An AI assistant concept that helps businesses answer customer questions using their own knowledge base.",
    tags: ["AI", "Knowledge retrieval"],
  },
  {
    number: "02",
    type: "CONCEPT PROJECT",
    title: "Workflow, Reimagined",
    description:
      "A workflow concept that connects incoming leads, business tools, and follow-up tasks in one process.",
    tags: ["Automation", "Integrations"],
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="AI Syntax Studio home">
          <span className="brand-mark">{"</>"}</span>
          <span>AI SYNTAX<span className="brand-light"> STUDIO</span></span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#work">Selected work</a>
          <a href="#about">About</a>
        </nav>

        <a className="nav-cta" href="#contact">
          Let&apos;s talk <span>↗</span>
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-orb" aria-hidden="true" />

        <div className="hero-content">
          <p className="eyebrow">
            <span className="status-dot" />
            AI SOLUTIONS · AUTOMATION · ENGINEERING
          </p>

          <h1>
            Less busywork.
            <br />
            <span>More possibility.</span>
          </h1>

          <p className="hero-description">
            We design and build intelligent systems that help businesses
            work smarter, move faster, and make better use of technology.
          </p>

          <div className="hero-actions">
            <a className="button-primary" href="#contact">
              Discuss a project <span>↗</span>
            </a>
            <a className="button-secondary" href="#work">
              Explore our work <span>↓</span>
            </a>
          </div>

          <div className="hero-note">
            <span className="note-line" />
            PRACTICAL AI. PURPOSEFUL ENGINEERING.
          </div>
        </div>

        <div className="hero-index" aria-hidden="true">
          <span>INDEPENDENT AI STUDIO</span>
          <span>01 / 04</span>
        </div>
      </section>

      <section className="intro-strip">
        <p>GOOD TECHNOLOGY SHOULD MAKE WORK FEEL SIMPLER.</p>
        <span>Built around real problems, not hype.</span>
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow">WHAT WE DO / 01</p>
            <h2>Intelligence with<br />a purpose.</h2>
          </div>
          <p className="section-summary">
            The right solution starts with understanding the problem.
            We focus on technology that serves a clear business purpose.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="card-top">
                <span>{service.number}</span>
                <span className="card-arrow">↗</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="tag-list">
                {service.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SELECTED WORK / 02</p>
            <h2>Ideas into<br />working systems.</h2>
          </div>
          <p className="section-summary">
            A look at the kinds of problems we are exploring
            through AI, automation, and software engineering.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-visual">
                <div className="visual-window">
                  <div className="visual-topbar">
                    <span /><span /><span />
                    <small>AI SYNTAX / LAB</small>
                  </div>
                  <div className="visual-content">
                    <div className="visual-label">SYSTEM PREVIEW</div>
                    <div className="visual-title">
                      {project.number === "01"
                        ? "Knowledge, connected."
                        : "Workflows, in motion."}
                    </div>
                    <div className="visual-node-row">
                      <span>INPUT</span>
                      <i />
                      <span>AI CORE</span>
                      <i />
                      <span>OUTPUT</span>
                    </div>
                    <div className="visual-bars">
                      <span /><span /><span />
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-meta">
                <span>{project.type}</span>
                <span>0{project.number}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="work-disclaimer">
          The projects above are concept demonstrations, not client engagements.
        </p>
      </section>

      <section className="approach-section" id="about">
        <p className="eyebrow">HOW WE THINK / 03</p>
        <h2>Technology is the tool.<br /><span>Progress is the point.</span></h2>
        <p className="approach-description">
          We believe useful AI starts with a real problem, a thoughtful
          design, and a solution built to work beyond the demo.
        </p>
        <div className="process-grid">
          {[
            ["01", "Discover", "Understand the problem and the people behind it."],
            ["02", "Design", "Find a clear, practical path to a solution."],
            ["03", "Build", "Develop, integrate, and test the system."],
            ["04", "Improve", "Refine the solution around real-world needs."],
          ].map(([number, title, description]) => (
            <div className="process-item" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">HAVE A PROBLEM WORTH SOLVING?</p>
        <h2>Let&apos;s make<br /><span>something useful.</span></h2>
        <p>
          Tell us what you are trying to improve. We can explore
          whether AI or automation is the right fit.
        </p>
        <a
          className="button-primary"
          href="mailto:hello@aisyntax.studio?subject=Project%20inquiry"
        >
          Start a conversation <span>↗</span>
        </a>
        <span className="contact-note">
          Replace this sample email with your actual business email.
        </span>
      </section>

      <footer className="site-footer">
        <a className="brand" href="#home">
          <span className="brand-mark">{"</>"}</span>
          <span>AI SYNTAX<span className="brand-light"> STUDIO</span></span>
        </a>
        <span>Thoughtful systems. Useful outcomes.</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
