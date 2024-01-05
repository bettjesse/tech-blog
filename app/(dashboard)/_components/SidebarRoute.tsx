"use client"

import { Book, Compass, Folder, Layout, PlusCircle, Target } from "lucide-react"
// import Sidebar from "./Sidebar"
import SidebarItem from "./SidebarItem"
import { usePathname } from "next/navigation"

const guestRoutes = [
    {
        icon : Layout,
        label: "Blogs",
        href :"/"
    },
  
    {
        icon : PlusCircle,
        label: "Write",
        href : "/blogs/create-new"
    },
    {
        icon : Book,
        label: "MyBlogs",
        href : "/blogs/myblogs/published"
    },
    
]
const adminRoutes = [
    {
        icon : Folder,
        label: "Categories",
        href :"/admin/categories"
    },
    {
        icon : Target,
        label: "Topics",
        href : "/admin/topics"
    }
]

const SidebarRoute = () => {
    const pathname = usePathname()
    const isAdminPage = pathname.includes("/admin")
    const routes =  isAdminPage ? adminRoutes : guestRoutes

    
  return (
    <div className=" flex flex-col w-full">
    { routes.map((route)=>
    <SidebarItem
    key ={route.href}
    icon = {route.icon}
    label = {route.label}
    href= {route.href}

    
    />
    )}
        </div>
  )
}

export default SidebarRoute