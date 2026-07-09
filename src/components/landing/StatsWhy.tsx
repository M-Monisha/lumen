import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const WHY_US = [
  "Pan-India + South Asia Reach",
  "25+ Global Brand Partnerships",
  "Local Stock, Local Billing",
  "Live on SAP HANA, 24×7",
  "End-to-End Support",
  "2,000+ Channel Partners",
  "35+ Years of Promoter Experience",
];

// 7 labels arranged around a center circle
// angles (degrees) for each label line
const ANGLES = [320, 355, 30, 150, 185, 220, 260];

export function StatsWhy() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => { setIsClient(true); }, []);

  const cx = 400; // SVG center x
  const cy = 300; // SVG center y
  const earthR = 90; // radius of earth circle
  const lineLen = 100; // line length from earth edge

  return (
    <section id="why" className="relative bg-white overflow-hidden py-14 lg:py-20">
      <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(ellipse_at_center,oklch(0.85_0.10_240),transparent_55%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="max-w-2xl mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs uppercase tracking-[0.25em] text-cyan-600">Why Us</div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-navy-deep">
            Why Partners Choose <span className="text-cyan-500">PV Lumens</span>
          </h2>
        </motion.div>

        {/* Desktop — SVG spoke diagram */}
        <div className="hidden lg:block w-full">
          <svg viewBox="0 0 800 600" className="w-full h-auto" style={{ overflow: "visible" }}>

            {/* Radiating lines + labels */}
            {ANGLES.map((angleDeg, i) => {
              const rad = (angleDeg * Math.PI) / 180;
              const x1 = cx + earthR * Math.cos(rad);
              const y1 = cy + earthR * Math.sin(rad);
              const x2 = cx + (earthR + lineLen) * Math.cos(rad);
              const y2 = cy + (earthR + lineLen) * Math.sin(rad);
              const isRight = x2 > cx;

              return (
                <motion.g
                  key={WHY_US[i]}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
                >
                  {/* Line */}
                  <line
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="#7dd3fc" strokeWidth="1.5"
                    strokeDasharray="4 3" opacity="0.7"
                  />
                  {/* Dot at end */}
                  <circle cx={x2} cy={y2} r="4" fill="#38bdf8" />
                  {/* Label */}
                  <text
                    x={isRight ? x2 + 10 : x2 - 10}
                    y={y2 + 5}
                    textAnchor={isRight ? "start" : "end"}
                    fontSize="12"
                    fontWeight="600"
                    fill="#0c4a6e"
                    fontFamily="system-ui, sans-serif"
                  >
                    {WHY_US[i]}
                  </text>
                </motion.g>
              );
            })}

            {/* Earth iframe in center via foreignObject */}
            <foreignObject x={cx - earthR - 30} y={cy - earthR - 30} width={(earthR + 30) * 2} height={(earthR + 30) * 2}>
              <div style={{ width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden" }}>
                {isClient && (
                  <iframe
                    src="https://lottie.host/embed/36c824f8-5ba7-4ce8-b30f-b72dbdf23e03/QL31af3O4P.lottie"
                    style={{ width: "100%", height: "100%", border: "none", background: "transparent" }}
                    allowFullScreen
                  />
                )}
              </div>
            </foreignObject>
          </svg>
        </div>

        {/* Mobile — simple list */}
        <div className="lg:hidden flex flex-col gap-3">
          {/* Earth lottie on mobile */}
          {isClient && (
            <div className="mx-auto w-56 h-56 mb-4">
              <iframe
                src="https://lottie.host/embed/36c824f8-5ba7-4ce8-b30f-b72dbdf23e03/QL31af3O4P.lottie"
                style={{ width: "100%", height: "100%", border: "none", background: "transparent" }}
                allowFullScreen
              />
            </div>
          )}
          {WHY_US.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-sky-100 bg-white"
            >
              <div className="w-2 h-2 rounded-full bg-sky-400 shrink-0" />
              <span className="text-sm font-semibold text-navy-deep">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
