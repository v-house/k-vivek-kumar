export default function Facts(props: { emoji: any; fact: any; des: any }) {
  return (
    <>
      <div className="w-32 lg:w-48 m-4 p-4 rounded-xl font-mono font-extrabold flex flex-col justify-between">
        <div className="flex flex-col my-2">
          <div className="text-4xl">{props.emoji}</div>
          <div className="my-4">{props.fact}</div>
        </div>
        <div className="h-1 bg-gray-200 w-1/3"></div>
        <div className="text-xs font-bold mt-2 px-2 py-1 bg-slate-600 flex">
          <div className="mr-2">$</div>
          {props.des}
        </div>
      </div>
    </>
  );
}
