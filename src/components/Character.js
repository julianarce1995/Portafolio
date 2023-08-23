import { selectCasasInfo } from "../store/selector/casasSelector";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/navigation';
import { casasApi } from "@/store/slices/casasSlice";
import { hideSpinner, showSpinner } from "@/store/slices/loaderSlice";

export default function Character({ id }) {
  const [objectFound, setObjectFound] = useState([]);
  const info = useSelector(selectCasasInfo);
  const router = useRouter();
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (info.length < 1) {
      fetchCharacters()
    }
    
    if (id) { 
      setObjectFound((info.find((item) => item.id === id)));
    }
  }, [info]);

  return (
    <div className="flex flex-col items-center w-full mt-5">
      {objectFound ? (
        <div
          key={objectFound.id}
          className="flex flex-col mb-8 max-w-xs bg-white p-0 lg:w-2/4 rounded-xl shadow-2xl shadow-gray-600"
        >
          <div className="w-full h-full">
            {objectFound.image ? (
              <img
                className="w-80 h-96 rounded-t-lg"
                src={objectFound.image}
              ></img>
            ) : (
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/HP_-_Harry_Potter_wordmark.svg/1871px-HP_-_Harry_Potter_wordmark.svg.png"></img>
            )}
          </div>
          <div className="w-full">
            <div className="grid grid-cols-2 m-5">
              <span className="text-center capitalize text-3xl font-bold text-gray-700 col-span-2 mb-4">
                {objectFound.name ? objectFound.name : null}
              </span>
              <h5 className="text-2xl me-2 text-sm font-bold tracking-tight text-gray-900">
                Casa:
              </h5>
              <span className="capitalize text-sm text-gray-700">
                {objectFound.house ? objectFound.house : "None"}
              </span>
              <h5 className="text-2xl me-2 text-sm font-bold tracking-tight text-gray-900">
                Linaje:
              </h5>
              <span className="capitalize text-sm text-gray-700">
                {objectFound.ancestry ? objectFound.ancestry : "none"}
              </span>
              <h5 className="text-2xl me-2 text-sm font-bold tracking-tight text-gray-900">
                Color ocular:
              </h5>
              <span className="capitalize text-sm text-gray-700">
                {objectFound.eyeColour ? objectFound.eyeColour : "none"}
              </span>
              <h5 className="text-2xl me-2 text-sm font-bold tracking-tight text-gray-900">
                Actor:
              </h5>
              <span className="capitalize text-sm text-gray-700">
                {objectFound.actor ? objectFound.actor : "none"}
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
