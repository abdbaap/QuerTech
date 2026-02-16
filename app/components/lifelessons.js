import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import "./lifelessons.css"
import LifeLessons from '../blogData/lifelessons'
export default function LifeLessonsBlog() {
   
  return (
    <div id='Life Lessons' className="flex flex-col justify-center w-full p-8 h-full  gap-8 items-center">
        <h2 className="text-4xl font-bold">Improve Your Life</h2>
        <div className="flex flex-wrap justify-center items-center w-full LifeLessons h-full relative ">
      
            <div className="max-h-[200vh] xl:max-h-screen  overflow-y-scroll noscrollbar flex-wrap justify-center items-center w-full flex gap-32 p-16  relative">
          {LifeLessons.map((e,id) => { 
            return     <Link target='_blank' href={`/${e.link}/index.html`} key={id} className={`aiCard hover:shadow-2xl hover:grow-[0.01] shadow hover:zoom-in-95 text-white relative p-8 flex justify-center items-center  rounded-xl w-[320px] flex-col ${e.color} ${e.rotation}`}>
                <Image className="absolute -top-12 invert" src="/pin.png" width={50} height={50} alt={e.description}></Image>
                <h2 className="text-xl font-bold">{e.blog_title}</h2>
                <h6 className="text-xl">{e.description}</h6>
            </Link>
        
           })}
            </div>
         </div>
    </div>
  )
}