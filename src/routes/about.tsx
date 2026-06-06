import { createFileRoute, Link } from "@tanstack/react-router";
import founder from "@/assets/founder.jpg";
import clientPortrait from "@/assets/client-portrait.jpg";
import interiorReception from "@/assets/interior-reception.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "The House — JLD" },
      { name: "description", content: "The philosophy, the founder, and the manifesto behind India's house of quiet luxury beauty." },
      { property: "og:title", content: "The House — JLD" },
      { property: "og:description", content: "Built to redefine luxury beauty through design, technology, and obsession." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative bg-noir text-ivory pt-40 pb-28 md:pt-52 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src={interiorReception} alt="" width={1400} height={1000} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/70 to-noir/50" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="eyebrow !text-champagne mb-6">— The House</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl max-w-4xl leading-[1.02]">
            A quiet rebellion <em className="font-editorial italic text-champagne">against the ordinary</em>.
          </h1>
        </div>
      </section>

      <section className="bg-ivory py-28 md:py-40">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <p className="font-editorial text-2xl md:text-3xl text-brown leading-[1.5] italic">
            "We did not set out to open a salon. We set out to compose a house — a place where craftsmanship, design, and hospitality are inseparable. Where a haircut is a ritual, and a chair is a stage. JLD is the answer to the question we asked ourselves: what would beauty look like if it were built with the care of a fashion house?"
          </p>
          <p className="mt-10 text-sm tracking-[0.3em] uppercase text-noir">— The Founder</p>
        </div>
      </section>

      <section className="bg-beige py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img src={founder} alt="Founder portrait" width={1200} height={1500} loading="lazy" className="w-full h-[640px] object-cover" />
          </div>
          <div>
            <p className="eyebrow mb-6">— Founder's Note</p>
            <h2 className="font-display text-4xl md:text-5xl text-noir leading-tight">
              Twenty years of obsession with <em className="font-editorial italic text-brown">a single idea</em>.
            </h2>
            <div className="mt-8 space-y-5 font-editorial text-lg text-brown leading-relaxed">
              <p>I trained in London. I worked in Paris. I came home to India and could not find the experience I had been part of building elsewhere. So I built it.</p>
              <p>JLD is the culmination of two decades of asking what luxury beauty could be when it is treated like an art form and run like a business of consequence.</p>
              <p>Today, we are opening the house to partners who feel the same hunger.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { t: "Design", b: "Every Maison is composed by our in-house studio. Architecture is brand." },
              { t: "Craft", b: "Our artists train continuously. The chair is a stage and a discipline." },
              { t: "Hospitality", b: "Borrowed from the finest hotels — service is the silent layer beneath the cut." },
            ].map((p) => (
              <div key={p.t} className="border-t border-champagne pt-8">
                <h3 className="font-display text-3xl text-noir mb-4">{p.t}</h3>
                <p className="font-editorial text-lg text-brown leading-relaxed">{p.b}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 grid md:grid-cols-2 gap-6 items-stretch">
            <img src={clientPortrait} alt="A guest at JLD" width={1200} height={1500} loading="lazy" className="w-full h-[520px] object-cover" />
            <div className="bg-noir text-ivory p-12 flex flex-col justify-center">
              <p className="eyebrow !text-champagne mb-6">— Visit</p>
              <h3 className="font-display text-4xl mb-6">Come, sit with us.</h3>
              <p className="font-editorial text-lg text-ivory/80 mb-8">An appointment at JLD is the easiest way to understand it.</p>
              <div><Link to="/contact" className="btn-gold">Book a Chair</Link></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}