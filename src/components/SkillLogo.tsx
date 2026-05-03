import "./SkillLogo.css";

type AppLogo = "photoshop" | "illustrator" | "indesign" | "premiere" | "aftereffects";

type Skill = {
  name: string;
  logo?: string;
  mark?: string;
  appLogo?: AppLogo;
  lightenOnDark?: boolean;
};

const appLogoLabels: Record<AppLogo, string> = {
  photoshop: "Ps",
  illustrator: "Ai",
  indesign: "Id",
  premiere: "Pr",
  aftereffects: "Ae"
};

function AppLogoMark({ app }: { app: AppLogo }) {
  const label = appLogoLabels[app];

  return (
    <svg className={`app-logo app-logo-${app}`} viewBox="0 0 48 48" aria-hidden="true">
      <rect className="adobe-app-logo-bg" x="4" y="4" width="40" height="40" rx="8" />
      <rect className="adobe-app-logo-border" x="7" y="7" width="34" height="34" rx="5" />
      <text x="24" y="29" textAnchor="middle">
        {label}
      </text>
    </svg>
  );
}

export default function SkillLogo({ skill, showName = false }: { skill: Skill; showName?: boolean }) {
  const className = [
    "skill-logo",
    showName ? "skill-logo-with-name" : "",
    skill.lightenOnDark ? "skill-logo-lighten-on-dark" : ""
  ].filter(Boolean).join(" ");

  return (
    <span className={className} aria-label={skill.name} title={skill.name}>
      {skill.logo ? (
        <img src={skill.logo} alt="" loading="lazy" aria-hidden="true" />
      ) : skill.appLogo ? (
        <AppLogoMark app={skill.appLogo} />
      ) : (
        <span className="skill-mark" aria-hidden="true">{skill.mark}</span>
      )}
      {showName ? <span className="skill-logo-name">{skill.name}</span> : null}
    </span>
  );
}
