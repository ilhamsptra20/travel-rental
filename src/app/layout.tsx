import type { Metadata } from "next";
import { SiteContentProvider } from "@/state/site-content";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sewa Hiace Premio Luxury — Anjay Trans",
  description:
    "Perjalanan Berkelas Dimulai dari Kendaraan yang Tepat bersama Anjay Trans.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id">
      <body>
        <SiteContentProvider>{children}</SiteContentProvider>
      </body>
    </html>
  );
}
