import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Code2,
  Database,
  Cloud,
  Cpu,
  LineChart,
  Boxes,
  Globe,
  GraduationCap,
  Briefcase,
  Trophy,
  Award,
  Server,
} from "lucide-react";

export const personal = {
  name: "Sohan D Souza",
  firstName: "Sohan",
  title: "Software Engineer | AI/ML Engineer | Data Scientist",
  roles: [
    "AI/ML Engineer",
    "Data Scientist",
    "Salesforce Developer",
    "Full Stack Developer",
    "Problem Solver",
  ],
  intro:
    "Aspiring Software Engineer pursuing Computer Science & Business Systems at St Joseph Engineering College, Mangaluru. I build real-world applications across AI/ML, full-stack, and Salesforce — blending technical depth with business strategy to ship impactful products.",
  location: "Mangaluru, Karnataka, India",
  email: "sohandsouza15@gmail.com",
  phone: "+91 74113 54065",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/Sohan-dsz",
    linkedin: "https://www.linkedin.com/in/sohan1919",
    email: "mailto:sohandsouza15@gmail.com",
  },
};

export const about = {
  summary:
    "Currently pursuing a degree in Computer Science & Business Systems at St Joseph Engineering College, Mangaluru — a curriculum that integrates computer science fundamentals with business strategy and project planning. My focus spans programming, software engineering, artificial intelligence, and cloud computing.",
  objective:
    "To combine technical expertise with business knowledge to tackle challenges innovatively and deliver impactful results, while continuously learning and applying emerging technologies to meet organizational objectives effectively.",
  interests: [
    "Deep Learning & NLP",
    "Multimodal & Generative AI",
    "Computer Vision",
    "Full-Stack Engineering",
    "Salesforce Automation",
    "Cloud Computing",
  ],
};

export type Skill = { name: string; level: number };
export type SkillCategory = {
  category: string;
  icon: LucideIcon;
  accent: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    icon: Code2,
    accent: "from-neon-blue to-neon-cyan",
    skills: [
      { name: "Python", level: 92 },
      { name: "SQL", level: 85 },
      { name: "JavaScript / TypeScript", level: 84 },
      { name: "Java", level: 80 },
      { name: "C++", level: 75 },
    ],
  },
  {
    category: "AI / ML Engineering",
    icon: Brain,
    accent: "from-neon-purple to-neon-pink",
    skills: [
      { name: "PyTorch", level: 86 },
      { name: "TensorFlow / Keras", level: 84 },
      { name: "Scikit-Learn", level: 88 },
      { name: "Hugging Face Transformers", level: 82 },
      { name: "LLMs, RAG & LangChain", level: 84 },
      { name: "NLP & Computer Vision", level: 83 },
    ],
  },
  {
    category: "Data Science & Analytics",
    icon: LineChart,
    accent: "from-neon-cyan to-neon-blue",
    skills: [
      { name: "Pandas & NumPy", level: 90 },
      { name: "Matplotlib / Seaborn", level: 84 },
      { name: "Statistics & EDA", level: 82 },
      { name: "Power BI", level: 80 },
      { name: "Jupyter / Colab", level: 88 },
    ],
  },
  {
    category: "MLOps & Cloud",
    icon: Server,
    accent: "from-neon-cyan to-neon-purple",
    skills: [
      { name: "Docker", level: 80 },
      { name: "Git & GitHub", level: 88 },
      { name: "FastAPI & REST APIs", level: 84 },
      { name: "AWS / Oracle Cloud (OCI)", level: 78 },
      { name: "CI/CD & Linux", level: 78 },
    ],
  },
  {
    category: "Full-Stack Web",
    icon: Globe,
    accent: "from-neon-blue to-neon-violet",
    skills: [
      { name: "React & Next.js", level: 86 },
      { name: "Node.js", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "TypeScript", level: 82 },
    ],
  },
  {
    category: "Salesforce",
    icon: Cloud,
    accent: "from-neon-violet to-neon-cyan",
    skills: [
      { name: "Apex", level: 80 },
      { name: "Lightning Web Components", level: 82 },
      { name: "Flow Builder", level: 86 },
      { name: "SOQL / SOSL", level: 82 },
      { name: "Sales & Service Cloud", level: 78 },
    ],
  },
  {
    category: "Databases",
    icon: Database,
    accent: "from-neon-pink to-neon-purple",
    skills: [
      { name: "MySQL / PostgreSQL", level: 84 },
      { name: "MongoDB", level: 80 },
      { name: "Vector DBs (FAISS / Pinecone)", level: 76 },
    ],
  },
];

export type ProjectCategory =
  | "AI/ML"
  | "Data Science"
  | "Salesforce"
  | "Web Development";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  achievements: string[];
  tech: string[];
  github?: string;
  demo?: string;
  gradient: string;
  emoji: string;
  // Screenshot gallery shown in the project viewer (swipeable carousel).
  // Drop replacement images in public/projects/ using the same file names.
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "emobhaava",
    title: "EmoBhaava",
    category: "AI/ML",
    description:
      "Kannada sentiment & sarcasm detection using deep learning and NLP, bringing low-resource language understanding to regional social media.",
    achievements: [
      "Fine-tuned transformer models for Kannada text",
      "Dedicated sarcasm-detection head over sentiment baseline",
      "Custom annotated Kannada corpus pipeline",
    ],
    tech: ["Python", "PyTorch", "Transformers", "NLP", "Pandas"],
    github: "https://github.com/Sohan-dsz",
    gradient: "from-fuchsia-500/30 via-purple-500/20 to-blue-500/30",
    emoji: "🗣️",
    images: [
      "/projects/emobhaava-1.jpg",
      "/projects/emobhaava-2.jpg",
      "/projects/emobhaava-3.jpg",
    ],
  },
  {
    slug: "healthmate",
    title: "HealthMate",
    category: "AI/ML",
    description:
      "AI-powered health companion platform with multimodal interaction — speech, text, and documents — for accessible personal health guidance.",
    achievements: [
      "Multimodal pipeline with Whisper speech-to-text + LLMs",
      "OCR-based extraction from medical documents",
      "Conversational response generation layer",
    ],
    tech: ["Python", "LLMs", "Whisper", "React", "OCR"],
    github: "https://github.com/Sohan-dsz",
    gradient: "from-cyan-500/30 via-sky-500/20 to-emerald-500/30",
    emoji: "🩺",
    images: [
      "/projects/healthmate-1.jpg",
      "/projects/healthmate-2.jpg",
      "/projects/healthmate-3.jpg",
    ],
  },
  {
    slug: "alzheimers-classification",
    title: "Alzheimer's Disease Classification",
    category: "Data Science",
    description:
      "Comparative analysis of classical ML and deep learning models for classifying Alzheimer's stages from MRI imaging data.",
    achievements: [
      "Benchmarked CNNs against classical ML baselines",
      "MRI preprocessing & augmentation pipeline",
      "Evaluation across accuracy, recall, and F1",
    ],
    tech: ["Python", "TensorFlow", "Scikit-Learn", "NumPy", "Matplotlib"],
    github: "https://github.com/Sohan-dsz",
    gradient: "from-indigo-500/30 via-violet-500/20 to-purple-500/30",
    emoji: "🧠",
    images: [
      "/projects/alzheimers-classification-1.jpg",
      "/projects/alzheimers-classification-2.jpg",
      "/projects/alzheimers-classification-3.jpg",
    ],
  },
  {
    slug: "salesforce-crm",
    title: "Salesforce CRM Solution",
    category: "Salesforce",
    description:
      "Customer and vehicle management CRM for WhatNext Vision Motors with automation-driven workflows and reporting dashboards.",
    achievements: [
      "CRM automation via Salesforce Flow",
      "Custom Lightning App Builder interfaces",
      "Analytics dashboards for data-driven decisions",
    ],
    tech: ["Apex", "LWC", "Flow Builder", "SOQL"],
    gradient: "from-blue-500/30 via-cyan-500/20 to-teal-500/30",
    emoji: "🚗",
    images: [
      "/projects/salesforce-crm-1.jpg",
      "/projects/salesforce-crm-2.jpg",
      "/projects/salesforce-crm-3.jpg",
    ],
  },
  {
    slug: "baja-saeindia",
    title: "BAJA SAEINDIA Engineering Project",
    category: "Data Science",
    description:
      "Design, simulation, validation, and optimization of an off-road vehicle as part of Team SJEC Racing for the BAJA SAEINDIA competition.",
    achievements: [
      "CAD design & simulation of vehicle subsystems",
      "Validation and optimization through testing",
      "Led the team as Captain to competition",
    ],
    tech: ["Simulation", "CAD", "Validation", "Optimization"],
    gradient: "from-amber-500/30 via-orange-500/20 to-rose-500/30",
    emoji: "🏎️",
    images: [
      "/projects/baja-saeindia-1.jpg",
      "/projects/baja-saeindia-2.jpg",
      "/projects/baja-saeindia-3.jpg",
    ],
  },
];

export type TimelineItem = {
  title: string;
  org: string;
  period: string;
  location?: string;
  points: string[];
  icon: LucideIcon;
  tag: string;
};

export const experience: TimelineItem[] = [
  {
    title: "AIML & Full Stack Intern",
    org: "Geojit Technologies",
    period: "Jan 2026 – Apr 2026",
    location: "Kochi, Kerala, India",
    tag: "Internship",
    icon: Briefcase,
    points: [
      "Developed AI-powered applications by integrating LLMs and ML models into full-stack systems using Python and React.",
      "Built OCR-based document processing pipelines for structured data extraction from handwritten and printed forms.",
      "Created multimodal AI pipelines using Whisper and LLMs for speech-to-text and response generation.",
    ],
  },
  {
    title: "Salesforce Intern",
    org: "Salesforce",
    period: "May 2025 – Jul 2025",
    location: "India",
    tag: "Internship",
    icon: Cloud,
    points: [
      "Developed CRM automation workflows using Salesforce Flow to enhance operational efficiency.",
      "Built applications with Lightning App Builder, creating user-friendly interfaces.",
      "Implemented dashboards for reporting and analytics, enabling data-driven decisions.",
    ],
  },
  {
    title: "Team Captain",
    org: "Team SJEC Racing",
    period: "Mar 2025 – Apr 2026",
    location: "Mangaluru, Karnataka, India",
    tag: "Leadership",
    icon: Trophy,
    points: [
      "Led the racing team through design, build, and competition cycles.",
      "Coordinated cross-functional sub-teams for the BAJA SAEINDIA project.",
    ],
  },
  {
    title: "Technical Team Member",
    org: "Team SJEC Racing",
    period: "Mar 2023 – May 2025",
    location: "Mangaluru, Karnataka, India",
    tag: "Engineering",
    icon: Cpu,
    points: [
      "Contributed to design, simulation, and validation of off-road vehicle subsystems.",
      "Hands-on engineering across mechanical and analytics tasks.",
    ],
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  duration: string;
  score?: string;
  coursework?: string[];
};

export const education: EducationItem[] = [
  {
    degree: "B.E. — Computer Science & Business Systems",
    institution: "St Joseph Engineering College, Mangaluru",
    duration: "2022 – 2026",
    score: "Pursuing",
    coursework: [
      "Artificial Intelligence",
      "Machine Learning",
      "Software Engineering",
      "Cloud Computing",
      "Data Structures & Algorithms",
      "Business Systems",
    ],
  },
  {
    degree: "Class XII (Pre-University)",
    institution: "St. Aloysius (Deemed to be University)",
    duration: "Completed",
    coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
  },
  {
    degree: "Class X (SSLC)",
    institution: "Holy Redeemer High School, Hosanagar",
    duration: "Completed",
    coursework: [],
  },
];

export type Certification = {
  title: string;
  issuer: string;
  category: "Oracle" | "Salesforce" | "AI/ML" | "Data Science" | "Other";
  year: string;
  gradient: string;
  // Drop a certificate image (PNG/JPG) in public/certificates/ and set its path here.
  // If the file is missing the card gracefully falls back to a badge icon.
  image?: string;
  // Optional link to verify the credential online.
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    title: "OCI 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    category: "AI/ML",
    year: "2025",
    gradient: "from-purple-500/40 to-fuchsia-500/30",
    image: "/certificates/oci-generative-ai-professional.png",
  },
  {
    title: "OCI 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    category: "AI/ML",
    year: "2025",
    gradient: "from-blue-500/40 to-cyan-500/30",
    image: "/certificates/oci-ai-foundations-associate.png",
  },
  {
    title: "OCI 2025 Certified Foundations Associate",
    issuer: "Oracle",
    category: "Oracle",
    year: "2025",
    gradient: "from-rose-500/40 to-orange-500/30",
    image: "/certificates/oci-foundations-associate.png",
  },
  {
    title: "Privacy and Security in Online Social Media",
    issuer: "NPTEL",
    category: "Other",
    year: "2024",
    gradient: "from-emerald-500/40 to-teal-500/30",
    image: "/certificates/nptel-privacy-security.png",
  },
  {
    title: "Applied Positive Psychology",
    issuer: "Coursera",
    category: "Other",
    year: "2024",
    gradient: "from-cyan-500/40 to-sky-500/30",
    image: "/certificates/coursera-positive-psychology.png",
  },
  {
    title: "Salesforce Flow & Lightning Essentials",
    issuer: "Salesforce / Trailhead",
    category: "Salesforce",
    year: "2025",
    gradient: "from-sky-500/40 to-indigo-500/30",
    image: "/certificates/salesforce-flow-lightning.png",
  },
];

export type Course = {
  title: string;
  provider: string;
  category: "AI/ML" | "Data Science" | "Salesforce" | "Cloud Computing" | "Software Development";
  icon: LucideIcon;
};

export const courses: Course[] = [
  { title: "Generative AI Professional", provider: "Oracle", category: "AI/ML", icon: Brain },
  { title: "Deep Learning & Neural Networks", provider: "Self / Coursework", category: "AI/ML", icon: Cpu },
  { title: "Data Analysis with Python", provider: "Self / Coursework", category: "Data Science", icon: LineChart },
  { title: "Power BI for Analytics", provider: "Self", category: "Data Science", icon: Boxes },
  { title: "Salesforce Flow Automation", provider: "Trailhead", category: "Salesforce", icon: Cloud },
  { title: "OCI Foundations", provider: "Oracle", category: "Cloud Computing", icon: Cloud },
  { title: "Full-Stack Web Development", provider: "Self", category: "Software Development", icon: Code2 },
  { title: "AI Foundations Associate", provider: "Oracle", category: "AI/ML", icon: GraduationCap },
];

export type Stat = { label: string; value: number; suffix: string; icon: LucideIcon };

export const stats: Stat[] = [
  { label: "Projects Completed", value: 12, suffix: "+", icon: Boxes },
  { label: "Certifications Earned", value: 6, suffix: "+", icon: Award },
  { label: "Technologies Mastered", value: 30, suffix: "+", icon: Cpu },
  { label: "Competitions Participated", value: 4, suffix: "+", icon: Trophy },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certs", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
