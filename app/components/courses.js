import Image from 'next/image'
import React from 'react'
const courses=[
  {
    "blog_title":"Coming Soon",
    "link": "https://wordoraaicodefree.vercel.app/Blogs/wordoraaicodefree.html",
    "description": "Stay Tuned",
    "tags": ["AI Coding", "Vibe Coding", "Agentic AI", "Free Code Tools", "2026 Tech Trends"],
    color:"bg-red-700 shadow-red-400"
  },
  {
    "blog_title":"Coming Soon",
    "link": "https://wordoraaiprompts.vercel.app/Blogs/wordoraaiprompts.html",
    "description": "Stay Tuned",
    "tags": ["AI Prompts", "Prompt Engineering", "ChatGPT Hacks", "LLM Optimization", "Study Aids"],
    color:"bg-pink-700 shadow-pink-400"
  },
  {
    "blog_title":"Coming Soon",
    "link": "https://wordoraaimodels.vercel.app/Blogs/wordoraaimodels.html",
    "description": "Stay Tuned",
    "tags": ["AI Models", "LLM Comparison", "Gemini 2", "Open Source AI", "Artificial Intelligence"],
    color:"bg-orange-700 shadow-orange-400"
  },
  
]
export default function Courses() {
  return (
    <div className="flex p-8 flex-col w-full justify-center items-center gap-8  text-center ">
        <h1 className="text-4xl font-bold">Not Able To Learn Anything In Streak</h1>
        <div className="flex flex-wrap w-full justify-evenly text-black items-center gap-16">
            {courses.map((item,I) => { 
             return   <div key={I} className="flex flex-row justify-evenly m-0   items-center  rounded-xl w-80 h-100 bg-gray-400 shadow-sm hover:shadow-2xl gap-2">
                    <div className="flex flex-col justify-center   text-center  items-center gap-2">
                        <Image src="/courses.webp" width={40} height={40} alt={item.tags}></Image>
                        <h3 className="">{item.description}</h3>
                    </div>
                    <div style={{ writingMode: 'vertical-rl'}} className="text-3xl font-bold hover:tracking-[0.2em] transition-all duration-500 ">{item.blog_title}</div>
                </div>
             })}
        </div>
    </div>
  )
}
