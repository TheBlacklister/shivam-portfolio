export type TimelineItem = {
  year: string;
  title: string;
  org: string;
  body: string;
  kind: "education" | "role" | "build" | "future";
  /** Key into src/data/logos.ts. Omit to fall back to the kind icon. */
  logoKey?: string;
};

export const timeline: TimelineItem[] = [
  {
    year: "2018 — 2022",
    title: "B.E., Electronics & Telecommunication",
    org: "Ramaiah Institute of Technology",
    logoKey: "Ramaiah Institute of Technology",
    body: "Four years of signals, circuits and embedded systems. Learned to debug things you cannot print to console.",
    kind: "education",
  },
  {
    year: "2020 — 2021",
    title: "Project Intern, Samsung PRISM",
    org: "Samsung Research Institute",
    logoKey: "Samsung PRISM (SRIB)",
    body: "An Android camera app built on CameraX and OpenCV doing real-time image assessment. First time I shipped something a team outside my own actually used.",
    kind: "role",
  },
  {
    year: "2022",
    title: "Operational Analyst",
    org: "Deloitte USI",
    logoKey: "Deloitte USI",
    body: "Enterprise tooling and SharePoint administration for an India–Germany engagement. First taste of building internal tools people actually depend on.",
    kind: "role",
  },
  {
    year: "2022 — 2023",
    title: "Software Developer, 4G/5G Layer-1",
    org: "Samsung Research Institute",
    logoKey: "Samsung Research Institute, Bangalore",
    body: "PUCCH and PUSCH modules in a low-level systems environment. Protocol-level debugging, strict review culture, and my first real automation win.",
    kind: "role",
  },
  {
    year: "2023 — Present",
    title: "GM, Technology Delivery & Client Support",
    org: "Leadzsite",
    logoKey: "Leadzsite",
    body: "Owning delivery across client accounts. Cut a recurring performance problem down by 40% and learned that shipping is mostly communication.",
    kind: "role",
  },
  {
    year: "2025 — Present",
    title: "Shipping products end-to-end",
    org: "Minicon · Course Platform · Billing Software",
    body: "eCommerce, a course platform, a retail billing system — built and deployed solo, using AI-assisted engineering to compress the build loop without giving up ownership of architecture.",
    kind: "build",
  },
  {
    year: "Next",
    title: "AI Product Engineer",
    org: "Founding-engineer roles · AI products",
    body: "Looking for teams where one person can own a product from idea through deployment — and where shipping speed is a feature, not a risk.",
    kind: "future",
  },
];
