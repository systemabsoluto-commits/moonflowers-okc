import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Check,
  Clock,
  MessageCircle,
  Phone,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { ProductGrid } from "@/components/ProductCard";
import FaqList from "@/components/FaqList";
import { funeralFaqs } from "@/data/funeral";
import { products } from "@/data/products";
import { site, telLink, waLink } from "@/data/site";

const funeralProducts = products.filter((p) => p.categorySlug === "sympathy");

const promise = [
  {
    icon: Truck,
    title: "Free delivery to any funeral home",
    body: "Every funeral home in the OKC metro. No delivery charge on sympathy orders, ever.",
  },
  {
    icon: Clock,
    title: "Same-day, even at short notice",
    body: "We hold white and ivory stems in the cooler so we can turn a service order around the same day.",
  },
  {
    icon: Check,
    title: "We confirm the details for you",
    body: "We call the funeral home to verify the service time and room before we leave the shop.",
  },
  {
    icon: ShieldCheck,
    title: "Ribbon and card included",
    body: "A sympathy ribbon on all casket and standing sprays, and we write the card by hand.",
  },
];

export default function SympathyPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-night-950 text-moon-50">
        <img
          src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-night-950 via-night-950/94 to-night-950/60" />
        <div
          className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-night-950 to-transparent"
          aria-hidden="true"
        />
        <div className="container-x relative py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="eyebrow">Sympathy & funeral flowers</p>
            <h1 className="mt-4 text-4xl leading-tight font-semibold sm:text-5xl lg:text-6xl">
              Arrangements that say what is hard to say
            </h1>
            <p className="mt-5 text-base leading-relaxed text-moon-100/70 sm:text-lg">
              Casket sprays, standing sprays, urn flowers and memorial tributes, built by hand and
              delivered to the funeral home for you. Call {site.phone} or message us below — someone
              at the shop answers.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink(
                  "Hi, I need funeral flowers. Here are the service details: funeral home, date, time and service type.",
                )}
                target="_blank"
                rel="noreferrer"
                className="btn-accent"
              >
                <MessageCircle className="h-4 w-4" />
                Send service details
              </a>
              <a href={telLink()} className="btn border border-moon-50/25 text-moon-50 hover:bg-moon-50/10">
                <Phone className="h-4 w-4" />
                {site.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {promise.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="card p-6"
            >
              <p.icon className="h-5 w-5 text-bloom-500" />
              <h2 className="mt-3 text-base font-semibold">{p.title}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-night-900/60">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">Ready to order</p>
            <h2 className="mt-3 text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">
              Sympathy arrangements
            </h2>
            <p className="mt-4 text-base leading-relaxed text-night-900/65">
              Prices shown are the starting point. Message us with the service details and we will
              confirm availability, the ribbon wording and the exact delivery time.
            </p>
          </div>
          <div className="mt-10">
            <ProductGrid products={funeralProducts} />
          </div>
        </div>
      </section>

      <section className="bg-moon-100 py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Give us the details</p>
            <h2 className="mt-3 text-3xl leading-tight font-semibold sm:text-4xl">
              Request a sympathy quote
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-night-900/60">
              The more detail you give us, the fewer calls we have to make. If you are not sure of
              something, leave it blank and we will confirm it with the funeral home.
            </p>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 rounded-2xl border border-leaf-500/30 bg-leaf-500/10 p-8"
              >
                <Check className="h-7 w-7 text-leaf-600" />
                <Check className="h-7 w-7 text-leaf-600" />
                <h3 className="mt-3 text-xl font-semibold">Request received</h3>
                <p className="mt-2 text-sm text-night-900/65">
We will confirm the details and the delivery time within one business hour. If the
                service is today, please call {site.phone}.
                <span className="mt-4 block rounded-xl border border-night-900/10 bg-white p-4 text-night-900/70">
                  When we confirm, we will send you a Zelle request for{" "}
                  <span className="font-semibold text-night-900">{site.zelle.display}</span>. Funeral
                  and sympathy orders are paid in full before we start making the arrangements.
                </span>
                </p>
                <button type="button" onClick={() => setSent(false)} className="btn-outline mt-6">
                  Send another
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="mt-8 grid gap-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-1.5">
                    <span className="text-sm font-medium">Your name</span>
                    <input required name="name" className="field" placeholder="Jordan Ellis" />
                  </label>
                  <label className="grid gap-1.5">
                    <span className="text-sm font-medium">Phone or email</span>
                    <input required name="contact" className="field" placeholder="405-555-0123" />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-1.5">
                    <span className="text-sm font-medium">Service type</span>
                    <select required name="service" className="field" defaultValue="">
                      <option value="" disabled>
                        Select one
                      </option>
                      <option>Burial / casket</option>
                      <option>Visitation</option>
                      <option>Cremation</option>
                      <option>Columbarium / interment</option>
                      <option>Memorial for the home</option>
                      <option>Not sure yet</option>
                    </select>
                  </label>
                  <label className="grid gap-1.5">
                    <span className="text-sm font-medium">Service date</span>
                    <input required name="date" type="date" className="field" />
                  </label>
                </div>
                <label className="grid gap-1.5">
                  <span className="text-sm font-medium">Funeral home or venue</span>
                  <input
                    required
                    name="venue"
                    className="field"
                    placeholder="Name, address and city"
                  />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-sm font-medium">Service time (if known)</span>
                  <input name="time" className="field" placeholder="2:00 PM" />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-sm font-medium">Arrangement type and colors</span>
                  <textarea
                    required
                    name="request"
                    rows={4}
                    className="field resize-y"
                    placeholder="Casket spray in white and ivory, ribbon reading 'Beloved Father'."
                  />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-sm font-medium">Card message and ribbon wording</span>
                  <input
                    name="wording"
                    className="field"
                    placeholder="We write it by hand, exactly as you type it here."
                  />
                </label>
                <button type="submit" className="btn-primary mt-2 justify-self-start">
                  Request quote
                </button>
              </form>
            )}
          </div>

          <div>
            <p className="eyebrow">Sympathy FAQ</p>
            <div className="mt-4">
              <FaqList items={funeralFaqs} />
            </div>
            <p className="mt-6 text-sm text-night-900/60">
              More questions on the{" "}
              <Link to="/faq" className="font-semibold underline underline-offset-4">
                main FAQ page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
