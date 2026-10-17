import { ChevronDown } from "lucide-react";
import type { SelectHTMLAttributes } from "react";

type StoreSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  tone?: "dark" | "light";
  options: Array<{ value: string; label: string }>;
};

export function StoreSelect({ tone = "light", options, className = "", ...props }: StoreSelectProps) {
  const colors = tone === "dark"
    ? "border-white/10 bg-[#363d44] text-white hover:border-white/25 focus:border-[#e46a61] focus:ring-[#e46a61]/40"
    : "border-[#202326]/15 bg-[#f8f7f4] text-[#202326] hover:border-[#202326]/35 focus:border-brand-red focus:ring-brand-red/30";
  const accent = tone === "dark"
    ? "border-white/10 bg-[#d72d32]/10 text-[#f07870]"
    : "border-[#202326]/10 bg-brand-red/10 text-brand-red";

  return (
    <span className={`group relative block ${className}`}>
      <select
        {...props}
        className={`h-14 w-full appearance-none border px-4 pr-14 text-[14px] outline-none transition-colors focus:ring-1 ${colors}`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      <span className={`pointer-events-none absolute inset-y-0 right-0 flex w-12 items-center justify-center border-l transition-colors group-hover:bg-brand-red/15 ${accent}`} aria-hidden="true">
        <ChevronDown size={17} strokeWidth={2} className="transition-transform group-focus-within:rotate-180" />
      </span>
    </span>
  );
}
