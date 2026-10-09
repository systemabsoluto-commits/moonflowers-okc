import FaqList from "@/components/FaqList";
import CtaBanner from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Everything people ask us"
        copy="Delivery windows, fees, cards, subscriptions and what happens when something goes wrong. If it is not here, call us."
        image="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="py-16 sm:py-24">
        <div className="container-x max-w-4xl">
          <FaqList />
          <div className="mt-12 rounded-2xl bg-moon-100 p-8 text-center">
            <h2 className="text-2xl font-semibold">Did not find your answer?</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-night-900/65">
              Call {site.phone} or message on WhatsApp. Someone at the shop answers, usually within a
              few minutes during business hours.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
