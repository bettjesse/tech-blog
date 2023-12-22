"use client"

import ConfirmModal from "@/components/modals/confirm-modal"
import { Button } from "@/components/ui/button"
import { Trash } from "lucide-react"
import toast from "react-hot-toast"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"

interface ChapterActionProps {
    disabled: boolean
    blogId: string
    isPublished : boolean
}

const BlogActions = ({disabled, blogId , isPublished}:ChapterActionProps) => {
    const router = useRouter()

    const [isLoading, setIsloading] = useState(false)

    const publishUnpublish = async()=> {
        try {
if(isPublished){
    await axios.patch(`/api/blogs/${blogId}/unpublish`)
    toast.success("course unpublished")
}
else{
    await axios.patch(`/api/blogs/${blogId}/publish`)
    toast.success("course published")
}
router.refresh()
        } catch(error) {
   toast.error("something went wrong")

        }
        finally {
            setIsloading(false)
        }
      

    }
  const onDelete = async()=> {

  
    try {
        
        setIsloading(true)
     await axios.delete(`/api/blogs/${blogId}`)

     toast.success("blog deleted")
     router.refresh()
     router.push("/blogs/myblogs")

    } catch {
        toast.error("something went wrong")

    } finally {
        setIsloading(false)
    }
}
  
  return (
    <div className="flex items-center gap-x-2">

        <Button
        onClick={publishUnpublish}
        disabled= {disabled || isLoading}
        size= "sm"
        
        >
            {isPublished ? "unpublish" : "publish"}
        </Button>
        <ConfirmModal onConfirm={onDelete}>
        <Button size= "sm" disabled = {isLoading}>
            <Trash className=" w-4 h-4"/>
        </Button>
        </ConfirmModal>
        
    </div>
  )
}

export default BlogActions