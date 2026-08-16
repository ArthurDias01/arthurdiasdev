export const SITE = {
  name: "Arthur Dias",
  initials: "AD",
  location: "São Paulo, Brazil",
  email: "arthursantos01@gmail.com",
  github: "https://github.com/ArthurDias01",
  linkedin: "https://www.linkedin.com/in/arthur-dias/",
  twitter: "https://twitter.com/ArthurODS_",
  url: "https://arthurdias.dev",
} as const;

export const NAV_LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#timeline", label: "Timeline" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const HERO = {
  name: "Arthur Dias",
  lead: "I build software and companies that solve difficult problems.",
  statement:
    "Curiosity has always been my unfair advantage. I build software, products, and companies around problems that are difficult enough to matter.",
  focus:
    "I focus on AI, backend systems, and thoughtful software design to create products that remove friction and create leverage.",
} as const;

export const QUOTE = {
  text: "I like hard problems because solving them narrows it down to the most intelligent work I can do.",
  attribution: "Arthur Dias",
} as const;

export const PRINCIPLES = [
  "Curiosity beats certainty.",
  "Build systems, not features.",
  "Simplicity is earned.",
  "Good infrastructure disappears.",
  "The best software removes work.",
] as const;

export const ABOUT_BRIEF =
  "Engineer, product builder, and entrepreneur. I design and ship systems where reliability, clarity, and leverage matter more than spectacle.";
