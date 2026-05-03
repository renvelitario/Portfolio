import { useEffect, useMemo, useState } from "react";
import DotField from "./components/background/DotField.tsx";
import ChatWidget from "./components/layout/ChatWidget.tsx";
import Footer from "./components/layout/Footer.tsx";
import Header from "./components/layout/Header.tsx";
import HomePage from "./pages/HomePage.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import SkillsPage from "./pages/SkillsPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import { useCardGlow } from "./hooks/useCardGlow.js";
import { useTheme } from "./hooks/useTheme.js";
import "./App.css";

function getCurrentRoute() {
  const path = window.location.pathname.toLowerCase();

  if (path.endsWith("/projects") || path.endsWith("/projects.html")) {
    return "projects";
  }

  if (path.endsWith("/skills") || path.endsWith("/skills.html")) {
    return "skills";
  }

  if (path.endsWith("/contact") || path.endsWith("/contact.html")) {
    return "contact";
  }

  return "home";
}

function getPageMeta(route, onNavigate) {
  if (route === "skills") {
    return { title: "Skills | @renvelitario", page: <SkillsPage onNavigate={onNavigate} /> };
  }

  if (route === "projects") {
    return { title: "Projects | @renvelitario", page: <ProjectsPage /> };
  }

  if (route === "contact") {
    return { title: "Contact | @renvelitario", page: <ContactPage /> };
  }

  return { title: "@renvelitario", page: <HomePage onNavigate={onNavigate} /> };
}

export default function App() {
  const [route, setRoute] = useState(getCurrentRoute);
  const { isLight, toggleTheme } = useTheme();
  useCardGlow();

  useEffect(() => {
    const handlePopState = () => setRoute(getCurrentRoute());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  function handleNavigate(event, href) {
    const url = new URL(href, window.location.origin);

    if (url.origin !== window.location.origin) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, "", url.pathname);
    setRoute(getCurrentRoute());
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const { title, page } = useMemo(() => getPageMeta(route, handleNavigate), [route]);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <div className="site-background" aria-hidden="true">
        <DotField
          dotRadius={isLight ? 2.4 : 2.8}
          dotSpacing={isLight ? 20 : 22}
          cursorRadius={420}
          bulgeStrength={56}
          glowRadius={180}
          sparkle={false}
          waveAmplitude={0}
          gradientFrom={isLight ? "rgba(23, 23, 23, 0.18)" : "rgba(245, 245, 245, 0.16)"}
          gradientTo={isLight ? "rgba(104, 104, 104, 0.1)" : "rgba(180, 180, 180, 0.06)"}
          glowColor={isLight ? "rgba(255, 255, 255, 0.9)" : "rgba(245, 245, 245, 0.12)"}
        />
      </div>
      <div className="bento-wrap">
        <Header
          currentRoute={route}
          isLight={isLight}
          onNavigate={handleNavigate}
          onToggleTheme={toggleTheme}
        />
        {page}
        <Footer />
      </div>
      <ChatWidget />
    </>
  );
}
