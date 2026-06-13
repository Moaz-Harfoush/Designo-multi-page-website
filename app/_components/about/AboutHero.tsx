import ResponsiveImage from "@/app/_components/shared/ResponsiveImage";

const AboutHero = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row overflow-hidden rounded-2xl bg-brand-peach">
          <div className="flex flex-col justify-center p-8 text-white md:w-1/2 lg:p-24">
            <h1 className="mb-6 text-4xl font-medium tracking-wide md:text-5xl">
              About Us
            </h1>
            <p className="text-sm leading-relaxed md:text-base opacity-90">
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients’ audiences.
            </p>
          </div>

          <div className="relative h-64 md:h-auto md:w-1/2 min-h-80">
            <ResponsiveImage
              src="/images/about/desktop/image-about-hero.jpg"
              alt="About Us Team"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
