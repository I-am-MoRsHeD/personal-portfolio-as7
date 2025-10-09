"use server";

import { revalidateTag, revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const updateProjectAction = async (id: string, formData: FormData) => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('token')?.value;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/project/${id}`, {
        method: "PATCH",
        headers: {
            Cookie: `accessToken=${accessToken ?? ""}`
        },
        credentials: "include",
        body: formData,
    });

    const result = await res.json();

    if (result?.success) {
        revalidateTag("PROJECT");
        revalidatePath("/projects");
    }

    return result;
};


export const updateBlogAction = async (id: number, formData: FormData) => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('token')?.value;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${id}`, {
        method: "PATCH",
        headers: {
            Cookie: `accessToken=${accessToken ?? ""}`
        },
        credentials: "include",
        body: formData,
    });

    const result = await res.json();

    if (result?.success) {
        revalidateTag("BLOG");
        revalidatePath("/all-blogs");
    }

    return result;
};
