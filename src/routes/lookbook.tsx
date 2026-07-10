import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/lookbook")({
  head: () => ({
    meta: [
      { title: "Lookbook — JLD" },
      { name: "description", content: "Explore signature JLD looks — coupes femme, hommes, gloss, contrast & sunlight, curly, 2 en 1, and sculpted low styles." },
      { property: "og:title", content: "Lookbook — JLD" },
      { property: "og:description", content: "A curated gallery of signature looks across every texture, length, and tone." },
    ],
  }),
  component: Lookbook,
});

type Category = { key: string; label: string; french: string; blurb: string; images: string[] };

const CATEGORIES: Category[] = [
  {
    key: "coupes-femme",
    label: "Women's Cuts",
    french: "Coupes Femme",
    blurb: "Signature editorial silhouettes — bobs, layers, French carrés, and architectural lobs.",
    images: [
      "/lookbook/coupes-femme/coupes-femme-001.jpg",
      "/lookbook/coupes-femme/coupes-femme-002.jpg",
      "/lookbook/coupes-femme/coupes-femme-003.jpg",
      "/lookbook/coupes-femme/coupes-femme-004.jpg",
      "/lookbook/coupes-femme/coupes-femme-005.jpg",
      "/lookbook/coupes-femme/coupes-femme-006.jpg",
      "/lookbook/coupes-femme/coupes-femme-007.jpg",
      "/lookbook/coupes-femme/coupes-femme-008.jpg",
      "/lookbook/coupes-femme/coupes-femme-009.jpg",
      "/lookbook/coupes-femme/coupes-femme-010.jpg",
      "/lookbook/coupes-femme/coupes-femme-011.jpg",
      "/lookbook/coupes-femme/coupes-femme-012.jpg",
      "/lookbook/coupes-femme/coupes-femme-013.jpg",
      "/lookbook/coupes-femme/coupes-femme-014.jpg",
      "/lookbook/coupes-femme/coupes-femme-015.jpg",
      "/lookbook/coupes-femme/coupes-femme-016.jpg",
      "/lookbook/coupes-femme/coupes-femme-017.jpg",
      "/lookbook/coupes-femme/coupes-femme-018.jpg",
      "/lookbook/coupes-femme/coupes-femme-019.jpg",
      "/lookbook/coupes-femme/coupes-femme-020.jpg",
      "/lookbook/coupes-femme/coupes-femme-021.jpg",
      "/lookbook/coupes-femme/coupes-femme-022.jpg",
      "/lookbook/coupes-femme/coupes-femme-023.jpg",
      "/lookbook/coupes-femme/coupes-femme-024.jpg",
      "/lookbook/coupes-femme/coupes-femme-025.jpg",
      "/lookbook/coupes-femme/coupes-femme-026.jpg",
      "/lookbook/coupes-femme/coupes-femme-027.jpg",
      "/lookbook/coupes-femme/coupes-femme-028.jpg",
      "/lookbook/coupes-femme/coupes-femme-029.jpg",
      "/lookbook/coupes-femme/coupes-femme-030.jpg",
      "/lookbook/coupes-femme/coupes-femme-031.jpg",
      "/lookbook/coupes-femme/coupes-femme-032.jpg",
      "/lookbook/coupes-femme/coupes-femme-033.jpg",
      "/lookbook/coupes-femme/coupes-femme-034.png",
      "/lookbook/coupes-femme/coupes-femme-035.jpg",
      "/lookbook/coupes-femme/coupes-femme-036.jpg",
      "/lookbook/coupes-femme/coupes-femme-037.jpg",
      "/lookbook/coupes-femme/coupes-femme-038.jpg",
      "/lookbook/coupes-femme/coupes-femme-039.jpg",
      "/lookbook/coupes-femme/coupes-femme-040.jpg",
      "/lookbook/coupes-femme/coupes-femme-041.jpg",
      "/lookbook/coupes-femme/coupes-femme-042.jpg",
      "/lookbook/coupes-femme/coupes-femme-043.png",
      "/lookbook/coupes-femme/coupes-femme-044.png",
      "/lookbook/coupes-femme/coupes-femme-045.png",
      "/lookbook/coupes-femme/coupes-femme-046.png",
      "/lookbook/coupes-femme/coupes-femme-047.png",
      "/lookbook/coupes-femme/coupes-femme-048.png",
      "/lookbook/coupes-femme/coupes-femme-049.png",
      "/lookbook/coupes-femme/coupes-femme-050.png",
      "/lookbook/coupes-femme/coupes-femme-051.png",
      "/lookbook/coupes-femme/coupes-femme-052.png",
      "/lookbook/coupes-femme/coupes-femme-053.png",
      "/lookbook/coupes-femme/coupes-femme-054.png",
      "/lookbook/coupes-femme/coupes-femme-055.png",
      "/lookbook/coupes-femme/coupes-femme-056.png",
      "/lookbook/coupes-femme/coupes-femme-057.png",
      "/lookbook/coupes-femme/coupes-femme-058.png",
    ],
  },
  {
    key: "hommes",
    label: "Men's Grooming",
    french: "Hommes",
    blurb: "Sharp tapers, textured crops, classic side parts, and editorial men's styling.",
    images: [
      "/lookbook/hommes/hommes-001.jpg",
      "/lookbook/hommes/hommes-002.jpg",
      "/lookbook/hommes/hommes-003.jpg",
      "/lookbook/hommes/hommes-004.jpg",
      "/lookbook/hommes/hommes-005.jpg",
      "/lookbook/hommes/hommes-006.jpg",
      "/lookbook/hommes/hommes-007.jpg",
      "/lookbook/hommes/hommes-008.jpg",
      "/lookbook/hommes/hommes-009.jpg",
      "/lookbook/hommes/hommes-010.jpg",
      "/lookbook/hommes/hommes-011.jpg",
      "/lookbook/hommes/hommes-012.jpg",
      "/lookbook/hommes/hommes-013.jpg",
      "/lookbook/hommes/hommes-014.jpg",
      "/lookbook/hommes/hommes-015.jpg",
      "/lookbook/hommes/hommes-016.jpg",
      "/lookbook/hommes/hommes-017.jpg",
      "/lookbook/hommes/hommes-018.jpg",
      "/lookbook/hommes/hommes-019.jpg",
      "/lookbook/hommes/hommes-020.jpg",
      "/lookbook/hommes/hommes-021.jpg",
      "/lookbook/hommes/hommes-022.jpg",
      "/lookbook/hommes/hommes-023.jpg",
      "/lookbook/hommes/hommes-024.jpg",
      "/lookbook/hommes/hommes-025.jpg",
      "/lookbook/hommes/hommes-026.jpg",
      "/lookbook/hommes/hommes-027.jpg",
      "/lookbook/hommes/hommes-028.jpg",
      "/lookbook/hommes/hommes-029.jpg",
      "/lookbook/hommes/hommes-030.png",
      "/lookbook/hommes/hommes-031.png",
      "/lookbook/hommes/hommes-032.png",
      "/lookbook/hommes/hommes-033.png",
      "/lookbook/hommes/hommes-034.png",
      "/lookbook/hommes/hommes-035.png",
      "/lookbook/hommes/hommes-036.png",
      "/lookbook/hommes/hommes-037.png",
    ],
  },
  {
    key: "gloss",
    label: "Colour & Gloss",
    french: "Gloss",
    blurb: "Glass-finish glosses and luminous, dimensional colour.",
    images: [
      "/lookbook/gloss/gloss-001.jpg",
      "/lookbook/gloss/gloss-002.jpg",
      "/lookbook/gloss/gloss-003.jpg",
      "/lookbook/gloss/gloss-004.jpg",
      "/lookbook/gloss/gloss-005.jpg",
      "/lookbook/gloss/gloss-006.jpg",
    ],
  },
  {
    key: "contrast-sunlight",
    label: "Contrast & Sunlight",
    french: "Contrast Sunlight",
    blurb: "Hand-painted balayage, money-piece contrasts, and sun-kissed lights.",
    images: [
      "/lookbook/contrast-sunlight/contrast-sunlight-001.jpg",
      "/lookbook/contrast-sunlight/contrast-sunlight-002.jpg",
      "/lookbook/contrast-sunlight/contrast-sunlight-003.jpg",
      "/lookbook/contrast-sunlight/contrast-sunlight-004.jpg",
      "/lookbook/contrast-sunlight/contrast-sunlight-005.jpg",
      "/lookbook/contrast-sunlight/contrast-sunlight-006.jpg",
      "/lookbook/contrast-sunlight/contrast-sunlight-007.jpg",
      "/lookbook/contrast-sunlight/contrast-sunlight-008.jpg",
      "/lookbook/contrast-sunlight/contrast-sunlight-009.jpg",
      "/lookbook/contrast-sunlight/contrast-sunlight-010.jpg",
      "/lookbook/contrast-sunlight/contrast-sunlight-011.jpg",
      "/lookbook/contrast-sunlight/contrast-sunlight-012.jpg",
      "/lookbook/contrast-sunlight/contrast-sunlight-013.jpg",
      "/lookbook/contrast-sunlight/contrast-sunlight-014.png",
      "/lookbook/contrast-sunlight/contrast-sunlight-015.jpg",
      "/lookbook/contrast-sunlight/contrast-sunlight-016.jpg",
      "/lookbook/contrast-sunlight/contrast-sunlight-017.jpg",
      "/lookbook/contrast-sunlight/contrast-sunlight-018.jpg",
      "/lookbook/contrast-sunlight/contrast-sunlight-019.jpg",
      "/lookbook/contrast-sunlight/contrast-sunlight-020.jpg",
      "/lookbook/contrast-sunlight/contrast-sunlight-021.jpg",
      "/lookbook/contrast-sunlight/contrast-sunlight-022.jpg",
      "/lookbook/contrast-sunlight/contrast-sunlight-023.jpg",
      "/lookbook/contrast-sunlight/contrast-sunlight-024.jpg",
      "/lookbook/contrast-sunlight/contrast-sunlight-025.jpg",
      "/lookbook/contrast-sunlight/contrast-sunlight-026.jpg",
      "/lookbook/contrast-sunlight/contrast-sunlight-027.jpg",
    ],
  },
  {
    key: "curly",
    label: "Curly & Coils",
    french: "Curly",
    blurb: "Definition cuts, finger coils, and treatments for spirals and waves.",
    images: [
      "/lookbook/curly/curly-001.jpg",
      "/lookbook/curly/curly-002.png",
      "/lookbook/curly/curly-003.jpg",
      "/lookbook/curly/curly-004.jpg",
      "/lookbook/curly/curly-005.png",
      "/lookbook/curly/curly-006.jpg",
      "/lookbook/curly/curly-007.jpg",
      "/lookbook/curly/curly-008.jpg",
      "/lookbook/curly/curly-009.jpg",
      "/lookbook/curly/curly-010.jpg",
      "/lookbook/curly/curly-011.png",
      "/lookbook/curly/curly-012.png",
      "/lookbook/curly/curly-013.png",
      "/lookbook/curly/curly-014.png",
      "/lookbook/curly/curly-015.png",
      "/lookbook/curly/curly-016.png",
      "/lookbook/curly/curly-017.png",
      "/lookbook/curly/curly-018.png",
      "/lookbook/curly/curly-019.png",
      "/lookbook/curly/curly-020.png",
      "/lookbook/curly/curly-021.png",
      "/lookbook/curly/curly-022.png",
      "/lookbook/curly/curly-023.png",
    ],
  },
  {
    key: "2en1",
    label: "Two-in-One",
    french: "2 en 1",
    blurb: "Cut-and-colour transformations designed to work in a single sitting.",
    images: [
      "/lookbook/2en1/2en1-001.jpg",
      "/lookbook/2en1/2en1-002.jpg",
      "/lookbook/2en1/2en1-003.jpg",
      "/lookbook/2en1/2en1-004.jpg",
      "/lookbook/2en1/2en1-005.jpg",
      "/lookbook/2en1/2en1-006.jpg",
      "/lookbook/2en1/2en1-007.jpg",
      "/lookbook/2en1/2en1-008.jpg",
    ],
  },
  {
    key: "bas",
    label: "Low & Sculpted",
    french: "BAS",
    blurb: "Low chignons, sculpted up-dos, and refined occasion styling.",
    images: [
      "/lookbook/bas/bas-001.jpg",
      "/lookbook/bas/bas-002.jpg",
      "/lookbook/bas/bas-003.jpg",
      "/lookbook/bas/bas-004.jpg",
      "/lookbook/bas/bas-005.jpg",
      "/lookbook/bas/bas-006.jpg",
      "/lookbook/bas/bas-007.jpg",
    ],
  },
];

function Lookbook() {
  const [active, setActive] = useState<string>(CATEGORIES[0].key);
  const current = CATEGORIES.find((c) => c.key === active) ?? CATEGORIES[0];
  return (
    <>
      <section className="bg-noir text-ivory pt-40 pb-20 md:pt-48 md:pb-28 border-b border-ivory/10">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="eyebrow !text-champagne mb-6">— The Lookbook</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02]">
            Every <em className="font-editorial italic text-champagne">texture</em>, every silhouette, every shade.
          </h1>
          <p className="mt-8 font-editorial text-xl md:text-2xl text-ivory/75 italic max-w-2xl">
            A library of signature work from our floor — to inspire your next chair, or your franchise\'s first campaign.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="flex flex-wrap gap-2 md:gap-3 mb-14 border-b border-noir/10 pb-6">
            {CATEGORIES.map((c) => {
              const isActive = c.key === active;
              return (
                <button
                  key={c.key}
                  onClick={() => setActive(c.key)}
                  className={`px-5 py-2.5 text-xs md:text-sm tracking-[0.2em] uppercase font-display transition-colors ${
                    isActive
                      ? "bg-noir text-ivory"
                      : "bg-transparent text-noir hover:bg-noir/5 border border-noir/20"
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-12 gap-10 mb-12 items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow !text-champagne mb-3">— {current.french}</p>
              <h2 className="font-display text-4xl md:text-5xl text-noir leading-[1.08]">
                {current.label}
              </h2>
            </div>
            <p className="lg:col-span-5 font-editorial text-lg text-brown leading-relaxed">
              {current.blurb}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {current.images.map((src, i) => (
              <figure
                key={`${current.key}-${i}`}
                className="relative overflow-hidden bg-beige group aspect-[3/4]"
              >
                <img
                  src={src}
                  alt={`${current.label} look ${i + 1}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-noir/80 to-transparent text-ivory text-xs tracking-[0.25em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  {current.label} · {String(i + 1).padStart(2, "0")}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-noir text-ivory py-24 md:py-32">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 text-center">
          <p className="eyebrow !text-champagne mb-6">— Book the Look</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Found a look? <em className="font-editorial italic text-champagne">Bring it to the chair.</em>
          </h2>
          <p className="mt-6 font-editorial text-lg md:text-xl text-ivory/75 max-w-2xl mx-auto">
            Our senior stylists tailor every reference to your face, your texture, and your life.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-gold">Book Appointment</Link>
            <Link to="/services" className="btn-ghost">See Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}

