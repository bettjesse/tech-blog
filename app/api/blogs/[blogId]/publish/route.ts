import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"

interface Params {
    params: {
        blogId: string
    }
}

export const PATCH =async (req: Request, { params}:Params)=> {
    try {
        const {userId}= auth()
        if (!userId) {
            return new NextResponse("Unauthorized", {status:401})
        }
        const blog = await db.blog.findUnique({
            where : {
                id : params.blogId,
                userId
            }
        })
        if (!blog) {
            return new NextResponse("Not found", {status:404})
        }
        if (!blog.blogContent || !blog.categoryId || !blog.description || !blog.title){
            return new NextResponse("Missing required field", {status :401})
        }

        const publishBlog = await db.blog.update({
            where: {
                id: params.blogId,
                userId
            },
            data:{
                isPublished: true
            }
        })
        return NextResponse.json(publishBlog)
    }catch (error){
        console.log(error)
        return new NextResponse("Internal error", {status: 500})
    }

}