import { site } from "./site";

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Do you deliver same day?",
    a: "Yes. Orders placed before 1:00 PM Monday through Saturday are delivered the same day across the OKC metro. Orders after the cutoff, on Sundays or on major holidays go out the next available day.",
  },
  {
    q: "What areas do you deliver to?",
    a: "Oklahoma City, Edmond, Moore, Norman, Yukon, Del City, Midwest City, The Village, Bethany, Choctaw, Guthrie and Mustang. If you are just outside the list, message us on WhatsApp and we will see what we can do.",
  },
  {
    q: "Is there a delivery fee?",
    a: `Delivery is $${site.deliveryFee.toFixed(2)} inside the OKC metro and free on orders over $${site.freeDeliveryThreshold}. Sympathy and wedding orders are always delivered free.`,
  },
  {
    q: "Can I pick up my order?",
    a: `Absolutely. Tell us in your message that you will pick up and we will text you when the arrangement is ready at ${site.address.line1}, ${site.address.city}.`,
  },
  {
    q: "Do you write the card for me?",
    a: "Yes, and we write it by hand. Send us the exact wording in your WhatsApp message and we will transcribe it, spelling mistakes included.",
  },
  {
    q: "What if the recipient is not home?",
    a: "Our drivers take a photo at the door and text it to you. If we cannot deliver, we bring the arrangement back and contact you to reschedule at no extra charge.",
  },
  {
    q: "How long do the flowers last?",
    a: "Cut arrangements run 7 to 10 days with fresh water and a daily top-off. Orchids and potted plants last weeks to months.",
  },
  {
    q: "Do you do weddings and corporate events?",
    a: "We do. Request a consultation and we will build a proposal with a full flower list, timeline and delivery plan.",
  },
  {
    q: "How do I place an order?",
    a: "Message us on WhatsApp or by email with the arrangement you want and the date. We confirm availability and the final price, then you pay by Zelle. There is no cart on this site and we do not take payment online.",
  },
  {
    q: "What payment methods do you accept?",
    a: `Zelle (to ${site.zelle.display} or ${site.zelle.registered}@zelle.com) and cash at pickup or on delivery. We do not take credit cards or online payments.`,
  },
  {
    q: "Do I need to pay a deposit?",
    a: `Weddings, quinceañeras and events are reserved with a ${site.depositPercent}% deposit, because we buy the stems and lock the date. Everything else is paid in full by Zelle before we start making it.`,
  },
  ];
