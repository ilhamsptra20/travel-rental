"use client";

import { Camera, CircleDollarSign, MapPin, Search, UserRound, Zap } from "lucide-react";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { useSiteContent } from "@/hooks/use-site-content";

const benefitIcons = [CircleDollarSign, Camera, UserRound, Zap, MapPin, Search];

export function BenefitsSection() {
  const { content } = useSiteContent();

  return (
    <section id="keunggulan" className="py-16 sm:py-20">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionHeading
          eyebrow={content.benefits.eyebrow}
          title={content.benefits.title}
          description={content.benefits.description}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.benefits.items.map((benefit, index) => {
            const Icon = benefitIcons[index % benefitIcons.length];

            return (
              <article
                key={benefit.title}
                className="rounded-2xl border border-[#e7ded2] bg-[#fffdf9] p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e5f2ee] text-primary">
                  <Icon className="icon icon-lg" aria-hidden="true" />
                </div>
                <h3 className="font-extrabold text-brand">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
