'use client'

import React from 'react'
import { motion } from 'framer-motion'
import GithubButton from '../otherprojects/GithubButton'
import ExternalLink from '../otherprojects/ExternalLink'
import SkillIcon from '../skills/SkillIcon'
import { featuredProjects } from '../../lib/projects'
import { stagger } from '../../lib/animations'

const FeaturedProjects = () => {
    return (
        <motion.section
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className='flex items-center justify-center px-10 sm:px-28 w-full py-12 h-[140vh]'>
            <div className='flex flex-col justify-center w-[750px] sm:w-[950px]' id='projects'>
                <h1 className='font-JetBrains text-3xl sm:text-4xl font-bold flex items-center'>Featured Projects</h1>
                <div className='mt-8 flex flex-col items-center justify-center'>


                    {/*For desktop*/}
                    <div className='relative hidden lg:flex w-full flex-row gap-3 m-5 pb-12'>
                        <motion.div
                            viewport={{ once: true, amount: 0.5 }}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className='w-[2200px] h-[320px] pr-3 pt-14 pl-0'>
                            <img src={featuredProjects[0].image} className='w-full h-full object-fit rounded-xl shadow-md' />
                            <div className='flex flex-row mt-4 gap-4 flex-wrap items-start justify-start'>{featuredProjects[0].techStack.map((icon) => {
                                return <SkillIcon key={icon.id} size="30" name={icon.name} Icon={icon.icon} />
                            })}
                            </div>
                        </motion.div>
                        <motion.div
                            viewport={{ once: true, amount: 0.5 }}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className='text-right'>
                            <h2 className="text-sm text-secondary font-JetBrains">Featured Project</h2>
                            <h1 className='text-3xl font-semibold'>{featuredProjects[0].name}</h1>
                            <h3 className='font-JetBrains text-gray-300 text-sm'>{featuredProjects[0].for}</h3>
                            <p className='mt-6 bg-primary-content rounded-md p-5 shadow-md'>{featuredProjects[0].description}</p>

                            <div className='mt-4 flex flex-row justify-end gap-2'>
                                <GithubButton link={featuredProjects[0].github} />
                                <ExternalLink link={featuredProjects[0].link} />
                            </div>
                        </motion.div>
                    </div>

                    <div className='relative hidden lg:flex w-full flex-row gap-3 m-5 pt-16'>
                        <motion.div
                            viewport={{ once: true, amount: 0.5 }}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className='text-left'>
                            <h2 className="text-sm text-secondary font-JetBrains">Featured Project</h2>
                            <h1 className='text-3xl font-semibold'>{featuredProjects[1].name}</h1>
                            <h3 className='font-JetBrains text-gray-300 text-sm'>{featuredProjects[1].for}</h3>
                            <p className='mt-6 bg-primary-content rounded-md p-5 shadow-md'>{featuredProjects[1].description}</p>
                            <div className='mt-4 flex flex-row justify-start gap-2'>
                                <GithubButton link={featuredProjects[1].github} />
                                <ExternalLink link={featuredProjects[1].link} />
                            </div>
                        </motion.div>
                        <motion.div 
                        viewport={{ once: true, amount: 0.5 }}
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className='w-[2200px] h-[370px] pr-0 pl-3 pt-5'>
                            <img src={featuredProjects[1].image} className='w-full h-full object-fit rounded-xl shadow-md' />
                            <div className='flex flex-row mt-4 gap-4 flex-wrap items-end justify-end'>{featuredProjects[1].techStack.map((icon) => {
                                return <SkillIcon key={icon.id} size="30" name={icon.name} Icon={icon.icon} />
                            })}</div>
                        </motion.div>
                    </div>

                    {/*For mobile*/}
                    {featuredProjects.map((proj) => <div key={proj.id} className="flex lg:hidden card bg-primary-content w-full md:w-[480px] shadow-md hover:shadow-xl hover:scale-105 duration-500 mb-8">
                        <figure className='h-[24vh]'>
                            <img src={proj.image} className=' h-full w-full object-cover' />
                        </figure>
                        <div className="card-body p-5">

                            <h2 className="text-sm text-secondary font-JetBrains">Featured Project</h2>
                            <span className='flex flex-col'>
                                <h2 className="card-title flex flex-row justify-between items-center">
                                    <span>{proj.name}</span>
                                    <span className='font-JetBrains text-sm'>{proj.year}</span>
                                </h2>
                                <p className='font-JetBrains text-gray-300 text-sm'>{proj.for}</p>
                            </span>
                            <p>{proj.description}</p>

                            <div className="mt-2 card-actions">
                                <div className='flex items-center justify-between flex-row w-full'>
                                    <div className='gap-2 flex flex-wrap flex-row '>
                                        {
                                            proj.techStack.map((skill) => (<SkillIcon size="23" key={skill.id} name={skill.name} Icon={skill.icon} />))
                                        }
                                    </div>
                                    <div className='flex items-center justify-between gap-2'>
                                        <GithubButton link={proj.github} />
                                        <ExternalLink link={proj.link} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)}

                </div>
            </div>
        </motion.section>
    )
}

export default FeaturedProjects