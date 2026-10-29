import { useCallback } from "react";
import type { FormEvent } from "react";
import { createBookingWhatsAppUrl } from "@/utils/booking-whatsapp";
import { useSiteContent } from "@/hooks/use-site-content";

export function useBookingWhatsApp() {
  const { content } = useSiteContent();

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const getValue = (name: string) =>
      String(formData.get(name) ?? "").trim();

    const whatsappUrl = createBookingWhatsAppUrl({
      name: getValue("name"),
      date: getValue("date"),
      vehicle: getValue("unit"),
      route: getValue("route"),
      passengers: getValue("passengers"),
      notes: getValue("extra"),
      brandName: content.brandName,
      phoneNumber: content.contact.whatsappNumber,
    });
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }, [content.brandName, content.contact.whatsappNumber]);

  return { handleSubmit };
}
