import React from "react";

export default function Block({ colorBlock, id, idSelected, handleClick }) {
  return (
    <div
      id={id}
      onClick={() => handleClick(colorBlock, id)}
      className={
        id === idSelected
          ? colorBlock +
            " rounded-lg w-32 h-32 m-8 duration-700 ease-in -translate-y-0 scale-110 border border-2 border-white"
          : colorBlock +
            " rounded-lg w-32 h-32 m-8 duration-700 ease-in border border-2 border-black"
      }
    ></div>
  );
}
