import Image from "next/image";
import React from 'react'
import Herosection from "./components/herosection";
import Aiblogssection from "./components/aiblogssection";

// import SolutionBlog from "./components/Solution";
import CoursesBlog from "./components/courses";
import MotivationBlog from "./components/motivation";
import GamingBlog from "./components/gaming";
import LifeLessonsBlog from "./components/lifelessons";
import SolutionsBlog from "./components/solution";


export default function Home() {
  return (
    <div className="flex flex-col  justify-center overflow-x-hidden gap-32 items-center w-screen">
      <Herosection/>
   <Aiblogssection/>
   <CoursesBlog/>
   <LifeLessonsBlog/>
   <MotivationBlog/>
   <GamingBlog/>
   <SolutionsBlog/>
    </div>
  );
}
