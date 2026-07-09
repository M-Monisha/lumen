import { Linkedin, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { PVLogo } from "./Logo";
import { Link } from "@tanstack/react-router";

const SITEMAP = [
  { label: "Home",          to: "/",          internal: true  },
  { label: "About",         to: "/about",     internal: true  },
  { label: "Brands",        to: "/brands",    internal: true  },
  { label: "Contact",       to: "/contact",   internal: true  },
  { label: "Blog",          to: "/blog",      internal: true  },
  { label: "News & Events", to: "/news",      internal: true  },
  { label: "FAQ",           to: "https://www.pvlumens.com/FAQ", internal: false },
];

export function Footer() {
  return (
    <footer id="footer" className="bg-white border-t border-gray-200 text-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

          {/* Brand + contact */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <PVLogo className="h-10 w-10 shrink-0" />
              <div>
                <div className="font-display font-bold text-navy-deep text-sm tracking-wide">PV LUMENS INDIA PVT LTD</div>
                <div className="text-xs text-gray-400 mt-0.5">Value-added distribution · Since 1989</div>
              </div>
            </div>
            <div className="space-y-1.5 text-xs text-gray-700">
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

          {/* Sitemap — single column */}
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-4">Sitemap</div>
            <ul className="flex flex-col gap-2 text-xs">
              {SITEMAP.map(({ label, to, internal }) => (
                <li key={label}>
                  {internal ? (
                    <Link to={to as "/"} className="text-gray-700 font-medium hover:text-blue-600 transition-colors">{label}</Link>
                  ) : (
                    <a href={to} className="text-gray-700 font-medium hover:text-blue-600 transition-colors">{label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-4">Follow Us</div>
            <div className="flex gap-2">
              {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social link"
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-gray-500">
          <div>© {new Date().getFullYear()} PV Lumens India Pvt Ltd. All rights reserved.</div>
          <div>Designed for reliability. Built for scale.</div>
        </div>
      </div>
    </footer>
  );
}
