"use client";
import { CldImage } from "next-cloudinary";
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { useState } from "react";
import { AddTags } from "./action";



const View = ({ src, tag }: { src: string; tag: string[] }) => {
  const [fav, setfav] = useState(tag.includes("favourite"));
  return (


    <div className="relative">
      <CldImage
        className="rounded-sm"
        width="400"
        height="300"
        src={src}
        sizes="100vw"
        alt="Description of my image"
      />

      <div className="absolute top-1 right-1"
        onClick={() => {
          AddTags(src, fav);
        }}
      >
        {fav ? (
        <CiHeart className="w-8 h-8 cursor-pointer text-white
        hover:text-red-500 duration-300" />
        ) : (
        <IoMdHeart className="w-8 h-8 cursor-pointer text-red-500 duration-500" />
        )}


      </div>
    </div>
  )
}

export default View