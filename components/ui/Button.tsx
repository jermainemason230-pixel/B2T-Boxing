import { forwardRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Restyled button. Sharp corners. Anton text. Blood-filled by default.
 * Arrow translates 2px right on hover. Never `rounded-2xl`.
 */
const buttonVariants = cva(
  [
    "group inline-flex items-center justify-center gap-3",
    "font-display uppercase tracking-wider text-base md:text-lg",
    "h-12 md:h-14 px-6 md:px-8",
    "rounded-none border transition-colors duration-200",
    "focus-visible:outline-none focus-visible:ring-0",
    "focus-visible:[outline:2px_solid_#c1272d] focus-visible:[outline-offset:3px]",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-blood text-bone border-blood hover:bg-bone hover:text-ink hover:border-bone",
        invert:
          "bg-bone text-ink border-bone hover:bg-ink hover:text-bone hover:border-bone",
        outline:
          "bg-transparent text-bone border-bone/40 hover:border-bone hover:bg-bone hover:text-ink",
        ghost:
          "bg-transparent text-bone border-transparent hover:text-blood",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type CommonProps = VariantProps<typeof buttonVariants> & {
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "href"> & {
    href: string;
  };

type Props = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  ({ variant, arrow = true, className, children, ...rest }, ref) => {
    const classes = cn(buttonVariants({ variant }), className);
    const content = (
      <>
        <span>{children}</span>
        {arrow ? (
          <ArrowUpRight
            aria-hidden
            className="size-4 transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
          />
        ) : null}
      </>
    );

    if ("href" in rest && rest.href) {
      const { href, ...anchorRest } = rest;
      const isExternal = /^https?:\/\//.test(href);
      if (isExternal) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            className={classes}
            {...anchorRest}
          >
            {content}
          </a>
        );
      }
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...anchorRest}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  },
);
Button.displayName = "Button";
