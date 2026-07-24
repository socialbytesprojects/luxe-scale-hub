import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import partnershipVideo from "@/assets/partnership.mp4.asset.json";
import heroVideo from "@/assets/jld-hero.mp4.asset.json";

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
      <Hero />
      <StorySection />
      <AboutFounders />
      <SummerCollection />
      <InvestorCTA />
    </>
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
        muted
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
  { year: "1961", text: "1st Jean Louis David Salon opens on Rue de Wagram, Paris." },
  { year: "60ies", text: "Jean Louis David assists Helmut Newton and Herb Ritts on iconic editorials." },
  { year: "1970", text: "Jean Louis David invents the layered haircut with clippers." },
  { year: "1975", text: "Creation of the Jean Louis David franchise network." },
  { year: "End of 70s", text: "Launch of the training videos — a first for the industry." },
  { year: "2008", text: "The brand joins Provalliance, the world's №1 hair group." },
  { year: "2009", text: "Launch of the Jean Louis David professional product range." },
  { year: "2018", text: "New salon concept — a redefined luxury salon experience." },
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
              Six decades of French craft, <em className="font-editorial italic text-champagne">reimagined for India</em>.
            </h2>
          </div>
          <p className="lg:col-span-5 font-editorial text-lg md:text-xl text-brown leading-relaxed">
            From a single Parisian atelier in 1961 to the operating system of the world's №1 salon group — a heritage of freedom, creativity and precision now takes its place in India.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Timeline */}
          <ol className="lg:col-span-7 relative border-l border-champagne/50 pl-8 md:pl-10 space-y-10">
            {TIMELINE.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[42px] md:-left-[50px] top-2 h-3 w-3 rounded-full bg-champagne ring-4 ring-ivory" />
                <p className="font-display text-3xl md:text-4xl text-noir leading-none">{t.year}</p>
                <p className="mt-3 font-editorial text-lg text-brown leading-relaxed max-w-lg">{t.text}</p>
              </li>
            ))}
          </ol>

          {/* Sticky imagery */}
          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 grid grid-cols-2 gap-3">
              {STORY_IMAGES.map((s, i) => (
                <figure
                  key={s}
                  className={`relative overflow-hidden bg-beige ${i === 0 ? "col-span-2 aspect-[16/10]" : "aspect-[3/4]"}`}
                >
                  <img src={s} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                </figure>
              ))}
              <figcaption className="col-span-2 font-editorial italic text-brown text-sm mt-1">
                Craft, texture and character — the JLD floor, today.
              </figcaption>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────  ABOUT / FOUNDERS PREVIEW  ───────────────────── */
function AboutFounders() {
  return (
    <section className="bg-beige py-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <p className="eyebrow mb-4">— About JLD</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-noir leading-[1.05]">
            A house built on <em className="font-editorial italic text-champagne">craft, hospitality</em> and quiet obsession.
          </h2>
          <div className="mt-8 space-y-5 font-editorial text-lg text-brown leading-relaxed">
            <p>
              JLD is a modern beauty house rooted in 65 years of French salon heritage — Parisian in origin, Indian in temperament, precise in every detail.
            </p>
            <p>
              Our founders trained in the ateliers of Europe and returned home to compose a brand that treats a haircut as an art form and a salon as a stage.
            </p>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link to="/about" className="btn-noir">Meet the House</Link>
            <Link to="/lookbook" className="btn-gold">See the Work</Link>
          </div>
        </div>
        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="grid grid-cols-6 grid-rows-6 gap-3 h-[520px] md:h-[620px]">
            <figure className="col-span-4 row-span-4 relative overflow-hidden bg-noir">
              <img src="/brand-slides/slide-08.jpg" alt="JLD" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            </figure>
            <figure className="col-span-2 row-span-3 relative overflow-hidden bg-noir">
              <img src="/brand-slides/slide-12.jpg" alt="JLD" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            </figure>
            <figure className="col-span-2 row-span-3 relative overflow-hidden bg-noir">
              <img src="/brand-slides/slide-49.jpg" alt="JLD" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            </figure>
            <figure className="col-span-6 row-span-2 relative overflow-hidden bg-noir">
              <img src="/brand-slides/slide-11.jpg" alt="JLD" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────  SUMMER COLLECTION  ───────────────────── */
const COLLECTION_SLIDES = [1, 3, 5, 7, 9, 11].map((i) => `/press-slides/slide-${String(i).padStart(2, "0")}.jpg`);
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {COLLECTION_SLIDES.map((src, i) => (
            <figure
              key={src}
              className="relative overflow-hidden bg-beige aspect-[3/4] group"
            >
              <img
                src={src}
                alt={`JLD Spring Summer 2026 — look ${i + 1}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </figure>
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