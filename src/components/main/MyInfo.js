export default function MyInfo() {
  return (
    <div className="sm:w-full text-black flex justify-center my-16">
      <div className="w-3/4 md:full flex flex-col md:flex-row items-center">
        <img
          className="w-40 h-40 rounded-full shadow-2xl shadow-slate-700 border-2 border-slate-700 my-10 m-2"
          src="../../julianarce3.jpg"
          alt="julian-arce-image"
        />
        <div className="text-center lg:ms-8 mt-10">
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Julian David Arce
          </h2>
          <p>
            Soy Técnico laboral en desarrollo de software egresado de la
            Institución de Educación para el Trabajo y el Desarrollo Humano
            CESDE. Cuento con competencias organizacionales como tolerancia a la
            frustración, orientación al detalle, trabajo en equipo,
            proactividad, orientación al servicio, comunicación efectiva y
            orientación al logro.
          </p>
        </div>
      </div>
    </div>
  );
}
