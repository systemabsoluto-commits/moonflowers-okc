import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import DeliveryAreas from "@/components/DeliveryAreas";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import { CategoryCard, SectionHeading } from "@/components/SectionHeading";
import { ProductGrid } from "@/components/ProductCard";
import FaqList from "@/components/FaqList";
import { occasionCategories, occasionPath } from "@/data/occasions";
import { featuredProducts } from "@/data/products";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="bg-night-950 py-16 text-moon-50 sm:py-24">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">Occasions</p>
            <h2 className="mt-3 text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">
              Every reason worth marking
            </h2>
            <p className="mt-4 text-base leading-relaxed text-moon-100/65">
              From a sympathy spray delivered to the funeral home to a quinceañera coronation, the
              occasion sets the tone and we set the flowers.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {occasionCategories.map((c, i) => (
              <CategoryCard key={c.slug} category={c} to={occasionPath(c)} index={i} />
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/occasions"
              className="btn border border-moon-50/25 text-moon-50 hover:bg-moon-50/10"
            >
              See all {occasionCategories.length} occasions
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="The Bloom House picks"
            title="What is selling this week"
            copy="The arrangements our OKC customers keep coming back for."
            action={{ to: "/occasions", label: "Shop everything" }}
          />
          <div className="mt-10">
            <ProductGrid products={featuredProducts(8)} />
          </div>
        </div>
      </section>

      <HowItWorks />
      <DeliveryAreas />
      <Testimonials />

      <section className="py-16 sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 text-3xl leading-tight font-semibold sm:text-4xl">
              The things people ask first
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-night-900/60">
              Still unsure? Call us at {site.phone} or message on WhatsApp. A real person answers.
            </p>
          </div>
          <FaqList limit={5} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
