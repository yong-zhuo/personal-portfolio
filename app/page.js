import AboutSection from "../components/about/AboutSection";
import Footer from "../components/footer/Footer";
import GlowingCursor from "../components/GlowingCursor";
import Navbar from "../components/navigation/Navbar";
import FeaturedProjects from "../components/section/FeaturedProjects";
import Hero from "../components/section/Hero";
import OtherProjects from "../components/section/OtherProjects";
import Skills from "../components/skills/Skills";


export default function Home() {
  return (
    <>
    
      <GlowingCursor />
      <main className="flex min-h-screen flex-col bg-base-100">
        <Navbar />
        <Hero />
        <AboutSection />
        <Skills />
        <FeaturedProjects />
        <OtherProjects />
        <Footer />
      </main>
    </>
  );
}
