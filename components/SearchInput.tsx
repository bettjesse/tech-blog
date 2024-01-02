"use client"
import { Search } from "lucide-react"
import qs from "query-string"
import {Input} from "@/components/ui/input"
import { useDebounce } from "@/app/hooks/useDebounce"
import { useEffect, useState } from "react"
import { useRouter,useSearchParams, usePathname } from "next/navigation"


const SearchInput = () => {
  const [value, setValue]= useState("")
  const debouncedValue = useDebounce(value)

  const searchParams = useSearchParams()
  const router = useRouter()
  const patname = usePathname()
  const currentCategoryId = searchParams.get("categoryId")

  useEffect(()=> {
    const url = qs.stringifyUrl({
      url: patname,
      query:{
        categoryId: currentCategoryId,
        title: debouncedValue
      },

    },  {skipEmptyString: true, skipNull: true})
    router.push(url)
  },[router, debouncedValue, currentCategoryId, patname])
  return (
    <div className=" relative">
      <Search className="absolute top-3 left-3 w-4 h-4 text-red-600"/>
      <Input 
      value={value}
      onChange={(e)=> setValue(e.target.value)}
      
      className="w-full md:w-[300px] pl-9 rounded-full focus-visible:ring-red-200 bg-red-100"
      placeholder=" Search for a blog"
      
      />
    
    </div>
  )
}

export default SearchInput