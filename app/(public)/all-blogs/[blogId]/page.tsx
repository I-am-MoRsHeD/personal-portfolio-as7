/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogDetailsCard from '../../../../components/modules/Blog/BlogDetailsCard';
import { getAllBlogs, getBlogById } from '../../../../services/getServices';
import { Blog } from '@/types';
import React from 'react';

interface IProps {
    params: Promise<any>
};

export const generateStaticParams = async () => {
    const blogs = await getAllBlogs();

    return blogs?.map((blog: Blog) => ({
        blogId: String(blog?.id)
    }));
};

export const generateMetadata = async ({ params }: IProps) => {
    const { blogId } = await params;
    const { data: blog } = await getBlogById(blogId);

    return {
        title: blog?.title,
        content: blog?.content?.slice(0, 10)
    };
};

const BlogDetailsPage = async ({ params }: IProps) => {
    const { blogId } = await params;
    const { data: blog } = await getBlogById(blogId);

    return (
        <div>
            <BlogDetailsCard blog={blog} />
        </div>
    );
};

export default BlogDetailsPage;