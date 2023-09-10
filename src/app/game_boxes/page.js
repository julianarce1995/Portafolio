import Box from "@/components/gameBoxes/Box";
import React from "react";

export default function page() {
  return (
    <div className="h-screen flex flex-col items-center">
      <h3 className="mt-24 text-6xl font-bold text-gray-300">En Proceso</h3>
      <Box />
    </div>
  );
}
