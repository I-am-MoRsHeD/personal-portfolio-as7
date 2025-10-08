'use server';

import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";


export const deleteProjectAction = async (id: string) => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('accessToken')?.value;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/project/${id}`, {
        method: "DELETE",
        headers: {
            Cookie: `accessToken=${accessToken ?? ""}`
        },
        credentials: "include"
    });

    const result = await res.json();

    if (result?.success) {
        revalidateTag("PROJECT");
        revalidatePath("/projects");
    };

    return result;
};


export const deleteBlogAction = async (id: number) => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('accessToken')?.value;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${id}`, {
        method: "DELETE",
        headers: {
            Cookie: `accessToken=${accessToken ?? ""}`
        },
        credentials: "include"
    });

    const result = await res.json();

    if (result?.success) {
        revalidateTag("BLOG");
        revalidatePath("/all-blogs");
    };

    return result;
};
