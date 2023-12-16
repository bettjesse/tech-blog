import { Button } from "@/components/ui/button"
import Link from "next/link"

const MyBlogs = () => {
  return (
    <div>
      <Link href = "/blogs/myblogs/create-new">
      <Button>
        create blog
      </Button>
      </Link>
       </div>
  )
}

export default MyBlogs