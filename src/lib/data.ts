import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Code2,
  Cloud,
  Cpu,
  LineChart,
  Boxes,
  GraduationCap,
  Briefcase,
  Trophy,
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

// ── Technology Universe ─────────────────────────────────────────────
// Expertise is communicated through real, project-backed experience and a
// clear visual hierarchy — never arbitrary percentages.
export type ExperienceLevel =
  | "Beginner"
  | "Intermediate"
  | "Advanced"
  | "Expert";

export type TechCategory =
  | "AI & Machine Learning"
  | "Data Science & Analytics"
  | "Full-Stack Development"
  | "Salesforce Development"
  | "Cloud & DevOps"
  | "Databases"
  | "Tools & Platforms";

export const techCategories: TechCategory[] = [
  "AI & Machine Learning",
  "Data Science & Analytics",
  "Full-Stack Development",
  "Salesforce Development",
  "Cloud & DevOps",
  "Databases",
  "Tools & Platforms",
];

export type Tech = {
  name: string;
  category: TechCategory;
  level: ExperienceLevel;
  // simple-icons slug, rendered from https://cdn.simpleicons.org/<slug>.
  // Leave empty when no official logo exists — the UI falls back to an
  // initial-letter badge automatically.
  slug: string;
  projects: string[];
};

export const techStack: Tech[] = [
  // AI & Machine Learning
  { name: "Python", category: "AI & Machine Learning", level: "Expert", slug: "python", projects: ["HealthMate", "Form Data Extraction", "Obstacle Detection Bot"] },
  { name: "PyTorch", category: "AI & Machine Learning", level: "Advanced", slug: "pytorch", projects: ["HealthMate"] },
  { name: "TensorFlow", category: "AI & Machine Learning", level: "Advanced", slug: "tensorflow", projects: ["HealthMate"] },
  { name: "Keras", category: "AI & Machine Learning", level: "Intermediate", slug: "keras", projects: ["HealthMate"] },
  { name: "scikit-learn", category: "AI & Machine Learning", level: "Advanced", slug: "scikitlearn", projects: ["Form Data Extraction"] },
  { name: "Hugging Face", category: "AI & Machine Learning", level: "Advanced", slug: "huggingface", projects: ["HealthMate"] },
  { name: "LangChain", category: "AI & Machine Learning", level: "Advanced", slug: "langchain", projects: ["HealthMate"] },
  { name: "OpenAI / LLMs", category: "AI & Machine Learning", level: "Advanced", slug: "openai", projects: ["HealthMate"] },
  { name: "OpenCV", category: "AI & Machine Learning", level: "Intermediate", slug: "opencv", projects: ["Form Data Extraction", "Obstacle Detection Bot"] },
  { name: "NLP", category: "AI & Machine Learning", level: "Advanced", slug: "", projects: ["HealthMate"] },
  { name: "OCR", category: "AI & Machine Learning", level: "Advanced", slug: "", projects: ["Form Data Extraction"] },

  // Data Science & Analytics
  { name: "Pandas", category: "Data Science & Analytics", level: "Expert", slug: "pandas", projects: ["Form Data Extraction"] },
  { name: "NumPy", category: "Data Science & Analytics", level: "Expert", slug: "numpy", projects: ["Form Data Extraction"] },
  { name: "Plotly", category: "Data Science & Analytics", level: "Intermediate", slug: "plotly", projects: ["Form Data Extraction"] },
  { name: "Power BI", category: "Data Science & Analytics", level: "Intermediate", slug: "powerbi", projects: ["Hospital DMS"] },
  { name: "Jupyter", category: "Data Science & Analytics", level: "Advanced", slug: "jupyter", projects: ["Form Data Extraction"] },
  { name: "Google Colab", category: "Data Science & Analytics", level: "Advanced", slug: "googlecolab", projects: ["HealthMate"] },

  // Full-Stack Development
  { name: "React", category: "Full-Stack Development", level: "Advanced", slug: "react", projects: ["HealthMate", "Wallet – Expense Tracker"] },
  { name: "Next.js", category: "Full-Stack Development", level: "Advanced", slug: "nextdotjs", projects: ["Portfolio"] },
  { name: "Node.js", category: "Full-Stack Development", level: "Intermediate", slug: "nodedotjs", projects: ["Wallet – Expense Tracker"] },
  { name: "TypeScript", category: "Full-Stack Development", level: "Advanced", slug: "typescript", projects: ["Portfolio"] },
  { name: "JavaScript", category: "Full-Stack Development", level: "Advanced", slug: "javascript", projects: ["Wallet – Expense Tracker"] },
  { name: "Tailwind CSS", category: "Full-Stack Development", level: "Advanced", slug: "tailwindcss", projects: ["Portfolio"] },
  { name: "HTML5", category: "Full-Stack Development", level: "Advanced", slug: "html5", projects: ["NAAC Data Management"] },
  { name: "CSS3", category: "Full-Stack Development", level: "Advanced", slug: "css3", projects: ["NAAC Data Management"] },
  { name: "FastAPI", category: "Full-Stack Development", level: "Advanced", slug: "fastapi", projects: ["HealthMate"] },

  // Salesforce Development
  { name: "Salesforce", category: "Salesforce Development", level: "Advanced", slug: "salesforce", projects: ["Salesforce CRM", "Vehicle Order System"] },
  { name: "Apex", category: "Salesforce Development", level: "Advanced", slug: "", projects: ["Vehicle Order System"] },
  { name: "LWC", category: "Salesforce Development", level: "Advanced", slug: "", projects: ["Salesforce CRM"] },
  { name: "Flow Builder", category: "Salesforce Development", level: "Expert", slug: "", projects: ["Flow Automation", "Salesforce CRM"] },
  { name: "SOQL / SOSL", category: "Salesforce Development", level: "Advanced", slug: "", projects: ["Vehicle Order System"] },

  // Cloud & DevOps
  { name: "Docker", category: "Cloud & DevOps", level: "Advanced", slug: "docker", projects: ["NAAC Data Management"] },
  { name: "AWS", category: "Cloud & DevOps", level: "Intermediate", slug: "amazonwebservices", projects: ["NAAC Data Management"] },
  { name: "Oracle Cloud", category: "Cloud & DevOps", level: "Intermediate", slug: "oracle", projects: ["NAAC Data Management"] },
  { name: "Git", category: "Cloud & DevOps", level: "Advanced", slug: "git", projects: ["HealthMate"] },
  { name: "GitHub", category: "Cloud & DevOps", level: "Advanced", slug: "github", projects: ["HealthMate"] },
  { name: "Linux", category: "Cloud & DevOps", level: "Advanced", slug: "linux", projects: ["NAAC Data Management"] },

  // Databases
  { name: "MySQL", category: "Databases", level: "Advanced", slug: "mysql", projects: ["Hospital DMS", "Wallet – Expense Tracker"] },
  { name: "PostgreSQL", category: "Databases", level: "Advanced", slug: "postgresql", projects: ["Hospital DMS"] },
  { name: "MongoDB", category: "Databases", level: "Intermediate", slug: "mongodb", projects: ["HealthMate"] },
  { name: "SQLite", category: "Databases", level: "Intermediate", slug: "sqlite", projects: ["Wallet – Expense Tracker"] },

  // Tools & Platforms
  { name: "VS Code", category: "Tools & Platforms", level: "Expert", slug: "", projects: ["HealthMate"] },
  { name: "Postman", category: "Tools & Platforms", level: "Advanced", slug: "postman", projects: ["HealthMate"] },
  { name: "Figma", category: "Tools & Platforms", level: "Intermediate", slug: "figma", projects: ["Wallet – Expense Tracker"] },
  { name: "Anaconda", category: "Tools & Platforms", level: "Intermediate", slug: "anaconda", projects: ["Form Data Extraction"] },
  { name: "Vercel", category: "Tools & Platforms", level: "Intermediate", slug: "vercel", projects: ["Portfolio"] },
];

export type ProjectCategory =
  | "AI/ML"
  | "Data Science"
  | "Salesforce"
  | "Cloud"
  | "IoT"
  | "Web & App"
  | "Database";

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
  // Highlighted on the resume — surfaced first with a "Top Pick" badge.
  featured?: boolean;
  // Screenshot gallery shown in the project viewer (swipeable carousel).
  // Drop replacement images in public/projects/ using the same file names.
  // Leave empty ([]) when a project has no screenshots yet.
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "naac-data-management",
    title: "Cloud-Based NAAC Data Management System",
    category: "Cloud",
    description:
      "Centralized, containerized platform for managing NAAC accreditation data — secure storage, retrieval, and simplified documentation and report generation for the accreditation process.",
    achievements: [
      "Containerized application deployment using Docker",
      "Secure storage and retrieval of institutional records",
      "Simplified documentation & report generation for accreditation",
    ],
    tech: ["Docker", "Cloud Computing", "Database Management", "Web Technologies"],
    github: "https://github.com/Sohan-dsz",
    gradient: "from-sky-500/30 via-blue-500/20 to-indigo-500/30",
    emoji: "☁️",
    featured: true,
    images: [],
  },
  {
    slug: "healthmate",
    title: "HealthMate – AI Health Companion",
    category: "AI/ML",
    description:
      "Intelligent, multimodal healthcare assistant offering symptom analysis, health guidance, doctor recommendation support, and audio-based interaction.",
    achievements: [
      "Symptom analysis and personalized health guidance",
      "Doctor recommendation support",
      "Audio-based, multimodal interaction (speech, text, documents)",
    ],
    tech: ["AI/ML", "NLP", "Python", "LLMs", "Whisper"],
    github: "https://github.com/Sohan-dsz",
    gradient: "from-cyan-500/30 via-sky-500/20 to-emerald-500/30",
    emoji: "🩺",
    featured: true,
    images: [
      "/projects/healthmate-1.jpg",
      "/projects/healthmate-2.jpg",
      "/projects/healthmate-3.jpg",
    ],
  },
  {
    slug: "geogit-form-extraction",
    title: "Automated Form Data Extraction System",
    category: "Data Science",
    description:
      "GeoGIT internship project that automates extraction of information from scanned forms — reducing manual data entry while improving processing speed and accuracy.",
    achievements: [
      "Automated extraction of information from forms",
      "Reduced manual data-entry effort significantly",
      "Structured data generation from scanned documents",
    ],
    tech: ["Python", "OCR", "Data Processing"],
    github: "https://github.com/Sohan-dsz",
    gradient: "from-emerald-500/30 via-teal-500/20 to-cyan-500/30",
    emoji: "📄",
    featured: true,
    images: [],
  },
  {
    slug: "obstacle-detection-bot",
    title: "Obstacle Detection Bot with App & Voice Support",
    category: "IoT",
    description:
      "Real-time obstacle detection robot built for smart navigation and assistance, paired with a mobile app for monitoring and control plus voice command support.",
    achievements: [
      "Real-time obstacle detection using sensors",
      "Mobile application for monitoring and control",
      "Voice command support for smart navigation",
    ],
    tech: ["IoT", "Embedded Systems", "Mobile App Development", "Voice"],
    github: "https://github.com/Sohan-dsz",
    gradient: "from-amber-500/30 via-orange-500/20 to-rose-500/30",
    emoji: "🤖",
    featured: true,
    images: [],
  },
  {
    slug: "salesforce-crm-whatnext",
    title: "Salesforce CRM – WhatNext Vision Motors",
    category: "Salesforce",
    description:
      "CRM implementation on Salesforce for WhatNext Vision Motors covering customer and sales-process management with business workflow automation, presented as a Capstorm-based project.",
    achievements: [
      "Customer and sales process management",
      "Business workflow automation via Salesforce Flow",
      "Capstorm-based project presentation",
    ],
    tech: ["Salesforce", "CRM", "Flow Builder", "Capstorm"],
    gradient: "from-blue-500/30 via-cyan-500/20 to-teal-500/30",
    emoji: "🚗",
    featured: true,
    images: [
      "/projects/salesforce-crm-1.jpg",
      "/projects/salesforce-crm-2.jpg",
      "/projects/salesforce-crm-3.jpg",
    ],
  },
  {
    slug: "wallet-expense-tracker",
    title: "Wallet Application – Expense Tracker",
    category: "Web & App",
    description:
      "Personal finance management system for tracking income and expenses, monitoring budgets, and managing transaction history with clear reporting.",
    achievements: [
      "Income and expense tracking",
      "Budget monitoring and reporting",
      "Transaction history management",
    ],
    tech: ["Database Management", "Application Development"],
    github: "https://github.com/Sohan-dsz",
    gradient: "from-fuchsia-500/30 via-purple-500/20 to-blue-500/30",
    emoji: "💸",
    images: [],
  },
  {
    slug: "hospital-data-management",
    title: "Hospital Data Management System",
    category: "Database",
    description:
      "Academic DBMS project demonstrating relational database concepts through patient record, doctor, and appointment management for database-driven hospital operations.",
    achievements: [
      "Patient record management",
      "Doctor and appointment management",
      "Database-driven hospital operations",
    ],
    tech: ["DBMS", "SQL"],
    github: "https://github.com/Sohan-dsz",
    gradient: "from-rose-500/30 via-pink-500/20 to-purple-500/30",
    emoji: "🏥",
    images: [],
  },
  {
    slug: "salesforce-flow-automation",
    title: "Salesforce Flow Automation Projects",
    category: "Salesforce",
    description:
      "A collection of Salesforce automation flows — staff recommendation, book-order counting, QA task creation — and Screen Flow Distribution superbadge solutions.",
    achievements: [
      "Staff Recommendation & Book Order Count flows",
      "QA Task Creation automation",
      "Screen Flow Distribution superbadge solutions",
    ],
    tech: ["Salesforce Flow", "Screen Flow", "Superbadge"],
    gradient: "from-indigo-500/30 via-violet-500/20 to-purple-500/30",
    emoji: "⚡",
    images: [],
  },
  {
    slug: "vehicle-order-inventory",
    title: "Vehicle Order & Inventory Management System",
    category: "Salesforce",
    description:
      "Salesforce solution built around a custom Vehicle_Order__c object with automated stock management, batch processing, and scheduled jobs for end-to-end business process automation.",
    achievements: [
      "Custom Vehicle_Order__c object with automated stock management",
      "Batch processing and scheduled jobs",
      "End-to-end business process automation",
    ],
    tech: ["Apex", "Triggers", "Batch Apex", "Scheduler"],
    gradient: "from-cyan-500/30 via-blue-500/20 to-violet-500/30",
    emoji: "📦",
    images: [],
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
