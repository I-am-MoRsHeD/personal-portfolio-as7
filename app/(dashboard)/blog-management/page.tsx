import BlogManagementTable from '../../../components/modules/Dashboard/BlogManagementTable';
import { getAllBlogs } from '../../../services/getServices';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Blog Management page',
    description: 'Manage all the blogs from here'
}

const BlogManagementPage = async () => {
    const blogs = await getAllBlogs();
    return (
        <div>
            <BlogManagementTable blogs={blogs} />
        </div>
    );
};

export default BlogManagementPage;