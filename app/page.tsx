import CategoriesGrid from "./_components/home/CategoriesGrid";
import Features from "./_components/home/Features";
import HomeHero from "./_components/home/HomeHero";
import ContactCTA from "./_components/shared/ContactCTA";

export default function Home() {
  return (
    <>
      <HomeHero />
      <CategoriesGrid />
      <Features />
      <ContactCTA />
    </>
  );
}
