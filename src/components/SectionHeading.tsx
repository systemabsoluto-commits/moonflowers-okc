import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/data/occasions";

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  action,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  action?: { to: string; label: string };
}) {
  return (
    <div
      className={`flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between ${
        align === "center" ? "sm:flex-col sm:items-center sm:text-center" : ""
      }`}
    >
      <div className={align === "center" ? "max-w-2xl" : "max-w-2xl"}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="mt-3 text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">{title}</h2>
        {copy && <p className="mt-4 text-base leading-relaxed text-night-900/65">{copy}</p>}
      </div>
      {action && (
        <Link
          to={action.to}
          className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-night-900 underline decoration-bloom-500 decoration-2 underline-offset-4 hover:decoration-night-900"
        >
          {action.label}
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}

export function CategoryCard({
  category,
  to,
  index = 0,
}: {
  category: Category;
  to: string;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.3), ease: "easeOut" }}
    >
      <Link to={to} className="card group block">
        <div className="relative aspect-4/3 overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night-950/80 via-night-950/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <h3 className="text-xl font-semibold text-moon-50 sm:text-2xl">{category.name}</h3>
            <p className="mt-1 text-sm text-moon-100/75">{category.blurb}</p>
          </div>
          <span className="absolute right-4 bottom-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-moon-50 text-night-900 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
