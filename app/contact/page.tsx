import OfficeLinksSection from "@/app/_components/shared/OfficeLinksSection";
import ContactSection from "@/app/_components/contact/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Designo | Contact",
  description:
    "Get in touch with Designo. Contact our creative team today to discuss your upcoming project, custom designs, or digital branding solutions. We are ready to bring your vision to life.",
};

export default function Locations() {
  return (
    <>
      <ContactSection />
      <div className="mb-40">
        <OfficeLinksSection />
      </div>
    </>
  );
}
