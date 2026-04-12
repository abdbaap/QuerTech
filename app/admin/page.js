"use client"; // This tells Next.js: "This part is interactive (buttons, typing)"

import { useState } from "react";
import { GeneratingFies } from "./6GeneratingFiles"; // Import our function from Step 2
import { GeneratingCodeUsingSummary } from "./makingCodeUsingGivenSummary";
import { MakingADeepSummaryOfTheVideo } from "./1makingPoints";
import { MakingSeoFriendlyMetaTagsForBlog } from "./2makingMetaTags";
import { GeneratingDeepCode } from "./3generatingcode";
import { DecidingTitleFolder } from "./4thinkingtitle";

import ListOFAllBlogs from "../blogData/listofallblogs"
export default function Home() {
  // State variables: like a "memory" for our component
  const [url, setUrl] = useState("");
  const [urlListForBlogGeneration, setUrlListForBlogGeneration] = useState([]) // Stores what you type in the box
  const [result, setResult] = useState({
    success: false,
    message: "",
    code: "",
    slug: ",",
  }); // Stores the summary from the AI
  const [loading, setLoading] = useState(false); // True while the AI is thinking
  const [category, setCategory] = useState("");
  const [Points, setPoints] = useState("");
  const [Message, setMessage] = useState("");
const [urlList, seturlList] = useState([])
const [urlListInCaseOfError, setUrlListInCaseOfError] = useState([])
  //
  
  const addMoreUrls=async() => { 
     setUrlListForBlogGeneration([...urlListForBlogGeneration,{url,category}])
     setUrl("")
     setCategory("")
   }


// 

  async function GenerateCodeUsingYoutubeVideo() {
  if (urlListForBlogGeneration.length === 0&&!url &&url.length<=0) {
    setMessage("Queue is empty!");
    return;
  }

  setLoading(true);
  
  // 1. Snapshot the queue locally
  const localQueue =urlListForBlogGeneration.length === 0?[{url,category}]: [...urlListForBlogGeneration];
  console.log("Starting batch for:", localQueue.length, "URLs");

  for (let i = 0; i < localQueue.length; i++) {
    const item = localQueue[i];
    
    try {
      setMessage(`Processing (${i + 1}/${localQueue.length}): ${item.url}`);
      console.log(`Working on item ${i + 1}:`, item.url);

      // --- LOGIC STEPS (Use 'item.url' and 'item.category', NOT state) ---
      
      const summary = await MakingADeepSummaryOfTheVideo(item.url);
      if (!summary || !summary.success) {
        console.error("Summary failed for:", item.url);
        setUrlListInCaseOfError([...urlListInCaseOfError,item.url])
        continue; 
      }

      const MetaTags = await MakingSeoFriendlyMetaTagsForBlog(summary.summary);
      
      const code = await GeneratingDeepCode(summary.summary, MetaTags.metaTags);
      if (!code || !code.success) {
        console.error("Code generation failed for:", item.url);
        setUrlListInCaseOfError([...urlListInCaseOfError,item.url])
        continue;
      }

      const TitleFolder = await DecidingTitleFolder(summary.summary);
      
      if (TitleFolder && TitleFolder.success) {
        // Use item.category directly from the queue object
        const output = await GeneratingFies(TitleFolder, code.FinalCode, item.category);
        
        const cleanSlug = TitleFolder.data.link.replace(/\//g, "");
        const finalSlug = cleanSlug.replace(/^\/+/, "");
        const finalUrl = `https://techvridha.vercel.app/${finalSlug}/index.html`;

        // --- UPDATE UI SAFELY ---
        
        setResult({
          code: code.FinalCode,
          message: output.message,
          slug: finalUrl,
          success: true,
        });

        if (output.success) {

          await fetch("/admin/apiforOtherProcess", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      url: finalUrl,
      category: item.category,
      summary: summary.summary,
      code: code.FinalCode,
      metaTags: MetaTags.metaTags,
      titleFolder: TitleFolder.data.titleFolder
    })
  });
          seturlList((prev) => {

            if (!prev.includes(finalUrl)) return [...prev, finalUrl];
           
            return prev;
          });
          console.log("Successfully processed:", cleanSlug);
        }
      }
      await setTimeout(() => {
        console.warn("Waiting 30 seconds before next item...");
      }, 30000);
    } catch (err) {
      console.error("CRITICAL ERROR on loop index", i, err);
      setUrlListInCaseOfError([...urlListInCaseOfError,item.url])
      setMessage(`Failed on ${item.url}. moving to next...`);
      // The 'continue' ensures the loop doesn't die
      continue; 
    }
  }

  // 2. Cleanup only after the ENTIRE 'for' loop finishes
  setUrlListForBlogGeneration([]);
  setLoading(false);
  setMessage("Batch process complete!");
  console.log("Batch process complete!");
return urlListForBlogGeneration
}



  // 
  //
  async function GenerateBlogUsingGivenSummary() {
    
      const MetaTags = await MakingSeoFriendlyMetaTagsForBlog(Points);

      setMessage(MetaTags.message);
      if (MetaTags.success) {
        const code = await GeneratingDeepCode(
          Points,
          MetaTags?.metaTags,
        );
        setMessage(code.message);
          if (code.success) {
          setResult({
            success: false,
            message: "Only Code Generation Was SUccessFull",
            code: code?.FinalCode,
            slug: ",",
          });

          const TitleFolder = await DecidingTitleFolder(Points);
          setMessage(TitleFolder.success);
             if (TitleFolder.success) {
            const output = await GeneratingFies(TitleFolder,code?.FinalCode,category);
            setMessage(output.message);
          
            const cleanSlug =await TitleFolder.data.link.replace(/^\/+/, "");
          setResult({
            code:code?.FinalCode,
            message:output.message,
            slug:`https://techvridha.vercel.app/${cleanSlug}/index.html`,
            success:true
          })
              if(output.success){
                const isUrlInList=await urlList.find(result.slug)
                 if(!isUrlInList){
                seturlList([...urlList,`https://techvridha.vercel.app/${cleanSlug}/index.html`])
                 }
              }
        }
      
    }
  }
  }


  // 
 async function AddingFOrIndexing() {
    // We call OUR server route, which doesn't have CORS issues
    const response = await fetch("/admin/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ urlList: urlList })
    });
    
    let fixedResponse= await response.json();
    setMessage(fixedResponse.message)
}
  // 



  return (
    <div className="flex w-screen flex-col justify-center items-center gap-16 p-32 bg-black text-white">
      <h1 className="text-4xl font-bold">Blog Generator Only For Admins</h1>
      {category.length <= 0 && (
        <div className="flex w-full p-16 gap-16 flex flx-col justify-center items-center">
          <button
            onClick={() => setCategory("aiblogssection")}
            className="bg-purple-700 rounded-xl p-6 text-white text-2xl font-bold"
          >
            Ai Blog
          </button>
          <button
            onClick={() => setCategory("courses")}
            className="bg-purple-700 rounded-xl p-6 text-white text-2xl font-bold"
          >
            Courses
          </button>
          <button
            onClick={() => setCategory("gaming")}
            className="bg-purple-700 rounded-xl p-6 text-white text-2xl font-bold"
          >
            gaming
          </button>
          <button
            onClick={() => setCategory("lifelessons")}
            className="bg-purple-700 rounded-xl p-6 text-white text-2xl font-bold"
          >
            lifeLessns
          </button>
          <button
            onClick={() => setCategory("techonology")}
            className="bg-purple-700 rounded-xl p-6 text-white text-2xl font-bold"
          >
            Motivation
          </button>
          <button
            onClick={() => setCategory("solution")}
            className="bg-purple-700 rounded-xl p-6 text-white text-2xl font-bold"
          >
            Solutions
          </button>
        </div>
      )}

      <div className="flex flex-col justify-center items-center w-full bg-orange-800 gap-8">
        <h2 className="text-2xl">Generate Blog Using Video Url</h2>

        <input
          type="text"
          placeholder="Paste YouTube Link here..."
          value={url}
          className="border-white border text-gray-50 rounded-2xl"
          onChange={(e) => setUrl(e.target.value)} // Update 'url' as you type
          style={{
            padding: "10px",
            width: "300px",
            marginRight: "10px",
            color: "black",
          }}
        />
        <button onClick={() => { addMoreUrls() }} className="bg-black rounded-xl text-white">Add More Urls</button>

        {category.length>0&&url.length>0&&<button
          onClick={() => GenerateCodeUsingYoutubeVideo()}
          className="text-xl text-white font-bold rounded-xl px-4 py-2"
        >
          Generate Now
        </button>}
        <div className="flex gap-4">
          <span>Successs</span>
          <div className="bg-pink-900 rounded-xl p-4">{result.success}</div>
          <div className="flex gap-4">
            <span>message</span>
            <span className="bg-amber-700 rounded-xl p-4">{Message}</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-red-700 w-full rounded-xl p-8">
       

      

        </div>
    <div className="bg-black text-white">
      <h1 className="text-xl font-bold">Add Urls For Indexing</h1>
      {ListOFAllBlogs.map((item,e) => { 
      if(!urlList.includes(`https://techvridha.vercel.app/${item.link}/index.html` ))  return  <div key={e}  onClick={()=>seturlList([...urlList,`https://techvridha.vercel.app/${item.link}/index.html`])} className="bg-white text-black rounded-xl font-bold">{item.link}</div>
       })}
    </div>
    
       <button onClick={()=>AddingFOrIndexing()} className="flex p-4 text-xl font-bold">Add For Indexing</button>
      </div>



      {/*  */}
      <div className="flex flex-col justify-center items-center w-full bg-orange-800 gap-8">
        <h2 className="text-2xl">Generate Blog Using summary</h2>

        <input
          type="text"
          placeholder="Paste Summary here..."
          value={url}
          className="border-white border text-gray-50 rounded-2xl"
          onChange={(e) => setPoints(e.target.value)} // Update 'url' as you type
          style={{
            padding: "10px",
            width: "300px",
            marginRight: "10px",
            color: "black",
          }}
        />

        {category.length>0&&Points.length>0&&<button
          onClick={() => GenerateBlogUsingGivenSummary()}
          className="text-xl text-white font-bold rounded-xl px-4 py-2"
        >
          Generate Now
        </button>}
        <div className="flex gap-4">
          <span>Successs</span>
          <div className="bg-pink-900 rounded-xl p-4">{result.success}</div>
          <div className="flex gap-4">
            <span>message</span>
            <span className="bg-amber-700 rounded-xl p-4">{Message}</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-red-700 w-full rounded-xl p-8">
       

      

        </div>
   
      </div>



      {/*  */}
      <h1>Result</h1>
      <iframe
        srcDoc={result.code}
        style={{ width: "100%", height: "500px", border: "1px solid #ccc" }}
        title="Generated Site"
      />
    </div>
  );
  }
