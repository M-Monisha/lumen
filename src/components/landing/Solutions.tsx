import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SOLUTIONS = [
  { title: "Network Infrastructure",       dotlottie: "https://lottie.host/embed/672b2909-cf41-4c5a-9f43-1f90b19cf28b/x9O6AdxFgS.lottie", size: 80 },
  { title: "Testing & Measurement",        dotlottie: "https://lottie.host/embed/5fd85aea-7bde-4675-9cc7-abc40e5a67a1/kBpdLqQJm6.lottie", size: 80 },
  { title: "Safety & Security",            dotlottie: "https://lottie.host/embed/e8ceaea9-dfc8-452a-be9f-c53c8e657cde/KbEWGQg3lD.lottie", size: 110 },
  { title: "Productivity Solutions",       dotlottie: "https://lottie.host/embed/6c75a374-889e-4ac9-b52b-b1614c2dd8b4/T4BYrQy3aW.lottie", size: 80 },
  { title: "WiFi & Network Testing",       dotlottie: "https://lottie.host/embed/52852a56-ee29-4498-9da4-10026970bf76/ZI22auyIP3.lottie", size: 80 },
  { title: "UAV — Unmanned Aerial Vehicle",dotlottie: "https://lottie.host/embed/d71f17ac-c00a-450c-8273-6808de29c50f/FQO8zSVI15.lottie", size: 110 },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export function Solutions() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => { setIsClient(true); }, []);
  return (
    <section id="solutions" className="relative py-10 lg:py-12 mt-4 sm:mt-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-xs uppercase tracking-[0.25em] text-cyan-600">Our Solutions</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold leading-tight">
            <span className="text-navy-deep">Five focused domains,</span> <br />
            <span className="text-cyan-500">one distribution partner.</span>
          </h2>
          <p className="mt-5 text-slate-500">
            A curated portfolio built around what enterprises actually deploy — engineered for
            reliability, backed by authorized technical support.
          </p>
        </motion.div>

        <motion.div
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {SOLUTIONS.map(({ title, dotlottie, size }) => (
            <motion.div
              key={title}
              variants={cardVariant}
              whileHover={{ y: -4, scale: 1.02, boxShadow: "0 16px 40px rgba(0,0,0,0.12)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative flex flex-col justify-end rounded-xl bg-white border-[3px] border-sky-200 hover:border-sky-400 shadow-sm hover:shadow-lg transition-all duration-300 p-3 h-28 sm:h-32 cursor-default overflow-hidden"
            >
              {dotlottie && isClient ? (
                <div className="absolute top-0 right-0 overflow-hidden" style={{ width: `${size}px`, height: `${size}px` }}>
                  <iframe
                    src={dotlottie}
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      border: "none",
                      background: "transparent",
                      marginLeft: size >= 180 ? "-30px" : "0",
                      marginTop: size >= 180 ? "-40px" : "0",
                    }}
                    allowFullScreen
                  />
                </div>
              ) : (
                <span className="absolute top-3 right-4 text-7xl font-black text-gray-100 select-none leading-none">
                  {title[0]}
                </span>
              )}
              <span className="relative text-sm font-semibold text-navy-deep leading-snug">{title}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
