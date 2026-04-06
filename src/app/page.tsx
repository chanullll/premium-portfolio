import Hero from "@/components/Hero";
import VelocityMarquee from "@/components/VelocityMarquee"; // <- Aluthen import kala
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact"; 

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
      {/* 1. Hero Section eka (Oyage Shape animation eka meke thiyenawa) */}
      <Hero />

      {/* 2. Aluth Scroll Velocity Marquee eka (Hero ekayi About ekayi madin) */}
      <VelocityMarquee />

      {/* 3. Bento Grid About Section eka */}
      <About />

      {/* 4. Sticky Projects Section eka */}
      <Projects />

      {/* 5. Apige supiri Contact/Footer Section eka */}
      <Contact />
      
    </main>
  );
}