import { createFileRoute } from "@tanstack/react-router";
import salonThrissur from "@/assets/salon-thrissur.png.asset.json";
import { SalonLocationPage } from "@/components/SalonLocationPage";

export const Route = createFileRoute("/locations/thrissur")({
  head: () => ({
    meta: [
      { title: "Thrissur Salon — JLD Kerala" },
      { name: "description", content: "Visit the Jean Louis David salon in Thrissur, Kerala. Find the location and plan your appointment." },
      { property: "og:title", content: "Thrissur Salon — JLD Kerala" },
      { property: "og:description", content: "Visit the Jean Louis David salon in Thrissur, Kerala." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ThrissurSalon,
});

function ThrissurSalon() {
  return (
    <SalonLocationPage
      title="Thrissur"
      region="Kerala"
      image={salonThrissur.url}
      imageAlt="Jean Louis David salon interior in Thrissur, Kerala"
      address={<>Jean Louis David Hair Salon,<br />Thrissur, Kerala</>}
      mapUrl="https://share.google/yDJ1NFEvE7AK9kA5P"
      mapEmbedUrl="https://maps.google.com/maps?q=Jean+Louis+David+Salon+Thrissur+Kerala&hl=en&z=16&output=embed"
    />
  );
}