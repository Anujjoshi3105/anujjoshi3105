import { FaGithub, FaGlobe, FaFolderOpen, FaFolder } from 'react-icons/fa';
import Image from 'next/image';
import { FC } from 'react';

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
    <li key={index} className='bg-theme rounded-lg px-2 p-1'>{tech}</li>
  ));

  return (
    <div className='group lg:w-1/4 flex-grow flex justify-start items-start gap-8 flex-col px-5 py-2 transition-all delay-100 sm:w-full md:w-[40%] sm:gap-4 group relative overflow-hidden rounded-xl hover:scale-105 hover:border-b-4 hover:border-r-4 hover:border-theme'>
      <Image
        src={project.img}
        alt={project.title}
        width={500}
        height={300}
        className='w-full h-full rounded-md inset-0 group-hover:opacity-80 absolute object-cover opacity-20 -z-[-10] '
      />
      <div className="flex w-full items-center justify-between text-theme z-10">
        <FaFolderOpen className='text-5xl group-hover:hidden' />
        <FaFolder className="text-5xl hidden group-hover:block" />
        <div className="flex sm:text-xl gap-4 text-base">
          <a href={project.github} target='_blank' rel='noopener noreferrer'>
            <FaGithub className='hover:text-primary' />
          </a>
          <a href={project.link} target='_blank' rel='noopener noreferrer'>
            <FaGlobe className='hover:text-primary' />
          </a>
        </div>
      </div>
      <div className="down flex justify-start items-start gap-2 flex-col w-full capitalize z-10 p-1 rounded-lg  group-hover:bg-secondary link">
        <h3 className='text-base font-semibold mb-2 md:mb-4'>{project.title}</h3>
        <p className='text-sm mb-2 md:mb-4'>{project.desc.replace(/'/g, '&#39;')}</p>
      </div>
      <div className="down flex justify-start items-start gap-2 flex-col w-full capitalize z-10">
        <ul className='flex gap-2 text-primary text-sm'>
          {techStackList}
        </ul>
      </div>
    </div>
  );
};

export default WorkCard;
