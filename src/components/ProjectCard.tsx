import { FaGithub, FaGlobe } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";

const ProjectCard = ({
  project,
  size,
}: {
  project: Project;
  size?: boolean;
}) => {
  const tagsList = project.tags.map((tech, index) => (
    <Badge key={index}>{tech}</Badge>
  ));

  return (
    <figure
      className={`${
        size ? "w-full" : "w-[450px]"
      } h-[450px] relative photo transition-all rounded-md outline-none`}>
      <div className="w-full h-full bottom-photo absolute bg-muted flex flex-col justify-center px-5 leading-5 md:leading-6 ">
        <a
          href={project.github}
          className="absolute top-4 left-4 text-xl hover:scale-110"
          target="_blank">
          <FaGithub />
        </a>
        <a
          href={project.link}
          className="absolute top-4 right-4 text-xl hover:scale-110"
          target="_blank">
          <FaGlobe />
        </a>
        <p className="md:text-xl sm:text-lg capitalize font-semibold">
          {project.title}
        </p>
        <div className="flex flex-wrap gap-2 my-2">{tagsList}</div>
        <p className="my-4 text-sm line-clamp-4">{project.description}</p>
        <Link
          href={`/project/${project._id}`}
          className="text-sm hover:underline underline-offset-2">
          <Button size="sm" className="w-fit">
            Learn more &nbsp;&gt;
          </Button>
        </Link>
      </div>
      <div className="w-full h-full object-cover brightness-90 absolute">
        <Image
          src={project.img}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <figcaption className="absolute bottom-5 left-4 fig">
        <div className="flex flex-wrap gap-2">{tagsList}</div>
      </figcaption>
    </figure>
  );
};

export default ProjectCard;
