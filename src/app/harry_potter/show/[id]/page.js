"use client";

import React from "react";
import Link from "next/link";
import Character from "src/components/harryPotter/Character";

export default function CharacterPage({ params }) {
  return (
    <div>
      <Character id={params.id} />
      <div className="fixed top-20 right-10">
        <Link
          href={"/harry_potter"}
          className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-lg bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:outline-None focus:ring-teal-300"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}
