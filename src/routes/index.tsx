import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroSalon from "@/assets/hero-salon.jpg";
import clientPortrait from "@/assets/client-portrait.jpg";
import founder from "@/assets/founder.jpg";
import stylistWork from "@/assets/stylist-work.jpg";
import interiorReception from "@/assets/interior-reception.jpg";
import interiorStation from "@/assets/interior-station.jpg";
import interiorWash from "@/assets/interior-wash.jpg";
import interiorRetail from "@/assets/interior-retail.jpg";
import interiorCafe from "@/assets/interior-cafe.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Noir — India's Next Luxury Salon Destination" },
      { name: "description", content: "A house of beauty for clients and franchise partners. Experience luxury hair, skin, and styling crafted with editorial precision." },
      { property: "og:title", content: "Maison Noir — Luxury Salon House" },
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
      <WhyClients />
      <Franchise />
      <Interiors />
      <Numbers />
      <InvestorCTA />
    </>
  );
}

/* ─────────────────────  SECTION 1 — HERO  ───────────────────── */
function Hero() {
  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden bg-noir text-ivory">
      <div className="absolute inset-0">
        <img
          src={heroSalon}
          alt="Maison Noir luxury salon interior"
          width={1920}
          height={1280}
          className="h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-noir/70 via-noir/40 to-noir/95" />
      </div>
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
      <div className="absolute bottom-8 right-8 z-10 hidden md:flex items-center gap-3 text-ivory/60 text-xs tracking-[0.3em] uppercase">
        <span className="h-px w-12 bg-champagne" />
        Scroll
      </div>
    </section>
  );
}

/* ─────────────────────  SECTION 2 — BRAND STORY  ───────────────────── */
const TIMELINE = [
  { year: "2018", title: "The First Chair", text: "A single atelier opens in South Mumbai with a manifesto: redefine the Indian salon as a house of design." },
  { year: "2020", title: "The Studio Method", text: "Our proprietary service system is codified — every chair, every city, the same exacting standard." },
  { year: "2022", title: "Five Houses", text: "Expansion across Mumbai, Delhi NCR, and Bengaluru. Twelve thousand guests served. Zero compromise." },
  { year: "2024", title: "The Academy", text: "Maison Noir Academy launches — training the next generation of artists in our editorial craft." },
  { year: "2026", title: "Franchise Era", text: "We open our doors to entrepreneurs who share our obsession with experience, design, and operational excellence." },
];
function BrandStory() {
  return (
    <section className="bg-ivory py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <p className="eyebrow mb-6">— The House</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-noir leading-[1.05]">
              Built to redefine luxury beauty through <em className="font-editorial italic text-brown">design, technology, and obsession</em>.
            </h2>
            <p className="mt-8 font-editorial text-lg md:text-xl text-brown leading-relaxed max-w-md">
              Maison Noir is not a salon. It is a quiet rebellion against the ordinary — a house where every detail, from the marble underfoot to the espresso in your hand, is composed with intent.
            </p>
            <div className="mt-10">
              <Link to="/about" className="text-noir border-b border-champagne pb-1 text-xs tracking-[0.3em] uppercase hover:text-brown transition-colors">
                Read the manifesto
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-7">
            <div className="relative">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-champagne via-beige to-transparent" />
              <div className="space-y-12">
                {TIMELINE.map((t) => (
                  <div key={t.year} className="relative pl-12">
                    <div className="absolute left-0 top-2 h-6 w-6 rounded-full border border-champagne bg-ivory flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-champagne" />
                    </div>
                    <div className="font-display text-3xl text-champagne italic mb-2">{t.year}</div>
                    <h3 className="font-display text-2xl text-noir mb-2">{t.title}</h3>
                    <p className="text-brown/90 font-editorial text-lg leading-relaxed">{t.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────  SECTION 3 — WHY CLIENTS LOVE US  ───────────────────── */
const TESTIMONIALS = [
  { quote: "Maison Noir doesn't cut hair. It composes you. There is no other word for it.", name: "Ananya R.", role: "Vogue India" },
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

/* ─────────────────────  SECTION 4 — FRANCHISE  ───────────────────── */
const PILLARS = [
  { n: "01", title: "Brand Identity", text: "A fully-developed luxury house with editorial reach, press equity, and a loyal premium clientele." },
  { n: "02", title: "Operational System", text: "A turnkey playbook covering every chair, every shift, every guest interaction — engineered for repeatability." },
  { n: "03", title: "Interior Architecture", text: "End-to-end design assistance from our in-house studio. Every Maison feels singular, yet unmistakably ours." },
  { n: "04", title: "Training & Academy", text: "Stylists and managers trained at Maison Noir Academy before opening. Ongoing masterclasses included." },
  { n: "05", title: "Marketing Engine", text: "National PR, influencer programmes, digital performance, and local launch campaigns — handled." },
  { n: "06", title: "Technology Stack", text: "Proprietary booking, CRM, inventory, and analytics — built for visibility and unit economics." },
];
function Franchise() {
  return (
    <section className="bg-beige py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="max-w-3xl mb-20">
          <p className="eyebrow mb-6">— The Opportunity</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-noir leading-[1.05]">
            Designed for <em className="font-editorial italic text-brown">scalable growth</em>. Built for modern entrepreneurs.
          </h2>
          <p className="mt-8 font-editorial text-xl text-brown leading-relaxed">
            Maison Noir is luxury with operational excellence — a brand engineered to be replicated without ever feeling replicated.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-noir/15">
          {PILLARS.map((p) => (
            <div key={p.n} className="bg-beige p-10 md:p-12 group hover:bg-ivory transition-colors duration-500">
              <div className="flex items-start justify-between mb-8">
                <span className="font-display italic text-3xl text-champagne">{p.n}</span>
                <span className="h-px w-12 bg-noir/30 mt-5" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-noir mb-4">{p.title}</h3>
              <p className="text-brown leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <Link to="/franchise" className="btn-noir">Explore the Opportunity</Link>
          <p className="text-sm text-brown italic font-editorial">Investment from ₹1.2 Cr · ROI in 28–36 months · Tier 1 & 2 cities</p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────  SECTION 5 — INTERIORS  ───────────────────── */
const INTERIORS = [
  { src: interiorReception, label: "The Reception", w: 1400, h: 1000 },
  { src: interiorStation, label: "Styling Stations", w: 1200, h: 1500 },
  { src: interiorWash, label: "Wash Lounge", w: 1200, h: 1500 },
  { src: interiorCafe, label: "The Café Bar", w: 1200, h: 1500 },
  { src: interiorRetail, label: "Retail Apothecary", w: 1200, h: 1500 },
];
function Interiors() {
  return (
    <section className="bg-ivory py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid md:grid-cols-2 items-end gap-10 mb-16">
          <div>
            <p className="eyebrow mb-6">— The Space</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-noir leading-[1.05]">
              One house. <em className="font-editorial italic text-brown">Standardised in spirit</em>, singular in feeling.
            </h2>
          </div>
          <p className="font-editorial text-lg text-brown leading-relaxed max-w-md md:justify-self-end">
            From the reception's bouquet to the café's espresso, every Maison Noir is composed from the same architectural language — a system that protects the experience at every location.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <figure className="col-span-12 md:col-span-8 relative overflow-hidden group">
            <img src={INTERIORS[0].src} alt={INTERIORS[0].label} width={INTERIORS[0].w} height={INTERIORS[0].h} loading="lazy" className="w-full h-[420px] md:h-[560px] object-cover group-hover:scale-105 transition-transform duration-1000" />
            <figcaption className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-noir/80 to-transparent w-full text-ivory">
              <p className="eyebrow !text-champagne mb-1">01</p>
              <p className="font-display text-2xl">{INTERIORS[0].label}</p>
            </figcaption>
          </figure>
          <figure className="col-span-12 md:col-span-4 relative overflow-hidden group">
            <img src={INTERIORS[1].src} alt={INTERIORS[1].label} width={INTERIORS[1].w} height={INTERIORS[1].h} loading="lazy" className="w-full h-[420px] md:h-[560px] object-cover group-hover:scale-105 transition-transform duration-1000" />
            <figcaption className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-noir/80 to-transparent w-full text-ivory">
              <p className="eyebrow !text-champagne mb-1">02</p>
              <p className="font-display text-2xl">{INTERIORS[1].label}</p>
            </figcaption>
          </figure>
          {INTERIORS.slice(2).map((it, i) => (
            <figure key={it.label} className="col-span-12 md:col-span-4 relative overflow-hidden group">
              <img src={it.src} alt={it.label} width={it.w} height={it.h} loading="lazy" className="w-full h-[360px] md:h-[440px] object-cover group-hover:scale-105 transition-transform duration-1000" />
              <figcaption className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-noir/80 to-transparent w-full text-ivory">
                <p className="eyebrow !text-champagne mb-1">0{i + 3}</p>
                <p className="font-display text-2xl">{it.label}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────  SECTION 6 — NUMBERS  ───────────────────── */
const METRICS = [
  { n: 28400, suffix: "+", label: "Guests served" },
  { n: 4.9, label: "Google rating", decimals: 1 },
  { n: 120, suffix: "+", label: "Artists trained" },
  { n: 7, label: "Houses open" },
  { n: 8, label: "Years of craft" },
];
function useCount(target: number, decimals = 0) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const dur = 1800;
            const start = performance.now();
            const tick = (t: number) => {
              const p = Math.min(1, (t - start) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              setV(target * eased);
              if (p < 1) requestAnimationFrame(tick);
              else setV(target);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  const display =
    decimals > 0 ? v.toFixed(decimals) : Math.floor(v).toLocaleString("en-IN");
  return { ref, display };
}
function Metric({ m }: { m: (typeof METRICS)[number] }) {
  const { ref, display } = useCount(m.n, m.decimals ?? 0);
  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="font-display text-6xl md:text-7xl lg:text-8xl text-champagne italic leading-none">
        {display}
        {m.suffix ?? ""}
      </div>
      <div className="mt-4 eyebrow !text-ivory/70">{m.label}</div>
    </div>
  );
}
function Numbers() {
  return (
    <section className="bg-noir text-ivory py-28 md:py-40 relative">
      <div className="absolute inset-0 opacity-20">
        <img src={stylistWork} alt="" width={1400} height={1000} loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-noir/80" />
      </div>
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="max-w-2xl mb-20">
          <p className="eyebrow !text-champagne mb-6">— By The Numbers</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
            A house measured in <em className="font-editorial italic text-champagne">trust</em>, not just chairs.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-6">
          {METRICS.map((m) => (
            <Metric key={m.label} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────  SECTION 7 — INVESTOR CTA  ───────────────────── */
function InvestorCTA() {
  return (
    <section className="bg-ivory py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-5 relative overflow-hidden">
            <img src={founder} alt="Founder, Maison Noir" width={1200} height={1500} loading="lazy" className="w-full h-full object-cover min-h-[480px]" />
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
