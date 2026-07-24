import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — JLD" },
      { name: "description", content: "65 years of French salon heritage, reimagined for India. The story, the founders, and the philosophy behind JLD." },
      { property: "og:title", content: "About JLD" },
      { property: "og:description", content: "A modern beauty house rooted in French craft." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-noir text-ivory pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="/brand-slides/slide-08.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/60 to-noir/40" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="eyebrow !text-champagne mb-6">— About JLD</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] max-w-4xl">
            A quiet rebellion, <em className="font-editorial italic text-champagne">65 years in the making</em>.
          </h1>
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <p className="eyebrow mb-4">— Brand Story</p>
          <p className="font-editorial text-2xl md:text-3xl text-brown leading-[1.5] italic">
            "We did not set out to open a salon. We set out to compose a house — a place where craftsmanship, design and hospitality are inseparable. JLD is the answer to a single question: what would beauty look like if it were built with the care of a fashion house?"
          </p>
          <p className="mt-8 text-sm tracking-[0.3em] uppercase text-noir">— The Founders</p>
        </div>
      </section>

      {/* 65 Years of French Heritage */}
      <section className="bg-beige py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <p className="eyebrow mb-4">— 65 Years of French Heritage</p>
            <h2 className="font-display text-4xl md:text-5xl text-noir leading-tight">
              From a Parisian atelier in 1961, <em className="font-editorial italic text-champagne">to the world's №1 salon group</em>.
            </h2>
            <div className="mt-8 space-y-5 font-editorial text-lg text-brown leading-relaxed">
              <p>The first Jean Louis David salon opened on Rue de Wagram, Paris. Jean Louis David went on to assist Helmut Newton and Herb Ritts, invent the layered haircut with clippers, and launch the world's first professional training videos.</p>
              <p>In 2008 the brand joined Provalliance — a group with 3,700+ salons across 35 countries. JLD India carries this lineage forward, adapted to the tastes and rhythms of Indian luxury.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src="/brand-slides/slide-09.jpg" alt="" loading="lazy" className="col-span-2 w-full h-[320px] object-cover" />
            <img src="/brand-slides/slide-11.jpg" alt="" loading="lazy" className="w-full h-[240px] object-cover" />
            <img src="/brand-slides/slide-12.jpg" alt="" loading="lazy" className="w-full h-[240px] object-cover" />
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="max-w-3xl mb-14">
            <p className="eyebrow mb-4">— Philosophy</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-noir leading-tight">
              Three disciplines. <em className="font-editorial italic text-champagne">One house.</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10 md:gap-14">
            {[
              { t: "Design", b: "Every salon is composed by our in-house studio. Architecture is brand — light, material and silence do the first talking." },
              { t: "Craft", b: "Our artists train continuously in the JLD method. The chair is a stage, and a discipline." },
              { t: "Hospitality", b: "Borrowed from the finest hotels — service is the silent layer beneath the cut, felt long after the appointment ends." },
            ].map((p) => (
              <div key={p.t} className="border-t border-champagne pt-6">
                <h3 className="font-display text-3xl text-noir mb-4">{p.t}</h3>
                <p className="font-editorial text-lg text-brown leading-relaxed">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-beige py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="eyebrow mb-4">— Meet the Founders</p>
          <div className="min-h-[240px]" />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-2 gap-10 lg:gap-16">
          <div className="border-t border-champagne pt-6">
            <p className="eyebrow mb-3">— Mission</p>
            <h3 className="font-display text-3xl md:text-4xl text-noir leading-tight">
              To make luxury salon experiences the everyday standard in India.
            </h3>
            <p className="mt-6 font-editorial text-lg text-brown leading-relaxed">
              We measure ourselves by the quality of every guest visit — the sit-down, the wash, the conversation, the finish — and by the standards we set for the industry that follows.
            </p>
          </div>
          <div className="border-t border-champagne pt-6">
            <p className="eyebrow mb-3">— Vision</p>
            <h3 className="font-display text-3xl md:text-4xl text-noir leading-tight">
              A house of beauty, present in every serious Indian city.
            </h3>
            <p className="mt-6 font-editorial text-lg text-brown leading-relaxed">
              Built with the discipline of a fashion house and the warmth of a hotel — and shared with a small circle of visionary franchise partners.
            </p>
          </div>
        </div>
      </section>

      {/* Why Clients Trust JLD */}
      <section className="bg-noir text-ivory py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="max-w-3xl mb-14">
            <p className="eyebrow !text-champagne mb-4">— Why clients trust JLD</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
              The quiet things, <em className="font-editorial italic text-champagne">done exceptionally well</em>.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {[
              ["French heritage", "65 years of Parisian salon craft, adapted for India."],
              ["A single method", "Every JLD artist is trained in the same discipline — consistent from Mumbai to Delhi."],
              ["World-class products", "L'Oréal Professionnel and Kérastase power every chair."],
              ["Hospitality first", "Service borrowed from luxury hotels. Everything is intentional."],
            ].map(([t, b]) => (
              <div key={t} className="border-t border-champagne/40 pt-6">
                <h3 className="font-display text-2xl text-ivory mb-3">{t}</h3>
                <p className="font-editorial text-base text-ivory/75 leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Link to="/contact" className="btn-gold">Come, sit with us</Link>
          </div>
        </div>
      </section>
    </>
  );
}