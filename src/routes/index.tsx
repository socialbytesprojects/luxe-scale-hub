import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import partnershipVideo from "@/assets/partnership.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JLD — India's Next Luxury Salon Destination" },
      { name: "description", content: "A house of beauty for clients and franchise partners. Experience luxury hair, skin, and styling crafted with editorial precision." },
      { property: "og:title", content: "JLD — Luxury Salon House" },
      { property: "og:description", content: "Experience beauty. Own the brand." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <BrandStory />
      <LookbookPreview />
      <PressCollage />
      <InvestorCTA />
    </>
  );
}

/* ─────────────────────  SECTION 1 — HERO  ───────────────────── */
function Hero() {
  const holderRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!holderRef.current) return;
    const obs = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { threshold: 0.1 },
    );
    obs.observe(holderRef.current);
    return () => obs.disconnect();
  }, []);
  const videoId = "3CyyQc6UyrY";
  const src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&cc_load_policy=0&disablekb=1&fs=0&showinfo=0`;
  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden bg-noir text-ivory">
      <div ref={holderRef} className="absolute inset-0 overflow-hidden">
        {inView && (
          <iframe
            src={src}
            title="JLD Film"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full border-0 pointer-events-none scale-[1.35]"
          />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-noir/60 via-noir/30 to-noir/95 pointer-events-none" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 md:px-10 pb-20 md:pb-28">
        <div className="max-w-3xl animate-fade-up">
          <p className="eyebrow !text-champagne mb-6">Est. 2018 · India</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-ivory">
            India's next <em className="font-editorial italic text-champagne">luxury salon</em> destination.
          </h1>
          <p className="mt-8 font-editorial text-xl md:text-2xl text-ivory/80 italic max-w-xl">
            Experience beauty. Own the brand.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-gold">Book Appointment</Link>
            <Link to="/franchise" className="btn-ghost">Franchise With Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────  SECTION 2 — BRAND STORY (PROVALLIANCE × JLD)  ───────────────────── */
const slidePath = (n: number) => `/brand-slides/slide-${String(n).padStart(2, "0")}.jpg`;
const BRAND_STORY_SLIDES = [9, 11, 6, 3, 4, 8, 48].map(slidePath);
function BrandStory() {
  const [hero, ...rest] = BRAND_STORY_SLIDES;
  return (
    <section className="bg-ivory py-16 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-10 md:mb-14">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4 md:mb-6">— Brand Story</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-noir leading-[1.05]">
              Six decades of European craft, <em className="font-editorial italic text-brown">reimagined for India</em>.
            </h2>
          </div>
          <p className="lg:col-span-5 font-editorial text-base md:text-xl text-brown leading-relaxed">
            From a single Parisian atelier in 1961 to the operating system of the world's №1 salon group — JLD carries a heritage of freedom, creativity and precision into every chair we open in India.
          </p>
        </div>

        {/* Mobile: single-column stacked mosaic. Desktop: editorial asymmetric grid. */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-2 md:gap-3 auto-rows-[38vw] sm:auto-rows-[28vw] md:auto-rows-[140px] lg:auto-rows-[170px]">
          <figure className="col-span-2 md:col-span-8 md:row-span-3 relative overflow-hidden bg-noir group">
            <img src={hero} alt="JLD brand story" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </figure>
          <figure className="col-span-1 md:col-span-4 md:row-span-2 relative overflow-hidden bg-noir group">
            <img src={rest[0]} alt="JLD brand story" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </figure>
          <figure className="col-span-1 md:col-span-4 md:row-span-1 relative overflow-hidden bg-noir group">
            <img src={rest[1]} alt="JLD brand story" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </figure>
          <figure className="col-span-1 md:col-span-4 md:row-span-2 relative overflow-hidden bg-noir group">
            <img src={rest[2]} alt="JLD brand story" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </figure>
          <figure className="col-span-1 md:col-span-4 md:row-span-2 relative overflow-hidden bg-noir group">
            <img src={rest[3]} alt="JLD brand story" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </figure>
          <figure className="col-span-2 md:col-span-4 md:row-span-2 relative overflow-hidden bg-noir group">
            <img src={rest[4]} alt="JLD brand story" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </figure>
          <figure className="col-span-2 md:col-span-8 md:row-span-2 relative overflow-hidden bg-noir group">
            <img src={rest[5]} alt="JLD brand story" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────  PRESS COLLAGE (replaces Numbers) ───────────────────── */
const PRESS_SLIDES = Array.from({ length: 14 }, (_, i) => `/press-slides/slide-${String(i + 1).padStart(2, "0")}.jpg`);
function PressCollage() {
  return (
    <section className="bg-noir text-ivory py-16 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-10 md:mb-14">
          <div className="lg:col-span-7">
            <p className="eyebrow !text-champagne mb-4 md:mb-6">— Spring / Summer 2026</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              The season, <em className="font-editorial italic text-champagne">frame by frame</em>.
            </h2>
          </div>
          <p className="lg:col-span-5 font-editorial text-base md:text-xl text-ivory/75 leading-relaxed">
            Editorial highlights from the latest JLD collection — a house language that travels from the runway to the chair.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 auto-rows-[42vw] sm:auto-rows-[30vw] md:auto-rows-[200px] lg:auto-rows-[240px]">
          {PRESS_SLIDES.map((src, i) => {
            const feature = i === 0 || i === 7;
            return (
              <figure
                key={src}
                className={`relative overflow-hidden bg-ivory/5 group ${feature ? "col-span-2 row-span-2" : ""}`}
              >
                <img
                  src={src}
                  alt={`JLD Spring Summer 2026 slide ${i + 1}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────  SECTION 3 — WHY CLIENTS LOVE US  ───────────────────── */
const TESTIMONIALS = [
  { quote: "JLD doesn't cut hair. It composes you. There is no other word for it.", name: "Ananya R.", role: "Vogue India" },
  { quote: "The only chair in the country that understands editorial. I fly in from London for it.", name: "Priya M.", role: "Stylist" },
  { quote: "Every visit feels like checking into a private members' club that happens to do extraordinary hair.", name: "Vikram S.", role: "Founder, ARC Studios" },
];
const AWARDS = ["Vogue Beauty Edit 2024", "Elle Salon of the Year", "Condé Nast Traveller", "Harper's Bazaar India", "GQ Grooming List"];
function WhyClients() {
  return (
    <section className="bg-noir text-ivory py-28 md:py-40 relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-20">
          <div className="lg:col-span-8">
            <p className="eyebrow !text-champagne mb-6">— The Reception</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Adored by <em className="font-editorial italic text-champagne">discerning guests</em>, awarded by the press, trusted by an industry.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <div className="font-display text-7xl md:text-8xl text-champagne italic leading-none">4.9</div>
            <p className="mt-2 text-xs tracking-[0.3em] uppercase text-ivory/60">Across 11,200+ Google reviews</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-ivory/10">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-noir p-10 md:p-12">
              <div className="font-display text-5xl text-champagne mb-6 leading-none">"</div>
              <p className="font-editorial text-xl md:text-2xl leading-relaxed text-ivory/90">{t.quote}</p>
              <div className="mt-8 pt-6 border-t border-ivory/15">
                <p className="text-sm tracking-wider">{t.name}</p>
                <p className="text-xs text-ivory/50 mt-1 uppercase tracking-[0.2em]">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <p className="eyebrow !text-ivory/50 mb-8 text-center">As featured in</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {AWARDS.map((a) => (
              <span key={a} className="font-display italic text-xl md:text-2xl text-ivory/60">{a}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────  SECTION 4 — LOOKBOOK PREVIEW  ───────────────────── */
const LOOKBOOK_PREVIEW = [
  { label: "Coupes Femme",      img: "/lookbook/coupes-femme/coupes-femme-001.jpg" },
  { label: "Hommes",            img: "/lookbook/hommes/hommes-001.jpg" },
  { label: "Gloss",             img: "/lookbook/gloss/gloss-001.jpg" },
  { label: "Contrast & Sunlight", img: "/lookbook/contrast-sunlight/contrast-sunlight-001.jpg" },
  { label: "Curly",             img: "/lookbook/curly/curly-001.jpg" },
  { label: "BAS",               img: "/lookbook/bas/bas-001.jpg" },
];
function LookbookPreview() {
  return (
    <section className="bg-beige py-16 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-10 md:mb-14">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4 md:mb-6">— The Lookbook</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-noir leading-[1.05]">
              Every <em className="font-editorial italic text-brown">texture</em>, every silhouette, every shade.
            </h2>
          </div>
          <p className="lg:col-span-5 font-editorial text-base md:text-xl text-brown leading-relaxed">
            A curated library of signature work from our floor — women's cuts, men's grooming, colour, curls, coils and occasion styling.
          </p>
        </div>

        <Link to="/lookbook" className="block group">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {LOOKBOOK_PREVIEW.map((l, i) => (
              <figure
                key={l.label}
                className={`relative overflow-hidden bg-noir ${i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-[4/5]" : "aspect-[3/4]"}`}
              >
                <img
                  src={l.img}
                  alt={l.label}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4 md:p-5 bg-gradient-to-t from-noir/85 to-transparent text-ivory text-xs tracking-[0.25em] uppercase">
                  {l.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </Link>

        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
          <Link to="/lookbook" className="btn-noir">Open the Lookbook</Link>
          <p className="text-sm text-brown italic font-editorial">Eight categories · hundreds of references · updated monthly</p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────  SECTION 7 — INVESTOR CTA  ───────────────────── */
function InvestorCTA() {
  const vidRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    const v = vidRef.current;
    if (!v) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) v.play().catch(() => {}); else v.pause(); },
      { threshold: 0.25 },
    );
    obs.observe(v);
    return () => obs.disconnect();
  }, []);
  return (
    <section className="bg-ivory py-16 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-5 relative overflow-hidden">
            <video
              ref={vidRef}
              src={partnershipVideo.url}
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover min-h-[480px]"
            />
          </div>
          <div className="lg:col-span-7 bg-noir text-ivory p-10 md:p-16 lg:p-20 flex flex-col justify-center">
            <p className="eyebrow !text-champagne mb-6">— Partnership</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Partner with a brand <em className="font-editorial italic text-champagne">built for scale</em>.
            </h2>
            <p className="mt-6 font-editorial text-xl text-ivory/80 max-w-xl">
              Limited territories are now open to qualified entrepreneurs across India. Our partnerships team will walk you through the brand, the economics, and the journey.
            </p>
            <form className="mt-10 grid md:grid-cols-2 gap-4 max-w-xl">
              <input className="bg-transparent border-b border-ivory/30 py-3 text-sm placeholder:text-ivory/40 outline-none focus:border-champagne transition-colors" placeholder="Full name" />
              <input className="bg-transparent border-b border-ivory/30 py-3 text-sm placeholder:text-ivory/40 outline-none focus:border-champagne transition-colors" placeholder="City of interest" />
              <input className="bg-transparent border-b border-ivory/30 py-3 text-sm placeholder:text-ivory/40 outline-none focus:border-champagne transition-colors md:col-span-2" placeholder="Email & phone" />
            </form>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/franchise" className="btn-gold">Request Franchise Deck</Link>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="btn-ghost">WhatsApp Partnerships</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
