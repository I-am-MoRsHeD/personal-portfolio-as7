import BlogCard from '../../../components/modules/Blog/BlogCard';
import SectionTitle from '../../../components/shared/SectionTitle';
import { getAllBlogs } from '../../../services/getServices';
import { Blog } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog page',
    description: 'All the blogs which created by owner'
}

const AllBlogsPage = async () => {
    const blogs = await getAllBlogs();

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