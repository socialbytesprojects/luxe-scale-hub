import { createFileRoute, Link } from "@tanstack/react-router";
import sonniyaImg from "@/assets/sonniya.png.asset.json";
import nitinImg from "@/assets/nitin.png.asset.json";

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
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-noir via-noir to-noir/90" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 text-center">
          <p className="eyebrow !text-champagne mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-champagne" />
            About JLD
            <span className="h-px w-10 bg-champagne" />
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] max-w-4xl mx-auto">
            A quiet rebellion, <em className="font-editorial italic text-champagne">65 years in the making</em>.
          </h1>
          <p className="mt-8 font-editorial text-lg md:text-xl text-ivory/75 max-w-2xl mx-auto italic">
            Parisian in origin. Indian in temperament. Precise in every detail.
          </p>
        </div>
      </section>

      {/* 65 Years of French Heritage */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <div className="text-center">
            <p className="eyebrow mb-4">— 65 Years of French Heritage</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-noir leading-tight">
              From a Parisian atelier in 1961, <em className="font-editorial italic text-champagne">to one of the world's largest salon networks</em>.
            </h2>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-10 md:gap-14 text-left">
            <p className="font-editorial text-xl md:text-2xl text-brown leading-relaxed">
              Jean Louis David opened its first salon in Paris in 1961 with a simple conviction: a haircut should be built around the person wearing it, not the fashion of the season. That idea reshaped French hairdressing — cuts designed to move, to grow out gracefully, and to be lived in.
            </p>
            <p className="font-editorial text-xl md:text-2xl text-brown leading-relaxed">
              Six decades later, the house counts 750+ salons across 20+ countries, a proprietary cutting method taught in its own academies, and a place among the most recognised names in professional beauty. India is the next chapter — the same craft, the same standards, delivered close to home.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-champagne pt-10">
            {[
              ["1961", "Founded in Paris"],
              ["750+", "Salons worldwide"],
              ["20+", "Countries"],
              ["2026", "India chapter begins"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-display text-4xl md:text-5xl text-noir">{n}</p>
                <p className="eyebrow mt-2">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we stand for */}
      <section className="bg-beige py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-4">— What we stand for</p>
            <h2 className="font-display text-4xl md:text-5xl text-noir leading-tight">
              A house built on <em className="font-editorial italic text-champagne">method, not trend</em>.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              ["The cut comes first", "Every service begins with a consultation and a cut engineered for your hair's texture, density and how you actually wear it."],
              ["One trained method", "Artists are trained in a single French technique, so the result is the same whether you sit down in Paris, Delhi or Mumbai."],
              ["Considered, not rushed", "Timings, products and finishing are set by the house — never by how quickly a chair can be turned over."],
            ].map(([t, b]) => (
              <div key={t} className="border-t border-champagne pt-6">
                <h3 className="font-display text-2xl md:text-3xl text-noir mb-3">{t}</h3>
                <p className="font-editorial text-xl text-brown leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="max-w-3xl mb-14">
            <p className="eyebrow mb-4">— Meet the Founders</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-noir leading-tight">
              65 years of French excellence. <em className="font-editorial italic text-champagne">A new chapter in India.</em>
            </h2>
            <p className="mt-6 font-editorial text-xl md:text-2xl text-brown leading-relaxed">
              Founded in 1961, Jean Louis David has spent over six decades shaping the craft of French hairdressing — evolving with every era while staying rooted in the creativity and precision that built its name. Today, with 750+ salons across 20+ countries, it opens its next chapter in India.
            </p>
            <p className="mt-5 font-editorial text-xl md:text-2xl text-brown leading-relaxed">
              Leading that chapter are Sonniya and Nitin Sharma — entrepreneurs with two decades in service-led businesses and over a decade focused specifically on the premium salon industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-14">
            {[
              {
                name: "Sonniya",
                img: sonniyaImg.url,
                pos: "object-[58%_28%]",
                body: "Sonniya shapes the vision behind Jean Louis David's India journey. Years spent studying leading beauty markets across Europe and the USA have given her a close understanding of what makes salon brands endure — how they earn loyalty and turn a visit into a lasting relationship. That understanding drives her focus here: global standards, delivered through a guest experience that feels personal every time.",
              },
              {
                name: "Nitin",
                img: nitinImg.url,
                pos: "object-[38%_25%]",
                body: "Nitin brings the execution behind that vision. His experience across service industries — sharpened by over a decade specifically in premium salons — has taught him how creativity and operational discipline reinforce each other. His approach: strong brands aren't built on inspiration alone, but on the systems and people that deliver it consistently, visit after visit.",
              },
            ].map((f) => (
              <article key={f.name}>
                <div className="relative w-full overflow-hidden bg-ivory aspect-[4/5]">
                  <img
                    src={f.img}
                    alt={`${f.name} Sharma, co-founder of JLD India`}
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover ${f.pos}`}
                  />
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-noir mt-6">{f.name}</h3>
                <p className="mt-4 font-editorial text-xl text-brown leading-relaxed">{f.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 border-t border-champagne pt-8 max-w-3xl">
            <h3 className="font-display text-3xl md:text-4xl text-noir leading-tight">A partnership built on trust</h3>
            <p className="mt-5 font-editorial text-xl md:text-2xl text-brown leading-relaxed">
              An earlier French salon brand's expansion into India was placed in their hands. What followed became one of Bangalore's most respected premium salon names — proof that a global brand's standards can take root and thrive here, given the right execution.
            </p>
            <p className="mt-5 font-editorial text-xl md:text-2xl text-brown leading-relaxed">
              That track record is why Jean Louis David — a brand that has led its industry since 1961 without ever diluting its heritage — now begins its own India story with them.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-beige py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-2 gap-10 lg:gap-16">
          <div className="border-t border-champagne pt-6">
            <p className="eyebrow mb-3">— Mission</p>
            <h3 className="font-display text-3xl md:text-4xl text-noir leading-tight">
              To make luxury salon experiences the everyday standard in India.
            </h3>
            <p className="mt-6 font-editorial text-xl text-brown leading-relaxed">
              We measure ourselves by the quality of every guest visit — the sit-down, the wash, the conversation, the finish — and by the standards we set for the industry that follows.
            </p>
          </div>
          <div className="border-t border-champagne pt-6">
            <p className="eyebrow mb-3">— Vision</p>
            <h3 className="font-display text-3xl md:text-4xl text-noir leading-tight">
              A house of beauty, present in every serious Indian city.
            </h3>
            <p className="mt-6 font-editorial text-xl text-brown leading-relaxed">
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
                <p className="font-editorial text-lg text-ivory/75 leading-relaxed">{b}</p>
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