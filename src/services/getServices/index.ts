

export const getMe = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/me`, {
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
    const { data: blogs } = await res.json();
    return blogs;
};

