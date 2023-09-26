import React from "react";

export default function Column({ children }) {
  return (
    <div className="bg-gray-400 sm:mx-2 md:mx-4 lg:mx-8 rounded-lg">
      {children}
    </div>
  );
}
