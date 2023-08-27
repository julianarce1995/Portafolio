"use client";

import { useDispatch, useSelector } from "react-redux";
import { selectHarryPotterData } from "../../store/selector/harryPotterSelector";
import { useEffect, useState } from "react";
import CharacterSection from "../../components/harryPotter/CharactersSection";
import { hideSpinner, showSpinner } from "../../store/slices/loaderSlice";
import { harryPotterApi } from "../../store/slices/harryPotterSlice";

export default function HarryPotterPage() {
  const dispatch = useDispatch();
  const data = useSelector(selectHarryPotterData);
  const [results, setResults] = useState([]);
  const [characterInput, setCharacterInput] = useState("");
  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(2);
  const [messageResult, setMessageResult] = useState(false);

  async function fetchCharacters() {
    dispatch(showSpinner());
    await dispatch(harryPotterApi())
      .then(() => {
        dispatch(hideSpinner());
        setStartPage(0);
        setEndPage(2);
      })
      .catch(() => {
        dispatch(hideSpinner());
      });
  }

  const handleInputChange = (event) => {
    event.preventDefault();
    setCharacterInput(event.target.value);
    const filteredResults = data.filter(
      (item) =>
        item.name &&
        item.name.toLowerCase().includes(characterInput.toLowerCase())
    );
    setResults(filteredResults);
    setMessageResult(false);
    setStartPage(0);
    setEndPage(2);
  };

  function searchCharacter(event) {
    event.preventDefault();
    setMessageResult(true);
  }

  function prevPage() {
    if (startPage !== 0) {
      setStartPage((prevCount) => prevCount - 2);
      setEndPage((prevCount) => prevCount - 2);
    }
  }

  function nextPage() {
    if (results.length > 0) {
      if (results.length > endPage) {
        setStartPage((prevCount) => prevCount + 2);
        setEndPage((prevCount) => prevCount + 2);
      }
    } else {
      if (data.length > endPage) {
        setStartPage((prevCount) => prevCount + 2);
        setEndPage((prevCount) => prevCount + 2);
      }
    }  
  }

  useEffect(() => {
    if (data.length < 1) {
      fetchCharacters();
    }
  }, [data]);

  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-full flex flex-col items-center bg-gray-50 drop-shadow-2xl shadow-blue-500/50 mt-16">
        <form onSubmit={searchCharacter} className="m-5 md:w-1/2">
          <div className="flex items-center justify-between border-b border-teal-500 py-2">
            <input
              type="text"
              value={characterInput}
              onChange={handleInputChange}
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="Escribe aquí"
            />
            <button
              type="submit"
              className="m-3 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            >
              Search
            </button>
          </div>
        </form>
        <CharacterSection
          results={results.length > 0 ? results : data}
          endPage={endPage}
          startPage={startPage}
        />
        <div className="flex w-full justify-around">
          <button
            onClick={prevPage}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-teal-500 rounded-lg hover:bg-teal-700 focus:ring-4 focus:outline-None focus:ring-teal-300"
          >
            Prev Page
          </button>
          <button
            onClick={nextPage}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-teal-500 rounded-lg hover:bg-teal-700 focus:ring-4 focus:outline-None focus:ring-teal-300"
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
}
