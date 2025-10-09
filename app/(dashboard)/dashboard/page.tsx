import DashboardCard from '@/components/modules/Dashboard/DashboardCard';
import SectionTitle from '@/components/shared/SectionTitle';
import { getAllBlogs, getAllProjects } from '@/services/getServices';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'A simple dashboard showcasing information'
}

const DashboardPage = async () => {
  const projects = await getAllProjects();
  const blogs = await getAllBlogs();

  return (
    <div>
      <SectionTitle title='Own Dashboard' />
      <div className='grid grid-cols-12 gap-4 w-full'>
        <div className='col-span-12 flex flex-row w-full gap-4'>
          <DashboardCard
            title='Projects'
            length={projects.length}
          />
          <DashboardCard
            title='Blogs'
            length={blogs.length}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;