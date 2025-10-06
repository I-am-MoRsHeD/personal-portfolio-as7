import BlogCard from '@/components/modules/Blog/BlogCard';
import SectionTitle from '@/components/shared/SectionTitle';
import { Blog } from '@/types';
import React from 'react';

const AllBlogsPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog`, {
        next: {
            tags: ["BLOG"]
        }
    });
    const { data: blogs } = await res.json();

    return (
        <div className='container mx-auto my-14'>
            <SectionTitle title='All Blogs' />
            <div
                className={`my-10 grid gap-5 ${blogs?.length < 2
                    ? "grid-cols-1 justify-items-center"
                    : blogs?.length === 2
                        ? "sm:grid-cols-2 justify-items-center"
                        : "sm:grid-cols-2 lg:grid-cols-3"
                    }`}
            >
                {
                    blogs?.length < 1 ? (
                        <h1 className='text-2xl font-bold'>
                            This user has not posted any blogs yet!
                        </h1>
                    ) : (
                        blogs?.map((blog: Blog) => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))
                    )
                }
            </div>
        </div>
    );
};

export default AllBlogsPage;