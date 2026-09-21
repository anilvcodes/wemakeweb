import { Link } from "react-router-dom";

export default function About() {
  return (
    <main>
      <section className="inner-hero">
        <span className="section-number">
          01 / ABOUT US
        </span>

        <h1>
          We make
          <br />
          <span>digital matter.</span>
        </h1>

        <p>
          WeMake Web is a digital agency focused on
          creating websites, digital experiences and
          systems that help ambitious businesses move
          forward.
        </p>
      </section>

      <section className="section about-intro">
        <div className="about-large">
          <span>WHO WE ARE</span>

          <h2>
            Small team.
            <br />
            <span>Big thinking.</span>
          </h2>
        </div>

        <div className="about-copy">
          <p>
            We believe great digital work sits at the
            intersection of strategy, design and technology.
          </p>

          <p>
            Instead of creating websites simply to fill
            space online, we create digital experiences
            designed around real business goals.
          </p>

          <p>
            From a new startup to an established company,
            we build websites that communicate clearly,
            perform quickly and give your brand a stronger
            digital presence.
          </p>
        </div>
      </section>

      <section className="about-values">
        <div className="section">
          <div className="section-head">
            <div>
              <span className="section-number">
                02 / OUR APPROACH
              </span>

              <h2>
                What we
                <br />
                <span>believe.</span>
              </h2>
            </div>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <span>01</span>
              <h3>Clarity</h3>
              <p>
                Good design should make things easier to
                understand, not more complicated.
              </p>
            </div>

            <div className="value-card">
              <span>02</span>
              <h3>Purpose</h3>
              <p>
                Every page, interaction and element should
                have a reason to exist.
              </p>
            </div>

            <div className="value-card">
              <span>03</span>
              <h3>Quality</h3>
              <p>
                We care about the details that turn a good
                digital experience into a memorable one.
              </p>
            </div>

            <div className="value-card">
              <span>04</span>
              <h3>Growth</h3>
              <p>
                A website should be built to support where
                your business is going, not just where it is
                today.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-process">
        <div className="section-head">
          <div>
            <span className="section-number">
              03 / OUR MISSION
            </span>

            <h2>
              Build better
              <br />
              <span>digital businesses.</span>
            </h2>
          </div>

          <p>
            Our mission is simple: help businesses use the
            web as a real growth tool.
          </p>
        </div>

        <div className="mission-box">
          <div className="mission-number">∞</div>

          <div>
            <h3>
              Strategy.
              <br />
              Design.
              <br />
              Technology.
            </h3>

            <p>
              One connected approach from the first
              conversation to the final launch.
            </p>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="cta-circle" />

        <span>READY TO BUILD?</span>

        <h2>
          Let's create
          <br />
          something <em>meaningful.</em>
        </h2>

        <Link to="/contact" className="primary-btn large">
          Start your project <span>↗</span>
        </Link>
      </section>
    </main>
  );
}