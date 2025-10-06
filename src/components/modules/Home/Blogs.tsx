import SectionTitle from '@/components/shared/SectionTitle';
import React from 'react';
import BlogCard from '../Blog/BlogCard';
import Link from 'next/link';
import { Blog } from '@/types';

const Blogs = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog`, {
        next: {
            tags: ["BLOG"]
        }
    });
    const { data: blogs } = await res.json();

    return (
        <div className="my-10">
            <SectionTitle title="Blogs" />
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
                        blogs?.slice(0, 3)?.map((blog: Blog) => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))
                    )
                }
            </div>

            {blogs?.length > 3 && <div className="flex flex-row justify-center">
                <Link href="/all-blogs" className="bg-primary rounded-full py-2 px-4 text-white">
                    See all
                </Link>
            </div>}
        </div>
    );
};

export default Blogs;