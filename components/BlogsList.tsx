import { BlogWithCategory } from "@/actions/getBlogs"



interface BlogsListProps {
    items : BlogWithCategory[]
}

const BlogsList = ({items}:BlogsListProps) => {
  return (
    <div>{items.map((item)=>  (
        <div key={item.id}>
{item.title}
        </div>
    )
      
    )}</div>
  )
}

export default BlogsList