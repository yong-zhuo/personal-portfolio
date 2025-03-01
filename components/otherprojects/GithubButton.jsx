import React from 'react'
import { SiGithub } from 'react-icons/si'

const GithubButton = ({link}) => {
    return (
         link && <a href={link} target='_blank' className='tooltip tooltip-bottom font-JetBrains' data-tip='View Github Repo'>
            <SiGithub size={23}
                className="transition-all cursor-pointer  text-secondary hover:text-accent hover:scale-125" />
        </a>
    )
}

export default GithubButton