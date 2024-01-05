import { BlogWithCategory } from "@/actions/getBlogs"
import Link from "next/link";
import { currentUser } from '@clerk/nextjs';
import { Save, MinusCircleIcon } from "lucide-react";
import Image from "next/image";
import { MoreHorizontal, Pencil} from "lucide-react"

import { Button } from "./ui/button";
import { DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,


} from "@/components/ui/dropdown-menu";
import { truncateContent } from "@/lib/truncateContent";

interface BlogsListProps {
    items : BlogWithCategory[]
}

const BlogsList = async({items}:BlogsListProps) => {
  const user = await currentUser()
  return (

    <div>
    <div>{items.map((item,index)=>  (
        
        <div className="my-3 " key={item.id}>
            <Link href= {`blogs/${item.id}`}>
           <div  className={` flex md:w-[85%] ${index !== items.length - 1 ? 'border-b border-gray-300' : ''}`}>
            <div className="w-full">

          <div className=" flex  items-center my-3 space-x-2">
         <p className="text-sm text-black">   {item.username && item.username.charAt(0).toUpperCase() + item.username.slice(1)} . </p>
         {/* <span>.</span> */}
         <p className="text-sm text-black"> {new Date(item.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric',year: "numeric" })} </p>
         
          </div>
       
          <div className="flex  md:flex-row md:justify-between md:items-center">
  <div className="md:w-[90%]">
    <p className="font-bold text-lg md:text-xl">{item.title && item.title.charAt(0).toUpperCase() + item.title.slice(1)}</p>
    <p className="hidden md:block">{truncateContent(item.blogContent,  150)}</p>
   
  </div>
  <div>
    <Image
      src={item.imageUrl || "/logo.svg"}
      alt={item.title}
      width={200}
      height={200}
    />
  </div>
</div>

   
          <div className="md:my-8 my-6 flex justify-between w-full md:w-3/4">
             <div className=" hidden md:flex text-sm items-center space-x-4">
              <button className=" bg-orange-400 text-sm rounded-full md:px-3 px-3 ">{  item.category?.name} </button>
              <p className=" "> 4 min read</p>
             </div>
             <div className=" md:hidden flex text-sm items-center space-x-4">
              <button className=" bg-orange-400 text-sm rounded-full md:px-3 px-3 ">{ truncateContent( item.category?.name, 10)} </button>
              <p className=" "> 4 min read</p>
             </div>
             <div className="flex space-x-4 items-center cursor-pointer">
             <Save/>
             <MinusCircleIcon/>
            
             <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant= "ghost" className=" h-4 w-4 p-0">
            <span  className=" sr-only"> open Menu</span>
           <MoreHorizontal/>
          </Button>

        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {/* <Link href= {`/blogs/create-new/${blog.id}`}> */}
          <DropdownMenuItem>
            <div className=" flex flex-col gap-y-2">
           <p> Mute this Author</p> 
           <p> Report</p> 
           </div>
          </DropdownMenuItem>
          {/* </Link> */}

        </DropdownMenuContent>
       </DropdownMenu>
             </div>
          </div>

        </div>
      
         </div>
         </Link>
         </div>
        
    )
      
    )}</div>
  {items.length === 0 && (
    <div className="text-center text-sm text-muted-foreground mt-10">
      No blogs found

    </div>
  )}
    </div>
    
  )
}

export default BlogsList