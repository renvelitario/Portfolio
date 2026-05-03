import { Fragment, type MouseEvent } from "react";
import akaliImage from "../../assets/images/profile/akali.jpg";
import profileImage from "../../assets/images/profile/IMG_2129.JPG";
import {
  awards,
  awardsContent,
  certifications,
  education,
  experience,
  homeContent,
  leadershipActivities,
  siteProfile,
  skillsContent,
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

function ItemLogo({ alt, src }: { alt: string; src?: string }) {
  if (!src) return null;

  return (
    <span className="item-logo">
      <img src={src} alt={alt} />
    </span>
  );
}

export function ProfileCard() {
  return (
    <Card className="profile-card">
      <div className="profile-content">
        <div className="profile-avatar" aria-label={homeContent.profileAvatarLabel}>
          <img className="profile-image profile-image-front" src={profileImage} alt={homeContent.profileImageAlt} />
          <img className="profile-image profile-image-back" src={akaliImage} alt="" aria-hidden="true" />
        </div>
        <h1>{siteProfile.name}</h1>
        <p className="subtitle">{siteProfile.title}</p>
      </div>
    </Card>
  );
}

export function ProfileNoteCard() {
  return (
    <Card className="profile-note-card">
      <div className="profile-note">
        <span className="profile-note-title">
          <Icon name="clock" />
          {homeContent.statusLabel}
        </span>
        <div className="profile-note-status">
          <span className="dot" />
          <strong>{homeContent.statusText}</strong>
        </div>
      </div>
    </Card>
  );
}

export function SkillsCard({ onNavigate }: { onNavigate?: NavigateHandler }) {
  return (
    <Card className="skills-card">
      <div className="skills-row">
        <div className="skills-marquee" aria-label={skillsContent.marqueeLabel}>
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
          aria-label={homeContent.skillsLinkLabel}
          title={homeContent.skillsLinkLabel}
          onClick={(event) => onNavigate?.(event, "/skills")}
        >
          <Icon name="chevron-right" />
          <span>{homeContent.skillsLinkLabel}</span>
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
          {homeContent.connectTitle}
        </span>
        <SocialLinks />
      </div>
    </Card>
  );
}

export function AboutCard() {
  return (
    <Card className="about-card">
      <CardTitle icon="user-round">{homeContent.aboutTitle}</CardTitle>
      <div className="about">
        {homeContent.aboutParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Card>
  );
}

export function LocationCard() {
  const localTime = useLocalTime();

  return (
    <Card className="location-card">
      <div className="location">
        <p className="location-kicker">{homeContent.locationKicker}</p>
        <h2>{siteProfile.location}</h2>

        <div className="timezone">
          <p>
            {siteProfile.timezone} <span aria-hidden="true">|</span> <span id="local-time">{localTime}</span>
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
      <CardTitle icon="briefcase-business">{homeContent.experienceTitle}</CardTitle>
      <div className="experience">
        {experience.map((item) => (
          <div className="exp-item" key={`${item.role}-${item.year}`}>
            <div className="item-heading">
              <ItemLogo src={item.logo} alt={`${item.company} logo`} />
              <div className="item-heading-copy">
                <div className="exp-top">
                  <h3>{item.role}</h3>
                  <p>{item.year}</p>
                </div>
                <h4>{item.company}</h4>
              </div>
            </div>
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
      <CardTitle icon="graduation-cap">{homeContent.educationTitle}</CardTitle>
      <div className="education">
        {education.map((item) => (
          <div className="education-item" key={item.degree}>
            <div className="item-heading">
              <ItemLogo src={item.logo} alt={`${item.school} logo`} />
              <div className="item-heading-copy">
                <h3>{item.degree}</h3>
                <p>{item.focus}</p>
                <p>{item.school}</p>
              </div>
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
      <CardTitle icon="users-round">{homeContent.leadershipTitle}</CardTitle>
      <div className="leadership">
        {leadershipActivities.map((item) => (
          <div className="leadership-item" key={item.title}>
            <div className="item-heading">
              <ItemLogo src={item.logo} alt={`${item.title} logo`} />
              <div className="item-heading-copy">
                <h3>{item.title}</h3>
                <p>{item.context}</p>
              </div>
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
      <CardTitle icon="badge-check">{homeContent.certificationsTitle}</CardTitle>
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

export function AwardsCard({ onNavigate }: { onNavigate?: NavigateHandler }) {
  const recentAwards = awards.slice(0, awardsContent.recentCount);

  return (
    <Card className="awards-card">
      <div className="card-title section-action-header">
        <span className="title-label">
          <Icon name="award" />
          {homeContent.awardsTitle}
        </span>
        <a
          className="section-page-link"
          href="/awards"
          aria-label={homeContent.awardsLinkLabel}
          title={homeContent.awardsLinkLabel}
          onClick={(event) => onNavigate?.(event, "/awards")}
        >
          <Icon name="chevron-right" />
          <span>{homeContent.awardsLinkLabel}</span>
        </a>
      </div>
      <div className="awards">
        {recentAwards.map((item) => (
          <div className="award-item" key={`${item.title}-${item.year}`}>
            <div className="item-heading">
              <ItemLogo src={item.logo} alt={`${item.issuer} logo`} />
              <div className="item-heading-copy">
                <h3>{item.title}</h3>
                <p>Issued by {item.issuer}</p>
              </div>
            </div>
            <span>{item.year}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
