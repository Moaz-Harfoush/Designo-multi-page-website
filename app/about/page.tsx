import AboutHero from "@/app/_components/about/AboutHero";
import ContactCTA from "@/app/_components/shared/ContactCTA";
import OfficeLinksSection from "@/app/_components/shared/OfficeLinksSection";
import AboutBioSection from "@/app/_components/about/AboutBioSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Designo | About",
  description:
    "Discover the story behind Designo. Learn more about our team of creative experts, our passion for custom designs, and how we craft impactful digital branding experiences worldwide.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <AboutBioSection
        title="World-class talent"
        description={[
          "We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.",
          "Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.",
        ]}
        imageSrc="/images/about/desktop/image-world-class-talent.jpg"
      />

      <OfficeLinksSection />

      <AboutBioSection
        title="The real deal"
        description={[
          "As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.",
          "We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.",
        ]}
        imageSrc="/images/about/desktop/image-real-deal.jpg"
        imagePosition="right"
      />

      <ContactCTA />
    </>
  );
}
