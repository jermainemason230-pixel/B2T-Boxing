import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "div" | "p";
};

/**
 * Small-caps tracked label. Used for credentials, metadata rows,
 * and anywhere the spec calls for a "stamped" piece of text.
 */
export function Stamp({ children, className, as: Tag = "span" }: Props) {
  return (
    <Tag className={cn("stamp text-bone/70", className)}>{children}</Tag>
  );
}
