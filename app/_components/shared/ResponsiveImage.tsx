import Image from "next/image";
import { ResponsiveImageProps } from "@/app/_types";

const ResponsiveImage = ({
  src,
  alt,
  className = "",
}: ResponsiveImageProps) => {
  const desktopSrc = src;
  const tabletSrc = src.replace("/desktop/", "/tablet/");
  const mobileSrc = src.replace("/desktop/", "/mobile/");

  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet={`${desktopSrc}`} />
      <source media="(min-width: 640px)" srcSet={`${tabletSrc}`} />
      <Image
        src={`${mobileSrc}`}
        alt={alt}
        fill
        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 100vw, 100vw"
        className={`${className}`}
        priority
      />
    </picture>
  );
};

export default ResponsiveImage;
