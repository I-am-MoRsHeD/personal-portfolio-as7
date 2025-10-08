'use client'
import SectionTitle from "../../shared/SectionTitle"
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "../../ui/table";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../../ui/alert-dialog";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../ui/dialog"
import { Project } from "@/types"
import { Edit, Trash2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import EditProjectForm from "./EditProjectForm";
import { deleteProjectAction } from "../../../actions/delete";
import { toast } from "sonner";

export default function ProjectManagementTable({ projects }: { projects: Project[] }) {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleModal = (idx: number, project: Project) => {
        setSelectedProject(project);
        if (idx === 1) {
            console.log('hitt');
            setIsEditModalOpen(true);
        };
        if (idx === 2) {
            setIsDeleteModalOpen(true);
        };
    };

    const handleDeleteProject = async (id: string) => {
        const toastId = toast.loading('Deleting project....');
        try {
            const result = await deleteProjectAction(id);
            if (result?.success) {
                toast.success(result?.message, { id: toastId });
            } else {
                toast.error(result?.message, { id: toastId });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="bg-background p-2 rounded-lg w-full overflow-x-auto">
            <SectionTitle title="Project Management" />
            <div className="w-full">
                <Table className="w-full table-auto border-collapse">
                    <TableHeader className="bg-transparent w-full">
                        <TableRow className="hover:bg-transparent w-full">
                            <TableHead>S.No/ID</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Live Link</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <tbody aria-hidden="true" className="table-row h-2"></tbody>

                    <TableBody className="[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg">
                        {projects?.map((project) => (
                            <TableRow
                                key={project.id}
                                className="odd:bg-muted/50 odd:hover:bg-muted/50 border-none hover:bg-transparent"
                            >
                                <TableCell className="py-2.5 font-medium">{project.id}</TableCell>
                                <TableCell className="py-2.5">{project.title?.length > 15 ? project.title?.slice(0, 15) + "..." : project.title}</TableCell>
                                <TableCell className="py-2.5">
                                    <Link href={project.liveLink} target="_blank" className="text-blue-600 underline">
                                        {project.liveLink?.length > 20 ? project?.liveLink?.slice(0, 20) + '.....' : project?.liveLink}
                                    </Link>
                                </TableCell>
                                <TableCell className="py-2.5 flex items-center gap-2 justify-end">
                                    {/* update project form */}
                                    <Dialog>
                                        <DialogTrigger
                                            className="flex items-center bg-background py-1 px-2 rounded-md"
                                            onClick={() => handleModal(1, project)}>
                                            <Edit size={16} className="mr-1" />
                                            Edit
                                        </DialogTrigger>
                                        {isEditModalOpen && <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle></DialogTitle>
                                                <EditProjectForm project={selectedProject as Project} setIsModalOpen={setIsEditModalOpen} />
                                            </DialogHeader>
                                        </DialogContent>}
                                    </Dialog>
                                    {/* delete project */}
                                    <AlertDialog>
                                        <AlertDialogTrigger
                                            className="flex items-center bg-destructive text-white py-1 px-2 rounded-md"
                                            onClick={() => handleModal(2, project)}>
                                            <Trash2 size={16} className="mr-1" />
                                            Delete
                                        </AlertDialogTrigger>
                                        {isDeleteModalOpen && <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    This action cannot be undone. This will permanently delete your project from server.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction onClick={() => handleDeleteProject(project?.id)}>Continue</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>}
                                    </AlertDialog>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <tbody aria-hidden="true" className="table-row h-2"></tbody>
                    <TableFooter className="bg-transparent">
                        <TableRow className="hover:bg-transparent">
                            <TableCell colSpan={3}>Total</TableCell>
                            <TableCell className="text-right">{projects?.length} Projects</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </div>
    )
}
