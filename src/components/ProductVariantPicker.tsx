import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, MessageCircle, Store, Truck, X } from "lucide-react";
import type { Product } from "@/data/products";
import { site, waLink } from "@/data/site";

type Fulfillment = "delivery" | "pickup";

export default function ProductOrderModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const [selectedId, setSelectedId] = useState(product.variants?.[0]?.id ?? "");
  const [fulfillment, setFulfillment] = useState<Fulfillment>("delivery");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const variants = product.variants ?? [];
  const addOns = product.addOns ?? [];
  const selected = variants.find((v) => v.id === selectedId);
  const chosenAddOns = addOns.filter((a) => selectedAddOns.includes(a.id));
  const addOnsTotal = chosenAddOns.reduce((sum, a) => sum + a.price, 0);
  const basePrice = selected?.price ?? product.price;
  const price = basePrice + addOnsTotal;
  const variantLabel = selected ? ` — ${selected.name}` : "";
  const addOnsLabel = chosenAddOns.length
    ? ` + ${chosenAddOns.map((a) => a.name).join(" + ")}`
    : "";
  const displayImage = selected?.image ?? product.image;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const toggleAddOn = (id: string) =>
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );

  const fulfillmentLabel = fulfillment === "delivery" ? "delivery" : "pickup";
  const message = `Hi ${site.name}, I'd like to order "${product.name}"${variantLabel}${addOnsLabel} ($${price}) for ${fulfillmentLabel}. Is it available today?`;

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[70] flex items-end justify-center bg-night-950/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
        onClick={onClose}
      >
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`Order ${product.name}`}
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.98 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-moon-50 sm:rounded-3xl"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 z-10 rounded-full bg-white/90 p-2 text-night-900 shadow-lg transition-colors hover:bg-white"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="grid sm:grid-cols-[0.9fr_1.1fr]">
            <div className="relative h-56 sm:h-full">
              <img src={displayImage} alt={product.name} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-night-950/60 to-transparent sm:bg-gradient-to-r" />
              <div className="absolute bottom-4 left-4 sm:hidden">
                <p className="eyebrow text-bloom-400">{site.name}</p>
                <h2 className="mt-1 text-2xl font-semibold text-moon-50">{product.name}</h2>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="eyebrow hidden sm:block">{product.badge ?? "Place your order"}</p>
              <h2 className="mt-2 hidden text-3xl leading-tight font-semibold sm:block">
                {product.name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-night-900/60">{product.description}</p>

              {variants.length > 0 && (
                <div className="mt-6 grid gap-3" role="radiogroup" aria-label="Available sizes">
                  {variants.map((v) => {
                    const isActive = selectedId === v.id;
                    return (
                      <button
                        key={v.id}
                        type="button"
                        role="radio"
                        aria-checked={isActive}
                        onClick={() => setSelectedId(v.id)}
                        className={`flex items-center gap-4 rounded-2xl border-2 p-4 text-left transition-all ${
                          isActive
                            ? "border-bloom-500 bg-bloom-500/5"
                            : "border-night-900/10 bg-white hover:border-night-900/25"
                        }`}
                      >
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                            isActive
                              ? "border-bloom-500 bg-bloom-500 text-moon-50"
                              : "border-night-900/20"
                          }`}
                        >
                          {isActive && <Check className="h-3.5 w-3.5" />}
                        </span>
                        <span className="flex flex-1 flex-col">
                          <span className="text-base font-semibold">{v.name}</span>
                          <span className="text-sm text-night-900/60">{v.description}</span>
                        </span>
                        <span className="font-display text-xl font-semibold whitespace-nowrap">
                          ${v.price}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}

              {addOns.length > 0 && (
                <div className="mt-6">
                  <p className="text-sm font-semibold text-night-900/80">
                    Make it extra special
                  </p>
                  <p className="mt-1 text-xs text-night-900/50">
                    Add a little something to the gift. Optional.
                  </p>
                  <div className="mt-3 grid gap-2">
                    {addOns.map((a) => {
                      const isActive = selectedAddOns.includes(a.id);
                      return (
                        <button
                          key={a.id}
                          type="button"
                          role="checkbox"
                          aria-checked={isActive}
                          onClick={() => toggleAddOn(a.id)}
                          className={`flex items-center gap-4 rounded-2xl border-2 p-3.5 text-left transition-all ${
                            isActive
                              ? "border-bloom-500 bg-bloom-500/5"
                              : "border-night-900/10 bg-white hover:border-night-900/25"
                          }`}
                        >
                          <span
                            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${
                              isActive
                                ? "border-bloom-500 bg-bloom-500 text-moon-50"
                                : "border-night-900/20"
                            }`}
                          >
                            {isActive && <Check className="h-3.5 w-3.5" />}
                          </span>
                            <span className="flex flex-1 items-start gap-3">
                              {a.image && (
                                <img
                                  src={a.image}
                                  alt={a.name}
                                  className="h-12 w-12 rounded-lg object-cover"
                                />
                              )}
                              <span className="flex flex-col">
                                <span className="text-sm font-semibold">{a.name}</span>
                                <span className="text-xs text-night-900/60">{a.description}</span>
                              </span>
                            </span>
                            <span className="font-display text-lg font-semibold whitespace-nowrap">
                              +${a.price}
                            </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="mt-6">
                <p className="text-sm font-semibold text-night-900/80">
                  How do you want it?
                </p>
                <div className="mt-3 grid grid-cols-2 gap-3" role="radiogroup" aria-label="Delivery or pickup">
                  <button
                    type="button"
                    role="radio"
                    aria-checked={fulfillment === "delivery"}
                    onClick={() => setFulfillment("delivery")}
                    className={`flex flex-col items-start gap-2 rounded-2xl border-2 p-4 text-left transition-all ${
                      fulfillment === "delivery"
                        ? "border-bloom-500 bg-bloom-500/5"
                        : "border-night-900/10 bg-white hover:border-night-900/25"
                    }`}
                  >
                    <Truck
                      className={`h-5 w-5 ${
                        fulfillment === "delivery" ? "text-bloom-500" : "text-night-900/40"
                      }`}
                    />
                    <span className="text-sm font-semibold">Delivery</span>
                    <span className="text-xs leading-relaxed text-night-900/60">
                      We bring it to you across the OKC metro.
                    </span>
                  </button>
                  <button
                    type="button"
                    role="radio"
                    aria-checked={fulfillment === "pickup"}
                    onClick={() => setFulfillment("pickup")}
                    className={`flex flex-col items-start gap-2 rounded-2xl border-2 p-4 text-left transition-all ${
                      fulfillment === "pickup"
                        ? "border-bloom-500 bg-bloom-500/5"
                        : "border-night-900/10 bg-white hover:border-night-900/25"
                    }`}
                  >
                    <Store
                      className={`h-5 w-5 ${
                        fulfillment === "pickup" ? "text-bloom-500" : "text-night-900/40"
                      }`}
                    />
                    <span className="text-sm font-semibold">Pickup</span>
                    <span className="text-xs leading-relaxed text-night-900/60">
                      Pick it up at {site.address.line1}.
                    </span>
                  </button>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={waLink(message)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-accent flex-1"
                >
                  <MessageCircle className="h-4 w-4" />
                  Order — ${price}{fulfillment === "pickup" ? " · pickup" : " · delivery"}
                </a>
                <button type="button" onClick={onClose} className="btn-outline">
                  Cancel
                  <ArrowRight className="h-4 w-4 rotate-180" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
}