"use client"

import { Compass, Layout } from "lucide-react"
import Sidebar from "./Sidebar"
import SidebarItem from "./SidebarItem"

const guestRoutes = [
    {
        icon : Layout,
        label: "Dashboard",
        href :"/"
    },
    {
        icon : Compass,
        label: "Search",
        href : "/search"
    }
]
const SidebarRoute = () => {
    const routes = guestRoutes

    
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