
import Logo from "@/app/(dashboard)/_components/Logo"
import Link from "next/link"
import { auth } from "@clerk/nextjs"
import {redirect} from "next/navigation"
import Reactions from "./_components/Reactions"
import { db } from "@/lib/db"
import { getBlogById } from "@/actions/getBlogs"
import Image from "next/image"
interface BlogPageProps {
    children : React.ReactNode
    params: {
        blogId : string
    }
}
const BlogPage =  async({params}: BlogPageProps) => {

  const { userId} = auth()

  if (!userId) {
    return redirect("/")
  }
  const id = params.blogId
 const blogById = await getBlogById(id)
  
  if (!blogById) {
    return redirect("/")
}
  return (
    <div className=" h-full">
      <div className=" h-[80px] fixed w-full inset-y-0 z-50">
        <div className="  p-4 border-b h-full flex items-center bg-white shadow-sm">
          <div className="flex">
            <div className="h-auto">
              <Link href= "/">
              <Logo/>
              </Link>
              </div>
            </div>
           
          </div>
        </div>
        <div className="md:w-[60%] md:mx-auto mx-3 items-center justify-start mt-4 pt-[80px] h-full  ">
        <p className="  font-bold text-3xl leading-snug">{ blogById?.title}   </p>  
        <div className="my-6">
        <p className="text-sm text-black">   {blogById?.username && blogById?.username.charAt(0).toUpperCase() + blogById?.username.slice(1)}  </p>
        <span className=" flex space-x-2"> <p className=" "> Published in <span className="font-bold  hover:underline"> {blogById?.category?.name} </span></p> <span className=" "> on </span> <p className=""> { new Date(blogById.createdAt). toLocaleDateString('en-US', { month: 'short', day: 'numeric',year: "numeric" })} </p></span>
        </div>
        <div className=" w-full">
          <Reactions/>
        </div>

        <div className="">
          <p >{blogById?.description}</p>
        </div>
        <div className="  mt-4 flex justify-center">
         <Image 
           src=   {blogById?.imageUrl || "/logo.svg"}
           alt= "blog-image" 
           width={340}
           height={240}
           
           />
        </div>
        <div className="mt-4">
      {/* Splitting the blog content into paragraphs */}
      {blogById?.blogContent?.split('\n').map((paragraph, index) => (
        <p key={index} className="mb-4">{paragraph}</p>
      ))}
    </div>
        </div>
       

     
    </div>
  )
}

export default BlogPage