import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium " +
  "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98] whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-white text-black hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-6px_rgba(255,255,255,0.35)]",
  secondary:
    "border border-line bg-white/[0.03] text-white hover:-translate-y-0.5 hover:border-line-strong hover:bg-white/[0.07]",
  ghost: "text-muted hover:text-white",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  download?: boolean;
  className?: string;
  "aria-label"?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  external,
  download,
  className,
  ...rest
}: Props) {
  const classes = cn(base, variants[variant], className);

  if (external || download) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer noopener" : undefined}
        download={download}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
