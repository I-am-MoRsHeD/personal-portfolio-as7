import SectionTitle from "@/components/shared/SectionTitle"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Project } from "@/types"
import { Edit, Trash2 } from "lucide-react"
import Link from "next/link"

export default function ProjectManagementTable({ projects }: { projects: Project[] }) {
    return (
        <div className="bg-background p-2 rounded-lg">
            <SectionTitle title="Project Management" />
            <Table>
                <TableHeader className="bg-transparent">
                    <TableRow className="hover:bg-transparent">
                        <TableHead>S.No/ID</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Live Link</TableHead>
                        <TableHead className="text-center">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <tbody aria-hidden="true" className="table-row h-2"></tbody>
                <TableBody className="[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg">
                    {projects?.map((project) => (
                        <TableRow
                            key={project.id}
                            className="odd:bg-muted/50 odd:hover:bg-muted/50 border-none hover:bg-transparent w-full"
                        >
                            <TableCell className="py-2.5 font-medium">{project.id}</TableCell>
                            <TableCell className="py-2.5">{project.title?.length > 20 ? project.title?.slice(0, 20) + "..." : project.title}</TableCell>
                            <TableCell className="py-2.5">
                                <Link href={project.liveLink} target="_blank" className="text-blue-600 underline">
                                    {project.liveLink?.length > 30 ? project?.liveLink?.slice(0, 30) + '.....' : project?.liveLink}
                                </Link>
                            </TableCell>
                            <TableCell className="py-2.5 flex items-center gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                // onClick={() => handleEdit(project.id)}
                                >
                                    <Edit size={16} className="mr-1" />
                                    Edit
                                </Button>

                                <Button
                                    variant="destructive"
                                    size="sm"
                                // onClick={() => handleDelete(project.id)}
                                >
                                    <Trash2 size={16} className="mr-1" />
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <tbody aria-hidden="true" className="table-row h-2"></tbody>
                <TableFooter className="bg-transparent">
                    <TableRow className="hover:bg-transparent">
                        <TableCell colSpan={4}>Total</TableCell>
                        <TableCell className="text-right">{projects?.length} Projects</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    )
}
