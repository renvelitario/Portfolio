import { siteProfile } from "../../data/content.js";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <hr />
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} {siteProfile.name}. {siteProfile.copyright}</p>
      </div>
    </footer>
  );
}
