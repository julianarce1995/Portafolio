"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectHarryPotterData } from "../../store/selector/harryPotterSelector";
import { useEffect, useState } from "react";
import CharacterSection from "../../components/harryPotter/CharactersSection";
import { hideSpinner, showSpinner } from "../../store/slices/loaderSlice";
import { harryPotterApi } from "../../store/slices/harryPotterSlice";

export default function HarryPotterPage() {
  const dispatch = useDispatch();
  const data = useSelector(selectHarryPotterData);
  const [positionStr, setPositionStr] = useState("-translate-x-[0%]");
  const [results, setResults] = useState([]);
  const [characterInput, setCharacterInput] = useState("");

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

  /*const handleInputChange = (event) => {
    event.preventDefault();
    setCharacterInput(event.target.value);
    const filteredResults = data.filter(
      (item) =>
        item.name &&
        item.name.toLowerCase().includes(characterInput.toLowerCase())
    );
    setResults(filteredResults);
  };

  function searchCharacter(event) {
    event.preventDefault();
  }*/

  function prevSection() {
    if (positionStr === "-translate-x-[100%]") {
      setPositionStr("-translate-x-[0%]");
    } else if (positionStr === "-translate-x-[200%]") {
      setPositionStr("-translate-x-[100%]");
    } else if (positionStr === "-translate-x-[300%]") {
      setPositionStr("-translate-x-[200%]");
    } else if (positionStr === "-translate-x-[400%]") {
      setPositionStr("-translate-x-[300%]");
    }
  }

  function nextSection() {
    if (positionStr === "-translate-x-[0%]") {
      setPositionStr("-translate-x-[100%]");
    } else if (positionStr === "-translate-x-[100%]") {
      setPositionStr("-translate-x-[200%]");
    } else if (positionStr === "-translate-x-[200%]") {
      setPositionStr("-translate-x-[300%]");
    } else if (positionStr === "-translate-x-[300%]") {
      setPositionStr("-translate-x-[400%]");
    }
  }

  useEffect(() => {
    if (data.length < 1) {
      fetchCharacters();
    }
  }, [data]);

  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-full flex flex-col items-center justify-center mt-16">
        {/*<form onSubmit={searchCharacter} className="md:w-1/2 m-5">
          <div className="flex items-center justify-between py-2 border-b border-teal-500">
            <input
              type="text"
              value={characterInput}
              onChange={handleInputChange}
              className="w-full mr-3 py-1 px-2 text-gray-700 leading-tight focus:outline-none"
              placeholder="Search here"
            />
            <button
              type="submit"
              className="m-3 py-1 px-2 text-sm border-4 border-teal-500 bg-teal-500 rounded hover:bg-teal-700 hover:border-teal-700"
            >
              Search
            </button>
          </div>
        </form>*/}
        <div className="flex justify-center items-center w-full">
          <button type="button" onClick={prevSection} className="flex m-4">
            <span className="inline-flex items-center justify-center">
              <svg className="w-5" fill="none" viewBox="0 0 6 10">
                <path
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <CharacterSection
            results={results.length > 0 ? results : data}
            positionStr={positionStr}
          />
          <button type="button" onClick={nextSection} className="flex m-4">
            <span className="inline-flex items-center justify-center">
              <svg className="w-5" fill="none" viewBox="0 0 6 10">
                <path
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
