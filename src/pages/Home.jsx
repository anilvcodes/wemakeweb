import { Link } from "react-router-dom";

const featuredProjects = [
  {
    title: "VDC Med",
    type: "Healthcare",
    url: "https://vdcmed.com/",
    theme: "medical",
  },
  {
    title: "American EDU",
    type: "Education",
    url: "https://american-edu.us/",
    theme: "education",
  },
  {
    title: "Drew Celebrant",
    type: "Personal Brand",
    url: "https://drewcelebrant.com/",
    theme: "celebrant",
  },
];

function ProjectVisual({ theme }) {
  return (
    <div className={`project-visual ${theme}`}>
      <div className="browser-bar">
        <span />
        <span />
        <span />
      </div>

      <div className="dummy-screen">
        {theme === "medical" && (
          <>
            <div className="dummy-nav">
              <b>
                VDC<span>MED</span>
              </b>
              <i>●</i>
            </div>

            <div className="dummy-content">
              <small>YOUR HEALTH. OUR PRIORITY.</small>
              <h3>
                Better care.
                <br />
                Better life.
              </h3>

              <div className="dummy-btn">
                BOOK APPOINTMENT
              </div>
            </div>

            <div className="dummy-circle">+</div>
          </>
        )}

        {theme === "education" && (
          <>
            <div className="dummy-nav">
              <b>AMERICAN</b>
              <i>EDU</i>
            </div>

            <div className="edu-shape" />

            <div className="dummy-content">
              <small>BUILD YOUR FUTURE</small>

              <h3>
                Learn.
                <br />
                Grow.
              </h3>

              <div className="dummy-lines">
                <span />
                <span />
              </div>
            </div>
          </>
        )}

        {theme === "celebrant" && (
          <>
            <div className="celebrant-photo">DC</div>

            <div className="celebrant-copy">
              <small>CELEBRANT & STORYTELLER</small>

              <h3>
                Your story,
                <br />
                beautifully told.
              </h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* HERO */}

      <section className="hero">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />

        <div className="hero-left">
          <div className="eyebrow">
            <span className="status-dot" />
            DIGITAL AGENCY • WORLDWIDE
          </div>

          <h1>
            We build
            <br />
            <span className="outline">websites</span>
            <br />
            that <span className="lime">work.</span>
          </h1>

          <p className="hero-text">
            WeMake Web creates high-performance websites,
            e-commerce experiences and digital systems for
            ambitious businesses.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="primary-btn">
              Explore our work <span>↗</span>
            </Link>

            <Link to="/contact" className="text-btn">
              Let's talk <span>↓</span>
            </Link>
          </div>

          <div className="hero-proof">
            <div className="avatars">
              <span>W</span>
              <span>D</span>
              <span>A</span>
              <span>+</span>
            </div>

            <div>
              <strong>Built for ambitious brands</strong>
              <small>
                Design • Development • Growth
              </small>
            </div>
          </div>
        </div>

        <div className="home-card">
          <span className="card-label">
            WE MAKE DIGITAL
          </span>

          <h2>
            Ideas into
            <br />
            <em>experiences.</em>
          </h2>

          <p>
            Strategy, design, development and automation
            designed around your business.
          </p>

          <Link to="/services" className="card-link">
            Explore services <span>↗</span>
          </Link>
        </div>
      </section>

      {/* MARQUEE */}

      <div className="marquee">
        <div className="marquee-track">
          <span>WEB DESIGN</span>
          <b>✦</b>
          <span>DEVELOPMENT</span>
          <b>✦</b>
          <span>E-COMMERCE</span>
          <b>✦</b>
          <span>AI AUTOMATION</span>
          <b>✦</b>

          <span>WEB DESIGN</span>
          <b>✦</b>
          <span>DEVELOPMENT</span>
          <b>✦</b>
          <span>E-COMMERCE</span>
          <b>✦</b>
          <span>AI AUTOMATION</span>
          <b>✦</b>
        </div>
      </div>

      {/* INTRO */}

      <section className="section intro-section">
        <div className="section-head">
          <div>
            <span className="section-number">
              01 / WHO WE ARE
            </span>

            <h2>
              Digital work
              <br />
              <span>with purpose.</span>
            </h2>
          </div>

          <p>
            We combine strategy, design and technology to
            create digital experiences that look great,
            perform fast and help businesses grow.
          </p>
        </div>

        <div className="intro-grid">
          <div className="big-number">01</div>

          <div>
            <h3>
              Design is more than
              <br />
              making things look good.
            </h3>

            <p>
              Every website should have a reason to exist.
              We focus on clear messaging, thoughtful
              experiences and technology that supports your
              goals.
            </p>

            <Link to="/about" className="outline-btn">
              More about us <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}

      <section className="section work-section">
        <div className="section-head">
          <div>
            <span className="section-number">
              02 / SELECTED WORK
            </span>

            <h2>
              Built to be
              <br />
              <span>remembered.</span>
            </h2>
          </div>

          <p>
            A selection of digital experiences we've
            designed and built across different industries.
          </p>
        </div>

        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <a
              className={`project-card card-${index + 1}`}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              key={project.title}
            >
              <ProjectVisual theme={project.theme} />

              <div className="project-info">
                <div>
                  <span>{project.type}</span>
                  <h3>{project.title}</h3>
                </div>

                <div className="project-arrow">↗</div>
              </div>
            </a>
          ))}
        </div>

        <div className="center-button">
          <Link to="/projects" className="primary-btn">
            View all projects <span>↗</span>
          </Link>
        </div>
      </section>

      {/* SERVICES PREVIEW */}

      <section className="section services-preview">
        <div className="section-head">
          <div>
            <span className="section-number">
              03 / WHAT WE DO
            </span>

            <h2>
              Everything your
              <br />
              <span>brand needs.</span>
            </h2>
          </div>

          <p>
            From your first idea to the final launch, we
            bring strategy, creativity and technology
            together.
          </p>
        </div>

        <div className="services-list">
          <div className="service-row">
            <span className="service-number">01</span>
            <h3>Web Design</h3>
            <p>
              High-converting websites with premium visual
              systems.
            </p>
            <span className="service-arrow">↗</span>
          </div>

          <div className="service-row">
            <span className="service-number">02</span>
            <h3>E-Commerce</h3>
            <p>
              Online stores designed to turn visitors into
              customers.
            </p>
            <span className="service-arrow">↗</span>
          </div>

          <div className="service-row">
            <span className="service-number">03</span>
            <h3>Development</h3>
            <p>
              Fast, scalable and custom-built digital
              experiences.
            </p>
            <span className="service-arrow">↗</span>
          </div>

          <div className="service-row">
            <span className="service-number">04</span>
            <h3>AI & Automation</h3>
            <p>
              Smart systems that save time and grow your
              business.
            </p>
            <span className="service-arrow">↗</span>
          </div>
        </div>

        <div className="center-button">
          <Link to="/services" className="outline-btn">
            Explore all services <span>↗</span>
          </Link>
        </div>
      </section>

      {/* STATEMENT */}

      <section className="statement">
        <div className="statement-orb" />

        <span>YOUR WEBSITE ISN'T</span>

        <h2>
          JUST A
          <br />
          <strong>WEBSITE.</strong>
        </h2>

        <p>
          It's your first impression, your salesperson,
          your storefront and your strongest digital asset.
        </p>
      </section>

      {/* PROCESS */}

      <section className="section process-section">
        <div className="section-head">
          <div>
            <span className="section-number">
              04 / HOW WE WORK
            </span>

            <h2>
              Simple process.
              <br />
              <span>Serious results.</span>
            </h2>
          </div>
        </div>

        <div className="process-grid">
          <div className="process-card">
            <span>01</span>
            <div className="process-icon">◌</div>
            <h3>Discover</h3>
            <p>
              We understand your business, audience and
              goals.
            </p>
          </div>

          <div className="process-card">
            <span>02</span>
            <div className="process-icon">◇</div>
            <h3>Design</h3>
            <p>
              We turn strategy into a visual experience
              people remember.
            </p>
          </div>

          <div className="process-card">
            <span>03</span>
            <div className="process-icon">⌘</div>
            <h3>Build</h3>
            <p>
              Clean, responsive and high-performance
              development.
            </p>
          </div>

          <div className="process-card">
            <span>04</span>
            <div className="process-icon">↗</div>
            <h3>Launch</h3>
            <p>
              We launch, test and help your digital
              presence grow.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="final-cta">
        <div className="cta-circle" />

        <span>HAVE A PROJECT IN MIND?</span>

        <h2>
          Let's build
          <br />
          something <em>great.</em>
        </h2>

        <Link to="/contact" className="primary-btn large">
          Start your project <span>↗</span>
        </Link>
      </section>
    </main>
  );
}