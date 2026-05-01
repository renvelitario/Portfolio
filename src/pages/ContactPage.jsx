import Card from "../components/ui/Card.jsx";
import CardTitle from "../components/ui/CardTitle.jsx";
import Icon from "../components/ui/Icon.jsx";
import { availability, contactLinks } from "../data/content.js";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <Card className="contact-intro">
          <CardTitle icon="message-square-text">Contact</CardTitle>
          <h1>Have a project or role in mind?</h1>
          <p>
            Send the details and I will get back to you with availability, next steps, and a
            practical way to move the work forward.
          </p>

          <div className="contact-status">
            <span>
              <span className="dot" />
              Available for freelance
            </span>
            <span>Remote friendly</span>
            <span>GMT +8</span>
          </div>
        </Card>

        <div className="contact-links">
          {contactLinks.map((link) => (
            <a className="card contact-link-card" href={link.href} key={link.title}>
              <strong>
                <Icon name={link.icon} />
                {link.title}
              </strong>
              <span>{link.text}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="contact-grid">
        <Card className="contact-form-card">
          <CardTitle icon="pen-line">Message</CardTitle>
          <form className="contact-form" action="mailto:hello@example.com" method="post" encType="text/plain">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" autoComplete="name" required />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required />
            </div>

            <div className="form-field">
              <label htmlFor="project-type">Project Type</label>
              <select id="project-type" name="project-type">
                <option>Website</option>
                <option>UI/UX Design</option>
                <option>Frontend Development</option>
                <option>Creative Assets</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="timeline">Timeline</label>
              <select id="timeline" name="timeline">
                <option>Flexible</option>
                <option>This month</option>
                <option>Next 1-2 months</option>
                <option>ASAP</option>
              </select>
            </div>

            <div className="form-field full">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about the goal, pages, features, budget range, or role details."
                required
              />
            </div>

            <div className="form-field full">
              <button className="contact-submit" type="submit">
                <Icon name="send" />
                Send Message
              </button>
            </div>

            <p className="contact-note form-field full">
              This form opens your email app. Replace the mail address later if you connect a form
              backend.
            </p>
          </form>
        </Card>

        <aside className="contact-details">
          <Card className="detail-card">
            <CardTitle icon="clock">Response</CardTitle>
            <h3>Usually within 24-48 hours.</h3>
            <p>Include the scope, deadline, and any reference links so the first reply can be specific.</p>
          </Card>

          <Card className="detail-card">
            <CardTitle icon="briefcase-business">Available For</CardTitle>
            <div className="detail-list">
              {availability.map(([label, value]) => (
                <span key={label}>
                  {label}
                  <strong>{value}</strong>
                </span>
              ))}
            </div>
          </Card>

          <Card className="detail-card">
            <CardTitle icon="map-pin">Location</CardTitle>
            <h3>Laguna, Philippines</h3>
            <p>Open to remote work, local collaborations, and hybrid opportunities near Metro Manila and Laguna.</p>
          </Card>
        </aside>
      </section>
    </main>
  );
}
