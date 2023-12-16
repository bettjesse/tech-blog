import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";

interface Params {
    params: {
      blogId: string;
    };

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
