const img = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export type Category = {
  slug: string;
  name: string;
  blurb: string;
  image: string;
  icon: string;
  featured?: boolean;
  path?: string;
};

export const occasionCategories: Category[] = [
  {
    slug: "wedding",
    name: "Wedding",
    blurb: "Bridal bouquets, boutonnieres and ceremony florals.",
    image: "/products/pure-blossom-bouquet.jpg",
    icon: "Heart",
    featured: true,
  },
  {
    slug: "anniversary",
    name: "Anniversary",
    blurb: "Mark another year of choosing each other.",
    image: "/products/bloom-deluxe-red-roses.jpg",
    icon: "Heart",
    featured: true,
  },
  {
    slug: "get-well",
    name: "Get Well",
    blurb: "A gentle reminder that someone is thinking of you.",
    image: "/products/be-happy-bouquet-with-roses.jpg",
    icon: "HeartPulse",
    featured: true,
  },
  {
    slug: "congratulations",
    name: "Congratulations",
    blurb: "For the news worth opening the door for.",
    image: "/products/blossoms-in-vogue.jpg",
    icon: "PartyPopper",
    featured: true,
  },
  {
    slug: "sympathy",
    name: "Funerals",
    blurb: "Tasteful standing sprays and casket flowers.",
    image: img("photo-1490750967868-88aa4486c946"),
    icon: "Droplet",
    featured: true,
    path: "/sympathy",
  },
  {
    slug: "baptisms",
    name: "Baptisms",
    blurb: "Soft florals for baptisms and first communions.",
    image: "/products/pure-blossom-bouquet.jpg",
    icon: "Baby",
    featured: true,
  },
  {
    slug: "quinceanera",
    name: "Quinceañera",
    blurb: "Big-room color for the celebration of a lifetime.",
    image: "/products/ultimate-elegance-long-stem-pink-and-red-roses.jpg",
    icon: "Sparkles",
    featured: true,
  },
  {
    slug: "events",
    name: "Events",
    blurb: "Corporate, grand openings and private parties.",
    image: img("photo-1464366400600-7168b8af9bc3"),
    icon: "PartyPopper",
    featured: true,
  },
];

export const occasionCategoriesBySlug: Record<string, Category> = Object.fromEntries(
  occasionCategories.map((c) => [c.slug, c]),
);

export function occasionPath(category: Category): string {
  return "path" in category && category.path ? category.path : `/occasions/${category.slug}`;
}