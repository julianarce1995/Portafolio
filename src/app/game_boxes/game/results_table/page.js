"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { hideSpinner, showSpinner } from "@/store/slices/loaderSlice";
import { useDispatch } from "react-redux";

export default function page() {
  const [topScores, setTopScores] = useState();
  const dispatch = useDispatch();
  function handleFinalTest() {
    dispatch(showSpinner());
    axios
      .get("/api/players")
      .then((response) => {
        // Cuando se recibe la respuesta exitosa, actualizar el estado
        setTopScores(response.data);
        dispatch(hideSpinner());
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error("Error al obtener los puntajes:", error);
        dispatch(hideSpinner());
      });
  }

  useEffect(() => {
    handleFinalTest();
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {topScores ? (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Position
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Score
                </th>
              </tr>
            </thead>
            <tbody>
              {topScores?.map((item, index) => (
                <tr
                  key={item.name}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.name}
                  </th>
                  <td className="px-6 py-4">{item.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
