import CreateBlogForm from "@/components/modules/Dashboard/CreateBlogForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Create Blog page',
    description: 'Create any blog which i want regarding my learning'
}

const CreateBlogPage = () => {
    return (
        <div>
            <CreateBlogForm />
        </div>
    );
};

export default CreateBlogPage;