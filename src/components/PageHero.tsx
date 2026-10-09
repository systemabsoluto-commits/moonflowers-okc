import { motion } from "framer-motion";

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-night-950 text-moon-50">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-night-950 via-night-950/92 to-night-950/55" />
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
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 text-4xl leading-tight font-semibold sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-moon-100/70 sm:text-lg">{copy}</p>
        </motion.div>
      </div>
    </section>
  );
}