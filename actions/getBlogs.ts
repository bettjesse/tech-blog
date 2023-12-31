
import { Category, Blog } from "@prisma/client";
import { db } from "@/lib/db";

export type BlogWithCategory = Blog & {
    category: Category | null;
};

type GetBlogs = {
    title: string;
    categoryId: string;
};

export const getBlogs = async ({ title, categoryId }: GetBlogs): Promise<BlogWithCategory[]> => {
    try {
        const blogs = await db.blog.findMany({
            where: {
                isPublished: true,
                title: {
                    contains: title,
                },
                categoryId,
            },
            include: {
                category: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        const mappedBlogs: BlogWithCategory[] = blogs.map((blog) => {
            return {
                ...blog,
                category: blog.category || null,
            };
        });

        return mappedBlogs;
    } catch (error) {
        console.log("[GET BLOGS]", error);
        return [];
    }
};
export const getBlogById = async (blogId: string): Promise<BlogWithCategory | null> => {
    try {
        const blog = await db.blog.findUnique({
            where: {
                id: blogId,
            },
            include: {
                category: true,
            },
        });

        if (!blog) {
            return null; // Return null if the blog with the given ID is not found
        }

        const blogWithCategory: BlogWithCategory = {
            ...blog,
            category: blog.category || null,
        };

        return blogWithCategory;
    } catch (error) {
        console.log("[GET BLOG BY ID]", error);
        return null;
    }
};
