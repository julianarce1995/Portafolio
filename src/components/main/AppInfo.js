import React from "react";

export default function AppInfo() {
  return (
    <div className="text-black flex flex-col items-center sm:my-4 m-4">
      <h2 className="text-3xl my-4 text-center">
        Recursos y Tecnologías Utilizadas en Este Sitio Web
      </h2>
      <div className="container grid md:grid-cols-3 grid-cols-1 gap-4">
        <div className="rounded-2xl border-2 p-4">
          <h3 className="font-bold text-2xl my-4">Estilo y maquetacion:</h3>
          <p className="my-2 mt-2">
            Este sitio Web esta extructurado y diseñado con HTML y CSS3,
            manipulado con clases predefinidas de Tailwind, un popular framework
            de diseño de código abierto.
          </p>
          <h4 className="text-md font-bold mt-8">Tailwind:</h4>
          <p className="my-2 mt-2">
            Es un framework de diseño de código abierto que se utiliza para
            crear interfaces de usuario (UI) en aplicaciones web de manera
            eficiente y rápida.
          </p>
        </div>
        <div className="rounded-2xl border-2 p-4">
          <h3 className="font-bold text-2xl my-4">Lenguaje y framework:</h3>
          <h4 className="text-md font-bold">Javascript:</h4>
          <p className="my-2 mt-2">
            Es un poderoso lenguaje de programación ampliamente utilizado en el
            desarrollo web para crear aplicaciones interactivas y dinámicas en
            el navegador.
          </p>
          <h4 className="text-md font-bold">Next.js:</h4>
          <p className="my-2 mt-2">
            Es un popular framework de desarrollo web de código abierto para
            React, una de las bibliotecas JavaScript más utilizadas para crear
            interfaces de usuario interactivas.
          </p>
        </div>
        <div className="rounded-2xl border-2 p-4">
          <h3 className="font-bold text-2xl my-4">Bibliotecas:</h3>
          <h4 className="text-md font-bold">Axios:</h4>
          <p className="my-2 mt-2">
            Es una biblioteca JavaScript de código abierto que se utiliza para
            realizar solicitudes HTTP desde el lado del cliente, generalmente en
            aplicaciones web o móviles.
          </p>
          <h4 className="text-md font-bold">Redux:</h4>{" "}
          <p className="my-2 mt-2">
            Es una biblioteca de administración de estado de código abierto para
            aplicaciones JavaScript, especialmente aquellas construidas con
            bibliotecas o frameworks como React o Angular.
          </p>
        </div>
        <div className="md:col-start-2 col-span-1 col-span-1 rounded-2xl border-2 mx-2 p-4">
          <h3 className="font-bold text-2xl my-4 text-center">Herramientas:</h3>
          <h4 className="text-md font-bold">ESLint:</h4>
          <p className="my-2 mt-2">
            Es una herramienta de linting (análisis estático de código)
            ampliamente utilizada en el desarrollo de JavaScript. Su objetivo
            principal es ayudar a los desarrolladores a detectar y corregir
            errores de estilo, convenciones y posibles problemas en su código
            JavaScript.
          </p>
          <h4 className="text-md font-bold"> VSCode:</h4>
          <p className="my-2 mt-2">
            Visual Studio Code, es un editor de código fuente gratuito y de
            código abierto desarrollado por Microsoft.
          </p>
          <h4 className="text-md font-bold"> Vercel: </h4>
          <p className="my-2 mt-2">
            Es una plataforma en la nube para implementar aplicaciones web y
            sitios web de manera rápida y sencilla.
          </p>
        </div>
      </div>
    </div>
  );
}
