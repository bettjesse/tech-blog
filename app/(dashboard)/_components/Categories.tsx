"use client"




import { Category } from "@prisma/client";
import CategoryItem from "./CategoryItem";
import { useRef } from "react";
import { ArrowRightIcon } from "lucide-react";

interface CategoriesProps {
  items: Category[];
}

const Categories = ({ items }: CategoriesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (scrollOffset: number) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollWidth = container.scrollWidth;
      const containerWidth = container.clientWidth;
  
      // Calculate a dynamic scroll distance based on the container or item widths
      const scrollDistance = (scrollWidth - containerWidth) / items.length;
  
      container.scrollLeft += scrollDistance * scrollOffset;
    }
  };
  

  return (
    <div className="flex items-center w-full py-3 relative border-b">
      <div
        ref={containerRef}
        className="flex overflow-x-hidden w-[90%] mx-auto gap-x-2"
        style={{ scrollBehavior: "smooth" }}
      >
        {items.map((item) => (
          <CategoryItem key={item.id} label={item.name} value={item.id} />
        ))}
      </div>
      <button
        className="absolute left-0 top-0 bottom-0 text-xl  px-2"
        onClick={() => handleScroll(-2)}
      >
     &lt;
      </button>
      <button
        className="absolute right-0 top-0 bottom-0  text-xl px-2"
        onClick={() => handleScroll(2)}
      >
        &gt;
      </button>
    </div>
  );
};

export default Categories;
