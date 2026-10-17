"use client";

import { Select } from "@base-ui/react/select";
import { Check, ChevronDown } from "lucide-react";
import type { FocusEventHandler } from "react";

type StoreSelectProps = {
  name: string;
  defaultValue?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  id?: string;
  placeholder?: string;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
  onValueChange?: (value: string | null) => void;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
  className?: string;
  tone?: "dark" | "light";
  options: Array<{ value: string; label: string }>;
};

export function StoreSelect({
  tone = "light",
  options,
  className = "",
  name,
  id,
  placeholder,
  onBlur,
  "aria-invalid": ariaInvalid,
  "aria-describedby": ariaDescribedBy,
  ...props
}: StoreSelectProps) {
  const dark = tone === "dark";
  const triggerColors = dark
    ? "border-white/10 bg-[#363d44] text-white hover:border-white/25 data-popup-open:border-[#e46a61]"
    : "border-[#202326]/15 bg-[#f8f7f4] text-[#202326] hover:border-[#202326]/35 data-popup-open:border-brand-red";
  const popupColors = dark
    ? "border-white/15 bg-[#252a30] text-white shadow-[0_18px_45px_rgba(0,0,0,.45)]"
    : "border-[#202326]/10 bg-white text-[#202326] shadow-[0_18px_45px_rgba(32,35,38,.18)]";
  const itemColors = dark
    ? "text-white/75 data-highlighted:bg-white/[.07] data-highlighted:text-white data-selected:bg-[#d72d32]/15 data-selected:text-white"
    : "text-[#202326]/75 data-highlighted:bg-[#202326]/[.05] data-highlighted:text-[#202326] data-selected:bg-brand-red/10 data-selected:text-brand-red";

  return (
    <span className={`block ${className}`}>
      <Select.Root name={name} items={options} {...props}>
        <Select.Trigger
          id={id}
          onBlur={onBlur}
          aria-invalid={ariaInvalid}
          aria-describedby={ariaDescribedBy}
          className={`group mt-2 flex h-14 w-full items-center justify-between gap-4 border px-4 text-left text-[14px] font-semibold outline-none transition-colors focus-visible:border-[#e46a61] focus-visible:ring-1 focus-visible:ring-[#e46a61]/50 disabled:cursor-not-allowed disabled:opacity-50 ${triggerColors}`}
        >
          <Select.Value
            placeholder={placeholder}
            className={dark ? "data-placeholder:text-white/40" : "data-placeholder:text-charcoal/40"}
          />
          <Select.Icon>
            <ChevronDown
              size={17}
              strokeWidth={2}
              className="shrink-0 text-current transition-transform group-data-popup-open:rotate-180"
              aria-hidden="true"
            />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Positioner className="z-[100] outline-none" sideOffset={6}>
            <Select.Popup
              className={`min-w-[var(--anchor-width)] overflow-hidden border p-1.5 outline-none ${popupColors}`}
            >
              <Select.List className="max-h-[min(18rem,var(--available-height))] overflow-y-auto">
                {options.map((option) => (
                  <Select.Item
                    key={option.value}
                    value={option.value}
                    className={`flex min-h-11 cursor-pointer items-center gap-3 px-3 text-[14px] outline-none transition-colors data-disabled:cursor-not-allowed data-disabled:opacity-40 data-highlighted:outline-none ${itemColors}`}
                  >
                    <span className="grid size-4 shrink-0 place-items-center text-[#f07870]">
                      <Select.ItemIndicator>
                        <Check size={15} strokeWidth={3} aria-hidden="true" />
                      </Select.ItemIndicator>
                    </span>
                    <Select.ItemText>{option.label}</Select.ItemText>
                  </Select.Item>
                ))}
              </Select.List>
            </Select.Popup>
          </Select.Positioner>
        </Select.Portal>
      </Select.Root>
    </span>
  );
}
