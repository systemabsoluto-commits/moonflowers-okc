import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Box, Clock, Heart, MessageCircle, Truck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ProductGrid } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import { productsFor } from "@/data/products";
import { site, waLink } from "@/data/site";

const boxImg = (name: string) => `${import.meta.env.BASE_URL}products/box/${name}.png`;

const boxFlowerProducts = productsFor("box-flowers");

const whyBox = [
  {
    icon: Box,
    title: "Made to sit, not shorten",
    body: "Every box is arranged low and full so the flowers open their first days on the table, not in transit.",
  },
  {
    icon: Truck,
    title: "Delivered safe across the metro",
    body: "The box keeps everything snug on the drive, so it arrives at the door exactly as it left the shop.",
  },
  {
    icon: Heart,
    title: "Card and gifts included",
    body: "A handwritten note is standard, and you can add a teddy bear or a smiley balloon before checkout.",
  },
  {
    icon: Clock,
    title: "Same-day before 1:00 PM",
    body: "Message us before 1:00 PM and we will get your box out the same afternoon across the OKC metro.",
  },
];

export default function BoxFlowersPage() {
  return (
    <>
      <PageHero
        eyebrow="Box flowers"
        title="Flowers that arrive like a gift"
        copy="Cut low, arranged full, and sent in a keepsake box that looks as good on the table as the blooms inside. Box flowers are our most reliable way to get a same-day gift across town in one piece."
        image={boxImg("Bloom rose dome")}
      />

      <section className="py-14 sm:py-16">
        <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyBox.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="card p-6"
            >
              <f.icon className="h-5 w-5 text-bloom-500" />
              <h2 className="mt-3 text-base font-semibold">{f.title}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-night-900/60">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Ready to order"
            title="The box flower collection"
            copy="Prices shown are the starting point. Message us with the date and the color story and we will confirm availability and the exact delivery time."
          />
          <div className="mt-10">
            <ProductGrid products={boxFlowerProducts} />
          </div>
        </div>
      </section>

      <section className="bg-night-950 py-16 text-moon-50 sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Not sure which box?</p>
            <h2 className="mt-3 text-3xl leading-tight font-semibold sm:text-4xl">
              Tell us who it is for and when it needs to arrive
            </h2>
            <p className="mt-4 text-base leading-relaxed text-moon-100/70">
              We will recommend the box, the colors and the size from the shop floor. Call{" "}
              {site.phone} or message us — someone at the shop answers.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink(
                  "Hi! I'm thinking of sending a box of flowers. Can you help me pick one?",
                )}
                target="_blank"
                rel="noreferrer"
                className="btn-accent"
              >
                <MessageCircle className="h-4 w-4" />
                Ask on WhatsApp
              </a>
              <Link to="/occasions" className="btn border border-moon-50/25 text-moon-50 hover:bg-moon-50/10">
                Browse all occasions
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-night-900 p-6 sm:p-8">
            <p className="text-sm text-moon-100/60">From our cooler to your door</p>
            <div className="mt-4 space-y-4">
              {[
                ["Morning order", "Same-afternoon delivery on orders placed before 1:00 PM."],
                ["Keepsake box", "The box is yours to keep — great for the photos first, the table after."],
                ["Handwritten note", "We write the card by hand, exactly as you type it here."],
              ].map(([k, v]) => (
                <div key={k} className="rounded-2xl border border-white/10 p-4">
                  <p className="font-semibold text-moon-50">{k}</p>
                  <p className="mt-1 text-sm text-moon-100/60">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner title="Need a box today?" copy="Message us before 1:00 PM and we will confirm availability in minutes. Your flowers, boxed and on their way across Oklahoma City." />
    </>
  );
}