"use client"
import * as z from "zod"

import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"


import { Button } from "@/components/ui/button"
import { ImageIcon, Pencil, PlusCircle } from "lucide-react"
import toast from "react-hot-toast"

import { Blog } from "@prisma/client"
import Image from "next/image"
import FileUpload from "@/components/file-upload"
interface ImageFormProps {
    initialData :Blog
    
    blogId: string
}

const formSchema = z.object({
    imageUrl: z.string().min(1,{
        message: "Image is required "
    })
})
const ImageForm = ({initialData,blogId}: ImageFormProps) => {
    const [isEditing,setIsEditing]= useState(false)
    const router = useRouter()
    const toggleEdit = ()=>   setIsEditing((current)=> !current)
  
    const onSubmit = async(values:z.infer <typeof formSchema>)=>{

        try {
            await axios.patch(`/api/blogs/${blogId}`, values)
            toast.success("Blog updated successfuly")
            toggleEdit()
            router.refresh()
        } catch {
            toast.error("something went wrong")
        }

    }
  return (
    <div className=" mt-6 border bg-slate-100 rounded-md p-4">
        <div className=" font-medium flex items-center justify-between">
     Blog image
      <Button onClick={toggleEdit} variant= "ghost">
        {isEditing && (
            <>cancel</>
        )}
        {!isEditing && !initialData.imageUrl && (
            <>
            <PlusCircle className=" h-4 w-4 mr-2"/>
            </>
        )}
       
        {!isEditing && initialData.imageUrl && (
            <>
            <Pencil className=" h-4 w-4 mr-2"/>
            </>
        )}
       
      
      </Button>
        </div>
        {!isEditing && (
           !initialData.imageUrl ? (
            <div className=" flex items-center justify-center h-60 bg-slate-200 rounded-md">
                <ImageIcon className=" h-10 w-10 text-slate-500"/>

            </div>
           ):(
            <div className="relative aspect-video mt-2">
                <Image
                src={initialData.imageUrl}
                alt ="upload"
                fill
                className="object-cover rounded-md h-60 "
                
                />


            </div>
           )
        )}
        {isEditing && (
           <div>
            <FileUpload
            endpoint="blogImage"
            onChange={(url)=> {
                if(url){
                    onSubmit({imageUrl:url})
                }

            }}
            
            />

            <div className="text-xs text-muted-foreground mt-4">
                16.9 aspect ratio reccomended

            </div>
           </div>
        )}
        </div>
  )
}

export default ImageForm