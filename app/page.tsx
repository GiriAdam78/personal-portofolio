import AboutSection from "@/components/home/About";
import ExperienceSection from "@/components/home/Experience";
import Hero from "@/components/home/Hero";
import ProjectSection from "@/components/home/Project";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      
    </div>
  );
}
