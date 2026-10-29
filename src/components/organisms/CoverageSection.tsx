"use client";

import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { useSiteContent } from "@/hooks/use-site-content";
import { createWhatsAppUrl } from "@/utils/booking-whatsapp";

export function CoverageSection() {
  const { content } = useSiteContent();

    return (
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div>
            <SectionHeading
              eyebrow={content.coverage.eyebrow}
              title={content.coverage.title}
              description={content.coverage.description}
            />
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {content.coverage.cities.map((city) => (
                <span key={city} className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-brand">{city}</span>
              ))}
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-6">
              <MapPin className="icon icon-lg text-primary" aria-hidden="true"/>
              <h3 className="mt-3 text-lg font-extrabold text-brand">
              {content.coverage.poolTitle}
              </h3>
              <p className="my-3 text-sm text-slate-500">
              {content.coverage.poolAddress}
              </p>
            <a className="font-bold text-primary hover:underline" target="_blank" rel="noopener" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(content.coverage.poolAddress)}`}>{content.coverage.mapAction} ↗</a>
            </div>
            <div className="rounded-xl bg-brand p-6 text-white">
              <h3 className="text-xl font-extrabold">
              {content.coverage.outOfTownTitle}
              </h3>
              <p className="my-3 text-sm leading-6 text-slate-200">
              {content.coverage.outOfTownDescription}
              </p>
            <a className="inline-flex rounded-lg bg-accent px-4 py-3 font-extrabold text-brand" href={createWhatsAppUrl(content.coverage.outOfTownMessage, content.contact.whatsappNumber)}>{content.coverage.outOfTownAction} →</a>
            </div>
          </div>
        </div>
      </section>
    );
}
