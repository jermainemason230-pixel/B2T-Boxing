import { forwardRef, useId } from "react";
import { cn } from "@/lib/utils";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  hideLabel?: boolean;
};

/**
 * Underline-only input. No box, no radius, no fill.
 * Border is `smoke` by default, transitions to `blood` on focus.
 */
export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, error, hideLabel, className, id, ...rest }, ref) => {
    const generated = useId();
    const inputId = id ?? generated;
    const errorId = `${inputId}-error`;

    return (
      <div className={cn("flex flex-col gap-2", className)}>
        <label
          htmlFor={inputId}
          className={cn(
            "stamp text-bone/60",
            hideLabel && "sr-only",
          )}
        >
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            "w-full bg-transparent border-0 border-b py-3 text-bone",
            "font-body text-base placeholder:text-bone/30",
            "border-smoke focus:border-blood focus:outline-none",
            "transition-colors",
            error && "border-blood",
          )}
          {...rest}
        />
        {error ? (
          <p id={errorId} className="stamp text-blood">
            {error}
          </p>
        ) : null}
      </div>
    );
  },
);
Input.displayName = "Input";
