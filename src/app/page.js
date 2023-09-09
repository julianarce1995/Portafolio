"use client";

import React from "react";
import CarouselSkills from "@/components/main/CarouselSkills";
import ContactForm from "@/components/main/ContactForm";
import MyInfo from "@/components/main/MyInfo";
import AppInfo from "@/components/main/AppInfo";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-around bg-gray-50">
      <MyInfo />
      <CarouselSkills />
      <hr className="w-1/2 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-8 dark:bg-gray-700" />
      <AppInfo />
      <hr className="w-1/2 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-0 dark:bg-gray-700" />
      <ContactForm />
      <hr className="w-1/2 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-6 dark:bg-gray-700" />
    </div>
  );
}
