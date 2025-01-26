'use client'

import React from 'react'

const SkillIcon = ({name, Icon}) => {
  return (
    <div className='tooltip tooltip-bottom' data-tip={name}>
        <Icon 
        size={35}
        className="transition-all cursor-pointer  text-secondary hover:text-accent hover:scale-125"  />
    </div>
  )
}

export default SkillIcon