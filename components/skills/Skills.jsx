'use client'

import React from 'react'
import MotionSection from '../section/MotionSection'
import { languages, others } from '../../lib/skillslist'
import SkillIcon from './SkillIcon'

const Skills = () => {
  return (
    <MotionSection id='skills' className="flex items-center justify-center">
      <div className='bg-primary-content w-[750px] rounded-md flex flex-col gap-8 shadow-2xl'>
        <div className='container mx-auto p-8 flex flex-col gap-4'>
          <div>
            <h2 className='font-bold text-3xl pb-1 border-b-2 border-b-secondary'>My Tech Stack</h2>
          </div>
          <div className='flex flex-col'>
            <div className='pb-1'>
              <h2 className='card-title'>Languages:</h2>
              <div className='flex flex-row flex-wrap gap-4 pt-3 pb-5'>
                {
                  languages.map((language) => <SkillIcon key={language.id} name={language.name} Icon={language.icon} />)
                }
              </div>
            </div>
            <div className='pt-1'>
              <h2 className='card-title'>Frameworks & Tools:</h2>
              <div className='flex flex-row flex-wrap gap-4 pt-3 pb-5'>
                {
                  others.map((language) => <SkillIcon key={language.id} name={language.name} Icon={language.icon} />)
                }
            </div>
            </div>
          </div>
        </div>
      </div>

    </MotionSection>
  )
}

export default Skills