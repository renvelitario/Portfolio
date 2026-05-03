import Icon from "../ui/Icon.tsx";
import { navigationItems, themeContent } from "../../data/content.js";
import "./Header.css";

export default function Header({ currentRoute, isLight, onNavigate, onToggleTheme }) {
  return (
    <header className="site-nav">
      <nav aria-label="Primary navigation">
        {navigationItems.map((item) => (
          <a
            key={item.route}
            href={item.href}
            className={currentRoute === item.route ? "active" : undefined}
            aria-current={currentRoute === item.route ? "page" : undefined}
            onClick={(event) => onNavigate(event, item.href)}
          >
            <Icon name={item.icon} />
            {item.label}
          </a>
        ))}
      </nav>

      <button
        className="theme-toggle"
        type="button"
        aria-label={isLight ? themeContent.switchToDarkLabel : themeContent.switchToLightLabel}
        onClick={onToggleTheme}
      >
        <Icon name="sun" className="sun-icon" />
        <Icon name="moon" className="moon-icon" />
      </button>
    </header>
  );
}
