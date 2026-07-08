import { Linkedin, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { PVLogo } from "./Logo";

const SITEMAP = [
  ["Home", "#top"],
  ["About Us", "https://www.pvlumens.com/About-us"],
  ["Blog", "https://www.pvlumens.com/Blog"],
  ["News & Events", "https://www.pvlumens.com/News-Events"],
  ["E-Waste Management", "https://www.pvlumens.com/E-Waste-Management"],
  ["Media", "https://www.pvlumens.com/Media"],
  ["FAQ", "https://www.pvlumens.com/FAQ"],
  ["Contact Us", "mailto:info@pvlumens.com"],
  ["Downloads", "https://www.pvlumens.com/Downloads"],
];

export function Footer() {
  return (
    <footer id="footer" className="bg-white border-t border-gray-200 text-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">

          {/* Brand + contact */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3">
              <PVLogo className="h-10 w-10 shrink-0" />
              <div>
                <div className="font-display font-bold text-navy-deep text-sm tracking-wide">PV LUMENS INDIA PVT LTD</div>
                <div className="text-xs text-gray-400 mt-0.5">Value-added distribution · Since 1989</div>
              </div>
            </div>
            <div className="mt-4 space-y-1.5 text-xs text-gray-700">
              <div className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 mt-0.5 text-blue-500 shrink-0" />
                <span>Times Tower, 8th Floor, Kamla Mill, Lower Parel, Mumbai 400013</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                <a href="tel:+912241700000" className="hover:text-navy-deep transition-colors">+91 - 22 - 4170 0000</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                <a href="mailto:info@pvlumens.com" className="hover:text-navy-deep transition-colors">info@pvlumens.com</a>
              </div>
            </div>
          </div>

          {/* Sitemap */}
          <div className="flex-1 min-w-0">
            <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-3">Sitemap</div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1.5 text-xs">
              {SITEMAP.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-gray-800 font-medium hover:text-blue-600 transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="shrink-0">
            <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-3">Follow</div>
            <div className="flex gap-2">
              {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-blue-500 hover:bg-blue-50 transition"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-gray-400">
          <div className="text-[11px] text-gray-600">© {new Date().getFullYear()} PV Lumens India Pvt Ltd. All rights reserved.</div>
          <div className="text-[11px] text-gray-600">Designed for reliability. Built for scale.</div>
        </div>
      </div>
    </footer>
  );
}
