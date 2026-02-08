import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import "./lifelessons.css"
export default function LifeLessons() {
    const LifeLessons= [
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
//     {
//         blog_title:"Coming Soon",
//         description:"Stay Tuned",
//         // head: "Free Generative AI Video Editor",
//         // para: "Produce professional AI Video content at no cost. This free Generative AI tool supports multimodal storytelling and is essential for driving visibility in AI Citations and AI Mode Rankings.",
//         // link: "https://wordoraaivideofree.vercel.app",
//         // image_url: "https://placehold.co/400x300/6D28D9/ffffff?text=Generative+AI+Tools",
//         rotation: "rotate-5",
//         bg_color: "bg-pink-700"
//     },
//     {
//         blog_title:"Coming Soon",
//         description:"Stay Tuned",
//     //   head: "Central Hub for Free AI Tools",
//     //   para: "Access the best free Generative AI tools in one comprehensive hub. Explore solutions for text, image, and data. Your gateway to leveraging AI Agents and advanced automation features efficiently.",
//     //   link: "https://wordorafreeai.vercel.app",
//     //   image_url: "https://placehold.co/400x300/6D28D9/ffffff?text=Generative+AI+Tools",
//       rotation: "-rotate-3",
//       bg_color: "bg-purple-700"
//     },
//     {
//         blog_title:"Coming Soon",
//         description:"Stay Tuned",
//         // head: "Free LLM AI Code Generator",
//         // para: "Accelerate development with our Free AI Code Generator. Harness the power of a cutting-edge LLM for instant, accurate coding across languages. Essential for automation and deep learning projects.",
//         // link: "https://wordoraaicodefree.vercel.app",
//         // image_url: "https://placehold.co/400x300/6D28D9/ffffff?text=Generative+AI+Tools",
//         rotation: "-rotate-1",
//         bg_color: "bg-indigo-700"
//     },
//     {
//         blog_title:"Coming Soon",
//         description:"Stay Tuned",
//     //   head: "Free AI Text-to-Image Creation",
//     //   para: "Generate stunning visuals using our free Generative AI platform. Instantly convert prompts into art with powerful text-to-image deep learning. Perfect for boosting your AI Overviews presence.",
//     //   link: "https://wordoraaiimagefree.vercel.app",
//     //   image_url: "https://placehold.co/400x300/6D28D9/ffffff?text=Generative+AI+Tools",
//       rotation: "-rotate-2",
//       bg_color: "bg-violet-700"
//     },
//     {
//         blog_title:"Coming Soon",
//         description:"Stay Tuned",
//     // head: "Free AI-Powered Design & Branding",
//     // para: "Discover next-level Generative AI Design for logos and layouts. Optimise your brand assets using Multimodal AI. Achieve superior creative quality and high scores for Expertise, Authority, Trust (E-A-T).",
//     // link: "https://wordoraaidesign.vercel.app",
//     // image_url: "https://placehold.co/400x300/6D28D9/ffffff?text=Generative+AI+Tools",
//     rotation: "rotate-4",
//     bg_color: "bg-violet-600"
//   },
//   {
//     blog_title:"Coming Soon",
//     description:"Stay Tuned",
//     // head: "Compare TopFree  AI & LLM Models",
//     // para: "Explore the latest AI Models and LLMs for modern applications. Our platform provides comparisons for deep learning and Generative AI architectures, empowering intelligent automation and decision-making.",
//     // link: "https://wordoraaimodels.vercel.app",
//     // image_url: "https://placehold.co/400x300/6D28D9/ffffff?text=Generative+AI+Tools",
//     rotation: "rotate-2",
//     bg_color: "bg-fuchsia-700"
//   },
//   {
//     blog_title:"Coming Soon",
//     description:"Stay Tuned",
//     // head: "Free Real-Time AI Data Analysis",
//     // para: "Leverage Generative AI for advanced data analysis and insights. Process complex datasets in real-time and automate reporting. Convert raw data into actionable intelligence with trusted AI models.",
//     // link: "https://wordoraaidata.vercel.app",
//     // image_url: "https://placehold.co/400x300/6D28D9/ffffff?text=Generative+AI+Tools",
//     rotation: "-rotate-5",
//     bg_color: "bg-pink-600"
//   },
//   {
//     blog_title:"Coming Soon",
//     description:"Stay Tuned",
//     // head: "Free Advanced LLM Text Generator",
//     // para: "Create high-quality content instantly with our AI Text Generator. Powered by a leading LLM, this Generative AI tool excels at content optimization, perfectly aligning with conversational search trends for SEO.",
//     // link: "https://wordoraaitext.vercel.app",
//     // image_url: "https://placehold.co/400x300/6D28D9/ffffff?text=Generative+AI+Tools",
//     rotation: "rotate-0",
//     bg_color: "bg-indigo-600"
//   }
];
  return (
    <div id='Life Lessons' className="flex flex-col justify-center w-full p-8 h-full  gap-8 items-center">
        <h2 className="text-4xl font-bold">Improve Your Life</h2>
        <div className="flex flex-wrap justify-center items-center w-full LifeLessons h-full relative ">
      
            <div className="max-h-[200vh] xl:max-h-screen  overflow-y-scroll noscrollbar flex-wrap justify-center items-center w-full flex gap-32 p-16  relative">
          {LifeLessons.map((e,id) => { 
            return     <Link href="/" key={id} className={`aiCard hover:shadow-2xl hover:grow-[0.01] shadow hover:zoom-in-95 text-white relative p-8 flex justify-center items-center  rounded-xl w-[320px] flex-col ${e.bg_color} ${e.rotation}`}>
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