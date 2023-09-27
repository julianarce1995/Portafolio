"use client";

import Box from "@/components/gameBoxes/Box";
import React, { useEffect, useState } from "react";

export default function GamePage() {
  //const [time, setTime] = useState(true);
  const [player, setPlayer] = useState();

  useEffect(() => {
    setPlayer(localStorage.getItem("player"));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center md:my-0 my-16 md:h-screen">
      {/*<h3 className="mt-24 text-6xl font-bold text-gray-300">En Proceso</h3>*/}
      <Box player={player} />
    </div>
  );
}
