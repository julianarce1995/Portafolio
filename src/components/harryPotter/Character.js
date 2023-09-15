import React from "react";
import { selectHarryPotterData } from "../../store/selector/harryPotterSelector";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { harryPotterApi } from "../../store/slices/harryPotterSlice";
import { hideSpinner, showSpinner } from "@/store/slices/loaderSlice";

export default function Character({ id }) {
  const [characterFound, setCharacterFound] = useState([]);
  const data = useSelector(selectHarryPotterData);
  const dispatch = useDispatch();

  async function fetchCharacters() {
    dispatch(showSpinner());
    await dispatch(harryPotterApi())
      .then(() => {
        dispatch(hideSpinner());
      })
      .catch(() => {
        dispatch(hideSpinner());
      });
  }

  useEffect(() => {
    if (data.length < 1) {
      fetchCharacters();
    }

    if (id) {
      setCharacterFound(data.find((item) => item.id === id));
    }
  }, [data]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {characterFound ? (
        <div
          key={characterFound.id}
          className="flex flex-col max-w-xs rounded-3xl shadow-2xl shadow-gray-600"
        >
          <div className="w-full h-full">
            {characterFound.image ? (
              <img
                className="w-80 h-96 rounded-t-3xl"
                src={characterFound.image}
              ></img>
            ) : (
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/HP_-_Harry_Potter_wordmark.svg/1871px-HP_-_Harry_Potter_wordmark.svg.png"></img>
            )}
          </div>
          <div className="flex items-center justify-center w-full border-b-2 rounded-b-3xl border-gray-500 p-8">
            <div className="grid grid-cols-2 capitalize text-sm text-gray-900">
              <span className="mb-4 text-center text-3xl font-bold text-gray-700 capitalize col-span-2">
                {characterFound.name ? characterFound.name : null}
              </span>
              <h5 className="me-2 font-bold">House:</h5>
              <span className="text-gray-700">
                {characterFound.house ? characterFound.house : "None"}
              </span>
              <h5 className="me-2 font-bold">Ancestry:</h5>
              <span className="text-gray-700">
                {characterFound.ancestry ? characterFound.ancestry : "None"}
              </span>
              <h5 className="me-2 font-bold">Eye Color:</h5>
              <span className="text-gray-700">
                {characterFound.eyeColour ? characterFound.eyeColour : "None"}
              </span>
              <h5 className="me-2 font-bold">Actor:</h5>
              <span className="text-gray-700">
                {characterFound.actor ? characterFound.actor : "None"}
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
