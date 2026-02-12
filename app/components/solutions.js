import Image from 'next/image'
import React from 'react'
const SolutionBlogs=[
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
export default function Solutions() {
  return (
    <div id='solution' className="flex w-full bg-gray-600 text-center  flex-col justify-center  gap-8 py-8">
        <h1 className="text-4xl font-bold">Stuck In Some Problems</h1>
        <div className="flex noscrollbar overflow-hidden w-full max-h-100vh snap-center snap-x snap-mandatory justify-evenly items-center">
{SolutionBlogs.map((item,index) => { return(
    <div key={index} className="flex hover:tracking-wider transition-all duration-500 flex-col bg-gray-950 text-white justify-center w-80 h-100 rounded-xl items-center p-8 gap-2">
        <Image src="/solution.webp" width={40} height={40} alt={item.tags}></Image>
        <h1 className="text-2xl font-bold">{item.blog_title}</h1>
        <h2 className="text-xl">{item.description}</h2>
    </div>
) })}
        </div>
    </div>
  )
}
