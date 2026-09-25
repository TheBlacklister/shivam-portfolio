import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { education, leadership } from "@/data/experience";

const beliefs = [
  {
    title: "Products, not tickets",
    body: "The interesting question is never 'what does the ticket say' — it's what the person on the other end is trying to get done. Everything else follows from that.",
  },
  {
    title: "AI is leverage, not authorship",
    body: "I use Claude Code and Cursor to move fast, but the architecture, the data model and the trade-offs are mine. Every diff that lands still gets read.",
  },
  {
    title: "Shipped means live",
    body: "Merged isn't done. I've deployed on Nginx and PM2 on a bare VPS, handled the DNS, and been the one who gets called when it falls over.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          I started at the <span className="text-gradient-accent">protocol layer</span> and worked
          my way up to products.
        </>
      }
    >
      <div className="grid gap-16 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="space-y-6 text-base leading-relaxed text-muted sm:text-[17px]">
          <Reveal>
            <p>
              My first engineering job was writing{" "}
              <span className="text-white">Layer-1 modules for the 5G stack at Samsung</span> —
              PUCCH and PUSCH, in a codebase where a bug is a timing violation rather than a stack
              trace. You learn a particular kind of patience there: read the spec, reproduce it,
              find the actual cause, and don&apos;t ship a guess.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p>
              Before that I was at <span className="text-white">Deloitte USI</span>, administering
              SharePoint for a team split across India and Germany and building small internal
              HTML/CSS tools nobody else wanted to own. It was the first time I noticed that the
              tool people actually use every day is worth more than the elegant one they don&apos;t.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              Since <span className="text-white">Dec 2023 I&apos;ve run technology delivery at
              Leadzsite</span> — the person clients call when something breaks. I chased down a
              recurring performance problem that had stalled and{" "}
              <span className="text-white">cut page load time by 40%</span>, then wrote the SOP so
              the next person wouldn&apos;t have to rediscover it.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              Somewhere in there the tooling changed. With Claude Code and Cursor I stopped having
              to choose between the idea I wanted to build and the time I had.{" "}
              <span className="text-white">
                Minicon — a full eCommerce platform, storefront to VPS — went from brief to live
              </span>
              . Then a course platform, then a billing system for retail counters.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              That&apos;s the throughline: I&apos;m not a prompt engineer and I&apos;m not
              &ldquo;a React developer.&rdquo; I&apos;m someone who can take a problem from
              conversation to PRD to architecture to a deployed thing people use — and who
              understands the systems underneath well enough to know when the model is wrong.
            </p>
          </Reveal>
        </div>

        <div className="space-y-4">
          {beliefs.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <div className="rounded-2xl border border-line bg-card/60 p-6 transition-colors duration-500 hover:border-line-strong">
                <h3 className="text-sm font-semibold text-white">{b.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-2">{b.body}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.24}>
            <div className="rounded-2xl border border-line bg-card/60 p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-3">
                Education
              </p>
              <h3 className="mt-3 text-sm font-semibold text-white">{education.degree}</h3>
              <p className="mt-1 text-sm text-muted-2">{education.school}</p>
              <p className="mt-1 text-xs text-muted-3">
                {education.period} · {education.detail}
              </p>
              <div className="my-5 h-px hairline" />
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-3">
                Leadership
              </p>
              <ul className="mt-3 space-y-2">
                {leadership.map((l) => (
                  <li key={l} className="text-xs leading-relaxed text-muted-2">
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
