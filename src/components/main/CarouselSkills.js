import React, { useEffect, useState } from "react";

export default function CarouselSkills() {
  const [startImg, setStartImg] = useState(0);
  const [fade, setFade] = useState(true);
  const [endImg, setEndImg] = useState(5);
  const [resultsSlice, setResultsSlice] = useState([]);
  const imagesSkills = [
    "html",
    "css",
    "javascript",
    "typescript",
    "python",
    "vue",
    "django",
    "react",
    "next",
    "nuxt",
    "docker",
    "visual_studio",
    "git",
    "postman",
    "jira",
    "bootstrap",
    "tailwind",
    "sass",
    "mui",
    "font_awesome",
    "redux",
    "sql",
    "mongo",
    "node",
    "jquery",
  ];
  function prevSection() {
    setFade(true);
    if (startImg !== 0) {
      setStartImg((prevCount) => prevCount - 5);
      setEndImg((prevCount) => prevCount - 5);
    } else {
      setStartImg(imagesSkills.length - 5);
      setEndImg(imagesSkills.length);
    }
  }

  function nextSection() {
    setFade(true);
    if (imagesSkills.length > endImg) {
      setStartImg((prevCount) => prevCount + 5);
      setEndImg((prevCount) => prevCount + 5);
    } else {
      setStartImg(0);
      setEndImg(5);
    }
  }

  function trigger() {
    setTimeout(() => {
      setResultsSlice(imagesSkills.slice(startImg, endImg));
      setFade(!fade);
    }, 600);
  }

  useEffect(() => {
    trigger();
  }, [endImg]);

  return (
    <div
      id="carouselSkills"
      className="w-full bg-teal-500 text-slate-50 p-4 shadow-[rgba(0,_0,_0,_0.24)_10px_10px_25px]"
    >
      <h2 className="text-center text-4xl font-bold">Skills</h2>
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={prevSection}
          className="flex items-center justify-center h-full px-4"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 6 10">
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
          className={`w-full transition-transform ease-in duration-500 ${
            fade ? "scale-50 -translate-y-0" : ""
          } grid grid-cols-1 place-items-center md:flex md:flex-row mt-5 items-center justify-between overflow-hidden rounded-lg`}
        >
          {resultsSlice.map((item) => (
            <div
              className="transition-transform group mx-6 w-28 sm:col-span-2 duration-500 ease-in hover:-translate-y-0 hover:scale-110 p-2"
              key={item}
            >
              <img
                className="w-28 h-28"
                src={"skills/" + item + ".svg"}
                alt="julian-arce-image"
              />
              <h3 className="text-center font-bold text-md my-4 capitalize">
                {item}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-white rounded-full"></span>
              </h3>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={nextSection}
          className="flex items-center justify-center h-full px-4 focus:outline-none"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              fill="none"
              viewBox="0 0 6 10"
            >
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
  );
}
