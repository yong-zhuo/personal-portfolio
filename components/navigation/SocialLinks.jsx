import React from 'react'
import { SiGithub, SiLinkedin } from 'react-icons/si'

const SocialLinks = () => {
    const hover = "hover:scale-125 transition duration-100 ease-in-out hover:text-accent text-secondary cursor-pointer"
    return (
        <div>
            <ul className='flex items-center gap-4'>
                <a href="https://github.com/yong-zhuo" target='_blank'>
                    <SiGithub size={25} className={hover} />
                </a>
                <a href='https://www.linkedin.com/in/yap-yong-zhuo' target='_blank'>
                    <SiLinkedin size={25} className={hover} />
                </a>
            </ul>
        </div>
    )
}

export default SocialLinks