"use client";

import { ButtonLink } from "@/components/atoms/ButtonLink";
import { useSiteContent } from "@/hooks/use-site-content";
import { createWhatsAppUrl } from "@/utils/booking-whatsapp";

export function CallToActionSection() {
  const { content } = useSiteContent();

  return (
    <section className="bg-gradient-to-br from-brand via-[#1d5551] to-primary px-4 py-14 text-center text-white">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-black uppercase tracking-[.18em] text-accent">
          {content.callToAction.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">
          {content.callToAction.title}
        </h2>
        <p className="my-4 text-slate-200">
          {content.callToAction.description}
        </p>
        <ButtonLink className="inline-flex rounded-lg bg-whatsapp px-5 py-3.5 font-extrabold text-white hover:brightness-95" href={createWhatsAppUrl(content.callToAction.message, content.contact.whatsappNumber)}>
          {content.callToAction.action} →
        </ButtonLink>
      </div>
    </section>
  );
}
