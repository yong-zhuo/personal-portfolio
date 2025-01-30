'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { otherProjects } from '../../lib/projects'
import { OtherProjectCard } from '../otherprojects/OtherProjectCard'
import { fade, stagger } from '../../lib/animations'


const OtherProjects = () => {
  return (
    <motion.section
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      className='overflow-hidden flex items-center justify-center px-10 sm:px-28 w-full min-h-[120vh]  flex-col'>
      <div className='flex flex-col items-center justify-center w-[750px] sm:w-[950px]'>
        <h1 className='font-JetBrains text-3xl sm:text-4xl font-bold flex items-center'>Other Projects</h1>
      </div>

      <motion.div 
      variants={stagger}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 xl:grid-cols-3 mt-8 items-center justify-center'>
        {
          otherProjects.sort((a, b) => b.year - a.year).map((proj) => (
            <motion.div key={proj.id}  variants={fade}>
              <OtherProjectCard proj={proj} />
            </motion.div>))
        }
      </motion.div>
    </motion.section>
  )
}

export default OtherProjects