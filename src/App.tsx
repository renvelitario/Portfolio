import { useEffect, useMemo, useRef, useState } from "react";
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
  return getCurrentRouteFromPath(window.location.pathname);
}

function getCurrentRouteFromPath(pathname) {
  const path = pathname.toLowerCase();

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
  const [previousRoute, setPreviousRoute] = useState(null);
  const [hasNavigated, setHasNavigated] = useState(false);
  const transitionTimerRef = useRef(undefined);
  const { isLight, toggleTheme } = useTheme();
  const isPageTransitioning = previousRoute !== null;
  useCardGlow({ paused: isPageTransitioning });

  function navigateTo(nextRoute) {
    setRoute((currentRoute) => {
      if (currentRoute === nextRoute) {
        return currentRoute;
      }

      window.clearTimeout(transitionTimerRef.current);
      setHasNavigated(true);
      setPreviousRoute(currentRoute);
      transitionTimerRef.current = window.setTimeout(() => setPreviousRoute(null), 660);

      return nextRoute;
    });
  }

  useEffect(() => {
    const handlePopState = () => navigateTo(getCurrentRoute());
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.clearTimeout(transitionTimerRef.current);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  function handleNavigate(event, href) {
    const url = new URL(href, window.location.origin);

    if (url.origin !== window.location.origin) {
      return;
    }

    event.preventDefault();
    const nextRoute = getCurrentRouteFromPath(url.pathname);
    if (nextRoute === route) {
      return;
    }

    window.history.pushState({}, "", url.pathname);
    navigateTo(nextRoute);
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  const { title, page } = useMemo(() => getPageMeta(route, handleNavigate), [route]);
  const previousPage = useMemo(
    () => previousRoute ? getPageMeta(previousRoute, handleNavigate).page : null,
    [previousRoute]
  );

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
        <div className={`page-transition-stack ${previousPage ? "is-transitioning" : ""} ${hasNavigated ? "has-navigated" : ""}`}>
          {previousPage ? (
            <div className="page-transition-layer page-transition-exit" aria-hidden="true">
              {previousPage}
            </div>
          ) : null}
          <div className={`page-transition-layer page-transition-enter ${previousPage ? "" : "is-current"}`} key={route}>
            {page}
          </div>
        </div>
        <Footer />
      </div>
      <ChatWidget />
    </>
  );
}
