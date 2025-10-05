import ProjectCard from '@/components/modules/Project/ProjectCard';
import SectionTitle from '@/components/shared/SectionTitle';
import { Project } from '@/types';
import React from 'react';

const ProjectPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/project`, {
        next: { tags: ["PROJECT"] }
    });
    const { data: projects } = await res.json();

    return (
        <div className='container mx-auto my-14'>
            <SectionTitle title='All Projects' />
            <div
                className={`my-10 grid gap-5 ${projects?.length < 2
                    ? "grid-cols-1 justify-items-center"
                    : "grid-cols-2"}`}
            >
                {
                    projects?.length < 1 ? (
                        <h1 className='text-2xl font-bold'>
                            This user has no project to show!
                        </h1>
                    ) : (
                        projects?.map((project: Project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))
                    )
                }
            </div>
        </div>
    );
};

export default ProjectPage;