import type { Metadata } from "next";
import { CallToActionSection } from "@/components/organisms/CallToActionSection";
import { FleetSection } from "@/components/organisms/FleetSection";
import { SiteFooter } from "@/components/layouts/SiteFooter";
import { SiteHeader } from "@/components/layouts/SiteHeader";
import { WhatsAppFloat } from "@/components/organisms/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Daftar Armada — Anjay Trans",
  description:
    "Lihat pilihan Hiace Premio Luxury dan Hiace Commuter untuk perjalanan Anda bersama Anjay Trans.",
};

export default function Armada() {
  return (
    <>
      <SiteHeader />
      <main>
        <FleetSection />
        <CallToActionSection />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
