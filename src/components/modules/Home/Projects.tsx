import SectionTitle from '@/components/shared/SectionTitle';
import React from 'react';
import Link from 'next/link';
import ProjectCard from '../Project/ProjectCard';
import { Project } from '@/types';
import { getAllProjects } from '@/services/getServices';

const Projects = async () => {
    const projects = await getAllProjects();

    return (
        <div className="my-44">
            <SectionTitle title="Projects" />
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
                        projects?.slice(0, 2)?.map((project: Project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))
                    )
                }
            </div>

            {projects?.length > 2 && <div className="flex flex-row justify-center">
                <Link href="/projects" className="bg-primary rounded-full py-2 px-4 text-white">
                    See all
                </Link>
            </div>}
        </div>
    );
};

export default Projects;