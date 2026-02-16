import Image from 'next/image'
import React from 'react'
import "./motivation.css"
import MotivationBlogs from "../blogData/motivation"
import Link from 'next/link'
export default function MotivationBlog() {
  return (<div id='motivation' className="flex flex-col justify-center items-center gap-8 text-center">
    <h1 className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 animate-gradient font-bold capitalize space-y-1 overflow-hidden">Get Motivated And Do Your Best</h1>
    <div className="flex flex-wrap gap-16 overflow-y scroll max-h-200vh justify-evenly snap-mandatory snap-x items-center">
{MotivationBlogs.map((item,index) => { 
    return (<Link target='_blank' href={`/${item.link}/index.html`} key={index} className="motivationcard flex noscrollbar  text-black gap-2 overflow-x-hidden overflow-y-scroll  justify-evenly bg-gray-700 text-white rounded-xl shadow-sm hover:shadow-2xl p-2 w-80 h-110 snap-center items-center text-center shrink-0">
        <h1 className="text-xl ">{item.blog_title}</h1>
        <div className="flex flex-col justify-center items-center">
        <Image src="/motivation.webp" width={40} height={40} alt={item.tags}></Image>
        <h2 className="text-">{item.description}</h2>
        </div>
    </Link>

    )
 })}
    </div>
  </div>
  )
}
