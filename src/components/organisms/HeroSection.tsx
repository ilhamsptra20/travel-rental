"use client";

import { CalendarDays, UsersRound, ShieldCheck, Clock3, MessageCircle, Star, MapPin } from "lucide-react";
import { useSiteContent } from "@/hooks/use-site-content";
import { createWhatsAppUrl } from "@/utils/booking-whatsapp";

export function HeroSection() {
    const { content } = useSiteContent();

    return (
      <section id="home" className="relative isolate overflow-hidden bg-[#071d34] text-white">
        <div className="absolute inset-0 -z-20">
          <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=85" alt="" className="h-full w-full object-cover" fetchPriority="high"/>
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061a30]/95 via-[#092846]/90 to-[#08233b]/65"></div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#061a30]/85 via-transparent to-[#061a30]/20"></div>
        <div className="mx-auto grid w-[92%] max-w-6xl items-center gap-14 py-16 sm:py-20 lg:min-h-[590px] lg:grid-cols-[1.02fr_.98fr] lg:gap-8 lg:py-20">
          <div className="relative z-10">
            <p className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[.2em] text-accent sm:text-xs">
              <CalendarDays className="icon !h-6 !w-6 text-accent" aria-hidden="true"/>
              {content.hero.eyebrow}
              <span className="hidden h-px w-12 bg-accent/70 sm:block"></span>
              {content.hero.location}
            </p>
            <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-[-.055em] sm:text-5xl lg:text-[3.7rem]">
              {content.hero.titleLine1}<br className="hidden sm:block"/>
              {content.hero.titleLine2}
              <span className="relative inline-block text-accent">{content.hero.titleAccent}<svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 320 18" fill="none" aria-hidden="true">
                  <path d="M4 12C84 1 220 1 312 10" stroke="#ff795d" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M18 16C112 7 230 7 298 14" stroke="#ff795d" strokeWidth="2" strokeLinecap="round"/></svg></span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              {content.hero.description}
            </p>
            <div className="mt-7 grid max-w-xl grid-cols-3 gap-3 sm:gap-5">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/70 ring-1 ring-white/10"><UsersRound className="icon !h-6 !w-6" aria-hidden="true"/></span><span><strong className="block text-sm sm:text-base">{content.hero.metrics[0].value}</strong><span className="text-xs text-slate-300 sm:text-sm">{content.hero.metrics[0].label}</span></span>
              </div>
              <div className="flex items-center gap-3 border-x border-white/20 px-3 sm:px-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/70 ring-1 ring-white/10"><ShieldCheck className="icon !h-6 !w-6" aria-hidden="true"/></span><span><strong className="block text-sm sm:text-base">{content.hero.metrics[1].value}</strong><span className="text-xs text-slate-300 sm:text-sm">{content.hero.metrics[1].label}</span></span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/70 ring-1 ring-white/10"><Clock3 className="icon !h-6 !w-6" aria-hidden="true"/></span><span><strong className="block text-sm sm:text-base">{content.hero.metrics[2].value}</strong><span className="text-xs text-slate-300 sm:text-sm">{content.hero.metrics[2].label}</span></span>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex items-center justify-center gap-3 rounded-xl bg-accent px-6 py-4 font-extrabold text-brand shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:brightness-105" href={createWhatsAppUrl(`Halo ${content.brandName}, ${content.hero.bookingMessage}`, content.contact.whatsappNumber)}>
                <MessageCircle className="icon !h-6 !w-6" aria-hidden="true"/>
                {content.hero.primaryAction} <span aria-hidden="true">→</span></a><a className="inline-flex items-center justify-center rounded-xl border border-white/50 px-6 py-4 font-bold text-white transition hover:bg-white/10" href="#armada">{content.hero.secondaryAction}</a>
            </div>
            <p className="mt-4 text-xs text-slate-300">
              {content.hero.availabilityNote}
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-[550px] pb-8 pt-4 lg:pb-0 lg:pt-0">
            <div className="absolute -right-3 top-5 h-[85%] w-[94%] rotate-[7deg] rounded-[1.5rem] border border-white/20 bg-white/10"></div>
            <div className="relative rotate-[4deg] rounded-[1.35rem] border-[6px] border-white/90 bg-white p-1 shadow-[0_28px_80px_rgba(0,0,0,.45)] transition duration-500 hover:rotate-[1deg]">
              <img className="h-[280px] w-full rounded-[.85rem] object-cover sm:h-[360px] lg:h-[390px]" src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=90" alt={content.hero.imageAlt}/>
            </div>
            <div className="absolute -left-5 top-8 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-brand shadow-xl sm:-left-10 sm:top-12">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-accent"><Star className="icon !h-6 !w-6" aria-hidden="true"/></span><span><strong className="block text-sm">{content.hero.maintainedFleet}</strong><span className="text-xs text-slate-500">{content.hero.maintainedFleetNote}</span></span>
            </div>
            <div className="absolute -bottom-1 -right-1 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-brand shadow-xl sm:-right-6 sm:bottom-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-primary"><MapPin className="icon !h-6 !w-6" aria-hidden="true"/></span><span><strong className="block text-sm">{content.hero.serviceArea}</strong><span className="text-xs text-slate-500">{content.hero.serviceAreaNote}</span></span>
            </div>
            <div className="absolute left-2 hidden rotate-5 text-sm italic text-slate-200 sm:block">
              {content.hero.imageNote}
            </div>
          </div>
        </div>
      </section>
    );
}
