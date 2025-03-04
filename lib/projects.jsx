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
    gallery: [
      { id: 1, image: "/beanchillin.png", desc: "Home Page" },
      { id: 2, image: "/beanchillinchat.png", desc: "Group Page" },
      { id: 3, image: "/beanchillinvideo.png", desc: "Video Chat Page" },
      { id: 4, image: "/beanchillinwireframe.png", desc: "BeanChillin Wireframes" },
    ],
    name: "BeanChillin",
    year: "2024",
    for: "NUS Orbital 2024 (Artemis)",
    detailedDesc: "BeanChillin is a web-based forum designed to cater towards university students who are looking for a unified space to create and join different groups tailored to their specific needs and engage in meaningful discussions. It has a multitude of features such as Group and Post functionalities, Friend System, Direct Messaging, Video Chat Rooms and more. \n\nThis website was created in 3 months for NUS Orbital Program in 2024 where I was tasked to work with another student to create any application we want while self-learning modern web technologies and adopting relevant software engineering methodologies in our development process. Our project was eventually ranked among the top 4% in the program in terms of our product’s functionality as well as our documentation.\n\nThe motivation behind creating BeanChillin was to alleviate the hassle of joining multiple platforms by providing a centralised platform for users to easily navigate between different groups for different purposes. Additionally, it also served as an opportunity to deepen my understanding of full-stack web development and the processes behind creating modern applications like Reddit, making this both a meaningful project and a valuable learning experience.",
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
    gallery: [{ id: 1, image: "/mediexp.jpg", desc: "MRI Model in MediExp" },
      {id:2, image: "/mediexpeye.png", desc: "Ishihara Eye Test in MediExp"}
    ],
    name: "MediExp",
    year: "2024",
    for: "DSTA BrainHack XRperience 2024",
    detailedDesc:'MediEXP is a 3D VR medical simulator for users to simulate different medical procedures for users to understand & experience. It features simulation for procedures such as MRi and Ishihara Eye Test. \n\nIn this hackathon. my team of 4 and I were task to improve productivity in the healthcare industry using VR technologies. After some research, we decided to focus our product on helping those who experience procedural anxiety and children with no prior experience for any medical procedure. Cancellations and refusals due to fear can waste medical resources, so our VR simulation helps patients familiarize themselves beforehand, improving cooperation and efficiency in healthcare settings',
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
    gallery: [
      { id: 1, image: "/minimart.png", desc: "User Home Page" },
      { id: 2, image: "/minimartadmin.png", desc: "Admin Dashboard Page" },
    ],
    year: "2025",
    detailedDesc:
      "Minimart@MWH is a digital minimart designed to allow residents of Muhammadiyah Welfare Home (MWH) to view and request for items through a token economy system by using ‘vouchers’ which can be earn for doing good deeds. \n\nMinimart@MWH also features an admin management page for admins to manage product inventory and approve voucher requests. This website was created in 5 days for NUS Hack 4 Good 2025 hackathon where me, and two other peers, were tasked to digitalised the existing minimart in MWH. We found this idea both novel and meaningful, as it could teach residents valuable skills like financial management, foster positive behavior, and improve discipline, all while motivating them to learn and grow",
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
    gallery: [{ id: 1, image: "/medibase3.png", desc: "Medibase3 App" }],
    name: "Medibase3",
    year: "2024",
    detailedDesc:'MediBase3 is a desktop application designed for doctors to manage patient contact details, appointments, medical conditions, allergies, and more.  It combines both CLI and GUI functionality for efficiency and ease of use. \n\nThis project was done for an introduction to software engineering module where I worked on a brownfield project with a group of 5 while adhering to relevant software engineering practices. It was my first time working with an existing codebase and this experience taught me how to navigate legacy code, implement new features without breaking existing functionality, and collaborate effectively using version control and software design principles.',
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
    gallery: [{ id: 1, image: "/matchaip.png", desc: "Matcha ChatBot App" }],
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
    gallery: [{ id: 1, image: "/saveyourgrades.jpg", desc: "Game Preview" }],
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
      { id: 1, image: "/ecoadventures.png", desc: "Time Trial Mode Screen" },
      { id: 2, image: "/ecoadventures2.png", desc: "Title Screen" },
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
