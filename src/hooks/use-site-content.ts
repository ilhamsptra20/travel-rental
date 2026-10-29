"use client";

import { useContext } from "react";
import { SiteContentContext } from "@/state/site-content";

export function useSiteContent() {
  const context = useContext(SiteContentContext);

  if (!context) {
    throw new Error("useSiteContent must be used inside SiteContentProvider");
  }

  return context;
}
