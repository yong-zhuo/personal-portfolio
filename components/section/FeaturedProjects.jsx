'use client'

import React from 'react'
import { motion } from 'framer-motion'
import GithubButton from '../otherprojects/GithubButton'
import ExternalLink from '../otherprojects/ExternalLink'
import SkillIcon from '../skills/SkillIcon'
import { featuredProjects } from '../../lib/projects'

const FeaturedProjects = () => {
    return (
        <motion.section
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className='flex items-center justify-center px-10 sm:px-28 w-full py-12 min-h-[80vh] sm:h-[60vh]'>
            <div className='flex flex-col justify-center w-[750px] sm:w-[950px]' id='projects'>
                <h1 className='font-JetBrains text-3xl sm:text-4xl font-bold flex items-center'>Featured Projects</h1>
                <div className='mt-8 flex flex-col items-center justify-center'>


                    {/*For desktop*/}
                    <div>
                        <div>
                            
                        </div>
                    </div>



                    {/*For mobile*/}
                    {featuredProjects.map((proj) => <div key={proj.id} className="flex sm:hidden card bg-primary-content w-full shadow-md hover:shadow-xl hover:scale-105 duration-500 mb-8">
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