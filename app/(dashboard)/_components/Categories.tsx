"use client"

// import { Category } from "@prisma/client"
// import CategoryItem from "./CategoryItem"

// interface CategoriesProps {
//     items : Category[]
// }
// const Categories = ({items}: CategoriesProps) => {
//   return (
//     <div className=" items-center gap-x-2 flex overflow-x-auto pb-2">
        
//         {items.map((item)=> (
//             <CategoryItem
//             key = {item.id}
//             label= {item.name}
//             value = {item.id}
            
            
//             />
//         ))}
//     </div>
//   )
// }

// export default Categories

// import { Category } from "@prisma/client";
// import CategoryItem from "./CategoryItem";
// import { useState } from "react";

// interface CategoriesProps {
//   items: Category[];
// }

// const Categories = ({ items }: CategoriesProps) => {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   const handleScroll = (scrollOffset: number) => {
//     const container = document.getElementById("categories-container");
//     if (container) {
//       const newPosition = scrollPosition + scrollOffset;
//       container.scrollLeft = newPosition;
//       setScrollPosition(newPosition);
//     }
//   };

//   return (
//     <div className="flex items-center gap-x-2 pb-2 relative">
//       <div
//         id="categories-container"
//         className="flex overflow-x-hidden gap-x-2"
//         style={{ scrollBehavior: "smooth" }}
//       >
//         {items.map((item) => (
//           <CategoryItem
//             key={item.id}
//             label={item.name}
//             value={item.id}
//           />
//         ))}
//       </div>
//       <button
//         className="absolute left-0 top-0 bottom-0 bg-gray-200 px-2"
//         onClick={() => handleScroll(-300)}
//       >
//         &lt;
//       </button>
//       <button
//         className="absolute right-0 top-0 bottom-0 bg-gray-200 px-2"
//         onClick={() => handleScroll(300)}
//       >
//         &gt;
//       </button>
//     </div>
//   );
// };

// export default Categories;


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
