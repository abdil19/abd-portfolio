import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Static Gradient Background */}
      <div className="fixed inset-0 gradient-bg -z-20" />

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 grid-pattern -z-10" />

      {/* Radial Gradient Overlay */}
      <div className="fixed inset-0 radial-gradient -z-10" />

      {/* Content */}
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
