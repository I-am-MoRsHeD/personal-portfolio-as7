import React from 'react';
import Form from 'next/form'
import SectionTitle from '@/components/shared/SectionTitle';
import { createProject } from '@/actions/create';

const AddProjectForm = () => {
    return (
        <div>
            <SectionTitle title='Add Project' />
            <Form
                action={createProject}
                className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-xl space-y-4"
            >
                {/* Title */}
                <div>
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <input
                        type="text"
                        name="title"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        placeholder="Enter title"
                        required
                    />
                </div>

                {/* description */}
                <div>
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea
                        name="description"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        rows={4}
                        placeholder="Project description"
                        required
                    />
                </div>
                {/* project link and live link */}
                <div className='flex flex-row items-center gap-5'>
                    <div className='flex-1'>
                        <label className="block text-sm font-medium mb-1">Project Link</label>
                        <input
                            type="text"
                            name="projectLink"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                            placeholder="https://github.com/Apollo-Level2-Web-Dev/B5A7"
                            required
                        />
                    </div>
                    <div className='flex-1'>
                        <label className="block text-sm font-medium mb-1">Live Link</label>
                        <input
                            type="text"
                            name="liveLink"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                            placeholder="https://morshed-portfolio.vercel.app"
                            required
                        />
                    </div>
                </div>
                {/* Thumbnail URL */}
                <div>
                    <label className="block text-sm font-medium mb-1">Thumbnail</label>
                    <input
                        type="file"
                        name="thumbnail"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    />
                </div>

                {/* Features */}
                <div>
                    <label className="block text-sm font-medium mb-1">Features(comma seperated)</label>
                    <input
                        type="text"
                        name="features"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        placeholder="features, features, features"
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:opacity-90 transition"
                >
                    Submit
                </button>
            </Form>
        </div>
    );
};

export default AddProjectForm;