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
      <main className="flex min-h-screen flex-col overflow-x-hidden bg-base-100">
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
