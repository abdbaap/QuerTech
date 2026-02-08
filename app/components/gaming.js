import Image from 'next/image';
import React from 'react'
import "./aiblogssection.css"
   const GamingBlogs= [
  {
    blog_title:"Coming Soon",
    description:"Stay Tuned",
    // head: "Free Pro AI Voice & TTS Generator",
    // para: "Unlock real-time audio with our Generative AI Text-to-Speech (TTS). Achieve high content optimization for multimodal applications using natural AI voice models for superior user experience.",
    // link: "https://wordoraaitexttospeech.vercel.app",
    // image_url: "https://placehold.co/400x300/6D28D9/ffffff?text=Generative+AI+Tools",
    rotation: "rotate-1",
    bg_color: "bg-indigo-600"
  },
  {
    blog_title:"Coming Soon",
    description:"Stay Tuned",
    // head: "Free Automated AI Presentation Maker",
    // para: "Streamline workflows with our AI Presentation Generator. Quickly transform data into polished slides using LLM and Generative AI automation. Focus on strategy, not manual design tasks.",
    // link: "https://wordoraaippt.vercel.app",
    // image_url: "https://placehold.co/400x300/6D28D9/ffffff?text=Generative+AI+Tools",
    rotation: "-rotate-4",
    bg_color: "bg-fuchsia-600"
  },
  {
    blog_title:"Coming Soon",
    description:"Stay Tuned",
    //   head: "Free Hyper-Realistic AI Avatar Studio",
    //   para: "Create lifelike AI Avatars for media and presentations. Leverage multimodal search and Generative AI techniques to develop digital humans. Enhance your brand's E-A-T authority and appeal.",
    //   link: "https://wordoraaiavatars.vercel.app",
    //   image_url: "https://placehold.co/400x300/6D28D9/ffffff?text=Generative+AI+Tools",
      rotation: "rotate-3",
      bg_color: "bg-purple-600"
    },
//    
];
export default function Gaming() {
  return (
    <div className="flex w-full text-center p-8 flex-col justify-center items-center bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 animate-gradient gap-8 xl:p-32 ">
      <h2 className="text-4xl font-bold text-white">Confuse About Gaming</h2>
      <div className="flex justify-evenly items-center noscrollbar overflow-x-scroll w-full gap-16 snap-x snap-mandatory">
{GamingBlogs.map((item,index) => { 
  return (
    <div key={index} className="flex flex-none text-white  justify-between snap-center items-center w-110 h-110 shrink-0">
      <div className="flex shadow-sm hover:shadow-2xl  card glassmorphismeffect flex-col justify-center items-center w-85 rounded-xl shrink-0 h-full gap-2 p-8">
        <Image src="/gaming.webp" width={40} height={40} alt={item.description}></Image>
        <h1 className="text-2xl ">{item.blog_title}</h1>
        <h2 className="text-xl">{item.description}</h2>
      </div>
      <div className="line h-full w-2 bg-white rounded-xl"></div>
    </div>
  )
 })}
      </div>
    </div>
  )
}
