export const workflow = [
  { step: "01", title: "Idea", body: "Start from a real problem someone has, not a stack I want to try." },
  { step: "02", title: "Research", body: "Who else solved this, what they got wrong, and what the user actually does today." },
  { step: "03", title: "PRD", body: "Write it down before building it. Scope, non-goals, and what 'done' means." },
  { step: "04", title: "Architecture", body: "Data model and boundaries first. The part AI should not be guessing at." },
  { step: "05", title: "AI Planning", body: "Turn the PRD into a task graph the model can execute against, file by file." },
  { step: "06", title: "Rapid Build", body: "Claude Code and Cursor for velocity — with me reviewing every diff that lands." },
  { step: "07", title: "Testing", body: "Edge cases, error states, and the paths users hit that the happy path ignores." },
  { step: "08", title: "Deployment", body: "Nginx, PM2, VPS or Vercel. Shipped means live, not merged." },
  { step: "09", title: "Iteration", body: "Watch it get used, fix what's actually broken, repeat." },
] as const;
