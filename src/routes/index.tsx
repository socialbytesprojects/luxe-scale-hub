import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroSalon from "@/assets/hero-salon.jpg";
import videoExperience from "@/assets/jld-experience.mp4.asset.json";
import videoCurls from "@/assets/curls-maelle.mp4.asset.json";
import partnershipVideo from "@/assets/partnership.mp4.asset.json";
import stylistWork from "@/assets/stylist-work.jpg";
import interiorReception from "@/assets/interior-reception.jpg";
import interiorStation from "@/assets/interior-station.jpg";
import interiorWash from "@/assets/interior-wash.jpg";
import interiorRetail from "@/assets/interior-retail.jpg";
import interiorCafe from "@/assets/interior-cafe.jpg";

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
      <Numbers />
      <InvestorCTA />
    </>
  );
}

/* ─────────────────────  SECTION 1 — HERO  ───────────────────── */
const HERO_VIDEOS = [videoExperience.url, videoCurls.url];
function Hero() {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [volume, setVolume] = useState(0);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    videoRefs.current.forEach((v) => {
      if (!v) return;
      v.volume = 0;
      v.muted = true;
    });
    // Only the audio-enabled video (jld-experience, now on the right) carries sound
    const audioVideo = videoRefs.current[1];
    if (audioVideo) {
      audioVideo.volume = volume;
      audioVideo.muted = muted || volume === 0;
    }
  }, [volume, muted]);

  const onVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    setVolume(v);
    setMuted(v === 0);
  };

  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden bg-noir text-ivory">
      <div className="absolute inset-0 grid grid-cols-2">
        {[videoCurls.url, videoExperience.url].map((src, idx) => (
          <video
            key={idx}
            ref={(el) => { videoRefs.current[idx] = el; }}
            src={src}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
          />
        ))}
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

      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3 bg-noir/60 backdrop-blur-sm px-4 py-2 border border-ivory/15">
        <button
          type="button"
          onClick={() => {
            const next = !muted;
            setMuted(next);
            if (!next && volume === 0) setVolume(0.5);
          }}
          aria-label={muted ? "Unmute videos" : "Mute videos"}
          className="text-ivory hover:text-champagne transition-colors"
        >
          {muted || volume === 0 ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
          )}
        </button>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={muted ? 0 : volume}
          onChange={onVolume}
          aria-label="Volume"
          className="w-28 accent-champagne"
        />
      </div>
    </section>
  );
}

/* ─────────────────────  SECTION 2 — BRAND STORY (PROVALLIANCE × JLD)  ───────────────────── */
const BRAND_SLIDES = Array.from({ length: 84 }, (_, i) => `/brand-slides/slide-${String(i + 1).padStart(2, "0")}.jpg`);
function BrandStory() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((p) => (p + 1) % BRAND_SLIDES.length), 4500);
    return () => clearInterval(id);
  }, [paused]);
  const go = (dir: number) => setI((p) => (p + dir + BRAND_SLIDES.length) % BRAND_SLIDES.length);
  return (
    <section className="bg-ivory py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-14">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">— Brand Story</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-noir leading-[1.05]">
              The story behind <em className="font-editorial italic text-brown">JLD</em>, told one frame at a time.
            </h2>
          </div>
          <p className="lg:col-span-5 font-editorial text-lg md:text-xl text-brown leading-relaxed">
            A house built on six decades of European hairdressing heritage, the operating system of the world's №1 salon group, and a singular vision for India's luxury salon era. Move through the deck to see how the brand, the craft, and the opportunity come together.
          </p>
        </div>

        <div
          className="relative bg-noir border border-noir/15 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative aspect-[16/9] w-full">
            {BRAND_SLIDES.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Brand story slide ${idx + 1}`}
                loading={idx === 0 ? "eager" : "lazy"}
                className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ${
                  idx === i ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <button
              onClick={() => go(-1)}
              aria-label="Previous slide"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full border border-ivory/40 bg-noir/60 text-ivory hover:bg-champagne hover:text-noir transition-colors flex items-center justify-center font-display text-2xl"
            >‹</button>
            <button
              onClick={() => go(1)}
              aria-label="Next slide"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full border border-ivory/40 bg-noir/60 text-ivory hover:bg-champagne hover:text-noir transition-colors flex items-center justify-center font-display text-2xl"
            >›</button>
          </div>
          <div className="flex items-center justify-between px-6 py-4 border-t border-ivory/15 bg-noir text-ivory">
            <span className="eyebrow !text-champagne">— Slide {String(i + 1).padStart(2, "0")} / {BRAND_SLIDES.length}</span>
            <div className="h-px flex-1 mx-6 bg-ivory/15 relative overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-champagne transition-all duration-500"
                style={{ width: `${((i + 1) / BRAND_SLIDES.length) * 100}%` }}
              />
            </div>
            <span className="text-xs tracking-[0.3em] uppercase text-ivory/60">{paused ? "Paused" : "Auto"}</span>
          </div>
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
  { label: "Women's Cuts",   img: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=900&q=80" },
  { label: "Men's Grooming", img: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&fit=crop&w=900&q=80" },
  { label: "Colour & Gloss", img: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=900&q=80" },
  { label: "Curly",          img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=900&q=80" },
  { label: "Coily & Textured", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=80" },
  { label: "Updos & Occasion", img: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=900&q=80" },
];
function LookbookPreview() {
  return (
    <section className="bg-beige py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">— The Lookbook</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-noir leading-[1.05]">
              Every <em className="font-editorial italic text-brown">texture</em>, every silhouette, every shade.
            </h2>
          </div>
          <p className="lg:col-span-5 font-editorial text-lg md:text-xl text-brown leading-relaxed">
            A curated library of signature work from our floor — women's cuts, men's grooming, colour, curls, coils and occasion styling.
          </p>
        </div>

        <Link to="/lookbook" className="block group">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
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

        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <Link to="/lookbook" className="btn-noir">Open the Lookbook</Link>
          <p className="text-sm text-brown italic font-editorial">Eight categories · hundreds of references · updated monthly</p>
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
            From the reception's bouquet to the café's espresso, every JLD is composed from the same architectural language — a system that protects the experience at every location.
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
      <div className="font-display text-5xl md:text-6xl lg:text-7xl text-champagne italic leading-none whitespace-nowrap">
        {display}
        {m.suffix ?? ""}
      </div>
      <div className="mt-4 eyebrow !text-ivory/70 whitespace-nowrap">{m.label}</div>
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 md:gap-8">
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
            <video
              src={partnershipVideo.url}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
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
