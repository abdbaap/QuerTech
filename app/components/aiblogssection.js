import Image from 'next/image'
import React from 'react'
import "./aiblogssection.css"
import Link from 'next/link'
import  aiblogs  from '../blogData/aiblogssection'
export default function Aiblogssection() {
  return (
    
       <div id='Ai' className="flex flex-col justify-center p-8 items-center gap-8 h-auto xl:h-screen text-center  w-full">
        <h1 className="text-4xl font-bold capitalize">enhance your performance with ai</h1>
        <div className="flex   h-auto xl:h-130 noscrollbar   justify-evenly items-center snap-mandatory snap-x overflow-x-scroll w-full gap-16    p-0  ">
      {aiblogs.map((item,i) => { 
        return <Link target='_blank' href={`/${item.link}/index.html`} key={i} className={`flex flex-col rounded-xl shrink-0 gap-2 z-0 hover:z-10 snap-center   p-8  shadow-2xs hover:shadow-xl justify-center text-center items-center xl:w-80 w-75 h-110 hover:h-116 text-white ${item.color}`}>
            <Image src="/ai.webp" width={40} height={40} alt={item.tags}></Image>
            <h1 className="text-2xl">
                {item.blog_title}
            </h1>
            <h2 className="text-xl">
                {item.description}
            </h2>
        </Link>
       })}
        </div>
      </div>
  )
}
