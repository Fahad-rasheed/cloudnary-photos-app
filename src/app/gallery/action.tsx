"use server"
import cloudinary from "cloudinary"

export async function addTags(public_id:string){
    await cloudinary.v2.uploader.add_tag("favourite",[public_id]); 
    
}