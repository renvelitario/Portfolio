import type { MouseEvent } from "react";
import { projectsContent } from "../data/content.js";
import Icon from "./ui/Icon.tsx";

export default function PageEnd({ targetId }: { targetId: string }) {
  function handleBackToTop(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    window.history.replaceState({}, "", `${window.location.pathname}#${targetId}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="page-end">
      <p>{projectsContent.endText}</p>
      <a href={`${window.location.pathname}#${targetId}`} onClick={handleBackToTop}>
        <Icon name="chevron-up" />
        {projectsContent.backToTopLabel}
      </a>
    </div>
  );
}
