import { motion } from "framer-motion";
import { Gift, MapPin, Truck } from "lucide-react";
import { site } from "@/data/site";

export default function DeliveryAreas() {
  return (
    <section className="overflow-hidden bg-moon-100 py-16 sm:py-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="eyebrow">Delivery</p>
          <h2 className="mt-3 text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">
            Twelve cities, one van
          </h2>
          <p className="mt-5 text-base leading-relaxed text-night-900/65">
            We run our own drivers, not a courier app. That means a real person rings the bell, waits
            if someone is in a meeting, and texts you a photo when it is done.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-night-900/70 sm:grid-cols-3">
            {site.deliveryAreas.map((a) => (
              <span key={a} className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-bloom-500" />
                {a}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.mapLink}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              <MapPin className="h-4 w-4" />
              Directions to the shop
            </a>
            <span className="btn-outline pointer-events-none">
              <Gift className="h-4 w-4" />
              Free over ${site.freeDeliveryThreshold}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          <div className="card p-6 sm:col-span-2">
            <Truck className="h-6 w-6 text-bloom-500" />
            <h3 className="mt-3 text-lg font-semibold">Same-day cutoff</h3>
            <p className="mt-1.5 text-sm text-night-900/60">
              Monday to Saturday, order before 1:00 PM for delivery the same day. Sunday orders go
              out Monday morning.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold">Pickup</h3>
            <p className="mt-1.5 text-sm text-night-900/60">
              Order online, pick up on South Meridian. We text when it is wrapped and ready.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold">Sympathy</h3>
            <p className="mt-1.5 text-sm text-night-900/60">
              We deliver to funeral homes across the metro, always free, always with a card in hand.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
