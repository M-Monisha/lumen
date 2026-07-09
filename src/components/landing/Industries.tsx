import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { INDUSTRIES } from "@/lib/industries";

// Map slug to local public image
const LOCAL_IMAGES: Record<string, string> = {
  "data-centre":          "/data-centre.jpg",
  "enterprise":           "/enterprise.jpg",
  "transport-warehousing":"/transport.avif",
  "retail":               "/retail.webp",
  "manufacturing":        "/manufacturing.jpg",
  "power":                "/power.jpg",
  "defense":              "/defense.jpg",
  "public-infrastructure":"/public-infrastructure.jpg",
};

export function Industries() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setCurrent(prev => (prev + dir + INDUSTRIES.length) % INDUSTRIES.length);
  };

  const ind = INDUSTRIES[current];
  const img = LOCAL_IMAGES[ind.slug] ?? ind.cover;

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const } },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -80 : 80, transition: { duration: 0.3 } }),
  };

  return (
    <section id="industries" className="relative bg-white py-12 lg:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="max-w-2xl mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs uppercase tracking-[0.25em] text-cyan-600">Industries We Serve</div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold leading-tight">
            <span className="text-navy-deep">Tangible Distribution, for Operations</span>{" "}
            <span className="text-cyan-500">Where Downtime Isn't an Option</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden h-[300px] sm:h-[360px] lg:h-[420px] bg-navy-deep">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={ind.slug}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                {/* Image */}
                <img
                  src={img}
                  alt={ind.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

                {/* Counter */}
                <div className="absolute top-5 right-6 text-white/50 font-display text-sm font-medium">
                  {String(current + 1).padStart(2, "0")} / {String(INDUSTRIES.length).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 px-8 pb-8 sm:px-12">
                  <h3 className="text-white font-display text-2xl sm:text-3xl font-semibold">
                    {ind.title}
                  </h3>
                  <Link
                    to="/industries/$slug"
                    params={{ slug: ind.slug }}
                    className="mt-4 inline-flex items-center gap-2 bg-white text-navy-deep rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-sky-50 transition"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Left arrow */}
            <button
              onClick={() => go(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur flex items-center justify-center text-white transition z-10"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Right arrow */}
            <button
              onClick={() => go(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur flex items-center justify-center text-white transition z-10"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-5">
            {INDUSTRIES.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-sky-400" : "w-1.5 bg-sky-200"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
