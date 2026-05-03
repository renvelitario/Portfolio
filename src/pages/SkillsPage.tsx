import type { MouseEvent } from "react";
import PageEnd from "../components/PageEnd.tsx";
import SkillLogo from "../components/SkillLogo.tsx";
import Card from "../components/ui/Card.tsx";
import CardTitle from "../components/ui/CardTitle.tsx";
import Icon from "../components/ui/Icon.tsx";
import { skillGroups, skillsContent } from "../data/content.js";
import "./SkillsPage.css";

export default function SkillsPage({ onNavigate }: { onNavigate?: (event: MouseEvent<HTMLAnchorElement>, href: string) => void }) {
  return (
    <main className="skills-page" id="skills-top">
      <div className="skills-page-header">
        <div className="skills-breadcrumb">
          <a href="/" aria-label={skillsContent.backToHomeLabel} onClick={(event) => onNavigate?.(event, "/")}>
            <Icon name="chevron-left" />
          </a>
          <span>{skillsContent.homeLabel}</span>
          <span aria-hidden="true">/</span>
          <strong>{skillsContent.title}</strong>
        </div>
      </div>

      <section className="skills-page-grid" aria-label={skillsContent.sectionLabel}>
        {skillGroups.map((group) => (
          <Card as="article" className="skills-category-card" key={group.title}>
            <CardTitle icon={group.icon}>{group.title}</CardTitle>
            <div className="skills-category-list">
              {group.items.map((skill) => (
                <SkillLogo skill={skill} showName key={skill.name} />
              ))}
            </div>
          </Card>
        ))}
      </section>

      <PageEnd targetId="skills-top" />
    </main>
  );
}
