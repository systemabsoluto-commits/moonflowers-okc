import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Wallet,
} from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import { site, telLink, waLink } from "@/data/site";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="relative overflow-hidden bg-night-950 py-16 text-moon-50 sm:py-24">
        <div
          className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-bloom-500/[0.09] blur-3xl"
          aria-hidden="true"
        />
        <div className="container-x relative">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-tight font-semibold sm:text-5xl lg:text-6xl">
            Talk to a florist, not a bot
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-moon-100/70 sm:text-lg">
            Call the shop, message on WhatsApp, or send the form below. For anything time-sensitive,
            WhatsApp is the fastest way to reach us.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            <a
              href={telLink()}
              className="rounded-2xl border border-white/10 p-6 transition-colors hover:border-bloom-400/40 hover:bg-white/5"
            >
              <Phone className="h-5 w-5 text-bloom-400" />
              <p className="mt-3 text-sm text-moon-100/60">Call the shop</p>
              <p className="mt-1 font-semibold">{site.phone}</p>
            </a>
            <a
              href={waLink(`Hi ${site.name}, I have a question.`)}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 p-6 transition-colors hover:border-bloom-400/40 hover:bg-white/5"
            >
              <MessageCircle className="h-5 w-5 text-bloom-400" />
              <p className="mt-3 text-sm text-moon-100/60">WhatsApp</p>
              <p className="mt-1 font-semibold">Fastest reply</p>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="rounded-2xl border border-white/10 p-6 transition-colors hover:border-bloom-400/40 hover:bg-white/5"
            >
              <Mail className="h-5 w-5 text-bloom-400" />
              <p className="mt-3 text-sm text-moon-100/60">Email</p>
              <p className="mt-1 font-semibold break-all">{site.email}</p>
            </a>
            <div className="rounded-2xl border border-white/10 p-6">
              <Wallet className="h-5 w-5 text-bloom-400" />
              <p className="mt-3 text-sm text-moon-100/60">Paying with</p>
              <p className="mt-1 font-semibold">
                Zelle {site.zelle.display}{" "}
                <span className="font-normal text-moon-100/50">or cash</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Send us the details</h2>
            <p className="mt-3 text-sm leading-relaxed text-night-900/60">
              For events, weddings and large orders this is the fastest route. For single
              deliveries, WhatsApp gets you a faster answer.
            </p>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 rounded-2xl border border-leaf-500/30 bg-leaf-500/10 p-8"
              >
                <Check className="h-7 w-7 text-leaf-600" />
                <h3 className="mt-3 text-xl font-semibold">Message received</h3>
                <p className="mt-2 text-sm text-night-900/65">
                  Thanks. We reply to every request within one business hour. If it is urgent, call
                  us at {site.phone}.
                </p>
                <p className="mt-4 rounded-xl border border-night-900/10 bg-white p-4 text-sm leading-relaxed text-night-900/70">
                  Nothing is charged now. Once we reply and you confirm the order, we will send you a
                  Zelle request to{" "}
                  <span className="font-semibold text-night-900">{site.zelle.display}</span>.
                </p>
                <button type="button" onClick={() => setSent(false)} className="btn-outline mt-6">
                  Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-1.5">
                    <span className="text-sm font-medium">Your name</span>
                    <input required name="name" className="field" placeholder="Jordan Ellis" />
                  </label>
                  <label className="grid gap-1.5">
                    <span className="text-sm font-medium">Phone or email</span>
                    <input
                      required
                      name="contact"
                      className="field"
                      placeholder="405-555-0123"
                    />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-1.5">
                    <span className="text-sm font-medium">Occasion</span>
                    <select required name="occasion" className="field" defaultValue="">
                      <option value="" disabled>
                        Select one
                      </option>
                      <option>Wedding</option>
                      <option>Anniversary</option>
                      <option>Get well</option>
                      <option>Congratulations</option>
                      <option>Funeral / sympathy</option>
                      <option>Baptism</option>
                      <option>Quinceañera</option>
                      <option>Event / corporate</option>
                      <option>Something else</option>
                    </select>
                  </label>
                  <label className="grid gap-1.5">
                    <span className="text-sm font-medium">Needed by</span>
                    <input required name="date" type="date" className="field" />
                  </label>
                </div>
                <label className="grid gap-1.5">
                  <span className="text-sm font-medium">Delivery address</span>
                  <input
                    required
                    name="address"
                    className="field"
                    placeholder="2620 S Meridian Ave, Suite B, Oklahoma City, OK 73108"
                  />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-sm font-medium">Tell us what you have in mind</span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="field resize-y"
                    placeholder="Colors they like, budget, the message for the card, anything at all."
                  />
                </label>
                <button type="submit" className="btn-primary mt-2 justify-self-start">
                  Send message
                </button>
              </form>
            )}
          </div>

          <div className="grid gap-6">
            <div className="card overflow-hidden">
              <iframe
                title={`${site.name} location map`}
                src={site.mapEmbed}
                className="h-72 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="p-6">
                <MapPin className="h-5 w-5 text-bloom-500" />
                <p className="mt-3 font-semibold">{site.name}</p>
                <p className="mt-1 text-sm text-night-900/65">
                  {site.address.line1}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </p>
                <a
                  href={site.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block text-sm font-semibold underline decoration-bloom-500 decoration-2 underline-offset-4"
                >
                  Get directions
                </a>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-bloom-500" />
                <p className="font-semibold">Store hours</p>
              </div>
              <dl className="mt-4 space-y-2.5 text-sm">
                {site.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4">
                    <dt className="text-night-900/60">{h.days}</dt>
                    <dd className="font-medium">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="card p-6">
              <p className="font-semibold">We deliver to</p>
              <p className="mt-3 text-sm leading-relaxed text-night-900/60">
                {site.deliveryAreas.join(" · ")}
              </p>
            </div>

            <div className="card p-6 sm:col-span-2">
              <div className="flex items-center gap-2">
                <Wallet className="h-5 w-5 text-bloom-500" />
                <p className="font-semibold">How payment works</p>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-night-900/60">
                We do not take payment on this site. Message us on WhatsApp, we confirm the
                arrangement and the date, and then you pay by Zelle. Cash also works if you pick up or
                if we deliver to you.
              </p>

              <div className="mt-5 rounded-xl border border-night-900/10 bg-moon-100 p-5">
                <p className="text-xs font-semibold tracking-[0.18em] text-night-900/50 uppercase">
                  Zelle
                </p>
                <p className="mt-2 font-display text-2xl leading-tight font-semibold">
                  {site.zelle.display}
                </p>
                <p className="mt-1 text-sm text-night-900/55">
                  Registered to {site.zelle.name}. In the Zelle app, search by that number — or send to{" "}
                  <span className="font-medium text-night-900">{site.zelle.registered}@zelle.com</span>
                  .
                </p>
              </div>

              <ul className="mt-5 space-y-3 text-sm">
                {[
                  `Weddings, quinceañeras and events: ${site.depositPercent}% deposit to reserve the date. The balance is paid before or on delivery.`,
                  "Everything else: paid in full by Zelle before we start making it.",
                  `Delivery is $${site.deliveryFee.toFixed(2)} in the metro and free over $${site.freeDeliveryThreshold}. Sympathy and wedding delivery is always free.`,
                ].map((line) => (
                  <li key={line} className="flex gap-2.5 text-night-900/65">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-bloom-500" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Cutting it close?"
        copy="Text us. If we can make it happen today, we will say yes. If we cannot, we will tell you who can."
      />
    </>
  );
}
