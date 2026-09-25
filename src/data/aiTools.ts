export type AITool = {
  name: string;
  stage: string;
  use: string;
};

export const aiTools: AITool[] = [
  {
    name: "Claude Code",
    stage: "Build",
    use: "Large-scale feature implementation, refactors across many files, and turning a written PRD into a working codebase.",
  },
  {
    name: "Cursor",
    stage: "Build",
    use: "Daily driver. Inline editing, fast iteration, and keeping context across a growing project.",
  },
  {
    name: "ChatGPT",
    stage: "Design",
    use: "Architecture discussions, weighing trade-offs, and pressure-testing a technical approach before committing to it.",
  },
  {
    name: "CrewAI · Agents SDK · A2A",
    stage: "Build",
    use: "Multi-agent systems that automate code review, testing and deployment — agents that hand work to each other instead of one model doing everything.",
  },
  {
    name: "MCP + RAG",
    stage: "Design",
    use: "Model Context Protocol wired to custom APIs so the model generates against the actual codebase and docs, not a guess at them.",
  },
  {
    name: "Windsurf",
    stage: "Build",
    use: "System-design POCs and larger refactors where I want a second agent's take before committing.",
  },
  {
    name: "GitHub Copilot",
    stage: "Build",
    use: "Inline suggestions and boilerplate — the small stuff that would otherwise break flow.",
  },
  {
    name: "v0",
    stage: "Ideate",
    use: "Rapid UI ideation — getting three layout directions on screen before picking one.",
  },
  {
    name: "Figma",
    stage: "Ideate",
    use: "Design exploration and handing myself a spec before writing a component.",
  },
  {
    name: "Supabase",
    stage: "Ship",
    use: "Postgres, auth and storage without standing up infrastructure I'd have to babysit.",
  },
  {
    name: "Vercel / VPS",
    stage: "Ship",
    use: "Vercel when speed matters, self-managed Nginx + PM2 on a VPS when cost and control do.",
  },
];

export const toolStages = ["Ideate", "Design", "Build", "Ship"] as const;
