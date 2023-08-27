"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function CharactersSection({ results, startPage, endPage }) {
  const [resultsSlice, setResultsSlice] = useState([]);

  useEffect(() => {
    setResultsSlice(results.slice(startPage, endPage));
  }, [results, endPage]);

  return (
    <div className="flex flex-col items-center w-full h-[75%]">
      {resultsSlice.length > 0 ? (
        resultsSlice.map((item) => (
          <div
            key={item.id}
            className="flex mb-8 max-w-sm bg-white p-0 lg:w-2/4 rounded-xl shadow-2xl shadow-gray-600"
          >
            <div className="w-full h-full">
              {item.image ? (
                <img className="w-44 h-60 rounded-s-lg" src={item.image}></img>
              ) : (
                <img
                  className="w-44 h-60 rounded-s-lg"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/HP_-_Harry_Potter_wordmark.svg/1871px-HP_-_Harry_Potter_wordmark.svg.png"
                ></img>
              )}
            </div>
            <div className="w-full flex flex-col justify-around">
              <span className="text-center capitalize text-xl font-bold text-gray-700 mt-3 me-4">
                {item.name}
              </span>
              <div className="flex flex-col mx-4 my-2">
                <h5 className="mb-1 text-2xl me-2 text-sm font-bold tracking-tight text-gray-900">
                  Casa:
                </h5>
                <span className="mb-1 capitalize text-sm text-gray-700">
                  {item.house ? item.house : "None"}
                </span>
                <h5 className="mb-1 text-2xl me-2 text-sm font-bold tracking-tight text-gray-900">
                  Linaje:
                </h5>
                <span className="capitalize text-sm text-gray-700">
                  {item.ancestry ? item.ancestry : "None"}
                </span>
              </div>
              <div className="w-full flex justify-center mb-3">
                <Link
                  href={`/harry_potter/show/${item.id}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-teal-500 rounded-lg hover:bg-teal-700 focus:ring-4 focus:outline-None focus:ring-teal-300"
                >
                  Read more
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="None"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <span className="text-2xl text-red-700 bg-red-200 py-3 px-6 rounded-lg">
          Not Found
        </span>
      )}
    </div>
  );
}
