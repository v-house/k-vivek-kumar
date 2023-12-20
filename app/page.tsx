import Education from "./Education";
import Features from "./Features";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Random from "./Random";

export default function Home() {
  return (
    <>
      <div className="bg-black overflow-x-hidden">
        <Navbar />
        <Hero />
        <Projects />
        <Features />
        <Random />
        <Education />
      </div>
    </>
  );
}
