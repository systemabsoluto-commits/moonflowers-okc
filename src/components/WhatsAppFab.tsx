import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { site, waLink } from "@/data/site";
export default function WhatsAppFab() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="w-72 overflow-hidden rounded-2xl border border-night-900/10 bg-white shadow-2xl"
          >
            <div className="bg-night-950 px-4 py-3 text-moon-50">
              <p className="text-sm font-semibold">{site.name}</p>
              <p className="text-xs text-moon-100/60">Typically replies in a few minutes</p>
            </div>
            <div className="p-3">
              <QuickReply label="Same-day flowers" msg="Hi! Do you have same-day flower delivery available today?" />
              <QuickReply label="Sympathy / funeral" msg="Hi, I need sympathy flowers delivered to a funeral home. Can you help?" />
              <QuickReply label="Wedding quote" msg="Hi! I'd like a quote for my wedding. Here are my details:" />
              <QuickReply label="Subscription" msg="Hi, I'd like to start a flower subscription." />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-2">
        {open && (
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            className="rounded-full bg-white p-2.5 text-night-900 shadow-lg ring-1 ring-night-900/10 transition-colors hover:bg-moon-100"
          >
            <X className="h-4 w-4" />
          </button>
        )}
        <motion.button
          type="button"
          onClick={() => setOpen((v) => !v)}
          initial={false}
          animate={{ opacity: visible || open ? 1 : 0, scale: visible || open ? 1 : 0.85 }}
          transition={{ duration: 0.25 }}
          className="pointer-events-auto flex items-center gap-2.5 rounded-full bg-leaf-600 py-3.5 pr-5 pl-4 text-white shadow-xl transition-colors hover:bg-leaf-500"
          aria-label={`Chat with ${site.name} on WhatsApp`}
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-sm font-semibold">Chat with us</span>
        </motion.button>
      </div>
    </div>
  );
}

function QuickReply({ label, msg }: { label: string; msg: string }) {
  return (
    <a
      href={waLink(msg)}
      target="_blank"
      rel="noreferrer"
      className="block rounded-xl border border-night-900/10 px-3 py-2.5 text-sm transition-colors hover:border-night-900/25 hover:bg-moon-50"
    >
      {label}
    </a>
  );
}
