import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();

    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 5000);
  };

  return (
    <main>
      <section className="contact-hero">
        <div>
          <span className="section-number">
            01 / CONTACT
          </span>

          <h1>
            Let's make it
            <br />
            <span>happen.</span>
          </h1>

          <p>
            Have an idea, a project or simply want to talk
            about what you're building? Tell us a little
            about it.
          </p>
        </div>

        <div className="contact-symbol">↗</div>
      </section>

      <section className="section contact-section">
        <div className="contact-info">
          <span className="section-number">
            GET IN TOUCH
          </span>

          <h2>
            Tell us about
            <br />
            <span>your project.</span>
          </h2>

          <p>
            No pressure. No complicated process. Just tell
            us what you're building and we'll take it from
            there.
          </p>

          <div className="contact-details">
            <div>
              <span>EMAIL</span>
              <a href="mailto:hello@wemakeweb.com">
                hello@wemakeweb.com
              </a>
            </div>

            <div>
              <span>AVAILABILITY</span>
              <p>Worldwide</p>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          {sent ? (
            <div className="success-box">
              <div className="success-icon">✓</div>

              <h3>Thanks!</h3>

              <p>
                Your enquiry has been received.
              </p>

              <small>
                We'll get back to you soon.
              </small>
            </div>
          ) : (
            <form onSubmit={submitForm}>
              <div className="input-row">
                <label>
                  <span>Your name</span>

                  <input
                    required
                    placeholder="John Smith"
                  />
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
                <span>Company</span>

                <input placeholder="Your company" />
              </label>

              <label>
                <span>What can we help with?</span>

                <select required defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>

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
                  <option value="" disabled>
                    Select budget
                  </option>

                  <option>$250 – $500</option>
                  <option>$500 – $1,000</option>
                  <option>$1,000 – $2,500</option>
                  <option>$2,500+</option>
                </select>
              </label>

              <label>
                <span>Tell us about your project</span>

                <textarea
                  rows="5"
                  placeholder="Tell us what you're building..."
                />
              </label>

              <button
                className="form-submit"
                type="submit"
              >
                Start a conversation <span>↗</span>
              </button>

              <p className="form-note">
                No pressure. Just tell us what you're
                building.
              </p>
            </form>
          )}
        </div>
      </section>

      <section className="contact-bottom">
        <span>LET'S CREATE SOMETHING GREAT</span>

        <h2>
          Your next
          <br />
          <em>chapter starts here.</em>
        </h2>
      </section>
    </main>
  );
}