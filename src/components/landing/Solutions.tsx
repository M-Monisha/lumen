import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";

const SOLUTIONS = [
  { title: "Network Infrastructure", lottie: null, dotlottie: "https://lottie.host/embed/672b2909-cf41-4c5a-9f43-1f90b19cf28b/x9O6AdxFgS.lottie", size: 160 },
  { title: "Testing & Measurement",  lottie: null, dotlottie: "https://lottie.host/embed/5fd85aea-7bde-4675-9cc7-abc40e5a67a1/kBpdLqQJm6.lottie", size: 160 },
  { title: "Safety & Security",      lottie: null, dotlottie: "https://lottie.host/embed/e8ceaea9-dfc8-452a-be9f-c53c8e657cde/KbEWGQg3lD.lottie", size: 288 },
  { title: "Productivity Solutions", lottie: null, dotlottie: "https://lottie.host/embed/6c75a374-889e-4ac9-b52b-b1614c2dd8b4/T4BYrQy3aW.lottie", size: 160 },
  { title: "WiFi & Network Testing", lottie: null, dotlottie: "https://lottie.host/embed/52852a56-ee29-4498-9da4-10026970bf76/ZI22auyIP3.lottie", size: 160 },
  { title: "UAV — Unmanned Aerial Vehicle", lottie: null, dotlottie: "https://lottie.host/embed/d71f17ac-c00a-450c-8273-6808de29c50f/FQO8zSVI15.lottie", size: 288 },
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
  return (
    <section id="solutions" className="relative py-10 lg:py-12">
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
          {SOLUTIONS.map(({ title, lottie, dotlottie, size }) => (
            <motion.div
              key={title}
              variants={cardVariant}
              whileHover={{ y: -6, scale: 1.02, boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative flex flex-col justify-end rounded-2xl bg-white border-[3px] border-sky-200 hover:border-sky-400 shadow-sm hover:shadow-lg transition-all duration-300 p-4 sm:p-6 h-44 sm:h-52 cursor-default overflow-hidden"
            >
              {dotlottie ? (
                <div className="absolute top-0 right-0 overflow-hidden" style={{ width: `${size}px`, height: `${size}px` }}>
                  <iframe
                    src={dotlottie}
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      border: "none",
                      background: "transparent",
                      marginLeft: size >= 200 ? "-44px" : "0",
                      marginTop: size >= 200 ? "-60px" : "0",
                    }}
                    allowFullScreen
                  />
                </div>
              ) : lottie ? (
                <div className="absolute top-3 right-3" style={{ width: "96px", height: "96px" }}>
                  <Player src={lottie} loop autoplay style={{ width: "96px", height: "96px" }} />
                </div>
              ) : (
                <span className="absolute top-4 right-5 text-8xl font-black text-gray-100 select-none leading-none">
                  {title[0]}
                </span>
              )}
              <span className="relative text-base font-semibold text-navy-deep leading-snug">{title}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
