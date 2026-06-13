import FeatureCard from "@/app/_components/home/FeatureCard";
import { FeatureCardProps } from "@/app/_types";

const Features = () => {
  const featuresData: FeatureCardProps[] = [
    {
      title: "Passionate",
      description:
        "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
      imageSrc: "/svg/illustration-passionate.svg",
    },
    {
      title: "Resourceful",
      description:
        "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
      imageSrc: "/svg/illustration-resourceful.svg",
    },
    {
      title: "Friendly",
      description:
        "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
      imageSrc: "/svg/illustration-friendly.svg",
    },
  ];

  return (
    <section>
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-10 lg:gap-8">
        {featuresData.map((feature, index: number) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            imageSrc={feature.imageSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
