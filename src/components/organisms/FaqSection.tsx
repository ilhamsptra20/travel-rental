"use client";

import { useSiteContent } from "@/hooks/use-site-content";
import { SectionHeading } from "@/components/molecules/SectionHeading";

export function FaqSection() {
  const { content } = useSiteContent();

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto w-[92%] max-w-4xl">
        <SectionHeading
          eyebrow={content.faq.eyebrow}
          title={content.faq.title}
          className="mb-8 text-center"
        />
        <div className="space-y-3">
          {content.faq.items.map((item) => (
            <details
              key={item.question}
              className="rounded-lg border border-slate-200 bg-white p-4"
            >
              <summary className="cursor-pointer font-bold text-brand">
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
