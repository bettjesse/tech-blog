import { ThumbsUp , MessageCircleIcon, ArrowDownToLine } from "lucide-react"

const Reactions = () => {
  return (
    <div className=" my-8  border-t border-b text-3xl ">
        <div className=" ">
            <div className=" my-4 flex md:justify-between justify-around">
        <ThumbsUp/>
     <MessageCircleIcon/>
     <ArrowDownToLine />
     </div>

  
        </div>
    
    </div>
  )
}

export default Reactions