import Image from 'next/image'
import React from 'react'
import courses from "../blogData/courses"
import Link from 'next/link'
export default function CoursesBlog() {
  return (
    <div id='courses' className="flex  flex-col w-full   gap-8  text-center h-[150%] py-32 overflow-x-hidden overflow-y-scroll shrink-0 ">
        <h1 className="text-4xl font-bold my-32">Not Able To Learn Anything In Streak</h1>
        <div className="flex px-2 flex-wrap w-full justify-evenly text-black items-center gap-16">
            {courses.map((item,I) => { 
             return   <Link style={{ backgroundColor: 'black' }} target='_blank' href={`https://quertech-articles.vercel.app/${item.link}/index.html`} key={I} className={` ${item.color} flex flex-row justify-evenly m-0 text-white   items-center  rounded-xl w-80 h-100  shadow-xl hover:shadow-2xl gap-2 overflow-x-hidden overflow-y-auto py-2 shrink-0 p-2`}>
                    <div className="flex flex-col justify-center   text-center  items-center gap-2">
                        <Image src="/courses.webp" width={40} height={40} alt={item.tags}></Image>
                        <h3 className="">{item.description}</h3>
                    </div>
                    <div style={{ writingMode: 'vertical-rl'}} className="text-xl font-bold hover:tracking-[0.2em] transition-all duration-500 ">{item.blog_title}</div>
                </Link>
             })}
        </div>
    </div>
  )
}
