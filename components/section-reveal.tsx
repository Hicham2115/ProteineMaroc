"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function SectionReveal({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window) || typeof container.animate !== "function") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          container.animate(
            [
              { opacity: 0, transform: "translate3d(0, 22px, 0)" },
              { opacity: 1, transform: "translate3d(0, 0, 0)" },
            ],
            { duration: 650, easing: "cubic-bezier(.2,.75,.25,1)", fill: "both" },
          );
          observer.unobserve(container);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
