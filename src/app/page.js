"use client";

import CarouselSkills from "@/components/main/CarouselSkills";
import MyInfo from "@/components/main/MyInfo";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-full flex flex-col justify-around items-center text-slate-50 mt-16">
        <MyInfo/>
        <CarouselSkills/>
      </div>
    </div>
  )
}
