import Image from 'next/image'
import React from 'react'
import courses from "../blogData/courses"
import Link from 'next/link'
export default function CoursesBlog() {
  return (
    <div id='courses' className="flex p-8 flex-col w-full justify-center items-center gap-8  text-center ">
        <h1 className="text-4xl font-bold">Not Able To Learn Anything In Streak</h1>
        <div className="flex flex-wrap w-full justify-evenly text-black items-center gap-16">
            {courses.map((item,I) => { 
             return   <Link target='_blank' href={`https://quertech-articles.vercel.app/${item.link}/index.html`} key={I} className="flex flex-row justify-evenly m-0   items-center  rounded-xl w-80 h-100 bg-gray-400 shadow-sm hover:shadow-2xl gap-2">
                    <div className="flex flex-col justify-center   text-center  items-center gap-2">
                        <Image src="/courses.webp" width={40} height={40} alt={item.tags}></Image>
                        <h3 className="">{item.description}</h3>
                    </div>
                    <div style={{ writingMode: 'vertical-rl'}} className="text-3xl font-bold hover:tracking-[0.2em] transition-all duration-500 ">{item.blog_title}</div>
                </Link>
             })}
        </div>
    </div>
  )
}
