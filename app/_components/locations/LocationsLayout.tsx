import Image from "next/image";
import { OfficeData } from "@/app/_types";

const OFFICES_DATA: OfficeData[] = [
  {
    id: "canada",
    country: "Canada",
    officeName: "Designo Central Office",
    addressLine1: "3886 Wellington Street",
    addressLine2: "Toronto, Ontario M9C 3J5",
    phone: "+1 253-863-8967",
    email: "contact@designo.co",
    mapImageSrc: "/images/locations/image-map-canada.png",
  },
  {
    id: "australia",
    country: "Australia",
    officeName: "Designo AU Office",
    addressLine1: "19 Balonne Street",
    addressLine2: "New South Wales 2443",
    phone: "(02) 6720 9092",
    email: "contact@designo.au",
    mapImageSrc: "/images/locations/image-map-australia.png",
  },
  {
    id: "united-kingdom",
    country: "United Kingdom",
    officeName: "Designo UK Office",
    addressLine1: "13 Colorado Way",
    addressLine2: "Rhyd-y-fro SA8 9GA",
    phone: "078 3115 1400",
    email: "contact@designo.uk",
    mapImageSrc: "/images/locations/image-map-uk.png",
  },
];

const LocationsLayout = () => {
  return (
    <section>
      <div className="container flex flex-col gap-20">
        {OFFICES_DATA.map((office, index: number) => {
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={office.id}
              id={office.id}
              className={`flex flex-col gap-6 md:gap-8 ${
                isReversed ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="flex flex-col justify-center w-full md:w-2/3 bg-card-bg-warm rounded-2xl p-8 sm:p-16 md:p-20">
                <h2 className="text-3xl font-medium text-brand-peach mb-6 md:text-4xl">
                  {office.country}
                </h2>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 text-sm leading-relaxed text-dark-grey md:text-base">
                  <div>
                    <h3 className="font-bold mb-1">{office.officeName}</h3>
                    <p className="opacity-90">{office.addressLine1}</p>
                    <p className="opacity-90">{office.addressLine2}</p>
                  </div>

                  <div>
                    <h3 className="font-bold mb-1">Contact</h3>
                    <p className="opacity-90">P : {office.phone}</p>
                    <p className="opacity-90">M : {office.email}</p>
                  </div>
                </div>
              </div>

              <div className="relative w-full h-80 md:h-auto md:w-1/3 min-h-80 rounded-2xl overflow-hidden md:self-stretch">
                <Image
                  src={office.mapImageSrc}
                  alt={`Map of ${office.country}`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LocationsLayout;
