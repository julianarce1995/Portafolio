import React, { useEffect, useState } from "react";

export default function CarouselSkills() {
  const [positionStr, setPositionStr] = useState("-translate-x-[0%]");
  const imagesSkills = [
    "html",
    "css",
    "javascript",
    "typescript",
    "python",
    "next",
    "react",
    "django",
    "nuxt",
    "vue",
    "docker",
    "visual_Studio",
    "jira",
    "git",
    "postman",
    "bootstrap",
    "tailwind",
    "sass",
    "font_Awesome",
    "mui",
    "jquery",
    "node",
    "mongo",
    "sql",
    "redux",
  ];
  function prevSection() {
    if (positionStr === "-translate-x-[100%]") {
      setPositionStr("-translate-x-[0%]");
    } else if (positionStr === "-translate-x-[200%]") {
      setPositionStr("-translate-x-[100%]");
    } else if (positionStr === "-translate-x-[300%]") {
      setPositionStr("-translate-x-[200%]");
    } else if (positionStr === "-translate-x-[400%]") {
      setPositionStr("-translate-x-[300%]");
    }
  }

  function nextSection() {
    if (positionStr === "-translate-x-[0%]") {
      setPositionStr("-translate-x-[100%]");
    } else if (positionStr === "-translate-x-[100%]") {
      setPositionStr("-translate-x-[200%]");
    } else if (positionStr === "-translate-x-[200%]") {
      setPositionStr("-translate-x-[300%]");
    } else if (positionStr === "-translate-x-[300%]") {
      setPositionStr("-translate-x-[400%]");
    }
  }

  return (
    <div className="shadow-xl bg-gradient-to-r to-sky-400 from-emerald-500">
      <h2 className="text-center text-xl md:text-4xl font-bold mt-4 tracking-[0.1rem]">
        Skills
      </h2>
      <div className="w-full text-slate-50 md:p-8">
        <div className="flex w-full items-center">
          <button
            type="button"
            onClick={prevSection}
            className="md:flex hidden"
          >
            <span className="inline-flex items-center justify-center">
              <svg className="w-5" fill="none" viewBox="0 0 6 10">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <div
            className="md:overflow-hidden md:touch-none
           overflow-x-auto touch-pan-x w-full"
          >
            <div className="flex ">
              <div
                className={`flex w-full transition-transform duration-1000 ${positionStr}`}
              >
                {imagesSkills.map((item) => (
                  <div
                    className="flex flex-col p-2 md:min-w-[20%] min-w-[28%] items-center transition-transform group duration-500 ease-in hover:-translate-y-0 hover:scale-110"
                    key={item}
                  >
                    <img
                      className="md:w-28 md:h-28 w-16 h-16"
                      src={"skills/" + item + ".svg"}
                      alt="julian-arce-image"
                    />
                    <h3 className="text-center my-2 md:font-bold md:text-xl text-xs/[4px] capitalize">
                      {item}
                      <span className="block max-w-0 group-hover:max-w-full my-2 transition-all duration-700 h-1 bg-white rounded-full"></span>
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={nextSection}
            className="md:flex hidden"
          >
            <span className="inline-flex items-center justify-center">
              <svg className="w-5" fill="none" viewBox="0 0 6 10">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
