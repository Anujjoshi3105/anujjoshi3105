import { FaGithub, FaGlobe } from 'react-icons/fa';
import Image from 'next/image';
import { FC } from 'react';
import Link from 'next/link';
interface Project {
  img: string;
  title: string;
  desc: string;
  techStack: string[];
  github: string;
  link: string;
}

interface WorkCardProps {
  project: Project;
}

const WorkCard: FC<WorkCardProps> = ({ project }) => {
  const techStackList = project.techStack.map((tech, index) => (
    <li key={index} className='bg-theme rounded-md px-2 p-1 text-nowrap text-sm text-tertiary'>{tech}</li>
  ));

  return (
    <figure className="w-full md:w-[45%] xl:w-[30%] h-[400px] relative photo transition-all duration-700 rounded-md outline-none">
      <div className="w-full h-full bottom-photo absolute bg-tertiary flex flex-col justify-center px-5 leading-5 md:leading-6 border-2">
        <Link href={project.github} className='absolute top-4 left-4 text-xl hover:text-theme hover:scale-110'>
            <FaGithub />
        </Link>
        <Link href={project.link}  className='absolute top-4 right-4 text-xl hover:text-theme hover:scale-110'>
            <FaGlobe />
        </Link>
        <p className="sm:text-xl capitalize font-semibold">{project.title}</p>
        <ul className='flex gap-2 my-2'>
          {techStackList}
        </ul>
        <p className="my-4">{project.desc}</p>
      </div>
      <div className="w-full h-full object-cover brightness-90 absolute">
        <Image src={project.img} alt={project.title} layout="fill" objectFit="cover" />
      </div>
      <Link href={project.github} className='absolute top-4 left-4 text-xl text-theme hover:scale-110'>
        <FaGithub />
        </Link>
        <Link href={project.link}  className='absolute top-4 right-4 text-xl text-theme hover:scale-110'>
            <FaGlobe />
          </Link>
      <figcaption className="absolute bottom-5 left-4 fig">
        <ul className="flex flex-wrap gap-2">{techStackList}</ul>
      </figcaption>
    </figure>
  )
}

export default WorkCard;
