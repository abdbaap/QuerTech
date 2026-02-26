"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAiForDecidingTitle=new GoogleGenerativeAI(process.env.GEMINI_API_KEY4)
export async function DecidingTitleFolder(points) {
    
    const model=genAiForDecidingTitle.getGenerativeModel({ model: "gemini-2.5-flash",generationConfig:{
        responseMimeType:"application/json"
    } })

    const prompt=`Act as a Strategic Copywriter and Digital Marketer to generate a high-CTR, click-worthy link title for given summary. Craft a single, punchy title under 10 letters without any special characters  that utilizes compelling "Power Words" to immediately communicate the primary value proposition or the specific solution found in the content. The title must balance human curiosity with search relevance, ensuring it sounds authoritative rather than like generic clickbait. Avoid all filler and introductory phrasing to provide a direct, high-impact headline that maximizes click-through rates for given summary. and return me object as .json file format the object format should be exactly like this  {
    "blog_title": "Wordora AI Avatars",
    "link": "/wordoraaiavatars",
    "description": "Make your own digital twin! I found the best 30 AI avatar and talking head tools like HeyGen. Great for making YouTube videos or cool profile pics that actually look like you.",
    "tags": ["AI Avatars", "Digital Twins", "Talking Heads", "AI Video", "HeyGen"],
    color:"bg-amber-700 shadow-amber-400"
  } take this for example and the title u generated should be in place of link  and there should be random dark color of tailwind css in place of color with the shadow color s that it can create a neon effect ${points}`
    const content=await model.generateContent(prompt)
    const TitleForNewBlog=await content.response.text()
    console.log('title generation succedssfull')
    try{
 const jsonObject=JSON.parse(TitleForNewBlog)
    return { success: true, data: jsonObject };
  } catch (error) {
    console.error("Failed to parse JSON from AI:", error);
    return { success: false, error: "AI output was not valid JSON." };
  }
}