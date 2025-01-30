'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AboutSection = () => {
    return (
        <motion.section
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className='flex items-center justify-center px-10 sm:px-28 w-full py-12 min-h-[55vh]'>
            <div className='flex flex-col justify-center w-[750px] sm:w-[950px]' id='about'>
                <h1 className='font-JetBrains text-3xl sm:text-4xl font-bold flex items-center'>About Me</h1>
                <h2 className='mt-8'>Hi! I’m Yong Zhuo, and I love creating and building applications that people find enjoyable and engaging to use.</h2>
                <br/>
                <h2 >As a Year 2 Computer Science student at the National University of Singapore (NUS), I am building a strong foundation in software engineering while pursuing a minor in Psychology.</h2>
                <br/>
                <h2>I stay up-to-date with emerging tech trends and constantly seek new technologies or methods to enhance the quality and functionality of my projects.</h2>
                <br/>
                <h2>Aside from web development, I enjoy exploring and experimenting with other areas of software development, such as game development and mobile app development, constantly broadening my skill set and discovering new possibilities.</h2>
            </div>
        </motion.section>
    )
}

export default AboutSection