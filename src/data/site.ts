/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT THIS FILE FIRST.
 *  Everything marked TODO is a placeholder — swap in real values.
 *  No UI component needs to be touched to change content.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Shivam Gupta",
  role: "AI Product Engineer",
  roles: ["AI Product Engineer", "Full-Stack Developer", "Vibe Builder"],
  tagline: "I turn ideas into production-ready products using AI-assisted engineering.",
  heroSub:
    "I build production-ready products using AI-assisted engineering — combining product thinking, full-stack development, and rapid iteration.",
  location: "Bengaluru, India",
  email: "guptashivam0307@gmail.com",
  phone: "+91 90387 27270",

  url: "https://shivamgupta-ai.vercel.app",
  resumeHref: "/Shivam_Gupta-Resume.pdf",

  socials: {
    github: "https://github.com/TheBlacklister",
    linkedin: "https://www.linkedin.com/in/shivam-gupta-823b63170",
    x: "", // optional — leave empty to hide
  },

  seo: {
    title: "Shivam Gupta — AI Product Engineer",
    description:
      "AI Product Engineer and full-stack developer. I ship production web apps, AI workflows, and business software — owning architecture, product decisions, deployment, and iteration.",
    keywords: [
      "AI Product Engineer",
      "Full Stack Developer",
      "Next.js",
      "Vibe Coding",
      "AI-assisted development",
      "Shivam Gupta",
      "Bengaluru",
    ],
  },
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
] as const;
