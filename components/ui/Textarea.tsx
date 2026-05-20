import { forwardRef, useId } from "react";
import { cn } from "@/lib/utils";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, error, className, id, ...rest }, ref) => {
    const generated = useId();
    const textareaId = id ?? generated;
    const errorId = `${textareaId}-error`;

    return (
      <div className={cn("flex flex-col gap-2", className)}>
        <label htmlFor={textareaId} className="stamp text-bone/60">
          {label}
        </label>
        <textarea
          ref={ref}
          id={textareaId}
          rows={4}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            "w-full bg-transparent border-0 border-b py-3 text-bone",
            "font-body text-base placeholder:text-bone/30 resize-y",
            "border-smoke focus:border-blood focus:outline-none transition-colors",
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
Textarea.displayName = "Textarea";
