"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

type Option = { value: string; label: string };

type Props = {
  name: string;
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
};

/**
 * Segmented radio control — uses native radios for a11y, styled as
 * a row of inline cells with sharp borders. No dropdowns anywhere.
 */
export function SegmentedControl({
  name,
  label,
  options,
  value,
  onChange,
  error,
}: Props) {
  const groupId = useId();
  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="stamp text-bone/60">{label}</legend>
      <div
        role="radiogroup"
        aria-labelledby={groupId}
        className="flex flex-wrap gap-0 border border-smoke divide-x divide-smoke"
      >
        {options.map((opt) => {
          const checked = value === opt.value;
          const id = `${groupId}-${opt.value}`;
          return (
            <label
              key={opt.value}
              htmlFor={id}
              className={cn(
                "flex-1 min-w-[7rem] cursor-pointer text-center px-4 py-3",
                "stamp transition-colors",
                checked
                  ? "bg-blood text-bone"
                  : "bg-transparent text-bone/70 hover:text-bone",
              )}
            >
              <input
                id={id}
                type="radio"
                name={name}
                value={opt.value}
                checked={checked}
                onChange={() => onChange(opt.value)}
                className="sr-only"
              />
              {opt.label}
            </label>
          );
        })}
      </div>
      {error ? <p className="stamp text-blood">{error}</p> : null}
    </fieldset>
  );
}
