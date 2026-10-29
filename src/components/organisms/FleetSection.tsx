"use client";

import { ButtonLink } from "@/components/atoms/ButtonLink";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { useSiteContent } from "@/hooks/use-site-content";
import { createWhatsAppUrl } from "@/utils/booking-whatsapp";

export function FleetSection() {
  const { content } = useSiteContent();

  return (
    <section id="armada" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionHeading
          eyebrow={content.fleet.eyebrow}
          title={content.fleet.title}
          description={content.fleet.description}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {content.fleet.vehicles.map((vehicle) => (
            <article
              key={vehicle.name}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <img
                className="h-48 w-full object-cover"
                src={vehicle.image}
                alt={vehicle.alt}
                loading="lazy"
              />
              <div className="p-5">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-[11px] font-extrabold text-amber-800">
                  {vehicle.badge}
                </span>
                <h3 className="mt-3 text-xl font-extrabold text-brand">
                  {vehicle.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {vehicle.description}
                </p>
                <div className="my-4 flex flex-wrap gap-2 text-xs text-slate-600">
                  {vehicle.features.map((feature) => (
                    <span key={feature} className="rounded bg-slate-100 px-2 py-1">
                      {feature}
                    </span>
                  ))}
                </div>
                <ButtonLink
                  className="inline-flex w-full justify-center rounded-lg bg-primary px-4 py-3 text-sm font-extrabold text-white hover:bg-brand"
                  href={createWhatsAppUrl(vehicle.message, content.contact.whatsappNumber)}
                >
                  {content.fleet.action} →
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
