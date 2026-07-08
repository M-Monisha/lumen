import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { BRANDS, type Brand } from "@/lib/brands";

// Distribute 27 brands across 6 cube faces (6+6+6+6+2+1)
const FACES: Brand[][] = [
  BRANDS.slice(0, 6),
  BRANDS.slice(6, 12),
  BRANDS.slice(12, 18),
  BRANDS.slice(18, 24),
  BRANDS.slice(24, 26),
  BRANDS.slice(26, 27),
];

const FACE_TRANSFORMS = [
  "rotateY(0deg) translateZ(var(--half))",
  "rotateY(90deg) translateZ(var(--half))",
  "rotateY(180deg) translateZ(var(--half))",
  "rotateY(-90deg) translateZ(var(--half))",
  "rotateX(90deg) translateZ(var(--half))",
  "rotateX(-90deg) translateZ(var(--half))",
];

function Face({ brands, transform }: { brands: Brand[]; transform: string }) {
  const cols = brands.length <= 2 ? 1 : brands.length <= 4 ? 2 : 3;
  return (
    <div
      className="absolute inset-0 rounded-xl border-2 border-sky-200 bg-white/95 p-3 sm:p-4"
      style={{ transform, backfaceVisibility: "hidden" as const }}
    >
      <div
        className="h-full w-full grid gap-2"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))`,
          gridAutoRows: "1fr",
        }}
      >
        {brands.map((b) => (
          <div
            key={b.name}
            className="flex items-center justify-center rounded-lg bg-white border-[3px] border-sky-200 p-2 sm:p-3"
            title={b.name}
          >
            <img
              src={b.logo}
              alt={b.name}
              loading="lazy"
              className="max-h-full max-w-full object-contain"
              draggable={false}
              onError={(e) => {
                const t = e.currentTarget;
                t.style.display = "none";
                if (t.parentElement) {
                  t.parentElement.innerHTML = `<span class="text-navy-deep text-xs font-semibold text-center">${b.name}</span>`;
                }
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function BrandsCube() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [rot, setRot] = useState({ x: -18, y: 25 });
  const dragging = useRef(false);
  const last = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0.15 }); // slow auto-spin baseline
  const rafId = useRef<number | null>(null);
  const isInteracting = useRef(false);

  useEffect(() => {
    const tick = () => {
      if (!isInteracting.current) {
        setRot((r) => ({
          x: r.x + velocity.current.x,
          y: r.y + velocity.current.y,
        }));
        // friction on user velocity, keep tiny auto spin
        velocity.current.x *= 0.95;
        if (Math.abs(velocity.current.y) > 0.15) velocity.current.y *= 0.95;
      }
      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    isInteracting.current = true;
    last.current = { x: e.clientX, y: e.clientY };
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - last.current.x;
    const dy = e.clientY - last.current.y;
    last.current = { x: e.clientX, y: e.clientY };
    setRot((r) => ({ x: r.x - dy * 0.4, y: r.y + dx * 0.4 }));
    velocity.current = { x: -dy * 0.15, y: dx * 0.15 };
  };
  const onPointerUp = () => {
    dragging.current = false;
    setTimeout(() => {
      isInteracting.current = false;
    }, 50);
  };

  return (
    <section id="brands" className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_70%_50%,oklch(0.85_0.10_240),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="text-xs uppercase tracking-[0.25em] text-cyan-600">Partnerships</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold leading-tight text-navy-deep">
            Strategic Brand <span className="text-cyan-500">Partnerships</span>
          </h2>
          <p className="mt-5 text-slate-500 leading-relaxed">
            Authorized distribution of 27 global technology brands across networking, safety &amp; security,
            test &amp; measurement, and productivity. From presales to end-to-end logistics — our channel
            partners scale faster with a dedicated technical support team behind them.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a
              href="#solutions"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-navy-deep text-white px-5 py-2.5 text-sm font-medium hover:bg-navy transition"
            >
              View Brands <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div
            ref={wrapRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            className="relative mx-auto touch-none select-none cursor-grab active:cursor-grabbing"
            style={{
              width: "min(85vw, 460px)",
              height: "min(85vw, 460px)",
              perspective: "1400px",
            }}
          >
            <div
              className="relative h-full w-full"
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
                // @ts-expect-error CSS var
                "--half": "calc(min(90vw, 460px) / 2)",
              }}
            >
              {FACES.map((brands, i) => (
                <Face key={i} brands={brands} transform={FACE_TRANSFORMS[i]} />
              ))}
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-8 w-3/4 rounded-full bg-cyan-400/20 blur-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
