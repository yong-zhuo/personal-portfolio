'use client'

import React from 'react'
import { featuredProjects, otherProjects } from '../../lib/projects'
import GithubButton from '../../components/otherprojects/GithubButton'
import ExternalLink from '../../components/otherprojects/ExternalLink'
import SkillIcon from '../../components/skills/SkillIcon'
import { motion } from 'framer-motion'
import { fade, stagger } from '../../lib/animations'
import { FaArrowLeft } from 'react-icons/fa'
import Link from 'next/link'

const page = () => {

    const combinedList = [...otherProjects, ...featuredProjects]

  return (
    <motion.div 
        variants={stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
    className='bg-primary min-h-screen flex flex-col items-center justify-start'>
        <motion.div className='p-4 pl-8 lg:pl-24 mt-24 w-full' variants={fade}>
            
            <h1 className='text-4xl text-left font-bold sm:text-5xl'>Archive</h1>
            <p className='text-sm text-left text-secondary font-JetBrains'>A list of the projects I have done.</p>
        </motion.div>
        <div className='w-full pl-8 lg:px-24 mt-4'>
            <table className='table w-full'>
                <motion.thead variants={fade}>
                    <tr className='text-white text-lg font-JetBrains'>
                        <th>Year</th>
                        <th>Name</th>
                        <th className='hidden lg:table-cell'>Made For</th>
                        <th className='hidden lg:table-cell'>Built With</th>
                        <th>Links</th>
                    </tr>
                </motion.thead>
                <motion.tbody>
                    {
                        combinedList.sort((a, b) => b.year - a.year).map((proj, index) => (
                            <motion.tr key={index} variants={fade} className='table-row' >
                                
                                    <td className='text-secondary'>{proj.year}</td>
                                    <td className='font-bold'>{proj.name}</td>
                                    <td className='hidden lg:table-cell text-secondary'>{proj.for}</td>
                                    <td className='hidden lg:flex flex-row gap-4 items-center flex-wrap w-4/5 justify-start '>{proj.techStack.map((skill) => <SkillIcon Icon={skill.icon} name={skill.name} key={skill.id} size={24}/>)}</td>
                                    <td className='table-cell'>
                                        <div className='flex flex-row items-center gap-2'>
                                            <GithubButton link={proj.github} />
                                            <ExternalLink link={proj.link} />
                                        </div>
                                    </td>
                                
                            </motion.tr>
                        ))
                    }
                </motion.tbody>
            </table>
        </div>
    </motion.div>
  )
}

export default page