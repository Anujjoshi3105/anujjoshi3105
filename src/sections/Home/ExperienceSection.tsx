"use client";

import { SectionTemplate } from "@/components/Template";
import { useEffect, useState } from "react";
import experiences from "@/data/seed/experiences.json";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/utils/date";

export default function ExperienceSection() {
  const [selected, setSelected] = useState(0);
  const [experienceData, setExperienceData] =
    useState<Experience[]>(experiences);

  useEffect(() => {
    async function fetchExperienceData() {
      try {
        const res = await fetch("/api/experience");
        if (res.status === 404) {
          console.log("Experience data not found");
          return;
        }
        if (res.status !== 200) {
          console.log("Error fetching experience data from API");
          return;
        }
        const data = await res.json();
        setExperienceData(data.data as Experience[]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchExperienceData();
  }, []);

  const selectedExperience = experienceData[selected];
  return (
    <SectionTemplate title="Experience" subtitle="Where I've worked">
      <div className="mx-auto max-w-4xl grid grid-cols-1 md:h-[40vh] md:grid-cols-[25%,75%] gap-4 md:gap-8">
        <ul className="relative h-max-content flex md:block overflow-x-scroll overflow-y-clip md:overflow-auto">
          {experienceData.map((experience, index) => (
            <li
              className={`h-10 px-4 flex text-lg items-center cursor-pointer w-content text-nowrap hover:bg-foreground group ${
                index === selected &&
                " bg-foreground border-b-2 border-l-0 md:border-b-0 md:border-l-2 border-theme"
              }`}
              onClick={() => setSelected(index)}
              key={experience.company}>
              <span
                className={`flex justify-center items-center select-none group-hover:text-theme font-semibold ${
                  index === selected && " text-theme"
                }`}>
                {experience.company}
              </span>
            </li>
          ))}
        </ul>
        <div className="h-max">
          <div className="md:flex justify-between items-center">
            <h3 className="font-semibold text-xl text-theme">
              {selectedExperience?.role}
            </h3>
            <time className="text-sm">
              {formatDate(selectedExperience?.start)}&nbsp;-&nbsp;
              {formatDate(selectedExperience?.end)}
            </time>
          </div>
          <a href={selectedExperience?.link} className="link cursor-pointer">
            {selectedExperience?.company},&nbsp;
            {selectedExperience?.place}
          </a>
          <ul className="list-none flex flex-col gap-1 mt-4 pl-5">
            {selectedExperience?.description.map((desc, index) => (
              <li key={index} className="custom-bullet">
                {desc}
              </li>
            ))}
          </ul>
          <div className="space-x-2 m-4">
            {selectedExperience?.skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </div>
      </div>
    </SectionTemplate>
  );
}
