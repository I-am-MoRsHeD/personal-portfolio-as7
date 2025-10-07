import BlogManagementTable from '@/components/modules/Dashboard/BlogManagementTable';
import { getAllBlogs } from '@/services/getServices';
import React from 'react';

const BlogManagementPage = async () => {
    const blogs = await getAllBlogs();
    return (
        <div>
            <BlogManagementTable blogs={blogs} />
        </div>
    );
};

export default BlogManagementPage;