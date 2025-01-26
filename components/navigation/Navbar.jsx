"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import Hamburger from 'hamburger-react';
import { SiGithub } from "react-icons/si";
import SocialLinks from './SocialLinks';

const Navbar = () => {

  const [isRetracted, setIsRetracted] = useState(false);

  useEffect(() => {

  }, []);

  return (
    <motion.div
      animate={isRetracted ? "closed" : "open"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      variants={{
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "-100%" },
      }}
      className='navbar bg-base-100 w-full fixed items-center flex z-40' id="navBar">

      <div className='flex items-center justify-between w-full mx-4'>
        <Image src="/yzlogo.png" alt="logo" width={70} height={70} />
        <div className='hidden lg:block'>
          <SocialLinks />
        </div>
        {/*Only for Mobile*/}
        <div className='block lg:hidden'>
          <Hamburger rounded size={25} color='#e0fbfc'  />
        </div>


      </div>

    </motion.div>
  )
}

export default Navbar