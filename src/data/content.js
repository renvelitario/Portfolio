import aniprintLogo from "../assets/images/aniprint.png";
import apexLogo from "../assets/images/apex-t.jpg";
import arthiveImage from "../assets/images/arthive.png";
import feuLogo from "../assets/images/feu-a.png";
import gdscLogo from "../assets/images/gdsc.png";
import honorSocietyLogo from "../assets/images/honsoc.png";
import idpLogo from "../assets/images/idp.png";
import materLogo from "../assets/images/mater.jpg";
import oikosLogo from "../assets/images/oikos.png";
import taraNaImage from "../assets/images/tara-na.png";
import techFactorsLogo from "../assets/images/techfactors-inc.jpg";

export const siteProfile = {
  name: "Ren Velitario",
  handle: "@renvelitario",
  title: "UI/UX Designer / Web Developer / Digital Creative",
  location: "Laguna, Philippines",
  timezone: "GMT +8",
  copyright: "All rights reserved."
};

export const navigationItems = [
  { route: "home", href: "/", icon: "house", label: "Home" },
  { route: "projects", href: "/projects", icon: "briefcase-business", label: "Works" }
];

export const pageTitles = {
  home: siteProfile.handle,
  skills: `Skills | ${siteProfile.handle}`,
  awards: `Awards | ${siteProfile.handle}`,
  projects: `Projects | ${siteProfile.handle}`
};

export const themeContent = {
  switchToDarkLabel: "Switch to dark mode",
  switchToLightLabel: "Switch to light mode"
};

export const homeContent = {
  profileImageAlt: siteProfile.name,
  profileAvatarLabel: `${siteProfile.name} avatar`,
  statusLabel: "Status",
  statusText: "Available for freelance & full-time",
  skillsLinkLabel: "View all skills",
  connectTitle: "Connect",
  aboutTitle: "About",
  aboutParagraphs: [
    "BSIT graduate specializing in Digital Arts with experience in frontend development, UI/UX design, and multimedia content creation. I build clean, responsive, and user-friendly digital products that focus on both function and design.",
    "I have worked on web applications, UI/UX systems, and creative media using HTML, CSS, JavaScript, React, and design tools. I am comfortable working across both design and development to turn ideas into working products.",
    "I aim to contribute practical and visually effective digital solutions with a focus on usability, clarity, and solid execution."
  ],
  locationKicker: "Based in",
  locationDescription:
    "Open to remote work, local collaborations, and hybrid opportunities near Metro Manila and Laguna.",
  experienceTitle: "Experience",
  educationTitle: "Education",
  leadershipTitle: "Leadership",
  certificationsTitle: "Certifications",
  awardsTitle: "Recent Awards",
  awardsLinkLabel: "View all awards",
  testimonialsTitle: "Testimonials"
};

export const skillsContent = {
  backToHomeLabel: "Back to Home",
  homeLabel: "Home",
  title: "Skills",
  sectionLabel: "Skills by category",
  marqueeLabel: "Skills"
};

export const awardsContent = {
  backToHomeLabel: "Back to Home",
  homeLabel: "Home",
  title: "Awards",
  sectionLabel: "Honors and awards",
  recentCount: 3
};

export const skillGroups = [
  {
    title: "Frontend Development",
    icon: "code-2",
    items: [
      { name: "HTML", logo: "https://cdn.simpleicons.org/html5" },
      { name: "CSS", logo: "https://cdn.simpleicons.org/css" },
      { name: "JavaScript ES6+", logo: "https://cdn.simpleicons.org/javascript" },
      { name: "React.js", logo: "https://cdn.simpleicons.org/react" }
    ]
  },
  {
    title: "Backend and Database",
    icon: "database",
    items: [
      { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "Express.js", logo: "https://cdn.simpleicons.org/express", lightenOnDark: true },
      { name: "PHP", logo: "https://cdn.simpleicons.org/php" },
      { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql" },
      { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql" },
      { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase" },
      { name: "Neon", logo: "https://cdn.simpleicons.org/neon" }
    ]
  },
  {
    title: "Programming Languages",
    icon: "languages",
    items: [
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", logo: "https://cdn.simpleicons.org/python" },
      { name: "C++", logo: "https://cdn.simpleicons.org/cplusplus" }
    ]
  },
  {
    title: "Tools and Deployment",
    icon: "wrench",
    items: [
      { name: "Git", logo: "https://cdn.simpleicons.org/git" },
      { name: "GitHub", logo: "https://cdn.simpleicons.org/github", lightenOnDark: true },
      { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel", lightenOnDark: true },
      { name: "Netlify", logo: "https://cdn.simpleicons.org/netlify" },
      { name: "Railway", logo: "https://cdn.simpleicons.org/railway", lightenOnDark: true },
      { name: "Render", logo: "https://cdn.simpleicons.org/render", lightenOnDark: true }
    ]
  },
  {
    title: "Design and Creative Tools",
    icon: "palette",
    items: [
      { name: "Figma", logo: "https://cdn.simpleicons.org/figma" },
      { name: "Photoshop", logo: "https://www.adobe.com/cc-shared/assets/img/product-icons/svg/photoshop.svg" },
      { name: "Illustrator", logo: "https://www.adobe.com/cc-shared/assets/img/product-icons/svg/illustrator.svg" },
      { name: "InDesign", logo: "https://www.adobe.com/cc-shared/assets/img/product-icons/svg/indesign.svg" },
      { name: "Premiere Pro", logo: "https://www.adobe.com/cc-shared/assets/img/product-icons/svg/premiere-pro.svg" },
      { name: "After Effects", logo: "https://www.adobe.com/cc-shared/assets/img/product-icons/svg/after-effects.svg" },
      { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
      { name: "Autodesk Maya", logo: "https://cdn.simpleicons.org/autodeskmaya" },
      { name: "Blender", logo: "https://cdn.simpleicons.org/blender" }
    ]
  }
];

export const experience = [
  {
    role: "Junior Associate - IT & Creative Services",
    year: "2025",
    company: "Oikos Technologies - Remote",
    logo: oikosLogo,
    details: [
      "Designed digital and print materials for client campaigns.",
      "Collaborated with creatives and developers to deliver assets."
    ]
  },
  {
    role: "Graphic Designer - Marketing Intern",
    year: "2024 - 2025",
    company: "IDP Education - Hybrid",
    logo: idpLogo,
    details: [
      "Led a 5-person team in creating promotional video campaigns.",
      "Produced 30+ marketing materials for digital and live events."
    ]
  },
  {
    role: "Independent Online Seller",
    year: "2021 - 2023",
    company: "Aniprint",
    logo: aniprintLogo,
    details: [
      "Generated 2,000+ Shopee sales through optimized branding and listings.",
      "Designed print-ready layouts for custom and bulk orders."
    ]
  }
];

export const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    focus: "Specialization in Digital Arts",
    school: "Far Eastern University - Alabang",
    logo: feuLogo,
    year: "2025"
  },
  {
    degree: "Senior High School",
    focus: "Information and Communications Technology",
    school: "Mater Ecclesiae School",
    logo: materLogo,
    year: "2021"
  }
];

export const certifications = [
  {
    title: "UX Design Professional Certificate",
    issuer: "Google Career Certificates - Coursera",
    year: "2025"
  },
  {
    title: "Certified Autodesk Maya User",
    issuer: "Autodesk",
    year: "2024"
  },
  {
    title: "Information Technology Specialist in Networking",
    issuer: "CISCO",
    year: "2023"
  }
];

export const awards = [
  {
    title: "Cum Laude",
    issuer: "FEU Alabang",
    logo: feuLogo,
    year: "Sep 2025"
  },
  {
    title: "Active Student Leader Award",
    issuer: "FEU Institute of Technology",
    logo: feuLogo,
    year: "Aug 2024"
  },
  {
    title: "Top Performing Student for SY2223",
    issuer: "FEU Institute of Technology",
    logo: feuLogo,
    year: "Aug 2023"
  },
  {
    title: "Top Performing Student for SY2122",
    issuer: "FEU Institute of Technology",
    logo: feuLogo,
    year: "Aug 2022"
  },
  {
    title: "Best in Work Immersion (ICT)",
    issuer: "Mater Ecclesiae School",
    logo: materLogo,
    year: "May 2021"
  },
  {
    title: "Ecclesiaen Bronze Merit Award",
    issuer: "Mater Ecclesiae School",
    logo: materLogo,
    year: "May 2021"
  },
  {
    title: "Excellence in Information Communication Technology",
    issuer: "TechFactors Inc.",
    logo: techFactorsLogo,
    year: "May 2021"
  }
];

export const leadershipActivities = [
  {
    title: "Apex Tamaraws - FEU Alabang",
    context: "Director for Documentation",
    logo: apexLogo,
    year: "2024 - 2025"
  },
  {
    title: "Google Developer Student Clubs - FEU Alabang",
    context: "Director for Membership",
    logo: gdscLogo,
    year: "2023 - 2024"
  },
  {
    title: "Tertiary Honor Society - FEU Alabang",
    context: "Director for Documentation",
    logo: honorSocietyLogo,
    year: "2023 - 2024"
  }
];

export const testimonials = [
  {
    quote:
      "Ren exhibits good work ethics and does his role very well. He manages to submit work on time and follows instructions well. Overall, he worked well under IDP and helped the company a lot.",
    name: "Maxene Chase Gilos",
    role: "Marketing Intern Supervisor at IDP Education Ltd. Philippines"
  },
  {
    quote:
      "He understands both the visual side and the technical side, which makes design handoff and implementation smoother.",
    name: "Frontend Partner",
    role: "Web project"
  },
  {
    quote:
      "Ren is reliable with deadlines and keeps the work organized, especially when the project needs both design and production assets.",
    name: "Marketing Team",
    role: "Campaign support"
  },
  {
    quote:
      "His attention to layout, spacing, and final polish helped the project feel cleaner and easier to present.",
    name: "Design Reviewer",
    role: "Portfolio feedback"
  }
];

const behanceProjectUrl = "https://www.behance.net/renvelitario";

export const projects = [
  {
    title: "Operations Dashboard Concept",
    description:
      "A compact operations interface for monitoring activity, content progress, and key metrics through a responsive dashboard layout.",
    preview: "preview-dashboard",
    tags: ["React", "Dashboard UI", "Frontend"],
    projectUrl: "#",
    sourceUrl: "#"
  },
  {
    title: "Aniprint Store Assets",
    description:
      "A production-ready set of ecommerce visuals, listing graphics, and print layouts created for a high-volume custom merchandise shop.",
    preview: "preview-shop",
    tags: ["Ecommerce", "Branding"],
    projectUrl: "#"
  },
  {
    title: "Personal Bento Portfolio",
    description:
      "A responsive bento-style portfolio built with reusable React components, theme persistence, animated cards, and structured content data.",
    preview: "preview-portfolio",
    tags: ["HTML", "CSS", "Portfolio"],
    projectUrl: "/",
    sourceUrl: "#"
  },
  {
    title: "Tara Na App | UI/UX Design",
    description:
      "A mobile transportation concept designed around accessible trip planning, clear navigation, and a smoother commuter experience.",
    preview: "preview-dashboard",
    image: taraNaImage,
    tags: ["UI/UX", "Mobile App", "Figma", "Prototyping"],
    projectUrl: behanceProjectUrl
  },
  {
    title: "ARTHIVE | Website",
    description:
      "A digital art showcase and management website with a clean visual system for browsing, presenting, and organizing creative work.",
    preview: "preview-portfolio",
    image: arthiveImage,
    tags: ["Web Design", "Frontend", "UI/UX", "HTML/CSS"],
    projectUrl: behanceProjectUrl
  },
  {
    title: "Internship Portfolio - IDP Education Ltd.",
    description:
      "A curated internship portfolio presenting campaign assets, design outputs, and marketing materials produced for IDP Education Ltd.",
    preview: "preview-brand",
    tags: ["Portfolio", "Graphic Design", "Branding", "Marketing"],
    projectUrl: behanceProjectUrl
  },
  {
    title: "HIVE Branding and Product",
    description:
      "A conceptual brand and product system defining identity, visual direction, and cohesive design rules for the HIVE concept.",
    preview: "preview-brand",
    tags: ["Branding", "Identity Design", "Product Design"],
    projectUrl: behanceProjectUrl
  },
  {
    title: "West Revolve Inc. | Company Branding",
    description:
      "A company branding project covering logo design, identity direction, and supporting materials for a professional visual presence.",
    preview: "preview-brand",
    tags: ["Branding", "Logo Design", "Visual Identity"],
    projectUrl: behanceProjectUrl
  },
  {
    title: "REN | Magazine Cover Design",
    description:
      "An editorial cover study focused on bold typography, visual hierarchy, and balanced layout composition for print presentation.",
    preview: "preview-brand",
    tags: ["Editorial Design", "Typography", "Layout"],
    projectUrl: behanceProjectUrl
  },
  {
    title: "LAYA: A Twins' Quest For Freedom | Game",
    description:
      "A game concept shaped through creative direction, visual development, worldbuilding, and story-led design decisions.",
    preview: "preview-dashboard",
    tags: ["Game Dev", "Creative Direction", "3D", "Storytelling"],
    projectUrl: behanceProjectUrl
  },
  {
    title: "Water Crown | Fast Shutter Speed Photography",
    description:
      "A high-speed photography study capturing water splash forms through controlled lighting, timing, and precise shutter technique.",
    preview: "preview-shop",
    tags: ["Photography", "High-Speed", "Lighting"],
    projectUrl: behanceProjectUrl
  },
  {
    title: "Cookies and Milk | Food Photography",
    description:
      "A styled food photography shoot emphasizing warm lighting, appetizing composition, and clean product presentation.",
    preview: "preview-shop",
    tags: ["Photography", "Food", "Styling"],
    projectUrl: behanceProjectUrl
  },
  {
    title: "Minecraft in Autodesk Maya",
    description:
      "A 3D environment study recreating Minecraft-inspired forms in Autodesk Maya with block-based modeling and scene composition.",
    preview: "preview-dashboard",
    tags: ["3D Modeling", "Autodesk Maya", "Environment"],
    projectUrl: behanceProjectUrl
  },
  {
    title: "T1-40 (3D Robot) | Autodesk Maya",
    description:
      "A hard-surface 3D robot model built and rendered in Autodesk Maya with attention to structure, proportions, and material detail.",
    preview: "preview-dashboard",
    tags: ["3D Modeling", "Hard Surface", "Rendering", "Autodesk Maya"],
    projectUrl: behanceProjectUrl
  }
];

export const contactLinks = [
  {
    href: "mailto:velitarioren@gmail.com",
    icon: "mail",
    title: "Email",
    text: "velitarioren@gmail.com"
  },
  {
    href: "https://www.linkedin.com/in/renvelitario/",
    icon: "linkedin",
    title: "LinkedIn",
    text: "Connect for work opportunities and collaborations."
  },
  {
    href: "https://github.com/renvelitario",
    icon: "github",
    title: "GitHub",
    text: "View frontend experiments and portfolio code."
  },
  {
    href: "https://www.behance.net/renvelitario",
    icon: "behance",
    title: "Behance",
    text: "Browse selected design and creative work."
  }
];

export const projectsContent = {
  heading: "Featured Projects",
  filters: ["All", "Web", "UI/UX", "Branding", "Creative"],
  projectSectionLabel: "Featured projects",
  viewProjectLabel: "View Project",
  sourceLabel: "Source",
  endText: "That's the end for now. Thanks for taking a look.",
  backToTopLabel: "Back to top"
};

export const chatContent = {
  openLabel: "Open chat",
  closeLabel: "Close chat",
  title: `Chat with ${siteProfile.name.split(" ")[0]}`,
  placeholderMessage: "Hi, I'm a placeholder for your future AI chat.",
  inputPlaceholder: "Ask something..."
};
