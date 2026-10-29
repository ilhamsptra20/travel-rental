"use client";

import { useBookingWhatsApp } from "@/hooks/use-booking-whatsapp";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { useSiteContent } from "@/hooks/use-site-content";
import { createWhatsAppUrl } from "@/utils/booking-whatsapp";

export function ContactSection() {
  const { content } = useSiteContent();
  const { handleSubmit } = useBookingWhatsApp();
  return (
    <section id="kontak" className="py-16 sm:py-20">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionHeading
          eyebrow={content.contact.eyebrow}
          title={content.contact.title}
          description={content.contact.description}
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-6">
            <h3 className="text-xl font-extrabold text-brand">
              {content.brandName}
            </h3>
            <p className="my-3 text-sm leading-6 text-slate-500">
              {content.contact.businessDescription}
            </p>
            <p className="mt-4 text-sm">
              <strong>{content.contact.phoneLabel}</strong><br /><a className="text-primary" href={`tel:${content.contact.phone.replaceAll("-", "")}`}>{content.contact.phone}</a>
            </p>
            <p className="mt-4 text-sm">
              <strong>{content.contact.poolLabel}</strong><br />{content.coverage.poolAddress}
            </p>
            <a className="mt-5 inline-flex rounded-lg bg-primary px-4 py-3 font-bold text-white" href={createWhatsAppUrl(content.contact.directMessage, content.contact.whatsappNumber)}>{content.contact.directAction} →</a>
          </div>
          <form id="booking" onSubmit={handleSubmit} className="grid gap-4 rounded-xl border border-slate-200 p-6">
            <div>
              <label className="mb-1 block text-sm font-bold" htmlFor="name">{content.contact.form.name}</label><input className="w-full rounded-lg border border-slate-300 px-3 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-blue-100" id="name" name="name" required placeholder={content.contact.form.namePlaceholder}/>
            </div>
            <div>
              <label className="mb-1 block text-sm font-bold" htmlFor="date">{content.contact.form.date}</label><input className="w-full rounded-lg border border-slate-300 px-3 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-blue-100" id="date" name="date" type="date" required/>
            </div>
            <div>
              <label className="mb-1 block text-sm font-bold" htmlFor="unit">{content.contact.form.vehicle}</label><select className="w-full rounded-lg border border-slate-300 bg-white px-3 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-blue-100" id="unit" name="unit" required>
                <option value="">{content.contact.form.vehiclePlaceholder}</option>
                {content.contact.form.vehicleOptions.map((vehicle) => <option key={vehicle}>{vehicle}</option>)}
                <option>{content.contact.form.consult}</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-bold" htmlFor="route">{content.contact.form.route}</label><input className="w-full rounded-lg border border-slate-300 px-3 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-blue-100" id="route" name="route" required placeholder={content.contact.form.routePlaceholder}/>
            </div>
            <div>
              <label className="mb-1 block text-sm font-bold" htmlFor="passengers">{content.contact.form.passengers}</label><input className="w-full rounded-lg border border-slate-300 px-3 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-blue-100" id="passengers" name="passengers" type="number" min="1" required placeholder={content.contact.form.passengersPlaceholder}/>
            </div>
            <div>
              <label className="mb-1 block text-sm font-bold" htmlFor="extra">{content.contact.form.notes}</label><textarea className="w-full rounded-lg border border-slate-300 px-3 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-blue-100" id="extra" name="extra" placeholder={content.contact.form.notesPlaceholder}></textarea>
            </div>
            <button className="rounded-lg bg-whatsapp px-4 py-3.5 font-extrabold text-white transition hover:brightness-95" type="submit">
              {content.contact.form.submit} →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
