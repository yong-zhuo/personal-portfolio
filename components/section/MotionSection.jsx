'use client'

import React from 'react'
import { motion } from "framer-motion";
import { fade } from '../../lib/animations';

const MotionSection = ({ children, id, className }) => {

    const getVariants = () => {
        switch (id) {
            case "home":
                return { animate: "animate" };
            default:
                return { whileInView: "animate" };
        }
    };

    return (
        <motion.section
            viewport={{ once: true }}
            initial="initial"
            {...getVariants()}
            variants={fade}
            id={id}
            className={`${className} px-10 sm:px-28 w-full py-12`}
        >
            {children}
        </motion.section>
    )
}

export default MotionSection