import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import interiorReception from "@/assets/interior-reception.jpg";
import interiorStation from "@/assets/interior-station.jpg";

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
          <p className="eyebrow !text-champagne mb-6">— Partnership</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] max-w-5xl">
            Own a brand <em className="font-editorial italic text-champagne">built for the next decade</em> of Indian luxury.
          </h1>
          <p className="mt-8 font-editorial text-xl md:text-2xl text-ivory/80 max-w-3xl">
            Limited territories. Editorial brand. Operational excellence. Turnkey support from contract to opening night.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {[
              { k: "₹1.2 Cr", v: "Indicative investment" },
              { k: "28–36 mo", v: "Expected ROI window" },
              { k: "2,400 sq ft", v: "Typical footprint" },
              { k: "12–18 wk", v: "From signing to opening" },
              { k: "9.5%", v: "Royalty on revenue" },
              { k: "100% turnkey", v: "Design, fit-out, training, launch" },
            ].map((m) => (
              <div key={m.k} className="border-t border-champagne pt-6">
                <div className="font-display text-5xl md:text-6xl text-noir italic">{m.k}</div>
                <p className="mt-2 text-sm tracking-[0.2em] uppercase text-brown">{m.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <img src={interiorStation} alt="A JLD styling station" width={1200} height={1500} loading="lazy" className="w-full h-[640px] object-cover" />
          <div>
            <p className="eyebrow mb-6">— The Journey</p>
            <h2 className="font-display text-4xl md:text-5xl text-noir leading-tight">
              From introduction to <em className="font-editorial italic text-brown">opening night</em>.
            </h2>
            <ol className="mt-10 space-y-8">
              {[
                ["01", "Discovery call", "We meet, we listen, we share the deck and economics."],
                ["02", "Territory & site", "We identify your city, mall, or high-street with our real-estate partners."],
                ["03", "Agreement", "A clear, founder-led franchise agreement."],
                ["04", "Fit-out & training", "Our studio designs the space. Our academy trains your team."],
                ["05", "Launch", "National PR, local activation, opening week support."],
              ].map(([n, t, b]) => (
                <li key={n} className="grid grid-cols-12 gap-4">
                  <div className="col-span-2 font-display italic text-3xl text-champagne">{n}</div>
                  <div className="col-span-10">
                    <h3 className="font-display text-2xl text-noir">{t}</h3>
                    <p className="font-editorial text-lg text-brown mt-1">{b}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-noir text-ivory py-28 md:py-40">
        <div className="mx-auto max-w-[900px] px-6 md:px-10">
          <p className="eyebrow !text-champagne mb-6">— Enquire</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Request the <em className="font-editorial italic text-champagne">franchise deck</em>.
          </h2>
          <p className="mt-6 font-editorial text-xl text-ivory/80">
            Tell us a little about you. Our partnerships team will respond within 48 hours.
          </p>
          {sent ? (
            <div className="mt-12 border border-champagne/40 p-10">
              <h3 className="font-display text-3xl text-champagne mb-3">Thank you.</h3>
              <p className="font-editorial text-lg text-ivory/80">We have received your enquiry. The JLD partnerships team will be in touch shortly.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="mt-12 grid md:grid-cols-2 gap-6"
            >
              <Field label="Full name" />
              <Field label="Email" type="email" />
              <Field label="Phone (with WhatsApp)" />
              <Field label="City of interest" />
              <div className="md:col-span-2">
                <label className="eyebrow !text-ivory/60 block mb-3">Investment capacity</label>
                <select className="w-full bg-transparent border-b border-ivory/30 py-3 text-sm outline-none focus:border-champagne">
                  <option className="bg-noir">₹1 – 1.5 Cr</option>
                  <option className="bg-noir">₹1.5 – 2.5 Cr</option>
                  <option className="bg-noir">₹2.5 Cr +</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="eyebrow !text-ivory/60 block mb-3">A note (optional)</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-ivory/30 py-3 text-sm outline-none focus:border-champagne resize-none" placeholder="Tell us about your background and your vision."></textarea>
              </div>
              <div className="md:col-span-2 mt-4 flex flex-col sm:flex-row gap-4">
                <button type="submit" className="btn-gold">Send Enquiry</button>
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="btn-ghost">WhatsApp Instead</a>
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
      <label className="eyebrow !text-ivory/60 block mb-3">{label}</label>
      <input type={type} className="w-full bg-transparent border-b border-ivory/30 py-3 text-sm outline-none focus:border-champagne transition-colors" />
    </div>
  );
}