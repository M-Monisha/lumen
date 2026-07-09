export type Industry = {
  slug: string;
  title: string;
  icon: string;
  tagline: string;
  body: string;
  brands: string[];
  cover: string;
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "data-centre",
    title: "Data Centre & Co-Lo",
    icon: "🏢",
    tagline: "Infrastructure that keeps hyperscalers and edge facilities running.",
    cover: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
    body: "Hyperscalers and edge facilities run on uptime. We supply the passive infrastructure that keeps them running — structured cabling and connectors, racks and cabinets, wire management, and ITMS power & cooling solutions from CommScope, Vertiv, Panduit, and Netrack. Our test and measurement range (Fluke Networks, NetAlly) lets your technical teams certify and troubleshoot every link before it goes live.",
    brands: ["CommScope", "Vertiv", "Panduit", "Netrack", "Fluke Networks", "NetAlly"],
  },
  {
    slug: "enterprise",
    title: "Enterprise",
    icon: "🏦",
    tagline: "Security, connectivity, and workflow tools — from one supply chain.",
    cover: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    body: "From smart buildings to BFSI back-offices, enterprises need security, connectivity, and workflow tools working together. We bring access control, intrusion and fire alarm systems, and video surveillance (Honeywell, Axis, Hanwha Vision) alongside network infrastructure and business productivity devices — barcode scanners, mobile computers, and POS systems from Zebra and Honeywell — so operations and security run on the same trusted supply chain.",
    brands: ["Honeywell", "Axis Communications", "Hanwha Vision", "Zebra Technologies"],
  },
  {
    slug: "transport-warehousing",
    title: "Transport, Warehousing & Logistics",
    icon: "🚛",
    tagline: "Rugged devices that don't fail mid-shift.",
    cover: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80",
    body: "Warehouse management and fleet operations depend on devices that don't fail mid-shift. We distribute rugged mobile computers, RFID readers, barcode scanners and printers (Zebra, Honeywell, Sunmi) built for high-throughput WMS environments, backed by pan-India stock and RMA support so a broken scanner doesn't stall a shipment.",
    brands: ["Zebra Technologies", "Honeywell Productivity", "SUNMI"],
  },
  {
    slug: "retail",
    title: "Retail",
    icon: "🛒",
    tagline: "Fast checkout and loss prevention — from one distributor.",
    cover: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    body: "Retail runs on two things: fast checkout and loss prevention. We supply POS devices, barcode scanners and printers for the counter, plus Checkpoint's EAS and Honeywell/Axis video surveillance for the floor — giving large and regional format retailers both ends of the operation from one distributor.",
    brands: ["Checkpoint Systems", "Honeywell", "Axis Communications", "Zebra Technologies", "SUNMI"],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    icon: "🏭",
    tagline: "Measure before you automate.",
    cover: "https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=1200&q=80",
    body: "Smart factories need to measure before they can automate. Our test and measurement range — multimeters, clamp meters, thermal imagers, insulation resistance testers from Megger, FLIR, Fluke, and Extech — supports commissioning and maintenance teams, while our network and safety portfolio covers plant connectivity and IoT-based building management.",
    brands: ["Megger", "Teledyne FLIR", "Fluke", "Extech", "75F"],
  },
  {
    slug: "power",
    title: "Power",
    icon: "⚡",
    tagline: "Tools that keep power infrastructure inspection-ready and compliant.",
    cover: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80",
    body: "Generation, transmission, and distribution utilities need instruments built for field conditions. We're an authorized distributor for Megger and Fluke's insulation resistance testers, clamp meters, and residual current device testers — the tools that keep power infrastructure inspection-ready and compliant.",
    brands: ["Megger", "Fluke"],
  },
  {
    slug: "defense",
    title: "Defense",
    icon: "🛡️",
    tagline: "Perimeter security where compromise isn't an option.",
    cover: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&q=80",
    body: "Secure infrastructure needs surveillance and tracking that won't compromise. We supply video surveillance and analytics, intrusion detection, access control, and drones/UAS (ideaForge, Axis, Motorola Solutions) for installations where perimeter security is non-negotiable.",
    brands: ["ideaForge", "Axis Communications", "Motorola Solutions"],
  },
  {
    slug: "public-infrastructure",
    title: "Public Infrastructure",
    icon: "🌆",
    tagline: "Government-scale rollouts with local execution across 20 branches.",
    cover: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80",
    body: "Airports, government facilities, and smart city projects combine every category we carry: video surveillance and analytics, fire alarm and public address systems, access control, and drones for aerial monitoring — deployed and supported across our 20-branch, pan-India network so government-scale rollouts get local execution.",
    brands: ["Axis Communications", "Honeywell", "ideaForge", "Motorola Solutions"],
  },
];
