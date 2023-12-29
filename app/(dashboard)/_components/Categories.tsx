"use client"

import { Category } from "@prisma/client"
import CategoryItem from "./CategoryItem"

interface CategoriesProps {
    items : Category[]
}
const Categories = ({items}: CategoriesProps) => {
  return (
    <div className=" items-center gap-x-2 flex overflow-x-auto pb-2">
        
        {items.map((item)=> (
            <CategoryItem
            key = {item.id}
            label= {item.name}
            value = {item.id}
            
            
            />
        ))}
    </div>
  )
}

export default Categories