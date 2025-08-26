import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Languages from "@/components/sections/Languages";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <div className="px-6 sm:px-8 md:px-10 lg:px-12 max-w-6xl mx-auto space-y-32 sm:space-y-40 md:space-y-48 pb-24">
        <About />
        <Experience />
        <Skills />
        <Education />
        <Languages />
        <Contact />
      </div>
    </div>
  );
}
