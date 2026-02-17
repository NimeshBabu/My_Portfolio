import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import BentoProjects from "@/components/Projects";
import ContactSection from "@/components/ContactSection";
import {Process} from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <BentoProjects />
      <AboutMe />
      <ContactSection />
      <Process />
    </div>
  );
}
