"use client";

import { MessageCircle } from "lucide-react";
import { useSiteContent } from "@/hooks/use-site-content";
import { createWhatsAppUrl } from "@/utils/booking-whatsapp";

export function WhatsAppFloat() {
  const { content } = useSiteContent();

    return (
        <a className="wa-float inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3.5 font-extrabold text-white transition hover:brightness-95" href={createWhatsAppUrl(content.whatsapp.message, content.contact.whatsappNumber)} aria-label={content.whatsapp.label}>
            <MessageCircle className="icon !h-5 !w-5" aria-hidden="true"/>
            {content.whatsapp.label}
        </a>
    );
}
