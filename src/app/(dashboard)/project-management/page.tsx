import ProjectManagementTable from '@/components/modules/Dashboard/ProjectManagementTable';
import { getAllProjects } from '@/services/getServices';

const ProjectManagementPage = async () => {
    const projects = await getAllProjects();

    return (
        <div>
            <ProjectManagementTable projects={projects} />
        </div>
    );
};

export default ProjectManagementPage;