"use client";

import { useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Search, Layers, X } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import {
  techStack,
  techCategories,
  type Tech,
  type ExperienceLevel,
} from "@/lib/data";
import { cn } from "@/lib/utils";

const LEVEL_META: Record<
  ExperienceLevel,
  { bars: number; label: string; className: string }
> = {
  Beginner: { bars: 1, label: "Beginner", className: "text-sky-300" },
  Intermediate: { bars: 2, label: "Intermediate", className: "text-cyan-300" },
  Advanced: { bars: 3, label: "Advanced", className: "text-neon-purple" },
  Expert: { bars: 4, label: "Expert", className: "text-neon-cyan" },
};

function TechLogo({ tech }: { tech: Tech }) {
  const [errored, setErrored] = useState(false);
  const showFallback = !tech.slug || errored;

  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-inner shadow-black/20 ring-1 ring-black/5">
      {showFallback ? (
        <span className="bg-gradient-to-br from-neon-blue to-neon-purple bg-clip-text text-lg font-bold text-transparent">
          {tech.name.charAt(0)}
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://cdn.simpleicons.org/${tech.slug}`}
          alt={`${tech.name} logo`}
          width={26}
          height={26}
          loading="lazy"
          onError={() => setErrored(true)}
          className="h-[26px] w-[26px] object-contain"
        />
      )}
    </span>
  );
}

function LevelMeter({ level }: { level: ExperienceLevel }) {
  const meta = LEVEL_META[level];
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1" aria-hidden>
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className={cn(
              "h-1.5 w-4 rounded-full transition-colors",
              i < meta.bars
                ? "bg-gradient-to-r from-neon-blue to-neon-purple"
                : "bg-white/10"
            )}
          />
        ))}
      </div>
      <span className={cn("text-[11px] font-semibold", meta.className)}>
        {meta.label}
      </span>
    </div>
  );
}

function TechCard({ tech }: { tech: Tech }) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [9, -9]), {
    stiffness: 200,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-9, 9]), {
    stiffness: 200,
    damping: 18,
  });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 26, scale: 0.96 },
        show: { opacity: 1, y: 0, scale: 1 },
      }}
      style={{ perspective: 900 }}
      className="h-full"
    >
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={reduced ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={reduced ? undefined : { y: -6 }}
        className="glass-card group relative flex h-full flex-col gap-4 p-5 hover:border-neon-cyan/40"
      >
        {/* hover glow */}
        <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-neon-blue/0 via-neon-cyan/0 to-neon-purple/0 opacity-0 blur-md transition-opacity duration-300 group-hover:from-neon-blue/20 group-hover:via-neon-cyan/10 group-hover:to-neon-purple/20 group-hover:opacity-100" />

        <div
          className="relative flex items-center gap-3"
          style={reduced ? undefined : { transform: "translateZ(36px)" }}
        >
          <TechLogo tech={tech} />
          <div className="min-w-0">
            <h4 className="truncate text-sm font-semibold">{tech.name}</h4>
            <p className="truncate text-[11px] text-muted-foreground">
              {tech.category}
            </p>
          </div>
        </div>

        <div className="relative" style={reduced ? undefined : { transform: "translateZ(24px)" }}>
          <LevelMeter level={tech.level} />
        </div>

        <div
          className="relative mt-auto flex flex-wrap gap-1.5"
          style={reduced ? undefined : { transform: "translateZ(18px)" }}
        >
          {tech.projects.map((p) => (
            <span
              key={p}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-neon-cyan/90"
            >
              {p}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Skills() {
  const [active, setActive] = useState<"All" | (typeof techCategories)[number]>(
    "All"
  );
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return techStack.filter((t) => {
      const matchesCat = active === "All" || t.category === active;
      const matchesQuery =
        !q ||
        t.name.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        t.projects.some((p) => p.toLowerCase().includes(q));
      return matchesCat && matchesQuery;
    });
  }, [active, query]);

  const filters: ("All" | (typeof techCategories)[number])[] = [
    "All",
    ...techCategories,
  ];

  return (
    <section id="skills" className="section-padding relative">
      <div className="container">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Technology Universe"
          description="An interactive ecosystem of the tools I build with — grouped by domain and backed by the real projects where I've used them. Search, filter, and explore."
        />

        {/* Search + category filters */}
        <Reveal>
          <div className="mx-auto mb-6 flex max-w-md items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-md focus-within:border-neon-cyan/50">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search technologies, domains, or projects…"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              aria-label="Search technologies"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={cn(
                  "flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all",
                  active === f
                    ? "border-transparent bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg shadow-neon-purple/25"
                    : "border-white/10 bg-white/5 text-muted-foreground hover:border-neon-cyan/40 hover:text-foreground"
                )}
              >
                {f === "All" && <Layers className="h-3.5 w-3.5" />}
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div
          layout
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.04 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((tech) => (
              <motion.div key={`${tech.category}-${tech.name}`} layout>
                <TechCard tech={tech} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-muted-foreground">
            No technologies match “{query}”. Try another search.
          </p>
        )}
      </div>
    </section>
  );
}
