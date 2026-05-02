import Card from "../components/ui/Card.tsx";
import CardTitle from "../components/ui/CardTitle.tsx";
import { Globe } from "../components/ui/globe.tsx";
import Icon from "../components/ui/Icon.tsx";
import SocialLinks from "../components/SocialLinks.tsx";
import { education, experience, languages, skills, stats } from "../data/content.js";
import { useLocalTime } from "../hooks/useLocalTime.js";
import akaliImage from "../assets/images/akali.jpg";
import profileImage from "../assets/images/IMG_2129.JPG";
import "./HomePage.css";

export default function HomePage() {
  const localTime = useLocalTime();

  return (
    <main className="parent">
      <Card className="div1">
        <div className="profile-content">
          <div className="profile-avatar" aria-label="Ren Velitario avatar">
            <img className="profile-image profile-image-front" src={profileImage} alt="Ren Velitario" />
            <img className="profile-image profile-image-back" src={akaliImage} alt="" aria-hidden="true" />
          </div>
          <h1>Ren Velitario</h1>
          <p className="subtitle">UI/UX Designer - Web Developer - Digital Creative</p>
        </div>

        <div className="status">
          <span className="dot" />
          Available for freelance & full-time
        </div>
      </Card>

      <Card className="div2">
        <CardTitle icon="sparkles">Skills</CardTitle>
        <div className="skills">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </Card>

      <Card className="div3" id="contact">
        <div className="card-title connect-header">
          <span className="title-label">
            <Icon name="at-sign" />
            Connect
          </span>
          <SocialLinks />
        </div>
      </Card>

      <Card className="div4">
        <CardTitle icon="user-round">About</CardTitle>
        <div className="about">
          <p>
            BSIT graduate specializing in Digital Arts with experience in frontend development,
            UI/UX design, and multimedia content creation. I build clean, responsive, and
            user-friendly digital products that focus on both function and design.
          </p>
          <br />
          <p>
            I have worked on web applications, UI/UX systems, and creative media using HTML, CSS,
            JavaScript, React, and design tools. I am comfortable working across both design and
            development to turn ideas into working products.
          </p>
          <br />
          <p>
            I aim to contribute practical and visually effective digital solutions with a focus on
            usability, clarity, and solid execution.
          </p>
        </div>

        <div className="stats">
          {stats.map((item) => (
            <div key={item.label}>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="div5">
        <div className="location">
          <p className="location-kicker">Based in</p>
          <h2>Laguna, Philippines</h2>

          <div className="timezone">
            <p>
              GMT +8 <span aria-hidden="true">|</span> <span id="local-time">{localTime}</span>
            </p>
          </div>
        </div>
        <Globe />
      </Card>

      <Card className="div6">
        <CardTitle icon="languages">Languages</CardTitle>
        <div className="languages">
          {languages.map((language) => (
            <p key={language}>{language}</p>
          ))}
        </div>
      </Card>

      <Card className="div7" id="works">
        <CardTitle icon="briefcase-business">Experience</CardTitle>
        <div className="experience">
          {experience.map((item) => (
            <div className="exp-item" key={`${item.role}-${item.year}`}>
              <div className="exp-top">
                <h3>{item.role}</h3>
                <p>{item.year}</p>
              </div>
              <h4>{item.company}</h4>
              <ul>
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      <Card className="div8">
        <CardTitle icon="graduation-cap">Education</CardTitle>
        <div className="education">
          {education.map((item) => (
            <div key={item.degree}>
              <h3>{item.degree}</h3>
              <h4>{item.focus}</h4>
              <p>{item.school}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="div9 resume-card">
        <div>
          <p>Need my full background?</p>
          <h3>Download Resume</h3>
        </div>

        <button type="button">View CV -&gt;</button>
      </Card>
    </main>
  );
}
