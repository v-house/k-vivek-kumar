import ButtonArray from "./ButtonArray";
import Github from "./GitHub";
import Instagram from "./Instagram";
import Linkedin from "./Linkedin";

export default function Hero() {
  return (
    <>
      <div className="grid sm:grid-rows-8 lg:grid-cols-8">
        <div className="row-span-2 lg:col-span-2 lg:row-span-4">
          <div className="flex flex-wrap lg:flex-col justify-evenly items-center">
            <ButtonArray />
          </div>
        </div>
        <div className="row-span-6 lg:col-span-6 lg:row-span-4">
          <div className="w-full flex justify-between lg:items-center flex-wrap">
            <div className="text-white mx-auto text-center lg:text-left mt-8 px-4 lg:px-0">
              <p className="text-lg font-extrabold mb-4">
                Hey there! 🌟 Welcome to my digital world!!
              </p>
              <p className="mb-4">
                I&apos;m{"  "}
                <code className="border-white text-lg">{"_"}K Vivek Kumar</code>
                , and this is my playground of skills and creations. Excited for
                potential collaborations - let&apos;s make magic happen!
              </p>
              <p>🚀✨</p>
            </div>
            <div className="flex-grow flex flex-col justify-center items-center">
              <div className="hidden lg:block absolute -translate-x-56 z-10 -translate-y-24">
                <Instagram />
              </div>
              <div className="m-4">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/user/230/98de091733457125.658045d81ce9e.jpg"
                  alt="Vwake"
                  className="rounded-full"
                />
              </div>
              <div className="font-mono">Its ME, 😎!!</div>
              <div className="hidden lg:block absolute translate-x-48 translate-y-12">
                <Linkedin />
              </div>
              <div className="hidden lg:block absolute -translate-x-48 translate-y-24">
                <Github />
              </div>
              <div className="lg:hidden my-2">
                <Linkedin />
              </div>
              <div className="lg:hidden my-2">
                <Github />
              </div>
              <div className="lg:hidden my-2">
                <Instagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
