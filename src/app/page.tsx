import Terminal from "@/components/Terminal";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Terminal />

      <div className="relative content-veil">
        <About />
        <Education />
        <Projects />
        <Stack />
        <Contact />
      </div>
    </main>
  );
}
