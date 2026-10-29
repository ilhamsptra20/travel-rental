"use client";

import { useSiteContent } from "@/hooks/use-site-content";

export function TrustStats() {
  const { content } = useSiteContent();
    return (
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto grid w-[92%] max-w-6xl grid-cols-2 gap-y-5 py-6 md:grid-cols-4">
          {content.trustStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center ${index % 2 === 0 ? "border-r border-slate-200" : ""} ${index === 1 ? "md:border-r md:border-slate-200" : ""}`}
            >
              <strong className="block text-2xl font-black text-brand">{stat.value}</strong>
              <span className="text-xs text-slate-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>
    );
}
