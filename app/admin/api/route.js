// Add this line
import { google } from 'googleapis';

import { NextResponse } from "next/server";



const isLocal = process.env.NODE_ENV === 'development';

    if (isLocal) {
        try {
         const key = await import("./client_secret.json", {
            assert: { type: "json" } // Required in some environments for JSON
        });
            const jwtClient=new google.auth.JWT(
        key.client_email,
        undefined,
        key.private_key,
        ['https://www.googleapis.com/auth/indexing'],
        undefined
    )
         
            // 2. ONLY import the library if we are local.
            // This prevents Cloudflare from crashing during the build/deploy.
              } catch (error) {
            console.error("Local RabbitMQ Error:", error);
            return NextResponse.json({ success: false, error: "Local queue failed" }, { status: 500 });
        }
    }
 
export async function POST(req) {
    const {urlList}=await req.json()
   
    const response =await fetch("https://www.bing.com/indexnow",{
        method:"POST",
        headers:{"Content-Type":"application/json ; charset=utf-8"},
        body:JSON.stringify({
            host:"quertech-articles.vercel.app",
            key:process.env.INDEXNOWKEY,
            keyLocation:`https://techvridha.vercel.app/${process.env.INDEXNOWKEY}.txt`,
            urlList:urlList
                })
    })
    

    const indexUrlToGoogle=await notifyGoogle(urlList)
    if (indexUrlToGoogle.success&&response.ok){
        return NextResponse.json({ success: true, message: "Added To Crawl in Both " });
    }
    else{
         const errorText = await response.text();
            return NextResponse.json({ success: false, message: `Bing Error:   ${errorText},,,,,, Google Error:::${indexUrlToGoogle.message}`, details: errorText }, { status: 400 });
       
    }

   
}


async function notifyGoogle(urlList) {
    try{
        await jwtClient.authorize()
    for (let i = 0; i < urlList.length; i++) {
        const url = urlList[i];
        const response=await google.indexing('v3').urlNotifications.publish({
            auth:jwtClient,
            requestBody:{
                url:url,
                type:'URL_UPDATED',
            }
        })
    }
return {success:true,message:"Url Added SuccessFully To Crawl In Gsc"}
}
    catch (error) {
   return {success:false,message:error}
  }
             }
