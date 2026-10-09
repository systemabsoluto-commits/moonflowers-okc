import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, Package } from "lucide-react";
import { ProductGrid } from "@/components/ProductCard";
import { CategoryCard } from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import { occasionCategories, occasionCategoriesBySlug, occasionPath } from "@/data/occasions";
import { productsFor } from "@/data/products";
import { waLink } from "@/data/site";

export function OccasionCategoryPage() {
  const { slug = "" } = useParams();
  const category = occasionCategoriesBySlug[slug];
  if (!category) return <Navigate to="/occasions" replace />;

  const items = productsFor(slug);
  const related = occasionCategories.filter((c) => c.slug !== slug).slice(0, 4);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-night-950 text-moon-50">
        <img src={category.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-night-950 via-night-950/92 to-night-950/55" />
        <div
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-night-950 to-transparent"
          aria-hidden="true"
        />
        <div className="container-x relative py-12 sm:py-20">
          <Link
            to="/occasions"
            className="inline-flex items-center gap-2 text-sm text-moon-100/60 transition-colors hover:text-moon-50"
          >
            <ArrowLeft className="h-4 w-4" />
            All occasions
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 max-w-2xl"
          >
            <p className="eyebrow">Occasions</p>
            <h1 className="mt-3 text-4xl leading-tight font-semibold sm:text-5xl lg:text-6xl">
              {category.name}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-moon-100/70 sm:text-lg">
              {category.blurb}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-x">
          {items.length > 0 ? (
            <ProductGrid products={items} />
          ) : (
            <div className="card p-10 text-center">
              <Package className="mx-auto h-8 w-8 text-night-900/30" />
              <h2 className="mt-4 text-2xl font-semibold">Building this collection now</h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-night-900/60">
                Tell us the date and the feeling, and we will come back with options.
              </p>
              <a
                href={waLink(`Hi! I'm planning ${category.name} flowers. What's available?`)}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-6"
              >
                <MessageCircle className="h-4 w-4" />
                Start the conversation
              </a>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <h2 className="text-2xl font-semibold sm:text-3xl">Other occasions</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((c, i) => (
              <CategoryCard key={c.slug} category={c} to={occasionPath(c)} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
