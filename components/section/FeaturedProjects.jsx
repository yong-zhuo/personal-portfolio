"use client";

import React from "react";
import { motion } from "framer-motion";
import GithubButton from "../otherprojects/GithubButton";
import ExternalLink from "../otherprojects/ExternalLink";
import SkillIcon from "../skills/SkillIcon";
import { featuredProjects } from "../../lib/projects";
import { stagger } from "../../lib/animations";
import Link from "next/link";

const FeaturedProjects = () => {
  return (
    <motion.section
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="flex min-h-[100vh] w-full items-center justify-center px-10 py-12 sm:min-h-[120vh] sm:px-28 "
    >
      <div
        className="flex w-[750px] flex-col justify-center sm:w-[950px]"
        id="projects"
      >
        <h1 className="flex items-center font-JetBrains text-3xl font-bold sm:text-4xl">
          Featured Projects
        </h1>
        <div className="mt-8 flex flex-col items-center justify-center">
          {/*For desktop*/}
          <div className="relative m-5 hidden w-full flex-row gap-3 pb-12 lg:flex">
            <motion.div
              viewport={{ once: true, amount: 0.5 }}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="h-[320px] w-[2200px] pl-0 pr-3 pt-14"
            >
              <Link
                prefetch
                href={`/archive/${featuredProjects[0].name}`}
                className="object-fit inline-block h-full w-full overflow-hidden rounded-xl shadow-md"
              >
                <img
                  src={featuredProjects[0].image}
                  className=" transition-transform duration-500 hover:scale-110"
                />
              </Link>
              <div className="mt-4 flex flex-row flex-wrap items-start justify-start gap-4">
                {featuredProjects[0].techStack.map((icon) => {
                  return (
                    <SkillIcon
                      key={icon.id}
                      size="30"
                      name={icon.name}
                      Icon={icon.icon}
                    />
                  );
                })}
              </div>
            </motion.div>
            <motion.div
              viewport={{ once: true, amount: 0.5 }}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-right"
            >
              <h2 className="font-JetBrains text-sm text-secondary">
                Featured Project
              </h2>
              <Link
                prefetch
                target='_blank'
                href={`/archive/${featuredProjects[0].name}`}
                className="text-3xl font-semibold hover:underline"
              >
                {featuredProjects[0].name}
              </Link>
              <h3 className="font-JetBrains text-sm text-gray-300">
                {featuredProjects[0].for}
              </h3>
              <p className="mt-6 rounded-md bg-primary-content p-5 shadow-md">
                {featuredProjects[0].description}
              </p>

              <div className="mt-4 flex flex-row justify-end gap-2">
                <GithubButton link={featuredProjects[0].github} />
                <ExternalLink link={featuredProjects[0].link} />
              </div>
            </motion.div>
          </div>

          <div className="relative m-5 hidden w-full flex-row gap-3 pt-16 lg:flex">
            <motion.div
              viewport={{ once: true, amount: 0.5 }}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h2 className="font-JetBrains text-sm text-secondary">
                Featured Project
              </h2>
              <Link
                prefetch
                target='_blank'
                href={`/archive/${featuredProjects[1].name}`}
                className="text-3xl  font-semibold hover:underline"
              >
                {featuredProjects[1].name}
              </Link>
              <h3 className="font-JetBrains text-sm text-gray-300">
                {featuredProjects[1].for}
              </h3>
              <p className="mt-6 rounded-md bg-primary-content p-5 shadow-md">
                {featuredProjects[1].description}
              </p>
              <div className="mt-4 flex flex-row justify-start gap-2">
                <GithubButton link={featuredProjects[1].github} />
                <ExternalLink link={featuredProjects[1].link} />
              </div>
            </motion.div>
            <motion.div
              viewport={{ once: true, amount: 0.5 }}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="h-[370px] w-[2200px] pl-3 pr-0 pt-5"
            >
              <Link
                prefetch
                target='_blank'
                href={`/archive/${featuredProjects[1].name}`}
                className="object-fit inline-block h-full w-full overflow-hidden rounded-xl shadow-md"
              >
                <img
                  src={featuredProjects[1].image}
                  className=" transition-transform duration-500 hover:scale-110"
                />
              </Link>
              <div className="mt-4 flex flex-row flex-wrap items-end justify-end gap-4">
                {featuredProjects[1].techStack.map((icon) => {
                  return (
                    <SkillIcon
                      key={icon.id}
                      size="30"
                      name={icon.name}
                      Icon={icon.icon}
                    />
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/*For mobile*/}
          {featuredProjects.map((proj) => (
            <div
              key={proj.id}
              className="card mb-8 flex w-full bg-primary-content shadow-md duration-500 hover:scale-105 hover:shadow-xl md:w-[480px] lg:hidden"
            >
              <figure className="h-[24vh]">
                <img src={proj.image} className=" h-full w-full object-cover" />
              </figure>
              <div className="card-body p-5">
                <h2 className="font-JetBrains text-sm text-secondary">
                  Featured Project
                </h2>
                <span className="flex flex-col">
                  <h2 className="card-title flex flex-row items-center justify-between">
                    <Link
                      prefetch
                      target='_blank'
                      href={`/archive/${proj.name}`}
                      className="hover:underline"
                    >
                      {proj.name}
                    </Link>
                    <span className="font-JetBrains text-sm">{proj.year}</span>
                  </h2>
                  <p className="font-JetBrains text-sm text-gray-300">
                    {proj.for}
                  </p>
                </span>
                <p>{proj.description}</p>

                <div className="card-actions mt-2">
                  <div className="flex w-full flex-row items-center justify-between">
                    <div className="flex w-3/5 flex-row flex-wrap gap-2 sm:w-full">
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
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedProjects;
