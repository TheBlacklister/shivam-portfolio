import { skillGroups } from "@/data/skills";
import { aiTools, toolStages } from "@/data/aiTools";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { Pill } from "./ui/Pill";

export function Skills() {
  return (
    <Section
      id="stack"
      eyebrow="Stack"
      title={
        <>
          What I work with — and{" "}
          <span className="text-gradient-accent">how AI fits into it</span>.
        </>
      }
      lead="Listing tools says nothing. What matters is which stage of the build each one earns its place in."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="space-y-5">
          {skillGroups.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.06}>
              <div className="rounded-2xl border border-line bg-card/50 p-6">
                <h3 className="font-mono text-[10px] uppercase tracking-widest text-muted-3">
                  {g.label}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="sticky top-28 rounded-2xl border border-line bg-card/50 p-6">
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-muted-3">
              AI in the development lifecycle
            </h3>

            <div className="mt-6 space-y-7">
              {toolStages.map((stage) => {
                const tools = aiTools.filter((t) => t.stage === stage);
                if (tools.length === 0) return null;
                return (
                  <div key={stage} className="relative pl-6">
                    <span
                      aria-hidden
                      className="absolute left-0 top-1.5 size-2 rounded-full bg-gradient-to-br from-amber-400 to-yellow-300"
                    />
                    <span
                      aria-hidden
                      className="absolute bottom-0 left-[3.5px] top-5 w-px bg-line last:hidden"
                    />
                    <p className="font-display text-sm font-semibold text-white">{stage}</p>
                    <ul className="mt-3 space-y-3">
                      {tools.map((t) => (
                        <li key={t.name}>
                          <p className="text-sm font-medium text-zinc-300">{t.name}</p>
                          <p className="mt-0.5 text-xs leading-relaxed text-muted-2">{t.use}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
