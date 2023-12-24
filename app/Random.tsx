import Facts from "./Facts";

export default function Random() {
  return (
    <>
      <section
        id="random"
        className="my-12 py-12 bg-gradient-to-b from-black via-slate-900 to-black"
      >
        <div className="text-2xl lg:text-4xl text-center font-mono font-extrabold">
          Skills
        </div>
        <div className="">
          <div className="flex flex-wrap justify-evenly">
            <Facts
              des={"Know pretty well!"}
              emoji={
                "https://t.kfs.io/upload_images/36340/react-logo-1000-transparent_original.png"
              }
              fact={"ReactJS"}
            />
            <Facts
              des={"Know pretty well!"}
              emoji={
                "https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png"
              }
              fact={"Nextjs"}
            />
            <Facts
              des={"Proficient"}
              emoji={
                "https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png"
              }
              fact={"JavaScript"}
            />
            <Facts
              des={"Simple"}
              emoji={"https://clipartcraft.com/images/html5-logo-circle-3.png"}
              fact={"HTML"}
            />
          </div>
        </div>
      </section>
    </>
  );
}
