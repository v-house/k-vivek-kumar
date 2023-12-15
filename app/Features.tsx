import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";

export default function Features() {
  return (
    <>
      <section id="social" className="my-12">
        <div className="text-2xl lg:text-4xl text-center font-mono font-extrabold">
          Social Media
        </div>
        <div className="flex flex-wrap justify-evenly items-center text-4xl mt-6 space-x-4">
          <FaLinkedin />
          <FaInstagram />
          <FaGithub />
          <FaFacebook />
          <SiCodeforces />
        </div>
      </section>
    </>
  );
}
