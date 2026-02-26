"use client"; // This tells Next.js: "This part is interactive (buttons, typing)"

import { useState } from "react";
import { GeneratingCode } from "./makingCode"; // Import our function from Step 2
import { GeneratingCodeUsingSummary } from "./makingCodeUsingGivenSummary";
export default function Home() {
  // State variables: like a "memory" for our component
  const [url, setUrl] = useState("");      // Stores what you type in the box
  const [result, setResult] = useState({
    success:false,
    message:"",
    code:"",
    slug:","
  }); // Stores the summary from the AI
  const [loading, setLoading] = useState(false); // True while the AI is thinking
const [category, setCategory] = useState("")
const [Points, setPoints] = useState("")
  async function handleButtonClick() {
    setLoading(true); // Show "Loading..." status
    
    // Call the server function we wrote in Step 2
    const response = await GeneratingCode(url,category);
 
if(response.success){
  

  setResult(response); // Save the summary to show on screen
  setLoading(false)
  }
  else{
    setResult({
      message:`${response.message}`
    })
  }
  }
  async function GenerateBlogUsingGivenSummary() {
    const response=await GeneratingCodeUsingSummary(Points,category)
    setResult(response)
  }

  return (
    <div className="bg-white text-black w-screen py-16 flex flex-col justify-center items-center" style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>YouTube AI Summarizer</h1>
      <div className="bg-purple-700 w-full text-white rounded-xl">
      {/* The Input Box */}
      <input 
        type="text" 
        placeholder="Paste YouTube Link here..."
        value={url}
        onChange={(e) => setUrl(e.target.value)} // Update 'url' as you type
        style={{ padding: '10px', width: '300px', marginRight: '10px', color: 'black' }}
      />
      </div>
      <div className="bg-blue-800 text-white rounded-xl">
        <h1 className="text-3xl">Enter Points And Get The Blog</h1>
         <input 
        type="text" 
        placeholder="Paste Your summary here..."
        value={Points}
        onChange={(e) => setPoints(e.target.value)} // Update 'url' as you type
        style={{ padding: '10px', width: '300px', marginRight: '10px', color: 'black' }}
      />
      <button onClick={GenerateBlogUsingGivenSummary} className="bg-yellow-500 text-red-900 text-2xl font-bold rounded-xl">Get Using Summary</button>
      </div>
      {category.length<=0 && <div className="flex w-full p-16 gap-16 flex flx-col justify-center items-center">
<button onClick={()=>setCategory("aiblogssection")} className="bg-purple-700 rounded-xl p-6 text-white text-2xl font-bold">Ai Blog</button>
<button onClick={()=>setCategory("courses")} className="bg-purple-700 rounded-xl p-6 text-white text-2xl font-bold">Courses</button>
<button onClick={()=>setCategory("gaming")} className="bg-purple-700 rounded-xl p-6 text-white text-2xl font-bold">gaming</button>
<button onClick={()=>setCategory("lifelessons")} className="bg-purple-700 rounded-xl p-6 text-white text-2xl font-bold">lifeLessns</button>
<button onClick={()=>setCategory("motivation")} className="bg-purple-700 rounded-xl p-6 text-white text-2xl font-bold">Motivation</button>
<button onClick={()=>setCategory("solution")} className="bg-purple-700 rounded-xl p-6 text-white text-2xl font-bold">Solutions</button></div>}
      {/* The Button */}
    <video src={url}></video>
      <button 
        onClick={handleButtonClick}
        disabled={loading}
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        {loading ? "Summarizing..." : "Get Summary"}
      </button>

      {/* The Result Box (only shows if there is a result) */}
  
        <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f0f0f0', color: 'black' }}>
          <h3>Summary:</h3>
          <p style={{ whiteSpace: 'pre-wrap' }}>{result.message}</p>
        </div>
      
      <iframe 
      srcDoc={result.code} 
      style={{ width: '100%', height: '500px', border: '1px solid #ccc' }} 
      title="Generated Site"
    />
    </div>
    
  );
}