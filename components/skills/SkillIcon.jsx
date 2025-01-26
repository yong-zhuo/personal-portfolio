'use client'

import React from 'react'

const SkillIcon = ({name, Icon, size}) => {
  return (
    <div className='tooltip tooltip-bottom font-JetBrains ' data-tip={name}>
        <Icon 
        size={size ? size : 35}
        className="transition-all cursor-pointer  text-secondary hover:text-accent hover:scale-125"  />
    </div>
  )
}

export default SkillIcon