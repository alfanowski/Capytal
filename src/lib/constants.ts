export const SITE_NAME = "Capytal";
export const OWNER_NAME = "Andrea Alfano";
export const OWNER_ALIAS = "alfanowski";
export const CONTACT_EMAIL = "alfanowski@gmail.com";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    id: "fullstack",
    title: "Full Stack Development",
    description:
      "Architetture moderne, performanti e scalabili. Dal design system al deploy, ogni linea di codice è scritta con precisione chirurgica.",
    icon: "Code2",
    features: [
      "React / Next.js",
      "Node.js / API REST",
      "Database SQL & NoSQL",
      "DevOps & CI/CD",
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Auditing",
    description:
      "Penetration testing, vulnerability assessment e hardening. Identifichiamo le falle prima che lo facciano gli altri.",
    icon: "ShieldCheck",
    features: [
      "Penetration Testing",
      "Vulnerability Assessment",
      "OSINT & Recon",
      "Security Hardening",
    ],
  },
];

export interface TechItem {
  category: string;
  items: string[];
}

export const TECH_STACK: TechItem[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
  },
  {
    category: "AI & ML",
    items: ["Python", "TensorFlow", "OpenAI API", "LangChain"],
  },
  {
    category: "Security",
    items: ["Kali Linux", "Burp Suite", "Metasploit", "Wireshark"],
  },
  {
    category: "DevOps",
    items: ["Docker", "GitHub Actions", "Vercel", "Linux"],
  },
];

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/alfanowski", icon: "Github" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/alfanowski",
    icon: "Linkedin",
  },
  {
    label: "Email",
    href: `mailto:${CONTACT_EMAIL}`,
    icon: "Mail",
  },
];

