import Icon from "./ui/Icon.tsx";
import "./SocialLinks.css";

const links = [
  { href: "mailto:hello@example.com", label: "Email", icon: "mail" },
  { href: "#", label: "LinkedIn", icon: "linkedin" },
  { href: "#", label: "GitHub", icon: "github" },
  { href: "#", label: "Behance", icon: "behance" }
];

export default function SocialLinks() {
  return (
    <div className="links">
      {links.map((link) => (
        <a key={link.label} href={link.href} aria-label={link.label}>
          <Icon name={link.icon} />
        </a>
      ))}
    </div>
  );
}
