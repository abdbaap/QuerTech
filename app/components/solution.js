import Image from 'next/image'
import React from 'react'
import SolutionBlogs from "../blogData/solution"
import Link from 'next/link'
export default function SolutionsBlog() {
  return (
    <div id='solution' className="flex w-full bg-gray-600 text-center  flex-col justify-center  gap-8 py-8">
        <h1 className="text-4xl font-bold">Stuck In Some Problems</h1>
        <div className="flex noscrollbar overflow-x-auto w-full max-h-100vh snap-center snap-x snap-mandatory justify-evenly items-center">
{SolutionBlogs.map((item,index) => { return(
    <Link target='_blank' href={`/${item.link}/index.html`} key={index} className="flex hover:tracking-wider transition-all duration-500 flex-col bg-gray-950 text-white justify-center xl:w-80 w-75 h-100 rounded-xl items-center p-8 gap-2">
        <Image src="/solution.webp" width={40} height={40} alt={item.tags}></Image>
        <h1 className="text-2xl font-bold">{item.blog_title}</h1>
        <h2 className="text-xl">{item.description}</h2>
    </Link>
) })}
        </div>
    </div>
  )
}
