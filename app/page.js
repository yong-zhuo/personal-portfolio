import GlowingCursor from "../components/GlowingCursor";
import { Meteors } from "../components/Meteors";
import Navbar from "../components/navigation/Navbar";
import FeaturedProjects from "../components/section/FeaturedProjects";
import Hero from "../components/section/Hero";
import Skills from "../components/skills/Skills";


export default function Home() {
  return (
    <>
    
      <GlowingCursor />
      <main className="flex min-h-screen flex-col bg-base-100">
        <Navbar />
        <Hero />
        <Skills />
        <FeaturedProjects />
      </main>
    </>
  );
}
