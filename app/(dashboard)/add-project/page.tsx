import AddProjectForm from '../../../components/modules/Dashboard/AddProjectForm';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Add Project page',
    description: 'Add project which i have done so far!'
}

const AddProjectPage = () => {
    return (
        <div>
            <AddProjectForm />
        </div>
    );
};

export default AddProjectPage;