"use client";

import React, { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import SectionTitle from "../../shared/SectionTitle";
import { toast } from "sonner";
import SingleFileUpload from "../../SingleFileUpload";
import { FileMetadata } from "../../../hooks/use-file-upload";
import { Blog } from "@/types";
import { updateBlogAction } from "../../../actions/update";

const blogSchema = z.object({
    title: z.string().min(2, "Title is required"),
    content: z.string().min(20, "Content is required")
});

type BlogFormValues = z.infer<typeof blogSchema>;

interface EditBlogFormProps {
    blog: Blog;
    setIsModalOpen: (value: boolean) => void;
}

const EditBlogForm: React.FC<EditBlogFormProps> = ({ blog, setIsModalOpen }) => {
    const [image, setImage] = useState<(File | FileMetadata) | null>(null);

    const form = useForm<BlogFormValues>({
        resolver: zodResolver(blogSchema),
        defaultValues: {
            title: blog.title || "",
            content: blog.content || ""
        },
    });

    useEffect(() => {
        form.reset({
            title: blog.title,
            content: blog.content
        });
    }, [blog, form]);

    const onSubmit = async (values: BlogFormValues) => {
        const toastId = toast.loading("Updating blog...");
        try {
            const formData = new FormData();

            const rawData = JSON.stringify({
                title: values.title,
                content: values.content,
            });

            formData.append("data", rawData);

            if (image instanceof File) {
                formData.append("file", image);
            }

            const result = await updateBlogAction(blog.id, formData);

            if (result.success) {
                toast.success(result.message || "Blog updated successfully", { id: toastId });
                setIsModalOpen(false);
            } else {
                toast.error(result.message || "Update failed", { id: toastId });
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong while updating blog", { id: toastId });
        }
    };

    return (
        <div>
            <SectionTitle title="Edit Blog" />
            <Card className="shadow-md overflow-y-auto h-96">
                <CardContent className="p-6">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            {/* Title */}
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter project title" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Content */}
                            <FormField
                                control={form.control}
                                name="content"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Content</FormLabel>
                                        <FormControl>
                                            <Textarea rows={4} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Thumbnail Upload */}
                            <SingleFileUpload image={image} setImage={setImage} />

                            <Button type="submit" className="w-full">
                                Update Blog
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
};

export default EditBlogForm;
