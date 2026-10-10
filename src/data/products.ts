export type ProductVariant = {
  id: string;
  name: string;
  price: number;
  description: string;
  image?: string;
};

export type ProductAddOn = {
  id: string;
  name: string;
  price: number;
  description: string;
  image?: string;
};

export type Product = {
  slug: string;
  name: string;
  price: number;
  oldPrice?: number;
  categorySlug: string;
  image: string;
  description: string;
  badge?: string;
  stems?: string;
  funeralType?: string;
  variants?: ProductVariant[];
  addOns?: ProductAddOn[];
  rating?: number;
  reviews?: number;
};

const img = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const photo = (name: string) => `${import.meta.env.BASE_URL}products/${name}.jpg`;

const giftAddOns: ProductAddOn[] = [
  {
    id: "teddy-bear",
    name: "Medium teddy bear",
    price: 20,
    description: "A soft plush bear to make the gift extra special.",
    image: `${import.meta.env.BASE_URL}addons/teddy-bear.jpg`,
  },
  {
    id: "smiley-balloon",
    name: "Smiley face balloon",
    price: 5,
    description: "A cheerful smiley balloon tied to the bouquet.",
    image: `${import.meta.env.BASE_URL}addons/smiley-balloon.png`,
  },
];

const standAddOn: ProductAddOn[] = [
  {
    id: "stand",
    name: "Stand / easel (tripie)",
    price: 20,
    description: "Adds a display stand or easel for the arrangement.",
  },
];

export const products: Product[] = [
{
    slug: "bloom-romance-tall-centerpieces",
    name: "Bloom Romance Tall Centerpieces",
    price: 150,
    categorySlug: "wedding",
    image: photo("set-de-centros-altos-bloom-romance"),
    description:
      "High white-and-blush centerpieces for guest tables that need to be seen above the room. Choose the flowers on their own, or add the slender metal bases for the full set.",
    badge: "Wedding",
    stems: "Per arrangement",
    rating: 5,
    reviews: 12,
    variants: [
      {
        id: "flowers-only",
        name: "Flowers only",
        price: 150,
        description: "Floral arrangement on its own, no base included.",
      },
      {
        id: "one-and-one",
        name: "1 arrangement + 1 base",
        price: 180,
        description: "One floral arrangement with one metal base.",
      },
      {
        id: "two-and-two",
        name: "2 arrangements + 2 bases",
        price: 375,
        description: "Two floral arrangements with two metal bases.",
      },
      {
        id: "full-set",
        name: "4 arrangements + 4 bases",
        price: 735,
        description: "The full set: 4 metal bases with 4 floral arrangements.",
      },
    ],
  },
  {
    slug: "bloom-deluxe-red-roses",
    name: "Bloom Deluxe Red Roses",
    price: 80,
    categorySlug: "anniversary",
    addOns: giftAddOns,
    image: photo("bloom-deluxe-red-roses"),
    description:
      "A full arrangement of rich red roses in our signature vessel, built for a milestone worth remembering.",
    badge: "Anniversary",
    stems: "Red roses",
    rating: 5,
    reviews: 21,
    variants: [
      {
        id: "classic",
        name: "Classic",
        price: 80,
        description: "12 to 16 red roses in our signature vessel.",
      },
      {
        id: "deluxe",
        name: "Deluxe",
        price: 120,
        description: "24 to 28 red roses in a fuller arrangement.",
      },
      {
        id: "premium",
        name: "Premium",
        price: 160,
        description: "30 to 36 red roses in a grand keepsake presentation.",
      },
    ],
  },
  {
    slug: "contemporary-red-roses",
    name: "Contemporary Red Roses",
    price: 85,
    categorySlug: "anniversary",
    addOns: giftAddOns,
    image: photo("contemporary-red-roses"),
    description:
      "Long stemmed red roses in a clean, modern profile that lets the color do the talking.",
    badge: "Anniversary",
    stems: "Red roses",
    rating: 4.9,
    reviews: 17,
    variants: [
      {
        id: "deluxe",
        name: "Deluxe",
        price: 85,
        description: "20 to 22 red roses in a clean modern profile.",
      },
      {
        id: "premium",
        name: "Premium",
        price: 110,
        description: "24 to 26 red roses in a fuller modern presentation.",
      },
    ],
  },
  {
    slug: "fields-of-europe-bliss",
    name: "Fields of Europe Bliss",
    price: 55,
    categorySlug: "anniversary",
    addOns: giftAddOns,
    image: photo("fields-of-europe-bliss"),
    description:
      "An abundant garden-style arrangement mixing whites and soft pinks that reads romantic from across the room.",
    rating: 5,
    reviews: 12,
    variants: [
      {
        id: "classic",
        name: "Classic",
        price: 55,
        description: "12 garden-style flowers in our signature vessel.",
      },
      {
        id: "deluxe",
        name: "Deluxe",
        price: 70,
        description: "15 garden-style flowers in a fuller arrangement.",
      },
      {
        id: "premium",
        name: "Premium",
        price: 90,
        description: "18 garden-style flowers in a grand presentation.",
      },
    ],
  },
  {
    slug: "magnificent-roses-preserved-domani-red-roses",
    name: "Magnificent Preserved Roses — Domani Red",
    price: 115,
    categorySlug: "anniversary",
    addOns: giftAddOns,
    image: photo("magnificent-roses-preserved-domani-red-roses"),
    description:
      "Domani red roses preserved to last for years, presented in a keepsake box. The gift that never fades.",
    badge: "Keepsake",
    rating: 5,
    reviews: 9,
    variants: [
      {
        id: "classic",
        name: "Classic",
        price: 115,
        description: "24 to 26 preserved roses in the keepsake box.",
      },
      {
        id: "deluxe",
        name: "Deluxe",
        price: 180,
        description: "38 to 40 preserved roses in a fuller keepsake box.",
      },
      {
        id: "premium",
        name: "Premium",
        price: 210,
        description: "48 to 50 preserved roses in a grand keepsake presentation.",
      },
    ],
  },
  {
    slug: "bloom-deluxe-blue-roses",
    name: "Bloom Deluxe Blue Roses",
    price: 80,
    categorySlug: "anniversary",
    addOns: giftAddOns,
    image: photo("bloom-deluxe-blue-roses"),
    description:
      "A striking arrangement of blue-tinted roses for someone who has seen the rest of them all.",
    rating: 4.8,
    reviews: 14,
    variants: [
      {
        id: "classic",
        name: "Classic",
        price: 80,
        description: "12 to 16 blue roses in our signature vessel.",
      },
      {
        id: "deluxe",
        name: "Deluxe",
        price: 120,
        description: "24 to 28 blue roses in a fuller arrangement.",
      },
      {
        id: "premium",
        name: "Premium",
        price: 160,
        description: "30 to 36 blue roses in a grand keepsake presentation.",
      },
    ],
  },
  {
    slug: "anniversary-red-roses",
    name: "Romance Red Roses",
    price: 75,
    categorySlug: "anniversary",
    addOns: giftAddOns,
    image: photo("red-roses"),
    description:
      "Tall, unwrapped red roses that land at the door picture-perfect.",
    stems: "Red roses",
    rating: 4.9,
    reviews: 28,
    variants: [
      {
        id: "deluxe",
        name: "Deluxe",
        price: 75,
        description: "12 red roses, arranged tall and picture-perfect.",
      },
      {
        id: "premium",
        name: "Premium",
        price: 110,
        description: "24 red roses in a grand presentation.",
      },
    ],
  },
  {
    slug: "rose-elegance-long-stem-red-roses",
    name: "Rose Elegance Long Stem Red Roses",
    price: 80,
    categorySlug: "anniversary",
    addOns: giftAddOns,
    image: photo("rose-elegance-long-stem-red-roses"),
    description:
      "A measured bunch of long stem red roses, wrapped clean for an everyday anniversary moment.",
    badge: "Anniversary",
    stems: "Long stem roses",
    rating: 4.8,
    reviews: 19,
    variants: [
      {
        id: "classic",
        name: "Classic",
        price: 80,
        description: "18 long stem red roses, wrapped clean.",
      },
      {
        id: "deluxe",
        name: "Deluxe",
        price: 110,
        description: "24 long stem red roses in a fuller bunch.",
      },
      {
        id: "premium",
        name: "Premium",
        price: 155,
        description: "36 long stem red roses in a grand presentation.",
      },
    ],
  },
  {
    slug: "ultimate-elegance-long-stem-pink-and-red-roses",
    name: "Ultimate Elegance Long Stem Pink & Red Roses",
    price: 80,
    categorySlug: "anniversary",
    addOns: giftAddOns,
    image: photo("ultimate-elegance-long-stem-pink-and-red-roses"),
    description:
      "A grand two-tone presentation of pink and red long stems for the years that ask for more than a dozen.",
    badge: "Premium",
    rating: 5,
    reviews: 11,
    variants: [
      {
        id: "classic",
        name: "Classic",
        price: 80,
        description: "18 pink and red long stem roses in a two-tone bunch.",
      },
      {
        id: "deluxe",
        name: "Deluxe",
        price: 110,
        description: "24 pink and red long stem roses, fuller presentation.",
      },
      {
        id: "premium",
        name: "Premium",
        price: 155,
        description: "36 pink and red long stem roses in a grand presentation.",
      },
    ],
  },
  {
    slug: "country-basket-blooms",
    name: "Country Basket Blooms",
    price: 90,
    categorySlug: "get-well",
    addOns: giftAddOns,
    image: photo("country-basket-blooms"),
    description:
      "A cheerful farmhouse-style basket of mixed blooms to brighten a room in need of some color.",
    badge: "Get Well",
    stems: "Mixed seasonal blooms",
    rating: 4.9,
    reviews: 15,
    variants: [
      {
        id: "classic",
        name: "Classic",
        price: 90,
        description: "20 mixed seasonal blooms in a woven basket.",
      },
      {
        id: "deluxe",
        name: "Deluxe",
        price: 110,
        description: "25 mixed seasonal blooms in a fuller basket.",
      },
      {
        id: "premium",
        name: "Premium",
        price: 130,
        description: "30 mixed seasonal blooms in a generous basket.",
      },
    ],
  },
  {
    slug: "fruits-and-blooms-basket",
    name: "Fruits & Blooms Basket",
    price: 65,
    categorySlug: "get-well",
    addOns: giftAddOns,
    image: photo("fruits-and-blooms-basket"),
    description:
      "Includes a seasonal plant, bananas, apples, pears and oranges in a wicker basket.",
    stems: "Plant and fresh fruit",
    rating: 5,
    reviews: 9,
  },
  {
    slug: "basket-full-of-wishes",
    name: "Basket Full of Wishes",
    price: 70,
    categorySlug: "get-well",
    addOns: giftAddOns,
    image: photo("basket-full-of-wishes"),
    description:
      "A gathered basket of soft pastels and garden greens, put together to say feel better soon.",
    badge: "Get Well",
    stems: "Mixed seasonal blooms",
    rating: 4.8,
    reviews: 12,
    variants: [
      {
        id: "classic",
        name: "Classic",
        price: 70,
        description: "15 mixed pastel blooms in a gathered basket.",
      },
      {
        id: "deluxe",
        name: "Deluxe",
        price: 90,
        description: "20 mixed pastel blooms in a fuller basket.",
      },
      {
        id: "premium",
        name: "Premium",
        price: 130,
        description: "30 mixed pastel blooms in a generous basket.",
      },
    ],
  },
  {
    slug: "be-happy-bouquet-with-roses",
    name: "Be Happy Bouquet with Roses",
    price: 50,
    categorySlug: "get-well",
    addOns: giftAddOns,
    image: photo("be-happy-bouquet-with-roses"),
    description:
      "A happy hand-tied bouquet finished with roses — compact, bright, and full of get-well energy.",
    stems: "Roses and cheerful fillers",
    rating: 5,
    reviews: 18,
    variants: [
      {
        id: "classic",
        name: "Classic",
        price: 50,
        description: "8 blooms finished with roses.",
      },
      {
        id: "deluxe",
        name: "Deluxe",
        price: 60,
        description: "12 blooms finished with roses.",
      },
      {
        id: "premium",
        name: "Premium",
        price: 70,
        description: "15 blooms finished with roses.",
      },
    ],
  },
  {
    slug: "mod-magnifique-bouquet",
    name: "Mod Magnifique Bouquet",
    price: 80,
    categorySlug: "congratulations",
    addOns: giftAddOns,
    image: photo("mod-magnifique-bouquet"),
    description:
      "A modern, tailored bouquet with a confident silhouette — made for closing the deal, the race, or the chapter.",
    badge: "Congrats",
    stems: "Structured mixed bouquet",
    rating: 4.9,
    reviews: 14,
    variants: [
      {
        id: "classic",
        name: "Classic",
        price: 80,
        description: "14 mixed blooms in a tailored silhouette.",
      },
      {
        id: "deluxe",
        name: "Deluxe",
        price: 95,
        description: "18 mixed blooms in a fuller tailored bouquet.",
      },
      {
        id: "premium",
        name: "Premium",
        price: 115,
        description: "22 mixed blooms in a grand tailored bouquet.",
      },
    ],
  },
  {
    slug: "bloom-sweet",
    name: "Bloom Sweet",
    price: 55,
    categorySlug: "congratulations",
    addOns: giftAddOns,
    image: photo("bloom-sweet"),
    description:
      "A sweet, celebratory bunch of mixed florals that lands somewhere between pretty and proud.",
    rating: 5,
    reviews: 12,
    variants: [
      {
        id: "classic",
        name: "Classic",
        price: 55,
        description: "A sweet, compact celebratory bunch.",
      },
      {
        id: "deluxe",
        name: "Deluxe",
        price: 65,
        description: "A fuller celebratory bunch of mixed florals.",
      },
      {
        id: "premium",
        name: "Premium",
        price: 80,
        description: "A generous, statement celebratory bouquet.",
      },
    ],
  },
  {
    slug: "blossoms-in-vogue",
    name: "Blossoms in Vogue",
    price: 60,
    categorySlug: "congratulations",
    addOns: giftAddOns,
    image: photo("blossoms-in-vogue"),
    description:
      "A fashion-forward arrangement of premium blooms — the kind you send when the news deserves attention.",
    badge: "Premium",
    stems: "Designer mixed arrangement",
    rating: 5,
    reviews: 9,
    variants: [
      {
        id: "classic",
        name: "Classic",
        price: 60,
        description: "A stylish, compact designer arrangement.",
      },
      {
        id: "deluxe",
        name: "Deluxe",
        price: 70,
        description: "A fuller fashion-forward arrangement.",
      },
      {
        id: "premium",
        name: "Premium",
        price: 85,
        description: "A statement premium arrangement of designer blooms.",
      },
    ],
  },
  {
    slug: "dream-in-color-bouquet",
    name: "Dream in Color Bouquet",
    price: 75,
    categorySlug: "congratulations",
    addOns: giftAddOns,
    image: photo("dream-in-color-bouquet"),
    description:
      "A vivid, garden-fresh palette that celebrates the milestone in full color.",
    rating: 4.8,
    reviews: 16,
    variants: [
      {
        id: "classic",
        name: "Classic",
        price: 75,
        description: "12 vivid garden-fresh blooms.",
      },
      {
        id: "deluxe",
        name: "Deluxe",
        price: 80,
        description: "15 vivid garden-fresh blooms.",
      },
      {
        id: "premium",
        name: "Premium",
        price: 100,
        description: "18 vivid garden-fresh blooms in a full-color statement.",
      },
    ],
  },
  {
    slug: "white-funeral-standing-spray",
    name: "White Funeral Standing Spray",
    price: 150,
    categorySlug: "sympathy",
    image: photo("white-funeral-standing-spray"),
    description:
      "A tall, dignified standing spray in white and green, set on an easel for the side of the casket.",
    badge: "Sympathy",
    funeralType: "standing-sprays",
    stems: "White mixed blooms",
    rating: 5,
    reviews: 8,
    variants: [
      {
        id: "deluxe",
        name: "Deluxe",
        price: 150,
        description: "30 to 35 white blooms, set on an easel.",
      },
      {
        id: "premium",
        name: "Premium",
        price: 190,
        description: "40 to 45 white blooms, set on an easel.",
      },
    ],
  },
  {
    slug: "blue-and-white-funeral-standing-spray",
    name: "Blue & White Funeral Standing Spray",
    price: 150,
    categorySlug: "sympathy",
    image: photo("blue-and-white-funeral-standing-spray"),
    description:
      "A standing spray in blue and white tones, arranged full and reading beautifully from the back of the room.",
    badge: "Sympathy",
    funeralType: "standing-sprays",
    stems: "Blue and white blooms",
    rating: 5,
    reviews: 6,
    variants: [
      {
        id: "deluxe",
        name: "Deluxe",
        price: 150,
        description: "30 to 35 blue and white blooms, set on an easel.",
      },
      {
        id: "premium",
        name: "Premium",
        price: 190,
        description: "40 to 45 blue and white blooms, set on an easel.",
      },
    ],
  },
  {
    slug: "white-condolence-spray",
    name: "White Condolence Spray",
    price: 180,
    categorySlug: "sympathy",
    image: photo("white-condolence-spray"),
    description:
      "An upright white condolence spray, full-headed and soft, sized to line the front row or the entrance.",
    badge: "Sympathy",
    funeralType: "standing-sprays",
    stems: "White mixed blooms",
    rating: 4.9,
    reviews: 7,
  },
  {
    slug: "heartfelt-tribute-white-floor-basket",
    name: "Heartfelt Tribute White Floor Basket",
    price: 120,
    categorySlug: "sympathy",
    image: photo("heartfelt-tribute-white-floor-basket-arrangement"),
    description:
      "A generous white floor basket set at the casket or graveside, in a clean all-white palette.",
    badge: "Sympathy",
    funeralType: "baskets-and-sheaves",
    stems: "White mixed blooms",
    rating: 5,
    reviews: 9,
    variants: [
      {
        id: "deluxe",
        name: "Deluxe",
        price: 120,
        description: "20 to 25 white blooms in a floor basket.",
      },
      {
        id: "premium",
        name: "Premium",
        price: 155,
        description: "30 to 35 white blooms in a fuller floor basket.",
      },
    ],
  },
  {
    slug: "heartfelt-tribute-blue-and-white-floor-basket",
    name: "Heartfelt Tribute Blue & White Floor Basket",
    price: 155,
    categorySlug: "sympathy",
    image: photo("heartfelt-tribute-blue-and-white-floor-basket-arrangement"),
    description:
      "A blue and white floor basket in a classic sympathy palette, sized for the service.",
    badge: "Sympathy",
    funeralType: "baskets-and-sheaves",
    stems: "Blue and white blooms",
    rating: 5,
    reviews: 5,
    variants: [
      {
        id: "deluxe",
        name: "Deluxe",
        price: 155,
        description: "30 to 35 blue and white blooms in a floor basket.",
      },
      {
        id: "premium",
        name: "Premium",
        price: 195,
        description: "40 to 45 blue and white blooms in a fuller floor basket.",
      },
    ],
  },
  {
    slug: "heartfelt-tribute-lavender-and-white-floor-basket",
    name: "Heartfelt Tribute Lavender & White Floor Basket",
    price: 165,
    categorySlug: "sympathy",
    image: photo("heartfelt-tribute-lavender-and-white-floor-basket-arrangement"),
    description:
      "A lavender and white floor basket, gentle in color and built to hold through the service.",
    badge: "Sympathy",
    funeralType: "baskets-and-sheaves",
    stems: "Lavender and white blooms",
    rating: 5,
    reviews: 6,
    variants: [
      {
        id: "deluxe",
        name: "Deluxe",
        price: 165,
        description: "30 lavender and white blooms in a floor basket.",
      },
      {
        id: "premium",
        name: "Premium",
        price: 185,
        description: "40 lavender and white blooms in a fuller floor basket.",
      },
    ],
  },
  {
    slug: "all-white-funeral-wreath",
    name: "All White Funeral Wreath",
    price: 160,
    categorySlug: "sympathy",
    image: photo("all-white-funeral-wreath"),
    description:
      "A round standing wreath in all-white blooms, set on an easel for the chapel or the graveside.",
    badge: "Sympathy",
    funeralType: "wreaths",
    stems: "White mixed blooms",
    rating: 5,
    reviews: 7,
    variants: [
      {
        id: "deluxe",
        name: "Deluxe",
        price: 160,
        description: "35 white blooms in a round standing wreath.",
      },
      {
        id: "premium",
        name: "Premium",
        price: 200,
        description: "45 white blooms in a fuller round standing wreath.",
      },
    ],
    addOns: standAddOn,
  },
  {
    slug: "cremation-wreath-all-white",
    name: "Cremation Wreath — All White",
    price: 80,
    categorySlug: "sympathy",
    image: photo("cremation-wreath-all-white"),
    description:
      "A full all-white wreath sized for cremation and memorial services, finished with a soft bow.",
    badge: "Sympathy",
    funeralType: "wreaths",
    stems: "White mixed blooms",
    rating: 5,
    reviews: 5,
    variants: [
      {
        id: "classic",
        name: "Classic",
        price: 80,
        description: "A compact all-white cremation wreath.",
      },
      {
        id: "deluxe",
        name: "Deluxe",
        price: 100,
        description: "A fuller all-white cremation wreath.",
      },
    ],
  },
  {
    slug: "serene-blessings-standing-wreath-blue-and-white",
    name: "Serene Blessings Standing Wreath — Blue & White",
    price: 195,
    categorySlug: "sympathy",
    image: photo("serene-blessings-standing-wreath-blue-and-white"),
    description:
      "A standing wreath in serene blue and white tones, arranged on an easel to read from across the room.",
    badge: "Sympathy",
    funeralType: "wreaths",
    stems: "Blue and white blooms",
    rating: 5,
    reviews: 4,
    addOns: standAddOn,
  },
  {
    slug: "serene-blessings-standing-wreath-pink-and-white",
    name: "Serene Blessings Standing Wreath — Pink & White",
    price: 175,
    categorySlug: "sympathy",
    image: photo("serene-blessings-standing-wreath-pink-and-white"),
    description:
      "A standing wreath in soft pink and white, gentle in color and full in shape.",
    badge: "Sympathy",
    funeralType: "wreaths",
    stems: "Pink and white blooms",
    rating: 5,
    reviews: 4,
    variants: [
      {
        id: "deluxe",
        name: "Deluxe",
        price: 175,
        description: "35 pink and white blooms in a standing wreath.",
      },
      {
        id: "premium",
        name: "Premium",
        price: 200,
        description: "45 pink and white blooms in a fuller standing wreath.",
      },
    ],
    addOns: standAddOn,
  },
  {
    slug: "serene-blessings-standing-wreath-red-white-and-blue",
    name: "Serene Blessings Standing Wreath — Red, White & Blue",
    price: 180,
    categorySlug: "sympathy",
    image: photo("serene-blessings-standing-wreath-red-white-and-blue"),
    description:
      "A standing wreath in red, white and blue, honoring a life of service.",
    badge: "Sympathy",
    funeralType: "wreaths",
    stems: "Red, white and blue blooms",
    rating: 5,
    reviews: 4,
    variants: [
      {
        id: "deluxe",
        name: "Deluxe",
        price: 180,
        description: "35 red, white and blue blooms in a standing wreath.",
      },
      {
        id: "premium",
        name: "Premium",
        price: 200,
        description: "45 red, white and blue blooms in a fuller standing wreath.",
      },
    ],
    addOns: standAddOn,
  },
  {
    slug: "always-remember-floral-heart-tribute-white",
    name: "Always Remember Floral Heart Tribute — White",
    price: 200,
    categorySlug: "sympathy",
    image: photo("always-remember-floral-heart-tribute-white"),
    description:
      "A heart-shaped sympathy tribute in all white, standing on an easel beside the casket.",
    badge: "Sympathy",
    funeralType: "memorial-tributes",
    stems: "White mixed blooms",
    rating: 5,
    reviews: 5,
    addOns: standAddOn,
  },
  {
    slug: "always-remember-floral-heart-tribute-pink-and-white",
    name: "Always Remember Floral Heart Tribute — Pink & White",
    price: 215,
    categorySlug: "sympathy",
    image: photo("always-remember-floral-heart-tribute-pink-and-white"),
    description:
      "A heart-shaped tribute in pink and white, a warm and personal way to say goodbye.",
    badge: "Sympathy",
    funeralType: "memorial-tributes",
    stems: "Pink and white blooms",
    rating: 5,
    reviews: 4,
    addOns: standAddOn,
  },
  {
    slug: "always-remember-floral-heart-tribute-red-rose-and-lily",
    name: "Always Remember Floral Heart Tribute — Red Rose & Lily",
    price: 200,
    categorySlug: "sympathy",
    image: photo("always-remember-floral-heart-tribute-red-rose-and-lily"),
    description:
      "A heart-shaped tribute of red roses and lilies, deep and loving in color.",
    badge: "Sympathy",
    funeralType: "memorial-tributes",
    stems: "Red roses and lilies",
    rating: 5,
    reviews: 4,
    addOns: standAddOn,
  },
  {
    slug: "always-remember-floral-heart-tribute-red-with-white-roses",
    name: "Always Remember Floral Heart Tribute — Red with White Roses",
    price: 280,
    categorySlug: "sympathy",
    image: photo("always-remember-floral-heart-tribute-red-with-white-roses"),
    description:
      "A heart-shaped tribute of red blooms accented with white roses.",
    badge: "Sympathy",
    funeralType: "memorial-tributes",
    stems: "Red blooms and white roses",
    rating: 5,
    reviews: 4,
    addOns: standAddOn,
  },
  {
    slug: "blue-and-white-half-casket-cover",
    name: "Blue & White Mixed Half Casket Cover",
    price: 180,
    categorySlug: "sympathy",
    image: photo("blue-and-white-half-casket-cover"),
    description:
      "A blue and white half casket cover, softly draped to rest over the casket lid.",
    badge: "Sympathy",
    funeralType: "casket-sprays",
    stems: "Blue and white blooms",
    rating: 5,
    reviews: 4,
  },
  {
    slug: "lavender-and-white-half-casket-cover",
    name: "Lavender & White Mixed Half Casket Cover",
    price: 180,
    categorySlug: "sympathy",
    image: photo("lavender-and-white-half-casket-cover"),
    description:
      "A lavender and white half casket cover, gentle in color and generous in shape.",
    badge: "Sympathy",
    funeralType: "casket-sprays",
    stems: "Lavender and white blooms",
    rating: 5,
    reviews: 4,
  },
  {
    slug: "white-rose-half-casket-cover",
    name: "White Rose Half Casket Cover",
    price: 220,
    categorySlug: "sympathy",
    image: photo("white-rose-half-casket-cover"),
    description:
      "A half casket cover of white roses, classic and clean.",
    badge: "Sympathy",
    funeralType: "casket-sprays",
    stems: "White roses",
    rating: 5,
    reviews: 5,
  },
  {
    slug: "peace-and-prayers-blue-and-white-standing-cross",
    name: "Peace & Prayers Blue & White Standing Cross",
    price: 185,
    categorySlug: "sympathy",
    image: photo("peace-and-prayers-blue-and-white-standing-cross"),
    description:
      "A standing cross in blue and white, mounted on an easel for the service.",
    badge: "Sympathy",
    funeralType: "standing-crosses",
    stems: "Blue and white blooms",
    rating: 5,
    reviews: 4,
    addOns: standAddOn,
  },
  {
    slug: "peace-and-prayers-red-and-white-standing-cross",
    name: "Peace & Prayers Red & White Standing Cross",
    price: 185,
    categorySlug: "sympathy",
    image: photo("peace-and-prayers-red-and-white-standing-cross"),
    description:
      "A standing cross in red and white, a traditional and heartfelt tribute.",
    badge: "Sympathy",
    funeralType: "standing-crosses",
    stems: "Red and white blooms",
    rating: 5,
    reviews: 4,
    addOns: standAddOn,
  },
  {
    slug: "peace-and-prayers-white-standing-cross",
    name: "Peace & Prayers White Standing Cross",
    price: 185,
    categorySlug: "sympathy",
    image: photo("peace-and-prayers-white-standing-cross"),
    description:
      "A standing cross in all white, serene and dignified on its easel.",
    badge: "Sympathy",
    funeralType: "standing-crosses",
    stems: "White mixed blooms",
    rating: 5,
    reviews: 5,
    addOns: standAddOn,
  },
  {
    slug: "red-white-and-blue-sympathy-standing-spray",
    name: "Red, White & Blue Sympathy Standing Spray",
    price: 170,
    categorySlug: "sympathy",
    image: photo("red-white-and-blue-sympathy-standing-spray"),
    description:
      "A patriotic standing spray in red, white and blue, honoring a veteran or first responder.",
    badge: "Sympathy",
    funeralType: "standing-sprays",
    stems: "Red, white and blue blooms",
    rating: 5,
    reviews: 5,
    addOns: standAddOn,
  },
  {
    slug: "sacred-blessing-blue-and-white",
    name: "Sacred Blessing — Blue & White",
    price: 65,
    categorySlug: "sympathy",
    image: photo("sacred-blessing-blue-and-white"),
    description:
      "A blue and white arrangement that includes its base, arranged with care for the service.",
    badge: "Sympathy",
    funeralType: "casket-sprays",
    stems: "Blue and white blooms",
    rating: 5,
    reviews: 4,
    variants: [
      {
        id: "deluxe",
        name: "Deluxe",
        price: 65,
        description: "12 blue and white blooms. Base included.",
      },
      {
        id: "premium",
        name: "Premium",
        price: 75,
        description: "15 blue and white blooms. Base included.",
      },
    ],
  },
  {
    slug: "heartfelt-tribute-floor-basket-bright",
    name: "Heartfelt Tribute Floor Basket — Bright",
    price: 175,
    categorySlug: "sympathy",
    image: photo("heartfelt-tribute-floor-basket-bright"),
    description:
      "A bright floor basket of mixed garden blooms, set at the casket or graveside. Basket included.",
    badge: "Sympathy",
    funeralType: "baskets-and-sheaves",
    stems: "Mixed garden blooms",
    rating: 5,
    reviews: 5,
    variants: [
      {
        id: "deluxe",
        name: "Deluxe",
        price: 175,
        description: "30 mixed garden blooms in a floor basket.",
      },
      {
        id: "premium",
        name: "Premium",
        price: 195,
        description: "40 mixed garden blooms in a fuller floor basket.",
      },
    ],
  },
  {
    slug: "heartfelt-sympathies-white-standing-basket",
    name: "Heartfelt Sympathies White Standing Basket",
    price: 155,
    categorySlug: "sympathy",
    image: photo("heartfelt-sympathies-white-standing-basket"),
    description:
      "A tall white standing basket on an easel, full and dignified for the service.",
    badge: "Sympathy",
    funeralType: "standing-baskets",
    stems: "White mixed blooms",
    rating: 5,
    reviews: 5,
    variants: [
      {
        id: "deluxe",
        name: "Deluxe",
        price: 155,
        description: "30 to 35 white blooms in a standing basket.",
      },
      {
        id: "premium",
        name: "Premium",
        price: 195,
        description: "40 to 45 white blooms in a fuller standing basket.",
      },
    ],
  },
  {
    slug: "heartfelt-sympathies-blue-and-white-standing-basket",
    name: "Heartfelt Sympathies Blue & White Funeral Standing Basket",
    price: 165,
    categorySlug: "sympathy",
    image: photo("heartfelt-sympathies-blue-and-white-standing-basket"),
    description:
      "A standing basket in blue and white, arranged on an easel for the chapel or graveside. Basket included.",
    badge: "Sympathy",
    funeralType: "standing-baskets",
    stems: "Blue and white blooms",
    rating: 5,
    reviews: 4,
    variants: [
      {
        id: "deluxe",
        name: "Deluxe",
        price: 165,
        description: "30 blue and white blooms in a standing basket.",
      },
      {
        id: "premium",
        name: "Premium",
        price: 185,
        description: "40 blue and white blooms in a fuller standing basket.",
      },
    ],
  },
  {
    slug: "heartfelt-sympathies-lavender-and-white-standing-basket",
    name: "Heartfelt Sympathies Lavender & White Standing Basket",
    price: 165,
    categorySlug: "sympathy",
    image: photo("heartfelt-sympathies-lavender-and-white-standing-basket"),
    description:
      "A lavender and white standing basket, gentle in color and generous in shape. Basket included.",
    badge: "Sympathy",
    funeralType: "standing-baskets",
    stems: "Lavender and white blooms",
    rating: 5,
    reviews: 4,
    variants: [
      {
        id: "deluxe",
        name: "Deluxe",
        price: 165,
        description: "30 lavender and white blooms in a standing basket.",
      },
      {
        id: "premium",
        name: "Premium",
        price: 185,
        description: "40 lavender and white blooms in a fuller standing basket.",
      },
    ],
  },
  {
    slug: "heartfelt-sympathies-standing-basket",
    name: "Heartfelt Sympathies Standing Basket",
    price: 165,
    categorySlug: "sympathy",
    image: photo("heartfelt-sympathies-standing-basket"),
    description:
      "A standing sympathy basket of mixed blooms, arranged on an easel for the service. Basket included.",
    badge: "Sympathy",
    funeralType: "standing-baskets",
    stems: "Mixed blooms",
    rating: 5,
    reviews: 4,
    variants: [
      {
        id: "deluxe",
        name: "Deluxe",
        price: 165,
        description: "30 mixed blooms in a standing basket.",
      },
      {
        id: "premium",
        name: "Premium",
        price: 185,
        description: "40 mixed blooms in a fuller standing basket.",
      },
    ],
  },
  {
    slug: "pink-and-white-funeral-standing-spray",
    name: "Pink & White Funeral Standing Spray",
    price: 140,
    categorySlug: "sympathy",
    image: photo("pink-and-white-funeral-standing-spray"),
    description:
      "A standing spray in soft pink and white, arranged on an easel to read from across the room.",
    badge: "Sympathy",
    funeralType: "standing-sprays",
    stems: "Pink and white blooms",
    rating: 5,
    reviews: 4,
    variants: [
      {
        id: "deluxe",
        name: "Deluxe",
        price: 140,
        description: "25 to 28 pink and white blooms, set on an easel.",
      },
      {
        id: "premium",
        name: "Premium",
        price: 160,
        description: "32 to 35 pink and white blooms, set on an easel.",
      },
    ],
    addOns: standAddOn,
  },
  {
    slug: "red-rose-and-lily-floor-basket",
    name: "Red Rose & Lily Floor Basket",
    price: 95,
    categorySlug: "sympathy",
    image: photo("red-rose-and-lily-floor-basket"),
    description:
      "A floor basket of red roses and lilies, set at the casket or graveside. Base included.",
    badge: "Sympathy",
    funeralType: "baskets-and-sheaves",
    stems: "Red roses and lilies",
    rating: 5,
    reviews: 4,
    variants: [
      {
        id: "deluxe",
        name: "Deluxe",
        price: 95,
        description: "18 to 20 red roses and lilies, base included.",
      },
      {
        id: "premium",
        name: "Premium",
        price: 115,
        description: "22 to 25 red roses and lilies, base included.",
      },
    ],
  },
  {
    slug: "white-life-spray",
    name: "White Life Spray",
    price: 180,
    categorySlug: "wedding",
    image: photo("white-life-spray"),
    description:
      "A generous standing spray in white hydrangea, roses and lisianthus for the ceremony aisle or reception entry.",
    badge: "Wedding",
    rating: 5,
    reviews: 9,
  },
  {
    slug: "solitaire-white-rose",
    name: "Solitaire White Rose",
    price: 30,
    categorySlug: "wedding",
    image: photo("solitaire-white-rose"),
    description:
      "A single white rose boutonniere, the classic groom's flower, finished with a soft collar of greens.",
    badge: "Bridal",
    stems: "Single rose",
    rating: 5,
    reviews: 6,
  },
  {
    slug: "pure-blossom-bouquet",
    name: "Pure Blossom Bouquet",
    price: 150,
    categorySlug: "wedding",
    image: photo("pure-blossom-bouquet"),
    description:
      "The bridal bouquet — 35 hand-tied blooms with a silk-wrapped handle. Choose white or red.",
    badge: "Bridal",
    stems: "35 flowers",
    rating: 5,
    reviews: 14,
    variants: [
      {
        id: "white",
        name: "White",
        price: 150,
        description: "35 white blooms (roses, ranunculus and soft greenery).",
        image: photo("pure-blossom-bouquet"),
      },
      {
        id: "red",
        name: "Red",
        price: 150,
        description: "35 red blooms, hand-tied with a silk-wrapped handle.",
        image: photo("pure-blossom-bouquet"),
      },
    ],
  },
  {
    slug: "majestic-white-centerpiece",
    name: "Majestic White Centerpiece",
    price: 185,
    categorySlug: "wedding",
    image: photo("majestic-white-centerpiece"),
    description:
      "A full, low white centerpiece designed to sit between guests without blocking the view across the table.",
    rating: 4.9,
    reviews: 11,
  },
  {
    slug: "imperial-white-column",
    name: "Imperial White Column",
    price: 150,
    categorySlug: "wedding",
    image: photo("imperial-white-column"),
    description:
      "A tall column of white flowers for ceremony pedestals, church entries and head tables. Choose the arrangement on its own or with its base.",
    badge: "Ceremony",
    stems: "Per column",
    rating: 5,
    reviews: 8,
    variants: [
      {
        id: "arrangement-only",
        name: "Arrangement only",
        price: 150,
        description: "The tall white floral arrangement on its own.",
      },
      {
        id: "arrangement-and-base",
        name: "Arrangement + base",
        price: 180,
        description: "The tall white floral arrangement with its base included.",
      },
    ],
  },
  {
    slug: "grand-opening-stand",
    name: "Grand Opening Stand",
    price: 225,
    categorySlug: "events",
    addOns: giftAddOns,
    image: img("photo-1464366400600-7168b8af9bc3"),
    description:
      "A two-sided rotating pedestal arrangement for openings, ribbon cuttings and lobby displays.",
    rating: 5,
    reviews: 23,
  },
  {
    slug: "corporate-lobby-refresh",
    name: "Corporate Lobby Refresh",
    price: 165,
    categorySlug: "events",
    addOns: giftAddOns,
    image: img("photo-1508610048659-a06b669e3321"),
    description:
      "A low, fragrant arrangement under four inches tall so conversation stays clear.",
    rating: 4.7,
    reviews: 41,
  },
  {
    slug: "conference-table-runner",
    name: "Conference Table Runner",
    price: 195,
    categorySlug: "events",
    addOns: giftAddOns,
    image: img("photo-1502910415892-57c11da1c360"),
    description:
      "A low, fragrant design for the head table that stays out of sightlines across a long room.",
    badge: "Corporate",
    rating: 4.8,
    reviews: 27,
  },
  {
    slug: "white-baptism-posy",
    name: "White Baptism Posy",
    price: 74,
    categorySlug: "baptisms",
    addOns: giftAddOns,
    image: photo("pure-blossom-bouquet"),
    description:
      "A soft white and ivory posy of rose spray and stock, sized to sit beside a small church pew.",
    rating: 4.9,
    reviews: 42,
  },
  {
    slug: "little-angel-bundle",
    name: "Little Angel Bundle",
    price: 86,
    categorySlug: "baptisms",
    addOns: giftAddOns,
    image: photo("solitaire-white-rose"),
    description:
      "Pastel rose spray with lavender and a keepsake ceramic keepsake box for the name and date.",
    badge: "Keepsake",
    rating: 4.9,
    reviews: 61,
  },
  {
    slug: "first-communion-white",
    name: "First Communion White",
    price: 96,
    categorySlug: "baptisms",
    addOns: giftAddOns,
    image: photo("majestic-white-centerpiece"),
    description:
      "A clean white arrangement of tulips, stock and greenery that photographs well in daylight.",
    rating: 4.8,
    reviews: 37,
  },
  {
    slug: "quinceanera-corona",
    name: "Quinceañera Coronation Set",
    price: 265,
    categorySlug: "quinceanera",
    addOns: giftAddOns,
    image: photo("ultimate-elegance-long-stem-pink-and-red-roses"),
    description:
      "A matching coronation tiara floral and bouquet set in fuchsia and gold, made to be kept.",
    badge: "Signature Set",
    rating: 5,
    reviews: 34,
  },
  {
    slug: "big-night-roses",
    name: "Big Night Roses",
    price: 145,
    categorySlug: "quinceanera",
    addOns: giftAddOns,
    image: photo("be-happy-bouquet-with-roses"),
    description:
      "Two dozen imported roses in the family's colors, wrapped and ready for the waltz.",
    stems: "24 roses",
    rating: 4.9,
    reviews: 58,
  },
  {
    slug: "waltz-floor-spray",
    name: "Waltz Floor Spray",
    price: 320,
    categorySlug: "quinceanera",
    addOns: giftAddOns,
    image: photo("dream-in-color-bouquet"),
    description:
      "A large floor-standing arrangement for the entrance, built to read from across the ballroom.",
    badge: "Premium",
    rating: 5,
    reviews: 19,
  },
];

export const productsBySlug: Record<string, Product> = Object.fromEntries(
  products.map((p) => [p.slug, p]),
);

export function productsFor(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function featuredProducts(limit = 8): Product[] {
  const badges = new Set(["Best Seller", "Premium", "Local Favorite", "Save $18"]);
  const sorted = [...products].sort((a, b) => (b.reviews ?? 0) - (a.reviews ?? 0));
  return sorted.filter((p) => p.badge && badges.has(p.badge)).slice(0, limit);
}

export function bestSellers(limit = 4): Product[] {
  return [...products]
    .sort((a, b) => (b.rating ?? 0) * (b.reviews ?? 0) - (a.rating ?? 0) * (a.reviews ?? 0))
    .slice(0, limit);
}
