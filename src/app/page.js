"use client";

import { useSelector } from "react-redux";
import { selectCasasInfo } from "../store/selector/casasSelector";
import { useState } from "react";
import CharacterSection from "../components/CharacterSection";

export default function App() {
  const info = useSelector(selectCasasInfo);
  const [character, setCharacter] = useState('');
  const [message, setMessage] = useState(false);
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setCharacter(event.target.value);
    event.preventDefault()
    const filteredResults = info.filter(item =>
      item.name && item.name.toLowerCase().includes(character.toLowerCase())
    );
  
    setResults(filteredResults);
    setMessage(false)
  };
  
  function searchCharacter(event) {
    event.preventDefault()
    setMessage(true)
  }
  return (
    <div className="flex justify-center pb-16 h-screen">
      <div className="w-full md:w-1/2 py-10 pb-32 flex flex-col items-center bg-gray-50 drop-shadow-2xl shadow-blue-500/50 overflow-y-scroll scrollbar-thin overscroll-contain scrollbar-thumb-teal-500 scrollbar-track-gray-50">
        <form onSubmit={searchCharacter} className="m-10 w-1/2">
          <div className="flex items-center justify-between border-b border-teal-500 py-2">
            <input
              type="text"
              value={character}
              onChange={handleInputChange}
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="Escribe aquí"
            />
            <button
              type="submit"
              className="m-3 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            >
              Buscar
            </button>
          </div>
        </form>
        {
        message && results.length > 0
        ?
        <span className="text-2xl text-white bg-gray-800 py-3 px-6 rounded-lg m-4 animate-bounce">Results</span>
        :
        message
        ?
        <span className="text-2xl text-white bg-gray-800 py-3 px-6 rounded-lg m-4 animate-bounce">Not Found</span>
        :
        ''
        }
        <CharacterSection results={results.length > 0 ? results : info}/>
      </div>
    </div>
  );
}
