import type { MouseEvent } from "react";
import SkillLogo from "../components/SkillLogo.tsx";
import Card from "../components/ui/Card.tsx";
import CardTitle from "../components/ui/CardTitle.tsx";
import Icon from "../components/ui/Icon.tsx";
import { skillGroups } from "../data/content.js";
import "./SkillsPage.css";

export default function SkillsPage({ onNavigate }: { onNavigate?: (event: MouseEvent<HTMLAnchorElement>, href: string) => void }) {
  return (
    <main className="skills-page">
      <div className="skills-page-header">
        <div className="skills-breadcrumb">
          <a href="/" aria-label="Back to Home" onClick={(event) => onNavigate?.(event, "/")}>
            <Icon name="chevron-left" />
          </a>
          <span>Home</span>
          <span aria-hidden="true">/</span>
          <strong>Skills</strong>
        </div>
      </div>

      <section className="skills-page-grid" aria-label="Skills by category">
        {skillGroups.map((group) => (
          <Card as="article" className="skills-category-card" key={group.title}>
            <CardTitle icon="sparkles">{group.title}</CardTitle>
            <div className="skills-category-list">
              {group.items.map((skill) => (
                <SkillLogo skill={skill} showName key={skill.name} />
              ))}
            </div>
          </Card>
        ))}
      </section>
    </main>
  );
}
