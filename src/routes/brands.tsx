import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowLeft, X, ExternalLink } from "lucide-react";
import { BRAND_DATA, type BrandFull } from "@/lib/brandData";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [{ title: "Our Brands — PV Lumens India" }],
  }),
  validateSearch: (search: Record<string, unknown>) => ({
    brand: (search.brand as string) ?? "",
  }),
  component: BrandsPage,
});

function BrandModal({ brand, onClose }: { brand: BrandFull; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        {/* Modal */}
        <motion.div
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/90 border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition"
          >
            <X className="h-4 w-4 text-gray-600" />
          </button>

          {/* Logo header */}
          <div className="bg-gradient-to-br from-sky-50 to-white border-b border-sky-100 p-8 flex items-center gap-6 rounded-t-2xl">
            <div className="w-28 h-16 bg-white rounded-xl border-2 border-sky-100 flex items-center justify-center p-3 shadow-sm shrink-0">
              <img src={brand.logo} alt={brand.name} className="max-w-full max-h-full object-contain" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-cyan-600 font-semibold">{brand.category}</span>
              <h2 className="font-display text-2xl font-semibold text-navy-deep mt-0.5">{brand.name}</h2>
              <p className="text-slate-400 text-sm mt-0.5">{brand.tagline}</p>
            </div>
          </div>

          {/* Body */}
          <div className="p-8">
            <h3 className="font-display text-base font-semibold text-navy-deep mb-3">About {brand.name}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{brand.about}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={brand.website}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-navy-deep text-white rounded-full px-5 py-2.5 text-sm font-medium hover:bg-navy transition"
              >
                Visit Website <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href="mailto:info@pvlumens.com?subject=Brand%20Enquiry"
                className="inline-flex items-center gap-2 border-2 border-sky-200 text-navy-deep rounded-full px-5 py-2.5 text-sm font-medium hover:border-sky-400 hover:bg-sky-50 transition"
              >
                Enquire via PV Lumens
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function BrandsPage() {
  const { brand: brandParam } = useSearch({ from: "/brands" });
  const [selected, setSelected] = useState<BrandFull | null>(null);

  // Auto-open modal if ?brand= param is present
  useEffect(() => {
    if (brandParam) {
      const decoded = decodeURIComponent(brandParam);
      // Try exact match first, then partial/fuzzy match
      const found = BRAND_DATA.find(b =>
        b.name === decoded ||
        b.name.toLowerCase() === decoded.toLowerCase() ||
        b.name.toLowerCase().includes(decoded.toLowerCase()) ||
        decoded.toLowerCase().includes(b.name.toLowerCase())
      );
      if (found) setSelected(found);
    }
  }, [brandParam]);

  return (
    <div className="min-h-screen bg-white">
      {/* Modal */}
      {selected && <BrandModal brand={selected} onClose={() => setSelected(null)} />}

      {/* Header */}
      <div className="bg-navy-deep text-white py-14 px-6 md:px-12 lg:px-16">
        <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold">
          Our <span className="text-cyan-400">Brand</span> Partners
        </h1>
        <p className="mt-4 text-white/60 max-w-xl text-sm leading-relaxed">
          Authorized distribution of 27 global technology brands. Click any brand to learn more.
        </p>
      </div>

      {/* Brands Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {BRAND_DATA.map((brand, i) => (
            <motion.button
              key={brand.name}
              onClick={() => setSelected(brand)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(56,189,248,0.18)" }}
              className="group bg-white border-[2.5px] border-sky-100 hover:border-sky-400 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 h-36 transition-all duration-300 cursor-pointer shadow-sm"
            >
              {/* Logo */}
              <div className="w-full h-14 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-full max-w-full object-contain transition-all duration-300"
                  onError={(e) => {
                    const t = e.currentTarget;
                    t.style.display = "none";
                    if (t.parentElement) {
                      t.parentElement.innerHTML = `<span class="text-navy-deep text-xs font-bold text-center px-2">${brand.name}</span>`;
                    }
                  }}
                />
              </div>
              {/* Name */}
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-navy-deep text-center leading-tight transition-colors line-clamp-2">
                {brand.name}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
