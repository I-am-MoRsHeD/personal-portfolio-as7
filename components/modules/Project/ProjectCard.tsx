import Image from "next/image";
import Link from "next/link";
import { ExternalLink, GitBranch } from "lucide-react";
import { Project } from "@/types";

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-[650px] max-w-full">
            {/* Thumbnail */}
            {project.thumbnail && (
                <div className="relative w-full h-60">
                    <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={false}
                    />
                </div>
            )}

            {/* Content */}
            <div className="flex flex-col justify-between flex-grow p-5">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        {project.title}
                    </h2>

                    <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                        {project.description}
                    </p>

                    <div>
                        <h3 className="font-semibold mb-2 text-gray-800">Features:</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                            {project.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-5 flex items-center justify-between pt-3 border-t border-gray-200">
                    {project.liveLink && (
                        <Link
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-blue-600 hover:underline text-sm"
                        >
                            <ExternalLink size={16} />
                            Live Demo
                        </Link>
                    )}

                    {project.projectLink && (
                        <Link
                            href={project.projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-gray-600 hover:text-gray-900 text-sm"
                        >
                            <GitBranch size={16} />
                            Source Code
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
