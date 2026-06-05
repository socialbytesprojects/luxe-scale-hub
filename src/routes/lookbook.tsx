import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/lookbook")({
  head: () => ({
    meta: [
      { title: "Lookbook — Maison Noir" },
      { name: "description", content: "Explore the Maison Noir lookbook: signature women's cuts, men's grooming, curly and coily textures, gloss treatments, contrast highlights, and more." },
      { property: "og:title", content: "Lookbook — Maison Noir" },
      { property: "og:description", content: "A curated gallery of signature looks across every texture, length, and tone." },
    ],
  }),
  component: Lookbook,
});

const u = (id: string, w = 900) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

type Category = {
  key: string;
  label: string;
  french?: string;
  blurb: string;
  images: string[];
};

const CATEGORIES: Category[] = [
  {
    key: "women",
    label: "Women's Cuts",
    french: "Coupes Femme",
    blurb: "Signature editorial silhouettes — layered, blunt, French girl bobs and architectural lobs.",
    images: [
      u("1492106087820-71f1a00d2b11"),
      u("1521146764736-56c929d59c83"),
      u("1605497788044-5a32c7078486"),
      u("1554519515-242161756769"),
      u("1605980776566-0486c3ac7617"),
      u("1519699047748-de8e457a634e"),
    ],
  },
  {
    key: "men",
    label: "Men's Grooming",
    french: "Hommes",
    blurb: "Sharp tapers, textured crops, classic side parts, and editorial men's styling.",
    images: [
      u("1522336572468-97b06e8ef143"),
      u("1487412720507-e7ab37603c6f"),
      u("1503443207922-dff7d543fd0e"),
      u("1500648767791-00dcc994a43e"),
      u("1531123897727-8f129e1688ce"),
      u("1507003211169-0a1dd7228f2d"),
    ],
  },
  {
    key: "color",
    label: "Colour & Gloss",
    french: "Gloss",
    blurb: "Glass-finish glosses, dimensional tones, and luminous all-over colour.",
    images: [
      u("1560869713-7d0a29430803"),
      u("1580618672591-eb180b1a973f"),
      u("1595959183082-7b570b7e08e2"),
      u("1599842057874-37393e9342df"),
      u("1503951914875-452162b0f3f1"),
      u("1522337360788-8b13dee7a37e"),
    ],
  },
  {
    key: "highlights",
    label: "Contrast & Sunlight",
    french: "Contrast Sunlight",
    blurb: "Hand-painted balayage, money-piece highlights, and sun-kissed contrasts.",
    images: [
      u("1605980776566-0486c3ac7617"),
      u("1522383225653-ed111181a951"),
      u("1519415943484-9fa1873496d4"),
      u("1509783236416-c9ad59bae472"),
      u("1531746020798-e6953c6e8e04"),
      u("1572297982473-0ec53b48343d"),
    ],
  },
  {
    key: "curly",
    label: "Curly",
    french: "Curly",
    blurb: "Definition cuts and treatments for spirals, ringlets, and bouncy waves.",
    images: [
      u("1605497788044-5a32c7078486"),
      u("1607746882042-944635dfe10e"),
      u("1614283233556-f35b0c801ef1"),
      u("1531746020798-e6953c6e8e04"),
      u("1542596594-649edbc13630"),
      u("1519699047748-de8e457a634e"),
    ],
  },
  {
    key: "coily",
    label: "Coily & Textured",
    french: "Texture",
    blurb: "Sculpted afros, protective styles, and conditioning rituals for coily hair.",
    images: [
      u("1531123897727-8f129e1688ce"),
      u("1531123414780-f74242c2b052"),
      u("1531746790731-6c087fecd65a"),
      u("1508214751196-bcfd4ca60f91"),
      u("1581824283135-0666cf353f35"),
      u("1503443207922-dff7d543fd0e"),
    ],
  },
  {
    key: "straight",
    label: "Straight & Blowouts",
    french: "Bas",
    blurb: "Mirror-smooth blowouts, glass hair, and modern straight finishes.",
    images: [
      u("1521146764736-56c929d59c83"),
      u("1492106087820-71f1a00d2b11"),
      u("1554519515-242161756769"),
      u("1503951914875-452162b0f3f1"),
      u("1522337360788-8b13dee7a37e"),
      u("1492106087820-71f1a00d2b11"),
    ],
  },
  {
    key: "updos",
    label: "Updos & Occasion",
    french: "2 en 1",
    blurb: "Bridal chignons, sculpted up-dos, and red-carpet ready styling.",
    images: [
      u("1519415943484-9fa1873496d4"),
      u("1595959183082-7b570b7e08e2"),
      u("1572297982473-0ec53b48343d"),
      u("1525258946800-98cfd641d0de"),
      u("1509783236416-c9ad59bae472"),
      u("1605980776566-0486c3ac7617"),
    ],
  },
];

function Lookbook() {
  const [active, setActive] = useState<string>(CATEGORIES[0].key);
  const current = CATEGORIES.find((c) => c.key === active) ?? CATEGORIES[0];
  return (
    <>
      {/* Hero */}
      <section className="bg-noir text-ivory pt-40 pb-20 md:pt-48 md:pb-28 border-b border-ivory/10">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="eyebrow !text-champagne mb-6">— The Lookbook</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02]">
            Every <em className="font-editorial italic text-champagne">texture</em>, every silhouette, every shade.
          </h1>
          <p className="mt-8 font-editorial text-xl md:text-2xl text-ivory/75 italic max-w-2xl">
            A library of signature work from our floor — to inspire your next chair, or your franchise's first campaign.
          </p>
        </div>
      </section>

      {/* Category tabs + gallery */}
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

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {current.images.map((src, i) => (
              <figure
                key={`${current.key}-${i}`}
                className={`relative overflow-hidden bg-beige group ${
                  i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-[4/5]" : "aspect-[3/4]"
                }`}
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

      {/* CTA */}
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