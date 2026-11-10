import { createFileRoute } from "@tanstack/react-router";
import hsrExterior from "@/assets/jld-hsr-exterior.png.asset.json";
import { SalonLocationPage } from "@/components/SalonLocationPage";

export const Route = createFileRoute("/locations/hsr-layout")({
  head: () => ({
    meta: [
      { title: "HSR Layout Salon — JLD Bengaluru" },
      { name: "description", content: "Visit Jean Louis David at HSR Layout, Bengaluru. Find the salon address and plan your appointment." },
      { property: "og:title", content: "HSR Layout Salon — JLD Bengaluru" },
      { property: "og:description", content: "Visit Jean Louis David at HSR Layout, Bengaluru." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HsrLayoutSalon,
});

function HsrLayoutSalon() {
  return (
    <SalonLocationPage
      title="HSR Layout"
      region="Bengaluru, Karnataka"
      image={hsrExterior.url}
      imageAlt="Jean Louis David salon exterior at HSR Layout, Bengaluru"
      address={<>Site No 2026, 1st Sector, 5th Cross,<br />27th Main Road, HSR Layout,<br />Bengaluru, Karnataka 560102</>}
      mapUrl="https://maps.google.com/maps?q=Jean+Louis+David+Hair+Salon+HSR+Layout&ll=12.9140875,77.6517165&hl=en&z=18"
    />
  );
}