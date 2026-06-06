"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom animated cursor: a crisp dot, a lagging trailing ring, and a soft
 * mouse-following spotlight. Pointer-only — automatically disabled on touch
 * devices and when the user prefers reduced motion (native cursor restored).
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!finePointer || prefersReduced) return;

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: mouse.x, y: mouse.y };
    let visible = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!visible) {
        visible = true;
        document.documentElement.classList.add("cursor-active");
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      }
      if (spotRef.current) {
        spotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      }
      const interactive = (e.target as HTMLElement | null)?.closest(
        'a, button, input, textarea, select, [role="button"], .cursor-pointer'
      );
      document.documentElement.classList.toggle("cursor-hover", !!interactive);
    };

    const onLeave = () => {
      visible = false;
      document.documentElement.classList.remove("cursor-active");
    };

    const loop = () => {
      ring.x += (mouse.x - ring.x) * 0.18;
      ring.y += (mouse.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    const onDown = () => document.documentElement.classList.add("cursor-down");
    const onUp = () => document.documentElement.classList.remove("cursor-down");
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.classList.remove(
        "has-custom-cursor",
        "cursor-active",
        "cursor-hover",
        "cursor-down"
      );
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={spotRef} className="cursor-spotlight" aria-hidden />
      <div ref={ringRef} className="cursor-ring" aria-hidden />
      <div ref={dotRef} className="cursor-dot" aria-hidden />
    </>
  );
}
