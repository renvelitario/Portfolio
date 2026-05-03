import {
  ArrowLeft,
  ArrowUp,
  ArrowUpRight,
  AtSign,
  Award,
  Blocks,
  BriefcaseBusiness,
  Clock,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  BadgeCheck,
  Code2,
  Database,
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
  Palette,
  PenLine,
  Send,
  Sparkles,
  Sun,
  UsersRound,
  UserRound,
  Quote,
  Wrench,
  X
} from "lucide-react";

const icons = {
  "arrow-left": ArrowLeft,
  "arrow-up": ArrowUp,
  "arrow-up-right": ArrowUpRight,
  "at-sign": AtSign,
  award: Award,
  blocks: Blocks,
  "briefcase-business": BriefcaseBusiness,
  "badge-check": BadgeCheck,
  clock: Clock,
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  "chevron-up": ChevronUp,
  "code-2": Code2,
  database: Database,
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
  palette: Palette,
  "pen-line": PenLine,
  send: Send,
  sparkles: Sparkles,
  sun: Sun,
  "users-round": UsersRound,
  "user-round": UserRound,
  quote: Quote,
  wrench: Wrench,
  x: X
};

export default function Icon({ name, ...props }) {
  if (name === "behance") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path
          fill="currentColor"
          d="M3.2 6.2h5.1c1.2 0 2.1.2 2.8.7.7.5 1 1.2 1 2.2 0 .6-.1 1.1-.4 1.5-.3.4-.7.7-1.2 1 .7.2 1.2.5 1.6 1 .4.5.6 1.1.6 1.9 0 1.1-.4 2-1.2 2.6-.8.6-1.8.9-3.1.9H3.2V6.2Zm4.8 4.7c.6 0 1-.1 1.3-.3.3-.2.4-.6.4-1 0-.5-.2-.8-.5-1-.3-.2-.8-.3-1.4-.3H5.7v2.6H8Zm.2 5c.6 0 1.1-.1 1.4-.4.4-.3.5-.7.5-1.2s-.2-.9-.5-1.2c-.3-.3-.8-.4-1.4-.4H5.7v3.2h2.5ZM17.8 18.2c-1.4 0-2.5-.4-3.3-1.3-.8-.9-1.2-2-1.2-3.4 0-1.4.4-2.5 1.2-3.4.8-.9 1.9-1.3 3.2-1.3 1.4 0 2.4.5 3.1 1.4.7.9 1 2.2.9 3.8v.4h-6.1c.1.6.3 1.1.6 1.5.4.4.9.6 1.6.6.9 0 1.5-.4 1.8-1.1h2.1c-.3 1-.8 1.8-1.5 2.4-.7.5-1.5.8-2.4.8Zm1.7-5.4c-.1-.7-.3-1.2-.6-1.5-.3-.4-.8-.5-1.4-.5-.6 0-1 .2-1.4.6-.3.4-.5.8-.6 1.4h4Zm-4.8-6.6h5.5v1.4h-5.5V6.2Z"
        />
      </svg>
    );
  }

  const LucideIcon = icons[name];

  if (!LucideIcon) {
    return null;
  }

  return <LucideIcon aria-hidden="true" {...props} />;
}
