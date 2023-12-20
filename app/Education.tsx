"use client";

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export default function Education() {
  const [isClosed, setIsClosed] = useState(false);
  const [isTClosed, setIsTClosed] = useState(true);

  const handleClose = () => {
    setIsClosed(true);
  };

  const handleTClose = () => {
    setIsTClosed(false);
  };

  const handleTOpen = () => {
    setIsTClosed(true);
  };

  return (
    <>
      <section id="education" className="my-12 lg:py-12">
        <div className="text-2xl lg:text-4xl text-center font-mono font-extrabold">
          Education
        </div>
        <div
          className={`w-11/12 lg:w-3/4 mx-auto flex flex-col items-center my-6 text-xs lg:text-lg transition-opacity duration-500 ${
            isClosed ? "opacity-25 pointer-events-none" : "opacity-100"
          }`}
        >
          {/* Each card */}
          <div className="w-full h-4 lg:h-8 bg-white flex items-center justify-between rounded-t-lg">
            <div className="group flex items-center">
              <div className="mx-1 lg:mx-2 w-2 lg:w-4 h-2 lg:h-4 rounded-full bg-red-500 text-black">
                <button
                  onClick={handleClose}
                  className="hidden w-full h-full group-hover:flex items-center justify-center font-extrabold p-1"
                >
                  <ImCross />
                </button>
              </div>
              <div className="mr-1 lg:mr-2 w-2 lg:w-4 h-2 lg:h-4 rounded-full bg-yellow-500 text-black">
                <button
                  onClick={handleTClose}
                  className="w-full h-full hidden group-hover:flex items-center justify-center font-extrabold p-1"
                >
                  <FaMinus />
                </button>
              </div>
              <div className="w-2 lg:w-4 h-2 lg:h-4 rounded-full bg-green-500 text-black">
                <button
                  onClick={handleTOpen}
                  className="w-full h-full hidden group-hover:flex items-center justify-center font-extrabold p-1"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
            <div className="-translate-x-4 lg:-translate-x-16 text-black flex items-center">
              <div className="h-4 w-4 mr-1">
                <img src="https://clipartflare.com/images/fo3557f6d3-folder-icon-folder-icon-aqua-azure-turquoise-clipart-folder-icon-clipart.png" />
              </div>
              <div className="font-mono font-bold">Vwake</div>
            </div>
            <div></div>
          </div>
          {isTClosed && (
            <div className="w-full font-mono flex flex-col p-1 bg-slate-900 rounded-b-lg pb-16 text-xs lg:text-sm">
              <div>Last login: Fri Jun 4 14:15:10 on ttys001</div>
              <div>Vwake-MacBook-Pro:~ Vwake$ python3</div>
              <div>
                Python 3.12.0 (tags/v3.12.0:0fb18b0, Oct 2 2023, 13:03:39)
              </div>
              <div>[GCC 4.2.1 (Apple Inc. build 5666) (dot 3)] on darwin</div>
              <div>
                Type "help", "copyright", "credits" or "license" for more
                information.
              </div>
              <div>{">>>"}</div>
              <div>{">>>"}</div>
              <div>{">>> def before():"}</div>
              <div className="">
                ...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;anythingRemember = False
              </div>
              <div className="">
                ...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;school = "Ramadevi Public
                School, Hyderabad"
              </div>
              <div className="">
                ...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;till = 2014
              </div>
              <div className="">
                ...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "JNVST-Pass"
              </div>
              <div className="">...</div>
              <div>{">>> def tenth():"}</div>
              <div className="">
                ...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hostel = True
              </div>
              <div className="">
                ...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;enjoyment = float{"('"}inf
                {"')"}
              </div>
              <div className="">
                ...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;school = "Jawahar Navodaya
                Vidyalaya, Gachibowli"
              </div>
              <div className="">
                ...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;from = 2014
              </div>
              <div className="">...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to = 2019</div>
              <div className="">
                ...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return {'"home"'}
              </div>
              <div className="">...</div>
              <div>{">>> def twelth():"}</div>
              <div className="">
                ...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iitCoaching = True
              </div>
              <div className="">
                ...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;enjoyment = (-1) * float{"('"}
                inf{"')"}
              </div>
              <div className="">
                ...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;school = "Gyanavapi Junior
                College, Hyderabad"
              </div>
              <div className="">
                ...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;from = 2019
              </div>
              <div className="">...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to = 2021</div>
              <div className="">
                ...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 1721
              </div>
              <div className="">...</div>
              <div>{">>> def iit():"}</div>
              <div className="">
                ...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;place = "Hyderabad"
              </div>
              <div className="">
                ...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;studyingThere = True
              </div>
              <div className="">
                ...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 2025
              </div>
              <div className="">...</div>
              <div>{'>>> print("Thank you")'}</div>
              <div>{"Thank you"}</div>
              <div>{">>>"}</div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
