import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";

interface Params {
    params: {
      blogId: string;
    };

}

export async function DELETE( req: Request,{ params}:Params) {
    try {

        const {userId}= auth()
        const { blogId } = params;
        if(!userId) {
            return new NextResponse("Unauthorized", {status:401})
        }

            const blog = await db.blog.findUnique({
                where :{
                    id: blogId,
                    userId: userId
                }
            })
  if (!blog) {
    return new NextResponse("Not found", {status: 404})
  }
  const deleteBlog = await db.blog.delete({
    where :{
        id: blogId
    }
  })
  return NextResponse.json(deleteBlog)
       
    }catch(error) {
        console.log("[BLOG-ID-DELETE]", error)
        return new NextResponse("Internal error", {status: 500})
    }
}

export async function PATCH( req: Request,{ params}:Params) {

    try {
        const { userId } = auth();
        const { blogId } = params;
        const values = await req.json()
        if (!userId) {
            return new NextResponse("Unauthorized ", { status: 401 });
        }
        const blog = await db.blog.update({
            where :{
                id : blogId,
            userId
            },
            data:{
                ...values
            }
            
        })
        return NextResponse.json(blog)
    } catch (error) {
        console.log("( [BLOG ID])", error);
        return new NextResponse("Internal Error", { status: 500 });

    }

}

