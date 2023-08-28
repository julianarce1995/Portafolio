import { selectHarryPotterData } from "../../store/selector/harryPotterSelector";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { useRouter } from 'next/navigation';
import { harryPotterApi } from "../../store/slices/harryPotterSlice";
import { hideSpinner, showSpinner } from "@/store/slices/loaderSlice";
import Link from "next/link";

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
    <div className="flex items-center justify-center min-h-screen bg-white">
      {characterFound ? (
        <div
          key={characterFound.id}
          className="flex flex-col max-w-xs rounded-xl shadow-2xl shadow-gray-600"
        >
          <div className="w-full h-full">
            {characterFound.image ? (
              <img
                className="w-80 h-96 rounded-t-lg"
                src={characterFound.image}
              ></img>
            ) : (
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/HP_-_Harry_Potter_wordmark.svg/1871px-HP_-_Harry_Potter_wordmark.svg.png"></img>
            )}
          </div>
          <div className="w-full">
            <div className="grid grid-cols-2 m-5">
              <span className="text-center capitalize text-3xl font-bold text-gray-700 col-span-2 mb-4">
                {characterFound.name ? characterFound.name : null}
              </span>
              <h5 className="text-2xl me-2 text-sm font-bold tracking-tight text-gray-900">
                House:
              </h5>
              <span className="capitalize text-sm text-gray-700">
                {characterFound.house ? characterFound.house : "None"}
              </span>
              <h5 className="text-2xl me-2 text-sm font-bold tracking-tight text-gray-900">
                Ancestry:
              </h5>
              <span className="capitalize text-sm text-gray-700">
                {characterFound.ancestry ? characterFound.ancestry : "none"}
              </span>
              <h5 className="text-2xl me-2 text-sm font-bold tracking-tight text-gray-900">
                Eye Color:
              </h5>
              <span className="capitalize text-sm text-gray-700">
                {characterFound.eyeColour ? characterFound.eyeColour : "none"}
              </span>
              <h5 className="text-2xl me-2 text-sm font-bold tracking-tight text-gray-900">
                Actor:
              </h5>
              <span className="capitalize text-sm text-gray-700">
                {characterFound.actor ? characterFound.actor : "none"}
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
