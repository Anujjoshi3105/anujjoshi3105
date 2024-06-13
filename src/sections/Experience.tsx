'use client';
import Template from '@/components/Template';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {experiences} from '@/app/data'

const Experience = () => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>('.underline');
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);



  return (
      <Template title="Experience" subtitle="Where I've worked" id="experience">
        <div className="experience mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-[25%,75%] gap-4 md:p-4">
            <ul className="relative h-max-content flex md:block overflow-x-scroll overflow-y-hidden md:overflow-visible">
            <div className="underline bg-theme absolute left-0 md:left-[-0.5px] top-0 md:h-10 md:w-[4px] transition-all duration-300 ease-in-out"></div>
              {experiences.map((experience, index) => (
                <li
                  className={`h-10 px-4 flex items-center cursor-pointer w-content text-nowrap hover:bg-secondary group border-primary md:border-l-2`}
                  onClick={() => setSelected(index)}
                  key={experience.name}
                >
                  <span className={`flex justify-center items-center group-hover:text-theme font-semibold ${index === selected && ' text-theme'}`}>
                    {experience.name}
                  </span>
                </li>
              ))}
            </ul>
            <div className="h-max md:h-40vh">
              <div className="">
                <h3 className='font-bold'>
                  <span>{experiences[selected].role}</span>
                  <span className="text-theme">
                    &nbsp;@&nbsp;
                    <Link href={experiences[selected].url} className="link">
                      {experiences[selected].name}
                    </Link>
                  </span>
                </h3>
                <p className="">
                  {experiences[selected].start} - {experiences[selected].end}
                </p>
                <ul className="list-none flex flex-col gap-4 mt-4 pl-5">
                  {experiences[selected].shortDescription.map((description, index) => (
                    <li key={index} className="relative before:content-['▹'] before:absolute before:left-[-20px] before:top-[6px] before:text-theme before:leading-[12px]">
                      {description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Template>
  );
}

export default Experience;
