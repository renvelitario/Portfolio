import type { MouseEvent } from "react";
import {
  AboutCard,
  CertificationsCard,
  ConnectCard,
  EducationCard,
  ExperienceCard,
  LeadershipCard,
  LocationCard,
  ProfileCard,
  ProfileNoteCard,
  SkillsCard
} from "../components/home/HomeSections.tsx";
import TestimonialsCard from "../components/home/TestimonialsCard.tsx";
import "./HomePage.css";

export default function HomePage({
  onNavigate
}: {
  onNavigate?: (event: MouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
  return (
    <main className="parent">
      <ProfileCard />
      <ProfileNoteCard />
      <SkillsCard onNavigate={onNavigate} />
      <ConnectCard />
      <AboutCard />
      <LocationCard />
      <ExperienceCard />
      <EducationCard />
      <LeadershipCard />
      <CertificationsCard />
      <TestimonialsCard />
    </main>
  );
}
