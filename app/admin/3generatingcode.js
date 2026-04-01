"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import path from "path";
import fs from "fs/promises"
const GenAiForGeneratingCode=new GoogleGenerativeAI(process.env.GEMINI_API_KEY3)
export async function GeneratingDeepCode(summary,metaTags) {

try{
    const modelForGeneratingCode=GenAiForGeneratingCode.getGenerativeModel({ model: "gemini-2.5-flash-lite" })


      const design="The design of this blog utilizes a sophisticated glassmorphic UI/UX aesthetic, characterized by a dark-themed, high-contrast palette of indigo (#6366f1), pink (#ec4899), and slate (#09172a), accented by animated ambient background orbs that provide a sense of depth and modernity. The typography relies on a clean, professional sans-serif stack led by 'SF Pro Display', using fluid scaling (via clamp) and a bold gradient-masked header to establish a clear visual hierarchy and high scannability. From an interaction design standpoint, the blog prioritizes user engagement through tactile hover effects—such as 3D card lifting and border-color transitions—and functional accessibility features like a floating theme toggle. Rather than using static photography, the imagery strategy employs CSS-generated geometric patterns and rank badges to create a distinct, tech-forward identity for each tool, ensuring the interface remains lightweight while visually reinforcing the AI-centric subject matter.  "





    const prompt=`Act as an expert Full-Stack Developer and UI/UX Designer to generate a complete, high-performance, single-file web solution incorporating HTML, CSS, and JS for given summary, meta tags, and design summary. First, integrate the provided meta tags exactly into the <head> section for SEO optimization. Then, interpret the design summary to build a precise visual layout using modern CSS (Flexbox/Grid), specific color palettes, and typography that matches the requested aesthetic. Translate the content from the  summary into a clean, structured HTML5 architecture that is fully responsive and mobile-first. Include all necessary interactivity and animations within a <script> tag using vanilla JavaScript to ensure the file remains self-contained and fast-loading. Ensure the code is well-commented, professional, and reflects a "premium" user experience that bridges the gap between the content's purpose and the user's design preferences for given summary, meta tags, and design summary. the design summary is ${design} the summary of topic is ${summary} and metatagssummary is ${metaTags} also my website homepage link is https://quertech-articles.vercel.app make sure the design is responsive for all the devices`

    const result= await modelForGeneratingCode.generateContent(prompt)
    const code =await result.response.text()
    const fixedCode=await code.split("<!DOCTYPE html>")[1]
   const Navbar=`<navbar style="display: flex;margin-bottom: 30px;  z-index: 40; justify-content: center; align-items: center; background-color: black; color: white; width: 100%; padding: 0.5rem 2rem;">
  <a href="https://quertech-articles.vercel.app" style="text-decoration: none; color: white; font-size: 3rem; font-weight: bold;">
    QuerTech
  </a>
</navbar>`

      const listOfAllBlogsPath=path.join(process.cwd(),"app/blogData/listofallblogs.json")
const fileData = await fs.readFile(listOfAllBlogsPath, "utf-8");
const ListOfAllBlogs = JSON.parse(fileData);
let allLinks=""
for (let i = 0; i < ListOfAllBlogs.length; i++) {
  allLinks+=`<a href="/${ListOfAllBlogs[i].link}">${ListOfAllBlogs[i].blog_title}</a>`
    
}
const FinalFooter=`<div style="display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 0.5rem; background-color: black; color: white; width: 100%; padding: 2rem;">
  ${allLinks}
</div>`
   const firstSplit = fixedCode.split("<body>");
        const headSection = firstSplit[0];
        const restOfCode = firstSplit[1];

        // Split the remaining part at body end
        const secondSplit = restOfCode.split("</body>");
        const mainContent = secondSplit[0];
        const closingTags = secondSplit[1];

        // 5. Final Assembly (No commas, just clean addition)
        const FinalCode = `<!DOCTYPE html>${headSection}<body>${Navbar}${mainContent}${FinalFooter}</body>${closingTags}`;
    console.log('Code Generation Successfull')
   
    return {success:true,message:"code  Generated SuccessFully",FinalCode}
}
catch (E){
  console.log('`there was an error generating the Summary, ${E}`', `there was an error generating the Summary, ${E}`)
    return {success:false,message:`there was an error generating the Code, ${E}`}
}
}
