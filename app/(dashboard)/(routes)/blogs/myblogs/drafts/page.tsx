


import { auth, currentUser } from "@clerk/nextjs";
import { MenuItem } from "@/components/MenuItems";
import { redirect } from "next/navigation";
import { usePathname } from "next/navigation";
import { Pencil} from "lucide-react"
import Link from "next/link";

import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";

// // Function to remove HTML tags
// const stripHtmlTags = (html: string) => {
//   return html.replace(/<[^>]*>/g, ''); // This regex matches any HTML tag and replaces it with an empty string
// };



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
  const drafts = blogs.filter((blog) => blog.isPublished === false);

  if (drafts.length === 0) {
    return (
      <div className=" w-full">
            <div className=" w-3/4 mx-auto">
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
           <div className=" mx-auto w-3/4">
            <h2 className="text-2xl mt-8">No drafts yet</h2>
           
          </div>
          </div>
    );
  }

  return (
    <div className="w-full">
          <div className=" w-3/4 mx-auto">
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
                  {drafts.map((draft, index) => (
  <div key={draft.id} className={`py-4 `}>
  <div  className={` mx-auto w-3/4 ${index !== drafts.length - 1 ? 'border-b border-gray-300' : ''}`}>
    <div className="mb-2">

    <Link href=  {`/blogs/create-new/${draft.id}`}>   <p className="text-xl font-bold mb-2">{draft.title}</p> </Link>
      <p className="text-sm text-gray-700 mb-4">{draft.description}</p>
      <div className=" flex items-center space-x-2">
      <p className="text-sm text-gray-500">Created on: {new Date(draft.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
      <Link href=  {`/blogs/create-new/${draft.id}`}>  <Pencil className="w-4 h-4 cursor-pointer"/> </Link>
    </div>
    </div>
  </div>
  </div>
))}


    </div>
  );
};

export default CoursesPage;
