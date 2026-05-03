import type { MouseEvent } from "react";
import PageEnd from "../components/PageEnd.tsx";
import Card from "../components/ui/Card.tsx";
import Icon from "../components/ui/Icon.tsx";
import { awards, awardsContent } from "../data/content.js";
import "./AwardsPage.css";

export default function AwardsPage({ onNavigate }: { onNavigate?: (event: MouseEvent<HTMLAnchorElement>, href: string) => void }) {
  return (
    <main className="awards-page" id="awards-top">
      <div className="awards-page-header">
        <div className="awards-breadcrumb">
          <a href="/" aria-label={awardsContent.backToHomeLabel} onClick={(event) => onNavigate?.(event, "/")}>
            <Icon name="chevron-left" />
          </a>
          <span>{awardsContent.homeLabel}</span>
          <span aria-hidden="true">/</span>
          <strong>{awardsContent.title}</strong>
        </div>
      </div>

      <section className="awards-page-grid" aria-label={awardsContent.sectionLabel}>
        {awards.map((award) => (
          <Card as="article" className="award-page-card" key={`${award.title}-${award.year}`}>
            <div className="award-page-main">
              {award.logo ? (
                <span className="award-page-logo">
                  <img src={award.logo} alt={`${award.issuer} logo`} />
                </span>
              ) : null}
              <div className="award-page-copy">
                <h2>{award.title}</h2>
                <p>Issued by {award.issuer}</p>
              </div>
              <span className="award-page-date">{award.year}</span>
            </div>
          </Card>
        ))}
      </section>

      <PageEnd targetId="awards-top" />
    </main>
  );
}
