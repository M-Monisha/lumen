import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { BrandsCube } from "@/components/landing/BrandsCube";
import { Industries } from "@/components/landing/Industries";
import { Solutions } from "@/components/landing/Solutions";
import { StatsWhy } from "@/components/landing/StatsWhy";
import { EWasteCallout } from "@/components/landing/EWasteCallout";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { useLenis } from "@/hooks/useLenis";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PV Lumens India — Technology Distribution Partner Since 1989" },
      {
        name: "description",
        content:
          "India's trusted value-added distributor. 2,500+ channel partners, 25+ global brands across network infrastructure, safety & security, and test & measurement.",
      },
      { property: "og:title", content: "PV Lumens India — Technology Distribution Partner Since 1989" },
      {
        property: "og:description",
        content:
          "India's trusted value-added distributor. 2,500+ channel partners, 25+ global brands across network infrastructure, safety & security, and test & measurement.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.pvlumens.com/images/pvLogo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://www.pvlumens.com/images/pvLogo.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "PV Lumens India Pvt Ltd",
          url: "https://www.pvlumens.com/",
          logo: "https://www.pvlumens.com/images/pvLogo.png",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Times Tower, 8th Floor, Kamla Mill, Lower Parel",
            addressLocality: "Mumbai",
            postalCode: "400013",
            addressCountry: "IN",
          },
          telephone: "+91-22-4170-0000",
          email: "info@pvlumens.com",
          foundingDate: "1989",
        }),
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  useLenis();
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <BrandsCube />
        <Industries />
        <Solutions />
        <StatsWhy />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
