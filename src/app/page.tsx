import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import ContactSection from "@/components/ContactSection";
import ServicesSection from "@/components/Services";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className="pt-24">
        <Hero />
        <AboutMe />
        <Projects />
        <ServicesSection />
        <ContactSection />
      </main>
    </div>
  );
}
