export type HeroSlide = {
  id: string;
  badge?: string;
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  copy: string;
  image: string;
  imagePosition?: string;
  overlay: string;
  primaryCta: { to: string; label: string };
  secondaryCta: { to: string; label: string };
};

const u = (id: string, w = 2000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const heroSlides: HeroSlide[] = [
  {
    id: "signature",
    eyebrow: "Oklahoma City · Locally owned",
    titleLead: "Send something",
    titleAccent: "that lands.",
    copy: "Same-day flower delivery, plush gifts and hand-tied arrangements across the OKC metro. Built for the moments people actually remember.",
    image: u("photo-1502910415892-57c11da1c360"),
    imagePosition: "center 40%",
    overlay: "bg-gradient-to-br from-night-950 via-night-950/92 to-night-950/65",
    primaryCta: { to: "/occasions", label: "Shop flowers" },
    secondaryCta: { to: "/occasions", label: "Browse occasions" },
  },
  {
    id: "autumn",
    badge: "Autumn 2026",
    eyebrow: "The autumn collection",
    titleLead: "Fall colors,",
    titleAccent: "delivered warm.",
    copy: "Burnished copper, deep plum and golden amber — stems from the season's best growers, wrapped by hand and on your door the same day.",
    image: u("photo-1471879832106-c7ab9e0cee23"),
    imagePosition: "center 45%",
    overlay: "bg-gradient-to-br from-night-950 via-[#2a1409]/80 to-[#4a2410]/45",
    primaryCta: { to: "/occasions", label: "Shop flowers" },
    secondaryCta: { to: "/occasions/events", label: "Plan an event" },
  },
  {
    id: "thanksgiving",
    badge: "Pre-order now",
    eyebrow: "Holiday hosting season",
    titleLead: "Set the table",
    titleAccent: "with flowers.",
    copy: "Low fragrant centerpieces, hostess gifts and gratitude arrangements for the people who cook, clean and host every year.",
    image: u("photo-1519225421980-715cb0215aed"),
    imagePosition: "center 50%",
    overlay: "bg-gradient-to-br from-night-950 via-[#141a0a]/80 to-[#2c3418]/45",
    primaryCta: { to: "/occasions/events", label: "Order for the table" },
    secondaryCta: { to: "/occasions/events", label: "Host & event orders" },
  },
];
