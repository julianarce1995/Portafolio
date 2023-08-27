"use client";

import MyInfo from "@/components/main/MyInfo";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen">
      <div className=" w-full flex flex-col items-center bg-gray-50 drop-shadow-2xl shadow-blue-500/50 mt-16">
        <MyInfo/>
      </div>
    </div>
  )
}
