import CategoryCard from "@/app/_components/shared/CategoryCard";

const CategoriesGrid = () => {
  return (
    <section>
      <div className="grid grid-cols-1 container lg:grid-cols-2 gap-6 lg:h-160">
        <div className="lg:h-full">
          <CategoryCard
            title="Web Design"
            bgImage="/images/home/desktop/image-web-design.jpg"
            href="/web-design"
            isLarge={true}
          />
        </div>

        <div className="flex flex-col gap-6 justify-between h-auto">
          <CategoryCard
            title="App Design"
            bgImage="/images/home/desktop/image-app-design.jpg"
            href="/app-design"
          />
          <CategoryCard
            title="Graphic Design"
            bgImage="/images/home/desktop/image-graphic-design.jpg"
            href="/graphic-design"
          />
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;
