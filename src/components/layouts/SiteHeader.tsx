"use client";

import { Fragment } from "react";
import { useSiteContent } from "@/hooks/use-site-content";
import { createWhatsAppUrl } from "@/utils/booking-whatsapp";

export function SiteHeader() {
  const { content } = useSiteContent();
  return (
    <Fragment>
      <div className="bg-brand px-4 py-2 text-center text-xs font-bold tracking-wide text-white">
        {content.header.announcement}
        <span className="mx-2 text-accent">/</span>
        <a href="#promo" className="text-accent underline underline-offset-2">{content.header.announcementLink}</a>
      </div>
      
      <header className="sticky top-0 z-40 border-b border-[#e8e1d7] bg-[#fffdf9]/95 backdrop-blur">
        <div className="mx-auto flex min-h-[72px] w-[92%] max-w-6xl items-center justify-between gap-4">
          <a href="#home" className="text-lg font-black leading-tight tracking-tight text-brand sm:text-xl">{content.brandName}<span className="mt-1 block text-[10px] font-bold tracking-[.22em] text-primary">{content.header.serviceName}</span></a>
          <nav className="hidden items-center gap-6 text-sm font-bold md:flex">
            <a className="hover:text-primary" href="/armada">{content.header.fleetLink}</a><a className="hover:text-primary" href="#keunggulan">{content.header.benefitsLink}</a><a className="hover:text-primary" href="#faq">{content.header.faqLink}</a><a className="rounded-lg bg-primary px-4 py-3 text-white transition hover:bg-brand" href={createWhatsAppUrl(`Halo ${content.brandName}, ${content.header.contactMessage}`, content.contact.whatsappNumber)}>{content.header.contactLink}</a>
          </nav>
          <a className="rounded-lg bg-primary px-3 py-2.5 text-xs font-bold text-white md:hidden" href="#kontak">{content.header.mobileContactLink}</a>
        </div>
      </header>
    </Fragment>
  );
}
