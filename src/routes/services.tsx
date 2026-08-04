import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — JLD" },
      { name: "description", content: "The full JLD menu — haircuts, colour, Kérastase rituals, texture, treatments, styling and grooming — with pricing across artist tiers." },
      { property: "og:title", content: "Services — JLD" },
      { property: "og:description", content: "The full JLD menu — haircuts, colour, rituals, texture and grooming." },
      { property: "og:url", content: "https://jeanlouisdavid.in/services" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Services — JLD" },
      { name: "twitter:description", content: "The full JLD menu — haircuts, colour, rituals, texture and grooming." },
    ],
    links: [
      { rel: "canonical", href: "https://jeanlouisdavid.in/services" },
    ],
  }),
  component: Services,
});

type Row = { name: string; price: string; note?: string };
type Group = { cat: string; blurb: string; image: string; items: Row[] };

const MENU: Group[] = [
  {
    cat: "Haircuts",
    blurb: "The JLD cut, delivered across four artist tiers — from Top Stylist to Salon Director. Prices in ₹, member pricing available in-salon.",
    image: "/lookbook/coupes-femme/coupes-femme-001.jpg",
    items: [
      { name: "Men — Signature Haircut", price: "₹1,200 – ₹2,400", note: "Top Stylist · Style Director · Creative Director · Salon Director" },
      { name: "Women — Short", price: "₹1,800 – ₹3,300" },
      { name: "Women — Medium", price: "₹2,400 – ₹4,150" },
      { name: "Women — Long", price: "₹3,000 – ₹5,300" },
      { name: "Fringe / Trim", price: "₹700 – ₹1,200" },
      { name: "Kids Haircut", price: "₹950 – ₹1,450" },
    ],
  },
  {
    cat: "Kérastase Rituals",
    blurb: "Signature in-salon rituals powered by Kérastase — the world's most decorated hair care house.",
    image: "/lookbook/gloss/gloss-001.jpg",
    items: [
      { name: "Fusio-Dose (men / women)", price: "₹3,550 / ₹4,240" },
      { name: "Experience Ritual", price: "₹5,300" },
      { name: "Curl Defining Ritual", price: "₹5,300" },
      { name: "Chronologist Ritual", price: "₹7,700" },
      { name: "VIP Ritual", price: "₹7,700" },
    ],
  },
  {
    cat: "Hair Colour",
    blurb: "L'Oréal Professionnel colour, painted by hand — from a subtle root touch-up to full JLD colour correction.",
    image: "/lookbook/contrast-sunlight/contrast-sunlight-001.jpg",
    items: [
      { name: "Men — Global Colour", price: "₹2,150 – ₹3,000" },
      { name: "Women — Root Touch Up", price: "₹2,750 – ₹3,200" },
      { name: "Express Retouch (T-line)", price: "₹1,450 – ₹1,800" },
      { name: "Colour per Streak", price: "₹950 – ₹1,800" },
      { name: "Men — Highlights", price: "₹3,550 – ₹5,950" },
      { name: "Women — Global (Short–Long)", price: "₹5,950 – ₹11,300" },
      { name: "Highlights / Babylights", price: "₹7,700 – ₹13,000" },
      { name: "Balayage / Ombré / Sombré", price: "₹6,700 – ₹12,400" },
      { name: "JLD Colour Correction", price: "₹8,250 – ₹13,550" },
    ],
  },
  {
    cat: "Styling",
    blurb: "From an express blast dry to a bridal updo — every finish, considered.",
    image: "/lookbook/coupes-femme/coupes-femme-002.jpg",
    items: [
      { name: "Wash + Blast Dry (L'Oréal / Kérastase)", price: "₹500 – ₹1,450" },
      { name: "Straight Blowdry", price: "₹1,200 – ₹1,800" },
      { name: "Flipout Blowdry", price: "₹1,450 – ₹3,100" },
      { name: "Kérastase Blowdry", price: "₹1,800 – ₹3,350" },
      { name: "Tongs / Ironing", price: "₹1,450 – ₹3,600" },
      { name: "Updos", price: "₹2,000 – ₹2,950" },
      { name: "Bridal Updo", price: "₹2,600 – ₹3,550" },
    ],
  },
  {
    cat: "Hair Texture & Bonding",
    blurb: "Straightening, smoothing and Olaplex bonding — restorative and long-lasting.",
    image: "/lookbook/curly/curly-001.jpg",
    items: [
      { name: "Smoothening / Straightening / Rebonding", price: "₹5,900 – ₹15,350" },
      { name: "Olaplex Add-on", price: "₹1,800 – ₹2,950" },
      { name: "Olaplex Standalone", price: "₹2,950 – ₹4,150" },
      { name: "Olaplex + 4-in-1 Mask", price: "₹3,550 – ₹4,750" },
    ],
  },
  {
    cat: "Protein & Repair Treatments",
    blurb: "Copacabana, MK Botox, Biotin, Nanoplasty and K18 molecular repair.",
    image: "/lookbook/gloss/gloss-002.jpg",
    items: [
      { name: "Copacabana", price: "₹5,900 – ₹20,100" },
      { name: "MK Hair Botox", price: "₹7,710 – ₹22,450" },
      { name: "Biotin Therapy (Vegan)", price: "₹8,900 – ₹24,800" },
      { name: "Nanoplasty", price: "₹7,700 – ₹21,250" },
      { name: "K18 Molecular Repair", price: "₹1,190 – ₹2,400" },
      { name: "Moroccan Hair Spa (Hydrate / Smooth / Repair / Ritual)", price: "₹2,500 – ₹5,500" },
    ],
  },
  {
    cat: "Massage & Wellness",
    blurb: "Reflexology and pressure-point rituals — a quieter side of the JLD floor.",
    image: "/lookbook/bas/bas-001.jpg",
    items: [
      { name: "Head Reflexology (30 min)", price: "₹1,800 – ₹2,100" },
      { name: "Neck & Shoulder Reflexology", price: "₹1,500" },
      { name: "Full Hand Reflexology", price: "₹2,000" },
      { name: "Full Leg Reflexology", price: "₹2,500" },
      { name: "Foot Reflexology (20–60 min)", price: "₹1,000 – ₹2,500" },
    ],
  },
  {
    cat: "Nails & Add-ons",
    blurb: "Gel polish, tone-me refreshers and pre-lightening add-ons.",
    image: "/lookbook/hommes/hommes-001.jpg",
    items: [
      { name: "Gel Polish", price: "₹1,200" },
      { name: "Gel Polish Removal", price: "₹600" },
      { name: "Tone Me", price: "₹3,800" },
      { name: "Refresh Me", price: "₹4,150" },
      { name: "Roots Touch Up (with colour)", price: "₹2,950" },
      { name: "Pre-lightening", price: "₹2,150 – ₹5,950" },
    ],
  },
];

function Services() {
  const [activeSlug, setActiveSlug] = useState<string>(slug(MENU[0].cat));

  useEffect(() => {
    const sections = MENU.map((g) => document.getElementById(slug(g.cat))).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top - b.boundingClientRect.top));
        if (visible[0]) setActiveSlug(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-noir text-ivory pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-35">
          <img src="/lookbook/coupes-femme/coupes-femme-003.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-noir/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="eyebrow !text-champagne mb-6">— The Menu</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] max-w-4xl">
            Every service, <em className="font-editorial italic text-champagne">composed</em>.
          </h1>
          <p className="mt-8 font-editorial text-lg md:text-xl text-ivory/80 max-w-2xl">
            L'Oréal Professionnel · Kérastase · Olaplex · K18 — powered by the world's finest brands, delivered by JLD-trained artists.
          </p>
        </div>
      </section>

      {/* Category cards nav */}
      <section className="bg-beige py-14 md:py-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="eyebrow mb-6">— Categories</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {MENU.map((g) => (
              <a
                key={g.cat}
                href={`#${slug(g.cat)}`}
                className="group bg-ivory p-5 border border-champagne/30 hover:border-champagne transition-colors"
              >
                <p className="font-display text-lg md:text-xl text-noir group-hover:text-brown transition-colors leading-tight">{g.cat}</p>
                <p className="mt-2 text-[0.65rem] tracking-[0.25em] uppercase text-brown/70">{g.items.length} services</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="bg-ivory py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:grid lg:grid-cols-[220px_1fr] lg:gap-12">
          {/* Sticky category rail */}
          <aside className="hidden lg:block">
            <nav className="sticky top-28">
              <p className="eyebrow mb-5">— Jump to</p>
              <ul className="space-y-2 border-l border-champagne/40">
                {MENU.map((g) => {
                  const s = slug(g.cat);
                  const active = s === activeSlug;
                  return (
                    <li key={g.cat}>
                      <a
                        href={`#${s}`}
                        className={`block pl-4 py-1.5 -ml-px border-l-2 font-editorial text-sm leading-snug transition-colors ${active ? "border-champagne text-noir" : "border-transparent text-brown/70 hover:text-noir hover:border-champagne/60"}`}
                      >
                        {g.cat}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          <div className="space-y-20 md:space-y-28">
          {MENU.map((g) => (
            <article key={g.cat} id={slug(g.cat)} className="scroll-mt-28">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-10 md:mb-14 items-end">
                <div className="lg:col-span-7">
                  <p className="eyebrow mb-3">— {g.cat}</p>
                  <h2 className="font-display text-4xl md:text-5xl text-noir leading-[1.05]">{g.cat}</h2>
                  <p className="mt-5 font-editorial text-lg text-brown leading-relaxed">{g.blurb}</p>
                </div>
                <figure className="lg:col-span-5 aspect-[16/10] overflow-hidden bg-beige">
                  <img src={g.image} alt="" loading="lazy" className="h-full w-full object-cover object-[center_20%]" />
                </figure>
              </div>

              <ul className="border-t border-champagne/40">
                {g.items.map((it) => (
                  <li
                    key={it.name}
                    className="grid grid-cols-12 gap-4 items-baseline py-5 md:py-6 border-b border-champagne/25"
                  >
                    <div className="col-span-12 md:col-span-8">
                      <h3 className="font-display text-xl md:text-2xl text-noir">{it.name}</h3>
                      {it.note && <p className="text-xs tracking-[0.15em] uppercase text-brown/70 mt-2">{it.note}</p>}
                    </div>
                    <div className="col-span-12 md:col-span-4 md:text-right font-display text-lg md:text-xl text-brown">{it.price}</div>
                  </li>
                ))}
              </ul>
            </article>
          ))}

          <div className="text-center pt-6">
            <p className="font-editorial italic text-brown mb-6">Prices are indicative. Member pricing is 20% below regular pricing across the menu.</p>
            <Link to="/contact" className="btn-noir">Book an Appointment</Link>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}