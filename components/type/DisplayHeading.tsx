"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  as?: "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?: string;
  /** Disable scroll-reveal animation. */
  staticReveal?: boolean;
};

const EASE = [0.16, 1, 0.3, 1] as const;

export function DisplayHeading({
  as = "h2",
  children,
  className,
  staticReveal = false,
}: Props) {
  const Tag = motion[as];

  if (staticReveal) {
    const Static = as;
    return (
      <Static
        className={cn(
          "font-display tracking-tight leading-[0.85] uppercase",
          className,
        )}
      >
        {children}
      </Static>
    );
  }

  return (
    <Tag
      className={cn(
        "font-display tracking-tight leading-[0.85] uppercase",
        className,
      )}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: EASE }}
    >
      {children}
    </Tag>
  );
}
