// 01320194018
// 01320194003

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
import { Project } from "@/types";
import { updateProjectAction } from "../../../actions/update";

const projectSchema = z.object({
    title: z.string().min(2, "Title is required"),
    description: z.string().min(10, "Description is required"),
    projectLink: z.url("Must be a valid URL"),
    liveLink: z.url("Must be a valid URL"),
    features: z.string().min(1, "Feature cannot be empty"),
});

type ProjectFormValues = z.infer<typeof projectSchema>;

interface EditProjectFormProps {
    project: Project;
    setIsModalOpen: (value: boolean) => void;
}

const EditProjectForm: React.FC<EditProjectFormProps> = ({ project, setIsModalOpen }) => {
    const [image, setImage] = useState<(File | FileMetadata) | null>(null);

    const form = useForm<ProjectFormValues>({
        resolver: zodResolver(projectSchema),
        defaultValues: {
            title: project.title || "",
            description: project.description || "",
            projectLink: project.projectLink || "",
            liveLink: project.liveLink || "",
            features: project.features?.join(", ") || "",
        },
    });

    useEffect(() => {
        form.reset({
            title: project.title,
            description: project.description,
            projectLink: project.projectLink,
            liveLink: project.liveLink,
            features: project.features?.join(", "),
        });
    }, [project, form]);

    const onSubmit = async (values: ProjectFormValues) => {
        const toastId = toast.loading("Updating project...");
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

            formData.append("data", rawData);

            if (image instanceof File) {
                formData.append("file", image);
            }

            const result = await updateProjectAction(project.id, formData);

            if (result.success) {
                toast.success(result.message || "Project updated successfully", { id: toastId });
                setIsModalOpen(false);
            } else {
                toast.error(result.message || "Update failed", { id: toastId });
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong while updating project", { id: toastId });
        }
    };

    return (
        <div>
            <SectionTitle title="Edit Project" />
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

                            {/* Description */}
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea rows={4} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Links */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="projectLink"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Project Link</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
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
                                                <Input {...field} />
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
                                            <Textarea rows={3} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Thumbnail Upload */}
                            <SingleFileUpload image={image} setImage={setImage} />

                            <Button type="submit" className="w-full">
                                Update Project
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
};

export default EditProjectForm;
