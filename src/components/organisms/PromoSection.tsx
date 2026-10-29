"use client";

import { BadgePercent, ShoppingCart, Tag } from "lucide-react";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { createWhatsAppUrl } from "@/utils/booking-whatsapp";
import { useSiteContent } from "@/hooks/use-site-content";

const promoIcons = [BadgePercent, ShoppingCart, Tag];

export function PromoSection() {
    const { content } = useSiteContent();

    return (
      <section id="promo" className="bg-[#f8f5ef] py-16 sm:py-20">
        <div className="mx-auto w-[92%] max-w-6xl">
          <SectionHeading
            eyebrow={content.promo.eyebrow}
            title={content.promo.title}
            description={content.promo.description}
          />
          <div className="grid gap-5 md:grid-cols-3">
            {content.promo.cards.map((card, index) => {
              const Icon = promoIcons[index % promoIcons.length];

              return (
                <article key={card.title} className="rounded-2xl border border-[#e7ded2] border-t-4 border-t-accent bg-white p-6 shadow-[0_8px_30px_rgba(21,60,59,.05)] transition hover:-translate-y-1 hover:shadow-lg">
                  <Icon className="icon-lg text-primary" aria-hidden="true" />
                  <span className="mt-4 inline-block rounded-full bg-amber-100 px-3 py-1 text-[11px] font-extrabold text-amber-800">{card.badge}</span>
                  <h3 className="mt-3 text-xl font-extrabold text-brand">{card.title}</h3>
                  <p className="my-3 text-sm leading-6 text-slate-500">{card.description}</p>
                  <a className="inline-flex w-full justify-center rounded-lg bg-accent px-4 py-3 text-sm font-extrabold text-brand" href={createWhatsAppUrl(card.message, content.contact.whatsappNumber)}>{content.promo.action} →</a>
                </article>
              );
            })}
          </div>
          <p className="mt-5 text-center text-xs text-slate-400">
            {content.promo.note}
          </p>
        </div>
      </section>
    );
}
