import Card from "../components/ui/Card.jsx";
import CardTitle from "../components/ui/CardTitle.jsx";
import Icon from "../components/ui/Icon.jsx";
import { processSteps, projects, summaryTiles } from "../data/content.js";
import "./ProjectsPage.css";

function ProjectCard({ project }) {
  return (
    <Card as="article" className="project-card">
      <div className={`project-preview ${project.preview || "preview-dashboard"}`} aria-hidden="true" />

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
            View Project
          </a>
        ) : null}
        {project.sourceUrl ? (
          <a href={project.sourceUrl} aria-label={`View ${project.title} source`}>
            <Icon name="github" />
            Source
          </a>
        ) : null}
      </div>
    </Card>
  );
}

function projectRows(items) {
  const rows = [];

  for (let index = 0; index < items.length; index += 2) {
    rows.push(items.slice(index, index + 2));
  }

  return rows;
}

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <section className="projects-hero">
        <Card className="projects-intro">
          <CardTitle icon="layout-dashboard">Selected Work</CardTitle>
          <h1>Design-led web projects built with clean execution.</h1>
          <p>
            A focused collection of interface, frontend, and creative systems work across portfolio
            sites, dashboards, ecommerce flows, and digital brand assets.
          </p>
        </Card>

        <div className="project-summary">
          {summaryTiles.map((tile) => (
            <Card className="summary-tile" key={tile.label}>
              <CardTitle icon={tile.icon}>{tile.label}</CardTitle>
              <div>
                <strong>{tile.value}</strong>
                <span>{tile.text}</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <div className="project-toolbar">
        <h2>Featured Projects</h2>
        <div className="project-filters" aria-label="Project categories">
          {["All", "Web", "UI/UX", "Branding", "Creative"].map((filter) => (
            <span key={filter}>{filter}</span>
          ))}
        </div>
      </div>

      <section className="projects-grid" aria-label="Featured projects">
        {projectRows(projects).map((row, index) => (
          <div className="project-row" key={`row-${index}`}>
            {row.map((project, rowIndex) => (
              <ProjectCard project={project} key={`${project.title}-${index}-${rowIndex}`} />
            ))}
          </div>
        ))}
      </section>

      <section className="process-row" aria-label="Work process">
        {processSteps.map((step) => (
          <Card className="process-card" key={step.number}>
            <strong>{step.number}</strong>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </Card>
        ))}
      </section>
    </main>
  );
}
