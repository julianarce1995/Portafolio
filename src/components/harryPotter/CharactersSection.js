"use client";

import React from "react";
import Link from "next/link";

export default function CharactersSection({ results, positionStr }) {
  return (
    <div className="md:w-5/6 sm:w-3/6 p-2 overflow-hidden">
      <div
        className={`lg:flex lg:flex-row md:grid md:grid-cols-2 sm:flex-col w-full min-h-full transition-transform duration-1000 ${positionStr}`}
      >
        {results.length > 0 ? (
          results.map((item) => (
            <div
              key={item.id}
              className="flex flex-col 2xl:p-8 text-center my-7 p-4 min-w-[20%] sm:min-h-[20%] items-center"
            >
              <div className="transition-transform group duration-500 ease-in hover:-translate-y-0 hover:scale-110 rounded-xl shadow-lg shadow-gray-600">
                <Link href={`/harry_potter/show/${item.id}`}>
                  <div className="w-full h-auto">
                    {item.image ? (
                      <img
                        className="w-56 h-72 rounded-t-xl"
                        src={item.image}
                      ></img>
                    ) : (
                      <img
                        className="w-44 h-60 rounded-s-xl"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/HP_-_Harry_Potter_wordmark.svg/1871px-HP_-_Harry_Potter_wordmark.svg.png"
                      ></img>
                    )}
                  </div>
                  <div className="w-full flex flex-col justify-around border-b-2 rounded-b-xl border-gray-500 pt-4">
                    <span className="capitalize text-xl font-bold text-gray-700">
                      {item.name}
                    </span>
                    <div className="flex flex-col mx-4 my-2">
                      <span className="mb-1 capitalize text-sm text-gray-700">
                        {item.house ? item.house : "None"}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full flex justify-center">
            <span className="text-2xl text-red-700 bg-red-200 py-3 px-6 rounded-lg">
              Not Found
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
