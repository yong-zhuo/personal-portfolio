import React from 'react'

const Footer = () => {
    return (
        <footer className='sm:max-w-full pl-16 pr-16 pt-16  pb-16 text-xs sm:text-sm sm:pb-8 flex gap-2 flex-col items-center justify-center'>
            <p className='text-center'>
                Built with
                {" "}
                <a href='https://nextjs.org/' target="_blank" className='text-slate-300 text-md hover:text-secondary '>Next.js</a>,
                {" "}
                <a href="https://tailwindcss.com/" target="_blank" className='text-slate-300 text-md hover:text-secondary '>Tailwind CSS</a> 
                {" "} and
                {" "}<a href="https://daisyui.com/" target="_blank" className='text-slate-300 text-md hover:text-secondary '>DaisyUI</a>, deployed with
                {" "}<a href="https://vercel.com/home" target="_blank" className='text-slate-300 text-md hover:text-secondary '>Vercel</a>.
            </p>
            <p className='hover:scale-125 transition-all'><a href='https://github.com/yong-zhuo/personal-portfolio' target="_blank" className='font-JetBrains text-slate-300 hover:text-secondary hover:scale-125 transition-all text-md'>Source Code</a></p>
        </footer>
    )
}

export default Footer