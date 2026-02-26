"use server";
import { MakingADeepSummaryOfTheVideo } from "./step1makingPoints";
import { MakingSeoFriendlyMetaTagsForBlog } from "./step2makingMetaTags";
import { GeneratingDeepCode } from "./step3generatingcode";
import { DecidingTitleFolder } from "./step4thinkingtitle";
import fs from "fs/promises"
import {addingBlogToSitemap} from "./step5addingBlogToHomepage"
import path from "path";
export async function GeneratingCodeUsingSummary(summary,category) {
  try {
    if(!category){
         return {  success: false,
      message: `no url or category given`,
      // code,
      // slug:FileName+
      }
    }
    // console.log('summary', summary)

      const metaTags = await MakingSeoFriendlyMetaTagsForBlog(summary);

      // console.log('metaTags.metaTags', metaTags.metaTags)

      if (metaTags.success && metaTags.metaTags.length > 1) {
        const code = await GeneratingDeepCode(summary, metaTags?.metaTags);




// console.log('code', code)

        const titleFolder = await DecidingTitleFolder(summary);

        // console.log('titleFolder', titleFolder)

        // FIX 4: Remove any leading slashes the AI might have added to the link (e.g., "/wordoraaiavatars")
        const cleanSlug = titleFolder.data.link.replace(/^\/+/, "");

        // FIX 5: The correct way to build the path, create the folder, and write the file
        const folderPath = path.join(process.cwd(), "public", cleanSlug);
        await fs.mkdir(folderPath,{recursive:true})
         await fs.writeFile(path.join(folderPath,"index.html"),code,"utf-8")

        // console.log('fileAdded')

         // adding files to homepage
         const BlogsData=path.join(process.cwd(),`app/blogData`,`${category}.json`)
         const fileContent=await fs.readFile(BlogsData,"utf-8")
       
         const previousBlogs=JSON.parse(fileContent)

         previousBlogs.unshift(titleFolder.data)
         await fs.writeFile(BlogsData,JSON.stringify(previousBlogs,null,2),"utf-8")

         const addingToSitemap=await addingBlogToSitemap(`${titleFolder.data.link}/index.html`)
        return {
          success: true,
          message: "Code Generated SuccessFully",
          code,
          slug: titleFolder.data.link,
        };
      }
      else{
        return {  success: false,
      message: `Meta Tags Generation Failed Generation Failed , error :::::   ${metaTags.e}`,
      // code,
      // slug:FileName+
      }
      }
      
    }
   catch (e) {
    return {
      success: false,
      message: `Code Generation Failed , error :::::   ${e}`,
      // code,
      // slug:FileName
    };
  }
}
