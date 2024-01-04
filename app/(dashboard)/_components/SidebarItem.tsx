"use client"

import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

interface SidebarItemsProps {

    icon : LucideIcon
    label : string
    href: string
}


const SidebarItem = ({icon : Icon,label, href}: SidebarItemsProps) => {
    const pathname = usePathname()
    const router = useRouter()

    const isActive = (pathname === "/" && href === "/"  ||
      pathname === href  ||
      pathname?.startsWith(`${href}/`)    )

      const onClick = ()=> {
        router.push(href)
      }
  return (
    <button
    onClick={onClick}
    type ="button"
    className= {cn(
        "flex items-center gap-x-2 text-blue-700 text-sm font-[500] pl-6 my-2 transition-all hover:text-blue-600 hover:bg-blue-200",
        isActive && "text-blue-700 bg-blue-200 hover:bg-sky-200 hover:text-blue-700"
    )}    
    >
        <div className="flex items-center gap-x-2 py-4"> 
              <Icon
              size ={22}
              className= {cn(
                "text-blue-500",
                isActive && "text-sky-700"
              )}
              
              />
              {label}
        </div>
        <div
        className= {cn(
            "ml-auto opacity-0 border-2",
            isActive && "opacity-100"
        )}
        />
    </button>
  )
}

export default SidebarItem