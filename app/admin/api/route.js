export const runtime = 'edge';
export const dynamic = 'force-dynamic'; // Add this line


import { NextResponse } from "next/server";

export async function POST(req) {
    const {urlList}=await req.json()
    const response =await fetch("https://www.bing.com/indexnow",{
        method:"POST",
        headers:{"Content-Type":"application/json ; charset=utf-8"},
        body:JSON.stringify({
            host:"quertech-articles.vercel.app",
            key:process.env.INDEXNOWKEY,
            keyLocation:`https://quertech-articles.vercel.app/${process.env.INDEXNOWKEY}.txt`,
            urlList:urlList
                })
    })
   if (response.ok) {
            return NextResponse.json({ success: true, message: "Added To Crawl" });
        } else {
            const errorText = await response.text();
            return NextResponse.json({ success: false, message: `Bing Error:   ${errorText}`, details: errorText }, { status: 400 });
        }
}
