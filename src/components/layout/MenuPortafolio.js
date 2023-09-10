import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function MenuPortafolio({ showMenu }) {
  const currentPage = usePathname();
  return (
    <div className="flex items-center">
      <div
        className={`fixed top-0 right-6 z-10 my-4 text-left list-none bg-white divide-y divide-gray-100 shadow md:order-2 transition-transform duration-500 ${
          showMenu ? "translate-y-10" : "-translate-y-48"
        }`}
        id="user-dropdown"
      >
        <div className="px-4 py-2 pt-8">
          <span className="block text-sm text-gray-900 dark:text-white">
            Portafolio
          </span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
            Julian David Arce
          </span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <Link
              href="/"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/game_boxes"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Game Boxes
            </Link>
          </li>
          <li>
            <Link
              href="/harry_potter"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Harry Potter API
            </Link>
          </li>
          <li>
            <Link
              href={currentPage === "/" ? "#contact" : "#footer"}
              scroll={true}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(currentPage === "/" ? "contact" : "footer")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
