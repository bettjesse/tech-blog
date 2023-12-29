import { truncateContent } from "@/lib/truncateContent";

import { auth, currentUser } from "@clerk/nextjs";
import { MenuItem } from "@/components/MenuItems";
import { redirect } from "next/navigation";
import { usePathname } from "next/navigation";
import { MoreHorizontal, Pencil} from "lucide-react"
import Link from "next/link";

import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,


} from "@/components/ui/dropdown-menu";



const BlogRoutes = [
  {
    label: "Drafts",
    href: "/blogs/myblogs/drafts",
  },
  {
    label: "Published",
    href: "/blogs/myblogs/published",
  },
];

const CoursesPage = async () => {
  const { userId } = auth();
  const authInfo = await currentUser();
  const routes = BlogRoutes;

  console.log(authInfo);

  if (!userId) {
    return redirect("/");
  }

  const blogs = await db.blog.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const publishedBlogs = blogs.filter((blog) => blog.isPublished === true);

  if (publishedBlogs.length === 0) {
    return (
      <div className=" w-full">
            <div className=" w-3/4 mx-auto">
           <div className="mt-2 flex justify-between ">
         <h2 className=" text-3xl">
                 Your stories
                   </h2>
                   <Link href = "/blogs/create-new">
                   <Button variant= "ghost">
             
                   Write a blog
                   <Pencil className="w-4 h-4 mx-2"/>
                   </Button>
                   </Link>
                  </div>
                   <div className=" flex md:my-10 border-b">
      
                     {routes.map((route)=>(
                    <MenuItem
                    key ={route.href}
                    label= {route.label}
                    href= {route.href}
                    />
                     ))}
                     
                   </div>
                  </div>
           <div className=" mx-auto w-3/4">
            <h2 className="text-2xl mt-8">No published blogs yet</h2>
           
          </div>
          </div>
    );
  }

  return (
    <div className="w-full">
          <div className="md:w-3/4 md:mx-auto">
           <div className="mt-2 flex justify-between ">
         <h2 className=" text-3xl">
                 Your stories
                   </h2>
                   <Link href= "/blogs/create-new">
                   <Button variant= "ghost">
                   Write a blog
                   <Pencil className="w-4 h-4 mx-2"/>
                   </Button>
                   </Link>
                  </div>
                   <div className=" flex md:my-10 border-b">
      
                     {routes.map((route)=>(
                    <MenuItem
                    key ={route.href}
                    label= {route.label}
                    href= {route.href}
                    />
                     ))}
                     
                   </div>
                  </div>
                  {publishedBlogs.map((blog, index) => (
  <div key={blog.id} className={`py-4 `}>
  <div  className={` md:mx-auto w-[80%] md:w-3/4 ${index !== publishedBlogs.length - 1 ? 'border-b border-gray-300' : ''}`}>
    <div className="mb-2">
<div className=" flex items-center justify-between gap-x-2 ">
  <div className="ml-2"> 
  <Link href=  {`/blogs/create-new/${blog.id}`}>  <p className="md:text-xl font-bold mb-2">{blog.title}</p> </Link>
      <p className="text-sm text-gray-700 mb-4">{ truncateContent(blog.blogContent, 90)}</p>
      <div className=" flex items-center space-x-2">
      <p className="text-sm text-gray-500 mr-3">Published on: {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
       {/* <Link href=  {`/blogs/create-new/${blog.id}`}><Pencil className="w-4 h-4 cursor-pointer"/> </Link> */}
       <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant= "ghost" className=" h-4 w-4 p-0">
            <span  className=" sr-only"> open Menu</span>
           <MoreHorizontal/>
          </Button>

        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <Link href= {`/blogs/create-new/${blog.id}`}>
          <DropdownMenuItem>
            <Pencil className=" h-4 w-4 mr-2"/>
            Edit
          </DropdownMenuItem>
          </Link>

        </DropdownMenuContent>
       </DropdownMenu>
    </div>
   
    </div>
    <div>
      <Image
      src= "/logo.svg"
      alt=" bacdrop"
      height={50}
      width={50}
      
      />
    </div>
    </div>
  </div>
  </div>
  </div>
))}

    </div>
  );
};

export default CoursesPage;
