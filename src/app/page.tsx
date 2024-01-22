"use client"

import Image from "next/image";
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
 
type  UploadResult ={
  info: {
    public_id: string
  },
  
  event: 'success',

  
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <CldUploadButton
      onUpload={(result:UploadResult)=>{
        console.log(result.info.public_id)

      }}
      uploadPreset="wvn4e3g6" />
 
      <CldImage
        width="960"
        height="600"
        src="vgm1s5h0zyvnew7swlyx"
        sizes="100vw"
        alt="Description of my image"
      />
    </main>
  );
}
