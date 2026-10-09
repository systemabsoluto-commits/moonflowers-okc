import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/data/faqs";

export type Faq = { q: string; a: string };

export default function FaqList({
  items,
  limit,
}: {
  items?: Faq[];
  limit?: number;
}) {
  const [open, setOpen] = useState<string | null>(null);
  const all = items ?? faqs;
  const shown = limit ? all.slice(0, limit) : all;

  return (
    <div className="divide-y divide-night-900/10 border-y border-night-900/10">
      {shown.map((f) => {
        const isOpen = open === f.q;
        return (
          <div key={f.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : f.q)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="text-base font-medium sm:text-lg">{f.q}</span>
              <Plus
                className={`h-5 w-5 shrink-0 text-night-900/50 transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-5 text-sm leading-relaxed text-night-900/65">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
