"use client";

import React from "react";
import { motion } from "framer-motion";
import { fade, stagger } from "../../../lib/animations";
import { notFound, useParams } from "next/navigation";
import { featuredProjects, otherProjects } from "../../../lib/projects";
import SkillIcon from "../../../components/skills/SkillIcon";
import GithubButton from "../../../components/otherprojects/GithubButton";
import ExternalLink from "../../../components/otherprojects/ExternalLink";
import Head from "next/head";


const Page = () => {

  const { slug } = useParams();
  const decodedSlug = decodeURIComponent(slug);

  const combinedList = [...featuredProjects, ...otherProjects];
  const project = combinedList.find((proj) => proj.name === decodedSlug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <motion.div
        variants={stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="flex min-h-screen flex-col items-center justify-start bg-primary"
      >
        <div className="mt-24 w-3/5 space-y-8 p-4 pl-8 lg:pl-24">
          <motion.div className="">
            <h1 className="flex flex-row items-center gap-2 text-left text-2xl font-bold sm:text-3xl">
              {decodedSlug}{" "}
              <span className="badge badge-outline font-JetBrains text-secondary">
                {project.year}
              </span>
            </h1>
            <h2 className="font-JetBrains text-secondary">
              <span>Made For: </span>
              {project.for}
            </h2>
          </motion.div>
          <motion.div className=" text-white">{project.description}</motion.div>
          <motion.div className=" space-y-3 text-white">
            <h1 className="text-left text-lg font-bold sm:text-xl">
              Tech Stack:
            </h1>
            <div className="flex flex-row flex-wrap gap-4 ">
              {project.techStack.map((skill) => (
                <SkillIcon
                  size="23"
                  key={skill.id}
                  name={skill.name}
                  Icon={skill.icon}
                />
              ))}
            </div>
          </motion.div>
          <motion.div className=" space-y-3 text-white">
            <h1 className="text-left text-lg font-bold sm:text-xl">Links:</h1>
            <div className="flex flex-row gap-4">
              <GithubButton link={project.github} />
              <ExternalLink link={project.link} />
            </div>
          </motion.div>
          <motion.div className="flex flex-col space-y-3 text-white">
            <h1 className="text-left text-lg font-bold sm:text-xl">Gallery:</h1>
            <div className="w-[750px] space-y-4 flex flex-wrap">
              {project.gallery.map((item) => (
                <div key={item.id} className="flex-col flex items-center space-y-1">
                  <img
                    src={item.image}
                    className="w-full rounded-lg shadow-md "
                  />
                  <span className="text-secondary font-JetBrains">{item.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Page;
