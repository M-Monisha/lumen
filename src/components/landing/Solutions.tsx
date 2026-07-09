import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SOLUTIONS = [
  { title: "Network Infrastructure",        sub: "Cabling, racks, power & thermal management",         dotlottie: "https://lottie.host/embed/672b2909-cf41-4c5a-9f43-1f90b19cf28b/x9O6AdxFgS.lottie" },
  { title: "Testing & Measurement",         sub: "Precision electrical & power-quality instruments",   dotlottie: "https://lottie.host/embed/5fd85aea-7bde-4675-9cc7-abc40e5a67a1/kBpdLqQJm6.lottie"  },
  { title: "Safety & Security",             sub: "Fire alarm, access control & surveillance systems",  dotlottie: "https://lottie.host/embed/e8ceaea9-dfc8-452a-be9f-c53c8e657cde/KbEWGQg3lD.lottie"  },
  { title: "Productivity Solutions",        sub: "Barcode, RFID, mobile computers & printing",        dotlottie: "https://lottie.host/embed/6c75a374-889e-4ac9-b52b-b1614c2dd8b4/T4BYrQy3aW.lottie"  },
  { title: "WiFi & Network Testing",        sub: "Wi-Fi planning & copper/fibre certification tools", dotlottie: "https://lottie.host/embed/52852a56-ee29-4498-9da4-10026970bf76/ZI22auyIP3.lottie"  },
  { title: "UAV — Unmanned Aerial Vehicle", sub: "Drone solutions for enterprise & industrial use",   dotlottie: "https://lottie.host/embed/d71f17ac-c00a-450c-8273-6808de29c50f/FQO8zSVI15.lottie"  },
];

export function Solutions() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => { setIsClient(true); }, []);

  return (
    <section id="solutions" className="relative py-10 lg:py-16 mt-4 sm:mt-0">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="max-w-2xl mb-12"
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
            A curated portfolio built around what enterprises actually deploy — engineered for reliability, backed by authorized technical support.
          </p>
        </motion.div>

        {/* Zigzag Timeline */}
        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-200 via-sky-300 to-sky-200 -translate-x-1/2 hidden sm:block" />

          <div className="flex flex-col gap-8 sm:gap-0">
            {SOLUTIONS.map((sol, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={sol.title}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                  className={`relative flex items-center sm:gap-0 gap-4 ${isLeft ? "sm:flex-row" : "sm:flex-row-reverse"} flex-row`}
                >
                  {/* Card */}
                  <div className={`w-full sm:w-[44%] ${isLeft ? "sm:pr-8" : "sm:pl-8"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, boxShadow: "0 8px 32px rgba(56,189,248,0.18)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="bg-white border-[2.5px] border-sky-200 hover:border-sky-400 rounded-2xl p-4 flex items-center gap-4 shadow-sm transition-colors"
                    >
                      {/* Lottie */}
                      <div className="shrink-0 w-16 h-16 rounded-xl bg-sky-50 border border-sky-100 overflow-hidden flex items-center justify-center">
                        {isClient ? (
                          <iframe
                            src={sol.dotlottie}
                            style={{ width: 64, height: 64, border: "none", background: "transparent" }}
                            allowFullScreen
                          />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-sky-200" />
                        )}
                      </div>
                      {/* Text */}
                      <div>
                        <div className="text-sm font-bold text-navy-deep leading-snug">{sol.title}</div>
                        <div className="text-xs text-slate-400 mt-1 leading-relaxed">{sol.sub}</div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center dot on timeline */}
                  <div className="hidden sm:flex w-[12%] justify-center items-center shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3, type: "spring" }}
                      className="w-4 h-4 rounded-full bg-sky-400 border-4 border-white shadow-[0_0_0_2px_#38bdf8] z-10"
                    />
                  </div>

                  {/* Empty half */}
                  <div className="hidden sm:block w-[44%]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
