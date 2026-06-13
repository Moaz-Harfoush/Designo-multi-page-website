import Image from "next/image";
import { CategoryHeader } from "@/app/_types";

const CategoryHero = ({ title, description }: CategoryHeader) => {
  return (
    <section>
      <div className="container">
        <div className="relative overflow-hidden bg-brand-peach rounded-2xl py-12 md:py-16 flex flex-col items-center justify-center text-center text-white">
          <div className="absolute inset-0 pointer-events-none z-0">
            <Image
              src="/svg/bg-pattern-design-pages-intro.svg"
              alt="Background Pattern"
              fill
              className="object-cover md:object-right max-md:object-center"
              priority
            />
          </div>

          <div className="relative z-10 max-w-100 md:max-w-125">
            <h1 className="text-3xl font-medium leading-9 md:text-5xl md:leading-12 mb-6">
              {title}
            </h1>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryHero;
