import React from 'react'
import SkillIcon from '../skills/SkillIcon'
import GithubButton from './GithubButton'
import ExternalLink from './ExternalLink'

export const OtherProjectCard = ({ proj }) => {
  return (
    <div className="grid-item card bg-primary-content w-full md:w-[280px] lg:w-[350px] xl:w-[320px] h-[300px] sm:h-[240px] md:h-[280px] xl:h-[290px] shadow-md duration-500 hover:scale-105 hover:shadow-xl">
      <div className="card-body p-5">
        <span className='flex flex-col'>
          <h2 className="card-title flex flex-row justify-between items-center">
            <span className='text-2xl'>{proj.name}</span>
            <span className='font-JetBrains text-sm'>{proj.year}</span>
          </h2>
          <p className='font-JetBrains text-gray-300 text-sm'>{proj.for}</p>
        </span>
        <p className='text-sm flex justify-center items-center'>{proj.description}</p>

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
    </div>
  )
}
