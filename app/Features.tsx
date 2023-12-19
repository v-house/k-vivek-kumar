import {
  FaBehance,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { SiCodeforces } from "react-icons/si";

export default function Features() {
  return (
    <>
      <section id="social" className="my-12 py-12">
        <div className="text-2xl lg:text-4xl text-center font-mono font-extrabold">
          Social
        </div>
        <div className="flex flex-wrap justify-evenly items-center text-4xl mt-6 mx-6 space-x-4">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 cursor-pointer hover:border-b-2 hover:border-blue-500 hover:pt-0 hover:pb-2 hover:text-blue-500 transition-all duration-400"
          >
            <FaLinkedin />
          </a>
          <a
            className="p-2 cursor-pointer hover:border-b-2 hover:border-pink-600 hover:pt-0 hover:pb-2 hover:text-pink-600 transition-all duration-400"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            className="p-2 cursor-pointer hover:border-b-2 hover:border-white hover:pt-0 hover:pb-2 hover:text-white transition-all duration-400"
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="p-2 cursor-pointer hover:border-b-2 hover:border-blue-600 hover:pt-0 hover:pb-2 hover:text-blue-600 transition-all duration-400"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            className="p-2 cursor-pointer hover:border-b-2 hover:border-blue-100 hover:pt-0 hover:pb-2 hover:text-blue-100 transition-all duration-400"
            href="https://codeforces.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiMail />
          </a>
          <a
            className="p-2 cursor-pointer hover:border-b-2 hover:border-blue-400 hover:pt-0 hover:pb-2 hover:text-red-400 transition-all duration-400"
            href="https://codeforces.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiCodeforces />
          </a>
          <a
            className="p-2 cursor-pointer hover:border-b-2 hover:border-blue-800 hover:pt-0 hover:pb-2 hover:text-blue-800 transition-all duration-400"
            href="https://codeforces.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBehance />
          </a>
        </div>
      </section>
    </>
  );
}
