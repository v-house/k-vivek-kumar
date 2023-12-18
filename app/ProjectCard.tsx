import { FaStar } from "react-icons/fa";
import { MdOutlineOpenInNew } from "react-icons/md";
import { GoLink } from "react-icons/go";

export default function PCard(props: {
  type: any;
  repo: any;
  title: any;
  softwares: any;
  place: any;
  elink: any;
  rated: any;
  achieved: any;
}) {
  return (
    <div className="w-full md:w-1/3 lg:w-96 bg-white font-mono text-black p-2 m-2 flex flex-col justify-between">
      {/* Head */}
      <div>
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold flex items-center">
            <div className="mr-2 text-yellow-500">
              <FaStar />
            </div>
            {props.type}
          </div>
          <a
            href={props.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg cursor-pointer"
          >
            <div className="flex items-center space-x-2">
              <div>Repo</div>
              <div>
                <MdOutlineOpenInNew />
              </div>
            </div>
          </a>
        </div>

        <div className="h-1 bg-black"></div>
      </div>
      <div className="grow flex flex-col justify-between">
        {/* Title */}
        <div className="my-4 text-xl">{props.title}</div>

        <div className="">
          <div className="">
            <div className="text-sm">{props.softwares}</div>
          </div>

          <div className="mb-1 flex justify-between">
            <div>{props.place}</div>
            <a
              href={props.elink}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <div className="flex items-center space-x-2">
                <div>View</div>
                <div>
                  <GoLink />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="h-1 bg-black"></div>
        <div className="flex justify-between items-center">
          <div className="">Rating</div>
          <div className="relative w-1/3 h-2 bg-gray-300 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-yellow-500"
              style={{ width: `${props.rated}%` }}
            ></div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="">Completeness</div>
          <div className="relative w-1/3 h-2 bg-gray-300 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-green-500"
              style={{ width: `${props.achieved}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
