import Image from 'next/image'
import React from 'react'
import "./aiblogssection.css"
const aiblogs=[
  {
    "blog_title": "Wordora AI Code Free",
    "link": "https://wordoraaicodefree.vercel.app/Blogs/wordoraaicodefree.html",
    "description": "Stop struggling with bugs! I've found the best 30 AI coding tools like Cursor and Windsurf that literally write code for you. Perfect for 'Vibe Coding' and building apps without deep syntax knowledge.",
    "tags": ["AI Coding", "Vibe Coding", "Agentic AI", "Free Code Tools", "2026 Tech Trends"],
    color:"bg-red-700 shadow-red-400"
  },
  {
    "blog_title": "Wordora AI Prompts",
    "link": "https://wordoraaiprompts.vercel.app/Blogs/wordoraaiprompts.html",
    "description": "Get perfect results from GPT-5 and Claude every time. This is a master library of prompts for every school and side project. No more mid outputs—just high-level prompt engineering made easy for students.",
    "tags": ["AI Prompts", "Prompt Engineering", "ChatGPT Hacks", "LLM Optimization", "Study Aids"],
    color:"bg-pink-700 shadow-pink-400"
  },
  {
    "blog_title": "Wordora AI Models",
    "link": "https://wordoraaimodels.vercel.app/Blogs/wordoraaimodels.html",
    "description": "Confused about which AI model to use? I compare the top 30 LLMs like Gemini 2.0 and Llama 4. Find out which one is the smartest for reasoning, math, or creative writing in seconds.",
    "tags": ["AI Models", "LLM Comparison", "Gemini 2", "Open Source AI", "Artificial Intelligence"],
    color:"bg-orange-700 shadow-orange-400"
  },
  {
    "blog_title": "Wordora AI Image Free",
    "link": "https://wordoraaiimagefree.vercel.app/Blogs/wordoraaiimagefree.html",
    "description": "Create insane aesthetic art for free. I’ve tested 30 tools like Midjourney and DALL-E 3 that turn your wildest ideas into high-res visuals. Perfect for social media and creative school projects.",
    "tags": ["AI Image Generator", "Free AI Art", "Text to Image", "Visual Design", "Midjourney Free"]
    ,
    color:"bg-purple-700 shadow-purple-400"
  },
  {
    "blog_title": "Wordora AI Video Free",
    "link": "https://wordoraaivideofree.vercel.app/Blogs/wordoraaivideofree.html",
    "description": "Text-to-video is the new meta. Check out the top 30 free tools like Sora and Runway to make viral clips and cinematic videos without an editor. High-quality AI video generation for everyone.",
    "tags": ["AI Video", "Sora AI", "Text to Video", "Content Creation", "Viral Video Tools"],
    color:"bg-blue-700 shadow-blue-400"
  },
  {
    "blog_title": "Wordora AI PPT",
    "link": "https://wordoraaippt.vercel.app/Blogs/wordoraaippt.html",
    "description": "Generate entire presentation decks in one click. I’ve picked 30 AI tools like Gamma that handle the design and content for you. It’s a total life-saver for class assignments and group projects.",
    "tags": ["AI PPT", "Gamma AI", "Presentation Hacks", "Student Productivity", "AI Design"],
    color:"bg-green-700 shadow-green-400"
  },
  {
    "blog_title": "Wordora Free AI (All-in-One)",
    "link": "https://wordorafreeai.vercel.app/Blogs/wordorafreeai.html",
    "description": "The ultimate AI 'everything' hub. I’ve mixed the best free tools from every category—text, image, and data—into one massive list. If you need a quick AI tool for anything, start here.",
    "tags": ["Best AI Tools", "Free AI Directory", "AI Toolkit", "Productivity", "Top AI 2026"]
    ,
    color:"bg-black"
  },
  {
    "blog_title": "Wordora AI Text",
    "link": "https://wordoraaitext.vercel.app/Blogs/wordoraaitext.html",
    "description": "Write better, faster. I’ve listed 30 AI text tools for summarizing long papers and writing SEO-friendly blogs. Beat writer's block instantly and get your essays done in half the time.",
    "tags": ["AI Writing", "Text Generator", "Essay Helper", "SEO Writing", "Content Creation"]
    ,
    color:"bg-pink-700 shadow-pink-400"
  },
  {
    "blog_title": "Wordora AI Design",
    "link": "https://wordoraaidesign.vercel.app/Blogs/wordoraaidesign.html",
    "description": "Pro-level design without the learning curve. These 30 AI tools handle logos, UI, and graphics automatically. It's the future of Generative UI and digital branding for your personal projects.",
    "tags": ["AI Design", "Generative UI", "Logo Maker", "Graphic Design", "Canva AI"],
    color:"bg-orange-700 shadow-orange-400"
  },
  {
    "blog_title": "Wordora AI Data",
    "link": "https://wordoraaidata.vercel.app/Blogs/wordoraaidata.html",
    "description": "Master data analysis without the headache. These top 30 AI tools turn messy numbers into clean charts and insights using the latest RAG technology. Perfect for research and smart decision-making.",
    "tags": ["AI Data", "Data Science", "RAG", "Predictive Analytics", "Research Tools"],
    color:"bg-green-700 shadow-green-400"
  },
  {
    "blog_title": "Wordora AI Avatars",
    "link": "https://wordoraaiavatars.vercel.app/Blogs/wordoraaiavatars.html",
    "description": "Make your own digital twin! I found the best 30 AI avatar and talking head tools like HeyGen. Great for making YouTube videos or cool profile pics that actually look like you.",
    "tags": ["AI Avatars", "Digital Twins", "Talking Heads", "AI Video", "HeyGen"],
    color:"bg-amber-700 shadow-amber-400"
  }
]
export default function Aiblogssection() {
  return (
       <div id='aiblogs' className="flex flex-col justify-center p-8 items-center gap-8 h-auto xl:h-screen text-center  w-full">
        <h1 className="text-4xl font-bold capitalize">enhance your performance with ai</h1>
        <div className="flex   h-auto xl:h-130 noscrollbar   justify-evenly items-center snap-mandatory snap-x overflow-x-scroll w-full gap-16    p-0  ">
      {aiblogs.map((item,i) => { 
        return <div key={i} className={`flex flex-col rounded-xl shrink-0 gap-2 z-0 hover:z-10 snap-center   p-8  shadow-2xs hover:shadow-xl justify-center text-center items-center w-80 h-110 hover:h-116 text-white ${item.color}`}>
            <Image src="/ai.webp" width={40} height={40} alt={item.tags}></Image>
            <h1 className="text-2xl">
                {item.blog_title}
            </h1>
            <h2 className="text-xl">
                {item.description}
            </h2>
        </div>
       })}
        </div>
      </div>
  )
}
