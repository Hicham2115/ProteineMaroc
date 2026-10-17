"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Heart, Menu, ShoppingBag, X } from "lucide-react";

type NavigationItem = {
  label: string;
  href: string;
  current?: boolean;
};

export function MobileMenu({ items }: { items: NavigationItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <div className="hidden justify-self-end max-[700px]:block">
      <button
        className="inline-flex size-10 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-surface-soft hover:text-brand-red"
        type="button"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={23} /> : <Menu size={23} />}
      </button>

      {isOpen && (
        <>
          <button
            className="fixed inset-0 z-40 animate-[drawer-backdrop-in_180ms_ease_both] bg-charcoal/50"
            type="button"
            aria-label="Fermer le menu"
            onClick={() => setIsOpen(false)}
          />
          <aside
            id="mobile-navigation"
            className="fixed inset-y-0 right-0 z-50 flex w-[min(88vw,420px)] max-w-full animate-[drawer-slide-in_240ms_cubic-bezier(.22,.8,.28,1)_both] flex-col overflow-y-auto border-l border-line bg-paper px-6 pb-7 pt-6 shadow-[-18px_0_48px_rgba(20,22,24,0.18)] motion-reduce:animate-none"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation principale"
          >
            <div className="mb-7 flex items-start justify-between border-b border-line pb-5">
              <a className="block w-[190px]" href="https://mesproteines.ma/" aria-label="Mes Proteines Nutrition, accueil" onClick={() => setIsOpen(false)}>
                <Image
                  src="/images/mes-proteines-logo.webp"
                  alt="Mes Protéines Nutrition"
                  width={958}
                  height={284}
                  className="h-auto w-full"
                />
              </a>
              <button
                className="inline-flex size-10 items-center justify-center rounded-full bg-surface-soft text-charcoal transition-colors hover:bg-brand-red hover:text-white"
                type="button"
                aria-label="Fermer le menu"
                onClick={() => setIsOpen(false)}
              >
                <X size={21} />
              </button>
            </div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[.16em] text-ink-muted">Explorer</p>
            <nav className="flex flex-col gap-1" aria-label="Navigation principale">
              {items.map((item) => (
                <a
                  key={item.label}
                  className={`group flex items-center justify-between rounded-xl px-4 py-[15px] text-[16px] font-bold transition-colors hover:bg-surface-soft hover:text-brand-red ${item.current ? "bg-surface-soft text-brand-red" : "text-charcoal"}`}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                  <span className="text-lg font-normal text-brand-red opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true">→</span>
                </a>
              ))}
            </nav>

            <div className="mt-auto grid grid-cols-2 gap-3 border-t border-line pt-6">
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-line text-sm font-semibold text-charcoal transition-colors hover:border-brand-red hover:text-brand-red"
                href="https://mesproteines.ma/boutique/"
                aria-label="Favoris"
              >
                <Heart size={18} strokeWidth={1.8} /> Favoris
              </a>
              <a
                className="relative inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-red text-sm font-semibold text-white transition-colors hover:bg-brand-red-deep"
                href="https://mesproteines.ma/panier/"
                aria-label="Voir le panier"
              >
                <ShoppingBag size={18} strokeWidth={1.8} /> Panier
                <span className="grid size-[17px] place-items-center rounded-full bg-white text-[9px] font-extrabold text-brand-red" aria-hidden="true">
                  0
                </span>
              </a>
            </div>
          </aside>
        </>
      )}
    </div>
  );
}
