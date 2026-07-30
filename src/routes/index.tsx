import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import partnershipVideo from "@/assets/partnership.mp4.asset.json";
import heroVideo from "@/assets/jld-hero.mp4.asset.json";
import sonniyaImg from "@/assets/sonniya.png.asset.json";
import nitinImg from "@/assets/nitin.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JLD — India's Next Luxury Salon Destination" },
      { name: "description", content: "A house of beauty rooted in 65 years of French heritage. Experience luxury hair, colour and styling — and partner with a brand built for scale." },
      { property: "og:title", content: "JLD — Luxury Salon House" },
      { property: "og:description", content: "Experience beauty. Own the brand." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Lightbox />
      <Hero />
      <StorySection />
      <MeetFounders />
      <SummerCollection />
      <InvestorCTA />
    </>
  );
}

/* ─────────────────────  LIGHTBOX (shared)  ───────────────────── */
let openLightboxFn: ((src: string) => void) | null = null;
export function openImage(src: string) { openLightboxFn?.(src); }
function Lightbox() {
  const [src, setSrc] = useState<string | null>(null);
  useEffect(() => {
    openLightboxFn = setSrc;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSrc(null); };
    window.addEventListener("keydown", onKey);
    return () => { openLightboxFn = null; window.removeEventListener("keydown", onKey); };
  }, []);
  if (!src) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={() => setSrc(null)}
      className="fixed inset-0 z-[9999] bg-noir/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 cursor-zoom-out animate-fade-up"
    >
      <img src={src} alt="" className="max-h-full max-w-full object-contain shadow-2xl" />
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); setSrc(null); }}
        className="absolute top-4 right-4 md:top-6 md:right-6 h-11 w-11 rounded-full border border-ivory/40 bg-noir/40 text-ivory flex items-center justify-center hover:bg-champagne hover:border-champagne transition-colors"
        aria-label="Close"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m6 6 12 12M18 6 6 18"/></svg>
      </button>
    </div>
  );
}

/* ─────────────────────  HERO  ───────────────────── */
function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) v.play().catch(() => {}); else v.pause(); },
      { threshold: 0.15 },
    );
    obs.observe(v);
    return () => obs.disconnect();
  }, []);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted) v.play().catch(() => {});
  };

  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden bg-noir text-ivory">
      <video
        ref={videoRef}
        src={heroVideo.url}
        autoPlay
        muted={muted}
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-noir/70 via-noir/10 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 md:px-10 pb-14 md:pb-16">
        <div className="max-w-xl animate-fade-up">
          <p className="eyebrow !text-champagne mb-4">Est. 1961 · Paris — India</p>
          <h1
            className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-ivory"
            style={{ textShadow: "0 4px 18px rgba(0,0,0,0.7)" }}
          >
            India's next <em className="font-editorial italic text-champagne">luxury salon</em> destination.
          </h1>
          <p className="mt-5 font-editorial text-base md:text-lg text-ivory/85 italic">
            Experience beauty. Own the brand.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="btn-gold">Book Appointment</Link>
            <Link to="/franchise" className="btn-ghost">Franchise With Us</Link>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={toggleMute}
        className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-20 h-12 w-12 rounded-full border border-ivory/40 bg-noir/40 backdrop-blur text-ivory flex items-center justify-center hover:bg-champagne hover:border-champagne transition-colors"
        aria-label={muted ? "Unmute film" : "Mute film"}
      >
        {muted ? (
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5"><path d="M11 5 6 9H3v6h3l5 4V5Z"/><path d="m16 9 5 6M21 9l-5 6"/></svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5"><path d="M11 5 6 9H3v6h3l5 4V5Z"/><path d="M16 8a5 5 0 0 1 0 8M19 5a9 9 0 0 1 0 14"/></svg>
        )}
      </button>
    </section>
  );
}

/* ─────────────────────  STORY (Timeline from slide 9)  ───────────────────── */
const TIMELINE = [
  { year: "1961", title: "The Beginning", text: "First Jean Louis David salon opens in Wagram, Paris." },
  { year: "1960s", title: "Fashion Meets Hair", text: "Collaborates with Helmut Newton, Herb Ritts, and other fashion icons." },
  { year: "1970", title: "An Industry Innovation", text: "Invents the revolutionary layered haircut with clippers." },
  { year: "1975", title: "Global Expansion Begins", text: "Launch of the Jean Louis David franchise network." },
  { year: "Late 1970s", title: "Education First", text: "Launch of the brand's professional training videos." },
  { year: "1980–2007", title: "International Growth", text: "Expands to 750+ salons across 20+ countries." },
  { year: "2009", title: "Professional Collection", text: "Launch of the Jean Louis David Professional product range." },
  { year: "2018", title: "A New Salon Concept", text: "Introduction of the brand's new salon concept." },
  { year: "2024", title: "Brand Excellence", text: "Awarded Best Brand Strategy of the Year." },
  { year: "2025", title: "Franchise Excellence", text: "Awarded Best Franchise in France." },
  { year: "2026", title: "Recognised Once Again", text: "Named Best Franchise in France 2026." },
  { year: "2026", title: "A New Chapter", text: "Master franchise agreements signed for India & China." },
];
const STORY_IMAGES = [
  "/brand-slides/slide-08.jpg",
  "/brand-slides/slide-11.jpg",
  "/brand-slides/slide-12.jpg",
  "/brand-slides/slide-49.jpg",
];

function StorySection() {
  return (
    <section className="bg-ivory py-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-14 md:mb-20">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4">— The Story</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-noir leading-[1.05]">
              The Jean Louis David Journey, <em className="font-editorial italic text-champagne">reimagined for India</em>.
            </h2>
          </div>
          <p className="lg:col-span-5 font-editorial text-lg md:text-xl text-brown leading-relaxed">
            A French salon brand that continues to evolve with every generation — combining heritage, innovation and creativity while remaining true to the standards that have defined Jean Louis David for over six decades.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Timeline */}
          <ol className="lg:col-span-7 relative border-l border-champagne/50 pl-8 md:pl-10 space-y-10">
            {TIMELINE.map((t) => (
              <li key={`${t.year}-${t.title}`} className="relative">
                <span className="absolute -left-[42px] md:-left-[50px] top-2 h-3 w-3 rounded-full bg-champagne ring-4 ring-ivory" />
                <p className="font-display text-3xl md:text-4xl text-noir leading-none">{t.year}</p>
                <p className="mt-2 eyebrow">{t.title}</p>
                <p className="mt-2 font-editorial text-lg text-brown leading-relaxed max-w-lg">{t.text}</p>
              </li>
            ))}
            <li className="relative">
              <span className="absolute -left-[42px] md:-left-[50px] top-2 h-3 w-3 rounded-full bg-champagne ring-4 ring-ivory" />
              <p className="font-display text-3xl md:text-4xl text-noir leading-none">Today</p>
              <p className="mt-2 eyebrow">750+ Salons · 20+ Countries · Since 1961</p>
            </li>
          </ol>

          {/* 16:9 slides, stacked */}
          <aside className="lg:col-span-5 space-y-4 md:space-y-5">
            {STORY_IMAGES.map((s) => (
              <button
                type="button"
                key={s}
                onClick={() => openImage(s)}
                className="group relative block w-full overflow-hidden bg-beige aspect-video cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-champagne"
                aria-label="Open image"
              >
                <img src={s} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              </button>
            ))}
            <p className="font-editorial italic text-brown text-sm">
              Tap any frame to enlarge.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────  MEET THE FOUNDERS  ───────────────────── */
function MeetFounders() {
  return (
    <section className="bg-beige py-24 md:py-36">
      <div className="mx-auto max-w-[900px] px-6 md:px-10 text-center">
        <p className="eyebrow mb-6 flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-champagne" />
          Meet the Founders
          <span className="h-px w-10 bg-champagne" />
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-noir leading-[1.08]">
          65 years of French excellence. <em className="font-editorial italic text-champagne">A new chapter in India.</em>
        </h2>
        <p className="mt-8 font-editorial text-lg md:text-xl text-brown leading-relaxed">
          Founded in 1961, Jean Louis David has spent over six decades shaping the craft of French hairdressing. Today, as a flagship brand of Provalliance — the world's largest salon group with 3,500+ salons — it opens its next chapter in India.
        </p>
        <p className="mt-6 font-editorial text-lg md:text-xl text-brown leading-relaxed">
          Leading that chapter are <em className="italic">Sonniya and Nitin Sharma</em> — entrepreneurs with two decades in service-led businesses and over a decade in the premium salon industry.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 text-left">
          {[
            { name: "Sonniya", img: sonniyaImg.url, pos: "object-[58%_28%]", body: "Shapes the vision — global standards delivered through a guest experience that feels personal every time." },
            { name: "Nitin", img: nitinImg.url, pos: "object-[38%_25%]", body: "Brings the execution — the systems and people that deliver a brand consistently, visit after visit." },
          ].map((f) => (
            <figure key={f.name}>
              <div className="relative w-full overflow-hidden bg-ivory aspect-[4/5]">
                <img src={f.img} alt={`${f.name} Sharma, co-founder of JLD India`} loading="lazy" className={`absolute inset-0 h-full w-full object-cover ${f.pos}`} />
              </div>
              <figcaption className="mt-5">
                <p className="font-display text-2xl md:text-3xl text-noir">{f.name}</p>
                <p className="mt-2 font-editorial text-base text-brown leading-relaxed">{f.body}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/about" className="btn-noir">Read the Full Story</Link>
          <Link to="/lookbook" className="btn-gold">See the Work</Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────  SUMMER COLLECTION  ───────────────────── */
const COLLECTION_SLIDES = [1, 3, 8, 9, 12, 13].map((i) => `/press-slides/slide-${String(i).padStart(2, "0")}.jpg`);
function SummerCollection() {
  return (
    <section className="bg-ivory py-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="max-w-3xl mb-14 md:mb-20">
          <p className="eyebrow mb-4">— Spring / Summer 2026</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-noir leading-[1.05]">
            The season, <em className="font-editorial italic text-champagne">frame by frame</em>.
          </h2>
          <p className="mt-6 font-editorial text-lg md:text-xl text-brown leading-relaxed">
            Editorial highlights from the latest JLD collection — a house language that travels from the Paris runway to the chair in Mumbai.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {COLLECTION_SLIDES.map((src, i) => (
            <button
              type="button"
              key={src}
              onClick={() => openImage(src)}
              className="relative block w-full overflow-hidden bg-beige aspect-[2480/1813] group cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-champagne"
              aria-label={`Open look ${i + 1}`}
            >
              <img
                src={src}
                alt={`JLD Spring Summer 2026 — look ${i + 1}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────  INVESTOR CTA  ───────────────────── */
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
    <section className="bg-beige py-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 relative overflow-hidden">
            <video
              ref={vidRef}
              src={partnershipVideo.url}
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover min-h-[440px]"
            />
          </div>
          <div className="lg:col-span-7 bg-noir text-ivory p-10 md:p-16 flex flex-col justify-center">
            <p className="eyebrow !text-champagne mb-6">— Partnership</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Partner with a brand <em className="font-editorial italic text-champagne">built for scale</em>.
            </h2>
            <p className="mt-6 font-editorial text-lg text-ivory/80 max-w-xl">
              Limited territories are open to qualified entrepreneurs across India. Our partnerships team will walk you through the brand, the model, and the journey.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/franchise" className="btn-gold">Explore the Franchise</Link>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="btn-ghost">WhatsApp Partnerships</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}