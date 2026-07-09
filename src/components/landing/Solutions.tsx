import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SOLUTIONS = [
  { title: "Network Infrastructure",        dotlottie: "https://lottie.host/embed/672b2909-cf41-4c5a-9f43-1f90b19cf28b/x9O6AdxFgS.lottie", size: 80 },
  { title: "Testing & Measurement",         dotlottie: "https://lottie.host/embed/5fd85aea-7bde-4675-9cc7-abc40e5a67a1/kBpdLqQJm6.lottie",  size: 80 },
  { title: "Safety & Security",             dotlottie: "https://lottie.host/embed/e8ceaea9-dfc8-452a-be9f-c53c8e657cde/KbEWGQg3lD.lottie",  size: 80 },
  { title: "Productivity Solutions",        dotlottie: "https://lottie.host/embed/6c75a374-889e-4ac9-b52b-b1614c2dd8b4/T4BYrQy3aW.lottie",  size: 80 },
  { title: "WiFi & Network Testing",        dotlottie: "https://lottie.host/embed/52852a56-ee29-4498-9da4-10026970bf76/ZI22auyIP3.lottie",  size: 80 },
  { title: "UAV — Unmanned Aerial Vehicle", dotlottie: "https://lottie.host/embed/d71f17ac-c00a-450c-8273-6808de29c50f/FQO8zSVI15.lottie",  size: 80 },
];

// Tree layout: left branches [0,1,2] top→bottom, right branches [3,4,5] top→bottom
// SVG viewBox 0 0 700 520, trunk center x=350
// Branch endpoints (cx,cy) for each card
const BRANCHES = [
  // LEFT side (indices 0,1,2)
  { cx: 120, cy: 100, tx: 350, ty: 110, side: "left"  }, // top-left
  { cx: 80,  cy: 240, tx: 350, ty: 250, side: "left"  }, // mid-left
  { cx: 120, cy: 380, tx: 350, ty: 370, side: "left"  }, // bot-left
  // RIGHT side (indices 3,4,5)
  { cx: 580, cy: 100, tx: 350, ty: 110, side: "right" }, // top-right
  { cx: 620, cy: 240, tx: 350, ty: 250, side: "right" }, // mid-right
  { cx: 580, cy: 380, tx: 350, ty: 370, side: "right" }, // bot-right
];

function BranchCard({ solution, branch, index, isClient }: {
  solution: typeof SOLUTIONS[0];
  branch: typeof BRANCHES[0];
  index: number;
  isClient: boolean;
}) {
  const cardW = 148;
  const cardH = 90;
  const x = branch.side === "left" ? branch.cx - cardW : branch.cx;
  const y = branch.cy - cardH / 2;

  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      {/* Branch line */}
      <motion.path
        d={`M ${branch.tx} ${branch.ty} C ${(branch.tx + branch.cx) / 2} ${branch.ty}, ${(branch.tx + branch.cx) / 2} ${branch.cy}, ${branch.cx} ${branch.cy}`}
        fill="none"
        stroke="#bae6fd"
        strokeWidth="2.5"
        strokeDasharray="200"
        strokeDashoffset="200"
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
      />
      {/* Dot at junction */}
      <circle cx={branch.cx} cy={branch.cy} r="5" fill="#38bdf8" />

      {/* Card background */}
      <foreignObject x={x} y={y} width={cardW} height={cardH}>
        <div
          style={{
            width: cardW,
            height: cardH,
            background: "white",
            border: "2.5px solid #bae6fd",
            borderRadius: 12,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            padding: "6px 8px",
            overflow: "hidden",
            position: "relative",
            boxShadow: "0 4px 16px rgba(56,189,248,0.12)",
          }}
        >
          {isClient && (
            <div style={{ position: "absolute", top: 0, right: 0, width: 80, height: 80, overflow: "hidden" }}>
              <iframe
                src={solution.dotlottie}
                style={{ width: 80, height: 80, border: "none", background: "transparent" }}
                allowFullScreen
              />
            </div>
          )}
          <span style={{ fontSize: 11, fontWeight: 700, color: "#0c4a6e", lineHeight: 1.3, position: "relative", zIndex: 1, maxWidth: 90 }}>
            {solution.title}
          </span>
        </div>
      </foreignObject>
    </motion.g>
  );
}

export function Solutions() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => { setIsClient(true); }, []);

  return (
    <section id="solutions" className="relative py-10 lg:py-16 mt-4 sm:mt-0">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-xs uppercase tracking-[0.25em] text-cyan-600">Our Solutions</div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold leading-tight">
            <span className="text-navy-deep">Five focused domains,</span>{" "}
            <span className="text-cyan-500">one distribution partner.</span>
          </h2>
          <p className="mt-4 text-slate-500 text-sm">
            A curated portfolio built around what enterprises actually deploy — engineered for reliability, backed by authorized technical support.
          </p>
        </motion.div>

        {/* Tree SVG — desktop */}
        <div className="hidden sm:block w-full">
          <svg viewBox="0 0 700 500" className="w-full h-auto" style={{ overflow: "visible" }}>
            {/* Trunk */}
            <motion.line
              x1="350" y1="30" x2="350" y2="460"
              stroke="#7dd3fc" strokeWidth="3"
              strokeDasharray="500" strokeDashoffset="500"
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 1.0 }}
            />
            {/* Trunk root glow */}
            <ellipse cx="350" cy="465" rx="30" ry="8" fill="#bae6fd" opacity="0.5" />

            {/* Branches + Cards */}
            {BRANCHES.map((branch, i) => (
              <BranchCard
                key={i}
                solution={SOLUTIONS[i]}
                branch={branch}
                index={i}
                isClient={isClient}
              />
            ))}
          </svg>
        </div>

        {/* Mobile: simple 2-col grid */}
        <div className="sm:hidden grid grid-cols-2 gap-3">
          {SOLUTIONS.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative flex flex-col justify-end rounded-xl bg-white border-[2.5px] border-sky-200 p-3 h-24 overflow-hidden"
            >
              {isClient && (
                <div className="absolute top-0 right-0 overflow-hidden" style={{ width: 64, height: 64 }}>
                  <iframe src={sol.dotlottie} style={{ width: 64, height: 64, border: "none", background: "transparent" }} allowFullScreen />
                </div>
              )}
              <span className="relative text-xs font-bold text-navy-deep leading-snug" style={{ maxWidth: "70%" }}>{sol.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
