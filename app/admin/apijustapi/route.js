import listofallBlogs from"@/app/blogData/listofallblogs.json"
import { NextResponse } from "next/server";

export async function GET(req) {
    console.warn("in fetch request of checking url list for blog generation");
    // console.log('listofallBlogs, type ', listofallBlogs, typeof listofallBlogs);
    
    let arrayOfUrlsWhichAreDamaged=[]
    for (let i = 0; i < listofallBlogs.length; i++) {
        const element = listofallBlogs[i].link;
        
        let request=await fetch(`https://techvridha.vercel.app/${element}/index.html`)
        if (!request.ok||request.status!==200){ 
            arrayOfUrlsWhichAreDamaged.push(`https://techvridha.vercel.app/${element}/index.html`)
            console.warn(`URL ${element} is damaged. Status: ${request.status}`);
        }
        
        
    }
    
    console.warn("done with  fetch request of checking url list for blog generation",arrayOfUrlsWhichAreDamaged);
    return NextResponse.json({ success: true, message: "Checked Url List For Blog Generation", data: arrayOfUrlsWhichAreDamaged });
    
 

    
 

} 