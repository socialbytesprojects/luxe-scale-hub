import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import interiorReception from "@/assets/interior-reception.jpg";
import interiorStation from "@/assets/interior-station.jpg";
import interiorWash from "@/assets/interior-wash.jpg";
import interiorRetail from "@/assets/interior-retail.jpg";
import interiorCafe from "@/assets/interior-cafe.jpg";

export const Route = createFileRoute("/franchise")({
  head: () => ({
    meta: [
      { title: "Franchise — JLD" },
      { name: "description", content: "A franchise opportunity for entrepreneurs who want to own a luxury salon brand. Turnkey support across brand, design, training, and technology." },
      { property: "og:title", content: "Franchise — JLD" },
      { property: "og:description", content: "Partner with a brand built for scale." },
    ],
  }),
  component: FranchisePage,
});

function FranchisePage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="relative bg-noir text-ivory pt-40 pb-28 md:pt-52 md:pb-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={interiorReception} alt="" width={1400} height={1000} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-noir/60 to-noir" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="eyebrow !text-champagne mb-6">— Franchise</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] max-w-5xl">
            Crafted for excellence. <em className="font-editorial italic text-champagne">Designed for growth.</em>
          </h1>
          <p className="mt-8 font-editorial text-xl md:text-2xl text-ivory/80 max-w-3xl">
            Build a brand. Not just a salon. JLD is a carefully engineered experience — now designed to grow with visionary entrepreneurs. When you open a JLD, you're not starting from scratch. You're stepping into a brand ecosystem built on luxury, consistency, innovation, and support.
          </p>
          <div className="mt-10">
            <a href="#franchise-form" className="btn-gold">Enquire Now</a>
          </div>
        </div>
      </section>

      {/* A Space That Feels Alive */}
      <section className="bg-ivory py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow mb-6">— More than a salon</p>
            <h2 className="font-display text-4xl md:text-5xl text-noir leading-tight">
              A space that <em className="font-editorial italic text-brown">feels alive</em>.
            </h2>
            <p className="mt-6 font-editorial text-lg md:text-xl text-brown leading-relaxed">
              JLD spaces are designed to do more than look beautiful. They energise, calm, and connect. From eco-conscious materials to thoughtfully designed interiors, every JLD salon is created to be:
            </p>
            <ul className="mt-8 space-y-4">
              {["Environmentally friendly", "Emotionally uplifting", "Comfortably premium"].map((v) => (
                <li key={v} className="flex items-start gap-4">
                  <span className="mt-2 h-1.5 w-6 bg-champagne shrink-0" />
                  <span className="font-editorial text-lg text-noir">{v}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 font-editorial text-lg text-brown leading-relaxed italic">
              Clients don't just enter a salon — they enter a space that boosts mood, confidence, and energy from the very first step. That's not accidental. That's design with purpose.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={interiorStation} alt="" width={1200} height={1500} loading="lazy" className="w-full h-[300px] md:h-[380px] object-cover" />
            <img src={interiorWash} alt="" width={1200} height={1500} loading="lazy" className="w-full h-[300px] md:h-[380px] object-cover mt-8" />
            <img src={interiorCafe} alt="" width={1200} height={1500} loading="lazy" className="w-full h-[300px] md:h-[380px] object-cover" />
            <img src={interiorRetail} alt="" width={1200} height={1500} loading="lazy" className="w-full h-[300px] md:h-[380px] object-cover mt-8" />
          </div>
        </div>
      </section>

      {/* FOCO Model */}
      <section className="bg-noir text-ivory py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="max-w-3xl mb-16">
            <p className="eyebrow !text-champagne mb-6">— The JLD Franchise Model</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
              FOCO — <em className="font-editorial italic text-champagne">Franchise Owned, Company Operated</em>.
            </h2>
            <p className="mt-6 font-editorial text-xl text-ivory/80">
              JLD operates on a FOCO model — a strategic approach that sets us apart. You own the franchise. We operate the salon.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-ivory/10">
            <div className="bg-noir p-10 md:p-12">
              <p className="eyebrow !text-champagne mb-6">What this means for you</p>
              <ul className="space-y-5 font-editorial text-lg text-ivory/85">
                <li className="flex gap-4"><span className="text-champagne font-display italic">01</span>You own the franchise</li>
                <li className="flex gap-4"><span className="text-champagne font-display italic">02</span>JLD operates the salon</li>
              </ul>
            </div>
            <div className="bg-noir p-10 md:p-12">
              <p className="eyebrow !text-champagne mb-6">This model ensures</p>
              <ul className="space-y-5 font-editorial text-lg text-ivory/85">
                {[
                  "Consistent service quality across all locations",
                  "Streamlined operations",
                  "Brand integrity at every touchpoint",
                  "Reduced operational stress for franchise partners",
                ].map((v) => (
                  <li key={v} className="flex gap-4"><span className="text-champagne">—</span>{v}</li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-16 font-editorial italic text-2xl md:text-3xl text-champagne text-center">
            You invest in the brand. We run it with precision.
          </p>
        </div>
      </section>

      {/* End-to-end Support */}
      <section className="bg-beige py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow mb-6">— End-to-end Support</p>
            <h2 className="font-display text-4xl md:text-5xl text-noir leading-tight">
              A franchise succeeds only when the <em className="font-editorial italic text-brown">partner succeeds</em>.
            </h2>
            <p className="mt-6 font-editorial text-lg text-brown leading-relaxed">
              That's why we provide ongoing support across every function that matters. You're never left to figure it out. You're guided, supported, and strengthened at every stage.
            </p>
            <ul className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {[
                "Marketing & advertising strategy",
                "Brand communication",
                "Operational systems & SOPs",
                "Team training & development",
                "Product integration",
                "Performance monitoring",
              ].map((v) => (
                <li key={v} className="flex items-start gap-3 font-editorial text-lg text-noir">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-champagne shrink-0" />
                  {v}
                </li>
              ))}
            </ul>
          </div>
          <img src={interiorStation} alt="A JLD styling station" width={1200} height={1500} loading="lazy" className="w-full h-[640px] object-cover" />
        </div>
      </section>

      {/* Why Entrepreneurs Choose JLD */}
      <section className="bg-ivory py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="max-w-3xl mb-16">
            <p className="eyebrow mb-6">— Why Entrepreneurs Choose JLD</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-noir leading-tight">
              Because it's built <em className="font-editorial italic text-brown">for the long run</em>.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-noir/10">
            {[
              ["A proven premium brand", "Six decades of European hairdressing heritage."],
              ["Proprietary products", "That set industry standards."],
              ["FOCO model", "Structured to reduce your operational risk."],
              ["Operational backbone", "SOPs, systems and training built for scale."],
              ["Luxury positioning", "That commands trust from day one."],
              ["Loyalty by design", "A customer experience that drives repeat visits."],
            ].map(([title, body]) => (
              <div key={title} className="bg-ivory p-10">
                <h3 className="font-display text-2xl text-noir">{title}</h3>
                <p className="mt-3 font-editorial text-lg text-brown">{body}</p>
              </div>
            ))}
          </div>
          <p className="mt-16 font-editorial italic text-2xl md:text-3xl text-noir text-center">
            JLD is not about chasing trends. It's about setting standards.
          </p>
        </div>
      </section>

      {/* The JLD Promise */}
      <section className="bg-noir text-ivory py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 text-center">
          <p className="eyebrow !text-champagne mb-6">— The JLD Promise</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl mx-auto">
            Luxury with purpose. <em className="font-editorial italic text-champagne">Growth with support.</em>
          </h2>
          <div className="mt-16 grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              ["We don't sell franchises.", "We build partnerships."],
              ["We don't open salons.", "We create experiences."],
              ["We don't follow the market.", "We lead it."],
            ].map(([a, b]) => (
              <div key={a} className="border-t border-champagne/40 pt-8">
                <p className="font-editorial text-lg text-ivory/70">{a}</p>
                <p className="mt-2 font-display italic text-2xl text-champagne">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="franchise-form" className="bg-beige py-28 md:py-40 scroll-mt-24">
        <div className="mx-auto max-w-[900px] px-6 md:px-10">
          <p className="eyebrow mb-6">— Enquire</p>
          <h2 className="font-display text-4xl md:text-5xl text-noir leading-tight">
            Request the <em className="font-editorial italic text-brown">franchise deck</em>.
          </h2>
          <p className="mt-6 font-editorial text-xl text-brown">
            Tell us a little about you. Our partnerships team will respond within 48 hours.
          </p>
          {sent ? (
            <div className="mt-12 border border-noir/20 p-10 bg-ivory">
              <h3 className="font-display text-3xl text-noir mb-3">Thank you.</h3>
              <p className="font-editorial text-lg text-brown">We have received your enquiry. The JLD partnerships team will be in touch shortly.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="mt-12 grid md:grid-cols-2 gap-6"
            >
              <Field label="Full name" />
              <Field label="Email" type="email" />
              <Field label="Phone (with WhatsApp)" />
              <Field label="Interested location" />
              <div className="md:col-span-2">
                <label className="eyebrow !text-noir/60 block mb-3">Message (optional)</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-noir/30 py-3 text-sm text-noir outline-none focus:border-brown resize-none" placeholder="Tell us about your background and your vision."></textarea>
              </div>
              <div className="md:col-span-2 mt-4 flex flex-col sm:flex-row gap-4">
                <button type="submit" className="btn-gold">Send Enquiry</button>
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="btn-noir">WhatsApp Instead</a>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="eyebrow !text-noir/60 block mb-3">{label}</label>
      <input type={type} className="w-full bg-transparent border-b border-noir/30 py-3 text-sm text-noir outline-none focus:border-brown transition-colors" />
    </div>
  );
}