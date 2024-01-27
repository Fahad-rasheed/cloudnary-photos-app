"use client";
import { CldImage } from "next-cloudinary";
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { addAbortListener, addAbortSignal } from "stream";
import { addTags } from "./action";
const View = ({ src }: { src: string }) => {
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
        onClick= {() => {
          addTags(src);
        }}
        >
        <CiHeart className="w-8 h-8 cursor-pointer text-white
        hover:text-red-500 duration-300" />
        <IoMdHeart className="w-8 h-8 cursor-pointer text-red-500 duration-500" />
      </div>
    </div>
  )
}

export default View