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
    slug: "oliver-gradzadi",
    name: "Oliver Gradzadi",
    credentials: [],
    bio: "",
    imageSlot: "/images/coaches/oliver-gradzadi.jpg",
  },
];
