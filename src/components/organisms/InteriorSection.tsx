"use client";

import { useSiteContent } from "@/hooks/use-site-content";
import { createWhatsAppUrl } from "@/utils/booking-whatsapp";

export function InteriorSection() {
  const { content } = useSiteContent();

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto grid w-[92%] max-w-6xl items-center gap-9 md:grid-cols-2">
        <img className="h-64 w-full rounded-2xl object-cover sm:h-80" src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1000&q=85" alt={content.interior.imageAlt} loading="lazy"/>
        <div>
          <p className="text-xs font-black uppercase tracking-[.18em] text-primary">
            {content.interior.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-black leading-tight text-brand sm:text-4xl">
            {content.interior.title}
          </h2>
          <p className="mt-4 leading-7 text-slate-500">
            {content.interior.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {content.interior.features.map((feature) => (
              <span key={feature} className="rounded-lg bg-[#e5f2ee] px-3 py-2 text-sm font-bold text-brand">{feature}</span>
            ))}
          </div>
          <a className="mt-6 inline-flex rounded-lg bg-whatsapp px-5 py-3 font-extrabold text-white" href={createWhatsAppUrl(content.interior.actionMessage, content.contact.whatsappNumber)}>{content.interior.action} →</a>
          <p className="mt-3 text-xs text-slate-400">
            {content.interior.note}
          </p>
        </div>
      </div>
    </section>
  );
}
