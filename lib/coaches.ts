export type Coach = {
  slug: string;
  name: string;
  credentials: string[];
  bio: string;
  imageSlot?: string;
};

export const COACHES: Coach[] = [
  {
    slug: "bryan-sanchez",
    name: "Bryan Sanchez",
    credentials: [
      "45–5 AMATEUR RECORD",
      "3–0 PROFESSIONAL",
      "3× GOLDEN GLOVES CHAMPION",
    ],
    bio: "Bryan founded B2T. Three-time Golden Gloves champion, undefeated as a professional, and the head voice in every corner at B2T.",
    imageSlot: "/images/coaches/bryan-sanchez.jpg",
  },
  {
    slug: "jc-wade",
    name: "JC Wade",
    credentials: [],
    bio: "",
    imageSlot: "/images/coaches/jc-wade.jpg",
  },
  {
    slug: "olivier-gandzadi",
    name: "Olivier Gandzadi",
    credentials: [],
    bio: "Olivier is a dedicated coach with 20+ year experience in martial art including boxing, kick boxing and Muay thaï. He has trained with Champions in his home country of Paris France and worked with Professional fighters here in Portland by way of Grand Avenue boxing gym.\n\nOlivier's focus is mainly technique, such as footwork, punch mechanism and all the details that build strong fundamentals. Including Pad work, conditioning and sparring preparation.\n\nYouth & Adult all level",
    imageSlot: "/images/coaches/olivier-gandzadi.jpg",
  },
];
