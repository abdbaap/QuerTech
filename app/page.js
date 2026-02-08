import Image from "next/image";
import React from 'react'
import Herosection from "./components/herosection";
import Aiblogssection from "./components/aiblogssection";
import Courses from "./components/courses";
import LifeLessons from "./components/lifelessons";
import Gaming from "./components/gaming";
import Motivation from "./components/motivation";
import Solutions from "./components/solutions";


export default function Home() {
  return (
    <div className="flex flex-col  justify-center overflow-x-hidden gap-32 items-center w-screen">
      <Herosection/>
   <Aiblogssection/>
   <Courses/>
   <LifeLessons/>
   <Motivation/>
   <Gaming/>
   <Solutions/>
    </div>
  );
}
