import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [{ title: "Blog — PV Lumens India" }] }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center py-24">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-navy-deep text-sm mb-12 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="w-16 h-16 rounded-2xl bg-sky-50 border-2 border-sky-200 flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl">✍️</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-navy-deep mb-4">Blog</h1>
          <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-full px-4 py-1.5 text-sm font-semibold text-cyan-600 mb-6">
            Coming Soon
          </div>
          <p className="text-slate-500 text-base max-w-md leading-relaxed">
            Insights, updates, and stories from the world of technology distribution. Coming soon.
          </p>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
