"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import Hamburger from 'hamburger-react';
import { SiGithub } from "react-icons/si";
import SocialLinks from './SocialLinks';
import { slide } from '../../lib/animations';
import { navItems } from '../../lib/navitems';
import Link from 'next/link';

const Navbar = () => {

  const [isRetracted, setIsRetracted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    var prev = window.scrollY;
    const handleNav = (e) => {
      if (window.scrollY < 200) {
        setIsRetracted(false);
      } else if (window.scrollY > 100 && window.scrollY < prev) {
        setIsRetracted(false);
      } else if (window.scrollY > 100 && window.scrollY > prev) {
        setIsRetracted(true);
      }
      prev = window.scrollY;
    }

    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    }

    window.addEventListener('scroll', handleNav);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener("scroll", handleNav);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  
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
        <a href="/">
          <Image src="/yzlogo.png" alt="logo" width={70} height={70} className='transition hover:scale-125' />
        </a>
        <div className='hidden lg:flex flex-row gap-6'>
          <AnimatePresence mode="wait">
            <motion.div className='flex flex-row gap-4 '
            
            >
              {
                navItems.map((item, index) => (
                  <Link key={`link=${index}`} href={item.link} className='font-JetBrains text-lg text-secondary hover:text-accent hover:scale-125 transition'>
                    {item.name}
                  </Link>))
              }
            </motion.div>
          </AnimatePresence>
          <SocialLinks />
        </div>
        {/*Only for Mobile*/}
        <div className='block lg:hidden'>
          <Hamburger toggled={isOpen} toggle={setIsOpen} rounded size={25} color='#e0fbfc' />
          <AnimatePresence>
            {isOpen ?
              <motion.div
                variants={slide}
                animate="enter"
                exit="exit"
                initial="initial"
                className='flex lg:hidden fixed h-screen w-screen right-0 bg-primary items-center justify-center '>
                <div className=' flex flex-col items-center justify-center  text-3xl font-JetBrains -translate-y-[86px] gap-y-10'>
                  {
                    navItems.map((item, index) => (
                      <Link  onClick={() => setIsOpen(false)} key={`link=${index}`} href={item.link} className='hover:scale-125 transition-all text-secondary hover:text-accent' >
                        {item.name}
                      </Link>))
                  }
                  <SocialLinks />
                </div>
              </motion.div>
              : null}
          </AnimatePresence>
        </div>




      </div>

    </motion.div>
  )
}

export default Navbar