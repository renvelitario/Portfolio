import {
  AtSign,
  Blocks,
  BriefcaseBusiness,
  Clock,
  ExternalLink,
  FolderKanban,
  Github,
  GraduationCap,
  House,
  Languages,
  LayoutDashboard,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquareText,
  Moon,
  PenLine,
  Send,
  Sparkles,
  Sun,
  UserRound,
  X
} from "lucide-react";

const icons = {
  "at-sign": AtSign,
  blocks: Blocks,
  "briefcase-business": BriefcaseBusiness,
  clock: Clock,
  "external-link": ExternalLink,
  "folder-kanban": FolderKanban,
  github: Github,
  "graduation-cap": GraduationCap,
  house: House,
  languages: Languages,
  "layout-dashboard": LayoutDashboard,
  linkedin: Linkedin,
  mail: Mail,
  "map-pin": MapPin,
  "message-circle": MessageCircle,
  "message-square-text": MessageSquareText,
  moon: Moon,
  "pen-line": PenLine,
  send: Send,
  sparkles: Sparkles,
  sun: Sun,
  "user-round": UserRound,
  x: X
};

export default function Icon({ name, ...props }) {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    return null;
  }

  return <LucideIcon aria-hidden="true" {...props} />;
}
