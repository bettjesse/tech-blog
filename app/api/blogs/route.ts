import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs";
import { db } from "@/lib/db";


export const POST = async (req: Request) => {
    try {
        const { userId } = auth();
        const user = await currentUser()
        console.log("TESTING USER",user)
        const { title } = await req.json();

        if (!userId) {
            return new NextResponse('Unauthorized', { status: 401 });
        }
        const username =  `${user?.firstName} ${user?.lastName}`;
        const blog = await db.blog.create({
            data: {
                userId,
                title,
                username
            },
        });

        return NextResponse.json(blog);
    } catch (error) {
        console.log('[COURSES]', error);
        return new NextResponse('Internal Error', { status: 500 });
    }
};
