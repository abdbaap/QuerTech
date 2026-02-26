"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";
const GenAiForMetaTags=new GoogleGenerativeAI(process.env.GEMINI_API_KEY2)
export async function MakingSeoFriendlyMetaTagsForBlog(summary) {

    try{

    const modelForMakingMetaTags=GenAiForMetaTags.getGenerativeModel({model:"gemini-2.5-flash"})

    const prompt=`Act as an SEO Specialist and Digital Marketer to generate a high-conversion metadata suite for the provided summary. Craft a compelling, click-worthy Meta Title under 60 characters and a Meta Description under 160 characters that addresses a specific user pain point, such as being tired of poor results or searching for the best tools, while highlighting the solution found in the content. Include a dedicated section for high-volume, long-tail SEO keywords and trending tags that bridge the gap between user intent and the summary topics. Ensure the language is punchy, avoids generic filler, and uses Power Words to increase Click-Through Rate (CTR). Focus on making the tags relevant for both search engine algorithms and human readers by integrating primary keywords naturally. Provide the output in a structured format ready for immediate CMS implementation for given summary. ${summary}`

    const result= await modelForMakingMetaTags.generateContent(prompt)

    const metaTags=await result.response.text()
    console.log('metaTags generation Successfull', metaTags)
    return {success:true,message:"there was an error generating the summary",metaTags}
    
}
catch(e){
    return {success:false,message:"there was an error generating the summary",e}
}

}