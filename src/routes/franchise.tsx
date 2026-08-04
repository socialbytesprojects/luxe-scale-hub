import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { submitFranchiseEnquiry } from "@/lib/submissions.functions";

const brandSlide = (n: number) => `/brand-slides/slide-${String(n).padStart(2, "0")}.jpg`;

export const Route = createFileRoute("/franchise")({
  head: () => ({
    meta: [
      { title: "Franchise — JLD" },
      { name: "description", content: "Own a Jean Louis David salon in India. Turnkey setup, FOCO & FOFO models, end-to-end marketing and accounting support, and 65 years of French salon heritage." },
      { property: "og:title", content: "Franchise — JLD" },
      { property: "og:description", content: "Partner with a brand built for scale." },
      { property: "og:url", content: "https://jeanlouisdavid.in/franchise" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Franchise — JLD" },
      { name: "twitter:description", content: "Own a Jean Louis David salon in India." },
    ],
    links: [
      { rel: "canonical", href: "https://jeanlouisdavid.in/franchise" },
    ],
  }),
  component: FranchisePage,
});

const PILLARS = [
  {
    t: "End-to-end Marketing Support",
    b: "Launch campaigns, always-on social media management, and location-targeted advertising across Meta, Google and Instagram — planned and executed by the JLD marketing team.",
  },
  {
    t: "End-to-end Accounting Support",
    b: "Complete bookkeeping, GST management and statutory compliance — handled centrally by JLD so partners stay focused on growth.",
  },
  {
    t: "FOCO Model",
    b: "Franchise Owned, Company Operated. JLD's professionally trained operations team runs day-to-day salon operations at no additional operational cost.",
  },
  {
    t: "FOFO Model",
    b: "Franchise Owned, Franchise Operated — a carefully selected model for owner-operators, backed by structured support and continuous operational guidance.",
  },
  {
    t: "Turnkey Salon Setup",
    b: "End-to-end assistance with site selection, salon design, interiors, setup and launch — you receive a fully commissioned salon, ready to open.",
  },
  {
    t: "Recruitment & Training",
    b: "Access to JLD-trained stylists, structured onboarding, and continuous upskilling through the JLD academy.",
  },
  {
    t: "Global Product & Technology Ecosystem",
    b: "Powered by premium international brands — L'Oréal Professionnel and Kérastase — with integrated booking, POS and operational technology.",
  },
  {
    t: "Freedom to Choose",
    b: "Nothing is imposed. Franchise partners retain flexibility while benefiting from JLD's systems and expertise.",
  },
  {
    t: "65 Years of French Heritage",
    b: "Leverage decades of premium salon expertise, strong brand recognition and trusted positioning across a global network.",
  },
];

function FranchisePage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      {/* Hero */}
      <section className="relative bg-noir text-ivory pt-40 pb-28 md:pt-52 md:pb-36 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img src={brandSlide(50)} alt="" className="w-full h-full object-cover scale-125 opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-b from-noir/50 to-noir" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="eyebrow !text-champagne mb-6">— Franchise</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] max-w-5xl">
            Own a salon. <em className="font-editorial italic text-champagne">Backed by 65 years</em> of French heritage.
          </h1>
          <p className="mt-8 font-editorial text-xl md:text-2xl text-ivory/80 max-w-3xl">
            When you open a JLD, you are not starting from scratch — you are stepping into a global brand ecosystem built on luxury, consistency, innovation and support.
          </p>
          <div className="mt-10">
            <a href="#franchise-form" className="btn-gold">Enquire Now</a>
          </div>
        </div>
      </section>

      {/* Intro band */}
      <section className="bg-ivory py-16 md:py-24">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 text-center">
          <p className="eyebrow mb-4">— Why Partner With JLD</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-noir leading-[1.05]">
            A brand built for scale — <em className="font-editorial italic text-champagne">run with precision</em>.
          </h2>
          <p className="mt-8 font-editorial text-lg md:text-xl text-brown leading-relaxed">
            JLD partners with a small circle of qualified entrepreneurs to open flagship salons across India. Every partnership is supported end-to-end — from site selection to launch and beyond.
          </p>
        </div>
      </section>

      {/* Pillars grid */}
      <section className="bg-beige py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-champagne/40">
            {PILLARS.map((p, i) => (
              <div key={p.t} className="bg-ivory p-8 md:p-10">
                <p className="font-display italic text-champagne text-lg mb-4">0{i + 1}</p>
                <h3 className="font-display text-2xl md:text-3xl text-noir leading-tight">{p.t}</h3>
                <p className="mt-4 font-editorial text-base md:text-lg text-brown leading-relaxed">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Models comparison */}
      <section className="bg-noir text-ivory py-16 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="max-w-3xl mb-14">
            <p className="eyebrow !text-champagne mb-4">— The JLD Models</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
              Two ways to partner. <em className="font-editorial italic text-champagne">One standard.</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-ivory/10">
            <div className="bg-noir p-10 md:p-12">
              <p className="eyebrow !text-champagne mb-6">FOCO — Company Operated</p>
              <p className="font-editorial text-lg text-ivory/85 leading-relaxed">
                You own the franchise. JLD's operations team runs the salon day-to-day — from staffing to service quality — at no additional operational cost to you. Ideal for investor-partners.
              </p>
            </div>
            <div className="bg-noir p-10 md:p-12">
              <p className="eyebrow !text-champagne mb-6">FOFO — Owner Operated</p>
              <p className="font-editorial text-lg text-ivory/85 leading-relaxed">
                You own and run the salon, with the full JLD playbook, training, systems and central support behind you. Ideal for hands-on entrepreneurs.
              </p>
            </div>
          </div>
          <p className="mt-14 font-editorial italic text-2xl md:text-3xl text-champagne text-center">
            You choose the model. We ensure the standard.
          </p>
        </div>
      </section>

      {/* Journey / Support */}
      <section className="bg-ivory py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <p className="eyebrow mb-4">— The Partnership Journey</p>
            <h2 className="font-display text-4xl md:text-5xl text-noir leading-tight">
              A partner succeeds only when the <em className="font-editorial italic text-champagne">brand supports them fully</em>.
            </h2>
            <ol className="mt-10 space-y-6">
              {[
                ["Enquiry & Alignment", "We understand your city, your goals and the fit with the JLD brand."],
                ["Site & Design", "Site selection, lease negotiation and salon design by the JLD studio."],
                ["Build & Recruit", "Turnkey build-out, hiring and training of the JLD-standard team."],
                ["Launch", "Pre-opening marketing, launch campaign and first-month operations support."],
                ["Ongoing Growth", "Monthly marketing plans, accounting, upskilling and performance reviews."],
              ].map(([t, b], i) => (
                <li key={t} className="flex gap-5">
                  <span className="font-display italic text-champagne text-2xl md:text-3xl leading-none shrink-0 w-10">0{i + 1}</span>
                  <div>
                    <p className="font-display text-xl md:text-2xl text-noir">{t}</p>
                    <p className="mt-1 font-editorial text-base text-brown leading-relaxed">{b}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="w-full h-[520px] md:h-[640px] overflow-hidden">
            <img src={brandSlide(51)} alt="A JLD franchise moment" loading="lazy" className="w-full h-full object-cover scale-125" />
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="bg-noir text-ivory py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 text-center">
          <p className="eyebrow !text-champagne mb-6">— The JLD Promise</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl mx-auto">
            Luxury with purpose. <em className="font-editorial italic text-champagne">Growth with support.</em>
          </h2>
          <div className="mt-14 grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
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

      {/* Enquiry form */}
      <section id="franchise-form" className="bg-beige py-16 md:py-24 scroll-mt-24">
        <div className="mx-auto max-w-[900px] px-6 md:px-10">
          <p className="eyebrow mb-4">— Enquire</p>
          <h2 className="font-display text-4xl md:text-5xl text-noir leading-tight">
            Request the <em className="font-editorial italic text-champagne">franchise deck</em>.
          </h2>
          <p className="mt-6 font-editorial text-lg md:text-xl text-brown">
            Tell us a little about you. Our partnerships team will respond within 48 hours.
          </p>
          {sent ? (
            <div className="mt-12 border border-champagne/40 p-10 bg-ivory">
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
                <textarea rows={4} className="w-full bg-transparent border-b border-noir/30 py-3 text-sm text-noir outline-none focus:border-champagne resize-none" placeholder="Tell us about your background and your vision."></textarea>
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
      <input type={type} className="w-full bg-transparent border-b border-noir/30 py-3 text-sm text-noir outline-none focus:border-champagne transition-colors" />
    </div>
  );
}