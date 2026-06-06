"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { personal } from "@/lib/data";

const details = [
  { icon: Mail, label: "Email", value: personal.email, href: personal.socials.email },
  { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: personal.location },
  { icon: Linkedin, label: "LinkedIn", value: "in/sohan1919", href: personal.socials.linkedin },
  { icon: Github, label: "GitHub", value: "Sohan-dsz", href: personal.socials.github },
];

function FeedbackOverlay({ name }: { name: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      // Top-to-bottom feedback: sweeps in from the top, exits toward the bottom.
      initial={reduced ? { opacity: 0 } : { y: "-110%" }}
      animate={reduced ? { opacity: 1 } : { y: 0 }}
      exit={reduced ? { opacity: 0 } : { y: "110%" }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl bg-gradient-to-b from-neon-blue/20 via-card/95 to-neon-purple/20 p-8 text-center backdrop-blur-xl"
    >
      {/* descending shimmer sweep */}
      {!reduced && (
        <motion.div
          className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/15 to-transparent"
          initial={{ y: "-100%" }}
          animate={{ y: "320%" }}
          transition={{ duration: 1.1, ease: "easeInOut", delay: 0.2 }}
        />
      )}
      <motion.svg
        width="68"
        height="68"
        viewBox="0 0 68 68"
        className="drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]"
      >
        <motion.circle
          cx="34"
          cy="34"
          r="30"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        <motion.path
          d="M21 35 L30 44 L48 25"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
        />
      </motion.svg>
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="text-xl font-semibold neon-text"
        >
          Thanks{name ? `, ${name.split(" ")[0]}` : ""}!
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-1 text-sm text-muted-foreground"
        >
          Your message is ready — opening your mail client now.
        </motion.p>
      </div>
    </motion.div>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container max-w-5xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something"
          description="Have a role, project, or idea? My inbox is always open."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="flex h-full flex-col gap-4">
              {details.map((d) => {
                const content = (
                  <div className="glass-card flex items-center gap-4 p-4 transition-colors hover:border-neon-cyan/40">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-neon-cyan">
                      <d.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">{d.label}</p>
                      <p className="truncate text-sm font-medium">{d.value}</p>
                    </div>
                  </div>
                );
                return d.href ? (
                  <a
                    key={d.label}
                    href={d.href}
                    target={d.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={d.label}>{content}</div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="glass-card relative space-y-4 overflow-hidden p-6 md:p-8"
            >
              <AnimatePresence>
                {sent && <FeedbackOverlay name={form.name} />}
              </AnimatePresence>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs text-muted-foreground">
                    Name
                  </label>
                  <Input
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs text-muted-foreground">
                    Email
                  </label>
                  <Input
                    required
                    type="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs text-muted-foreground">
                  Message
                </label>
                <Textarea
                  required
                  placeholder="Tell me about your project or opportunity…"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                <Send className="h-4 w-4" /> Send Message
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
