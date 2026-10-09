import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-moon-100 py-16 sm:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">4.9 / 5 from 600+ reviews</p>
          <h2 className="mt-3 text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">
            What OKC says about us
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: Math.min(i * 0.06, 0.3) }}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-[0_1px_2px_rgba(13,10,23,0.04)]"
            >
              <Quote className="h-6 w-6 text-bloom-400" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-night-900/75">
                {t.text}
              </blockquote>
              <figcaption className="mt-5 flex items-center justify-between border-t border-night-900/8 pt-4">
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-night-900/50">{t.neighborhood}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-bloom-500 text-bloom-500" />
                  ))}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
