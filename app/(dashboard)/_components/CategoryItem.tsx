import { Button } from "@/components/ui/button"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import qs from "query-string"
import { cn } from "@/lib/utils"

interface CategoryItemProps {
    label: string
    value? : string
}

const CategoryItem = ({label, value}: CategoryItemProps) => {

  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentCategoryId = searchParams.get("categoryId")
  const currentTitle = searchParams.get("title")
  const isSelected = currentCategoryId === value
  const onClick = ()=>{

 
  const url = qs.stringifyUrl({
    url: pathname,
    query:{
      title: currentTitle,
      categoryId : isSelected ? null : value
    }, 
   
  },
  {skipNull: true, skipEmptyString: true})
  router.push(url)
}
  return (
    <button className= {cn(
      "text-sm py-2 px-3 border rounded-full border-orange-500 flex  items-center gap-x-1 hover:border-orange-800 transition" ,
      isSelected && "border-orange-900 bg-orange-400 text-black"
    )}
    type="button"
    onClick={onClick}
    >
    <div className=" truncate">
        {label}
    </div>
    </button>
  )
}

export default CategoryItem