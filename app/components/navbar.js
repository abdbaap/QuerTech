import React from 'react'
import { Pixelify_Sans } from "next/font/google";
import Link from 'next/link';
import "./navbar.css"
const Pixelify_sans=Pixelify_Sans(
  {
    weight:"600",
    subsets:["latin"],
  }
)
export default function Navbar() {
  return (  <div className="flex fixed z-40 navbar logo justify-center bg-black text-white  w-full items-center p-2 px-8">
      <Link href="https://techvridha.vercel.app/"  className={`logo text-5xl font-bold   ${Pixelify_sans.className}`}>QuerTech</Link>
    </div>
  
  )
}
