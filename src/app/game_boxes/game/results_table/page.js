"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function page() {
  const [topScores, setTopScores] = useState();
  function handleFinalTest() {
    axios
      .get("/api/players")
      .then((response) => {
        // Cuando se recibe la respuesta exitosa, actualizar el estado
        setTopScores(response.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error("Error al obtener los puntajes:", error);
      });
  }

  useEffect(() => {
    handleFinalTest();
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
          {topScores?.map((item, index) => (
            <tbody key={item.id}>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">{index + 1}</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.name}
                </th>
                <td className="px-6 py-4">{item.score}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
