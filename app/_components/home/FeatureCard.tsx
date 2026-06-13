import Image from "next/image";
import { FeatureCardProps } from "@/app/_types";

const FeatureCard = ({ title, description, imageSrc }: FeatureCardProps) => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-col items-center text-center md:text-left lg:text-center gap-12 md:gap-8 lg:gap-12 max-w-87 md:max-w-none mx-auto">
      <div className="relative w-50 h-50 shrink-0 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/svg/bg-pattern-small-circle.svg"
            alt=""
            fill
            sizes="200px"
            className="object-contain pointer-events-none"
          />
        </div>

        <div className="relative w-50 h-50 z-10 flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={title}
            width={202}
            height={202}
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 md:gap-6">
        <h3 className="text-xl font-medium tracking-[5px] text-dark-grey uppercase">
          {title}
        </h3>
        <p className="text-base text-dark-grey leading-6 max-w-85 md:max-w-110 lg:max-w-85">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
