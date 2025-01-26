"use client"

import React, { useEffect, useRef } from 'react'

const GlowingCursor = () => {
    const cursorGlowRef = useRef(null)

    useEffect(() => {
        const cursorGlow = document.getElementById('cursorGlow')
        cursorGlowRef.current = cursorGlow

        window.addEventListener('mousemove', (e) => {
            cursorGlow.style.transform = `translate(${e.clientX - cursorGlow.clientWidth / 2}px, ${e.clientY - cursorGlow.clientHeight / 2}px)`
        })

    }, [])

    return (
        <div id="cursorGlow" className='pointer-events-none fixed hidden h-64 w-64 z-50 rounded-full bg-secondary blur-[110px] opacity-20 md:block' />
    )
}

export default GlowingCursor