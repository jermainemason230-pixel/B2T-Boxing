export type Program = {
  slug: string;
  number: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  forWho: string[];
  whatYouLearn: string[];
};

export const PROGRAMS: Program[] = [
  {
    slug: "fitness-boxing",
    number: "01",
    name: "Fitness Boxing",
    shortDescription: "Conditioning. Power. Confidence.",
    longDescription:
      "Boxing-style conditioning that builds power, endurance, and confidence. No contact required. The same drills our competitive fighters run, scaled to wherever you are today.",
    forWho: [
      "Adults looking for a serious workout",
      "Anyone curious about boxing without committing to contact",
      "All experience levels",
    ],
    whatYouLearn: [
      "Bag work and mitt drills",
      "Boxing-specific conditioning",
      "Footwork and stance basics",
    ],
  },
  {
    slug: "fundamentals",
    number: "02",
    name: "Fundamentals",
    shortDescription: "Stance, footwork, the six punches.",
    longDescription:
      "Where every fighter starts. Stance, footwork, defense, and the six core punches. Built for athletes who want the craft, not just the workout.",
    forWho: [
      "First-time boxers",
      "Athletes from other sports looking to cross-train",
      "Anyone planning to spar or compete eventually",
    ],
    whatYouLearn: [
      "Orthodox and southpaw stance",
      "Jab, cross, hooks, uppercuts",
      "Slips, rolls, parries, and blocks",
      "Combinations and ring movement",
    ],
  },
  {
    slug: "sparring",
    number: "03",
    name: "Sparring",
    shortDescription: "Supervised live training.",
    longDescription:
      "Supervised live training for athletes ready to test what they've learned. Controlled rounds with a coach in the corner. Sparring at B2T is intentional, not casual — you earn your way in.",
    forWho: [
      "Athletes who have completed Fundamentals",
      "Members preparing for competition",
      "Anyone training for self-defense at a serious level",
    ],
    whatYouLearn: [
      "Distance management and timing",
      "Reading and reacting to a live opponent",
      "Ring generalship and corner work",
    ],
  },
  {
    slug: "fight-team",
    number: "04",
    name: "Fight Team",
    shortDescription: "Competition prep, amateur and pro.",
    longDescription:
      "Competitive training for amateur and pro athletes preparing for sanctioned bouts. Roadwork, sparring, strategy, and corner support through fight night.",
    forWho: [
      "Amateurs working toward Golden Gloves and beyond",
      "Pros preparing for sanctioned bouts",
      "Athletes ready to commit to the schedule",
    ],
    whatYouLearn: [
      "Camp structure and weight management",
      "Opponent breakdown and strategy",
      "Sparring at competition intensity",
    ],
  },
  {
    slug: "kids-teens",
    number: "05",
    name: "Kids / Teens",
    shortDescription: "Discipline. Focus. Athleticism.",
    longDescription:
      "Age-appropriate instruction. Discipline, focus, and athleticism — without the contact unless and until the athlete and parent want it. B2T's mission lives here.",
    forWho: [
      "Kids and teens ages 7–17",
      "Families looking for a serious athletic environment",
      "Young athletes interested in eventual competition",
    ],
    whatYouLearn: [
      "Boxing fundamentals at age-appropriate intensity",
      "Conditioning and athletic development",
      "Discipline, respect, and focus",
    ],
  },
];
