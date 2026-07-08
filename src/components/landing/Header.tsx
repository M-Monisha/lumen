import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { PVLogo } from "./Logo";

const NAV = [
  { label: "Brands", href: "#brands" },
  { label: "Solutions", href: "#solutions" },
  { label: "Why Us", href: "#why" },
  { label: "Downloads", href: "#footer" },
  { label: "Contact", href: "mailto:info@pvlumens.com" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-4 shrink-0">
          <PVLogo className="h-16 w-16" />
          <span className="text-navy-deep font-display font-bold tracking-wide text-base sm:text-lg whitespace-nowrap">
            PV LUMENS INDIA PVT LTD
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-sm font-medium text-gray-700 hover:text-navy-deep transition-colors group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan-brand transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-gray-700 hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="px-4 py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-md text-sm text-gray-700 hover:bg-gray-100"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
