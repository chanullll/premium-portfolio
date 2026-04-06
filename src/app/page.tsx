import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact"; // <- Aluthen import kala

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      {/* 1. Hero Section eka */}
      <Hero />

      {/* 2. Bento Grid About Section eka */}
      <About />

      {/* 3. Sticky Projects Section eka */}
      <Projects />

      {/* 4. Apige supiri Contact/Footer Section eka */}
      <Contact />
      
    </main>
  );
}