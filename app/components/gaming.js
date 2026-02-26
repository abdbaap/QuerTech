import Image from 'next/image';
import React from 'react'
import "./aiblogssection.css"
  import GamingBlogs from "../blogData/gaming"
import Link from 'next/link';
export default function GamingBlog() {
  return (
    <div id='gaming' className="flex w-full text-center p-8 flex-col justify-center items-center bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 animate-gradient gap-8 xl:p-32 ">
      <h2 className="text-4xl font-bold text-white">Confuse About Gaming</h2>
      <div className="flex justify-evenly items-center noscrollbar overflow-x-scroll w-full gap-16 snap-x snap-mandatory">
{GamingBlogs.map((item,index) => { 
  return (
    <Link target='_blank' href={`https://quertech-articles.vercel.app/${item.link}/index.html`} key={index} className="flex flex-none text-white  justify-between snap-center items-center w-75 xl:w-110 h-110 shrink-0">
      <div className="flex shadow-sm hover:shadow-2xl  card glassmorphismeffect flex-col justify-center items-center w-85 rounded-xl shrink-0 h-full gap-2 p-8">
        <Image src="/gaming.webp" width={40} height={40} alt={item.description}></Image>
        <h1 className="text-2xl ">{item.blog_title}</h1>
        <h2 className="text-xl">{item.description}</h2>
      </div>
      <div className="line h-full w-2 bg-white rounded-xl"></div>
    </Link>
  )
 })}
      </div>
    </div>
  )
}
