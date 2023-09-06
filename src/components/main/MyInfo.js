import React from "react";
export default function MyInfo() {
  return (
    <div className="sm:w-full text-black flex justify-center mt-28 mb-16 lg:px-10">
      <div className="w-3/4 md:w-full flex flex-col md:flex-row items-center my-4">
        <img
          className="w-40 h-40 m-4 my-10 mx-20 rounded-full shadow-2xl shadow-slate-700 border-2 border-slate-700"
          src="../../julianarce3.jpg"
          alt="julian-arce-image"
        />
        <div className="text-center mt-1 lg:mx-10">
          <h2 className="mb-4 p-2 text-3xl font-extrabold text-gray-900 text-transparent bg-clip-text md:text-5xl lg:text-6xl bg-gradient-to-r to-sky-400 from-emerald-600">
            Julian David Arce
          </h2>
          <p className="text-xl p-8">
            Soy Técnico laboral en desarrollo de software egresado de la
            Institución de Educación para el Trabajo y el Desarrollo Humano
            <strong> CESDE</strong>. Cuento con competencias organizacionales
            como tolerancia a la frustración, orientación al detalle, trabajo en
            equipo, proactividad, orientación al servicio, comunicación efectiva
            y orientación al logro.
          </p>
        </div>
      </div>
    </div>
  );
}
