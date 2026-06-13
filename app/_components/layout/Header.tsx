"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavLink } from "@/app/_types";

const NAV_LINKS: NavLink[] = [
  { href: "/about", label: "Our Company" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="relative top-0 left-0 w-full z-50 mb-10">
      <div className="container h-28 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo/logo-dark.png"
            alt="Designo Logo"
            width={180}
            height={27}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link: NavLink) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-[2px] text-dark-grey hover:text-brand-peach transition-colors duration-300 uppercase font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden focus:outline-none cursor-pointer p-2 transition-transform duration-200 active:scale-90 z-50"
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          <div className="relative w-6 h-5 flex items-center justify-center">
            <Image
              src={isOpen ? "/svg/icon-close.svg" : "/svg/icon-hamburger.svg"}
              alt={isOpen ? "Close Menu" : "Open Menu"}
              width={isOpen ? 20 : 24}
              height={20}
              className={`transition-all duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
            />
          </div>
        </button>
      </div>

      <nav
        className={`md:hidden bg-dark-charcoal absolute top-28 left-0 py-12 px-6 w-full flex flex-col gap-8 shadow-xl z-40 transition-transform duration-300 origin-top ${
          isOpen
            ? "scale-y-100 opacity-100 visible"
            : "scale-y-0 opacity-0 invisible pointer-events-none"
        }`}
      >
        {NAV_LINKS.map((link: NavLink) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-xl tracking-[2px] text-white hover:text-brand-peach transition-colors uppercase font-light pl-4"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
