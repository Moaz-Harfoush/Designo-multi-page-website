import ResponsiveImage from "@/app/_components/shared/ResponsiveImage";
import { AboutCardProps } from "@/app/_types";

const AboutCard = ({
  title,
  description,
  imageSrc,
  imagePosition = "left",
}: AboutCardProps) => {
  const isRight = imagePosition === "right";

  const containerClasses = `flex flex-col md:flex-row${
    isRight ? "-reverse" : ""
  } overflow-hidden rounded-2xl bg-card-bg-warm`;

  return (
    <section>
      <div className="container">
        <div className={containerClasses}>
          <div className="relative w-full h-72 md:h-auto md:w-2/5 min-h-87.5 md:self-stretch">
            <ResponsiveImage
              src={imageSrc}
              alt={title}
              className="object-cover object-center"
            />
          </div>

          <div className="flex flex-col justify-center p-8 w-full md:w-3/5 lg:p-24">
            <h2 className="mb-6 text-3xl font-medium tracking-wide text-brand-peach md:text-4xl">
              {title}
            </h2>

            <div className="space-y-6 text-sm leading-relaxed text-dark-grey md:text-base opacity-90">
              {Array.isArray(description) ? (
                description.map((paragraph, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))
              ) : (
                <p>{description}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
