import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SOLUTIONS = [
  { title: "Network Infrastructure",        sub: "Cabling, racks, power & thermal management for data centres.",                                 dotlottie: "https://lottie.host/embed/672b2909-cf41-4c5a-9f43-1f90b19cf28b/x9O6AdxFgS.lottie" },
  { title: "Testing & Measurement",         sub: "Precision electrical & power-quality instruments for diagnostics.",                            dotlottie: "https://lottie.host/embed/5fd85aea-7bde-4675-9cc7-abc40e5a67a1/kBpdLqQJm6.lottie"  },
  { title: "Safety & Security",             sub: "Fire alarm, access control, surveillance & intrusion systems.",                                dotlottie: "https://lottie.host/embed/e8ceaea9-dfc8-452a-be9f-c53c8e657cde/KbEWGQg3lD.lottie"  },
  { title: "Productivity Solutions",        sub: "Barcode scanners, RFID, mobile computers & printing solutions.",                              dotlottie: "https://lottie.host/embed/6c75a374-889e-4ac9-b52b-b1614c2dd8b4/T4BYrQy3aW.lottie"  },
  { title: "WiFi & Network Testing",        sub: "Wi-Fi planning & copper/fibre certification for high-performance networks.",                   dotlottie: "https://lottie.host/embed/52852a56-ee29-4498-9da4-10026970bf76/ZI22auyIP3.lottie"  },
  { title: "UAV — Unmanned Aerial Vehicle", sub: "Cutting-edge drone solutions for enterprise surveying & industrial use.",                      dotlottie: "https://lottie.host/embed/d71f17ac-c00a-450c-8273-6808de29c50f/FQO8zSVI15.lottie"  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

function FlipCard({ sol, isClient }: { sol: typeof SOLUTIONS[0]; isClient: boolean }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative cursor-pointer"
      style={{ perspective: 800, height: 180 }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(f => !f)} // touch support
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT — Lottie animation */}
        <div
          className="absolute inset-0 rounded-2xl border-[2.5px] border-sky-200 bg-white shadow-sm flex items-center justify-center overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {isClient ? (
            <iframe
              src={sol.dotlottie}
              style={{ width: "100%", height: "100%", border: "none", background: "transparent" }}
              allowFullScreen
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-sky-100 animate-pulse" />
          )}
          {/* Title badge at bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/80 to-transparent px-4 py-3">
            <span className="text-xs font-bold text-navy-deep leading-tight">{sol.title}</span>
          </div>
          {/* subtle corner dot instead of text hint */}
          <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-sky-300" />
        </div>

        {/* BACK — Description */}
        <div
          className="absolute inset-0 rounded-2xl border-[2.5px] border-sky-400 bg-sky-50 shadow-md flex flex-col items-start justify-center px-5 py-4"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="w-8 h-0.5 bg-sky-400 mb-3 rounded-full" />
          <h4 className="text-sm font-bold text-navy-deep leading-snug mb-2">{sol.title}</h4>
          <p className="text-xs text-slate-500 leading-relaxed">{sol.sub}</p>
        </div>
      </motion.div>
    </div>
  );
}

export function Solutions() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => { setIsClient(true); }, []);

  return (
    <section id="solutions" className="relative py-10 lg:py-16 mt-4 sm:mt-0">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="max-w-2xl mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-xs uppercase tracking-[0.25em] text-cyan-600">Our Solutions</div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold leading-tight">
            <span className="text-navy-deep">Six focused domains,</span>{" "}
            <span className="text-cyan-500">one distribution partner.</span>
          </h2>
          <p className="mt-4 text-slate-500 text-sm leading-relaxed">
            Hover each card to learn more. A curated portfolio built around what enterprises actually deploy.
          </p>
        </motion.div>

        {/* 3×2 Flip Card Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {SOLUTIONS.map((sol) => (
            <motion.div key={sol.title} variants={cardVariant}>
              <FlipCard sol={sol} isClient={isClient} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
