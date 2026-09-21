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

        {theme === "wine" && (
          <>
            <div className="wine-bottle">V</div>

            <div className="wine-copy">
              <small>PREMIUM WINE</small>

              <h3>
                Discover
                <br />
                your taste.
              </h3>
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

              <h3>
                Built for
                <br />
                performance.
              </h3>
            </div>
          </>
        )}

        {theme === "automation" && (
          <>
            <div className="automation-orb" />

            <div className="automation-copy">
              <small>
                AI • AUTOMATION • SYSTEMS
              </small>

              <h3>
                Work smarter.
                <br />
                Automatically.
              </h3>
            </div>

            <div className="automation-line" />
          </>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <main>
      <section className="inner-hero">
        <span className="section-number">
          01 / PROJECTS
        </span>

        <h1>
          Work we're
          <br />
          <span>proud of.</span>
        </h1>

        <p>
          A collection of websites and digital experiences
          created for businesses across different
          industries.
        </p>
      </section>

      <section className="section projects-page">
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

                <div className="project-arrow">
                  ↗
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="project-bottom">
        <span>YOUR PROJECT COULD BE NEXT</span>

        <h2>
          Have an idea?
          <br />
          <em>Let's build it.</em>
        </h2>

        <a href="/contact" className="primary-btn large">
          Start a project <span>↗</span>
        </a>
      </section>
    </main>
  );
}