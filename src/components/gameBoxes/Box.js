"use client";

import React, { useEffect, useState } from "react";
import Column from "./Column";
import Block from "./Block";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFirstColor,
  selectFirstId,
} from "@/store/selector/firstBlockSelector";
import { selectSecColor, selectSecId } from "@/store/selector/secBlockSelector";
import { setFirstBlockInfo } from "@/store/slices/firstBlockSlice";
import { setSecBlockInfo } from "@/store/slices/secBlockSlice";
import axios from "axios";
import Link from "next/link";

export default function Box({ player }) {
  const dispatch = useDispatch();
  const [colorBlock1, setColorBlock1] = useState("");
  const [colorBlock2, setColorBlock2] = useState("");
  const [colorBlock3, setColorBlock3] = useState("");
  const [colorBlock4, setColorBlock4] = useState("");
  const [colorBlock5, setColorBlock5] = useState("");
  const [colorBlock6, setColorBlock6] = useState("");
  const [idSelected, setSelected] = useState("");
  const [country, setCountry] = useState(0);
  const firstBoxIdSelected = useSelector(selectFirstId);
  const secBoxIdSelected = useSelector(selectSecId);
  const firstColorBlockSelected = useSelector(selectFirstColor);
  const secColorBlockSelected = useSelector(selectSecColor);
  const [inGame, setInGame] = useState(true);
  const [score, setScore] = useState(0);

  const countries = [
    {
      name: "Bolivia",
      color1: "bg-green-700",
      color2: "bg-yellow-300",
      color3: "bg-red-600",
    },
    {
      name: "Paraguay",
      color1: "bg-red-500",
      color2: "bg-white",
      color3: "bg-blue-500",
    },
    {
      name: "Argentina",
      color1: "bg-blue-500",
      color2: "bg-white",
      color3: "bg-blue-500",
    },
    {
      name: "Armenia",
      color1: "bg-red-500",
      color2: "bg-blue-500",
      color3: "bg-yellow-500",
    },
    {
      name: "Irak",
      color1: "bg-red-500",
      color2: "bg-white",
      color3: "bg-black",
    },
    {
      name: "Iran",
      color1: "bg-green-500",
      color2: "bg-white",
      color3: "bg-red-500",
    },
    {
      name: "Rusia",
      color1: "bg-white",
      color2: "bg-blue-500",
      color3: "bg-red-500",
    },
  ];

  function handleClick(colorBlock, id) {
    if (!firstBoxIdSelected) {
      dispatch(setFirstBlockInfo({ colorBlock, id, idSelected }));
      setSelected(id);
    } else if (
      firstBoxIdSelected &&
      id !== firstBoxIdSelected &&
      !secBoxIdSelected
    ) {
      dispatch(setSecBlockInfo({ colorBlock, id, idSelected }));
      setSelected("");
    } else {
      dispatch(setFirstBlockInfo({ colorBlock, id, idSelected }));
      setSelected(id);
      dispatch(
        setSecBlockInfo({ colorBlock: undefined, id: "", idSelected: "" })
      );
    }
  }

  function handleTest() {
    if (countries.length >= country) {
      if (
        colorBlock1 === countries[country].color1 &&
        colorBlock2 === countries[country].color2 &&
        colorBlock3 === countries[country].color3
      ) {
        setScore(score + 5);
      }
      setCountry(country + 1);
    }
    setColorBlock1("");
    setColorBlock2("");
    setColorBlock3("");
    setSelected("");
    dispatch(
      setFirstBlockInfo({ colorBlock: undefined, id: "", idSelected: "" })
    );
    dispatch(
      setSecBlockInfo({ colorBlock: undefined, id: "", idSelected: "" })
    );
  }
  function saveScore() {
    axios
      .put("/api/players", { name: player, score: score })
      .then(() => {
        localStorage.removeItem("player");
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error("Error al obtener los puntajes:", error);
      });
  }

  useEffect(() => {
    if (country < countries.length) {
      setColorBlock4(countries[country].color1);
      setColorBlock5(countries[country].color2);
      setColorBlock6(countries[country].color3);
    }
    if (country > countries.length - 1) {
      setInGame(false);
      setColorBlock4("");
      setColorBlock5("");
      setColorBlock6("");
    }
  }, [country]);

  useEffect(() => {
    if (firstBoxIdSelected && secBoxIdSelected) {
      switch (firstBoxIdSelected) {
        case "1":
          setColorBlock1(secColorBlockSelected);
          break;
        case "2":
          setColorBlock2(secColorBlockSelected);
          break;
        case "3":
          setColorBlock3(secColorBlockSelected);
          break;
        case "4":
          setColorBlock4(secColorBlockSelected);
          break;
        case "5":
          setColorBlock5(secColorBlockSelected);
          break;
        case "6":
          setColorBlock6(secColorBlockSelected);
          break;
        default:
          break;
      }
      switch (secBoxIdSelected) {
        case "1":
          setColorBlock1(firstColorBlockSelected);
          break;
        case "2":
          setColorBlock2(firstColorBlockSelected);
          break;
        case "3":
          setColorBlock3(firstColorBlockSelected);
          break;
        case "4":
          setColorBlock4(firstColorBlockSelected);
          break;
        case "5":
          setColorBlock5(firstColorBlockSelected);
          break;
        case "6":
          setColorBlock6(firstColorBlockSelected);
          break;
        default:
          break;
      }
    }
  }, [secBoxIdSelected]);

  useEffect(() => {
    if (inGame) {
      setCountry(0);
    }
  }, [inGame]);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-col items-center my-8">
          <h2 className="text-black text-5xl font-bold my-4">{player}</h2>
          <h3 className="text-black text-3xl font-bold m-3">Ordenar</h3>
          <p className="text-black text-xl text-center">
            Los colores de las banderas de los paises
          </p>
          <h3 className="text-black text-5xl font-bold my-4 text-center">
            {countries[country] ? countries[country].name : "Tu puntaje final"}
          </h3>
          <h4 className="text-black text-5xl font-bold my-4">
            {countries[country] ? "" : score}
          </h4>
          {inGame ? (
            <button
              onClick={handleTest}
              className="flex w-32 h-12 justify-center items-center py-2 text-white text-center text-md font-bold rounded-lg bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:outline-None focus:ring-teal-300 border-2 border-teal-600"
            >
              Siguiente
            </button>
          ) : (
            <button
              onClick={saveScore}
              className="flex w-32 h-12 justify-center items-center py-2 text-white text-center text-md font-bold rounded-lg bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:outline-None focus:ring-teal-300 border-2 border-teal-600"
            >
              <Link href="/game_boxes/game/results_table">Guardar</Link>
            </button>
          )}
        </div>
        <div className="flex flex items-center text-black font-bold">
          <div className="flex flex-col items-center">
            <h3 className="m-4">Aqui en Orden</h3>
            <Column>
              <Block
                id="1"
                colorBlock={colorBlock1}
                idSelected={idSelected}
                handleClick={handleClick}
              />
              <Block
                id="2"
                colorBlock={colorBlock2}
                idSelected={idSelected}
                handleClick={handleClick}
              />
              <Block
                id="3"
                colorBlock={colorBlock3}
                idSelected={idSelected}
                handleClick={handleClick}
              />
            </Column>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="m-4">Colores</h3>
            <Column>
              <Block
                id="4"
                colorBlock={colorBlock4}
                idSelected={idSelected}
                handleClick={handleClick}
              />
              <Block
                id="5"
                colorBlock={colorBlock5}
                idSelected={idSelected}
                handleClick={handleClick}
              />
              <Block
                id="6"
                colorBlock={colorBlock6}
                idSelected={idSelected}
                handleClick={handleClick}
              />
            </Column>
          </div>
        </div>
      </div>
    </div>
  );
}
