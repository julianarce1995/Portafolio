
import { useAppSelector } from "../store/hooks"
import Layout from "./components/Layout"
import { selectCasasInfo } from "@/store/selector/casasSelector"
import { useDispatch } from "react-redux"

import { casasApi } from "@/store/slices/casasSlice"



export default function Home() {
  const info = useAppSelector(selectCasasInfo)
  console.log(info);
  const dispatch = useDispatch()



  async function name() {
    await dispatch(casasApi)
    .then()
    .cathc()
  }


  return (

    <Layout>
      <div className='h-screen flex-row  items-center '>
        <form className="w-1/2 max-w-sm">
          <div className="flex items-center border-b border-teal-500 py-3">
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name"></input>
            <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
              Sign Up
            </button>
            <button onClick={name} className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
              Cancel
            </button>
          </div>
        </form>
        <table className="table-auto">
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  )
}
