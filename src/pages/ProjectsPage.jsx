import Card from "../components/ui/Card.jsx";
import Icon from "../components/ui/Icon.jsx";
import { processSteps, projects } from "../data/content.js";
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
    <main className="projects-page" id="projects-top">
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

      <div className="page-end">
        <p>That's the end for now. Thanks for taking a look.</p>
        <a href="#projects-top">Back to top</a>
      </div>
    </main>
  );
}
