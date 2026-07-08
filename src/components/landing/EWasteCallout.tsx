import { Recycle, ArrowRight } from "lucide-react";

export function EWasteCallout() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-50 to-white p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
          <div className="flex items-start gap-5">
            <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white">
              <Recycle className="h-7 w-7" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold text-navy-deep">
                Responsible E-Waste Management
              </h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-xl leading-relaxed">
                Compliant collection and recycling for enterprise customers — sustainability that matches
                the scale of our distribution network.
              </p>
            </div>
          </div>
          <a
            href="https://www.pvlumens.com/E-Waste-Management"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 text-white px-5 py-2.5 text-sm font-medium hover:bg-emerald-700 transition shrink-0"
          >
            Learn more <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
