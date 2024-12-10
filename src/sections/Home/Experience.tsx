"use client";

import { SectionTemplate } from "@/components/Template";
import { useState } from "react";
import { experiences } from "@/data";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const [selected, setSelected] = useState(0);

  return (
    <SectionTemplate title="Experience" subtitle="Where I've worked">
      <div className="mx-auto max-w-4xl grid grid-cols-1 md:h-[40vh] md:grid-cols-[20%,80%] gap-4 md:gap-8">
        <ul className="relative h-max-content flex md:block overflow-x-scroll overflow-y-clip md:overflow-auto">
          {experiences.map((experience, index) => (
            <li
              className={`h-10 px-4 flex text-lg items-center cursor-pointer w-content text-nowrap hover:bg-foreground group ${
                index === selected &&
                " bg-foreground border-b-2 border-l-0 md:border-b-0 md:border-l-2 border-theme"
              }`}
              onClick={() => setSelected(index)}
              key={experience.name}>
              <span
                className={`flex justify-center items-center select-none group-hover:text-theme font-semibold ${
                  index === selected && " text-theme"
                }`}>
                {experience.name}
              </span>
            </li>
          ))}
        </ul>
        <div className="h-max">
          <div className="md:flex justify-between items-center">
            <h3 className="font-semibold text-xl text-theme">
              {experiences[selected].role}
            </h3>
            <time className="text-sm">
              {experiences[selected].start} - {experiences[selected].end}
            </time>
          </div>
          <div>
            {experiences[selected].name},&nbsp;{experiences[selected].place}
          </div>
          <ul className="list-none flex flex-col gap-1 mt-4 pl-5">
            {experiences[selected].shortDescription.map(
              (description, index) => (
                <li key={index} className="custom-bullet">
                  {description}
                </li>
              )
            )}
          </ul>
          <div className="space-x-2 m-4">
            {experiences[selected].skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </div>
      </div>
    </SectionTemplate>
  );
};

export default Experience;
