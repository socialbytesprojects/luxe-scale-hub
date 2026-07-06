import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — JLD" },
      { name: "description", content: "The brands, products and partners we work with at JLD." },
      { property: "og:title", content: "Partners — JLD" },
      { property: "og:description", content: "The brands, products and partners we work with at JLD." },
    ],
  }),
  component: PartnersPage,
});

function PartnersPage() {
  return (
    <>
      <section className="relative bg-noir text-ivory pt-40 pb-28 md:pt-52 md:pb-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="eyebrow !text-champagne mb-6">— Partners & Products</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] max-w-5xl">
            The <em className="font-editorial italic text-champagne">houses</em> behind our craft.
          </h1>
          <p className="mt-8 font-editorial text-xl md:text-2xl text-ivory/80 max-w-3xl">
            A curated network of brands, product houses and industry partners who share our standards. This page is being updated.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-end mb-14">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-6">— Products We Use</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-noir leading-[1.05]">
                The tools of the <em className="font-editorial italic text-brown">trade</em>.
              </h2>
            </div>
            <p className="lg:col-span-5 font-editorial text-lg md:text-xl text-brown leading-relaxed">
              Placeholder — the full list of professional product lines carried across our floors will live here.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-noir/10">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-ivory aspect-[4/3] flex items-center justify-center">
                <span className="font-display italic text-2xl text-noir/30">Brand {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-end mb-14">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-6">— Our Partners</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-noir leading-[1.05]">
                The <em className="font-editorial italic text-brown">people</em> we build with.
              </h2>
            </div>
            <p className="lg:col-span-5 font-editorial text-lg md:text-xl text-brown leading-relaxed">
              Placeholder — press, education, real estate, media and creative partners will be listed here.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-noir/10">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-beige aspect-[3/2] flex items-center justify-center">
                <span className="font-display italic text-xl text-noir/30">Partner {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}