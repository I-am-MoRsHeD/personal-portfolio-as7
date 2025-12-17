import AboutInfo from '../../../components/modules/About/AboutInfo';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About me page',
    description: 'All information about my journey and who i am!'
}

const AboutPage = async () => {

    return (
        <div className='container mx-auto'>
            <AboutInfo />
        </div>
    );
};

export default AboutPage;