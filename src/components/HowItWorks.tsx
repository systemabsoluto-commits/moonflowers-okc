import { motion } from "framer-motion";
import { Clock3, Flower2, HandHeart, MessageCircle } from "lucide-react";
import { site } from "@/data/site";

const steps = [
  {
    icon: Flower2,
    title: "Pick your occasion",
    body: "Choose the moment you are ordering for. Every price on the site is the price you pay.",
  },
  {
    icon: MessageCircle,
    title: "Message us on WhatsApp",
    body: `Send us the arrangement and the date. Add the card wording if you want one, and we will confirm availability.`,
  },
  {
    icon: Clock3,
    title: "Pay by Zelle",
    body: `Once we confirm, pay to ${site.zelle.display} on Zelle. Cash also works at pickup or on delivery.`,
  },
  {
    icon: HandHeart,
    title: "We deliver",
    body: "Our driver sends you a photo at the door. If we cannot deliver, we reschedule free of charge.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-3 text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">
            Four steps, no phone tag
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="relative"
            >
              <span className="font-display absolute -top-2 left-0 text-5xl text-bloom-500/25">
                0{i + 1}
              </span>
              <s.icon className="mt-6 h-7 w-7 text-night-900" />
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-night-900/60">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
