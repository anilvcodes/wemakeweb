import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Web Design",
    description:
      "Strategic, modern websites designed around your brand, audience and business goals.",
    items: [
      "UX & UI Design",
      "Responsive Design",
      "Landing Pages",
      "Brand Systems",
    ],
  },
  {
    number: "02",
    title: "E-Commerce",
    description:
      "Online stores designed to create better shopping experiences and turn visitors into customers.",
    items: [
      "Shop Design",
      "Product Pages",
      "Checkout Experience",
      "Store Development",
    ],
  },
  {
    number: "03",
    title: "Development",
    description:
      "Fast, responsive and scalable websites built using modern technologies.",
    items: [
      "React Development",
      "Frontend Development",
      "CMS Integration",
      "Performance Optimization",
    ],
  },
  {
    number: "04",
    title: "AI & Automation",
    description:
      "Smart digital systems that reduce repetitive work and help your business operate more efficiently.",
    items: [
      "AI Integrations",
      "Workflow Automation",
      "Business Systems",
      "API Integrations",
    ],
  },
];

export default function Services() {
  return (
    <main>
      <section className="inner-hero">
        <span className="section-number">
          01 / SERVICES
        </span>

        <h1>
          Digital services
          <br />
          <span>built to work.</span>
        </h1>

        <p>
          Everything you need to create a stronger digital
          presence, from strategy and design to development
          and automation.
        </p>
      </section>

      <section className="section services-page">
        <div className="services-large-list">
          {services.map((service) => (
            <article
              className="large-service"
              key={service.number}
            >
              <div className="large-service-top">
                <span>{service.number}</span>

                <h2>{service.title}</h2>

                <span className="service-big-arrow">
                  ↗
                </span>
              </div>

              <div className="large-service-content">
                <p>{service.description}</p>

                <div className="service-items">
                  {service.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="statement">
        <div className="statement-orb" />

        <span>GOOD DIGITAL WORK</span>

        <h2>
          SHOULD
          <br />
          <strong>DELIVER.</strong>
        </h2>

        <p>
          Beautiful design matters. But it should also
          communicate, convert and support your business.
        </p>
      </section>

      <section className="section process-section">
        <div className="section-head">
          <div>
            <span className="section-number">
              02 / OUR PROCESS
            </span>

            <h2>
              From idea
              <br />
              <span>to launch.</span>
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
              objectives.
            </p>
          </div>

          <div className="process-card">
            <span>02</span>
            <div className="process-icon">◇</div>
            <h3>Design</h3>
            <p>
              We create a clear and memorable visual
              direction.
            </p>
          </div>

          <div className="process-card">
            <span>03</span>
            <div className="process-icon">⌘</div>
            <h3>Build</h3>
            <p>
              We turn the design into a fast and responsive
              experience.
            </p>
          </div>

          <div className="process-card">
            <span>04</span>
            <div className="process-icon">↗</div>
            <h3>Launch</h3>
            <p>
              We test, launch and help you move forward.
            </p>
          </div>
        </div>
      </section>

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