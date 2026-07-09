import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Tag } from "lucide-react";
import { INDUSTRIES } from "@/lib/industries";

export const Route = createFileRoute("/industries/$slug")({
  component: IndustryDetail,
});

const B = "https://www.pvlumens.com";
const BRAND_LOGOS: Record<string, string> = {
  "CommScope":            `/commscope.webp`,
  "Vertiv":               `${B}/images/clientIcon/Vertiv-Logo.svg`,
  "Panduit":              `${B}/images/clientIcon/Panduit-logo01.jpg`,
  "Netrack":              `${B}/images/clientIcon/logo.png`,
  "Fluke Networks":       `${B}/images/clientIcon/FNet_White_Blue_Box_RGB.JPG`,
  "NetAlly":              `${B}/images/clientIcon/netAlly.png`,
  "Honeywell":            `${B}/images/clientIcon/Honeywell%20-%20Freestanding%20Logo%20Red-EPS%20file.jpg`,
  "Axis Communications":  `${B}/images/clientIcon/Axis_logo.png`,
  "Hanwha Vision":        `${B}/images/clientIcon/Hanwha%20Logo%20-%20160px%20x%2050px.png`,
  "Zebra Technologies":   `${B}/images/clientIcon/Zebra.png`,
  "Honeywell Productivity":`${B}/images/clientIcon/Honeywell%20-%20Freestanding%20Logo%20Red-EPS%20file.jpg`,
  "SUNMI":                `${B}/images/clientIcon/Sunmi%20Logo%20-%20160px%20x%2050px.png`,
  "Checkpoint Systems":   `${B}/images/clientIcon/Checkpoint-Primary-Logo-Navy-2.png`,
  "Megger":               `${B}/images/clientIcon/Megger.png`,
  "Teledyne FLIR":        `${B}/images/clientIcon/TeledyneFLIR2.png`,
  "Fluke":                `${B}/images/clientIcon/FNet_White_Blue_Box_RGB.JPG`,
  "Extech":               `/extech.jpeg`,
  "75F":                  `${B}/images/clientIcon/Logo%20-%2075F_3.png`,
  "ideaForge":            `${B}/images/clientIcon/ideaForgLogo.png`,
  "Motorola Solutions":   `/motorola.webp`,
};

function IndustryDetail() {
  const { slug } = Route.useParams();
  const ind = INDUSTRIES.find(i => i.slug === slug);

  if (!ind) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h2 className="text-2xl font-display font-semibold text-navy-deep">Industry not found</h2>
        <Link to="/" className="mt-4 inline-block text-cyan-600 hover:underline">← Back to Home</Link>
      </div>
    </div>
  );

  // Other industries for footer
  const others = INDUSTRIES.filter(i => i.slug !== slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[300px] overflow-hidden">
        <img src={ind.cover} alt={ind.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        <div className="absolute top-6 left-6 sm:left-12">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm bg-black/30 backdrop-blur px-4 py-2 rounded-full transition">
            <ArrowLeft className="h-4 w-4" /> Home
          </Link>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 px-6 sm:px-12 lg:px-16 pb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[11px] uppercase tracking-widest bg-sky-400 text-navy-deep font-semibold px-3 py-1 rounded-full">
            Industries We Serve
          </span>
          <h1 className="text-white font-display text-3xl sm:text-4xl lg:text-5xl font-semibold mt-3">{ind.title}</h1>
          <p className="text-white/70 text-sm mt-1 max-w-lg">{ind.tagline}</p>
        </motion.div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-slate-600 leading-relaxed text-base">{ind.body}</p>

          {/* Brands we supply */}
          <div className="mt-10">
            <div className="flex items-center gap-3 mb-6">
              <Tag className="h-4 w-4 text-cyan-600" />
              <span className="text-xs uppercase tracking-widest text-cyan-600 font-semibold">Brands We Supply for This Industry</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {ind.brands.map(brand => (
                <div key={brand} className="bg-white border-2 border-sky-100 rounded-xl p-4 flex items-center justify-center h-16">
                  {BRAND_LOGOS[brand] ? (
                    <img
                      src={BRAND_LOGOS[brand]}
                      alt={brand}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        if (e.currentTarget.parentElement)
                          e.currentTarget.parentElement.innerHTML = `<span class="text-navy-deep text-xs font-bold text-center">${brand}</span>`;
                      }}
                    />
                  ) : (
                    <span className="text-navy-deep text-xs font-bold text-center">{brand}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:info@pvlumens.com?subject=Industry%20Enquiry"
              className="inline-flex items-center gap-2 bg-navy-deep text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-navy transition"
            >
              Speak to Our Team
            </a>
            <Link
              to="/brands"
              className="inline-flex items-center gap-2 border-2 border-sky-200 text-navy-deep rounded-full px-6 py-3 text-sm font-medium hover:border-sky-400 hover:bg-sky-50 transition"
            >
              Explore All Brands
            </Link>
          </div>
        </motion.div>

        {/* Other industries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14"
        >
          <h3 className="font-display text-xl font-semibold text-navy-deep mb-6">Other Industries We Serve</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {others.map(o => (
              <Link key={o.slug} to="/industries/$slug" params={{ slug: o.slug }}>
                <div className="group relative h-24 rounded-xl overflow-hidden border-2 border-sky-100 hover:border-sky-400 transition-all">
                  <img src={o.cover} alt={o.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-2">
                    <p className="text-white text-[11px] font-semibold leading-tight">{o.title}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
