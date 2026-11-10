import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

type SalonLocationPageProps = {
  title: string;
  region: string;
  image: string;
  imageAlt: string;
  address?: ReactNode;
  mapUrl?: string;
  mapEmbedUrl?: string;
};

export function SalonLocationPage({ title, region, image, imageAlt, address, mapUrl, mapEmbedUrl }: SalonLocationPageProps) {
  return (
    <>
      <section className="relative bg-noir text-ivory pt-40 pb-16 md:pt-52 md:pb-20 overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="eyebrow !text-champagne mb-5">— Our Salon</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.02]">{title}</h1>
          <p className="mt-4 font-editorial text-2xl md:text-3xl text-ivory/85">{region}</p>
        </div>
      </section>
      <section className="bg-ivory py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8 overflow-hidden bg-beige">
            <img src={image} alt={imageAlt} className="block aspect-[4/3] w-full object-cover" />
          </div>
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4">— Visit us</p>
            {address ? <address className="not-italic font-editorial text-2xl text-noir/85 leading-relaxed">{address}</address> : null}
            {mapUrl ? (
              <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="btn-noir mt-6">
                View on Google Maps
              </a>
            ) : null}
            <div className="mt-8">
              <Link to="/contact" className="btn-gold">Book an appointment</Link>
            </div>
          </div>
        </div>
      </section>
      {mapEmbedUrl ? (
        <section className="bg-beige py-16 md:py-20">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <p className="eyebrow mb-6">— Find us</p>
            <iframe
              title={`Jean Louis David ${title} location`}
              src={mapEmbedUrl}
              className="h-[420px] md:h-[520px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>
      ) : null}
    </>
  );
}