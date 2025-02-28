import { FaJava } from "react-icons/fa";
import {
  SiCss3,
  SiCypress,
  SiJavascript,
  SiJest,
  SiJunit5,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandCSharp, TbBrandFirebase, TbBrandUnity } from "react-icons/tb";

export const featuredProjects = [
  {
    id: 1,
    image: "/beanchillin.png",
    gallery: [{ id: 1, image: "/beanchillin.png", desc: 'BeanChillin Home Page' },
      { id: 2, image: "/beanchillinlogin.png", desc: 'BeanChillin Login Page' },
      { id: 3, image: "/beanchillinposter.png", desc: 'BeanChillin Poster' }
    ],
    name: "BeanChillin",
    year: "2024",
    for: "NUS Orbital 2024 (Artemis)",
    expandedDescription: "BeanChillin is a web-based forum app designed ",
    description:
      "A web-based forum for university students to create, join, and engage in tailored group discussions. Achieved Artemis level (Top 4%) in NUS Orbital 2024.",
    techStack: [
      {
        id: 1,
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        id: 3,
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        id: 4,
        name: "Shadcn/ui",
        icon: SiShadcnui,
      },
      {
        id: 5,
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
      {
        id: 6,
        name: "Prisma",
        icon: SiPrisma,
      },
      {
        id: 2,
        name: "Supabase",
        icon: SiSupabase,
      },
      {
        id: 7,
        name: "Typescript",
        icon: SiTypescript,
      },
      {
        id: 8,
        name: "Jest",
        icon: SiJest,
      },
      {
        id: 9,
        name: "Cypress",
        icon: SiCypress,
      },
    ],
    github: "https://github.com/yong-zhuo/BeanChillin",
    link: { desc: "View Live Website", url: "https://bean-chillin.vercel.app" },
  },
  {
    id: 2,
    image: "/mediexp.jpg",
    gallery: [{id: 1, image:"/mediexp.jpg", desc:'MRI Model in MediExp'}],
    name: "MediExp",
    year: "2024",
    for: "DSTA BrainHack XRperience 2024",
    description:
      "A 3D VR simulator that simulates various medical procedures for players to understand & experience. Users can experience a simulation for procedures such as MRI, hearing test etc. Won Honorable Mention in DSTA BrainHack XRperience 2024.",
    techStack: [
      {
        id: 1,
        name: "Unity",
        icon: TbBrandUnity,
      },
      {
        id: 2,
        name: "C#",
        icon: TbBrandCSharp,
      },
    ],
    github: "https://github.com/yong-zhuo/MediEXP",
    link: {
      desc: "View Devpost Entry",
      url: "https://devpost.com/software/mediexp",
    },
  },
];

export const otherProjects = [
  {
    id: 1,
    image: "/minimart.png",
    name: "Minimart@MWH",
    gallery: [{id:1, image:"/minimart.png", desc:'User Home Page'},
      {id:2, image:'/minimartadmin.png', desc:'Admin Dashboard Page'}
    ],
    year: "2025",
    for: "Hack 4 Good 2025",
    description:
      "A digital minimart designed for the residents of the Muhammadiyah Welfare Home (MWH) to request items through a token economy system. It also features an admin dashboard for the staff to manage the products and orders.",
    techStack: [
      {
        id: 1,
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        id: 3,
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        id: 4,
        name: "Shadcn/ui",
        icon: SiShadcnui,
      },
      {
        id: 5,
        name: "Javascript",
        icon: SiJavascript,
      },
      {
        id: 6,
        name: "Firebase",
        icon: TbBrandFirebase,
      },
    ],
    github: "https://github.com/yong-zhuo/hack4good2025",
    link: { desc: "View Live Website", url: "https://minimartmwh.vercel.app/" },
  },
  {
    id: 2,
    image: "/medibase3.png",
    gallery: [{id:1, image:"/medibase3.png", desc:'Medibase3 App'}],
    name: "Medibase3",
    year: "2024",
    for: "CS2103T Software Engineering",
    description:
      "A desktop application designed for doctors to manage patient contact details, appointments, medical conditions, allergies, and more.",
    techStack: [
      {
        id: 1,
        name: "Java",
        icon: FaJava,
      },
      {
        id: 2,
        name: "JUnit5",
        icon: SiJunit5,
      },
    ],
    github: "https://github.com/AY2425S1-CS2103T-F12-3/tp",
    link: {
      desc: "View User Guide",
      url: "https://ay2425s1-cs2103t-f12-3.github.io/tp/",
    },
  },
  {
    id: 3,
    image: "/matchaip.png",
    gallery: [{id:1, image:"/matchaip.png", desc:'Matcha ChatBot App'}],
    name: "Matcha",
    year: "2024",
    for: "CS2103T Software Engineering",
    description:
      "A chatbot created to help users to manage their tasks. It is a CLI app with a GUI interface that allows users to add, delete, mark and view their tasks.",
    techStack: [
      {
        id: 1,
        name: "Java",
        icon: FaJava,
      },
      {
        id: 2,
        name: "JUnit5",
        icon: SiJunit5,
      },
    ],
    github: "https://github.com/yong-zhuo/ip",
    link: { desc: "View User Guide", url: "https://yong-zhuo.github.io/ip/" },
  },
  {
    id: 4,
    image: "/saveyourgrades.jpg",
    gallery: [{ id: 1, image: "/saveyourgrades.jpg", desc:'Game Preview' }],
    name: "SaveYourGrades",
    year: "2024",
    for: "NUS Hack&Roll 2024",
    description:
      "A web game inspired by 'The Password Game' where players are tasked to create the most 'secure' password while adhering to various absurd rules",
    techStack: [
      {
        id: 1,
        name: "React",
        icon: SiReact,
      },
      {
        id: 2,
        name: "Javascript",
        icon: SiJavascript,
      },
      {
        id: 3,
        name: "CSS",
        icon: SiCss3,
      },
    ],
    github: "https://github.com/RaphaelFong/TeamMatchaTea",
    link: {
      desc: "View Devpost Entry",
      url: "https://devpost.com/software/save-your-grades",
    },
  },
  {
    id: 5,
    image: "/ecoadventures.png",
    name: "EcoAdventures",
    gallery: [
      { id: 1, image: "/ecoadventures.png", desc:'Time Trial Mode Screen'},
      { id: 2, image: "/ecoadventures2.png", desc:'Title Screen'},
    ],
    year: "2023",
    for: "DSTA BrainHack XRperience 2023",
    description:
      "A 3D VR game that aims to educate youths on the importance of recycling and how each type of litter can be repurposed into something useful. Won 2nd Runner Up for DSTA BrainHack XRperience 2023.",
    techStack: [
      {
        id: 1,
        name: "Unity",
        icon: TbBrandUnity,
      },
      {
        id: 2,
        name: "C#",
        icon: TbBrandCSharp,
      },
    ],
    link: {
      desc: "View Pitch Deck",
      url: "https://docs.google.com/presentation/d/1w3SqOBXOTWzpzigD0Z-5mIbpApmpM0jM5rtQTbkgJkM/edit?usp=sharing",
    },
  },
];
