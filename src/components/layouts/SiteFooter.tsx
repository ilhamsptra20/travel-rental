"use client";

import { useSyncExternalStore } from "react";
import { useSiteContent } from "@/hooks/use-site-content";

function CurrentYear() {
  const year = useSyncExternalStore(
    () => () => {},
    () => new Date().getFullYear(),
    () => null,
  );

  return <>{year}</>;
}

export function SiteFooter() {
  const { content } = useSiteContent();

  return (
    <footer className="bg-slate-950 px-4 py-6 text-xs text-slate-300">
      <div className="mx-auto flex w-[92%] max-w-6xl flex-wrap justify-between gap-3">
        <span>© <CurrentYear /> {content.brandName}. {content.footer.legal}</span><span>{content.footer.technology}</span>
      </div>
    </footer>
  );
}
