"use client"
import { useState } from "react"

export default function(){

    const [count, setCount] = useState(0)
    return (
        <div className="flex flex-col justify-center items-center">
            <h1>THIS IS AN INTERACTIVE COUNTER</h1>

            <div className="pt-10 flex flex-row gap-10 text-xl">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={()=>{
                setCount(count + 1)
            }}>Increment</button>
            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={()=>{
                setCount(count - 1)
            }}>Decrement</button>
            </div>

            <div className="text-5xl pt-20 font-bold">
                {count}
            </div>
        </div>
    )
}