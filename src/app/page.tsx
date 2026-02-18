import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import BentoProjects from "@/components/Projects";
import ContactSection from "@/components/ContactSection";
import ServicesSection from "@/components/Services";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className="pt-24">
        <Hero />
        <BentoProjects />
        <AboutMe />
        <ServicesSection />
        <ContactSection />
      </main>
    </div>
  );
}
