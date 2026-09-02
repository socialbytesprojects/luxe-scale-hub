import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { toast } from "sonner";
import interiorCafe from "@/assets/interior-cafe.jpg";
import { submitAppointmentRequest } from "@/lib/submissions.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book & Contact — JLD" },
      { name: "description", content: "Reserve a chair at Jean Louis David India. Speak with our concierge or request a callback for appointments and services." },
      { property: "og:title", content: "Book & Contact — JLD" },
      { property: "og:description", content: "Reserve a chair at Jean Louis David India." },
      { property: "og:url", content: "https://jeanlouisdavid.in/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Book & Contact — JLD" },
      { name: "twitter:description", content: "Reserve a chair at Jean Louis David India." },
    ],
    links: [
      { rel: "canonical", href: "https://jeanlouisdavid.in/contact" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    notes: "",
    honeypot: "",
  });

  const update = (key: keyof typeof form, value: string) => setForm((f) => ({ ...f, [key]: value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.honeypot) return;
    setBusy(true);
    try {
      await submitAppointmentRequest({ data: form });
      setSent(true);
      toast.success("Request received", { description: "Our concierge will call you shortly." });
    } catch (err: any) {
      toast.error("Something went wrong", { description: err?.message || "Please try again or call us directly." });
    } finally {
      setBusy(false);
    }
  }

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
                <p className="font-editorial text-xl text-noir/80">Our concierge will call you shortly to finalise the time.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <Row>
                  <Input label="Full name" value={form.name} onChange={(v) => update("name", v)} required />
                  <Input label="Phone" type="tel" value={form.phone} onChange={(v) => update("phone", v)} required />
                </Row>
                <Row>
                  <Input label="Email" type="email" value={form.email} onChange={(v) => update("email", v)} />
                  <Input label="Service" value={form.service} onChange={(v) => update("service", v)} />
                </Row>
                <Row>
                  <Input label="Preferred date" type="date" value={form.preferredDate} onChange={(v) => update("preferredDate", v)} />
                  <Input label="Preferred time" type="time" value={form.preferredTime} onChange={(v) => update("preferredTime", v)} />
                </Row>
                <div>
                  <label htmlFor="notes" className="eyebrow block mb-3">A note for our concierge</label>
                  <textarea
                    id="notes"
                    rows={3}
                    value={form.notes}
                    onChange={(e) => update("notes", e.target.value)}
                    className="w-full border-b border-noir/20 py-3 text-sm bg-transparent outline-none focus:border-champagne resize-none"
                  />
                </div>
                <input id="website" type="text" name="website" value={form.honeypot} onChange={(e) => update("honeypot", e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" />
                <button type="submit" disabled={busy} className="btn-noir disabled:opacity-60 disabled:cursor-not-allowed">
                  {busy ? "Sending..." : "Reserve Chair"}
                </button>
              </form>
            )}
          </div>
          <aside className="lg:col-span-5">
            <div className="bg-noir text-ivory p-8">
              <p className="eyebrow !text-champagne mb-4">— Concierge</p>
              <p className="font-editorial text-xl text-ivory">Monday to Sunday · 9 AM to 10 PM</p>
              <p className="font-display text-2xl text-champagne mt-3">+91 95095 02222</p>
              <div className="mt-6 pt-6 border-t border-ivory/20">
                <p className="eyebrow !text-champagne mb-3">— Visit us</p>
                <address className="not-italic font-editorial text-lg md:text-xl text-ivory/90 leading-relaxed">
                  Site No 2026, 1st Sector, 5th Cross,<br />
                  27th Main Road, HSR Layout,<br />
                  Bengaluru, Karnataka 560102
                </address>
              </div>
              <a href="https://wa.me/919509502222" target="_blank" rel="noopener noreferrer" className="btn-gold mt-6">WhatsApp</a>
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
function Input({ label, type = "text", value, onChange, required }: { label: string; type?: string; value: string; onChange: (v: string) => void; required?: boolean }) {
  const id = label.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  return (
    <div>
      <label htmlFor={id} className="eyebrow block mb-3">{label}{required && <span className="text-champagne ml-1">*</span>}</label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border-b border-noir/20 py-3 text-sm bg-transparent outline-none focus:border-champagne transition-colors"
      />
    </div>
  );
}