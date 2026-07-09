import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Users, Globe, Award, Building2, Cpu } from "lucide-react";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About PV Lumens India — Distribution Redefined" },
      { name: "description", content: "For over three decades, PV Lumens has been the link between the world's leading technology brands and the businesses that run on them." },
    ],
  }),
  component: AboutPage,
});

const STATS = [
  { icon: Building2, value: "1989",   label: "Founded" },
  { icon: MapPin,    value: "20",     label: "Branches" },
  { icon: Globe,     value: "300+",   label: "Cities" },
  { icon: Users,     value: "2,000+", label: "Channel Partners" },
  { icon: Cpu,       value: "25+",    label: "Global Brands" },
  { icon: Award,     value: "120+",   label: "Team Members" },
];

const AWARDS = [
  { brand: "Zebra",               award: "APAC Distributor of the Year",          year: "2025" },
  { brand: "Vertiv",              award: "Excellence in New Vertical Expansion",   year: "2025" },
  { brand: "Megger",              award: "Euro Million Award",                     year: "2025" },
  { brand: "ICTB / BICSI",        award: "Distributor of the Year – India",        year: "FY 2025–26" },
  { brand: "Honeywell",           award: "Distributor of the Year – India",        year: "2025" },
  { brand: "Axis Communications", award: "Distributor of the Year – India",        year: "2024" },
];

const B = "https://www.pvlumens.com";
const AWARD_LOGOS: Record<string, string> = {
  "Zebra":               `${B}/images/clientIcon/Zebra.png`,
  "Vertiv":              `${B}/images/clientIcon/Vertiv-Logo.svg`,
  "Megger":              `${B}/images/clientIcon/Megger.png`,
  "ICTB / BICSI":        `${B}/images/clientIcon/Panduit-logo01.jpg`,
  "Honeywell":           `${B}/images/clientIcon/Honeywell%20-%20Freestanding%20Logo%20Red-EPS%20file.jpg`,
  "Axis Communications": `${B}/images/clientIcon/Axis_logo.png`,
};

function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <div className="relative overflow-hidden bg-navy-deep text-white">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, rgba(56,189,248,0.6) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-deep" />

        <div className="relative max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 pt-12 pb-20">
          <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-10 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-4">Since 1989</p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] max-w-3xl"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
            >
              India's Distribution Backbone<br />
              for Technology That{" "}
              <em style={{ fontStyle: "italic" }} className="text-cyan-400">Matters</em>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="bg-white border-b border-sky-100">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-8">
          <motion.div
            className="grid grid-cols-3 sm:grid-cols-6 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <Icon className="h-5 w-5 text-cyan-500 mx-auto mb-1" />
                <div className="font-display text-xl sm:text-2xl font-bold text-navy-deep">{value}</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-400 mt-0.5 leading-tight">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Main body copy ── */}
      <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-slate-600 text-base leading-relaxed"
        >
          <p>
            For over three decades, PV Lumens has been the link between the world's leading technology brands
            and the businesses that run on them. What started as a distribution business in 1989 has grown
            into a pan-India network of 20 branches covering 300+ cities — backed by a 120-strong team of
            sales, marketing, and technical pre-sales professionals who understand the products as well as
            the partners who sell them.
          </p>
          <p>
            Today, we carry 25+ global brands across five domains — network infrastructure, safety & security,
            business productivity, test & measurement, and drones — into the hands of 2,000+ channel
            partners: resellers, system integrators, contractors, and sub-distributors. Our reach extends
            beyond India into Sri Lanka, Bangladesh, Nepal, and the Maldives.
          </p>
          <p>
            Every branch runs live on SAP HANA, 24×7, with a CRM that tracks each lead from first contact
            to closed deal — so partners get consistent stock, pricing, and support no matter which city
            they're in. It's this combination of scale, technology, and hands-on channel support — led by
            promoters with 35+ years in distribution — that makes us more than a supplier.
          </p>
          <p className="text-navy-deep font-medium">
            We're the infrastructure our partners build their businesses on.
          </p>
        </motion.div>

        {/* Countries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-2"
        >
          {["India", "Sri Lanka", "Bangladesh", "Nepal", "Maldives"].map(c => (
            <span key={c} className="px-4 py-1.5 rounded-full border-2 border-sky-200 bg-sky-50 text-navy-deep text-xs font-semibold">
              {c}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── Awards ── */}
      <div className="border-t border-sky-100 bg-sky-50/40">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-600 font-semibold mb-2">Recognized by the Brands We Represent</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy-deep mb-3">
              Awards & Recognition
            </h2>
            <p className="text-slate-500 text-sm mb-10 max-w-xl">
              Our partners' recognition speaks louder than our own — here's what six of them said this year.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {AWARDS.map((a, i) => (
                <motion.div
                  key={a.brand}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="bg-white rounded-2xl border-2 border-sky-100 hover:border-sky-300 p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-all"
                >
                  {/* Brand logo */}
                  <div className="h-10 flex items-center">
                    <img
                      src={AWARD_LOGOS[a.brand]}
                      alt={a.brand}
                      className="max-h-full max-w-[120px] object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        if (e.currentTarget.parentElement)
                          e.currentTarget.parentElement.innerHTML = `<span class="text-navy-deep font-bold text-sm">${a.brand}</span>`;
                      }}
                    />
                  </div>
                  {/* Award name */}
                  <p className="text-navy-deep font-semibold text-sm leading-snug">{a.award}</p>
                  {/* Year */}
                  <span className="self-start text-xs font-bold text-cyan-600 bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-full">
                    {a.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-2xl sm:text-3xl text-navy-deep leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            "Thirty-five years in, we're still doing what we started with: making sure the right technology reaches the right hands."
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/brands" className="inline-flex items-center gap-2 bg-navy-deep text-white rounded-full px-7 py-3 text-sm font-medium hover:bg-navy transition">
              Explore Our Brands
            </Link>
            <a href="mailto:info@pvlumens.com" className="inline-flex items-center gap-2 border-2 border-sky-200 text-navy-deep rounded-full px-7 py-3 text-sm font-medium hover:border-sky-400 hover:bg-sky-50 transition">
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
