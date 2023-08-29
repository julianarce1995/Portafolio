"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import { usePathname } from 'next/navigation';
import ButtonsLayout from "./ButtonsLayout";

export default function Layout({ children }) {
  const [iconNavFooter, setIconNavFooter] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const currentPage  = usePathname();
  const mainRef = useRef(null);
  const footerRef = useRef(null);
  
  const scrollToComponent = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  function handleNavFooter() {
    if (iconNavFooter) {
      scrollToComponent(footerRef)
      setIconNavFooter(true);
    }else{
      scrollToComponent(mainRef)
      setIconNavFooter(false);
    }
  }
    
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      if (scrollPosition > 185 ) {
        setIconNavFooter(false);
      }
      if (scrollPosition < 40) {
        setIconNavFooter(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  return (
    <div >
      <nav className="flex justify-between bg-gray-800 fixed w-full h-16 z-40 border-b-2 border-b-slate-700 shadow-lg shadow-slate-400">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-white ms-6 py-2 text-2xl font-extrabold"
          >
            Julian D. Arce<p className="text-xs font-medium text-center">| Software Developer |</p>
          </Link>
        </div>
        <div className={currentPage === "/" ? "hidden" : "flex h-16 items-center"} >
          <ButtonsLayout currentPage={currentPage} />        
        </div>
      </nav>
      <main className="bg-white">
        <div ref={mainRef}>
          {children}
        </div>
        <div className="fixed bottom-4 left-40 right-40 z-10">
          <div className="w-full flex justify-center">
          <button
            onClick={handleNavFooter}
            className="hidden w-10 lg:flex justify-center pt-3"
          >
            <svg
              className="w-8 text-teal-500 sm-hidden"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 8"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  iconNavFooter
                    ? "m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                    : "M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
                }
              />
            </svg>
          </button>
          </div>
        </div>
      </main>
      <div ref={footerRef}>
        <Footer></Footer>
      </div>
    </div>
  );
}
