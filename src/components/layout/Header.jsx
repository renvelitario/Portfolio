import Icon from "../ui/Icon.jsx";
import "./Header.css";

const navItems = [
  { route: "home", href: "/", icon: "house", label: "Home" },
  { route: "projects", href: "/projects", icon: "briefcase-business", label: "Works" },
  { route: "contact", href: "/contact", icon: "send", label: "Contact" }
];

export default function Header({ currentRoute, isLight, onNavigate, onToggleTheme }) {
  return (
    <header className="site-nav">
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
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
        aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
        onClick={onToggleTheme}
      >
        <Icon name="sun" className="sun-icon" />
        <Icon name="moon" className="moon-icon" />
      </button>
    </header>
  );
}
