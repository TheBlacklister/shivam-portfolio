export const skillGroups = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "C / C++", "Bash / Shell", "SQL"],
  },
  {
    label: "Frameworks & Runtime",
    items: ["React", "Next.js", "Node.js", "Tailwind CSS", "Supabase", "MUI", "Vite", "Bootstrap"],
  },
  {
    label: "AI & Agents",
    items: [
      "Claude Code",
      "Cursor",
      "MCP",
      "RAG",
      "CrewAI",
      "Agents SDK",
      "A2A Protocol",
      "Windsurf",
      "GitHub Copilot",
      "Amazon Q",
      "Prompt Design",
    ],
  },
  {
    label: "Infrastructure & Cloud",
    items: [
      "Linux (Ubuntu)",
      "Nginx",
      "PM2",
      "Hostinger VPS",
      "Docker",
      "Git",
      "Vercel",
      "AWS",
      "CI/CD",
      "GitHub Actions",
    ],
  },
  {
    label: "Systems & Networking",
    items: [
      "3GPP 4G LTE / 5G NR",
      "O-RAN / RAN Architecture",
      "Embedded Systems",
      "CameraX",
      "OpenCV",
      "TCP/IP",
      "Protocol Analysis",
    ],
  },
  {
    label: "Product & Ops",
    items: ["PRD Writing", "Product Research", "UX Flows", "SharePoint", "Microsoft 365", "SLA Ops"],
  },
] as const;

export const metrics = [
  { value: 5, suffix: "+", label: "Production platforms shipped end-to-end" },
  { value: 40, suffix: "%", label: "Page load time reduced at Leadzsite" },
  { value: 15, suffix: "+", label: "Developers mentored on AI-assisted coding" },
  { value: 4, suffix: "", label: "Years across systems, enterprise and startups" },
] as const;
