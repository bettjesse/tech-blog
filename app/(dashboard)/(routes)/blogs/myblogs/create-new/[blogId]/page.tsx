import { auth } from "@clerk/nextjs"
import { db } from "@/lib/db"
import { redirect } from "next/navigation"
import IconBadge from "@/components/IconBadge"
import { LayoutDashboard } from "lucide-react"
import TitleForm from "./_components/TitleForm"
import DescriptionForm from "./_components/DescriptionForm"
import ImageForm from "./_components/ImageForm"

interface BlogIdProps {
    params:{
        blogId:string  
    }
}
const BlogIdPage =  async({params}:BlogIdProps) => {

    const {userId}= auth()
    if(!userId){

        return redirect("/")
    }
    const blog = await db.blog.findUnique({
        where:{
            id :params.blogId
        }
    })
    if(!blog){
        return redirect("/")
    }
    const requiredFields = [
        blog.title,
        blog.description,
        blog.imageUrl,
        blog.categoryId
    ]
    const totalFields =requiredFields.length
    const completedFields = requiredFields.filter(Boolean).length
    const completionText=(`${completedFields}/${totalFields}`)
  return (
    <div className="p-6 ">
        <div className=" flex items-center justify-between ">
            <div className="flex flex-col gap-y-2">
                <h1 className="text-2xl font-medium">
   Blog set up 
                </h1>
                <span className=" text-sm text-gray-900"> complete all fields {completionText} </span>
           

            </div>
          
        </div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
    <div>
        <div className="flex items-center gap-x-2">
            <IconBadge icon={LayoutDashboard}/>
            <h2 className=" text-xl">
                Cutomize your blog

            </h2>

        </div>
    </div>

</div>

<TitleForm
initialData = {blog}
blogId ={blog.id}

/>
<DescriptionForm
initialData = {blog}
blogId ={blog.id}

/>
<ImageForm
initialData = {blog}
blogId ={blog.id}

/>
    </div>
  )
}

export default BlogIdPage