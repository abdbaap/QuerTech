import React from "react";

import { Pixelify_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    img: "/ai.webp",
    name: "Ai",
    color: "shadow-orange-400 bg-orange-700",
  },
  {
    img: "/courses.webp",
    name: "courses",
    color: "shadow-red-400 bg-red-700",
  },
  {
    img: "/education.webp",
    name: "Life Lessons",
    color: "shadow-purple-400 bg-purple-700",
  },
  {
    img: "/motivation.webp",
    name: "motivation",
    color: "shadow-pink-400 bg-pink-700",
  },
  {
    img: "/gaming.webp",
    name: "gaming",
    color: "shadow-blue-400 bg-blue-700",
  },
  {
    img: "/solution.webp",
    name: "solution",
    color: "shadow-green-400 bg-green-700",
  },
];
const Pixelify_sans = Pixelify_Sans({
  weight: "600",
  subsets: ["latin"],
});
export default function Herosection() {
  return (
    <div id="#home" className="herosection text-white w-full gap-32 bg-black justify-center items-center flex flex-col text-center xl:p-16 p-2">
      <h1 className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 animate-gradient font-bold capitalize space-y-1 overflow-hidden ">
        <span> Easy Tips and Life Hacks to Help You Stay Ahead in </span>{" "}
        <span className={`${Pixelify_sans.className}`}> Tech</span>
        <span> and</span>{" "}
        <span className={`${Pixelify_sans.className}`}> School.</span>
      </h1>
      <div className="flex flex-wrap  justify-evenly items-center">
        {categories.map((item, i) => {
          return (
            <Link href={`#${item.name}`}
              key={i}
              className={`flex  card border-2 border-gray-900 mx-16 -my-12 z-0  flex-col w-60 h-80  shadow-2xs hover:shadow-2xl justify-center items-center  p-16 rounded-xl ${item.color}`}
            >
              <Image
                src={item.img}
                width={80}
                height={80}
                alt="explore"
              ></Image>
              <h1 className="text-3xl capitalize font-bold">{item.name}</h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
