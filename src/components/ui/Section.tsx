import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, lead, children, className }: Props) {
  return (
    <section id={id} className={cn("relative mx-auto w-full max-w-6xl px-6 py-24 sm:py-32", className)}>
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="size-1.5 rounded-full bg-accent shadow-[0_0_12px_2px] shadow-accent/50" />
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">{eyebrow}</span>
        </div>
      </Reveal>

      <Reveal delay={0.06}>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl">{title}</h2>
      </Reveal>

      {lead ? (
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{lead}</p>
        </Reveal>
      ) : null}

      <div className="mt-14">{children}</div>
    </section>
  );
}
