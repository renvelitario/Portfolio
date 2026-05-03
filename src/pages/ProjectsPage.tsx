import PageEnd from "../components/PageEnd.tsx";
import Card from "../components/ui/Card.tsx";
import Icon from "../components/ui/Icon.tsx";
import { projects, projectsContent } from "../data/content.js";
import "./ProjectsPage.css";

function ProjectCard({ project }) {
  return (
    <Card as="article" className="project-card">
      <div className={`project-preview ${project.image ? "project-preview-image" : project.preview || "preview-dashboard"}`} aria-hidden={!project.image}>
        {project.image ? <img src={project.image} alt={`${project.title} preview`} loading="lazy" /> : null}
      </div>

      <div className="project-meta">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <div className="project-actions">
        {project.projectUrl ? (
          <a href={project.projectUrl} aria-label={`View ${project.title}`}>
            <Icon name="external-link" />
            {projectsContent.viewProjectLabel}
          </a>
        ) : null}
        {project.sourceUrl ? (
          <a href={project.sourceUrl} aria-label={`View ${project.title} source`}>
            <Icon name="github" />
            {projectsContent.sourceLabel}
          </a>
        ) : null}
      </div>
    </Card>
  );
}

export default function ProjectsPage() {
  return (
    <main className="projects-page" id="projects-top">
      <div className="project-toolbar">
        <h2>{projectsContent.heading}</h2>
        <div className="project-filters" aria-label="Project categories">
          {projectsContent.filters.map((filter) => (
            <span key={filter}>{filter}</span>
          ))}
        </div>
      </div>

      <section className="projects-grid" aria-label={projectsContent.projectSectionLabel}>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </section>

      <PageEnd targetId="projects-top" />
    </main>
  );
}
