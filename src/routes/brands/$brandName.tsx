import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Tag } from "lucide-react";
import { BRAND_DATA } from "@/lib/brandData";

export const Route = createFileRoute("/brands/$brandName")({
  component: BrandDetail,
});

function BrandDetail() {
  const { brandName } = Route.useParams();
  const brand = BRAND_DATA.find(b => encodeURIComponent(b.name) === brandName);

  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-2xl font-display font-semibold text-navy-deep">Brand not found</h2>
          <Link to="/brands" className="mt-4 inline-block text-cyan-600 hover:underline">← Back to Brands</Link>
        </div>
      </div>
    );
  }

  // Related brands in same category
  const related = BRAND_DATA.filter(b => b.category === brand.category && b.name !== brand.name).slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero cover */}
      <div className="relative h-[55vh] min-h-[320px] overflow-hidden">
        <img src={brand.cover} alt={brand.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        {/* Back button */}
        <div className="absolute top-6 left-6 sm:left-12">
          <Link
            to="/brands"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm bg-black/30 backdrop-blur px-4 py-2 rounded-full transition"
          >
            <ArrowLeft className="h-4 w-4" /> All Brands
          </Link>
        </div>

        {/* Brand identity */}
        <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-12 lg:px-16 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <div className="w-24 h-14 bg-white rounded-xl flex items-center justify-center p-2 shadow-lg mb-4">
              <img src={brand.logo} alt={brand.name} className="max-w-full max-h-full object-contain" />
            </div>

            <div className="flex items-center gap-3 mb-2">
              <span className="text-[11px] uppercase tracking-widest bg-sky-400 text-navy-deep font-semibold px-3 py-1 rounded-full">
                {brand.category}
              </span>
            </div>

            <h1 className="text-white font-display text-3xl sm:text-4xl lg:text-5xl font-semibold">{brand.name}</h1>
            <p className="text-white/70 text-sm mt-1">{brand.tagline}</p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* About */}
          <div className="prose prose-slate max-w-none">
            <h2 className="font-display text-2xl font-semibold text-navy-deep mb-4">About {brand.name}</h2>
            <p className="text-slate-600 leading-relaxed text-base">{brand.about}</p>
          </div>

          {/* Visit website */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={brand.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-navy-deep text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-navy transition"
            >
              Visit Website <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="mailto:info@pvlumens.com?subject=Brand%20Enquiry"
              className="inline-flex items-center gap-2 border-2 border-sky-200 text-navy-deep rounded-full px-6 py-3 text-sm font-medium hover:border-sky-400 hover:bg-sky-50 transition"
            >
              Enquire via PV Lumens
            </a>
          </div>

          {/* Category info */}
          <div className="mt-10 p-5 rounded-2xl border-2 border-sky-100 bg-sky-50/50 flex items-center gap-3">
            <Tag className="h-5 w-5 text-cyan-600 shrink-0" />
            <div>
              <div className="text-xs uppercase tracking-widest text-cyan-600 font-semibold mb-0.5">Category</div>
              <div className="text-navy-deep font-medium text-sm">{brand.category}</div>
            </div>
          </div>
        </motion.div>

        {/* Related brands */}
        {related.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14"
          >
            <h3 className="font-display text-xl font-semibold text-navy-deep mb-6">
              More in <span className="text-cyan-500">{brand.category}</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {related.map(rel => (
                <Link key={rel.name} to="/brands/$brandName" params={{ brandName: encodeURIComponent(rel.name) }}>
                  <div className="group relative h-28 rounded-xl overflow-hidden border-2 border-sky-100 hover:border-sky-400 transition-all">
                    <img src={rel.cover} alt={rel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-2">
                      <div className="w-10 h-6 bg-white rounded flex items-center justify-center p-1 mb-1">
                        <img src={rel.logo} alt={rel.name} className="max-w-full max-h-full object-contain" />
                      </div>
                      <p className="text-white text-[11px] font-semibold leading-tight">{rel.name}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
