import React from "react";

export default function Column({ children }) {
  return (
    <div className="grid grid-rows-3 row-start-3 bg-teal-500">{children}</div>
  );
}
