import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { site, waLink } from "@/data/site";

export default function CtaBanner({
  title = "Need it today?",
  copy = "Message us and we will confirm availability in minutes. Same-day delivery across the OKC metro on orders placed before 1:00 PM.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="bg-night-950 py-16 sm:py-20">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-night-900 px-6 py-12 text-center sm:px-12"
        >
          <div
            className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-bloom-500/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="text-3xl font-semibold text-moon-50 sm:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-moon-100/70">
              {copy}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={waLink(`Hi ${site.name}, I'd like to place an order.`)}
                target="_blank"
                rel="noreferrer"
                className="btn-accent"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
              <a
                href={`tel:+${site.phoneRaw}`}
                className="btn border border-moon-50/25 text-moon-50 hover:bg-moon-50/10"
              >
                Call {site.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
