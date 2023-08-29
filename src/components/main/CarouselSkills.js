import { useEffect, useState } from "react";

export default function CarouselSkills() {
  const [startImg, setStartImg] = useState(0);
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
    if (startImg !== 0) {
      setStartImg((prevCount) => prevCount - 5);
      setEndImg((prevCount) => prevCount - 5);
    }
  }

  function nextSection() {
    if (imagesSkills.length > endImg) {
      setStartImg((prevCount) => prevCount + 5);
      setEndImg((prevCount) => prevCount + 5);
    }
  }

  useEffect(() => {
    setResultsSlice(imagesSkills.slice(startImg, endImg));
  }, [endImg]);

  return (
    <div id="carouselSkills" className="w-full bg-teal-500 p-4 shadow-[rgba(0,_0,_0,_0.24)_10px_10px_25px]">
      <h2 className="text-center text-4xl font-bold">Skills</h2>
      <div className="flex items-center">
        <button
          type="button"
          onClick={prevSection}
          className="flex items-center justify-center h-full px-4"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
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
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <div className="w-full grid grid-cols-1 place-items-center sm:grid sm:grid-cols-2 md:flex md:flex-row mt-5 lg:mt-0 justify-between overflow-hidden rounded-lg">
          {resultsSlice.map((item) => (
            <div className={item === imagesSkills[(endImg-1)] ? "w-62 m-4 sm:col-span-2":"w-62 m-4" } key={item}>
              <img
                className="lg:w-28 lg:h-28 w-36 h-36 my-4"
                src={"skills/"+item+".svg"}
                alt="julian-arce-image"
              />
              <h3 className="text-center text-white my-4 capitalize font-bold text-md">{item}</h3>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={nextSection}
          className="flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
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
      <div className="flex space-x-3 justify-center">
        <button
          type="button"
          onClick={()=> {setStartImg(0),setEndImg(5)}}
          className="w-3 h-3 rounded-full bg-gray-100"
        ></button>
        <button
          type="button"
          onClick={()=> {setStartImg(5),setEndImg(10)}}
          className="w-3 h-3 rounded-full bg-gray-100"
        ></button>
        <button
          type="button"
          onClick={()=> {setStartImg(10),setEndImg(15)}}
          className="w-3 h-3 rounded-full bg-gray-100"
        ></button>
        <button
          type="button"
          onClick={()=> {setStartImg(15),setEndImg(20)}}
          className="w-3 h-3 rounded-full bg-gray-100"
        ></button>
        <button
          type="button"
          onClick={()=> {setStartImg(20),setEndImg(25)}}
          className="w-3 h-3 rounded-full bg-gray-100"
        ></button>
      </div>
    </div>
  );
}
