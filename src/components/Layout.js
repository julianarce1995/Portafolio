'use client'

import { selectCasasInfo } from "@/store/selector/casasSelector";
import { casasApi } from "@/store/slices/casasSlice";
import { hideSpinner, showSpinner } from "@/store/slices/loaderSlice";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Layout({ children }) {
  const dispatch = useDispatch();
  const info = useSelector(selectCasasInfo);

  async function fetchCharacters() {
    dispatch(showSpinner());
    await dispatch(casasApi())
      .then(() => {
        dispatch(hideSpinner());
      })
      .catch(() => {
        dispatch(hideSpinner());
      });
  }

  return (
    <div className="fixed inset-0 min-h-full">
      <nav className="bg-gray-800 z-40 shadow-2xl shadow-slate-500">
        <div className="flex h-16 items-center justify-between">
          <span className="bg-gray-900 text-white rounded-md ms-6 px-3 py-2 text-sm font-medium">
            API de Harry Potter
          </span>
          <button
            disabled={info.length > 0 ? true : false}
            onClick={fetchCharacters}
            className={info.length > 0 ? "hidden" : "animate-pulse animate-bounce me-6 flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"}
            type="button"
          >
            Conectar
          </button>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}
