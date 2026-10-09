import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Phone, Truck } from "lucide-react";
import { heroSlides } from "@/data/heroSlides";
import { site, telLink } from "@/data/site";

const DURATION = 7000;

const motionQuery = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia(motionQuery);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(motionQuery).matches,
    () => false,
  );
}

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = usePrefersReducedMotion();
  const touchX = useRef<number | null>(null);

  const count = heroSlides.length;
  const slide = heroSlides[index];

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = window.setInterval(() => go(index + 1), DURATION);
    return () => window.clearInterval(id);
  }, [index, paused, reduceMotion, go]);

  return (
    <section
      className="relative isolate overflow-hidden bg-night-950 text-moon-50"
      aria-roledescription="carousel"
      aria-label="Featured collections"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const delta = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(delta) > 45) go(index + (delta < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      <div className="absolute inset-0">
        {heroSlides.map((s, i) => (
          <div
            key={s.id}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={s.image}
              alt=""
              loading={i === 0 ? "eager" : "lazy"}
              className="h-full w-full object-cover opacity-25"
              style={{ objectPosition: s.imagePosition }}
            />
            <div className={`absolute inset-0 ${s.overlay}`} />
          </div>
        ))}
      </div>

      <div
        className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-bloom-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-night-950 to-transparent"
        aria-hidden="true"
      />

      <div className="container-x relative py-20 sm:py-28 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="max-w-2xl">
            <div className="relative min-h-[22rem] sm:min-h-[24rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  {slide.badge && (
                    <span className="mb-5 inline-flex items-center rounded-full border border-bloom-400/40 bg-bloom-500/10 px-3.5 py-1 text-[0.7rem] font-semibold tracking-[0.18em] text-bloom-400 uppercase">
                      {slide.badge}
                    </span>
                  )}
                  <p className={slide.badge ? "" : "eyebrow"}>{slide.eyebrow}</p>
                  <h1 className="mt-5 text-5xl leading-[1.05] font-semibold sm:text-6xl lg:text-7xl">
                    {slide.titleLead}
                    <br />
                    <span className="text-bloom-400">{slide.titleAccent}</span>
                  </h1>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-moon-100/75 sm:text-lg">
                    {slide.copy}
                  </p>

                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <Link to={slide.primaryCta.to} className="btn-accent">
                      {slide.primaryCta.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      to={slide.secondaryCta.to}
                      className="btn border border-moon-50/25 text-moon-50 hover:bg-moon-50/10"
                    >
                      {slide.secondaryCta.label}
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-moon-100/65">
              <span className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-bloom-400" />
                Same-day before 1 PM
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-bloom-400" />
                {site.address.line1}
              </span>
              <a href={telLink()} className="flex items-center gap-2 hover:text-moon-50">
                <Phone className="h-4 w-4 text-bloom-400" />
                {site.phone}
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative flex flex-col items-center gap-6 rounded-3xl border border-white/10 bg-white/[0.03] px-10 py-10 backdrop-blur-sm sm:px-14 sm:py-12">
              <div
                className="absolute -top-16 left-1/2 h-40 w-64 -translate-x-1/2 rounded-full bg-bloom-500/10 blur-3xl"
                aria-hidden="true"
              />
              <img
                src="/logo-mark.png"
                alt=""
                width={559}
                height={640}
                className="relative h-24 w-auto sm:h-28 lg:h-32"
              />
              <div className="relative flex flex-col items-center gap-3 text-center">
                <span className="font-display text-3xl leading-none font-semibold text-moon-50 sm:text-4xl">
                  {site.name}
                </span>
                <span
                  className="h-px w-16 bg-gradient-to-r from-transparent via-bloom-400/60 to-transparent"
                  aria-hidden="true"
                />
                <p className="max-w-[18rem] text-sm leading-relaxed text-moon-100/60">
                  {site.tagline}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-5 sm:mt-14">
          <div className="flex items-center gap-2">
            <CarouselButton label="Previous slide" onClick={() => go(index - 1)}>
              <ChevronLeft className="h-4 w-4" />
            </CarouselButton>
            <CarouselButton label="Next slide" onClick={() => go(index + 1)}>
              <ChevronRight className="h-4 w-4" />
            </CarouselButton>
          </div>

          <div className="flex items-center gap-3">
            {heroSlides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}: ${s.eyebrow}`}
                aria-current={i === index}
                className="group flex flex-col gap-2"
              >
                <span
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === index ? "w-12 bg-bloom-400" : "w-6 bg-moon-50/25 group-hover:bg-moon-50/50"
                  }`}
                />
              </button>
            ))}
          </div>

          <span className="text-xs tracking-[0.2em] text-moon-100/40 tabular-nums">
            {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}

function CarouselButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="rounded-full border border-white/15 p-2.5 text-moon-100/70 transition-colors hover:border-bloom-400/60 hover:text-bloom-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bloom-400"
    >
      {children}
    </button>
  );
}
