import LocationsLayout from "@/app/_components/locations/LocationsLayout";
import ContactCTA from "@/app/_components/shared/ContactCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Designo | Locations",
  description:
    "Explore our global offices across Canada, Australia, and the United Kingdom. Find our addresses, contact details, and dynamic maps to connect with our local design teams.",
};

export default function Locations() {
  return (
    <>
      <LocationsLayout />
      <ContactCTA />
    </>
  );
}
