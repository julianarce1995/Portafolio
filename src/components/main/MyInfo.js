import React from "react";
export default function MyInfo() {
  return (
    <div className="sm:w-full text-black flex justify-center my-44 mb-16">
      <div className="w-full flex flex-col md:flex-row items-center">
        <div className="min-w-[200px] mx-16 my-4">
          <svg
            viewBox="0 0 200 187"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            {/* eslint-disable-next-line react/no-unknown-property */}
            <mask id="mask0" mask-type="alpha">
              <path d="M190.312 36.4879C174.193 10.857 136.23 0.303176 97.9666 0.00163737C59.7028 -0.149132 20.9871 10.1032 6.67581 34.5279C-7.48481 59.1033 2.45775 97.8511 21.7403 129.362C41.0228 161.023 69.6454 185.297 100.226 186.353C130.807 187.559 163.346 165.547 182.328 134.186C201.309 102.826 206.582 62.1187 190.312 36.4879Z"></path>
            </mask>
            <g mask="url(#mask0)">
              <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"></path>
              <image
                xlinkHref="Julianarce.jpeg"
                x="0"
                y="-50"
                width="200px"
                height="290px"
              ></image>
            </g>
          </svg>
        </div>
        <div className="text-center mt-1 lg:mx-10">
          <h2 className="pt-2 text-4xl font-extrabold text-gray-900 text-transparent bg-clip-text md:text-5xl lg:text-6xl bg-gradient-to-r to-sky-400 from-emerald-400">
            Julian David Arce
          </h2>
          <p className="md:text-xl text-lg py-8 px-8">
            Técnico laboral en desarrollo de software egresado de la Institución
            de Educación para el Trabajo y el Desarrollo Humano
            <strong> CESDE</strong>. Con competencias organizacionales como
            tolerancia a la frustración, orientación al detalle, trabajo en
            equipo, comunicación efectiva y orientación al logro.
          </p>
        </div>
      </div>
    </div>
  );
}
