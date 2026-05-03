import { Fragment, type MouseEvent } from "react";
import akaliImage from "../../assets/images/akali.jpg";
import profileImage from "../../assets/images/IMG_2129.JPG";
import {
  certifications,
  education,
  experience,
  leadershipActivities,
  skillGroups
} from "../../data/content.js";
import { useLocalTime } from "../../hooks/useLocalTime.js";
import SkillLogo from "../SkillLogo.tsx";
import SocialLinks from "../SocialLinks.tsx";
import Card from "../ui/Card.tsx";
import CardTitle from "../ui/CardTitle.tsx";
import { Globe } from "../ui/globe.tsx";
import Icon from "../ui/Icon.tsx";

type NavigateHandler = (event: MouseEvent<HTMLAnchorElement>, href: string) => void;

export function ProfileCard() {
  return (
    <Card className="profile-card">
      <div className="profile-content">
        <div className="profile-avatar" aria-label="Ren Velitario avatar">
          <img className="profile-image profile-image-front" src={profileImage} alt="Ren Velitario" />
          <img className="profile-image profile-image-back" src={akaliImage} alt="" aria-hidden="true" />
        </div>
        <h1>Ren Velitario</h1>
        <p className="subtitle">UI/UX Designer / Web Developer / Digital Creative</p>
      </div>

      <div className="status">
        <span className="dot" />
        Available for freelance & full-time
      </div>
    </Card>
  );
}

export function SkillsCard({ onNavigate }: { onNavigate?: NavigateHandler }) {
  return (
    <Card className="skills-card">
      <div className="skills-row">
        <div className="skills-marquee" aria-label="Skills">
          <div className="skills-track">
            {[...skillGroups, ...skillGroups].map((group, index) => (
              <Fragment key={`${group.title}-${index}`}>
                <div className="skills-group" aria-label={group.title}>
                  {group.items.map((skill) => (
                    <SkillLogo skill={skill} key={`${group.title}-${skill.name}-${index}`} />
                  ))}
                </div>
                <span className="skills-divider" aria-hidden="true" />
              </Fragment>
            ))}
          </div>
        </div>
        <span className="skills-action-divider" aria-hidden="true" />
        <a
          className="skills-page-link"
          href="/skills"
          aria-label="View more skills"
          title="View more skills"
          onClick={(event) => onNavigate?.(event, "/skills")}
        >
          <Icon name="arrow-up-right" />
        </a>
      </div>
    </Card>
  );
}

export function ConnectCard() {
  return (
    <Card className="connect-card" id="contact">
      <div className="card-title connect-header">
        <span className="title-label">
          <Icon name="at-sign" />
          Connect
        </span>
        <SocialLinks />
      </div>
    </Card>
  );
}

export function AboutCard() {
  return (
    <Card className="about-card">
      <CardTitle icon="user-round">About</CardTitle>
      <div className="about">
        <p>
          BSIT graduate specializing in Digital Arts with experience in frontend development,
          UI/UX design, and multimedia content creation. I build clean, responsive, and
          user-friendly digital products that focus on both function and design.
        </p>
        <p>
          I have worked on web applications, UI/UX systems, and creative media using HTML, CSS,
          JavaScript, React, and design tools. I am comfortable working across both design and
          development to turn ideas into working products.
        </p>
        <p>
          I aim to contribute practical and visually effective digital solutions with a focus on
          usability, clarity, and solid execution.
        </p>
      </div>
    </Card>
  );
}

export function LocationCard() {
  const localTime = useLocalTime();

  return (
    <Card className="location-card">
      <div className="location">
        <p className="location-kicker">Based in</p>
        <h2>Laguna, Philippines</h2>

        <div className="timezone">
          <p>
            GMT +8 <span aria-hidden="true">|</span> <span id="local-time">{localTime}</span>
          </p>
        </div>
      </div>
      <div className="location-globe-clip" aria-hidden="true">
        <Globe />
      </div>
    </Card>
  );
}

export function ExperienceCard() {
  return (
    <Card className="experience-card" id="works">
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
  );
}

export function EducationCard() {
  return (
    <Card className="education-card">
      <CardTitle icon="graduation-cap">Education</CardTitle>
      <div className="education">
        {education.map((item) => (
          <div className="education-item" key={item.degree}>
            <div>
              <h3>{item.degree}</h3>
              <p>{item.focus}</p>
              <p>{item.school}</p>
            </div>
            <span>{item.year}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function LeadershipCard() {
  return (
    <Card className="leadership-card">
      <CardTitle icon="users-round">Leadership</CardTitle>
      <div className="leadership">
        {leadershipActivities.map((item) => (
          <div className="leadership-item" key={item.title}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.context}</p>
            </div>
            <span>{item.year}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function CertificationsCard() {
  return (
    <Card className="certifications-card">
      <CardTitle icon="award">Certifications</CardTitle>
      <div className="certifications">
        {certifications.map((item) => (
          <div className="cert-item" key={`${item.title}-${item.year}`}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.issuer}</p>
            </div>
            <span>{item.year}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
