"use client";

import { ReceiptText } from "lucide-react";
import { useSiteContent } from "@/hooks/use-site-content";
import { createWhatsAppUrl } from "@/utils/booking-whatsapp";

export function BookingTipsSection() {
  const { content } = useSiteContent();

    return (<section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto grid w-[92%] max-w-6xl gap-8 md:grid-cols-2">
        <div>
          <p className="text-xs font-black uppercase tracking-[.18em] text-primary">
            {content.bookingTips.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-black text-brand">
            {content.bookingTips.title}
          </h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
            {content.bookingTips.checklist.map((item) => (
              <li key={item}>✓ {item}</li>
            ))}
          </ul>
          <a className="mt-5 inline-flex rounded-lg bg-primary px-5 py-3 font-bold text-white" href={createWhatsAppUrl(content.bookingTips.actionMessage, content.contact.whatsappNumber)}>
            {content.bookingTips.action} →
          </a>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-7">
          <ReceiptText className="icon icon-lg text-primary" aria-hidden="true"/>
          <h3 className="mt-4 text-xl font-extrabold text-brand">
            {content.bookingTips.documentTitle}
          </h3>
          <p className="my-3 text-sm leading-6 text-slate-500">
            {content.bookingTips.documentDescription}
          </p>
          <a className="font-bold text-primary hover:underline" href={createWhatsAppUrl(content.bookingTips.documentMessage, content.contact.whatsappNumber)}>
            {content.bookingTips.documentAction} →
          </a>
        </div>
      </div>
    </section>);
}
