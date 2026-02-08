import React from 'react'
import { Pixelify_Sans } from "next/font/google";
const Pixelify_sans=Pixelify_Sans(
  {
    weight:"600",
    subsets:["latin"],
  }
)
export default function Navbar() {
  return (  <div className="flex navbar justify-center bg-black text-white  w-full items-center p-2 px-8">
      <h1 className={`text-5xl font-bold  ${Pixelify_sans.className}`}>QuerTech</h1>
    </div>
  
  )
}
