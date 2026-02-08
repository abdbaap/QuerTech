import Image from 'next/image'
import React from 'react'
import "./motivation.css"
const MotivationBlogs=[
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
export default function Motivation() {
  return (<div className="flex flex-col justify-center items-center gap-8 text-center">
    <h1 className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 animate-gradient font-bold capitalize space-y-1 overflow-hidden">Get Motivated And Do Your Best</h1>
    <div className="flex flex-wrap gap-16 overflow-y scroll max-h-200vh justify-evenly snap-mandatory snap-x items-center">
{MotivationBlogs.map((item,index) => { 
    return (<div key={index} className="motivationcard flex  text-black gap-2  justify-evenly bg-gray-300 rounded-xl shadow-sm hover:shadow-2xl p-1 w-80 h-110 snap-center items-center text-center shrink-0">
        <h1 className="text-2xl ">{item.blog_title}</h1>
        <div className="flex flex-col justify-center items-center">
        <Image src="/motivation.webp" width={40} height={40} alt={item.tags}></Image>
        <h2 className="text-xl">{item.description}</h2>
        </div>
    </div>

    )
 })}
    </div>
  </div>
  )
}
