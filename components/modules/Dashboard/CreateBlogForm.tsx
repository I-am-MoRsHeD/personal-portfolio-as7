"use client";

import React, { useState } from "react";
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
import { createBlogAction } from "../../../actions/create";

const blogSchema = z.object({
    title: z.string().min(2, "Title is required"),
    content: z.string().min(10, "Content is required"),
    thumbnail: z.string().optional(),
});

type BlogFormValues = z.infer<typeof blogSchema>;

const CreateBlogForm = () => {
    const [image, setImage] = useState<(File | FileMetadata) | null>();
    const form = useForm<BlogFormValues>({
        resolver: zodResolver(blogSchema),
        defaultValues: {
            title: "",
            content: "",
        },
    });

    const onSubmit = async (values: BlogFormValues) => {
        const toastId = toast.loading('Please wait....');
        try {
            const formData = new FormData();

            const rawData = JSON.stringify({
                title: values.title,
                content: values.content
            });

            formData.append("file", image as File);
            formData.append("data", rawData);

            const result = await createBlogAction(formData);

            if (result.success) {
                toast.success(result.message, { id: toastId });
                form.reset();
                setImage(null);
            } else {
                toast.error(result.message, { id: toastId });
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong while creating blog", { id: toastId });
        }
    };

    return (
        <div>
            <SectionTitle title="Create Your Dangerous Blog" />
            <Card className="max-w-4xl mx-auto shadow-md">
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
                                            <Textarea
                                                rows={4}
                                                placeholder="Write your project description..."
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <SingleFileUpload setImage={setImage} image={image} />
                            {/* Submit */}
                            <Button type="submit" className="w-full">
                                Create Blog
                            </Button>
                        </form>

                    </Form>
                </CardContent>
            </Card>
        </div>
    );
};

export default CreateBlogForm;
