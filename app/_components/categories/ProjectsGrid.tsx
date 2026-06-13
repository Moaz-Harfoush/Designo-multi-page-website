import Image from "next/image";
import { ProjectsGridProps } from "@/app/_types";

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  if (!projects) return null;
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-6 md:gap-y-10">
          {projects.map((project, index: number) => {
            return (
              <div
                key={index}
                className="bg-card-bg-warm rounded-2xl overflow-hidden flex flex-col items-center text-center group cursor-pointer hover:bg-brand-peach hover:text-white transition-all duration-300"
              >
                <div className="relative w-full h-80">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col gap-4">
                  <h3 className="text-xl font-medium uppercase duration-300 tracking-[5px] text-brand-peach group-hover:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-dark-grey duration-300 group-hover:text-white max-w-70">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
