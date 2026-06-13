import Link from "next/link";
import Image from "next/image";
import { NavLink, SocialLink } from "@/app/_types";

const NAV_LINKS: NavLink[] = [
  { href: "/about", label: "Our Company" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: "/svg/icon-facebook.svg",
  },
  {
    href: "https://youtube.com",
    label: "Youtube",
    icon: "/svg/icon-youtube.svg",
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    icon: "/svg/icon-twitter.svg",
  },
  {
    href: "https://pinterest.com",
    label: "Pinterest",
    icon: "/svg/icon-pinterest.svg",
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: "/svg/icon-instagram.svg",
  },
];

const Footer = () => {
  return (
    <footer className="bg-dark-charcoal text-white w-full">
      <div className="container pt-32 pb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/10 pb-10 mb-10 text-center md:text-left">
          <Link href="/">
            <Image
              src="/images/logo/logo-light.png"
              alt="Designo Logo"
              width={202}
              height={27}
              className="w-49 h-6"
            />
          </Link>

          <nav className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
            {NAV_LINKS.map((link: NavLink) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-[2px] hover:text-brand-peach transition-colors duration-300 uppercase font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 text-center md:text-left text-sm leading-6">
          <div className="opacity-50">
            <p className="font-bold">Designo Central Office</p>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </div>

          <div className="opacity-50">
            <p className="font-bold">Contact Us (Central Office)</p>
            <p>P : +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>

          <div className="flex items-center gap-4 md:mt-auto">
            {SOCIAL_LINKS.map((social: SocialLink) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
                aria-label={social.label}
              >
                <Image
                  src={social.icon}
                  alt={social.label}
                  width={24}
                  height={24}
                  className="h-auto"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
