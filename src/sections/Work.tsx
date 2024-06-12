'use client';

import React, { useState } from 'react';
import { projects } from '@/helper/data';
import Template from '@/components/Template';
import WorkCard from '@/components/WorkCard';

const Work = () => {
  const [pIndex, setPIndex] = useState(-1);
  const allProjects = projects.flatMap(project => project.projects);

  return (
    <>
    <Template title="Work" subtitle="My Projects" id="work">
      <div className="upper gap-2 justify-center w-full flex items-center mb-8">
        <div
          className={`link p-1 text-base w-fit sm:px-5 sm:py-2 sm:text-lg font-semibold cursor-pointer transition-all delay-150 ${pIndex === -1 ? 'border-b-2 border-b-theme bg-tertiary' : ''}`}
          onClick={() => setPIndex(-1)}
          key="all"
        >
          All
        </div>
        {projects.map((project, index) => (
          <div
            className={`link p-1 text-base w-fit sm:px-5 sm:py-2 sm:text-lg font-semibold cursor-pointer transition-all delay-150 ${pIndex === index ? 'border-b-2 border-b-theme bg-tertiary' : ''}`}
            onClick={() => setPIndex(index)}
            key={index}
          >
            {project.header}
          </div>
        ))}
      </div>
      <div className="lower flex justify-start items-start w-full gap-8 flex-wrap">
        {pIndex === -1
          ? allProjects.map((project, index) => (
              <WorkCard key={index} project={project} />
            ))
          : projects[pIndex].projects.map((project, index) => (
              <WorkCard key={index} project={project} />
            ))}
      </div>
    </Template>
  </>
  );
}

export default Work;
