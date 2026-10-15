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
  tags: ("Product" | "Engineering" | "AI" | "Concept" | "Science" | "3D" | "Interactive")[];
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
    slug: "naman-trading",
    logoKey: "Naman Trading Co.",
    title: "Naman Trading Co.",
    kicker: "Bilingual D2C storefront for a flour mill",
    year: "2026",
    summary:
      "A Hindi–English storefront for a Delhi chakki-atta business — a scroll-driven 3D seed-to-flour story, then shop, trial combos, bulk quotes and pincode delivery checks.",
    description:
      "A direct-to-consumer site for a family flour business that has traded grain in Delhi since 1996. The hero is a Three.js scene driven by scroll that follows one grain from sowing through harvest and the stone chakki to a sealed pack. Below it sits a working shop: searchable, sortable catalogue with 1 kg to 50 kg packs, a build-your-own 250 g trial combo, a persistent cart and checkout, a pincode checker with per-zone delivery ETAs, and a bulk-order quote form for restaurants, bakeries and kirana stores. Every heading is set in both Devanagari and English.",
    challenge:
      "A mandi-era business selling a commodity product needed to explain why fresh stone-ground atta is worth choosing, to customers who read Hindi first, English first, or both.",
    result:
      "A single self-contained page with a bilingual story-to-checkout flow, light and dark themes, reduced-motion support, and GST-invoice bulk ordering for business buyers.",
    stack: ["HTML", "CSS", "JavaScript", "Three.js", "Hindi / English"],
    aiStack: ["Claude Code"],
    tags: ["Product", "Engineering"],
    accent: "from-amber-700/30 to-yellow-600/10",
    liveUrl: "/demos/naman-trading.html",
    repoUrl: "",
    status: "Concept",
  },
  {
    slug: "hcg-son-tools",
    logoKey: "HCG & Son Tools Co.",
    title: "HCG & Son Tools Co.",
    kicker: "Power-tool spares storefront",
    year: "2026",
    summary:
      "A storefront for a Kolkata power-tool spares dealer — searchable by model number, with 3D-rendered parts, a cut-to-length copper cable builder, service kits and dealer quotes.",
    description:
      "A direct-to-consumer and trade site for a Janbazar dealer in armatures, field coils, carbon brushes, switches, bits, blades and machines. The hero is a scroll-driven Three.js story in which loose parts assemble into a working drill, and every product thumbnail is a part modelled and rendered in the browser rather than a photo. The shop searches by the model number on a machine's label, with quantity discounts at 10 and 50 pieces. A copper-cable configurator prices 2 or 3 core cable by thickness and length with coil discounts and a sizing guide per machine, alongside build-your-own service kits, a pincode checker with same-day to courier ETAs, a dealer-quote form, and cart, checkout and order history. Headings are set in both Devanagari and English.",
    challenge:
      "Spare parts are bought by fit, not by browsing: a repair shop knows the model number on the machine, not the part name, and a wrong armature is money down the drain.",
    result:
      "A single self-contained page where parts are found by model number and fit, cable is sized and priced to the metre, and trade buyers get GST invoices and carton-rate quotes.",
    stack: ["HTML", "CSS", "JavaScript", "Three.js", "Hindi / English"],
    aiStack: ["Claude Code"],
    tags: ["Product", "Engineering"],
    accent: "from-orange-700/30 to-amber-600/10",
    liveUrl: "/demos/hcg-son-tools.html",
    repoUrl: "",
    status: "Concept",
  },
  {
    slug: "microblazar",
    logoKey: "Microblazar",
    title: "A Black Hole is Pointing at Us",
    kicker: "Interactive astronomy experience",
    year: "2026",
    summary:
      "An interactive storytelling experience inspired by the first microblazar discovered inside the Milky Way, transforming a complex scientific paper into a cinematic journey through space.",
  
    description:
      "A mobile-first interactive web experience inspired by the discovery of the first confirmed microblazar in our galaxy. Users begin on Earth before flying through the Solar System and across the Milky Way to a black hole located 12,000 light-years away. As the journey unfolds, scientific concepts become interactive visualizations: the accretion disk grows, matter streams from the companion star, and a relativistic jet can be rotated to reveal why the object appears dramatically brighter when viewed almost head-on. Key discoveries from the research paper—including the jet travelling at nearly three quarters the speed of light, the 11-day orbital period, the enormous 100 light-year bubble created by the counter-jet, and the gamma-ray emission at the impact site—are presented through immersive animations rather than static figures, making cutting-edge astrophysics accessible to everyone.",
  
    challenge:
      "Modern astronomy papers contain remarkable discoveries, but their technical language and static figures make them difficult for a general audience to understand and share.",
  
    result:
      "A cinematic, interactive science experience that transforms a peer-reviewed discovery into an intuitive visual journey, allowing users to explore the physics themselves while making complex astronomy engaging, memorable and highly shareable.",
  
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Three.js",
      "GSAP",
      "WebGL"
    ],
  
    aiStack: ["Claude Code", "Emergent"],
  
    tags: ["Science", "3D", "Interactive"],
  
    accent: "from-indigo-700/30 to-violet-600/10",
  
    liveUrl: "/demos/black-hole.html",
  
    repoUrl: "",
  
    status: "Concept",
  },
  {
      slug: "kindly-revert",
      logoKey: "Kindly Revert",
      title: "Kindly Revert",
      kicker: "Workplace message rewriter and office betting pool",
      year: "2026",
      summary:
        "A tongue-in-cheek workplace tool that rewrites blunt messages into ones you can send to your boss, decodes corporate jargon, and runs a play-money betting pool for your office.",
      description:
        "A single-page site built as a carbon-copy interoffice memo. The hero is a scroll-driven Three.js story that follows a message from rant to machine to polished output to the boss's cabin. The rewriter has three modes: Polish turns what you think into what you can send, Reply answers an annoying message professionally, and Decode translates corporate speak into what it really means. A diplomacy dial runs from 'say it straight' to 'UN Secretary-General' across five tones (Diplomatic, Professional, Assertive, Light humour and Elegantly passive-aggressive), with before-and-after rage meters, a jargon index and a running count of civilised messages. A phrasebook of corporate clichés and their real meanings feeds straight into Decode. The office pool lets a team register a company with a boss codename, open questions such as who arrives after 10:15 or what mood the boss walks in with, and bet play coins from a 1,000-coin start, with winning bets splitting the pot by stake, a leaderboard and floor chatter. Light and dark themes are included, and there is a built-in rule-based fallback for when the AI rewriter is unavailable.",
      challenge:
        "Everyone drafts the email they actually want to send before the one they should, and the gap between the two is where careers and team morale get lost.",
      result:
        "A playful single page where a rant becomes a sendable message in one click, corporate jargon is decoded on demand, and an office can bet play coins on the day's small dramas without anyone embarrassing a colleague.",
      stack: ["HTML", "CSS", "JavaScript", "Three.js"],
      aiStack: ["Claude Code"],
      tags: ["Product", "Engineering"],
      accent: "from-blue-700/30 to-rose-500/10",
      liveUrl: "/demos/kindly-revert.html",
      repoUrl: "",
      status: "Concept",
  },
];

/** Derived from the data so a filter never renders with nothing behind it. */
export const projectFilters = [
  "All",
  ...Array.from(new Set(projects.flatMap((p) => p.tags))),
] as const;
