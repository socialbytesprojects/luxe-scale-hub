import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import interiorCafe from "@/assets/interior-cafe.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book & Contact — JLD" },
      { name: "description", content: "Reserve a chair, find a JLD near you, or speak with our concierge." },
      { property: "og:title", content: "Book — JLD" },
      { property: "og:description", content: "Reserve a chair at JLD." },
    ],
  }),
  component: Contact,
});

const LOCATIONS = [
  { city: "Mumbai", area: "Kala Ghoda · Bandra West", phone: "+91 22 4000 1100" },
  { city: "Delhi NCR", area: "DLF Emporio · Khan Market", phone: "+91 11 4000 2200" },
  { city: "Bengaluru", area: "UB City · Indiranagar", phone: "+91 80 4000 3300" },
];

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="relative bg-noir text-ivory pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={interiorCafe} alt="" width={1200} height={1500} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-noir/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="eyebrow !text-champagne mb-6">— Reserve</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl max-w-4xl leading-[1.02]">
            A chair, <em className="font-editorial italic text-champagne">held for you</em>.
          </h1>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl md:text-4xl text-noir mb-10">Request an appointment</h2>
            {sent ? (
              <div className="border border-champagne p-10 bg-beige">
                <h3 className="font-display text-3xl text-noir mb-3">Confirmed.</h3>
                <p className="font-editorial text-lg text-brown">Our concierge will call you shortly to finalise the time.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-8">
                <Row>
                  <Input label="Full name" />
                  <Input label="Phone" type="tel" />
                </Row>
                <Row>
                  <Input label="Email" type="email" />
                  <Input label="Service" />
                </Row>
                <Row>
                  <Input label="Service" />
                  <Input label="Preferred date & time" type="datetime-local" />
                </Row>
                <div>
                  <label className="eyebrow block mb-3">A note for our concierge</label>
                  <textarea rows={3} className="w-full border-b border-noir/20 py-3 text-sm bg-transparent outline-none focus:border-champagne resize-none" />
                </div>
                <button type="submit" className="btn-noir">Reserve Chair</button>
              </form>
            )}
          </div>
          <aside className="lg:col-span-5 space-y-10">
            <div>
              <p className="eyebrow mb-4">— The Houses</p>
              <div className="space-y-8">
                {LOCATIONS.map((l) => (
                  <div key={l.city} className="border-l-2 border-champagne pl-6">
                    <h3 className="font-display text-2xl text-noir">{l.city}</h3>
                    <p className="font-editorial text-lg text-brown mt-1">{l.area}</p>
                    <p className="text-sm text-noir mt-2 tracking-wide">{l.phone}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-noir text-ivory p-8">
              <p className="eyebrow !text-champagne mb-4">— Concierge</p>
              <p className="font-editorial text-lg text-ivory/85">Monday to Sunday · 9 AM to 10 PM</p>
              <p className="font-display text-2xl text-champagne mt-3">+91 98XXX XXX XX</p>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="btn-gold mt-6">WhatsApp</a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Row({ children }: { children: ReactNode }) {
  return <div className="grid md:grid-cols-2 gap-6">{children}</div>;
}
function Input({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="eyebrow block mb-3">{label}</label>
      <input type={type} className="w-full border-b border-noir/20 py-3 text-sm bg-transparent outline-none focus:border-champagne transition-colors" />
    </div>
  );
}
function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="eyebrow block mb-3">{label}</label>
      <select className="w-full border-b border-noir/20 py-3 text-sm bg-transparent outline-none focus:border-champagne">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}