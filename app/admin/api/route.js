// export const runtime = 'edge';
export const dynamic = 'force-dynamic'; // Add this line
import { google } from 'googleapis';
import { NextResponse } from "next/server";


 const jwtClient=new google.auth.JWT({
    email:process.env.client_email,
    key:process.env.private_key,
    scopes: ['https://www.googleapis.com/auth/indexing']
 }
    )

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
        console.log(`--- Google Response for ${url} ---`);
            console.log("Status Code:", response.status); 
            console.log("Data:", response.data);
    }
return {success:true,message:"Url Added SuccessFully To Crawl In Gsc"}
}
    catch (error) {
   return {success:false,message:error}
  }
}

// You can call this somewhere in your code to test:
// checkUrlStatus("https://quertech-articles.vercel.app/your-article-url");