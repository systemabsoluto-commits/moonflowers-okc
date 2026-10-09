import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Star } from "lucide-react";
import type { Product } from "@/data/products";
import ProductOrderModal from "@/components/ProductVariantPicker";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const [pickerOpen, setPickerOpen] = useState(false);
  const hasVariants = (product.variants?.length ?? 0) > 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.3), ease: "easeOut" }}
      className="card group flex flex-col"
    >
      <div className="relative aspect-square overflow-hidden bg-moon-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 rounded-full bg-night-950/85 px-3 py-1 text-[0.7rem] font-semibold tracking-wide text-moon-50 backdrop-blur">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        {product.rating ? (
          <div className="flex items-center gap-1.5">
            <Star className="h-3.5 w-3.5 fill-bloom-500 text-bloom-500" />
            <span className="text-xs font-medium text-night-900/70">
              {product.rating.toFixed(1)} ({product.reviews})
            </span>
            {product.stems && <span className="text-xs text-night-900/45">· {product.stems}</span>}
          </div>
        ) : (
          product.stems && (
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-night-900/45">{product.stems}</span>
            </div>
          )
        )}

        <h3 className="mt-2 text-lg leading-snug font-semibold">{product.name}</h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-night-900/60">
          {product.description}
        </p>

        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <span className="font-display text-2xl font-semibold">
              {hasVariants ? "From " : ""}${product.variants?.[0]?.price ?? product.price}
            </span>
            {product.oldPrice && (
              <span className="ml-2 text-sm text-night-900/40 line-through">
                ${product.oldPrice}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={() => setPickerOpen(true)}
            className="btn-primary px-4 py-2.5 text-xs"
          >
            <MessageCircle className="h-4 w-4" />
            {hasVariants ? "Choose" : "Order"}
          </button>
        </div>
      </div>

      {pickerOpen && <ProductOrderModal product={product} onClose={() => setPickerOpen(false)} />}
    </motion.article>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((p, i) => (
        <ProductCard key={p.slug} product={p} index={i} />
      ))}
    </div>
  );
}
