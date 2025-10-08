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
import { Blog } from "@/types"
import { Edit, Trash2 } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner";
import EditBlogForm from "./EditBlogForm";
import { deleteBlogAction } from "../../../actions/delete";

export default function BlogManagementTable({ blogs }: { blogs: Blog[] }) {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

    const handleModal = (idx: number, Blog: Blog) => {
        setSelectedBlog(Blog);
        if (idx === 1) {
            console.log('hitt');
            setIsEditModalOpen(true);
        };
        if (idx === 2) {
            setIsDeleteModalOpen(true);
        };
    };

    const handleDeleteBlog = async (id: number) => {
        const toastId = toast.loading('Deleting blog....');
        try {
            const result = await deleteBlogAction(id);
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
            <SectionTitle title="Blog Management" />
            <div className="w-full">
                <Table className="w-full table-auto border-collapse">
                    <TableHeader className="bg-transparent w-full">
                        <TableRow className="hover:bg-transparent w-full">
                            <TableHead>S.No/ID</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Content</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <tbody aria-hidden="true" className="table-row h-2"></tbody>

                    <TableBody className="[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg">
                        {blogs?.map((blog) => (
                            <TableRow
                                key={blog.id}
                                className="odd:bg-muted/50 odd:hover:bg-muted/50 border-none hover:bg-transparent"
                            >
                                <TableCell className="py-2.5 font-medium">{blog.id}</TableCell>
                                <TableCell className="py-2.5">{blog.title?.length > 15 ? blog.title?.slice(0, 15) + "..." : blog.title}</TableCell>
                                <TableCell className="py-2.5">
                                    {blog.content?.length > 30 ? blog?.content?.slice(0, 30) + '.....' : blog?.content}
                                </TableCell>
                                <TableCell className="py-2.5 flex items-center gap-2 justify-end">
                                    {/* update blog form */}
                                    <Dialog>
                                        <DialogTrigger
                                            className="flex items-center bg-background py-1 px-2 rounded-md"
                                            onClick={() => handleModal(1, blog)}>
                                            <Edit size={16} className="mr-1" />
                                            Edit
                                        </DialogTrigger>
                                        {isEditModalOpen && <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle></DialogTitle>
                                                <EditBlogForm blog={selectedBlog as Blog} setIsModalOpen={setIsEditModalOpen} />
                                            </DialogHeader>
                                        </DialogContent>}
                                    </Dialog>
                                    {/* delete blog */}
                                    <AlertDialog>
                                        <AlertDialogTrigger
                                            className="flex items-center bg-destructive text-white py-1 px-2 rounded-md"
                                            onClick={() => handleModal(2, blog)}>
                                            <Trash2 size={16} className="mr-1" />
                                            Delete
                                        </AlertDialogTrigger>
                                        {isDeleteModalOpen && <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    This action cannot be undone. This will permanently delete your blog from server.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction onClick={() => handleDeleteBlog(blog?.id)}>Continue</AlertDialogAction>
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
                            <TableCell className="text-right">{blogs?.length} Blogs</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </div>
    )
}
