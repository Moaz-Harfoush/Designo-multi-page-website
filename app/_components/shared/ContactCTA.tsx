import Image from "next/image";
import CustomLink from "@/app/_components/shared/CustomLink";

const ContactCTA = () => {
  return (
    <section className="relative z-20">
      <div className="container">
        <div className="bg-brand-peach rounded-2xl relative px-6 md:px-12 py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-8 overflow-hidden shadow-lg -mb-16">
          <div className="absolute inset-0 z-0 pointer-events-none md:-right-20 lg:right-0 flex justify-end items-center">
            <Image
              src="/svg/bg-pattern-call-to-action.svg"
              alt="Call to action background pattern"
              fill
              className="object-cover md:object-right max-md:object-center opacity-100"
            />
          </div>

          <div className="flex flex-col gap-4 z-10 max-w-112.5">
            <h2 className="text-3xl md:text-4xl font-medium leading-9 md:leading-10 text-white">
              Let’s talk about <br className="hidden md:inline" /> your project
            </h2>
            <p className="text-sm md:text-base text-white opacity-85 leading-6">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>

          <div className="z-10 shrink-0">
            <CustomLink text="Get In Touch" href="/contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
