import React from 'react'
import MotionSection from './MotionSection'
import Link from 'next/link'

const Hero = () => {
  return (
    <MotionSection id='home' className="flex items-center justify-center h-screen">

      <div className='flex flex-col z-10 justify-center w-[950px] -mt-12'>

        <h3 className='text-xs md:text-lg font-semibold text-secondary'>Hi! I am</h3>
        <h1 className='mt-2 text-4xl font-JetBrains font-bold md:text-7xl'>Yong Zhuo.</h1>
        <h2 className='mt-4 text-lg md:text-4xl text-secondary font-bold'>I enjoy designing and creating meaningful applications.</h2>
        <p className='text-sm font-normal text-white mt-6 leading-6'>
          I am currently a Year 2 Computer Science student studying at the National University of Singapore. I am passionate about web development and enjoy bringing my ideas to life.
        </p>
        <button className='btn btn-outline btn-secondary mt-12 w-fit'><Link href="#projects">View my Projects</Link></button>
      </div>
    </MotionSection>
  )
}

export default Hero