import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Globe, Building2, Boxes, Radio, HeadphonesIcon, Users, Award } from "lucide-react";

const WHY_US = [
  { icon: Globe,            title: "Pan-India + South Asia Reach",      body: "20 branches, 300+ cities, plus Sri Lanka, Bangladesh, Nepal & Maldives." },
  { icon: Award,            title: "25+ Global Brand Partnerships",     body: "Authorized distributor across every category we carry." },
  { icon: Boxes,            title: "Local Stock, Local Billing",        body: "Competitive pricing and fast turnaround from your nearest branch." },
  { icon: Radio,            title: "Live on SAP HANA, 24×7",           body: "Real-time CRM tracking from lead to order closure." },
  { icon: HeadphonesIcon,   title: "End-to-End Support",                body: "Pre-sales design & BOM, training & demos, post-sales RMA and warranty facilitation." },
  { icon: Users,            title: "2,000+ Channel Partners",           body: "Trusted by resellers, SIs, and contractors nationwide." },
  { icon: Building2,        title: "35+ Years of Promoter Experience",  body: "Backed by strong financials and operational depth." },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } } };

export function StatsWhy() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => { setIsClient(true); }, []);

  return (
    <section id="why" className="relative bg-white overflow-hidden py-14 lg:py-20">
      <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.85_0.10_240),transparent_55%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="max-w-2xl mb-12"
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

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">

          {/* Left — Earth Lottie */}
          <motion.div
            className="lg:col-span-2 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-full max-w-sm">
              {isClient && (
                <iframe
                  src="https://lottie.host/embed/36c824f8-5ba7-4ce8-b30f-b72dbdf23e03/QL31af3O4P.lottie"
                  style={{ width: "100%", height: "420px", border: "none", background: "transparent" }}
                  allowFullScreen
                />
              )}
            </div>
          </motion.div>

          {/* Right — stacked list */}
          <motion.div
            className="lg:col-span-3"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="divide-y divide-sky-100 border border-sky-100 rounded-2xl overflow-hidden">
              {WHY_US.map(({ icon: Icon, title, body }) => (
                <motion.div
                  key={title}
                  variants={item}
                  whileHover={{ backgroundColor: "rgba(240,249,255,1)" }}
                  className="flex items-start gap-4 px-5 py-4 bg-white transition-colors"
                >
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center mt-0.5">
                    <Icon className="h-4 w-4 text-cyan-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-navy-deep">{title}</div>
                    <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">{body}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
