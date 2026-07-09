import { useEffect, useRef, useState } from "react";
import { Clock, MapPin, Users, ShieldCheck, Package, Award } from "lucide-react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { icon: Clock,       n: 35,    suffix: "+",  label: "Years",         sub: "Distribution expertise across India" },
  { icon: MapPin,      n: 18,    suffix: "",   label: "Cities",        sub: "Pan-India network reach" },
  { icon: Users,       n: 2500,  suffix: "+",  label: "Partners",      sub: "Trusted channel network" },
  { icon: ShieldCheck, n: 25,    suffix: "+",  label: "Global Brands", sub: "Authorized distributor" },
  { icon: Package,     n: 1000,  suffix: "+",  label: "SKUs",          sub: "Curated technology portfolio" },
  { icon: Award,       n: 0,     suffix: "24×7", label: "Support",    sub: "Technical & RMA assistance" },
];

function CountUp({ target, suffix, duration = 1.8 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView || target === 0) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  if (target === 0) return <span ref={ref}>{suffix}</span>;
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export function StatsWhy() {
  return (
    <section id="why" className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.85_0.10_240),transparent_55%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid lg:grid-cols-2 gap-10 items-start">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="text-xs uppercase tracking-[0.25em] text-cyan-600">Since 1989</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold leading-tight text-navy-deep">
            India&apos;s Trusted Technology <br />
            <span className="text-cyan-500">Distribution Partner.</span>
          </h2>
          <p className="mt-5 text-slate-500 max-w-lg leading-relaxed">
            PV Lumens delivers network infrastructure, safety &amp; security, and test &amp; measurement
            solutions to 2,500+ channel partners across 18 cities in India.
          </p>

          {/* India map */}
          <div className="mt-10 relative w-full max-w-sm mx-auto rounded-2xl overflow-hidden">
            <img
              src="/india-map.webp"
              alt="India distribution network"
              className="w-full h-auto object-contain"
              style={{ mixBlendMode: "multiply", filter: "brightness(0.95) contrast(1.05)" }}
            />
            {/* fade edges to blend with white background */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white opacity-30 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-20 pointer-events-none" />
          </div>
        </motion.div>

        {/* Right — stat cards */}
        <div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {STATS.map(({ icon: Icon, n, suffix, label, sub }) => (
              <motion.div
                key={label}
                variants={cardVariant}
                whileHover={{ scale: 1.03, boxShadow: "0 0 28px rgba(59,130,246,0.18)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-xl p-3 sm:p-4 bg-white border-[3px] border-sky-200 hover:border-sky-400 transition-colors cursor-default"
              >
                <div className="flex items-start justify-between">
                  <Icon className="h-4 w-4 text-cyan-600" />
                  <div className="text-[9px] uppercase tracking-widest text-slate-400">{label}</div>
                </div>
                <div className="mt-2 font-display text-2xl font-semibold text-navy-deep">
                  <CountUp target={n} suffix={suffix} />
                </div>
                <div className="mt-1 text-xs text-slate-500 leading-relaxed">{sub}</div>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            className="mt-8 text-sm text-slate-500 leading-relaxed border-l-2 border-cyan-500 pl-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Backed by technical support, warranty services, and responsible e-waste management — a complete
            distribution partner, not just a supplier.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
