export const site = {
  name: "The Bloom House",
  shortName: "The Bloom House",
  tagline: "Flowers that bloom at the right moment.",
  phone: "(405) 571-1233",
  phoneRaw: "4055711233",
  whatsapp: "14055711233",
  email: "hello@bloomhouseokc.com",
  address: {
    line1: "2620 S Meridian Ave, Suite B",
    city: "Oklahoma City",
    state: "OK",
    zip: "73108",
  },
  hours: [
    { days: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
    { days: "Saturday", time: "9:00 AM – 5:00 PM" },
    { days: "Sunday", time: "10:00 AM – 2:00 PM" },
  ],
  social: {
    instagram: "https://instagram.com/bloomhouseokc",
    facebook: "https://facebook.com/bloomhouseokc",
    tiktok: "https://tiktok.com/@bloomhouseokc",
  },
  mapEmbed:
    "https://www.google.com/maps?q=2620+S+Meridian+Ave+Suite+B+Oklahoma+City+OK+73108&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=2620+S+Meridian+Ave+Suite+B+Oklahoma+City+OK+73108",
  freeDeliveryThreshold: 75,
  deliveryFee: 9.99,
  zelle: {
    registered: "4055711233",
    display: "(405) 571-1233",
    name: "The Bloom House",
  },
  depositRequiredFor: ["wedding", "quinceanera", "events"],
  depositPercent: 50,
  depositMinimum: 100,
  deliveryAreas: [
    "Oklahoma City",
    "Edmond",
    "Moore",
    "Norman",
    "Yukon",
    "Del City",
    "Midwest City",
    "The Village",
    "Bethany",
    "Choctaw",
    "Guthrie",
    "Mustang",
  ],
} as const;

export function waLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function telLink(): string {
  return `tel:+${site.phoneRaw}`;
}
