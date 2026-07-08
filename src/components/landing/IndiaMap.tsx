import { useEffect, useRef } from "react";

// City dots — as % of image dimensions (so they scale with the image)
// These are tuned for a standard India outline map image
const CITIES = [
  { name: "Mumbai",         px: 29, py: 60 },
  { name: "Delhi",          px: 45, py: 29 },
  { name: "Bangalore",      px: 40, py: 76 },
  { name: "Chennai",        px: 50, py: 78 },
  { name: "Hyderabad",      px: 46, py: 67 },
  { name: "Pune",           px: 32, py: 63 },
  { name: "Kolkata",        px: 71, py: 52 },
  { name: "Ahmedabad",      px: 26, py: 50 },
  { name: "Surat",          px: 27, py: 55 },
  { name: "Jaipur",         px: 40, py: 36 },
  { name: "Lucknow",        px: 54, py: 35 },
  { name: "Bhopal",         px: 45, py: 49 },
  { name: "Nagpur",         px: 50, py: 56 },
  { name: "Kochi",          px: 37, py: 86 },
  { name: "Chandigarh",     px: 44, py: 22 },
  { name: "Indore",         px: 40, py: 52 },
  { name: "Coimbatore",     px: 39, py: 82 },
  { name: "Visakhapatnam",  px: 59, py: 66 },
];

const LABELS = ["Mumbai", "Delhi", "Bangalore", "Kolkata", "Chennai", "Hyderabad"];

export function IndiaMap() {
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    let t = 0;
    const tick = () => {
      t += 0.04;
      dotRefs.current.forEach((el, i) => {
        if (!el) return;
        const ring = el.querySelector<HTMLDivElement>(".pulse-ring");
        if (ring) {
          const phase = (t + i * 0.6) % (Math.PI * 2);
          const p = phase / (Math.PI * 2);
          const size = 8 + p * 20;
          const op = 0.7 - p * 0.7;
          ring.style.width = `${size}px`;
          ring.style.height = `${size}px`;
          ring.style.opacity = String(op);
          ring.style.transform = `translate(-50%, -50%)`;
        }
      });
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const hasImage = true; // flip to false if no image yet

  return (
    <div className="relative w-full max-w-xs mx-auto">
      {hasImage ? (
        <img
          src="/india-map.png"
          alt="India map"
          className="w-full h-auto"
          style={{ filter: "hue-rotate(190deg) saturate(0.6) brightness(1.1)" }}
        />
      ) : (
        /* Fallback placeholder until image is added */
        <div className="w-full aspect-[2/3] rounded-2xl bg-blue-50 border-2 border-blue-100 flex items-center justify-center text-blue-300 text-sm">
          Add india-map.png to /public
        </div>
      )}

      {/* City dots overlaid on the image */}
      {CITIES.map((city, i) => (
        <div
          key={city.name}
          ref={(el) => { dotRefs.current[i] = el; }}
          className="absolute"
          style={{ left: `${city.px}%`, top: `${city.py}%` }}
        >
          {/* Pulse ring */}
          <div
            className="pulse-ring absolute rounded-full border border-cyan-500"
            style={{ width: 8, height: 8, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
          />
          {/* Core dot */}
          <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_6px_rgba(6,182,212,0.8)] -translate-x-1/2 -translate-y-1/2" />
          {/* Label for major cities */}
          {LABELS.includes(city.name) && (
            <span
              className="absolute left-3 -top-1 text-[9px] font-medium text-cyan-700 whitespace-nowrap"
            >
              {city.name}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
