import { createFileRoute } from "@tanstack/react-router";
import salonCoimbatore from "@/assets/salon-coimbatore.png.asset.json";
import { SalonLocationPage } from "@/components/SalonLocationPage";

export const Route = createFileRoute("/locations/coimbatore")({
  head: () => ({
    meta: [
      { title: "Coimbatore Salon — JLD" },
      { name: "description", content: "Discover the Jean Louis David salon in Coimbatore." },
      { property: "og:title", content: "Coimbatore Salon — JLD" },
      { property: "og:description", content: "Discover the Jean Louis David salon in Coimbatore." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CoimbatoreSalon,
});

function CoimbatoreSalon() {
  return (
    <SalonLocationPage
      title="Coimbatore"
      region="Tamil Nadu"
      image={salonCoimbatore.url}
      imageAlt="Jean Louis David salon interior in Coimbatore"
    />
  );
}