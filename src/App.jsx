import { useState } from "react";
import "./index.css";

const projects = [
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
  {
    title: "Vinoimore",
    type: "E-Commerce",
    url: "https://vinoimore.de/",
    theme: "wine",
  },
  {
    title: "SK Refrigeration",
    type: "Business",
    url: "https://skrefrigeration.shop/",
    theme: "business",
  },
  {
    title: "Gyan Automation",
    type: "Automation",
    url: "https://gyanautomation.com/",
    theme: "automation",
  },
];

const services = [
  ["01", "Web Design", "High-converting websites with premium visual systems."],
  ["02", "E-Commerce", "Online stores designed to turn visitors into customers."],
  ["03", "Development", "Fast, scalable and custom-built digital experiences."],
  ["04", "AI & Automation", "Smart systems that save time and grow your business."],
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
              <b>VDC<span>MED</span></b>
              <i>●</i>
            </div>
            <div className="dummy-content">
              <small>YOUR HEALTH. OUR PRIORITY.</small>
              <h3>Better care.<br />Better life.</h3>
              <div className="dummy-btn">BOOK APPOINTMENT</div>
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
              <h3>Learn.<br />Grow.</h3>
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
              <h3>Your story,<br />beautifully told.</h3>
            </div>
          </>
        )}

        {theme === "wine" && (
          <>
            <div className="wine-bottle">V</div>
            <div className="wine-copy">
              <small>PREMIUM WINE</small>
              <h3>Discover<br />your taste.</h3>
            </div>
          </>
        )}

        {theme === "business" && (
          <>
            <div className="business-grid">
              <div>24/7</div>
              <div>COOL</div>
              <div>PRO</div>
              <div>FAST</div>
            </div>
            <div className="business-copy">
              <small>REFRIGERATION SOLUTIONS</small>
              <h3>Built for<br />performance.</h3>
            </div>
          </>
        )}

        {theme === "automation" && (
          <>
            <div className="automation-orb" />
            <div className="automation-copy">
              <small>AI • AUTOMATION • SYSTEMS</small>
              <h3>Work smarter.<br />Automatically.</h3>
            </div>
            <div className="automation-line" />
          </>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [menu, setMenu] = useState(false);
  const [sent, setSent] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 4000);
  };

  return (
    <div className="site">

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo">
          <span className="logo-mark">W</span>
          <span>WeMake<span className="lime">Web</span></span>
        </a>

        <nav className={menu ? "nav-links open" : "nav-links"}>
          <a href="#work" onClick={() => setMenu(false)}>Work</a>
          <a href="#services" onClick={() => setMenu(false)}>Services</a>
          <a href="#process" onClick={() => setMenu(false)}>Process</a>
          <a href="#contact" onClick={() => setMenu(false)}>Contact</a>
        </nav>

        <a href="#contact" className="nav-cta">Start a project <span>↗</span></a>

        <button
          className="menu-btn"
          onClick={() => setMenu(!menu)}
          aria-label="Menu"
        >
          {menu ? "×" : "☰"}
        </button>
      </header>

      {/* HERO */}
      <main id="home">

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
              WeMake Web creates high-performance websites, e-commerce
              experiences and digital systems for ambitious businesses.
            </p>

            <div className="hero-actions">
              <a href="#work" className="primary-btn">
                Explore our work <span>↗</span>
              </a>

              <a href="#contact" className="text-btn">
                Let's talk <span>↓</span>
              </a>
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
                <small>Design • Development • Growth</small>
              </div>
            </div>
          </div>

          {/* ENQUIRY FORM */}
          <div className="enquiry-card" id="contact">
            <div className="form-top">
              <div>
                <span className="form-label">HAVE A PROJECT?</span>
                <h2>Let's make it<br /><em>happen.</em></h2>
              </div>

              <div className="form-icon">↗</div>
            </div>

            {sent ? (
              <div className="success-box">
                <div className="success-icon">✓</div>
                <h3>Thanks!</h3>
                <p>Your enquiry has been received.</p>
                <small>We'll get back to you soon.</small>
              </div>
            ) : (
              <form onSubmit={submitForm}>
                <div className="input-row">
                  <label>
                    <span>Your name</span>
                    <input required placeholder="John Smith" />
                  </label>

                  <label>
                    <span>Work email</span>
                    <input
                      required
                      type="email"
                      placeholder="john@company.com"
                    />
                  </label>
                </div>

                <label>
                  <span>What can we help with?</span>
                  <select required defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option>Website Design</option>
                    <option>E-Commerce</option>
                    <option>Custom Development</option>
                    <option>AI & Automation</option>
                    <option>Website Redesign</option>
                  </select>
                </label>

                <label>
                  <span>Project budget</span>
                  <select required defaultValue="">
                    <option value="" disabled>Select budget</option>
                    <option>$250 – $500</option>
                    <option>$500 – $1,000</option>
                    <option>$1,000 – $2,500</option>
                    <option>$2,500+</option>
                  </select>
                </label>

                <button className="form-submit" type="submit">
                  Start a conversation <span>↗</span>
                </button>

                <p className="form-note">
                  No pressure. Just tell us what you're building.
                </p>
              </form>
            )}
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee">
          <div className="marquee-track">
            <span>WEB DESIGN</span><b>✦</b>
            <span>DEVELOPMENT</span><b>✦</b>
            <span>E-COMMERCE</span><b>✦</b>
            <span>AI AUTOMATION</span><b>✦</b>
            <span>WEB DESIGN</span><b>✦</b>
            <span>DEVELOPMENT</span><b>✦</b>
            <span>E-COMMERCE</span><b>✦</b>
            <span>AI AUTOMATION</span><b>✦</b>
          </div>
        </div>

        {/* WORK */}
        <section className="section work-section" id="work">
          <div className="section-head">
            <div>
              <span className="section-number">01 / SELECTED WORK</span>
              <h2>Built to be<br /><span>remembered.</span></h2>
            </div>

            <p>
              A selection of digital experiences we've designed and built
              across different industries.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
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
        </section>

        {/* SERVICES */}
        <section className="section services-section" id="services">
          <div className="section-head">
            <div>
              <span className="section-number">02 / WHAT WE DO</span>
              <h2>Everything your<br /><span>brand needs.</span></h2>
            </div>

            <p>
              Strategy, design and technology under one roof.
              No unnecessary layers. Just great digital work.
            </p>
          </div>

          <div className="services-list">
            {services.map(([number, title, text]) => (
              <div className="service-row" key={number}>
                <span className="service-number">{number}</span>

                <h3>{title}</h3>

                <p>{text}</p>

                <span className="service-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        {/* BIG STATEMENT */}
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
        <section className="section process-section" id="process">
          <div className="section-head">
            <div>
              <span className="section-number">03 / HOW WE WORK</span>
              <h2>Simple process.<br /><span>Serious results.</span></h2>
            </div>
          </div>

          <div className="process-grid">
            <div className="process-card">
              <span>01</span>
              <div className="process-icon">◌</div>
              <h3>Discover</h3>
              <p>We understand your business, audience and goals.</p>
            </div>

            <div className="process-card">
              <span>02</span>
              <div className="process-icon">◇</div>
              <h3>Design</h3>
              <p>We turn strategy into a visual experience people remember.</p>
            </div>

            <div className="process-card">
              <span>03</span>
              <div className="process-icon">⌘</div>
              <h3>Build</h3>
              <p>Clean, responsive and high-performance development.</p>
            </div>

            <div className="process-card">
              <span>04</span>
              <div className="process-icon">↗</div>
              <h3>Launch</h3>
              <p>We launch, test and help your digital presence grow.</p>
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

          <a href="#contact" className="primary-btn large">
            Start your project <span>↗</span>
          </a>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="logo">
              <span className="logo-mark">W</span>
              <span>WeMake<span className="lime">Web</span></span>
            </a>

            <p>
              We build websites<br />
              that build businesses.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <span>EXPLORE</span>
              <a href="#work">Work</a>
              <a href="#services">Services</a>
              <a href="#process">Process</a>
            </div>

            <div>
              <span>CONNECT</span>
              <a href="#contact">Start a project</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="mailto:hello@wemakeweb.com">
                Email us
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 WeMake Web. All rights reserved.</span>
          <span>DESIGNED WITH INTENT.</span>
        </div>
      </footer>
    </div>
  );
}