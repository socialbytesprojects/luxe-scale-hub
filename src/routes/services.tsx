import { createFileRoute, Link } from "@tanstack/react-router";
import stylistWork from "@/assets/stylist-work.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — JLD" },
      { name: "description", content: "Hair, colour, skin, bridal, and grooming — every service composed with editorial precision." },
      { property: "og:title", content: "Services — JLD" },
      { property: "og:description", content: "The JLD service menu." },
    ],
  }),
  component: Services,
});

const MENU = [
  {
    cat: "Hair",
    items: [
      { name: "Signature Cut & Style", price: "₹4,800", note: "Senior artist · 90 min" },
      { name: "The Maison Cut", price: "₹8,500", note: "Creative director · 120 min" },
      { name: "Editorial Blowout", price: "₹2,800", note: "Express ritual · 45 min" },
      { name: "Keratin Restoration", price: "₹16,000+", note: "Full treatment · 3 hrs" },
    ],
  },
  {
    cat: "Colour",
    items: [
      { name: "Global Colour", price: "₹6,500+", note: "Premium ammonia-free" },
      { name: "Highlights & Balayage", price: "₹12,000+", note: "Hand-painted artistry" },
      { name: "Couture Colour Correction", price: "On consult", note: "Master colourist" },
      { name: "Gloss & Tone", price: "₹3,800", note: "Add-on or stand-alone" },
    ],
  },
  {
    cat: "Skin & Spa",
    items: [
      { name: "Maison Glow Facial", price: "₹5,400", note: "Signature ritual · 75 min" },
      { name: "Deep Cleanse Express", price: "₹2,800", note: "45 min" },
      { name: "Hair Spa Treatment", price: "₹3,200", note: "Scalp + length" },
    ],
  },
  {
    cat: "Bridal & Editorial",
    items: [
      { name: "Bridal Couture", price: "From ₹35,000", note: "Trial + day-of" },
      { name: "Editorial / On-set", price: "On consult", note: "Press, film, runway" },
      { name: "Groom's Suite", price: "From ₹18,000", note: "Full grooming day" },
    ],
  },
];

function Services() {
  return (
    <>
      <section className="relative bg-noir text-ivory pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={stylistWork} alt="" width={1400} height={1000} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-noir/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="eyebrow !text-champagne mb-6">— The Menu</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] max-w-4xl">
            Every service, <em className="font-editorial italic text-champagne">composed</em>.
          </h1>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 space-y-24">
          {MENU.map((g) => (
            <div key={g.cat}>
              <div className="flex items-baseline justify-between mb-12 pb-6 border-b border-champagne">
                <h2 className="font-display text-4xl md:text-5xl text-noir">{g.cat}</h2>
                <span className="font-editorial italic text-brown text-lg">{g.items.length} rituals</span>
              </div>
              <ul className="space-y-8">
                {g.items.map((it) => (
                  <li key={it.name} className="grid grid-cols-12 gap-4 items-baseline">
                    <div className="col-span-12 md:col-span-7">
                      <h3 className="font-display text-2xl text-noir">{it.name}</h3>
                      <p className="text-sm text-brown mt-1 font-editorial italic">{it.note}</p>
                    </div>
                    <div className="hidden md:block col-span-3 border-b border-dotted border-brown/30" />
                    <div className="col-span-12 md:col-span-2 md:text-right font-display text-xl text-noir">{it.price}</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="text-center pt-12">
            <Link to="/contact" className="btn-noir">Book a Service</Link>
          </div>
        </div>
      </section>
    </>
  );
}