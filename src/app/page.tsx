"use client";


import { CldImage } from 'next-cloudinary';
import { CldUploadButton } from 'next-cloudinary';
import { useState } from 'react';

interface UploadImage {
  event: "success";
  info: { public_id: string };
}

export default function Home() {
  //  use state to change Image
  const [imageId, setImageId] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/*  Upload Button */}
      <CldUploadButton
        uploadPreset="wvn4e3g6"
        onUpload={(result) => {
          let res = result as UploadImage
          setImageId(res.info.public_id);
        }}

      />
      {/* View Image */}
      {imageId && (
        <CldImage
          width="400"
          height="300"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </main>
  );
}
