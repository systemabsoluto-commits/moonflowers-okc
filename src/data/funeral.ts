export type FuneralType = {
  slug: string;
  name: string;
  blurb: string;
  detail: string;
  image: string;
  priceFrom: number;
  icon: string;
};

const img = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const funeralTypes: FuneralType[] = [
  {
    slug: "casket-sprays",
    name: "Casket Sprays",
    blurb: "The centerpiece of the service, laid across the casket.",
    detail:
      "Full-width sprays built on a rigid foam base so they sit flat and photograph well from any angle. Available in white, ivory and soft pastels, with an added sympathy ribbon at no charge.",
    image: img("photo-1490750967868-88aa4486c946"),
    priceFrom: 175,
    icon: "LayoutGrid",
  },
  {
    slug: "standing-sprays",
    name: "Standing Sprays",
    blurb: "Tall displays on easels for either side of the casket.",
    detail:
      "Three-quarter height standing arrangements on a wire easel. These read from the back of the room and hold their shape through a long service.",
    image: "/products/white-funeral-standing-spray.jpg",
    priceFrom: 155,
    icon: "PanelTop",
  },
  {
    slug: "pedestal-arrangements",
    name: "Pedestal Arrangements",
    blurb: "Urn flowers for the memorial table or the crematorium.",
    detail:
      "Symmetrical designs sized for a standard pedestal. The most requested arrangement for cremation services, where the flowers are moved directly from the service to the columbarium.",
    image: img("photo-1523438885200-e635ba2c371e"),
    priceFrom: 120,
    icon: "Cylinder",
  },
  {
    slug: "vase-arrangements",
    name: "Vase Arrangements",
    blurb: "Grounded, compact designs for the front row.",
    detail:
      "Built in a watertight glass vessel with a discreet pin frog, so the base is solid and clean. A softer, lower alternative to standing sprays.",
    image: img("photo-1496062031456-07b8f162a322"),
    priceFrom: 85,
    icon: "GlassWater",
  },
  {
    slug: "baskets-and-sheaves",
    name: "Baskets & Sheaves",
    blurb: "Woven baskets and hand-tied sheaves for cremation.",
    detail:
      "Traditional funeral sheaves, tied by hand in the style of the era you are honoring, plus low basket arrangements for graveside placement.",
    image: "/products/heartfelt-tribute-white-floor-basket-arrangement.jpg",
    priceFrom: 95,
    icon: "Package",
  },
  {
    slug: "wreaths",
    name: "Wreaths",
    blurb: "Round standing wreaths for the chapel or graveside.",
    detail:
      "Round wreaths arranged on a wire frame and mounted on an easel, finished with a ribbon. Offered in all-white, soft pastels and patriotic red, white and blue.",
    image: "/products/all-white-funeral-wreath.jpg",
    priceFrom: 165,
    icon: "Circle",
  },
  {
    slug: "standing-crosses",
    name: "Standing Crosses",
    blurb: "Cross-shaped tributes on an easel.",
    detail:
      "A cross formed in fresh blooms and mounted on a standing easel, a traditional and deeply personal tribute for the service.",
    image: "/products/peace-and-prayers-white-standing-cross.jpg",
    priceFrom: 220,
    icon: "Cross",
  },
  {
    slug: "standing-baskets",
    name: "Standing Baskets",
    blurb: "Upright baskets of blooms on an easel.",
    detail:
      "A generous basket arrangement elevated on a standing easel, reading full and soft from across the room — a versatile alternative to a standing spray.",
    image: "/products/heartfelt-sympathies-white-standing-basket.jpg",
    priceFrom: 200,
    icon: "Basket",
  },
  {
    slug: "memorial-tributes",
    name: "Memorial Tributes",
    blurb: "For the home, so the flowers are not just for the day.",
    detail:
      "Arrangements sized for a dining table or entryway, often ordered alongside service flowers so the family has something to come home to. We add a printed card with the service details.",
    image: img("photo-1509423350716-97f9360b4e09"),
    priceFrom: 75,
    icon: "Home",
  },
  {
    slug: "urn-and-cremation",
    name: "Urn & Cremation",
    blurb: "Ceremonial urn flowers for private and columbarium services.",
    detail:
      "Low-profile designs engineered to clear urns and niches, with hardy stems that hold for weeks in a columbarium without water.",
    image: img("photo-1541199249251-f713e6145474"),
    priceFrom: 135,
    icon: "CircleDot",
  },
  {
    slug: "corsages-boutonnieres",
    name: "Corsages & Boutonnieres",
    blurb: "For the family, the service staff and the pallbearers.",
    detail:
      "Fresh or silk, pinned or wristlet, in white, ivory or the colors of the family. Bulk pricing available for full funeral parties.",
    image: img("photo-1496062031456-07b8f162a322"),
    priceFrom: 18,
    icon: "Flower2",
  },
];

export const funeralTypesBySlug: Record<string, FuneralType> = Object.fromEntries(
  funeralTypes.map((t) => [t.slug, t]),
);

export const funeralFaqs = [
  {
    q: "How far in advance should I order funeral flowers?",
    a: "As soon as you know the date and time, ideally 24 to 48 hours ahead. If the service is tomorrow, call us. We keep fresh white and ivory stems in the cooler specifically so we can turn sympathy orders around the same day.",
  },
  {
    q: "Can you deliver directly to the funeral home?",
    a: "Yes, and it is the most common way we handle sympathy orders. We deliver to every funeral home in the OKC metro, always free, and we call the funeral home to confirm the service time and the correct room before we arrive.",
  },
  {
    q: "Do you coordinate with the funeral director?",
    a: "We work with most of them regularly. Send us the funeral home name and the service details and we will confirm timing directly so nothing is dropped or delivered early.",
  },
  {
    q: "What if I do not know the service time yet?",
    a: "Order anyway. We can hold the order and confirm the time by text, or adjust it later with no charge. Just tell us what you know.",
  },
  {
    q: "Is there a sympathy ribbon or card included?",
    a: "A ribbon reading your chosen message is included on all casket sprays and standing sprays at no extra cost, and we write the card by hand. Tell us the exact wording and we will transcribe it.",
  },
];
