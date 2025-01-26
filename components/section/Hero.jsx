import React from 'react'
import MotionSection from './MotionSection'
import Image from 'next/image'
import { Meteors } from '../Meteors'

const Hero = () => {
  return (
    <MotionSection id='home' className="flex items-center justify-center h-screen">
        
        <div className='flex flex-row z-10 items-center justify-between w-[900px] -mt-12'>
            <div className='flex flex-col'>
                <h3 className='text-xs md:text-lg font-semibold text-secondary'>Hi! I am</h3>
                <h1 className='mt-2 text-4xl font-exo font-bold md:text-7xl'>Yong Zhuo.</h1>
                <h2 className='mt-4 text-lg md:text-4xl text-secondary font-bold'>I enjoy designing and creating meaningful applications.</h2>
                <p className='text-xs font-normal text-white mt-4 leading-6'>
                    I am currently a Year 2 Computer Science student studying at the National University of Singapore. I am passionate about web development and enjoy bringing my ideas to life.
                </p>
                
            </div>
            <Image src="/herosection.svg" height={300} width={300} alt="Hero" className='hidden lg:block'/>
        </div>
    </MotionSection>
  )
}

export default Hero