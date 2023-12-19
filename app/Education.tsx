export default function Education() {
  return (
    <>
      <section id="education" className="my-12 py-12">
        <div className="text-2xl lg:text-4xl text-center font-mono font-extrabold">
          Education
        </div>
        <div className="w-10/12 mx-auto relative py-6">
          <div className="border-l-2">
            <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-white text-black rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
              <div className="w-5 h-5 bg-gray-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
              <div className="w-10 h-1 bg-gray-300 absolute -left-10 z-0"></div>
              <div className="flex-auto">
                <h1 className="uppercase">2009-2014 High School</h1>
                <h1 className="text-xl font-bold">
                  Ramadevi Public School, Hyderabad
                </h1>
                <h3>ICSE Board</h3>
              </div>
            </div>
            <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-white text-black rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
              <div className="w-5 h-5 bg-gray-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
              <div className="w-10 h-1 bg-gray-300 absolute -left-10 z-0"></div>
              <div className="flex-auto">
                <h1 className="uppercase">2014-2019 Secondary School</h1>
                <h1 className="text-xl font-bold">
                  Jawahar Navodaya Vidyalaya, Gachibowli
                </h1>
                <h3>Hostel Life</h3>
              </div>
            </div>

            <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-white text-black rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
              <div className="w-5 h-5 bg-gray-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
              <div className="w-10 h-1 bg-gray-300 absolute -left-10 z-0"></div>
              <div className="flex-auto">
                <h1 className="uppercase">2019-2021 Senior Secondary School</h1>
                <h1 className="text-xl font-bold">
                  Gyanavapi Junior College, Hyderabad
                </h1>
                <h3>IIT Coaching</h3>
              </div>
            </div>

            <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-white text-black rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
              <div className="w-5 h-5 bg-gray-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
              <div className="w-10 h-1 bg-gray-300 absolute -left-10 z-0"></div>
              <div className="flex-auto">
                <h1 className="uppercase">2021-2025 Graduation</h1>
                <h1 className="text-xl font-bold">
                  Indian Institute of Technology, Hyderabad
                </h1>
                <h3>Computer Science and Engineering</h3>
              </div>
            </div>

            {/* Add more cards as needed */}
          </div>
        </div>
      </section>
    </>
  );
}
