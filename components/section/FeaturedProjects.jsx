'use client'

import React from 'react'
import { motion } from 'framer-motion'
import GithubButton from '../otherprojects/GithubButton'
import ExternalLink from '../otherprojects/ExternalLink'
import { beanchillin } from '../../lib/skillslist'
import SkillIcon from '../skills/SkillIcon'

const FeaturedProjects = () => {
    return (
        <motion.section
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className='flex items-center justify-center px-10 sm:px-28 w-full py-12 h-[80vh] sm:h-[60vh]'>
            <div className='flex flex-col justify-center w-[345px] sm:w-[750px]'>
                <h1 className='font-JetBrains text-2xl sm:text-4xl font-bold flex items-center'>Featured Projects</h1>
                <div className='mt-4 flex flex-col items-center justify-center'>
                    <div className="flex sm:hidden card bg-primary-content w-80 shadow-xl">
                        <figure>
                            <img src='/beanchillin.png' className='' />
                        </figure>
                        <div className="card-body p-5">
                            <h2 className="text-sm text-secondary font-JetBrains">Featured Project</h2>
                            <h2 className="card-title flex flex-row justify-between items-center">BeanChillin <span className='font-JetBrains text-sm'>2024</span></h2>
                            <p>BeanChillin is a web-based forum designed to cater towards university students who are looking for a unified space to create and join different groups tailored to their specific needs and engage in meaningful discussions.</p>
                            <div className="mt-2 card-actions">
                                <div className='flex items-center justify-between flex-row w-full'>
                                    <div className='gap-2 flex flex-wrap flex-row '>
                                        {
                                            beanchillin.map((skill) => (<SkillIcon size="23" key={skill.id} name={skill.name} Icon={skill.icon} />))
                                        }
                                    </div>
                                    <div className='flex items-center justify-between gap-2'>
                                        <GithubButton link="https://github.com/yong-zhuo/BeanChillin" />
                                        <ExternalLink link="https://beanchillin.vercel.app" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </motion.section>
    )
}

export default FeaturedProjects