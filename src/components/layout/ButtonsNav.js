"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function ButtonsNav({ currentPage }) {
  const [buttonPath, setButtonPath] = useState("");
  const [buttonName, setButtonName] = useState("");

  useEffect(() => {
    if (currentPage.includes("harry_potter")) {
      setButtonPath("/harry_potter");
      setButtonName("Harry Potter Api");
    } else {
      setButtonPath("/");
      setButtonName("Portafolio");
    }
  }, [currentPage]);

  return (
    <>
      <Link
        href={buttonPath}
        className="w-40 text-center bg-gray-900 text-white rounded-md me-6 px-3 py-2 text-sm font-medium"
      >
        {buttonName}
      </Link>
    </>
  );
}
