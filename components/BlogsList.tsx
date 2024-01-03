import { BlogWithCategory } from "@/actions/getBlogs"
import { currentUser } from '@clerk/nextjs';
import { Save, MinusCircleIcon } from "lucide-react";
import Image from "next/image";
import { MoreHorizontal, Pencil} from "lucide-react"
import Link from "next/link";
import { Button } from "./ui/button";
import { DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,


} from "@/components/ui/dropdown-menu";

interface BlogsListProps {
    items : BlogWithCategory[]
}

const BlogsList = async({items}:BlogsListProps) => {
  const user = await currentUser()
  return (
    <div>{items.map((item,index)=>  (
        <div className="my-3 w-full" key={item.id}>
           <div  className={` flex  ${index !== items.length - 1 ? 'border-b border-gray-300' : ''}`}>
            <div className="w-3/4">

          <div className=" flex space-x-2">
         <p className="text-sm text-black"> {user?.firstName} </p>
         <p className="text-sm text-black"> {new Date(item.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric',year: "numeric" })} </p>
         
          </div>
          <div>
            <p className=" font-bold text-lg">{item.title}</p>
          </div>
         <p> {item.blogContent}</p>
          <div className=" mt-6 flex justify-between">
             <div className=" flex text-sm items-center space-x-4">
              <button className=" bg-gray-100 rounded-full px-3 ">{item.category?.name} </button>
              <p className=" "> 4 min read</p>
             </div>
             <div className="flex space-x-3 items-center cursor-pointer">
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
        <Image
        src= "/logo.svg"
        alt={item.title}
        width={130}
        height={130}
        
        />
         </div>
         </div>
    )
      
    )}</div>
  )
}

export default BlogsList