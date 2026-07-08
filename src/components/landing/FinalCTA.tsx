import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative bg-navy-deep text-white overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-60 bg-[radial-gradient(ellipse_at_center,oklch(0.35_0.15_240),transparent_60%)]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 lg:py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold leading-tight">
            Want to <span className="text-gradient-cyan">Know More?</span>
          </h2>
          <p className="mt-2 text-sm text-white/70 max-w-xl leading-relaxed">
            Let&apos;s talk about how PV Lumens can support your business with the right technology and the right partner.
          </p>
        </div>
        <a
          href="mailto:info@pvlumens.com?subject=Book%20a%20Conversation"
          className="group shrink-0 inline-flex items-center gap-2 rounded-full bg-white text-navy-deep px-6 py-3 text-sm font-semibold hover:bg-ice transition"
        >
          Book a Conversation
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
