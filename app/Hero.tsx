import Avatar from "./Avatar";
import ButtonArray from "./ButtonArray";
import Github from "./GitHub";
import Instagram from "./Instagram";

export default function Hero() {
  return (
    <>
      <div className="grid sm:grid-rows-8 lg:grid-cols-8">
        <div className="row-span-2 lg:col-span-2 lg:row-span-4">
          <div className="flex flex-wrap lg:flex-col justify-center items-center">
            <ButtonArray />
          </div>
        </div>
        <div className="row-span-6 lg:col-span-6 lg:row-span-4">
          <div className="w-full flex justify-between items-center flex-wrap">
            <div className="text-white w-48 mx-auto text-center lg:text-left">
              Welcome Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur nobis hic consequatur reprehenderit voluptates error
              rem! Explicabo nulla asperiores voluptatum. Deleniti, ducimus
              cupiditate dignissimos esse quasi corrupti delectus! Possimus,
              deleniti!
            </div>
            <div className="flex-grow flex flex-col justify-center items-center">
              <div className="hidden lg:block absolute -translate-x-48 z-10 -translate-y-40">
                <Instagram />
              </div>
              <div className="m-4">
                <img
                  src="https://media.licdn.com/dms/image/D5603AQGbZ7Itnw3MzQ/profile-displayphoto-shrink_400_400/0/1694713181862?e=1707955200&v=beta&t=QQYulLUm2suw74IRMH9cNY0s3IFPOTl7afsCBKrTMgQ"
                  alt="Vwake"
                  className=""
                />
              </div>
              <div>Its ME, 😎!!</div>
              <div className="hidden lg:block absolute translate-x-24 translate-y-20">
                <Github />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
