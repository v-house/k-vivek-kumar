import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <div className="bg-black overflow-x-hidden">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
