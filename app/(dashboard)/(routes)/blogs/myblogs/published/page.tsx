// import { auth, currentUser } from "@clerk/nextjs";
// import { MenuItem } from "@/components/MenuItems";
// import { redirect } from "next/navigation";
// import { usePathname } from "next/navigation";

// import { db } from "@/lib/db";
// import { Button } from "@/components/ui/button";


// const BlogRoutes = [
//   {
   
//     label: "Drafts",
//     href: "/blogs/myblogs/drafts",
//   },
//   {

//     label: "Published",
//     href: "/blogs/myblogs/published",
//   },
// ];
// const CoursesPage = async () => {
//   const { userId } = auth();
//   const authInfo = await currentUser()
//   const routes = BlogRoutes

//   console.log(authInfo); // Log the result to inspect it in the console

//   if (!userId) {
//     return redirect("/");
//   }

//   const blogs = await db.blog.findMany({
//     where: {
//       userId,
//     },
//     orderBy: {
//       createdAt: "desc",
//     },
//   });
//   const publishedBlogs = blogs.filter(blog => blog.isPublished=== true);

//   if (publishedBlogs.length === 0) {
//     return (
//    <div className=" w-full">
//          <div className=" w-3/4 mx-auto">
//       <div className="mt-2 flex justify-between ">
//       <h2 className=" text-3xl">
//                 Your stories
//               </h2>
//               <Button variant= "ghost">
//                 Write a blog
//               </Button>
//               </div>
//               <div className=" flex md:my-10 border-b">

//                 {routes.map((route)=>(
//                 <MenuItem
//                 key ={route.href}
//                 label= {route.label}
//                 href= {route.href}
//                 />
//                 ))}
               
//               </div>
//               </div>
//        <div className=" mx-auto w-3/4">
//         <h2 className="text-3xl mt-8">No published blogs yet</h2>
     
//       </div>
//       </div>
//     );
//   }



//   return ( 
//     <div className=" w-full">
//       <div className=" w-3/4 mx-auto">
//       <div className="mt-2 flex justify-between ">
//       <h2 className=" text-3xl">
//                 Your stories
//               </h2>
//               <Button variant= "ghost">
//                 Write a blog
//               </Button>
//               </div>
//               <div className=" flex md:my-10 border-b">

//                 {routes.map((route)=>(
//                 <MenuItem
//                 key ={route.href}
//                 label= {route.label}
//                 href= {route.href}
//                 />
//                 ))}
               
//               </div>
//               </div>
//       {blogs.map((blog)=> (

//         <div key = {blog.id} className=" "> 
        
//           <div className="   mx-auto w-3/4">
//             <div className="">
              
//         <p>{blog.blogContent}</p>
//         </div>
//         </div>
    
       

//         </div>
//       ))}
//     </div>
//    );
// }
 
// export default CoursesPage;


import { auth, currentUser } from "@clerk/nextjs";
import { MenuItem } from "@/components/MenuItems";
import { redirect } from "next/navigation";
import { usePathname } from "next/navigation";
import { Pencil} from "lucide-react"

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
  const publishedBlogs = blogs.filter((blog) => blog.isPublished === true);

  if (publishedBlogs.length === 0) {
    return (
      <div className=" w-full">
            <div className=" w-3/4 mx-auto">
           <div className="mt-2 flex justify-between ">
         <h2 className=" text-3xl">
                 Your stories
                   </h2>
                   <Button variant= "ghost">
             
                   Write a blog
                   <Pencil className="w-4 h-4 mx-2"/>
                   </Button>
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
          <div className=" w-3/4 mx-auto">
           <div className="mt-2 flex justify-between ">
         <h2 className=" text-3xl">
                 Your stories
                   </h2>
                   <Button variant= "ghost">
                   Write a blog
                   <Pencil className="w-4 h-4 mx-2"/>
                   </Button>
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
  <div  className={` mx-auto w-3/4 ${index !== publishedBlogs.length - 1 ? 'border-b border-gray-300' : ''}`}>
    <div className="mb-2">

      <p className="text-xl font-bold mb-2">{blog.title}</p>
      <p className="text-sm text-gray-700 mb-4">{blog.description}</p>
      <div className=" flex items-center space-x-2">
      <p className="text-sm text-gray-500">Published on: {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
       <Pencil className="w-4 h-4 cursor-pointer"/>
    </div>
    </div>
  </div>
  </div>
))}

    </div>
  );
};

export default CoursesPage;
