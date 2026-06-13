import Image from "next/image";
import CustomLink from "@/app/_components/shared/CustomLink";

const HomeHero = () => {
  return (
    <section>
      <div className="container relative z-10 overflow-hidden">
        <div className="bg-brand-peach rounded-2xl px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between pt-16 md:pt-24 lg:py-0 h-auto lg:h-160 overflow-hidden">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-135 z-20 mb-12 lg:mb-0">
            <h1 className="text-3xl md:text-5xl font-medium text-white leading-9 md:leading-12 mb-6 md:mb-8">
              Award-winning custom designs and digital branding solutions
            </h1>
            <p className="text-sm md:text-base text-white leading-6 mb-8 md:mb-10 max-w-111">
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <CustomLink text="OUR COMPANY" href="/about" />
          </div>

          <div className="relative w-full lg:w-1/2 h-120 md:h-155 lg:h-full flex justify-center lg:items-end z-10">
            <div className="absolute top-1/2 left-1/2 lg:left-auto lg:right-0 lg:top-auto lg:bottom-0 transform -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:translate-y-0 w-125 h-125 md:w-160 md:h-160 pointer-events-none z-0 opacity-40">
              <Image
                src="/svg/bg-pattern-hero-home.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            <div className="relative h-145 min-w-145 md:h-205 lg:absolute lg:-bottom-50 lg:-right-30 transition-all duration-300 z-10">
              <Image
                src="/images/home/image-hero-phone.png"
                alt="Designo Phone Illustration"
                fill
                priority
                sizes="(max-width: 768px) 340px, (max-width: 1024px) 540px, 620px"
                className="object-contain object-top lg:object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
