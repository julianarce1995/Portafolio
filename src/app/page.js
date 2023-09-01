"use client";

import React from "react";
import CarouselSkills from "@/components/main/CarouselSkills";
import ContactForm from "@/components/main/ContactForm";
import MyInfo from "@/components/main/MyInfo";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-around bg-gray-50">
      <MyInfo />
      <CarouselSkills />
      <ContactForm />
    </div>
  );
}
