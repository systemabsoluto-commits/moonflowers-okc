import { motion } from "framer-motion";
import { Leaf, Scissors, Users } from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";

const values = [
  {
    icon: Scissors,
    title: "We design every arrangement",
    body: "Nothing arrives pre-made from a distributor. Every bouquet is built by hand in our shop on South Meridian, which is why we can match a color you saw on Instagram.",
  },
  {
    icon: Users,
    title: "We run our own delivery",
    body: "Our drivers work for us. They ring the bell, wait when needed, and send you a photo at the door so you are never guessing.",
  },
  {
    icon: Leaf,
    title: "We buy from growers we know",
    body: "We work directly with regional growers and market partners, which keeps prices fair and stems fresher than anything that sits in a warehouse.",
  },
];

const timeline = [
  { year: "2019", text: "Opened as a two-person shop on South Meridian." },
  { year: "2021", text: "Added our own delivery fleet across the OKC metro." },
  { year: "2023", text: "Launched subscriptions. Now 400+ local households on the list." },
  { year: "2026", text: "Online ordering, same-day before 1 PM, pickup at the shop." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A neighborhood florist that takes delivery seriously"
        copy={`${site.name} has been wrapping flowers on South Meridian since 2019. Same shop, same team, same people answering the phone.`}
        image="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-3 text-3xl leading-tight font-semibold sm:text-4xl">
              We are more than pretty flowers
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-night-900/65">
              <p>
                We started with one cooler, one van and a stubborn idea: that a local florist could
                compete on quality and reliability without treating people like a checkout line. Most
                of our orders are for people who are not buying flowers for themselves, which means
                the bar is not "nice." It is "did we get it right."
              </p>
              <p>
                That is why we answer WhatsApp within minutes, why we call to confirm the funeral home
                before a sympathy delivery, and why we hand-transcribe every card. It is unglamorous
                work, and it is the entire business.
              </p>
              <p>
                We do not do weekly promotions. The prices on this site are the prices at the counter.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="card p-6"
              >
                <v.icon className="h-6 w-6 text-bloom-500" />
                <h3 className="mt-3 text-lg font-semibold">{v.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-night-900/60">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-night-950 py-16 text-moon-50 sm:py-24">
        <div className="container-x">
          <p className="eyebrow">How we got here</p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((t) => (
              <div key={t.year} className="border-l border-white/15 pl-5">
                <p className="font-display text-3xl font-semibold text-bloom-400">{t.year}</p>
                <p className="mt-2 text-sm leading-relaxed text-moon-100/65">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <div className="rounded-3xl border border-night-900/10 bg-moon-100 p-8 sm:p-12">
            <h2 className="max-w-2xl text-3xl leading-tight font-semibold sm:text-4xl">
              Come see the cooler before you order
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-night-900/65">
              We are at {site.address.line1}, {site.address.city}, {site.address.state}{" "}
              {site.address.zip}. Walk in any time we are open, or call {site.phone} and we will set
              something aside.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
