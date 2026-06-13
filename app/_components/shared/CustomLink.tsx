import Link from "next/link";
import { CustomLinkProps } from "@/app/_types";

const linkVariants = {
  primary:
    "bg-white text-dark-grey text-sm font-medium tracking-[1px] hover:bg-brand-peach-light hover:text-white px-8 py-4",
  secondary:
    "bg-brand-peach text-white text-xs font-medium tracking-widest hover:bg-brand-peach-hover px-5 py-4",
};

const CustomLink = ({ text, href, variant = "primary" }: CustomLinkProps) => {
  const baseStyles =
    "rounded-lg uppercase transition-colors duration-300 inline-block whitespace-nowrap text-center";

  const combinedStyles = `${baseStyles} ${linkVariants[variant]}`;

  return (
    <Link href={href} className={combinedStyles}>
      {text}
    </Link>
  );
};

export default CustomLink;
