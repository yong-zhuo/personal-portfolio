import React from "react";
import SkillIcon from "../skills/SkillIcon";
import GithubButton from "./GithubButton";
import ExternalLink from "./ExternalLink";
import Link from "next/link";

export const OtherProjectCard = ({ proj }) => {
  return (
    <div className="grid-item card h-[300px] w-full bg-primary-content shadow-md duration-500 hover:scale-105 hover:shadow-xl sm:h-[240px] md:h-[280px] md:w-[280px] lg:w-[350px] xl:h-[290px] xl:w-[320px]">
      <div className="card-body p-5">
        <span className="flex flex-col">
          <h2 className="card-title flex flex-row items-center justify-between">
            <Link
              prefetch
              target='_blank'
              href={`/archive/${proj.name}`}
              className="text-2xl hover:underline"
            >
              {proj.name}
            </Link>
            <span className="font-JetBrains text-sm">{proj.year}</span>
          </h2>
          <p className="font-JetBrains text-sm text-gray-300">{proj.for}</p>
        </span>
        <p className="flex items-center justify-center text-sm">
          {proj.description}
        </p>

        <div className="card-actions mt-2">
          <div className="flex w-full flex-row items-center justify-between">
            <div className="flex flex-row flex-wrap gap-2 ">
              {proj.techStack.map((skill) => (
                <SkillIcon
                  size="23"
                  key={skill.id}
                  name={skill.name}
                  Icon={skill.icon}
                />
              ))}
            </div>
            <div className="flex items-center justify-between gap-2">
              <GithubButton link={proj.github} />
              <ExternalLink link={proj.link} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
