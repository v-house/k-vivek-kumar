export default function Facts(props: { emoji: any; fact: any; des: any }) {
  return (
    <>
      <div className="group cursor-pointer w-32 lg:w-48 m-2 p-2 lg:m-4 lg:p-4 rounded-xl font-mono font-extrabold flex flex-col justify-between">
        <div className="group flex flex-col my-2">
          <div className="mx-auto bg-slate-600 bg-opacity-50 p-2 rounded-lg">
            <img
              src={props.emoji}
              alt={props.fact}
              className="h-20 group-hover:scale-105 transition-all duration-300"
            />
          </div>
          <div className="my-4 text-center">{props.fact}</div>
        </div>
        <div className="group">
          <div className="flex justify-center">
            <div className="h-1 bg-gray-200 w-1/5 mr-2 rounded-full group-hover:w-0 group-hover:mr-0 transition-all duration-300"></div>
            <div className="h-1 bg-gray-200 w-1/3 mr-2 rounded-full group-hover:w-[65%] group-hover:mr-0 transition-all duration-300"></div>
            <div className="h-1 bg-gray-200 w-1/5 rounded-full group-hover:w-0 transition-all duration-300"></div>
          </div>
          <div className="text-xs font-bold mt-2 px-2 py-1 bg-slate-600 flex">
            <div className="mr-2">$</div>
            {props.des}
          </div>
        </div>
      </div>
    </>
  );
}
