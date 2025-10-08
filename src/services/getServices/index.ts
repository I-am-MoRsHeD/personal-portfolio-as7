'use server';

import { cookies } from "next/headers";

export const getMe = async () => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('accessToken')?.value;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/me`, {
        headers: {
            Cookie: `accessToken=${accessToken ?? ""}`
        },
        credentials: "include"
    });
    const { data } = await res.json();

    return data;
};


export const getAllProjects = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/project`, {
        next: {
            tags: ["PROJECT"]
        }
    });
    const { data: projects } = await res.json();
    return projects;
};

export const getAllBlogs = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog`, {
        next: {
            tags: ["BLOG"]
        }
    });

    if (!res.ok) {
        console.error("Failed to fetch blog:", res.status, await res.text());
        return [];
    }

    const { data: blogs } = await res.json();
    return blogs;
};

export const getBlogById = async (blogId: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${blogId}`);

    if (!res.ok) {
        console.error("Failed to fetch blog:", res.status, await res.text());
        return {};
    }

    return await res.json();
};


