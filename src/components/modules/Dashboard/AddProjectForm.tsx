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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionTitle from "@/components/shared/SectionTitle";
import { toast } from "sonner";
import SingleFileUpload from "@/components/SingleFileUpload";
import { FileMetadata } from "@/hooks/use-file-upload";
import { createProjectAction } from "@/actions/create";

const projectSchema = z.object({
    title: z.string().min(2, "Title is required"),
    description: z.string().min(10, "Description is required"),
    projectLink: z.url("Must be a valid URL"),
    liveLink: z.url("Must be a valid URL"),
    features: z.string().optional(),
});

type ProjectFormValues = z.infer<typeof projectSchema>;

const AddProjectForm = () => {
    const [image, setImage] = useState<(File | FileMetadata) | null>();
    const form = useForm<ProjectFormValues>({
        resolver: zodResolver(projectSchema),
        defaultValues: {
            title: "",
            description: "",
            projectLink: "",
            liveLink: "",
            features: ""
        },
    });

    const onSubmit = async (values: ProjectFormValues) => {
        const toastId = toast.loading('Please wait....');
        try {
            const formData = new FormData();

            const rawData = JSON.stringify({
                title: values.title,
                description: values.description,
                projectLink: values.projectLink,
                liveLink: values.liveLink,
                features: values.features
                    ? values.features.split(",").map((f) => f.trim())
                    : [],
            });

            formData.append("file", image as File);
            formData.append("data", rawData);

            const result = await createProjectAction(formData);

            if (result.success) {
                toast.success(result.message, { id: toastId });
                form.reset();
                setImage(null);
            } else {
                toast.error(result.message, { id: toastId });
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong while creating project", { id: toastId });
        }
    };

    return (
        <div>
            <SectionTitle title="Add Project" />
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

                            {/* Description */}
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
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

                            {/* Project + Live Links */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="projectLink"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Project Link</FormLabel>
                                            <FormControl>
                                                <Input placeholder="https://github.com/..." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="liveLink"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Live Link</FormLabel>
                                            <FormControl>
                                                <Input placeholder="https://your-site.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* Features */}
                            <FormField
                                control={form.control}
                                name="features"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Features (comma separated)</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                rows={3}
                                                placeholder="Login system, dashboard, analytics..."
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <SingleFileUpload setImage={setImage} />
                            {/* Submit */}
                            <Button type="submit" className="w-full">
                                Submit Project
                            </Button>
                        </form>

                    </Form>
                </CardContent>
            </Card>
        </div>
    );
};

export default AddProjectForm;
