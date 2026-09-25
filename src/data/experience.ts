export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  blurb: string;
  points: string[];
  tags: string[];
};

export const experience: Role[] = [
  {
    company: "Independent / Freelance",
    title: "AI Engineering & Agentic Development",
    period: "Jan 2025 — Present",
    location: "Bengaluru, India",
    blurb:
      "Building with AI agents rather than just alongside them — multi-agent systems, MCP-backed context, and the governance that keeps AI-written code reviewable.",
    points: [
      "Accelerated enterprise development cycles by 40% by rolling out agentic coding workflows built on Cursor, Claude Code and GitHub Copilot — and mentored 15+ developers on prompt engineering and AI-assisted coding practice.",
      "Architected and deployed multi-agent systems using CrewAI, the Agents SDK and the A2A protocol to automate code review, testing and deployment — cutting manual development overhead for client teams by 60%.",
      "Designed RAG-powered development environments integrating the Model Context Protocol (MCP) with custom APIs for context-aware code generation, and ran hands-on sessions for cross-functional product teams on AI tooling adoption.",
      "Led system-design POCs for AI-enhanced development pipelines, establishing coding standards and governance frameworks that improved code-quality metrics by 35% across distributed teams.",
    ],
    tags: ["Multi-Agent", "MCP", "RAG", "CrewAI", "Claude Code", "Mentoring"],
  },
  {
    company: "Pokus Technologies",
    title: "Relationship Manager & Operations Associate",
    period: "Feb 2026 — Jun 2026",
    location: "Bengaluru, India",
    blurb:
      "Operations for a quick-commerce sourcing and fulfilment platform — the unglamorous systems that decide whether a delivery promise holds.",
    points: [
      "Managed a cross-functional operations and vendor/store-partner network supporting a quick-commerce sourcing and fulfilment platform, coordinating inventory checks and last-mile delivery teams.",
      "Recruited, onboarded and managed field operations staff, building standardised sourcing and vendor-engagement workflows that improved order-fulfilment turnaround.",
      "Coordinated field issue resolution and SLA tracking across multiple locations on a single operational record.",
    ],
    tags: ["Quick Commerce", "Vendor Network", "Field Ops", "Fulfilment"],
  },
  {
    company: "Leadzsite",
    title: "General Manager — IT & Client Delivery",
    period: "Dec 2023 — Present",
    location: "Bengaluru, India",
    blurb:
      "Running end-to-end delivery at an AI performance-marketing and web agency — leading a small team, owning the client relationship, and shipping the platforms underneath it.",
    points: [
      "Directed end-to-end technical delivery for client IT platforms — a full-scale eCommerce system and a content/course-selling platform — coordinating design, development and QA against scope, timeline and quality commitments.",
      "Improved platform performance and page-load speed by 40% through systematic technical reviews, directly improving SEO, engagement and conversion outcomes.",
      "Led and mentored a 3-member technical delivery team, managing workloads, reviews and release priorities across multiple client accounts.",
      "Owned client-facing technical planning and solution proposals — translating business requirements into scalable system designs and driving improved deal conversion.",
      "Primary technical point of contact across accounts: triaging platform, browser and performance issues, and keeping non-technical stakeholders informed throughout.",
    ],
    tags: ["Delivery Lead", "Performance", "Team of 3", "Solution Design"],
  },
  {
    company: "Samsung Research Institute, Bangalore",
    title: "Software Developer — 4G/5G Layer-1 Systems",
    period: "Aug 2022 — Nov 2023",
    location: "Bengaluru, India",
    blurb:
      "Low-level systems engineering on the 5G protocol stack — where a bug is a timing violation, not a stack trace.",
    points: [
      "Developed 4G LTE / 5G Layer-1 uplink features (PUCCH & PUSCH) and maintained core L1 modules through debugging and issue resolution — hands-on 3GPP / O-RAN protocol stack implementation under strict code-review standards.",
      "Built an automated shell script to streamline test-score calculation, replacing a manual process and improving accuracy in periodic reviews.",
      "Maintained positive and negative test-case tracking across system validation cycles — improving coverage and catching regressions earlier.",
    ],
    tags: ["C/C++", "3GPP / O-RAN", "5G Layer-1", "Bash Automation"],
  },
  {
    company: "Deloitte USI",
    title: "Operational Analyst",
    period: "Mar 2022 — Jun 2022",
    location: "Bengaluru, India",
    blurb:
      "Enterprise tooling for an India–Germany engagement: access, structure, and the small internal tools nobody else wanted to build.",
    points: [
      "Administered Microsoft SharePoint workspaces for an international engagement — site configuration, folder structure, and access management for a team split across India and Germany.",
      "Built responsive web layouts and client workspaces in HTML/CSS for daily business operations, gathering requirements from cross-functional teams and supporting onboarding for new users.",
    ],
    tags: ["SharePoint", "Internal Tools", "Enterprise"],
  },
  {
    company: "Samsung PRISM (SRIB)",
    title: "Project Intern",
    period: "Jul 2020 — Mar 2021",
    location: "Remote / Bengaluru, India",
    blurb:
      "First real engineering project — an Android camera app doing real-time image assessment on device.",
    points: [
      "Developed an Android camera application using CameraX and OpenCV for real-time image assessment and UI interaction design.",
      "Designed the UI components and supported knowledge transfer back to internal Samsung teams.",
    ],
    tags: ["Android", "CameraX", "OpenCV", "Computer Vision"],
  },
];

export const education = {
  degree: "B.E., Electronics & Telecommunication",
  school: "Ramaiah Institute of Technology, Bangalore",
  period: "Aug 2018 — Aug 2022",
  detail: "CGPA 7.97",
};

export const leadership = [
  "Board Member & Treasurer, Rotary International Brigade Next Gen (2023–24)",
  "Community Service Director, Rotary International Brigade Next Gen (2022–23)",
  "Volunteer, Rotary International (2018–22)",
];
