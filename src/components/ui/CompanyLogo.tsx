import Image from "next/image";
import { getLogo } from "@/data/logos";
import { BillingMark, MiniconMark, RamaiahMark } from "./BrandMarks";
import { cn } from "@/lib/utils";

type Size = "sm" | "md";

const box: Record<Size, string> = {
  sm: "size-11 rounded-xl",
  md: "size-16 rounded-2xl",
};

/**
 * Renders a company's mark, degrading gracefully:
 * real vector → typographic wordmark → monogram tile.
 * Every variant sits in the same tile so a row of them reads as one system.
 */
export function CompanyLogo({
  company,
  size = "md",
  className,
}: {
  company: string;
  size?: Size;
  className?: string;
}) {
  const logo = getLogo(company);

  const shell = cn(
    "grid shrink-0 place-items-center border border-line bg-white/[0.04]",
    "transition-all duration-500 group-hover:border-line-strong group-hover:bg-white/[0.07]",
    box[size],
    className,
  );

  if (!logo) {
    return (
      <span className={shell} aria-hidden>
        <span className="font-display text-xs font-semibold text-muted-2">
          {company.charAt(0)}
        </span>
      </span>
    );
  }

  if (logo.kind === "custom") {
    const Mark =
      logo.mark === "minicon" ? MiniconMark : logo.mark === "billing" ? BillingMark : RamaiahMark;
    return (
      <span className={shell} role="img" aria-label={`${logo.label} logo`}>
        <Mark
          className={cn(
            logo.tone === "mono" && "text-zinc-100",
            size === "md" ? "w-12" : "w-8",
          )}
        />
      </span>
    );
  }

  if (logo.kind === "file") {
    return (
      <span className={shell} role="img" aria-label={`${logo.label} logo`}>
        <Image
          src={logo.src}
          alt=""
          width={logo.width}
          height={logo.height}
          className={cn("object-contain", size === "md" ? "w-[3.25rem]" : "w-9")}
        />
      </span>
    );
  }

  if (logo.kind === "path") {
    return (
      <span className={shell} role="img" aria-label={`${logo.label} logo`}>
        <svg
          viewBox={logo.viewBox}
          className={cn("fill-current text-zinc-100", size === "md" ? "w-[3.25rem]" : "w-9")}
          aria-hidden
        >
          <path d={logo.path} />
        </svg>
      </span>
    );
  }

  if (logo.kind === "wordmark") {
    return (
      <span className={shell} role="img" aria-label={`${logo.label} logo`}>
        <span className="flex items-baseline gap-[1px]">
          <span
            className={cn(
              "font-display font-semibold tracking-tight text-zinc-100",
              size === "md" ? "text-[15px]" : "text-[11px]",
            )}
          >
            {logo.text}
          </span>
          {logo.dot ? (
            <span
              className={cn("rounded-full", size === "md" ? "size-[5px]" : "size-[3.5px]")}
              style={{ backgroundColor: logo.dot }}
            />
          ) : null}
        </span>
      </span>
    );
  }

  return (
    <span className={shell} role="img" aria-label={`${logo.label} logo`}>
      <span
        className={cn(
          "bg-gradient-to-br from-amber-300 via-rose-300 to-yellow-200 bg-clip-text font-display font-bold text-transparent",
          size === "md" ? "text-xl" : "text-sm",
        )}
      >
        {logo.initial}
      </span>
    </span>
  );
}
