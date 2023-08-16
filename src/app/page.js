
"use client";

import { useAppDispatch, useAppSelector } from "../store/hooks"
import { selectCasasInfo } from "@/store/selector/casasSelector"
import { useDispatch } from "react-redux"

import { casasApi } from "@/store/slices/casasSlice"
import { useEffect, useState } from "react"



export default function Home() {
  const dispatch = useAppDispatch()
  const info = useAppSelector(selectCasasInfo)

async function name() {
  await dispatch(casasApi()).then().catch()
}

  useEffect(()=>{
    console.log(info);
  },[info])
  


  return (
      <div className='h-screen flex-row  items-center '>
        <form className="w-1/2 max-w-sm">
          <div className="flex items-center border-b border-teal-500 py-3">
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name"></input>
            <button onClick={name} className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
              Sign Up
            </button>
          </div>
        </form>
        <table className="table-auto">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
            </tr>
          </thead>
          <tbody>
          {info?.map((item)=>(<tr key={item.id}><td>{item.name}</td><td>{item.species}</td></tr>))}
          </tbody>
        </table>
      </div>
  )
}
