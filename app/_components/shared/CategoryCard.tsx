import Link from "next/link";
import Image from "next/image";
import ResponsiveImage from "@/app/_components/shared/ResponsiveImage";
import { CategoryCardProps } from "@/app/_types";

const CategoryCard = ({
  title,
  bgImage,
  href,
  isLarge = false,
}: CategoryCardProps) => {
  return (
    <Link
      href={href}
      className={`relative group flex flex-col items-center justify-center rounded-2xl overflow-hidden text-center uppercase text-white px-6 transition-all duration-300 shadow-sm hover:shadow-md w-full ${
        isLarge ? "h-62.5 lg:h-full" : "h-62.5 lg:h-77"
      }`}
    >
      <ResponsiveImage
        src={bgImage}
        alt={`${title} background`}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/50 transition-colors duration-300 group-hover:bg-brand-peach/80 z-10" />

      <div className="relative z-20 flex flex-col items-center gap-4">
        <h2 className="text-2xl md:text-4xl font-medium tracking-[1.4px] md:tracking-[2px]">
          {title}
        </h2>
        <div className="flex items-center gap-4 text-xs font-medium tracking-[5px]">
          <span>View Projects</span>
          <Image
            src="/svg/icon-right-arrow.svg"
            alt="right-arrow"
            width={8}
            height={8}
          />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
