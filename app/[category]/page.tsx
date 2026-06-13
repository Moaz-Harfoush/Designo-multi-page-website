import ContactCTA from "@/app/_components/shared/ContactCTA";
import pagesData from "@/app/[category]/pageData";
import CategoryHero from "@/app/_components/categories/CategoryHero";
import RemainingCategoriesSection from "@/app/_components/categories/RemainingCategoriesSection";
import ProjectsGrid from "@/app/_components/categories/ProjectsGrid";
import { notFound } from "next/navigation";
import { CategoryPageProps, CategoryPageData } from "../_types/index";

export async function generateMetadata({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const category = resolvedParams.category;

  const firstWord = category.split("-")[0];
  const formattedCategory =
    firstWord.charAt(0).toUpperCase() + firstWord.slice(1);

  return {
    title: `Designo | ${formattedCategory}`,
    description: `Explore our professional ${formattedCategory} services. Discover custom, high-quality digital assets and tailored branding solutions crafted by the Designo creative team.`,
  };
}

export default async function Categories({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const category = resolvedParams.category;

  const currentPageData = (pagesData as CategoryPageData[]).find(
    (page) => page.page_id === category,
  );

  if (!currentPageData) {
    notFound();
  }

  const title1 = currentPageData.remaining_categories[0]?.title || "";
  const bgImage1 = currentPageData.remaining_categories[0]?.bgImage || "";
  const href1 = currentPageData.remaining_categories[0]?.link || "";

  const title2 = currentPageData.remaining_categories[1]?.title || "";
  const bgImage2 = currentPageData.remaining_categories[1]?.bgImage || "";
  const href2 = currentPageData.remaining_categories[1]?.link || "";

  const projects = currentPageData.projects;

  return (
    <>
      <CategoryHero
        title={currentPageData.header.title}
        description={currentPageData.header.description}
      />
      <ProjectsGrid projects={projects} />
      <RemainingCategoriesSection
        title1={title1}
        title2={title2}
        href1={href1}
        href2={href2}
        bgImage1={bgImage1}
        bgImage2={bgImage2}
      />
      <ContactCTA />
    </>
  );
}
