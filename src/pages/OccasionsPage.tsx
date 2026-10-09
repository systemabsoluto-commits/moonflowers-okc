import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CategoryCard, SectionHeading } from "@/components/SectionHeading";
import { ProductGrid } from "@/components/ProductCard";
import CtaBanner from "@/components/CtaBanner";
import Testimonials from "@/components/Testimonials";
import { PageHero } from "@/components/PageHero";
import { occasionCategories, occasionPath } from "@/data/occasions";
import { products } from "@/data/products";

export default function OccasionsPage() {
    const byReviews = [...products].sort((a, b) => (b.reviews ?? 0) - (a.reviews ?? 0)).slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow="Occasions"
        title="For the days that get remembered"
        copy="Eight ways to mark a moment, from wedding florals to funeral sprays delivered straight to the funeral home. Pick the occasion and we will handle the rest."
        image="/products/bloom-deluxe-red-roses.jpg"
      />

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Find the moment"
            title="All occasions"
            copy="Every collection below is built for a specific moment, not a generic holiday."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {occasionCategories.map((c, i) => (
              <CategoryCard key={c.slug} category={c} to={occasionPath(c)} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-night-950 py-16 text-moon-50 sm:py-24">
        <div className="container-x">
          <p className="eyebrow">Most ordered</p>
          <h2 className="mt-3 max-w-2xl text-3xl leading-tight font-semibold sm:text-4xl">
            What the metro actually orders
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {byReviews.map((p) => (
              <div key={p.slug} className="rounded-2xl border border-white/10 p-5">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="aspect-4/3 w-full rounded-xl object-cover"
                />
                <h3 className="mt-4 text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-moon-100/60">{p.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-display text-xl font-semibold">${p.price}</span>
                  <Link
                    to={`/occasions/${p.categorySlug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-bloom-400 hover:text-bloom-500"
                  >
                    Shop
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="All occasion products"
            title="The full catalog"
            action={{ to: "/sympathy", label: "Ordering for a funeral?" }}
          />
          <div className="mt-10">
            <ProductGrid products={products} />
          </div>
        </div>
      </section>

      <Testimonials />
      <CtaBanner />
    </>
  );
}
