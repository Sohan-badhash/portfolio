# Sohan D Souza — Portfolio

A modern, futuristic, and highly interactive personal portfolio for **Sohan D Souza**, a Software Engineer specializing in AI/ML, Data Science, Full-Stack Development, and Salesforce.

![Next.js](https://img.shields.io/badge/Next.js-15-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/TailwindCSS-3-38bdf8)

## ✨ Features

- **Dark / Light mode** with system-free toggle (`next-themes`)
- **Interactive particle background** (mouse-reactive canvas constellation)
- **Three.js hero scene** — animated icosahedron core + starfield (`@react-three/fiber`, `drei`)
- **Animated typing effect** for roles in the hero
- **Glassmorphism cards** with subtle blur and neon accents
- **Scroll-based reveal animations** (`framer-motion`)
- **Projects** with category filters and 3D hover-tilt cards
- **Certifications gallery** with search + preview modal
- **Interactive timelines** for education & experience
- **Animated counters** for skills and achievements
- **Portfolio-aware AI chatbot** (rule-based over portfolio content, no API key needed)
- **Global search** (⌘K / Ctrl+K) across projects & certifications
- **Loading screen** with animated logo and **scroll progress** bar
- **SEO** metadata, Open Graph, sitemap & robots
- **Mobile-first** responsive design

## 🧱 Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router) + React 18 + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) + `tailwindcss-animate`
- [Framer Motion](https://www.framer.com/motion/)
- [Three.js](https://threejs.org/) via `@react-three/fiber` + `@react-three/drei`
- [Lucide Icons](https://lucide.dev/)
- Shadcn-style UI primitives

## 🚀 Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

Lint:

```bash
npm run lint
```

## 🛠️ Customizing Content

All content lives in a single file — **`src/lib/data.ts`**. Update your personal
info, skills, projects, education, experience, certifications, courses, and
stats there; the UI updates automatically.

- Replace `public/profile.svg` with your own photo (e.g. `profile.jpg`, then
  update the `src` in `src/components/sections/hero.tsx`).
- Replace `public/resume.pdf` with your latest resume.

## 📁 Structure

```
src/
├── app/                 # App Router (layout, page, sitemap, robots)
├── components/
│   ├── sections/        # Hero, About, Skills, Projects, ...
│   ├── ui/              # Button, Badge, Input primitives
│   └── ...              # Navbar, chatbot, particle bg, etc.
└── lib/
    ├── data.ts          # ← all editable content
    ├── chatbot.ts       # chatbot knowledge base
    └── utils.ts
```

## 📄 License

Personal portfolio — © Sohan D Souza.
