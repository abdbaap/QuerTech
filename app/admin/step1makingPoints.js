"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";
const GenAiForMakingSummary=new GoogleGenerativeAI(process.env.GEMINI_API_KEY)


export async function MakingADeepSummaryOfTheVideo(url) {

   try{ const modelForBuildingSummary=GenAiForMakingSummary.getGenerativeModel({ model: "gemini-2.5-flash" })

    const videoPart = {
      fileData: {
        fileUri: url,
        mimeType: "video/mp4"
      }
    };

    const prompt="Act as an expert Content Analyst and Technical Writer to analyze the content for given url and distill the video into a high-density, no-fluff summary that captures both the essence and the technical details. First, identify the video purpose and the speaker tone, then provide a concise executive summary of the core message in two to three sentences. Extract the most significant arguments, facts, or steps into a dense list focusing on the meat of the content while including specific statistics, unique terminology, or powerful quotes mentioned. Conclude with actionable insights that define the so what of the video. Use clear, professional language and strictly avoid filler phrases like the video says or the speaker talks about to ensure the response is direct and information-rich."
    const result= await modelForBuildingSummary.generateContent([prompt,videoPart])
    const summary=await result.response.text()
    console.log('summary generatio n Successfull ', summary)
    return {success:true,message:"there was an error generating the summary",summary}
}
catch (E){
    return {success:false,message:"there was an error generating the summary",E}
}
}