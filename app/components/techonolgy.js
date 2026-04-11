import Image from 'next/image'
import React from 'react'
import "./motivation.css"
import MotivationBlogs from "../blogData/techonology"
import Link from 'next/link'
export default function MotivationBlog() {
  return (<div id='motivation' className="flex flex-col w-screen justify-center items-center gap-8 text-center h-[150%] overflow-x-hidden  ">
    <h1 className="font-bold text-4xl text-transparent bg-clip-text bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 animate-gradient font-bold capitalize space-y-1 overflow-hidden">Tech Insights: Latest Trends, Reviews, and Guides  </h1>
    <div className="flex flex-wrap gap-16 justify-center w-full overflow-y-scroll max-h-200vh px-10 xl:px-8 snap-mandatory snap-x items-center">
{MotivationBlogs.map((item,index) => { 
    return (<Link target='_blank'style={{ backgroundColor: 'black' }} href={`https://articlesstack.pages.dev/${item.link}/index.html`} key={index} className={`motivationcard flex noscrollbar   gap-2 overflow-x-hidden overflow-y-scroll  justify-evenly bg-gray-600 text-white rounded-xl shadow-sm hover:shadow-2xl p-2 w-80 h-110 snap-center  items-center text-center shrink-0 ${item.color} shadow-xs`}>
        <h1 className="text-xl ">{item.blog_title}</h1>
        <div className="flex flex-col justify-center items-center">
        <Image loading="lazy" src="/motivation.webp" width={40} height={40} alt={item.tags}></Image>
        <h2 className="text-">{item.description}</h2>
        </div>
    </Link>

    )
 })}
    </div>
  </div>
  )
}
