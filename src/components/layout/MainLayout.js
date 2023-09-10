"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRef } from "react";
import Footer from "../Footer";
import { usePathname } from "next/navigation";
import MenuPortafolio from "./MenuPortafolio";

export default function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  const mainRef = useRef(null);
  const currentPage = usePathname();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleClickOutsideMenu = () => {
      if (showMenu) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutsideMenu);

    return () => {
      document.removeEventListener("click", handleClickOutsideMenu);
    };
  }, [showMenu]);

  /*
  const [iconNavFooter, setIconNavFooter] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollToComponent = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      if (scrollPosition > 39) {
        setIconNavFooter(false);
      }
      if (scrollPosition < 39) {
        setIconNavFooter(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, [scrollPosition]);
  */

  return (
    <div id="navbar">
      <nav className="flex justify-between bg-gray-800 fixed w-full h-16 z-40 border-b-2 border-b-slate-700 shadow-lg shadow-slate-400">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-white ms-6 py-2 text-2xl font-extrabold"
          >
            <h1>Julian D. Arce</h1>
            <p className="text-xs font-medium text-center">
              | Software Developer |
            </p>
          </Link>
        </div>
        <div
          className={
            currentPage !== "/"
              ? "hidden"
              : "items-center sm:flex hidden md:w-1/4 sm:w-1/2 sm:me-8"
          }
        >
          <ul className="flex justify-between w-full">
            <li className="group transition-transform duration-500 ease-in hover:-translate-y-0 hover:scale-110 p-2 rounded-md active:bg-gray-700 active:ring-2 active:ring-gray-500 active:ring-opacity-50">
              <Link
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("navbar")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Home
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-1000 h-1 bg-teal-500 rounded-full"></span>
              </Link>
            </li>
            <li className="group transition-transform duration-500 ease-in hover:-translate-y-0 hover:scale-110 p-2 rounded-md active:bg-gray-700 active:ring-2 active:ring-gray-500 active:ring-opacity-50">
              <Link
                href="/#about"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("about")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                About
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-1000 h-1 bg-teal-500 rounded-full"></span>
              </Link>
            </li>
            <li className="group transition-transform duration-500 ease-in hover:-translate-y-0 hover:scale-110 p-2 rounded-md active:bg-gray-700 active:ring-2 active:ring-gray-500 active:ring-opacity-50">
              <Link
                href="#contact"
                scroll={true}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-1000 h-1 bg-teal-500 rounded-full"></span>
              </Link>
            </li>
          </ul>
        </div>
        <button
          type="button"
          className="flex items-center p-2 rounded-md me-6 active:bg-gray-700 active:ring-2 active:ring-gray-500 active:ring-opacity-50"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-10 h-10"
            aria-hidden="true"
            fill="#ffffff"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
      </nav>
      <MenuPortafolio showMenu={showMenu} />
      <main className="bg-white text-white">
        <div ref={mainRef}>{children}</div>
      </main>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}
