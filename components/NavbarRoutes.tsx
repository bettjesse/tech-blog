"use client"
import { UserButton } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import {Button} from "@/components/ui/button"
import { LogOut } from "lucide-react"
import Link from "next/link"
import SearchInput from "./SearchInput"
const NavbarRoutes = () => {

  const pathname = usePathname()


  const isAdmin = pathname?.startsWith("/admin")
  const isBlogPage = pathname?.includes("/blogs")
  const isSearchPage = pathname === "/";
  return (
    <>
    {isSearchPage && (
      <div className="  md:block">
        <SearchInput/>
      </div>
    )}
    <div className=" flex gap-x-2 ml-auto">
      {isAdmin  || isBlogPage ? (
        <Link href= "/">
        <Button>
          <LogOut className="h-4 w-4 mr-2"/>
          Exit
        </Button>
        </Link>
      ):(
        <Link href= "/admin/categories">
       
        </Link>
      )}
        <UserButton afterSignOutUrl="/"/>
        </div>
        </>
  )
}

export default NavbarRoutes