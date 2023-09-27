"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { hideSpinner, showSpinner } from "@/store/slices/loaderSlice";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [warning, setWarning] = useState(false);
  const [name, setName] = useState("");
  const [player, setPlayer] = useState();

  useEffect(() => {
    setPlayer(localStorage.getItem("player"));
  }, []);

  useEffect(() => {
    setWarning(false);
  }, [name]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(showSpinner());
    if (!player) {
      if (name) {
        axios
          .post("/api/players", { name })
          .then(() => {
            localStorage.setItem("player", name);
            router.push("/game_boxes/game");
          })
          .catch((error) => {
            if (error.response.status === 400) {
              setWarning(true);
            } else {
              router.push("/");
            }
            dispatch(hideSpinner());
          });
      }
    } else {
      router.push("/game_boxes/game");
      dispatch(hideSpinner());
    }
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div
        id="contact"
        className="container max-w-full mx-auto pt-32 pb-8 px-6"
      >
        <div className="max-w-sm mx-auto px-6">
          <div className="relative flex flex-wrap">
            <div className="w-full relative">
              <div className="md:mt-6">
                <h2 className="text-center text-4xl font-semibold text-gray-700">
                  Registro
                </h2>
                <form className="mt-2" type="submit">
                  <div className="mx-auto max-w-lg h-44 ">
                    <div className="py-4">
                      <span className="px-1 text-sm text-black">
                        Nombre de Usuario
                      </span>
                      <input
                        placeholder="ejemplo: julianarce1101"
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className={`text-md text-black block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:outline-none
                          ${
                            warning
                              ? "border-rose-500"
                              : "focus:border-teal-500"
                          }
                        `}
                      />
                    </div>
                    <button
                      className="mt-4 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
                      onClick={handleSubmit}
                    >
                      Iniciar Juego
                    </button>
                    {warning ? (
                      <div className="mt-4 flex justify-center rounded-md bg-rose-300 p-2">
                        <span className="text-rose-500 font-bold rounded-lg text-center">
                          {
                            "El usuario ya existe intenta con otro nombre de usuario"
                          }
                        </span>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
