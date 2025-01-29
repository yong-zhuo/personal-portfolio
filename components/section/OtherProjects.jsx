'use client'

import React from 'react'
import { motion } from 'framer-motion'

const OtherProjects = () => {
  return (
    <motion.section
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      className='flex items-center justify-center px-10 sm:px-28 w-full py-12 min-h-[80vh] sm:h-[60vh]'>
      <div className='flex flex-col items-center justify-center w-[750px] sm:w-[950px]'>
        <h1 className='font-JetBrains text-3xl sm:text-4xl font-bold flex items-center'>Other Projects</h1>
      </div>

      <motion.div className='grid grid-cols-1 gap-16 lg:grid-cols-2'>

      </motion.div>
    </motion.section>
  )
}

export default OtherProjects