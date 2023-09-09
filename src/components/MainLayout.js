"use client";

import React from "react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import { usePathname } from "next/navigation";
import ButtonsLayout from "./ButtonsLayout";

export default function Layout({ children }) {
  const currentPage = usePathname();
  const mainRef = useRef(null);
  const footerRef = useRef(null);

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
            <li className="group transition-transform duration-500 ease-in hover:-translate-y-0 hover:scale-110 p-2">
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
            <li className="group transition-transform duration-500 ease-in hover:-translate-y-0 hover:scale-110 p-2">
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
            <li className="group transition-transform duration-500 ease-in hover:-translate-y-0 hover:scale-110 p-2">
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
            <li className="group transition-transform duration-500 ease-in hover:-translate-y-0 hover:scale-110 p-2">
              <span
                onClick={() => {
                  footerRef.current.scrollIntoView({ behavior: "smooth" });
                }}
                className="cursor-pointer"
              >
                Pages
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-1000 h-1 bg-teal-500 rounded-full"></span>
              </span>
            </li>
          </ul>
        </div>
        <div className="flex h-16 items-center md:flex hidden">
          <ButtonsLayout currentPage={currentPage} />
        </div>
      </nav>
      <main className="bg-white text-white">
        <div ref={mainRef}>{children}</div>
      </main>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}
