import React from 'react'
import { FiExternalLink } from "react-icons/fi";

const ExternalLink = ({link}) => {
    return (
        <a href={link} target='_blank' className='tooltip tooltip-bottom font-JetBrains '>
            <FiExternalLink size={23}
                className="transition-all cursor-pointer  text-secondary hover:text-accent hover:scale-125" />
        </a>
    )
}

export default ExternalLink