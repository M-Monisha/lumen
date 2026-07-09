import { useState } from "react";
import { ArrowRight, Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { PVLogo } from "./Logo";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204103_f607742e-09da-4cf5-bb06-4e67b0a531de.mp4";

const NAV_LINKS = [
  { label: "Brands",    to: "/brands" as const,   isRoute: true  },
  { label: "Solutions", to: "#solutions",          isRoute: false },
  { label: "About",     to: "/about" as const,     isRoute: true  },
  { label: "Blog",      to: "/blog" as const,      isRoute: true  },
  { label: "News",      to: "/news" as const,      isRoute: true  },
  { label: "Contact",   to: "/contact" as const,   isRoute: true  },
];

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section id="top" className="relative w-full overflow-hidden" style={{ height: "100svh" }}>
      {/* ── Video background ── */}
      <video
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: "cover", objectPosition: "center center", minWidth: "100%", minHeight: "100%" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* ── Content layer ── */}
      <div className="relative z-10 flex flex-col h-full">

        {/* ── Navbar ── */}
        <nav className="flex items-center justify-between px-6 md:px-12 lg:px-16 py-5 md:py-6">
          {/* Left: logo + desktop links */}
          <div className="flex items-center gap-10">
            <a href="#top" className="flex items-center gap-2 shrink-0">
              <PVLogo className="h-16 w-16" />
              <span className="text-white font-semibold text-lg tracking-tight font-sans">PV LUMENS</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                link.isRoute
                  ? <Link key={link.label} to={link.to as "/brands" | "/about" | "/contact" | "/blog" | "/news"} className="text-white/75 hover:text-white text-sm font-light transition-colors duration-200">{link.label}</Link>
                  : <a key={link.label} href={link.to} target={link.to.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="text-white/75 hover:text-white text-sm font-light transition-colors duration-200">{link.label}</a>
              ))}
            </div>
          </div>

          {/* Right: hamburger only on mobile */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:info@pvlumens.com"
              className="hidden md:inline text-white/75 hover:text-white text-sm font-light transition-colors duration-200"
            >
              Reach Out
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden flex flex-col gap-1.5 p-1"
              aria-label="Open menu"
            >
              <span
                style={{ transition: "transform 500ms cubic-bezier(0.76,0,0.24,1), opacity 500ms" }}
                className="block h-0.5 w-6 bg-white rounded-full"
              />
              <span
                style={{ transition: "transform 500ms cubic-bezier(0.76,0,0.24,1), opacity 500ms" }}
                className="block h-0.5 w-4 bg-white rounded-full"
              />
              <span
                style={{ transition: "transform 500ms cubic-bezier(0.76,0,0.24,1), opacity 500ms" }}
                className="block h-0.5 w-6 bg-white rounded-full"
              />
            </button>
          </div>
        </nav>

        {/* ── Hero Content ── */}
        <div className="flex-1 flex flex-col items-center justify-start pt-4 sm:pt-6 md:pt-10 lg:pt-14 px-6 text-center">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            className="text-white leading-[1.08] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-5xl"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            Empowering Industry{" "}
            <em className="not-italic" style={{ fontStyle: "italic" }}>Excellence</em>
            <br />
            Through{" "}
            <em style={{ fontStyle: "italic" }}>Nationwide</em>{" "}
            Technology Distribution.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-5 text-white/70 text-sm md:text-base font-light max-w-md leading-relaxed"
          >
            India's trusted value-added distributor — connecting 2,000+ channel partners with 25+ global technology leaders, with reach extending across Sri Lanka, Bangladesh, Nepal & the Maldives.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-7 flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="#brands"
              className="group inline-flex items-center gap-2 bg-white text-black rounded-full px-7 py-3 text-sm font-medium hover:bg-white/90 transition"
            >
              Explore Ecosystem
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/40 text-white rounded-full px-7 py-3 text-sm font-medium hover:bg-white/10 hover:border-white/60 transition"
            >
              <Play className="h-4 w-4" />
              Book a Conversation
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 md:hidden bg-black/90 backdrop-blur-xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5">
            <div className="flex items-center gap-2">
              <PVLogo className="h-10 w-10" />
              <span className="text-white font-semibold text-lg tracking-tight">PV LUMENS</span>
            </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="relative h-8 w-8 flex items-center justify-center"
                aria-label="Close menu"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 flex flex-col justify-center px-8">
              {NAV_LINKS.map((link, i) => (
                link.isRoute
                  ? <Link key={link.label} to={link.to as "/brands" | "/about" | "/contact"} onClick={() => setMenuOpen(false)}
                      className="border-b border-white/10 py-4 text-white transition-all duration-300 hover:pl-4 block"
                      style={{ fontFamily: '"Instrument Serif", Georgia, serif', fontSize: "clamp(2rem, 8vw, 3rem)" }}
                    >{link.label}</Link>
                  : <motion.a key={link.label} href={link.to} onClick={() => setMenuOpen(false)}
                      initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.15 + i * 0.08, ease: [0.76, 0, 0.24, 1] }}
                      className="border-b border-white/10 py-4 text-white transition-all duration-300 hover:pl-4"
                      style={{ fontFamily: '"Instrument Serif", Georgia, serif', fontSize: "clamp(2rem, 8vw, 3rem)" }}
                    >{link.label}</motion.a>
              ))}
            </nav>

            {/* Footer CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="px-8 pb-10"
            >
              <Link
                to="/contact"
                className="block w-full text-center border border-white/20 text-white rounded-full py-4 text-sm font-medium hover:bg-white/10 transition"
              >
                Reach Out
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
