"use server";

import { revalidateTag, revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function createProjectAction(formData: FormData) {
    try {
        const cookieStore = await cookies();
        const accessToken = cookieStore.get('token')?.value;
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/project/create`, {
            method: "POST",
            headers: {
                Cookie: `accessToken=${accessToken ?? ""}`
            },
            credentials: "include",
            body: formData,
        });

        const result = await res.json();

        if (result.success) {
            revalidateTag("PROJECT");
            revalidatePath("/projects");
        }
        return result;
    } catch (error) {
        console.error(error);
        return { success: false, message: "Failed to create project" };
    }
}

export async function createBlogAction(formData: FormData) {
    try {
        const cookieStore = await cookies();
        const accessToken = cookieStore.get('token')?.value;
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/create`, {
            method: "POST",
            headers: {
                Cookie: `accessToken=${accessToken ?? ""}`
            },
            credentials: "include",
            body: formData,
        });

        const result = await res.json();

        if (result.success) {
            revalidateTag("BLOG");
            revalidatePath("/all-blogs");
        }
        return result;
    } catch (error) {
        console.error(error);
        return { success: false, message: "Failed to create blog" };
    }
}
