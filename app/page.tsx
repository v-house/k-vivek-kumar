import Education from "./Education";
import Features from "./Features";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";

export default function Home() {
  return (
    <>
      <div className="bg-black overflow-x-hidden">
        <Navbar />
        <Hero />
        <Education />
        <Features />
        <Projects />
      </div>
    </>
  );
}
