import Image from "next/image";

export default function Instagram() {
  return (
    <>
      <button className="flex bg-slate-800 py-4 px-6 rounded-xl">
        <div className="flex flex-col items-end mr-2">
          <div className="text-md text-extrabold">vivek_kumar_be_a_part</div>
          <div className="text-xs">Instagram Profile</div>
        </div>
        <div className="flex -space-x-2 overflow-hidden p-1 items-center">
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src="https://i.pinimg.com/736x/ce/10/4e/ce104e6527a9a9ea6a725b558a56ef9b.jpg"
            alt=""
          />
          <Image
            width={200}
            height={200}
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src="/vivek-insta.jpg"
            alt=""
          />
        </div>
      </button>
    </>
  );
}
