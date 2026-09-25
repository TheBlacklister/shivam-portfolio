import { Star } from "lucide-react";
import { reviewSummary, testimonials } from "@/data/testimonials";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { CompanyLogo } from "./ui/CompanyLogo";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden
          className={i < rating ? "size-3.5 fill-amber-400 text-amber-400" : "size-3.5 text-muted-3"}
        />
      ))}
    </span>
  );
}

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Client reviews"
      title={
        <>
          What clients say about{" "}
          <span className="text-gradient-accent">the team I deliver with</span>.
        </>
      }
      lead={
        <>
          These are Google reviews for <strong className="font-medium text-white">LeadzSite</strong>,
          the agency where I run technology delivery — reviews of the team&apos;s work, not personal
          references. Every project I ship there passes through them.
        </>
      }
    >
      {/* rating summary */}
      <Reveal>
        <a
          href={reviewSummary.url}
          target="_blank"
          rel="noreferrer noopener"
          className="group mb-10 inline-flex flex-wrap items-center gap-x-5 gap-y-3 rounded-2xl border border-line bg-card/60 px-6 py-5 transition-colors duration-500 hover:border-line-strong"
        >
          <CompanyLogo company="Leadzsite" />
          <span className="flex items-baseline gap-2.5">
            <span className="font-display text-3xl font-semibold text-white">
              {reviewSummary.rating.toFixed(1)}
            </span>
            <Stars rating={5} />
          </span>
          <span className="text-sm text-muted-2">
            {reviewSummary.count} reviews on {reviewSummary.source}
            <span className="ml-2 text-muted-3 transition-colors group-hover:text-amber-400">
              View listing →
            </span>
          </span>
        </a>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.07}>
            <figure className="flex h-full flex-col rounded-2xl border border-line bg-card/50 p-7 transition-colors duration-500 hover:border-line-strong">
              <div className="flex items-center justify-between gap-3">
                <Stars rating={t.rating} />
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-3">
                  {t.when}
                </span>
              </div>

              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-zinc-300">
                &ldquo;{t.quote}
                {t.excerpt ? <span className="text-muted-3"> …</span> : null}&rdquo;
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-3 border-t border-line pt-5">
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-line bg-white/[0.03] font-display text-xs text-muted-2">
                  {t.name.charAt(0).toUpperCase()}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-medium text-white">{t.name}</span>
                  <span className="block truncate text-xs text-muted-3">{t.meta}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <p className="mt-8 text-xs leading-relaxed text-muted-3">
          Reviews shown as published on Google. Two are opening excerpts of longer reviews — the
          full text is on the listing.
        </p>
      </Reveal>
    </Section>
  );
}
