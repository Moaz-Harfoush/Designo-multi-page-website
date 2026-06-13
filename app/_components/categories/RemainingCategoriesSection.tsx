import CategoryCard from "@/app/_components/shared/CategoryCard";
import { RemainingCategoriesSectionProps } from "@/app/_types";

const RemainingCategoriesSection = ({
  title1,
  bgImage1,
  href1,
  title2,
  bgImage2,
  href2,
}: RemainingCategoriesSectionProps) => {
  return (
    <section>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-277.5">
        <CategoryCard title={title1} bgImage={bgImage1} href={href1} />
        <CategoryCard title={title2} bgImage={bgImage2} href={href2} />
      </div>
    </section>
  );
};

export default RemainingCategoriesSection;
