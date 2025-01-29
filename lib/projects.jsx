import { SiNextdotjs, SiPostgresql, SiPrisma, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandCSharp, TbBrandUnity } from "react-icons/tb";

export const featuredProjects = [
    {
        id: 1,
        image: '/beanchillin.png',
        name: 'BeanChillin',
        year: '2024',
        for: 'NUS Orbital 2024 (Artemis)',
        description: 'A web-based forum designed to cater towards university students who are looking for a unified space to create and join different groups tailored to their specific needs and engage in meaningful discussions. Achieved Artemis level (Top 4%) in NUS Orbital 2024.',
        techStack: [
            {
                id: 1,
                name: "Next.js",
                icon: SiNextdotjs
            },
            {
                id: 2,
                name: "React.js",
                icon: SiReact
            },
            {
                id: 3,
                name: "Tailwind CSS",
                icon: SiTailwindcss
            },
            {
                id: 4,
                name: "PostgreSQL",
                icon: SiPostgresql
            },
            {
                id: 5,
                name: "Prisma",
                icon: SiPrisma
            },
            {
                id: 6,
                name: "Typescript",
                icon: SiTypescript,
            },
        ],
        github: "https://github.com/yong-zhuo/BeanChillin",
        link: "https://beanchillin.vercel.app",
    },
    {
        id: 2,
        image:'/mediexp.jpg',
        name: 'MediExp',
        year: '2024',
        for: 'DSTA BrainHack XRperience 2024',
        description:"A 3D VR simulator that simulates various medical procedures for players to understand & experience. Users can experience a simulation for procedures such as MRI, hearing test etc. Won Honorable Mention in DSTA BrainHack XRperience 2024.",
        techStack: [
            {
                id: 1,
                name: "Unity",
                icon: TbBrandUnity
            },
            {
                id: 2,
                name: "C#",
                icon: TbBrandCSharp
            },
        ],
        github: "https://github.com/yong-zhuo/MediEXP",
        link:"https://devpost.com/software/mediexp"
    }
];

export const otherProjects = [];