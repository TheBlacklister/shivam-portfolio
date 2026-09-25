export type Project = {
  slug: string;
  title: string;
  kicker: string;
  year: string;
  summary: string;
  description: string;
  challenge: string;
  result: string;
  stack: string[];
  aiStack: string[];
  tags: ("Product" | "Engineering" | "AI" | "Concept")[];
  accent: string; // tailwind-safe gradient pair
  liveUrl?: string;
  repoUrl?: string;
  status: "Live" | "In production" | "Concept" | "Internal";
  /** Key into src/data/logos.ts — renders the brand mark on the card header. */
  logoKey?: string;
};

export const projects: Project[] = [
  {
    slug: "minicon",
    logoKey: "Minicon",
    title: "Minicon",
    kicker: "Production eCommerce platform",
    year: "2025",
    summary:
      "A full-stack storefront shipped end-to-end — catalogue, payments, inventory, coupons, admin dashboard and a self-managed VPS deployment.",
    description:
      "Built and deployed a complete eCommerce platform for a retail client. I owned the whole surface: data modelling in Supabase, the storefront and checkout in Next.js, an internal admin dashboard for inventory and orders, a coupon engine, SEO and structured data, and the Nginx + PM2 deployment on a Hostinger VPS.",
    challenge:
      "The client needed a real store — not a template — on a fixed budget, with inventory and coupons the team could operate without a developer on call.",
    result:
      "Shipped to production on a self-managed VPS with an admin dashboard the client runs unaided, SEO-indexed product pages, and live payment integration.",
    stack: ["Next.js", "TypeScript", "Supabase", "MUI", "Hostinger VPS", "Nginx", "PM2"],
    aiStack: ["Claude Code", "Cursor", "ChatGPT"],
    tags: ["Product", "Engineering"],
    accent: "from-amber-500/25 to-orange-400/10",
    liveUrl: "https://minicon.in/", // TODO
    repoUrl: "", // TODO
    status: "Live",
  },
  {
    slug: "billing-software",
    logoKey: "Billing Software",
    title: "Billing Software",
    kicker: "GST invoicing for Indian retail",
    year: "2025",
    summary:
      "A counter-first billing system for Indian retail — GST invoicing with HSN codes, customer ledgers, product catalogue and a live revenue dashboard.",
    description:
      "A desktop-class billing app built around how an Indian shop counter actually works. Generate a GST invoice in a few keystrokes with per-item HSN codes and GST slabs, track customers and their order history, manage a product catalogue with card and table views, record payments across cash, UPI, card, bank and credit (including partial payments), and keep company profile, bank and UPI details that flow straight onto the invoice.",
    challenge:
      "Off-the-shelf billing tools were cloud-locked, slow on low-end counter hardware, or priced per-seat for a shop with one till — and most handled Indian GST as an afterthought.",
    result:
      "A fast local-first UI that runs on modest hardware, generates compliant GST invoices instantly, and keeps customers, stock and payment status in one place.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "GST / HSN"],
    aiStack: ["Cursor", "Claude Code"],
    tags: ["Product", "Engineering"],
    accent: "from-rose-500/25 to-pink-400/10",
    liveUrl: "/demos/billing-software.html",
    repoUrl: "",
    status: "In production",
  },
  {
    slug: "course-platform",
    logoKey: "Internz Valley",
    title: "Internz Valley",
    kicker: "Content & course-selling platform",
    year: "2025",
    summary:
      "A responsive content and course-selling platform with multimedia lessons — built and delivered end-to-end for Internz Valley.",
    description:
      "Directed delivery of a content/course-selling platform end-to-end — catalogue and lesson structure, multimedia playback, responsive layouts across devices, and checkout. Explored AI-assisted tagging and categorisation to make a growing library actually discoverable.",
    challenge:
      "A growing library of lessons is worthless if learners cannot find the right one, and manual categorisation does not keep pace with new content.",
    result:
      "Shipped a responsive multimedia platform with AI-assisted tagging feeding content discovery, delivered against fixed scope and timeline.",
    stack: ["React", "Responsive UI", "Multimedia", "API Integration"],
    aiStack: ["Claude Code", "Cursor", "ChatGPT"],
    tags: ["Product", "Engineering"],
    accent: "from-orange-400/25 to-yellow-300/10",
    liveUrl: "https://www.internzvalley.com/",
    repoUrl: "",
    status: "Live",
  },
  {
    slug: "pokus-ai",
    logoKey: "Pokus Technologies",
    title: "Pokus",
    kicker: "Quick-commerce operations",
    year: "2026",
    summary:
      "Operational systems for a quick-commerce sourcing and fulfilment platform — vendor workflows, store-partner coordination, field hiring and last-mile tracking.",
    description:
      "Worked inside a quick-commerce startup on the systems that keep sourcing and fulfilment running: standardised vendor-engagement workflows across a store-partner network, inventory checks, last-mile delivery coordination, SLA tracking, and recruiting and onboarding the field operations staff who run it.",
    challenge:
      "A store-partner network across multiple locations meant sourcing decisions, SLAs and fulfilment records lived in people's heads and scattered sheets.",
    result:
      "Standardised sourcing and vendor-engagement workflows that improved order-fulfilment turnaround, with field resolution and SLA tracking on a single operational record.",
    stack: ["Automation", "Ops tooling", "Google Workspace", "Python"],
    aiStack: ["ChatGPT", "Claude"],
    tags: ["Product", "AI"],
    accent: "from-yellow-400/25 to-amber-400/10",
    liveUrl: "https://pokus.ai/",
    repoUrl: "",
    status: "Internal",
  },
];

/** Derived from the data so a filter never renders with nothing behind it. */
export const projectFilters = [
  "All",
  ...Array.from(new Set(projects.flatMap((p) => p.tags))),
] as const;
