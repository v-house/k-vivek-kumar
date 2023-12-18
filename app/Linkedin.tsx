export default function Linkedin() {
  return (
    <>
      <button className="group flex bg-slate-800 py-4 px-6 rounded-xl">
        <div className="flex flex-col items-end mr-2">
          <div className="text-md text-extrabold">K Vivek Kumar</div>
          <div className="text-xs">Linkedin Profile</div>
        </div>
        <div className="flex -space-x-2 overflow-hidden p-1 items-center">
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src="https://th.bing.com/th/id/R.b3eee27c521023c4719243e7912cb3a0?rik=Osm6KmSjlaU9bw&riu=http%3a%2f%2fwww.transparentpng.com%2fthumb%2flinkedin%2flinkedin-basic-round-social-icon-png-5.png&ehk=glgAwEkP7uJC5wyxtzThfB3HV9csrCZh2huguXxX55g%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white group-hover:scale-105 transition-all duration-500"
            src="https://media.licdn.com/dms/image/D5603AQGbZ7Itnw3MzQ/profile-displayphoto-shrink_400_400/0/1694713181862?e=1708560000&v=beta&t=P4aqNnjWoFHozHlz3nSrDTa-CoH-bnR0BRUTjJgibw8"
            alt=""
          />
        </div>
      </button>
    </>
  );
}
