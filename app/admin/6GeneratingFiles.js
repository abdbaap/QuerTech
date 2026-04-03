"use server";
import fs from "fs/promises"
import path from "path";
import { addingBlogToSitemap } from "./5addingBlogToSitemap";

export async function GeneratingFies(TitleFolder,code,category) {
  try {
    
        // console.log('titleFolder', titleFolder)

        // FIX 4: Remove any leading slashes the AI might have added to the link (e.g., "/wordoraaiavatars")
        const cleanSlug = TitleFolder.data.link.replace(/^\/+/, "").replace("/", "");

        // FIX 5: The correct way to build the path, create the folder, and write the file
        const folderPath = path.join(process.cwd(), "public", cleanSlug);
        await fs.mkdir(folderPath,{recursive:true})
         await fs.writeFile(path.join(folderPath,"index.html"),code,"utf-8")

        // console.log('fileAdded')

         // adding files to homepage
         const BlogsData=path.join(process.cwd(),`app/blogData`,`${category}.json`)
         const listOfAllBlogsPath=path.join(process.cwd(),"app/blogData/listofallblogs.json")
         const ListOfAllBlogs=await fs.readFile(listOfAllBlogsPath,"utf-8")
         const previousListOfBlogs=JSON.parse(ListOfAllBlogs)
         previousListOfBlogs.unshift(TitleFolder.data)
         await fs.writeFile(listOfAllBlogsPath, JSON.stringify(previousListOfBlogs, null, 2), "utf-8");
         const fileContent=await fs.readFile(BlogsData,"utf-8")
       
         const previousBlogs=JSON.parse(fileContent)

         previousBlogs.unshift(TitleFolder.data)
         await fs.writeFile(BlogsData,JSON.stringify(previousBlogs,null,2),"utf-8")

         const addingToSitemap=await addingBlogToSitemap(`${TitleFolder.data.link}/index.html`)
         return {success:true,message:"FIle Added SuccessfULLY"}
   
  } catch (e) {
    return {
      success: false,
      message: `fILE aDDING Failed  ${e}`,
      // code,
      // slug:FileName
    };
  }
}
