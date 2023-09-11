"use client";

import React from "react";
import Link from "next/link";

export default function CharactersSection({ results, positionStr }) {
  return (
    <div className="md:w-5/6 sm:w-3/6 p-2 overflow-hidden">
      <div
        className={`flex md:flex-row flex-col flex-nowrap w-full min-h-full transition-transform duration-1000 ${positionStr}`}
      >
        {results.length > 0 ? (
          results.map((item) => (
            <div
              key={item.id}
              className="flex flex-col flex-nowrap 2xl:p-8  my-2 p-2 min-w-[20%] sm:min-h-[20%] items-center transition-transform group duration-500 ease-in hover:-translate-y-0 hover:scale-110"
            >
              <Link href={`/harry_potter/show/${item.id}`}>
                <div className="w-full h-auto mb-4">
                  {item.image ? (
                    <img
                      className="w-full h-60 rounded-t-lg"
                      src={item.image}
                    ></img>
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
                </div>
              </Link>
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
