import { db } from "@/lib/db"
import Categories from "../_components/Categories"
import SearchInput from "@/components/SearchInput"
import { getBlogs } from "@/actions/getBlogs"
import { auth } from "@clerk/nextjs"
import {redirect} from "next/navigation"
import BlogsList from "@/components/BlogsList"


interface SearchPageProps {
  searchParams :{
    title: string,
    categoryId : string
  }
}
const page = async({searchParams}: SearchPageProps) => {
  const { userId}= auth()
  if (!userId) {
    return redirect("/")
  }

  const categories = await db.category.findMany({
    orderBy :{
      name: "asc"
    }
  })
  
  const blogs = await getBlogs({...searchParams})
  console.log("[BLOGS]", blogs)
  return (
    <>
    <div className="px-6 pt-6 md:hidden md:mb-0 block">
      <SearchInput/>

    </div>
    <div className="p-6"> 
       <Categories
       items = {categories}
       
       />
       <BlogsList items ={blogs} />
    </div>
    </>
  )
}

export default page