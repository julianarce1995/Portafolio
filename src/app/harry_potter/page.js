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
  const [results, setResults] = useState([]);
  const [characterInput, setCharacterInput] = useState("");
  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(2);

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

    setStartPage(0);
    setEndPage(2);
  };

  function searchCharacter(event) {
    event.preventDefault();
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
      <div className="w-full flex flex-col items-center mt-16">
        <form onSubmit={searchCharacter} className="md:w-1/2 m-5">
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
            Prev. Page
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
