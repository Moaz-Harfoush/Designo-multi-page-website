import Image from "next/image";
import CustomLink from "@/app/_components/shared/CustomLink";
import { LocationItem } from "@/app/_types";

const OfficeLinksSection = () => {
  const locations: LocationItem[] = [
    {
      id: 1,
      name: "CANADA",
      image: "/svg/bg-pattern-small-circle.svg",
      illustration: "/svg/illustration-canada.svg",
    },
    {
      id: 2,
      name: "AUSTRALIA",
      image: "/svg/bg-pattern-small-circle.svg",
      illustration: "/svg/illustration-australia.svg",
    },
    {
      id: 3,
      name: "UNITED KINGDOM",
      image: "/svg/bg-pattern-small-circle.svg",
      illustration: "/svg/illustration-united-kingdom.svg",
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 gap-20 md:gap-10 lg:grid-cols-3">
          {locations.map((location) => (
            <div
              key={location.id}
              className="flex flex-col items-center text-center text-dark-grey"
            >
              <div className="relative w-52 h-52 mb-12 flex items-center justify-center bg-card-bg-warm rounded-full overflow-hidden">
                <Image
                  src={location.illustration}
                  alt={location.name}
                  width={202}
                  height={202}
                  className="object-contain z-10"
                />
              </div>

              <h3 className="mb-8 text-xl font-medium tracking-[0.3em] text-dark-grey">
                {location.name}
              </h3>

              <CustomLink
                text="See Location"
                href="/locations"
                variant="secondary"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeLinksSection;
