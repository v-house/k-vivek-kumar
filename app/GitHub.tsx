export default function Github() {
  return (
    <>
      <button className="flex bg-slate-800 py-4 px-6 rounded-xl border-spacing-2 border-white">
        <div className="flex -space-x-2 overflow-hidden p-1 mr-2 items-center">
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src="https://th.bing.com/th/id/OIP.2ZHi-aVKHCM_cXaaTpMJzAAAAA?rs=1&pid=ImgDetMain"
            alt=""
          />
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src="https://avatars.githubusercontent.com/u/102508246?v=4"
            alt=""
          />
        </div>
        <div className="flex flex-col items-start">
          <div className="text-md text-extrabold">K-Vivek-Kumar</div>
          <div className="text-xs">Github Profile</div>
        </div>
      </button>
    </>
  );
}
