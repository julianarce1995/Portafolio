"use client";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectCasasInfo } from "@/store/selector/casasSelector";
import { useDispatch } from "react-redux";

import { casasApi } from "@/store/slices/casasSlice";
import { useEffect, useState } from "react";

export default function Home() {
  const dispatch = useAppDispatch();
  const info = useAppSelector(selectCasasInfo);

  async function name() {
    await dispatch(casasApi()).then().catch();
  }

  useEffect(() => {
    console.log(info);
  }, [info]);

  return (
    <div className="h-screen flex items-center flex-col">
      <form className="w-1/2 max-w-sm">
        <div className="flex items-center border-b border-teal-500 py-3">
          <button
            onClick={name}
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
          >
            Buscar
          </button>
        </div>
      </form>

      <div className="w-1/2 flex overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th className="px-6 py-3">name</th>
              <th className="px-6 py-3">specie</th>
            </tr>
          </thead>
          <tbody>
            {info?.map((item) => (
              <tr className="bg-white border-b">
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {item.name}
                </th>
                <td className="px-6 py-4">{item.species}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
