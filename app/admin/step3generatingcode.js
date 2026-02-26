"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";
const GenAiForGeneratingCode=new GoogleGenerativeAI(process.env.GEMINI_API_KEY3)
export async function GeneratingDeepCode(summary,metaTags) {


    const modelForGeneratingCode=GenAiForGeneratingCode.getGenerativeModel({ model: "gemini-2.5-flash" })


      const design="The design of this blog utilizes a sophisticated glassmorphic UI/UX aesthetic, characterized by a dark-themed, high-contrast palette of indigo (#6366f1), pink (#ec4899), and slate (#09172a), accented by animated ambient background orbs that provide a sense of depth and modernity. The typography relies on a clean, professional sans-serif stack led by 'SF Pro Display', using fluid scaling (via clamp) and a bold gradient-masked header to establish a clear visual hierarchy and high scannability. From an interaction design standpoint, the blog prioritizes user engagement through tactile hover effects—such as 3D card lifting and border-color transitions—and functional accessibility features like a floating theme toggle. Rather than using static photography, the imagery strategy employs CSS-generated geometric patterns and rank badges to create a distinct, tech-forward identity for each tool, ensuring the interface remains lightweight while visually reinforcing the AI-centric subject matter.  "





    const prompt=`Act as an expert Full-Stack Developer and UI/UX Designer to generate a complete, high-performance, single-file web solution incorporating HTML, CSS, and JS for given summary, meta tags, and design summary. First, integrate the provided meta tags exactly into the <head> section for SEO optimization. Then, interpret the design summary to build a precise visual layout using modern CSS (Flexbox/Grid), specific color palettes, and typography that matches the requested aesthetic. Translate the content from the  summary into a clean, structured HTML5 architecture that is fully responsive and mobile-first. Include all necessary interactivity and animations within a <script> tag using vanilla JavaScript to ensure the file remains self-contained and fast-loading. Ensure the code is well-commented, professional, and reflects a "premium" user experience that bridges the gap between the content's purpose and the user's design preferences for given summary, meta tags, and design summary. the design summary is ${design} the summary of topic is ${summary} and metatagssummary is ${metaTags}`

    const result= await modelForGeneratingCode.generateContent(prompt)
    const code =await result.response.text()
    const fixedCode=await code.split("<!DOCTYPE html>")[1]
    console.log('Code Generation Successfull')
    return fixedCode
}