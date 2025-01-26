'use client'

import React from 'react'
import { animate, motion } from 'framer-motion'
import { languages, others } from '../../lib/skillslist'
import SkillIcon from './SkillIcon'


const Skills = () => {
  return (

    <motion.section
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      className='flex items-center justify-center px-10 sm:px-28 w-full py-12'>
      <div className='bg-primary-content w-[750px] rounded-md flex flex-col gap-8 shadow-2xl'>
        <div className='container mx-auto p-8 flex flex-col gap-4'>
          <div>
            <h2 className='font-bold text-3xl pb-1 border-b-2 border-b-secondary font-JetBrains'>My Tech Stack</h2>
          </div>
          <div className='flex flex-col'>
            <div className='pb-1'>
              <h2 className='card-title font-JetBrains'>Languages:</h2>
              <div className='flex flex-row flex-wrap gap-4 pt-3 pb-5'>
                {
                  languages.map((language) => <SkillIcon key={language.id} name={language.name} Icon={language.icon} />)
                }
              </div>
            </div>
            <div className='pt-1'>
              <h2 className='card-title font-JetBrains'>Frameworks & Tools:</h2>
              <div className='flex flex-row flex-wrap gap-4 pt-3 pb-5'>
                {
                  others.map((language) => <SkillIcon key={language.id} name={language.name} Icon={language.icon} />)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>


  )
}

export default Skills