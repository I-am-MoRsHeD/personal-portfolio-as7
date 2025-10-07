import ProjectManagementTable from '@/components/modules/Dashboard/ProjectManagementTable';
import { getAllProjects } from '@/services/getServices';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Project Management page',
    description: 'Manage all the projects from here'
}

const ProjectManagementPage = async () => {
    const projects = await getAllProjects();

    return (
        <div>
            <ProjectManagementTable projects={projects} />
        </div>
    );
};

export default ProjectManagementPage;