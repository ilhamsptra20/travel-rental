import { BenefitsSection } from "@/components/organisms/BenefitsSection";
import { BookingTipsSection } from "@/components/organisms/BookingTipsSection";
import { CallToActionSection } from "@/components/organisms/CallToActionSection";
import { ContactSection } from "@/components/organisms/ContactSection";
import { CoverageSection } from "@/components/organisms/CoverageSection";
import { FaqSection } from "@/components/organisms/FaqSection";
import { FleetSection } from "@/components/organisms/FleetSection";
import { HeroSection } from "@/components/organisms/HeroSection";
import { InteriorSection } from "@/components/organisms/InteriorSection";
import { PromoSection } from "@/components/organisms/PromoSection";
import { SiteFooter } from "@/components/layouts/SiteFooter";
import { SiteHeader } from "@/components/layouts/SiteHeader";
import { TrustStats } from "@/components/organisms/TrustStats";
import { WhatsAppFloat } from "@/components/organisms/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustStats />
        <PromoSection />
        <InteriorSection />
        <FleetSection />
        <BenefitsSection />
        <BookingTipsSection />
        <CoverageSection />
        <FaqSection />
        <CallToActionSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
