import Icon from "./ui/Icon.tsx";
import { contactLinks } from "../data/content.js";
import "./SocialLinks.css";

export default function SocialLinks() {
  return (
    <div className="links">
      {contactLinks.map((link) => (
        <a key={link.title} href={link.href} aria-label={link.title} target="_blank">
          <Icon name={link.icon} />
        </a>
      ))}
    </div>
  );
}
