import { defineLifeline } from "@/src/lib/lifeline-data";

/**
 * Narrative backbone — biography, not résumé.
 * Years map to curiosity → systems → products → companies.
 */
export const arthurLifeline = defineLifeline({
  slug: "arthur-dias",
  name: "Arthur Dias",
  birthYear: 1990,
  endYear: 2026,
  description:
    "From discovering programming to building infrastructure for immigration technology.",
  milestones: {
    1990: {
      id: "born",
      events: [
        "Born in Brazil. A country of 212 million people and 26 states.",
      ],
    },
    1997: {
      id: "got-my-first-computer",
      events: [
        "Got my first computer. A one CPU does all the work PC.",
      ],
    },
    2004: {
      id: "discovered-programming",
      events: [
        "Discovered programming. Curiosity stopped being a hobby and became a practice.",
      ],
    }, 
    2010: {
      id: "started-college",
      events: [
        "Started college. Studying Aerospace Engineering. The field of study that is my background.",
      ],
    },
    2014: {
      id: "exchange-program-in-united-states",
      events: [
        "Exchange program in United States. The country that I learned to love.",
      ],
    },
    2021: {
      id: "first-production",
      events: [
        "First production systems. Shipping taught more than studying ever could.",
      ],
    },
    2022: {
      id: "backend-architecture",
      events: [
        "Backend & architecture. Reliability, data models, and systems that disappear when they work.",
      ],
    },
    2024: {
      id: "ai-products",
      events: [
        "AI products. Building tools that remove friction instead of adding novelty.",
      ],
    },
    2026: {
      id: "boldvault-immigration-infra",
      events: [
        {
          text: "Building infrastructure for immigration technology — systems people depend on when stakes are high.",
        },
      ],
    },
  },
});
