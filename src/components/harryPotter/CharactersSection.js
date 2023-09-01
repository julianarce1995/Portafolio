"use client";

import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CharactersSection({ results, startPage, endPage }) {
  const [resultsSlice, setResultsSlice] = useState([]);

  useEffect(() => {
    setResultsSlice(results.slice(startPage, endPage));
  }, [results, endPage]);

  return (
    <div className="flex flex-col w-full h-[75%] items-center">
      {resultsSlice.length > 0 ? (
        resultsSlice.map((item) => (
          <div
            key={item.id}
            className="flex max-w-sm mb-8 lg:w-2/4 rounded-xl shadow-2xl shadow-gray-600"
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
              <span className="text-center capitalize text-xl font-bold text-gray-700">
                {item.name}
              </span>
              <div className="flex flex-col mx-4 my-2">
                <h5 className="mb-1 text-2xl me-2 text-sm font-bold tracking-tight text-gray-900">
                  House:
                </h5>
                <span className="mb-1 capitalize text-sm text-gray-700">
                  {item.house ? item.house : "None"}
                </span>
                <h5 className="mb-1 text-2xl me-2 text-sm font-bold tracking-tight text-gray-900">
                  Actor:
                </h5>
                <span className="capitalize text-sm text-gray-700">
                  {item.actor ? item.actor : "None"}
                </span>
              </div>
              <div className="w-full flex justify-center mb-3">
                <Link
                  href={`/harry_potter/show/${item.id}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-None focus:ring-gray-300"
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
