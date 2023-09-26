"use client";

import axios from "axios";
import React, { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      axios
        .post("/api/players", { name })
        .then((response) => {
          // Manejar la respuesta exitosa aquí
          // eslint-disable-next-line no-console
          console.log("Registro exitoso", response.data);
        })
        .catch((error) => {
          if (error.response.status === 400) {
            // Error de correo electrónico duplicado
            // eslint-disable-next-line no-console
            console.error(
              "Error: Correo electrónico duplicado",
              error.response.data.message
            );
          } else {
            // Otros errores
            // eslint-disable-next-line no-console
            console.error("Error en la solicitud:", error);
          }
        });
      setName("");
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
                  <div className="mx-auto max-w-lg ">
                    <div className="py-4">
                      <span className="px-1 text-sm text-black">
                        Nombre de Usuario
                      </span>
                      <input
                        placeholder="Tu nombre aqui"
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="text-md text-black block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                    <button
                      className="mt-8 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
                      onClick={handleSubmit}
                    >
                      Iniciar Juego
                    </button>
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
